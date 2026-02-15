const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mapbox-gl-V3smlL-h.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ad={exports:{}},Io={};var ox;function FS(){if(ox)return Io;ox=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var lx;function zS(){return lx||(lx=1,Ad.exports=FS()),Ad.exports}var A=zS(),Rd={exports:{}},dt={};var cx;function IS(){if(cx)return dt;cx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function _(O,$,xe){this.props=O,this.context=$,this.refs=S,this.updater=xe||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=_.prototype;function U(O,$,xe){this.props=O,this.context=$,this.refs=S,this.updater=xe||E}var P=U.prototype=new D;P.constructor=U,T(P,_.prototype),P.isPureReactComponent=!0;var z=Array.isArray;function I(){}var F={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function C(O,$,xe){var Re=xe.ref;return{$$typeof:r,type:O,key:$,ref:Re!==void 0?Re:null,props:xe}}function N(O,$){return C(O.type,$,O.props)}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function se(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(xe){return $[xe]})}var oe=/\/+/g;function me(O,$){return typeof O=="object"&&O!==null&&O.key!=null?se(""+O.key):$.toString(36)}function ue(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function($){O.status==="pending"&&(O.status="fulfilled",O.value=$)},function($){O.status==="pending"&&(O.status="rejected",O.reason=$)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function B(O,$,xe,Re,Ge){var ne=typeof O;(ne==="undefined"||ne==="boolean")&&(O=null);var he=!1;if(O===null)he=!0;else switch(ne){case"bigint":case"string":case"number":he=!0;break;case"object":switch(O.$$typeof){case r:case e:he=!0;break;case x:return he=O._init,B(he(O._payload),$,xe,Re,Ge)}}if(he)return Ge=Ge(O),he=Re===""?"."+me(O,0):Re,z(Ge)?(xe="",he!=null&&(xe=he.replace(oe,"$&/")+"/"),B(Ge,$,xe,"",function(Ce){return Ce})):Ge!=null&&(k(Ge)&&(Ge=N(Ge,xe+(Ge.key==null||O&&O.key===Ge.key?"":(""+Ge.key).replace(oe,"$&/")+"/")+he)),$.push(Ge)),1;he=0;var Le=Re===""?".":Re+":";if(z(O))for(var Me=0;Me<O.length;Me++)Re=O[Me],ne=Le+me(Re,Me),he+=B(Re,$,xe,ne,Ge);else if(Me=M(O),typeof Me=="function")for(O=Me.call(O),Me=0;!(Re=O.next()).done;)Re=Re.value,ne=Le+me(Re,Me++),he+=B(Re,$,xe,ne,Ge);else if(ne==="object"){if(typeof O.then=="function")return B(ue(O),$,xe,Re,Ge);throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return he}function G(O,$,xe){if(O==null)return O;var Re=[],Ge=0;return B(O,Re,"","",function(ne){return $.call(xe,ne,Ge++)}),Re}function te(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(xe){(O._status===0||O._status===-1)&&(O._status=1,O._result=xe)},function(xe){(O._status===0||O._status===-1)&&(O._status=2,O._result=xe)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var be=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ye={map:G,forEach:function(O,$,xe){G(O,function(){$.apply(this,arguments)},xe)},count:function(O){var $=0;return G(O,function(){$++}),$},toArray:function(O){return G(O,function($){return $})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return dt.Activity=g,dt.Children=ye,dt.Component=_,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=U,dt.StrictMode=s,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,dt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return F.H.useMemoCache(O)}},dt.cache=function(O){return function(){return O.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(O,$,xe){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Re=T({},O.props),Ge=O.key;if($!=null)for(ne in $.key!==void 0&&(Ge=""+$.key),$)!Y.call($,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&$.ref===void 0||(Re[ne]=$[ne]);var ne=arguments.length-2;if(ne===1)Re.children=xe;else if(1<ne){for(var he=Array(ne),Le=0;Le<ne;Le++)he[Le]=arguments[Le+2];Re.children=he}return C(O.type,Ge,Re)},dt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},dt.createElement=function(O,$,xe){var Re,Ge={},ne=null;if($!=null)for(Re in $.key!==void 0&&(ne=""+$.key),$)Y.call($,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Ge[Re]=$[Re]);var he=arguments.length-2;if(he===1)Ge.children=xe;else if(1<he){for(var Le=Array(he),Me=0;Me<he;Me++)Le[Me]=arguments[Me+2];Ge.children=Le}if(O&&O.defaultProps)for(Re in he=O.defaultProps,he)Ge[Re]===void 0&&(Ge[Re]=he[Re]);return C(O,ne,Ge)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(O){return{$$typeof:h,render:O}},dt.isValidElement=k,dt.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:te}},dt.memo=function(O,$){return{$$typeof:p,type:O,compare:$===void 0?null:$}},dt.startTransition=function(O){var $=F.T,xe={};F.T=xe;try{var Re=O(),Ge=F.S;Ge!==null&&Ge(xe,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(I,be)}catch(ne){be(ne)}finally{$!==null&&xe.types!==null&&($.types=xe.types),F.T=$}},dt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},dt.use=function(O){return F.H.use(O)},dt.useActionState=function(O,$,xe){return F.H.useActionState(O,$,xe)},dt.useCallback=function(O,$){return F.H.useCallback(O,$)},dt.useContext=function(O){return F.H.useContext(O)},dt.useDebugValue=function(){},dt.useDeferredValue=function(O,$){return F.H.useDeferredValue(O,$)},dt.useEffect=function(O,$){return F.H.useEffect(O,$)},dt.useEffectEvent=function(O){return F.H.useEffectEvent(O)},dt.useId=function(){return F.H.useId()},dt.useImperativeHandle=function(O,$,xe){return F.H.useImperativeHandle(O,$,xe)},dt.useInsertionEffect=function(O,$){return F.H.useInsertionEffect(O,$)},dt.useLayoutEffect=function(O,$){return F.H.useLayoutEffect(O,$)},dt.useMemo=function(O,$){return F.H.useMemo(O,$)},dt.useOptimistic=function(O,$){return F.H.useOptimistic(O,$)},dt.useReducer=function(O,$,xe){return F.H.useReducer(O,$,xe)},dt.useRef=function(O){return F.H.useRef(O)},dt.useState=function(O){return F.H.useState(O)},dt.useSyncExternalStore=function(O,$,xe){return F.H.useSyncExternalStore(O,$,xe)},dt.useTransition=function(){return F.H.useTransition()},dt.version="19.2.4",dt}var ux;function fp(){return ux||(ux=1,Rd.exports=IS()),Rd.exports}var q=fp(),wd={exports:{}},Ho={},Cd={exports:{}},Dd={};var fx;function HS(){return fx||(fx=1,(function(r){function e(B,G){var te=B.length;B.push(G);e:for(;0<te;){var be=te-1>>>1,ye=B[be];if(0<l(ye,G))B[be]=G,B[te]=ye,te=be;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var G=B[0],te=B.pop();if(te!==G){B[0]=te;e:for(var be=0,ye=B.length,O=ye>>>1;be<O;){var $=2*(be+1)-1,xe=B[$],Re=$+1,Ge=B[Re];if(0>l(xe,te))Re<ye&&0>l(Ge,xe)?(B[be]=Ge,B[Re]=te,be=Re):(B[be]=xe,B[$]=te,be=$);else if(Re<ye&&0>l(Ge,te))B[be]=Ge,B[Re]=te,be=Re;else break e}}return G}function l(B,G){var te=B.sortIndex-G.sortIndex;return te!==0?te:B.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],x=1,g=null,v=3,M=!1,E=!1,T=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function P(B){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=B)s(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function z(B){if(T=!1,P(B),!E)if(i(m)!==null)E=!0,I||(I=!0,se());else{var G=i(p);G!==null&&ue(z,G.startTime-B)}}var I=!1,F=-1,Y=5,C=-1;function N(){return S?!0:!(r.unstable_now()-C<Y)}function k(){if(S=!1,I){var B=r.unstable_now();C=B;var G=!0;try{e:{E=!1,T&&(T=!1,D(F),F=-1),M=!0;var te=v;try{t:{for(P(B),g=i(m);g!==null&&!(g.expirationTime>B&&N());){var be=g.callback;if(typeof be=="function"){g.callback=null,v=g.priorityLevel;var ye=be(g.expirationTime<=B);if(B=r.unstable_now(),typeof ye=="function"){g.callback=ye,P(B),G=!0;break t}g===i(m)&&s(m),P(B)}else s(m);g=i(m)}if(g!==null)G=!0;else{var O=i(p);O!==null&&ue(z,O.startTime-B),G=!1}}break e}finally{g=null,v=te,M=!1}G=void 0}}finally{G?se():I=!1}}}var se;if(typeof U=="function")se=function(){U(k)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,me=oe.port2;oe.port1.onmessage=k,se=function(){me.postMessage(null)}}else se=function(){_(k,0)};function ue(B,G){F=_(function(){B(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(B){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var te=v;v=G;try{return B()}finally{v=te}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var te=v;v=B;try{return G()}finally{v=te}},r.unstable_scheduleCallback=function(B,G,te){var be=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?be+te:be):te=be,B){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=te+ye,B={id:x++,callback:G,priorityLevel:B,startTime:te,expirationTime:ye,sortIndex:-1},te>be?(B.sortIndex=te,e(p,B),i(m)===null&&B===i(p)&&(T?(D(F),F=-1):T=!0,ue(z,te-be))):(B.sortIndex=ye,e(m,B),E||M||(E=!0,I||(I=!0,se()))),B},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(B){var G=v;return function(){var te=v;v=G;try{return B.apply(this,arguments)}finally{v=te}}}})(Dd)),Dd}var dx;function GS(){return dx||(dx=1,Cd.exports=HS()),Cd.exports}var Nd={exports:{}},Nn={};var hx;function VS(){if(hx)return Nn;hx=1;var r=fp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Nn.flushSync=function(m){var p=f.T,x=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=x,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,x){return f.H.useFormState(m,p,x)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var px;function kS(){if(px)return Nd.exports;px=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Nd.exports=VS(),Nd.exports}var mx;function jS(){if(mx)return Ho;mx=1;var r=GS(),e=fp(),i=kS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=d;break}if(R===o){y=!0,o=u,a=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===a){y=!0,a=d,o=u;break}if(R===o){y=!0,o=d,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case z:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case Y:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var ue=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},be=[],ye=-1;function O(t){return{current:t}}function $(t){0>ye||(t.current=be[ye],be[ye]=null,ye--)}function xe(t,n){ye++,be[ye]=t.current,t.current=n}var Re=O(null),Ge=O(null),ne=O(null),he=O(null);function Le(t,n){switch(xe(ne,n),xe(Ge,t),xe(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Dg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Dg(n),t=Ng(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(Re),xe(Re,t)}function Me(){$(Re),$(Ge),$(ne)}function Ce(t){t.memoizedState!==null&&xe(he,t);var n=Re.current,a=Ng(n,t.type);n!==a&&(xe(Ge,t),xe(Re,a))}function Je(t){Ge.current===t&&($(Re),$(Ge)),he.current===t&&($(he),Po._currentValue=te)}var Rt,ot;function nt(t){if(Rt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Rt=n&&n[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+t+ot}var vt=!1;function lt(t,n){if(!t||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(fe){var ae=fe}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(fe){ae=fe}t.call(_e.prototype)}}else{try{throw Error()}catch(fe){ae=fe}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(fe){if(fe&&ae&&typeof fe.stack=="string")return[fe.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var H=y.split(`
`),ee=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ee.length)for(o=H.length-1,u=ee.length-1;1<=o&&0<=u&&H[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ee[u]){var pe=`
`+H[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?nt(a):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return nt(t.type);case 16:return nt("Lazy");case 13:return t.child!==n&&n!==null?nt("Suspense Fallback"):nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return lt(t.type,!1);case 11:return lt(t.type.render,!1);case 1:return lt(t.type,!0);case 31:return nt("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=Kt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Xt=Object.prototype.hasOwnProperty,Ze=r.unstable_scheduleCallback,De=r.unstable_cancelCallback,Xe=r.unstable_shouldYield,L=r.unstable_requestPaint,b=r.unstable_now,X=r.unstable_getCurrentPriorityLevel,de=r.unstable_ImmediatePriority,ve=r.unstable_UserBlockingPriority,ce=r.unstable_NormalPriority,je=r.unstable_LowPriority,Ue=r.unstable_IdlePriority,We=r.log,at=r.unstable_setDisableYieldValue,Ee=null,Ae=null;function Ve(t){if(typeof We=="function"&&at(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Ee,t)}catch{}}var Ie=Math.clz32?Math.clz32:W,Oe=Math.log,pt=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Oe(t)/pt|0)|0}var Be=256,we=262144,He=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Te(o):(y&=R,y!==0?u=Te(y):a||(a=R&~t,a!==0&&(u=Te(a))))):(R=o&~d,R!==0?u=Te(R):y!==0?u=Te(y):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ne(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ct(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var t=He;return He<<=1,(He&62914560)===0&&(He=4194304),t}function Tt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function _i(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,ee=t.hiddenUpdates;for(a=y&~a;0<a;){var pe=31-Ie(a),_e=1<<pe;R[pe]=0,H[pe]=-1;var ae=ee[pe];if(ae!==null)for(ee[pe]=null,pe=0;pe<ae.length;pe++){var fe=ae[pe];fe!==null&&(fe.lane&=-536870913)}a&=~_e}o!==0&&ml(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function ml(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ie(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ws(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ie(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function zr(t,n){var a=n&-n;return a=(a&42)!==0?1:qs(a),(a&(t.suspendedLanes|n))!==0?0:a}function qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ir(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ys(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:ex(t.type))}function Ui(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var ai=Math.random().toString(36).slice(2),on="__reactFiber$"+ai,_n="__reactProps$"+ai,yi="__reactContainer$"+ai,Hr="__reactEvents$"+ai,Gr="__reactListeners$"+ai,gl="__reactHandles$"+ai,Zs="__reactResources$"+ai,or="__reactMarker$"+ai;function Ks(t){delete t[on],delete t[_n],delete t[Hr],delete t[Gr],delete t[gl]}function Ta(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=zg(t);t!==null;){if(a=t[on])return a;t=zg(t)}return n}t=a,a=t.parentNode}return null}function Aa(t){if(t=t[on]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function lr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ra(t){var n=t[Zs];return n||(n=t[Zs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function w(t){t[or]=!0}var Z=new Set,le={};function ie(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(le[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var Pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Fe={};function qe(t){return Xt.call(Fe,t)?!0:Xt.call(ke,t)?!1:Pe.test(t)?Fe[t]=!0:(ke[t]=!0,!1)}function Ke(t,n,a){if(qe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function it(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function rt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qt(t){if(!t._valueTracker){var n=Nt(t)?"checked":"value";t._valueTracker=Qt(t,n,""+t[n])}}function Pt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Nt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function et(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ut=/[\n"\\]/g;function ft(t){return t.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(t,n,a,o,u,d,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+rt(n)):t.value!==""+rt(n)&&(t.value=""+rt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,y,rt(n)):a!=null?Sn(t,y,rt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+rt(R):t.removeAttribute("name")}function Wi(t,n,a,o,u,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){qt(t);return}a=a!=null?""+rt(a):"",n=n!=null?""+rt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),qt(t)}function Sn(t,n,a){n==="number"&&et(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ri(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+rt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ft(t,n,a){if(n!=null&&(n=""+rt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+rt(a):""}function Mn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ue(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=rt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),qt(t)}function hn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vr(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&En(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&En(t,d,n[d])}function Si(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var L_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),O_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(t){return O_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var Mu=null;function bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,jr=null;function Cp(t){var n=Aa(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;e:switch(t=n.stateNode,n.type){case"input":if(yn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[_n]||null;if(!u)throw Error(s(90));yn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Pt(o)}break e;case"textarea":Ft(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ri(t,!!a.multiple,n,!1)}}}var Eu=!1;function Dp(t,n,a){if(Eu)return t(n,a);Eu=!0;try{var o=t(n);return o}finally{if(Eu=!1,(kr!==null||jr!==null)&&(ac(),kr&&(n=kr,t=jr,jr=kr=null,Cp(n),t)))for(n=0;n<t.length;n++)Cp(t[n])}}function Qs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=!1;if(Yi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Tu=!1}var wa=null,Au=null,vl=null;function Np(){if(vl)return vl;var t,n=Au,a=n.length,o,u="value"in wa?wa.value:wa.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return vl=u.slice(t,1<o?1-o:void 0)}function _l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function Up(){return!1}function Hn(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?yl:Up,this.isPropagationStopped=Up,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Hn(cr),$s=g({},cr,{view:0,detail:0}),P_=Hn($s),Ru,wu,eo,Ml=g({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Ru=t.screenX-eo.screenX,wu=t.screenY-eo.screenY):wu=Ru=0,eo=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:wu}}),Lp=Hn(Ml),B_=g({},Ml,{dataTransfer:0}),F_=Hn(B_),z_=g({},$s,{relatedTarget:0}),Cu=Hn(z_),I_=g({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),H_=Hn(I_),G_=g({},cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V_=Hn(G_),k_=g({},cr,{data:0}),Op=Hn(k_),j_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=W_[t])?!!n[t]:!1}function Du(){return q_}var Y_=g({},$s,{key:function(t){if(t.key){var n=j_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?X_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Z_=Hn(Y_),K_=g({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Hn(K_),Q_=g({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),J_=Hn(Q_),$_=g({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ey=Hn($_),ty=g({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ny=Hn(ty),iy=g({},cr,{newState:0,oldState:0}),ay=Hn(iy),ry=[9,13,27,32],Nu=Yi&&"CompositionEvent"in window,to=null;Yi&&"documentMode"in document&&(to=document.documentMode);var sy=Yi&&"TextEvent"in window&&!to,Bp=Yi&&(!Nu||to&&8<to&&11>=to),Fp=" ",zp=!1;function Ip(t,n){switch(t){case"keyup":return ry.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function oy(t,n){switch(t){case"compositionend":return Hp(n);case"keypress":return n.which!==32?null:(zp=!0,Fp);case"textInput":return t=n.data,t===Fp&&zp?null:t;default:return null}}function ly(t,n){if(Xr)return t==="compositionend"||!Nu&&Ip(t,n)?(t=Np(),vl=Au=wa=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bp&&n.locale!=="ko"?null:n.data;default:return null}}var cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!cy[t.type]:n==="textarea"}function Vp(t,n,a,o){kr?jr?jr.push(o):jr=[o]:kr=o,n=fc(n,"onChange"),0<n.length&&(a=new Sl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var no=null,io=null;function uy(t){Eg(t,0)}function bl(t){var n=lr(t);if(Pt(n))return t}function kp(t,n){if(t==="change")return n}var jp=!1;if(Yi){var Uu;if(Yi){var Lu="oninput"in document;if(!Lu){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Lu=typeof Xp.oninput=="function"}Uu=Lu}else Uu=!1;jp=Uu&&(!document.documentMode||9<document.documentMode)}function Wp(){no&&(no.detachEvent("onpropertychange",qp),io=no=null)}function qp(t){if(t.propertyName==="value"&&bl(io)){var n=[];Vp(n,io,t,bu(t)),Dp(uy,n)}}function fy(t,n,a){t==="focusin"?(Wp(),no=n,io=a,no.attachEvent("onpropertychange",qp)):t==="focusout"&&Wp()}function dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(io)}function hy(t,n){if(t==="click")return bl(n)}function py(t,n){if(t==="input"||t==="change")return bl(n)}function my(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:my;function ao(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Xt.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function Yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,n){var a=Yp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yp(a)}}function Kp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Kp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=et(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=et(t.document)}return n}function Ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var gy=Yi&&"documentMode"in document&&11>=document.documentMode,Wr=null,Pu=null,ro=null,Bu=!1;function Jp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bu||Wr==null||Wr!==et(o)||(o=Wr,"selectionStart"in o&&Ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&ao(ro,o)||(ro=o,o=fc(Pu,"onSelect"),0<o.length&&(n=new Sl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Wr)))}function ur(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var qr={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionrun:ur("Transition","TransitionRun"),transitionstart:ur("Transition","TransitionStart"),transitioncancel:ur("Transition","TransitionCancel"),transitionend:ur("Transition","TransitionEnd")},Fu={},$p={};Yi&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function fr(t){if(Fu[t])return Fu[t];if(!qr[t])return t;var n=qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in $p)return Fu[t]=n[a];return t}var em=fr("animationend"),tm=fr("animationiteration"),nm=fr("animationstart"),xy=fr("transitionrun"),vy=fr("transitionstart"),_y=fr("transitioncancel"),im=fr("transitionend"),am=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Mi(t,n){am.set(t,n),ie(n,[t])}var El=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],Yr=0,Iu=0;function Tl(){for(var t=Yr,n=Iu=Yr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&rm(a,u,d)}}function Al(t,n,a,o){si[Yr++]=t,si[Yr++]=n,si[Yr++]=a,si[Yr++]=o,Iu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Hu(t,n,a,o){return Al(t,n,a,o),Rl(t)}function dr(t,n){return Al(t,null,null,n),Rl(t)}function rm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Ie(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Rl(t){if(50<wo)throw wo=0,Kf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zr={};function yy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,o){return new yy(t,n,a,o)}function Gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function sm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function wl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Gu(t)&&(y=1);else if(typeof t=="string")y=TS(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Zn(31,a,n,u),t.elementType=C,t.lanes=d,t;case T:return hr(a.children,u,d,n);case S:y=8,u|=24;break;case _:return t=Zn(12,a,n,u|2),t.elementType=_,t.lanes=d,t;case z:return t=Zn(13,a,n,u),t.elementType=z,t.lanes=d,t;case I:return t=Zn(19,a,n,u),t.elementType=I,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:y=10;break e;case D:y=9;break e;case P:y=11;break e;case F:y=14;break e;case Y:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Zn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function hr(t,n,a,o){return t=Zn(7,t,o,n),t.lanes=a,t}function Vu(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function om(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function ku(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var lm=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=lm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},lm.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Kr=[],Qr=0,Cl=null,so=0,li=[],ci=0,Ca=null,Li=1,Oi="";function Ki(t,n){Kr[Qr++]=so,Kr[Qr++]=Cl,Cl=t,so=n}function cm(t,n,a){li[ci++]=Li,li[ci++]=Oi,li[ci++]=Ca,Ca=t;var o=Li;t=Oi;var u=32-Ie(o)-1;o&=~(1<<u),a+=1;var d=32-Ie(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Li=1<<32-Ie(n)+u|a<<u|o,Oi=d+t}else Li=1<<d|a<<u|o,Oi=t}function ju(t){t.return!==null&&(Ki(t,1),cm(t,1,0))}function Xu(t){for(;t===Cl;)Cl=Kr[--Qr],Kr[Qr]=null,so=Kr[--Qr],Kr[Qr]=null;for(;t===Ca;)Ca=li[--ci],li[ci]=null,Oi=li[--ci],li[ci]=null,Li=li[--ci],li[ci]=null}function um(t,n){li[ci++]=Li,li[ci++]=Oi,li[ci++]=Ca,Li=n.id,Oi=n.overflow,Ca=t}var Tn=null,Yt=null,bt=!1,Da=null,ui=!1,Wu=Error(s(519));function Na(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(oi(n,t)),Wu}function fm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[_n]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<Do.length;a++)yt(Do[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Wi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||wg(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Na(t,!0)}function dm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Tn=Tn.return}}function Jr(t){if(t!==Tn)return!1;if(!bt)return dm(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||fd(t.type,t.memoizedProps)),a=!a),a&&Yt&&Na(t),dm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=Fg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=Fg(t)}else n===27?(n=Yt,Xa(t.type)?(t=gd,gd=null,Yt=t):Yt=n):Yt=Tn?di(t.stateNode.nextSibling):null;return!0}function pr(){Yt=Tn=null,bt=!1}function qu(){var t=Da;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Da=null),t}function oo(t){Da===null?Da=[t]:Da.push(t)}var Yu=O(null),mr=null,Qi=null;function Ua(t,n,a){xe(Yu,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=Yu.current,$(Yu)}function Zu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ku(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Zu(d.return,a,t),o||(y=null);break e}d=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Zu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function $r(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;Yn(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===he.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Po):t=[Po])}u=u.return}t!==null&&Ku(n,t,a,o),n.flags|=262144}function Dl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gr(t){mr=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return hm(mr,t)}function Nl(t,n){return mr===null&&gr(t),hm(t,n)}function hm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(s(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var Sy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},My=r.unstable_scheduleCallback,by=r.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new Sy,data:new Map,refCount:0}}function lo(t){t.refCount--,t.refCount===0&&My(by,function(){t.controller.abort()})}var co=null,Ju=0,es=0,ts=null;function Ey(t,n){if(co===null){var a=co=[];Ju=0,es=nd(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ju++,n.then(pm,pm),n}function pm(){if(--Ju===0&&co!==null){ts!==null&&(ts.status="fulfilled");var t=co;co=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ty(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var mm=B.S;B.S=function(t,n){J0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ey(t,n),mm!==null&&mm(t,n)};var xr=O(null);function $u(){var t=xr.current;return t!==null?t:Wt.pooledCache}function Ul(t,n){n===null?xe(xr,xr.current):xe(xr,n.pool)}function gm(){var t=$u();return t===null?null:{parent:ln._currentValue,pool:t}}var ns=Error(s(460)),ef=Error(s(474)),Ll=Error(s(542)),Ol={then:function(){}};function xm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t}throw _r=n,ns}}function vr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_r=a,ns):a}}var _r=null;function _m(){if(_r===null)throw Error(s(459));var t=_r;return _r=null,t}function ym(t){if(t===ns||t===Ll)throw Error(s(483))}var is=null,uo=0;function Pl(t){var n=uo;return uo+=1,is===null&&(is=[]),vm(is,t,n)}function fo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Bl(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sm(t){function n(K,j){if(t){var J=K.deletions;J===null?(K.deletions=[j],K.flags|=16):J.push(j)}}function a(K,j){if(!t)return null;for(;j!==null;)n(K,j),j=j.sibling;return null}function o(K){for(var j=new Map;K!==null;)K.key!==null?j.set(K.key,K):j.set(K.index,K),K=K.sibling;return j}function u(K,j){return K=Zi(K,j),K.index=0,K.sibling=null,K}function d(K,j,J){return K.index=J,t?(J=K.alternate,J!==null?(J=J.index,J<j?(K.flags|=67108866,j):J):(K.flags|=67108866,j)):(K.flags|=1048576,j)}function y(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,j,J,ge){return j===null||j.tag!==6?(j=Vu(J,K.mode,ge),j.return=K,j):(j=u(j,J),j.return=K,j)}function H(K,j,J,ge){var tt=J.type;return tt===T?pe(K,j,J.props.children,ge,J.key):j!==null&&(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Y&&vr(tt)===j.type)?(j=u(j,J.props),fo(j,J),j.return=K,j):(j=wl(J.type,J.key,J.props,null,K.mode,ge),fo(j,J),j.return=K,j)}function ee(K,j,J,ge){return j===null||j.tag!==4||j.stateNode.containerInfo!==J.containerInfo||j.stateNode.implementation!==J.implementation?(j=ku(J,K.mode,ge),j.return=K,j):(j=u(j,J.children||[]),j.return=K,j)}function pe(K,j,J,ge,tt){return j===null||j.tag!==7?(j=hr(J,K.mode,ge,tt),j.return=K,j):(j=u(j,J),j.return=K,j)}function _e(K,j,J){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Vu(""+j,K.mode,J),j.return=K,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return J=wl(j.type,j.key,j.props,null,K.mode,J),fo(J,j),J.return=K,J;case E:return j=ku(j,K.mode,J),j.return=K,j;case Y:return j=vr(j),_e(K,j,J)}if(ue(j)||se(j))return j=hr(j,K.mode,J,null),j.return=K,j;if(typeof j.then=="function")return _e(K,Pl(j),J);if(j.$$typeof===U)return _e(K,Nl(K,j),J);Bl(K,j)}return null}function ae(K,j,J,ge){var tt=j!==null?j.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return tt!==null?null:R(K,j,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===tt?H(K,j,J,ge):null;case E:return J.key===tt?ee(K,j,J,ge):null;case Y:return J=vr(J),ae(K,j,J,ge)}if(ue(J)||se(J))return tt!==null?null:pe(K,j,J,ge,null);if(typeof J.then=="function")return ae(K,j,Pl(J),ge);if(J.$$typeof===U)return ae(K,j,Nl(K,J),ge);Bl(K,J)}return null}function fe(K,j,J,ge,tt){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return K=K.get(J)||null,R(j,K,""+ge,tt);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return K=K.get(ge.key===null?J:ge.key)||null,H(j,K,ge,tt);case E:return K=K.get(ge.key===null?J:ge.key)||null,ee(j,K,ge,tt);case Y:return ge=vr(ge),fe(K,j,J,ge,tt)}if(ue(ge)||se(ge))return K=K.get(J)||null,pe(j,K,ge,tt,null);if(typeof ge.then=="function")return fe(K,j,J,Pl(ge),tt);if(ge.$$typeof===U)return fe(K,j,J,Nl(j,ge),tt);Bl(j,ge)}return null}function Ye(K,j,J,ge){for(var tt=null,wt=null,$e=j,mt=j=0,Mt=null;$e!==null&&mt<J.length;mt++){$e.index>mt?(Mt=$e,$e=null):Mt=$e.sibling;var Ct=ae(K,$e,J[mt],ge);if(Ct===null){$e===null&&($e=Mt);break}t&&$e&&Ct.alternate===null&&n(K,$e),j=d(Ct,j,mt),wt===null?tt=Ct:wt.sibling=Ct,wt=Ct,$e=Mt}if(mt===J.length)return a(K,$e),bt&&Ki(K,mt),tt;if($e===null){for(;mt<J.length;mt++)$e=_e(K,J[mt],ge),$e!==null&&(j=d($e,j,mt),wt===null?tt=$e:wt.sibling=$e,wt=$e);return bt&&Ki(K,mt),tt}for($e=o($e);mt<J.length;mt++)Mt=fe($e,K,mt,J[mt],ge),Mt!==null&&(t&&Mt.alternate!==null&&$e.delete(Mt.key===null?mt:Mt.key),j=d(Mt,j,mt),wt===null?tt=Mt:wt.sibling=Mt,wt=Mt);return t&&$e.forEach(function(Ka){return n(K,Ka)}),bt&&Ki(K,mt),tt}function st(K,j,J,ge){if(J==null)throw Error(s(151));for(var tt=null,wt=null,$e=j,mt=j=0,Mt=null,Ct=J.next();$e!==null&&!Ct.done;mt++,Ct=J.next()){$e.index>mt?(Mt=$e,$e=null):Mt=$e.sibling;var Ka=ae(K,$e,Ct.value,ge);if(Ka===null){$e===null&&($e=Mt);break}t&&$e&&Ka.alternate===null&&n(K,$e),j=d(Ka,j,mt),wt===null?tt=Ka:wt.sibling=Ka,wt=Ka,$e=Mt}if(Ct.done)return a(K,$e),bt&&Ki(K,mt),tt;if($e===null){for(;!Ct.done;mt++,Ct=J.next())Ct=_e(K,Ct.value,ge),Ct!==null&&(j=d(Ct,j,mt),wt===null?tt=Ct:wt.sibling=Ct,wt=Ct);return bt&&Ki(K,mt),tt}for($e=o($e);!Ct.done;mt++,Ct=J.next())Ct=fe($e,K,mt,Ct.value,ge),Ct!==null&&(t&&Ct.alternate!==null&&$e.delete(Ct.key===null?mt:Ct.key),j=d(Ct,j,mt),wt===null?tt=Ct:wt.sibling=Ct,wt=Ct);return t&&$e.forEach(function(BS){return n(K,BS)}),bt&&Ki(K,mt),tt}function kt(K,j,J,ge){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:e:{for(var tt=J.key;j!==null;){if(j.key===tt){if(tt=J.type,tt===T){if(j.tag===7){a(K,j.sibling),ge=u(j,J.props.children),ge.return=K,K=ge;break e}}else if(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Y&&vr(tt)===j.type){a(K,j.sibling),ge=u(j,J.props),fo(ge,J),ge.return=K,K=ge;break e}a(K,j);break}else n(K,j);j=j.sibling}J.type===T?(ge=hr(J.props.children,K.mode,ge,J.key),ge.return=K,K=ge):(ge=wl(J.type,J.key,J.props,null,K.mode,ge),fo(ge,J),ge.return=K,K=ge)}return y(K);case E:e:{for(tt=J.key;j!==null;){if(j.key===tt)if(j.tag===4&&j.stateNode.containerInfo===J.containerInfo&&j.stateNode.implementation===J.implementation){a(K,j.sibling),ge=u(j,J.children||[]),ge.return=K,K=ge;break e}else{a(K,j);break}else n(K,j);j=j.sibling}ge=ku(J,K.mode,ge),ge.return=K,K=ge}return y(K);case Y:return J=vr(J),kt(K,j,J,ge)}if(ue(J))return Ye(K,j,J,ge);if(se(J)){if(tt=se(J),typeof tt!="function")throw Error(s(150));return J=tt.call(J),st(K,j,J,ge)}if(typeof J.then=="function")return kt(K,j,Pl(J),ge);if(J.$$typeof===U)return kt(K,j,Nl(K,J),ge);Bl(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,j!==null&&j.tag===6?(a(K,j.sibling),ge=u(j,J),ge.return=K,K=ge):(a(K,j),ge=Vu(J,K.mode,ge),ge.return=K,K=ge),y(K)):a(K,j)}return function(K,j,J,ge){try{uo=0;var tt=kt(K,j,J,ge);return is=null,tt}catch($e){if($e===ns||$e===Ll)throw $e;var wt=Zn(29,$e,null,K.mode);return wt.lanes=ge,wt.return=K,wt}}}var yr=Sm(!0),Mm=Sm(!1),La=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Rl(t),rm(t,null,a),n}return Al(t,o,n,a),Rl(t)}function ho(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ws(t,a)}}function af(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var rf=!1;function po(){if(rf){var t=ts;if(t!==null)throw t}}function mo(t,n,a,o){rf=!1;var u=t.updateQueue;La=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ee=H.next;H.next=null,y===null?d=ee:y.next=ee,y=H;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,R=pe.lastBaseUpdate,R!==y&&(R===null?pe.firstBaseUpdate=ee:R.next=ee,pe.lastBaseUpdate=H))}if(d!==null){var _e=u.baseState;y=0,pe=ee=H=null,R=d;do{var ae=R.lane&-536870913,fe=ae!==R.lane;if(fe?(St&ae)===ae:(o&ae)===ae){ae!==0&&ae===es&&(rf=!0),pe!==null&&(pe=pe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ye=t,st=R;ae=n;var kt=a;switch(st.tag){case 1:if(Ye=st.payload,typeof Ye=="function"){_e=Ye.call(kt,_e,ae);break e}_e=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=st.payload,ae=typeof Ye=="function"?Ye.call(kt,_e,ae):Ye,ae==null)break e;_e=g({},_e,ae);break e;case 2:La=!0}}ae=R.callback,ae!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[ae]:fe.push(ae))}else fe={lane:ae,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pe===null?(ee=pe=fe,H=_e):pe=pe.next=fe,y|=ae;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;fe=R,R=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);pe===null&&(H=_e),u.baseState=H,u.firstBaseUpdate=ee,u.lastBaseUpdate=pe,d===null&&(u.shared.lanes=0),Ha|=y,t.lanes=y,t.memoizedState=_e}}function bm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Em(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)bm(a[t],n)}var as=O(null),Fl=O(0);function Tm(t,n){t=oa,xe(Fl,t),xe(as,n),oa=t|n.baseLanes}function sf(){xe(Fl,oa),xe(as,as.current)}function of(){oa=Fl.current,$(as),$(Fl)}var Kn=O(null),fi=null;function Ba(t){var n=t.alternate;xe(an,an.current&1),xe(Kn,t),fi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(fi=t)}function lf(t){xe(an,an.current),xe(Kn,t),fi===null&&(fi=t)}function Am(t){t.tag===22?(xe(an,an.current),xe(Kn,t),fi===null&&(fi=t)):Fa()}function Fa(){xe(an,an.current),xe(Kn,Kn.current)}function Qn(t){$(Kn),fi===t&&(fi=null),$(an)}var an=O(0);function zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pd(a)||md(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,ht=null,Gt=null,cn=null,Il=!1,rs=!1,Sr=!1,Hl=0,go=0,ss=null,Ay=0;function en(){throw Error(s(321))}function cf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function uf(t,n,a,o,u,d){return $i=d,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?c0:Tf,Sr=!1,d=a(o,u),Sr=!1,rs&&(d=wm(n,a,o,u)),Rm(t),d}function Rm(t){B.H=_o;var n=Gt!==null&&Gt.next!==null;if($i=0,cn=Gt=ht=null,Il=!1,go=0,ss=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&Dl(t)&&(un=!0))}function wm(t,n,a,o){ht=t;var u=0;do{if(rs&&(ss=null),go=0,rs=!1,25<=u)throw Error(s(301));if(u+=1,cn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=u0,d=n(a,o)}while(rs);return d}function Ry(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?xo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ht.flags|=1024),n}function ff(){var t=Hl!==0;return Hl=0,t}function df(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function hf(t){if(Il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Il=!1}$i=0,cn=Gt=ht=null,rs=!1,go=Hl=0,ss=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ht.memoizedState=cn=t:cn=cn.next=t,cn}function rn(){if(Gt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=cn===null?ht.memoizedState:cn.next;if(n!==null)cn=n,Gt=t;else{if(t===null)throw ht.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},cn===null?ht.memoizedState=cn=t:cn=cn.next=t}return cn}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var n=go;return go+=1,ss===null&&(ss=[]),t=vm(ss,t,n),n=ht,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?c0:Tf),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===U)return An(t)}throw Error(s(438,String(t)))}function pf(t){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gl(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=N;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function kl(t){var n=rn();return mf(n,Gt,t)}function mf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=y=null,H=null,ee=n,pe=!1;do{var _e=ee.lane&-536870913;if(_e!==ee.lane?(St&_e)===_e:($i&_e)===_e){var ae=ee.revertLane;if(ae===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),_e===es&&(pe=!0);else if(($i&ae)===ae){ee=ee.next,ae===es&&(pe=!0);continue}else _e={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(R=H=_e,y=d):H=H.next=_e,ht.lanes|=ae,Ha|=ae;_e=ee.action,Sr&&a(d,_e),d=ee.hasEagerState?ee.eagerState:a(d,_e)}else ae={lane:_e,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(R=H=ae,y=d):H=H.next=ae,ht.lanes|=_e,Ha|=_e;ee=ee.next}while(ee!==null&&ee!==n);if(H===null?y=d:H.next=R,!Yn(d,t.memoizedState)&&(un=!0,pe&&(a=ts,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function gf(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);Yn(d,n.memoizedState)||(un=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Cm(t,n,a){var o=ht,u=rn(),d=bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Yn((Gt||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,_f(Um.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,os(9,{destroy:void 0},Nm.bind(null,o,u,a,n),null),Wt===null)throw Error(s(349));d||($i&127)!==0||Dm(o,n,a)}return a}function Dm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Gl(),ht.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Nm(t,n,a,o){n.value=a,n.getSnapshot=o,Lm(n)&&Om(t)}function Um(t,n,a){return a(function(){Lm(n)&&Om(t)})}function Lm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Om(t){var n=dr(t,2);n!==null&&Xn(n,t,2)}function xf(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),Sr){Ve(!0);try{a()}finally{Ve(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function Pm(t,n,a,o){return t.baseState=a,mf(t,Gt,typeof o=="function"?o:ea)}function wy(t,n,a,o,u){if(Wl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Bm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Bm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=B.T,y={};B.T=y;try{var R=a(u,o),H=B.S;H!==null&&H(y,R),Fm(t,n,R)}catch(ee){vf(t,n,ee)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=a(u,o),Fm(t,n,d)}catch(ee){vf(t,n,ee)}}function Fm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zm(t,n,o)},function(o){return vf(t,n,o)}):zm(t,n,a)}function zm(t,n,a){n.status="fulfilled",n.value=a,Im(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Bm(t,a)))}function vf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Im(n),n=n.next;while(n!==o)}t.action=null}function Im(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Hm(t,n){return n}function Gm(t,n){if(bt){var a=Wt.formState;if(a!==null){e:{var o=ht;if(bt){if(Yt){t:{for(var u=Yt,d=ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Yt=di(u.nextSibling),o=u.data==="F!";break e}}Na(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:n},a.queue=o,a=s0.bind(null,ht,o),o.dispatch=a,o=xf(!1),d=Ef.bind(null,ht,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=wy.bind(null,ht,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Vm(t){var n=rn();return km(n,Gt,t)}function km(t,n,a){if(n=mf(t,n,Hm)[0],t=kl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(y){throw y===ns?Ll:y}else o=n;n=rn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,os(9,{destroy:void 0},Cy.bind(null,u,a),null)),[o,d,t]}function Cy(t,n){t.action=n}function jm(t){var n=rn(),a=Gt;if(a!==null)return km(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function os(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Gl(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Xm(){return rn().memoizedState}function jl(t,n,a,o){var u=Pn();ht.flags|=t,u.memoizedState=os(1|n,{destroy:void 0},a,o===void 0?null:o)}function Xl(t,n,a,o){var u=rn();o=o===void 0?null:o;var d=u.memoizedState.inst;Gt!==null&&o!==null&&cf(o,Gt.memoizedState.deps)?u.memoizedState=os(n,d,a,o):(ht.flags|=t,u.memoizedState=os(1|n,d,a,o))}function Wm(t,n){jl(8390656,8,t,n)}function _f(t,n){Xl(2048,8,t,n)}function Dy(t){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=Gl(),ht.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function qm(t){var n=rn().memoizedState;return Dy({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Ym(t,n){return Xl(4,2,t,n)}function Zm(t,n){return Xl(4,4,t,n)}function Km(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Qm(t,n,a){a=a!=null?a.concat([t]):null,Xl(4,4,Km.bind(null,n,t),a)}function yf(){}function Jm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&cf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function $m(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&cf(n,o[1]))return o[0];if(o=t(),Sr){Ve(!0);try{t()}finally{Ve(!1)}}return a.memoizedState=[o,n],o}function Sf(t,n,a){return a===void 0||($i&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=eg(),ht.lanes|=t,Ha|=t,a)}function e0(t,n,a,o){return Yn(a,n)?a:as.current!==null?(t=Sf(t,a,o),Yn(t,n)||(un=!0),t):($i&42)===0||($i&1073741824)!==0&&(St&261930)===0?(un=!0,t.memoizedState=a):(t=eg(),ht.lanes|=t,Ha|=t,n)}function t0(t,n,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var y=B.T,R={};B.T=R,Ef(t,!1,n,a);try{var H=u(),ee=B.S;if(ee!==null&&ee(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=Ty(H,o);vo(t,n,pe,ei(t))}else vo(t,n,o,ei(t))}catch(_e){vo(t,n,{then:function(){},status:"rejected",reason:_e},ei())}finally{G.p=d,y!==null&&R.types!==null&&(y.types=R.types),B.T=y}}function Ny(){}function Mf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=n0(t).queue;t0(t,u,n,te,a===null?Ny:function(){return i0(t),a(o)})}function n0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function i0(t){var n=n0(t);n.next===null&&(n=t.alternate.memoizedState),vo(t,n.next.queue,{},ei())}function bf(){return An(Po)}function a0(){return rn().memoizedState}function r0(){return rn().memoizedState}function Uy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Oa(a);var o=Pa(n,t,a);o!==null&&(Xn(o,n,a),ho(o,n,a)),n={cache:Qu()},t.payload=n;return}n=n.return}}function Ly(t,n,a){var o=ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wl(t)?o0(n,a):(a=Hu(t,n,a,o),a!==null&&(Xn(a,t,o),l0(a,n,o)))}function s0(t,n,a){var o=ei();vo(t,n,a,o)}function vo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wl(t))o0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,R=d(y,a);if(u.hasEagerState=!0,u.eagerState=R,Yn(R,y))return Al(t,n,u,0),Wt===null&&Tl(),!1}catch{}if(a=Hu(t,n,u,o),a!==null)return Xn(a,t,o),l0(a,n,o),!0}return!1}function Ef(t,n,a,o){if(o={lane:2,revertLane:nd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(t)){if(n)throw Error(s(479))}else n=Hu(t,a,o,2),n!==null&&Xn(n,t,2)}function Wl(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function o0(t,n){rs=Il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function l0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ws(t,a)}}var _o={readContext:An,use:Vl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};_o.useEffectEvent=en;var c0={readContext:An,use:Vl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Wm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,jl(4194308,4,Km.bind(null,n,t),a)},useLayoutEffect:function(t,n){return jl(4194308,4,t,n)},useInsertionEffect:function(t,n){jl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(Sr){Ve(!0);try{t()}finally{Ve(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(Sr){Ve(!0);try{a(n)}finally{Ve(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ly.bind(null,ht,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=xf(t);var n=t.queue,a=s0.bind(null,ht,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:yf,useDeferredValue:function(t,n){var a=Pn();return Sf(a,t,n)},useTransition:function(){var t=xf(!1);return t=t0.bind(null,ht,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ht,u=Pn();if(bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(St&127)!==0||Dm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Wm(Um.bind(null,o,d,t),[t]),o.flags|=2048,os(9,{destroy:void 0},Nm.bind(null,o,d,a,n),null),a},useId:function(){var t=Pn(),n=Wt.identifierPrefix;if(bt){var a=Oi,o=Li;a=(o&~(1<<32-Ie(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ay++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:bf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ef.bind(null,ht,!0,a),a.dispatch=n,[t,n]},useMemoCache:pf,useCacheRefresh:function(){return Pn().memoizedState=Uy.bind(null,ht)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Tf={readContext:An,use:Vl,useCallback:Jm,useContext:An,useEffect:_f,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:Zm,useMemo:$m,useReducer:kl,useRef:Xm,useState:function(){return kl(ea)},useDebugValue:yf,useDeferredValue:function(t,n){var a=rn();return e0(a,Gt.memoizedState,t,n)},useTransition:function(){var t=kl(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Cm,useId:a0,useHostTransitionStatus:bf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=rn();return Pm(a,Gt,t,n)},useMemoCache:pf,useCacheRefresh:r0};Tf.useEffectEvent=qm;var u0={readContext:An,use:Vl,useCallback:Jm,useContext:An,useEffect:_f,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:Zm,useMemo:$m,useReducer:gf,useRef:Xm,useState:function(){return gf(ea)},useDebugValue:yf,useDeferredValue:function(t,n){var a=rn();return Gt===null?Sf(a,t,n):e0(a,Gt.memoizedState,t,n)},useTransition:function(){var t=gf(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Cm,useId:a0,useHostTransitionStatus:bf,useFormState:jm,useActionState:jm,useOptimistic:function(t,n){var a=rn();return Gt!==null?Pm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:pf,useCacheRefresh:r0};u0.useEffectEvent=qm;function Af(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Rf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Oa(o);u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(Xn(n,t,o),ho(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Oa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(Xn(n,t,o),ho(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,a),n!==null&&(Xn(n,t,a),ho(n,t,a))}};function f0(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,d):!0}function d0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Rf.enqueueReplaceState(n,n.state,null)}function Mr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function h0(t){El(t)}function p0(t){console.error(t)}function m0(t){El(t)}function ql(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function g0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function wf(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(t,n)},a}function x0(t){return t=Oa(t),t.tag=3,t}function v0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){g0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){g0(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Oy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?rc():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),$f(t,o,u)),!1;case 22:return a.flags|=65536,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),$f(t,o,u)),!1}throw Error(s(435,a.tag))}return $f(t,o,u),rc(),!1}if(bt)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Wu&&(t=Error(s(422),{cause:o}),oo(oi(t,a)))):(o!==Wu&&(n=Error(s(423),{cause:o}),oo(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=wf(t.stateNode,o,u),af(t,u),tn!==4&&(tn=2)),!1;var d=Error(s(520),{cause:o});if(d=oi(d,a),Ro===null?Ro=[d]:Ro.push(d),tn!==4&&(tn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=wf(a.stateNode,o,t),af(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ga===null||!Ga.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=x0(u),v0(u,t,a,o),af(a,u),!1}a=a.return}while(a!==null);return!1}var Cf=Error(s(461)),un=!1;function Rn(t,n,a,o){n.child=t===null?Mm(n,null,a,o):yr(n,t.child,a,o)}function _0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return gr(n),o=uf(t,n,a,y,d,u),R=ff(),t!==null&&!un?(df(t,n,u),ta(t,n,u)):(bt&&R&&ju(n),n.flags|=1,Rn(t,n,o,u),n.child)}function y0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Gu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,S0(t,n,d,o,u)):(t=wl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Ff(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(y,o)&&t.ref===n.ref)return ta(t,n,u)}return n.flags|=1,t=Zi(d,o),t.ref=n.ref,t.return=n,n.child=t}function S0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(ao(d,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=d,Ff(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ta(t,n,u)}return Df(t,n,a,o,u)}function M0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return b0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ul(n,d!==null?d.cachePool:null),d!==null?Tm(n,d):sf(),Am(n);else return o=n.lanes=536870912,b0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ul(n,d.cachePool),Tm(n,d),Fa(),n.memoizedState=null):(t!==null&&Ul(n,null),sf(),Fa());return Rn(t,n,u,a),n.child}function yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function b0(t,n,a,o,u){var d=$u();return d=d===null?null:{parent:ln._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Ul(n,null),sf(),Am(n),t!==null&&$r(t,n,o,!0),n.childLanes=u,null}function Yl(t,n){return n=Kl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function E0(t,n,a){return yr(n,t.child,null,a),t=Yl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function Py(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=Yl(n,o),n.lanes=536870912,yo(null,t);if(lf(n),(t=Yt)?(t=Bg(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=om(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return Yl(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(lf(n),u)if(n.flags&256)n.flags&=-257,n=E0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||$r(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(o=Wt,o!==null&&(y=zr(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,dr(t,y),Xn(o,t,y),Cf;rc(),n=E0(t,n,a)}else t=d.treeContext,Yt=di(y.nextSibling),Tn=n,bt=!0,Da=null,ui=!1,t!==null&&um(n,t),n=Yl(n,o),n.flags|=4096;return n}return t=Zi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Df(t,n,a,o,u){return gr(n),a=uf(t,n,a,o,void 0,u),o=ff(),t!==null&&!un?(df(t,n,u),ta(t,n,u)):(bt&&o&&ju(n),n.flags|=1,Rn(t,n,a,u),n.child)}function T0(t,n,a,o,u,d){return gr(n),n.updateQueue=null,a=wm(n,o,a,u),Rm(t),o=ff(),t!==null&&!un?(df(t,n,d),ta(t,n,d)):(bt&&o&&ju(n),n.flags|=1,Rn(t,n,a,d),n.child)}function A0(t,n,a,o,u){if(gr(n),n.stateNode===null){var d=Zr,y=a.contextType;typeof y=="object"&&y!==null&&(d=An(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Rf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},tf(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?An(y):Zr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Af(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Rf.enqueueReplaceState(d,d.state,null),mo(n,o,d,u),po(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,H=Mr(a,R);d.props=H;var ee=d.context,pe=a.contextType;y=Zr,typeof pe=="object"&&pe!==null&&(y=An(pe));var _e=a.getDerivedStateFromProps;pe=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ee!==y)&&d0(n,d,o,y),La=!1;var ae=n.memoizedState;d.state=ae,mo(n,o,d,u),po(),ee=n.memoizedState,R||ae!==ee||La?(typeof _e=="function"&&(Af(n,a,_e,o),ee=n.memoizedState),(H=La||f0(n,a,H,o,ae,ee,y))?(pe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),d.props=o,d.state=ee,d.context=y,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,nf(t,n),y=n.memoizedProps,pe=Mr(a,y),d.props=pe,_e=n.pendingProps,ae=d.context,ee=a.contextType,H=Zr,typeof ee=="object"&&ee!==null&&(H=An(ee)),R=a.getDerivedStateFromProps,(ee=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==_e||ae!==H)&&d0(n,d,o,H),La=!1,ae=n.memoizedState,d.state=ae,mo(n,o,d,u),po();var fe=n.memoizedState;y!==_e||ae!==fe||La||t!==null&&t.dependencies!==null&&Dl(t.dependencies)?(typeof R=="function"&&(Af(n,a,R,o),fe=n.memoizedState),(pe=La||f0(n,a,pe,o,ae,fe,H)||t!==null&&t.dependencies!==null&&Dl(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,fe,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,fe,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),d.props=o,d.state=fe,d.context=H,o=pe):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Zl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=yr(n,t.child,null,u),n.child=yr(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ta(t,n,u),t}function R0(t,n,a,o){return pr(),n.flags|=256,Rn(t,n,a,o),n.child}var Nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(t){return{baseLanes:t,cachePool:gm()}}function Lf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function w0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Ba(n):Fa(),(t=Yt)?(t=Bg(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=om(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Na(n);return md(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Fa(),u=n.mode,R=Kl({mode:"hidden",children:R},u),o=hr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Uf(a),o.childLanes=Lf(t,y,a),n.memoizedState=Nf,yo(null,o)):(Ba(n),Of(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(d)n.flags&256?(Ba(n),n.flags&=-257,n=Pf(t,n,a)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,n=null):(Fa(),R=o.fallback,u=n.mode,o=Kl({mode:"visible",children:o.children},u),R=hr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,yr(n,t.child,null,a),o=n.child,o.memoizedState=Uf(a),o.childLanes=Lf(t,y,a),n.memoizedState=Nf,n=yo(null,o));else if(Ba(n),md(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var ee=y.dgst;y=ee,o=Error(s(419)),o.stack="",o.digest=y,oo({value:o,source:null,stack:null}),n=Pf(t,n,a)}else if(un||$r(t,n,a,!1),y=(a&t.childLanes)!==0,un||y){if(y=Wt,y!==null&&(o=zr(y,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,dr(t,o),Xn(y,t,o),Cf;pd(R)||rc(),n=Pf(t,n,a)}else pd(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Yt=di(R.nextSibling),Tn=n,bt=!0,Da=null,ui=!1,t!==null&&um(n,t),n=Of(n,o.children),n.flags|=4096);return n}return u?(Fa(),R=o.fallback,u=n.mode,H=t.child,ee=H.sibling,o=Zi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ee!==null?R=Zi(ee,R):(R=hr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,yo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Uf(a):(u=R.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=gm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Lf(t,y,a),n.memoizedState=Nf,yo(t.child,o)):(Ba(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Of(t,n){return n=Kl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Kl(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function Pf(t,n,a){return yr(n,t.child,null,a),t=Of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function C0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Zu(t.return,n,a)}function Bf(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function D0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=an.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,xe(an,y),Rn(t,n,o,a),o=bt?so:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&C0(t,a,n);else if(t.tag===19)C0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&zl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Bf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&zl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Bf(n,!0,a,null,d,o);break;case"together":Bf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ff(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Dl(t)))}function By(t,n,a){switch(n.tag){case 3:Le(n,n.stateNode.containerInfo),Ua(n,ln,t.memoizedState.cache),pr();break;case 27:case 5:Ce(n);break;case 4:Le(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,lf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?w0(t,n,a):(Ba(n),t=ta(t,n,a),t!==null?t.sibling:null);Ba(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return D0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(an,an.current),o)break;return null;case 22:return n.lanes=0,M0(t,n,a,n.pendingProps);case 24:Ua(n,ln,t.memoizedState.cache)}return ta(t,n,a)}function N0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Ff(t,a)&&(n.flags&128)===0)return un=!1,By(t,n,a);un=(t.flags&131072)!==0}else un=!1,bt&&(n.flags&1048576)!==0&&cm(n,so,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=vr(n.elementType),n.type=t,typeof t=="function")Gu(t)?(o=Mr(t,o),n.tag=1,n=A0(null,n,t,o,a)):(n.tag=0,n=Df(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=_0(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=y0(null,n,t,o,a);break e}}throw n=me(t)||t,Error(s(306,n,""))}}return n;case 0:return Df(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Mr(o,n.pendingProps),A0(t,n,o,u,a);case 3:e:{if(Le(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,nf(t,n),mo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ua(n,ln,o),o!==d.cache&&Ku(n,[ln],a,!0),po(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=R0(t,n,o,a);break e}else if(o!==u){u=oi(Error(s(424)),n),oo(u),n=R0(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Yt=di(t.firstChild),Tn=n,bt=!0,Da=null,ui=!0,a=Mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(pr(),o===u){n=ta(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Zl(t,n),t===null?(a=Vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=dc(ne.current).createElement(a),o[on]=n,o[_n]=t,wn(o,a,t),w(o),n.stateNode=o):n.memoizedState=Vg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ce(n),t===null&&bt&&(o=n.stateNode=Ig(n.type,n.pendingProps,ne.current),Tn=n,ui=!0,u=Yt,Xa(n.type)?(gd=u,Yt=di(o.firstChild)):Yt=u),Rn(t,n,n.pendingProps.children,a),Zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=Yt)&&(o=dS(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,Tn=n,Yt=di(o.firstChild),ui=!1,u=!0):u=!1),u||Na(n)),Ce(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,fd(u,d)?o=null:y!==null&&fd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=uf(t,n,Ry,null,null,a),Po._currentValue=u),Zl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=Yt)&&(a=hS(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Tn=n,Yt=null,t=!0):t=!1),t||Na(n)),null;case 13:return w0(t,n,a);case 4:return Le(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=yr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return _0(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gr(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return y0(t,n,n.type,n.pendingProps,a);case 15:return S0(t,n,n.type,n.pendingProps,a);case 19:return D0(t,n,a);case 31:return Py(t,n,a);case 22:return M0(t,n,a,n.pendingProps);case 24:return gr(n),o=An(ln),t===null?(u=$u(),u===null&&(u=Wt,d=Qu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},tf(n),Ua(n,ln,u)):((t.lanes&a)!==0&&(nf(t,n),mo(n,null,null,a),po()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,ln,o)):(o=d.cache,Ua(n,ln,o),o!==u.cache&&Ku(n,[ln],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(t){t.flags|=4}function zf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(ag())t.flags|=8192;else throw _r=Ol,ef}else t.flags&=-16777217}function U0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!qg(n))if(ag())t.flags|=8192;else throw _r=Ol,ef}function Ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Bt():536870912,t.lanes|=n,fs|=n)}function So(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Fy(t,n,a){var o=n.pendingProps;switch(Xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ji(ln),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jr(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qu())),Zt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(na(n),d!==null?(Zt(n),U0(n,d)):(Zt(n),zf(n,u,null,o,a))):d?d!==t.memoizedState?(na(n),Zt(n),U0(n,d)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&na(n),Zt(n),zf(n,u,t,o,a)),null;case 27:if(Je(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}t=Re.current,Jr(n)?fm(n):(t=Ig(u,o,a),n.stateNode=t,na(n))}return Zt(n),null;case 5:if(Je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}if(d=Re.current,Jr(n))fm(n);else{var y=dc(ne.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[on]=n,d[_n]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(wn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&na(n)}}return Zt(n),zf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ne.current,Jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||wg(t.nodeValue,a)),t||Na(n,!0)}else t=dc(t).createTextNode(o),t[on]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Jr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[on]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ql(n,n.updateQueue),Zt(n),null);case 4:return Me(),t===null&&sd(n.stateNode.containerInfo),Zt(n),null;case 10:return Ji(n.type),Zt(n),null;case 19:if($(an),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)So(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=zl(t),d!==null){for(n.flags|=128,So(o,!1),t=d.updateQueue,n.updateQueue=t,Ql(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)sm(a,t),a=a.sibling;return xe(an,an.current&1|2),bt&&Ki(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>nc&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304)}else{if(!u)if(t=zl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ql(n,t),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!bt)return Zt(n),null}else 2*b()-o.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=an.current,xe(an,u?a&1|2:a&1),bt&&Ki(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return Qn(n),of(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Ql(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&$(xr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(ln),Zt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function zy(t,n){switch(Xu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(ln),Me(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $(an),null;case 4:return Me(),null;case 10:return Ji(n.type),null;case 22:case 23:return Qn(n),of(),t!==null&&$(xr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(ln),null;case 25:return null;default:return null}}function L0(t,n){switch(Xu(n),n.tag){case 3:Ji(ln),Me();break;case 26:case 27:case 5:Je(n);break;case 4:Me();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:$(an);break;case 10:Ji(n.type);break;case 22:case 23:Qn(n),of(),t!==null&&$(xr);break;case 24:Ji(ln)}}function Mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){It(n,n.return,R)}}function za(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var H=a,ee=R;try{ee()}catch(pe){It(u,H,pe)}}}o=o.next}while(o!==d)}}catch(pe){It(n,n.return,pe)}}function O0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Em(n,a)}catch(o){It(t,t.return,o)}}}function P0(t,n,a){a.props=Mr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){It(t,n,o)}}function bo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){It(t,n,u)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){It(t,n,u)}else a.current=null}function B0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){It(t,t.return,u)}}function If(t,n,a){try{var o=t.stateNode;sS(o,t.type,a,n),o[_n]=n}catch(u){It(t,t.return,u)}}function F0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Xa(t.type)||t.tag===4}function Hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Gf(t,n,a),t=t.sibling;t!==null;)Gf(t,n,a),t=t.sibling}function Jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Jl(t,n,a),t=t.sibling;t!==null;)Jl(t,n,a),t=t.sibling}function z0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[on]=t,n[_n]=a}catch(d){It(t,t.return,d)}}var ia=!1,fn=!1,Vf=!1,I0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Iy(t,n){if(t=t.containerInfo,cd=_c,t=Qp(t),Ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,R=-1,H=-1,ee=0,pe=0,_e=t,ae=null;t:for(;;){for(var fe;_e!==a||u!==0&&_e.nodeType!==3||(R=y+u),_e!==d||o!==0&&_e.nodeType!==3||(H=y+o),_e.nodeType===3&&(y+=_e.nodeValue.length),(fe=_e.firstChild)!==null;)ae=_e,_e=fe;for(;;){if(_e===t)break t;if(ae===a&&++ee===u&&(R=y),ae===d&&++pe===o&&(H=y),(fe=_e.nextSibling)!==null)break;_e=ae,ae=_e.parentNode}_e=fe}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(ud={focusedElem:t,selectionRange:a},_c=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Ye=Mr(a.type,u);t=o.getSnapshotBeforeUpdate(Ye,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(st){It(a,a.return,st)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)hd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function H0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),o&4&&Mo(5,a);break;case 1:if(ra(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){It(a,a.return,y)}else{var u=Mr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){It(a,a.return,y)}}o&64&&O0(a),o&512&&bo(a,a.return);break;case 3:if(ra(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Em(t,n)}catch(y){It(a,a.return,y)}}break;case 27:n===null&&o&4&&z0(a);case 26:case 5:ra(t,a),n===null&&o&4&&B0(a),o&512&&bo(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),o&4&&k0(t,a);break;case 13:ra(t,a),o&4&&j0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Yy.bind(null,a),pS(t,a))));break;case 22:if(o=a.memoizedState!==null||ia,!o){n=n!==null&&n.memoizedState!==null||fn,u=ia;var d=fn;ia=o,(fn=n)&&!d?sa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),ia=u,fn=d}break;case 30:break;default:ra(t,a)}}function G0(t){var n=t.alternate;n!==null&&(t.alternate=null,G0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ks(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Gn=!1;function aa(t,n,a){for(a=a.child;a!==null;)V0(t,n,a),a=a.sibling}function V0(t,n,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:fn||Pi(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Pi(a,n);var o=Jt,u=Gn;Xa(a.type)&&(Jt=a.stateNode,Gn=!1),aa(t,n,a),Uo(a.stateNode),Jt=o,Gn=u;break;case 5:fn||Pi(a,n);case 6:if(o=Jt,u=Gn,Jt=null,aa(t,n,a),Jt=o,Gn=u,Jt!==null)if(Gn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(d){It(a,n,d)}else try{Jt.removeChild(a.stateNode)}catch(d){It(a,n,d)}break;case 18:Jt!==null&&(Gn?(t=Jt,Og(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),_s(t)):Og(Jt,a.stateNode));break;case 4:o=Jt,u=Gn,Jt=a.stateNode.containerInfo,Gn=!0,aa(t,n,a),Jt=o,Gn=u;break;case 0:case 11:case 14:case 15:za(2,a,n),fn||za(4,a,n),aa(t,n,a);break;case 1:fn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&P0(a,n,o)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,aa(t,n,a),fn=o;break;default:aa(t,n,a)}}function k0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_s(t)}catch(a){It(n,n.return,a)}}}function j0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_s(t)}catch(a){It(n,n.return,a)}}function Hy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new I0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new I0),n;default:throw Error(s(435,t.tag))}}function $l(t,n){var a=Hy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Zy.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(Xa(R.type)){Jt=R.stateNode,Gn=!1;break e}break;case 5:Jt=R.stateNode,Gn=!1;break e;case 3:case 4:Jt=R.stateNode.containerInfo,Gn=!0;break e}R=R.return}if(Jt===null)throw Error(s(160));V0(d,y,u),Jt=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)X0(n,t),n=n.sibling}var bi=null;function X0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(za(3,t,t.return),Mo(3,t),za(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&64&&ia&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[or]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),wn(d,o,a),d[on]=t,w(d),o=d;break e;case"link":var y=Xg("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=Xg("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[on]=t,w(d),o=d}t.stateNode=o}else Wg(u,t.type,t.stateNode);else t.stateNode=jg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Wg(u,t.type,t.stateNode):jg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&If(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),a!==null&&o&4&&If(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{hn(u,"")}catch(Ye){It(t,t.return,Ye)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,If(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Vf=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ye){It(t,t.return,Ye)}}break;case 3:if(mc=null,u=bi,bi=hc(n.containerInfo),Vn(n,t),bi=u,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_s(n.containerInfo)}catch(Ye){It(t,t.return,Ye)}Vf&&(Vf=!1,W0(t));break;case 4:o=bi,bi=hc(t.stateNode.containerInfo),Vn(n,t),kn(t),bi=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ee=ia,pe=fn;if(ia=ee||u,fn=pe||H,Vn(n,t),fn=pe,ia=ee,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ia||fn||br(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=H.stateNode;var _e=H.memoizedProps.style,ae=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;R.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(Ye){It(H,H.return,Ye)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ye){It(H,H.return,Ye)}}}else if(n.tag===18){if(a===null){H=n;try{var fe=H.stateNode;u?Pg(fe,!0):Pg(H.stateNode,!1)}catch(Ye){It(H,H.return,Ye)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$l(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(F0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Hf(t);Jl(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(hn(y,""),a.flags&=-33);var R=Hf(t);Jl(t,R,y);break;case 3:case 4:var H=a.stateNode.containerInfo,ee=Hf(t);Gf(t,ee,H);break;default:throw Error(s(161))}}catch(pe){It(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function W0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;W0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)H0(t,n.alternate,n),n=n.sibling}function br(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),br(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&P0(n,n.return,a),br(n);break;case 27:Uo(n.stateNode);case 26:case 5:Pi(n,n.return),br(n);break;case 22:n.memoizedState===null&&br(n);break;case 30:br(n);break;default:br(n)}t=t.sibling}}function sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:sa(u,d,a),Mo(4,d);break;case 1:if(sa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){It(o,o.return,ee)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)bm(H[u],R)}catch(ee){It(o,o.return,ee)}}a&&y&64&&O0(d),bo(d,d.return);break;case 27:z0(d);case 26:case 5:sa(u,d,a),a&&o===null&&y&4&&B0(d),bo(d,d.return);break;case 12:sa(u,d,a);break;case 31:sa(u,d,a),a&&y&4&&k0(u,d);break;case 13:sa(u,d,a),a&&y&4&&j0(u,d);break;case 22:d.memoizedState===null&&sa(u,d,a),bo(d,d.return);break;case 30:break;default:sa(u,d,a)}n=n.sibling}}function kf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&lo(a))}function jf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)q0(t,n,a,o),n=n.sibling}function q0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),u&2048&&Mo(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t)));break;case 12:if(u&2048){Ei(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){It(n,n.return,H)}}else Ei(t,n,a,o);break;case 31:Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Ei(t,n,a,o):Eo(t,n):d._visibility&2?Ei(t,n,a,o):(d._visibility|=2,ls(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&kf(y,n);break;case 24:Ei(t,n,a,o),u&2048&&jf(n.alternate,n);break;default:Ei(t,n,a,o)}}function ls(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,R=a,H=o,ee=y.flags;switch(y.tag){case 0:case 11:case 15:ls(d,y,R,H,u),Mo(8,y);break;case 23:break;case 22:var pe=y.stateNode;y.memoizedState!==null?pe._visibility&2?ls(d,y,R,H,u):Eo(d,y):(pe._visibility|=2,ls(d,y,R,H,u)),u&&ee&2048&&kf(y.alternate,y);break;case 24:ls(d,y,R,H,u),u&&ee&2048&&jf(y.alternate,y);break;default:ls(d,y,R,H,u)}n=n.sibling}}function Eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&kf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&jf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var To=8192;function cs(t,n,a){if(t.subtreeFlags&To)for(t=t.child;t!==null;)Y0(t,n,a),t=t.sibling}function Y0(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&To&&t.memoizedState!==null&&AS(a,bi,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var o=bi;bi=hc(t.stateNode.containerInfo),cs(t,n,a),bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=To,To=16777216,cs(t,n,a),To=o):cs(t,n,a));break;default:cs(t,n,a)}}function Z0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Q0(o,t)}Z0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)K0(t),t=t.sibling}function K0(t){switch(t.tag){case 0:case 11:case 15:Ao(t),t.flags&2048&&za(9,t,t.return);break;case 3:Ao(t);break;case 12:Ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ec(t)):Ao(t);break;default:Ao(t)}}function ec(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Q0(o,t)}Z0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:za(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}t=t.sibling}}function Q0(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:lo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=t;xn!==null;){o=xn;var u=o.sibling,d=o.return;if(G0(o),o===a){xn=null;break e}if(u!==null){u.return=d,xn=u;break e}xn=d}}}var Gy={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},Vy=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Wt=null,_t=null,St=0,zt=0,Jn=null,Ia=!1,us=!1,Xf=!1,oa=0,tn=0,Ha=0,Er=0,Wf=0,$n=0,fs=0,Ro=null,jn=null,qf=!1,tc=0,J0=0,nc=1/0,ic=null,Ga=null,pn=0,Va=null,ds=null,la=0,Yf=0,Zf=null,$0=null,wo=0,Kf=null;function ei(){return(Lt&2)!==0&&St!==0?St&-St:B.T!==null?nd():Ys()}function eg(){if($n===0)if((St&536870912)===0||bt){var t=we;we<<=1,(we&3932160)===0&&(we=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Xn(t,n,a){(t===Wt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(hs(t,0),ka(t,St,$n,!1)),Dn(t,a),((Lt&2)===0||t!==Wt)&&(t===Wt&&((Lt&2)===0&&(Er|=a),tn===4&&ka(t,St,$n,!1)),Bi(t))}function tg(t,n,a){if((Lt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ne(t,n),u=o?Xy(t,n):Jf(t,n,!0),d=o;do{if(u===0){us&&!o&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!ky(a)){u=Jf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=Ro;var H=R.current.memoizedState.isDehydrated;if(H&&(hs(R,y).flags|=256),y=Jf(R,y,!1),y!==2){if(Xf&&!H){R.errorRecoveryDisabledLanes|=d,Er|=d,u=4;break e}d=jn,jn=u,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){hs(t,0),ka(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,$n,!Ia);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=tc+300-b(),10<u)){if(ka(o,n,$n,!Ia),Se(o,0,!0)!==0)break e;la=n,o.timeoutHandle=Ug(ng.bind(null,o,a,jn,ic,qf,n,$n,Er,fs,Ia,d,"Throttled",-0,0),u);break e}ng(o,a,jn,ic,qf,n,$n,Er,fs,Ia,d,null,-0,0)}}break}while(!0);Bi(t)}function ng(t,n,a,o,u,d,y,R,H,ee,pe,_e,ae,fe){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},Y0(n,d,_e);var Ye=(d&62914560)===d?tc-b():(d&4194048)===d?J0-b():0;if(Ye=RS(_e,Ye),Ye!==null){la=d,t.cancelPendingCommit=Ye(ug.bind(null,t,n,d,a,o,u,y,R,H,pe,_e,null,ae,fe)),ka(t,d,y,!ee);return}}ug(t,n,d,a,o,u,y,R,H)}function ky(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Yn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,o){n&=~Wf,n&=~Er,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Ie(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&ml(t,a,n)}function ac(){return(Lt&6)===0?(Co(0),!1):!0}function Qf(){if(_t!==null){if(zt===0)var t=_t.return;else t=_t,Qi=mr=null,hf(t),is=null,uo=0,t=_t;for(;t!==null;)L0(t.alternate,t),t=t.return;_t=null}}function hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,cS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,Qf(),Wt=t,_t=a=Zi(t.current,null),St=n,zt=0,Jn=null,Ia=!1,us=Ne(t,n),Xf=!1,fs=$n=Wf=Er=Ha=tn=0,jn=Ro=null,qf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ie(o),d=1<<u;n|=t[u],o&=~d}return oa=n,Tl(),a}function ig(t,n){ht=null,B.H=_o,n===ns||n===Ll?(n=_m(),zt=3):n===ef?(n=_m(),zt=4):zt=n===Cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,_t===null&&(tn=1,ql(t,oi(n,t.current)))}function ag(){var t=Kn.current;return t===null?!0:(St&4194048)===St?fi===null:(St&62914560)===St||(St&536870912)!==0?t===fi:!1}function rg(){var t=B.H;return B.H=_o,t===null?_o:t}function sg(){var t=B.A;return B.A=Gy,t}function rc(){tn=4,Ia||(St&4194048)!==St&&Kn.current!==null||(us=!0),(Ha&134217727)===0&&(Er&134217727)===0||Wt===null||ka(Wt,St,$n,!1)}function Jf(t,n,a){var o=Lt;Lt|=2;var u=rg(),d=sg();(Wt!==t||St!==n)&&(ic=null,hs(t,n)),n=!1;var y=tn;e:do try{if(zt!==0&&_t!==null){var R=_t,H=Jn;switch(zt){case 8:Qf(),y=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var ee=zt;if(zt=0,Jn=null,ps(t,R,H,ee),a&&us){y=0;break e}break;default:ee=zt,zt=0,Jn=null,ps(t,R,H,ee)}}jy(),y=tn;break}catch(pe){ig(t,pe)}while(!0);return n&&t.shellSuspendCounter++,Qi=mr=null,Lt=o,B.H=u,B.A=d,_t===null&&(Wt=null,St=0,Tl()),y}function jy(){for(;_t!==null;)og(_t)}function Xy(t,n){var a=Lt;Lt|=2;var o=rg(),u=sg();Wt!==t||St!==n?(ic=null,nc=b()+500,hs(t,n)):us=Ne(t,n);e:do try{if(zt!==0&&_t!==null){n=_t;var d=Jn;t:switch(zt){case 1:zt=0,Jn=null,ps(t,n,d,1);break;case 2:case 9:if(xm(d)){zt=0,Jn=null,lg(n);break}n=function(){zt!==2&&zt!==9||Wt!==t||(zt=7),Bi(t)},d.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:xm(d)?(zt=0,Jn=null,lg(n)):(zt=0,Jn=null,ps(t,n,d,7));break;case 5:var y=null;switch(_t.tag){case 26:y=_t.memoizedState;case 5:case 27:var R=_t;if(y?qg(y):R.stateNode.complete){zt=0,Jn=null;var H=R.sibling;if(H!==null)_t=H;else{var ee=R.return;ee!==null?(_t=ee,sc(ee)):_t=null}break t}}zt=0,Jn=null,ps(t,n,d,5);break;case 6:zt=0,Jn=null,ps(t,n,d,6);break;case 8:Qf(),tn=6;break e;default:throw Error(s(462))}}Wy();break}catch(pe){ig(t,pe)}while(!0);return Qi=mr=null,B.H=o,B.A=u,Lt=a,_t!==null?0:(Wt=null,St=0,Tl(),tn)}function Wy(){for(;_t!==null&&!Xe();)og(_t)}function og(t){var n=N0(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?sc(t):_t=n}function lg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=T0(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=T0(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:hf(n);default:L0(a,n),n=_t=sm(n,oa),n=N0(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?sc(t):_t=n}function ps(t,n,a,o){Qi=mr=null,hf(n),is=null,uo=0;var u=n.return;try{if(Oy(t,u,n,a,St)){tn=1,ql(t,oi(a,t.current)),_t=null;return}}catch(d){if(u!==null)throw _t=u,d;tn=1,ql(t,oi(a,t.current)),_t=null;return}n.flags&32768?(bt||o===1?t=!0:us||(St&536870912)!==0?t=!1:(Ia=t=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),cg(n,t)):sc(n)}function sc(t){var n=t;do{if((n.flags&32768)!==0){cg(n,Ia);return}t=n.return;var a=Fy(n.alternate,n,oa);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);tn===0&&(tn=5)}function cg(t,n){do{var a=zy(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);tn=6,_t=null}function ug(t,n,a,o,u,d,y,R,H){t.cancelPendingCommit=null;do oc();while(pn!==0);if((Lt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Iu,_i(t,a,d,y,R,H),t===Wt&&(_t=Wt=null,St=0),ds=n,Va=t,la=a,Yf=d,Zf=u,$0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ky(ce,function(){return mg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=G.p,G.p=2,y=Lt,Lt|=4;try{Iy(t,n,a)}finally{Lt=y,G.p=u,B.T=o}}pn=1,fg(),dg(),hg()}}function fg(){if(pn===1){pn=0;var t=Va,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=Lt;Lt|=4;try{X0(n,t);var d=ud,y=Qp(t.containerInfo),R=d.focusedElem,H=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&Kp(R.ownerDocument.documentElement,R)){if(H!==null&&Ou(R)){var ee=H.start,pe=H.end;if(pe===void 0&&(pe=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(pe,R.value.length);else{var _e=R.ownerDocument||document,ae=_e&&_e.defaultView||window;if(ae.getSelection){var fe=ae.getSelection(),Ye=R.textContent.length,st=Math.min(H.start,Ye),kt=H.end===void 0?st:Math.min(H.end,Ye);!fe.extend&&st>kt&&(y=kt,kt=st,st=y);var K=Zp(R,st),j=Zp(R,kt);if(K&&j&&(fe.rangeCount!==1||fe.anchorNode!==K.node||fe.anchorOffset!==K.offset||fe.focusNode!==j.node||fe.focusOffset!==j.offset)){var J=_e.createRange();J.setStart(K.node,K.offset),fe.removeAllRanges(),st>kt?(fe.addRange(J),fe.extend(j.node,j.offset)):(J.setEnd(j.node,j.offset),fe.addRange(J))}}}}for(_e=[],fe=R;fe=fe.parentNode;)fe.nodeType===1&&_e.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_e.length;R++){var ge=_e[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}_c=!!cd,ud=cd=null}finally{Lt=u,G.p=o,B.T=a}}t.current=n,pn=2}}function dg(){if(pn===2){pn=0;var t=Va,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=Lt;Lt|=4;try{H0(t,n.alternate,n)}finally{Lt=u,G.p=o,B.T=a}}pn=3}}function hg(){if(pn===4||pn===3){pn=0,L();var t=Va,n=ds,a=la,o=$0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,ds=Va=null,pg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ga=null),Ir(a),n=n.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=G.p,G.p=2,B.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];d(R.value,{componentStack:R.stack})}}finally{B.T=n,G.p=u}}(la&3)!==0&&oc(),Bi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Kf?wo++:(wo=0,Kf=t):wo=0,Co(0)}}function pg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,lo(n)))}function oc(){return fg(),dg(),hg(),mg()}function mg(){if(pn!==5)return!1;var t=Va,n=Yf;Yf=0;var a=Ir(la),o=B.T,u=G.p;try{G.p=32>a?32:a,B.T=null,a=Zf,Zf=null;var d=Va,y=la;if(pn=0,ds=Va=null,la=0,(Lt&6)!==0)throw Error(s(331));var R=Lt;if(Lt|=4,K0(d.current),q0(d,d.current,y,a),Lt=R,Co(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ee,d)}catch{}return!0}finally{G.p=u,B.T=o,pg(t,n)}}function gg(t,n,a){n=oi(a,n),n=wf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Dn(t,2),Bi(t))}function It(t,n,a){if(t.tag===3)gg(t,t,a);else for(;n!==null;){if(n.tag===3){gg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){t=oi(a,t),a=x0(2),o=Pa(n,a,2),o!==null&&(v0(a,o,n,t),Dn(o,2),Bi(o));break}}n=n.return}}function $f(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Vy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Xf=!0,u.add(a),t=qy.bind(null,t,n,a),n.then(t,t))}function qy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(St&a)===a&&(tn===4||tn===3&&(St&62914560)===St&&300>b()-tc?(Lt&2)===0&&hs(t,0):Wf|=a,fs===St&&(fs=0)),Bi(t)}function xg(t,n){n===0&&(n=Bt()),t=dr(t,n),t!==null&&(Dn(t,n),Bi(t))}function Yy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),xg(t,a)}function Zy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),xg(t,a)}function Ky(t,n){return Ze(t,n)}var lc=null,ms=null,ed=!1,cc=!1,td=!1,ja=0;function Bi(t){t!==ms&&t.next===null&&(ms===null?lc=ms=t:ms=ms.next=t),cc=!0,ed||(ed=!0,Jy())}function Co(t,n){if(!td&&cc){td=!0;do for(var a=!1,o=lc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Ie(42|t)+1)-1,d&=u&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Sg(o,d))}else d=St,d=Se(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ne(o,d)||(a=!0,Sg(o,d));o=o.next}while(a);td=!1}}function Qy(){vg()}function vg(){cc=ed=!1;var t=0;ja!==0&&lS()&&(t=ja);for(var n=b(),a=null,o=lc;o!==null;){var u=o.next,d=_g(o,n);d===0?(o.next=null,a===null?lc=u:a.next=u,u===null&&(ms=a)):(a=o,(t!==0||(d&3)!==0)&&(cc=!0)),o=u}pn!==0&&pn!==5||Co(t),ja!==0&&(ja=0)}function _g(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Ie(d),R=1<<y,H=u[y];H===-1?((R&a)===0||(R&o)!==0)&&(u[y]=ct(R,n)):H<=n&&(t.expiredLanes|=R),d&=~R}if(n=Wt,a=St,a=Se(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&De(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ne(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&De(o),Ir(a)){case 2:case 8:a=ve;break;case 32:a=ce;break;case 268435456:a=Ue;break;default:a=ce}return o=yg.bind(null,t),a=Ze(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&De(o),t.callbackPriority=2,t.callbackNode=null,2}function yg(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(oc()&&t.callbackNode!==a)return null;var o=St;return o=Se(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(tg(t,o,n),_g(t,b()),t.callbackNode!=null&&t.callbackNode===a?yg.bind(null,t):null)}function Sg(t,n){if(oc())return null;tg(t,n,!0)}function Jy(){uS(function(){(Lt&6)!==0?Ze(de,Qy):vg()})}function nd(){if(ja===0){var t=es;t===0&&(t=Be,Be<<=1,(Be&261888)===0&&(Be=256)),ja=t}return ja}function Mg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xl(""+t)}function bg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function $y(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Mg((u[_n]||null).action),y=o.submitter;y&&(n=(n=y[_n]||null)?Mg(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var R=new Sl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var H=y?bg(u,y):new FormData(u);Mf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(R.preventDefault(),H=y?bg(u,y):new FormData(u),Mf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var id=0;id<zu.length;id++){var ad=zu[id],eS=ad.toLowerCase(),tS=ad[0].toUpperCase()+ad.slice(1);Mi(eS,"on"+tS)}Mi(em,"onAnimationEnd"),Mi(tm,"onAnimationIteration"),Mi(nm,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(xy,"onTransitionRun"),Mi(vy,"onTransitionStart"),Mi(_y,"onTransitionCancel"),Mi(im,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function Eg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],H=R.instance,ee=R.currentTarget;if(R=R.listener,H!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ee;try{d(u)}catch(pe){El(pe)}u.currentTarget=null,d=H}else for(y=0;y<o.length;y++){if(R=o[y],H=R.instance,ee=R.currentTarget,R=R.listener,H!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ee;try{d(u)}catch(pe){El(pe)}u.currentTarget=null,d=H}}}}function yt(t,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var o=t+"__bubble";a.has(o)||(Tg(n,t,2,!1),a.add(o))}function rd(t,n,a){var o=0;n&&(o|=4),Tg(a,t,o,n)}var uc="_reactListening"+Math.random().toString(36).slice(2);function sd(t){if(!t[uc]){t[uc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(nS.has(a)||rd(a,!1,t),rd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[uc]||(n[uc]=!0,rd("selectionchange",!1,n))}}function Tg(t,n,a,o){switch(ex(n)){case 2:var u=DS;break;case 8:u=NS;break;default:u=Sd}a=u.bind(null,n,a,t),u=void 0,!Tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function od(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=Ta(R),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){o=d=y;continue e}R=R.parentNode}}o=o.return}Dp(function(){var ee=d,pe=bu(a),_e=[];e:{var ae=am.get(t);if(ae!==void 0){var fe=Sl,Ye=t;switch(t){case"keypress":if(_l(a)===0)break e;case"keydown":case"keyup":fe=Z_;break;case"focusin":Ye="focus",fe=Cu;break;case"focusout":Ye="blur",fe=Cu;break;case"beforeblur":case"afterblur":fe=Cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=F_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=J_;break;case em:case tm:case nm:fe=H_;break;case im:fe=ey;break;case"scroll":case"scrollend":fe=P_;break;case"wheel":fe=ny;break;case"copy":case"cut":case"paste":fe=V_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Pp;break;case"toggle":case"beforetoggle":fe=ay}var st=(n&4)!==0,kt=!st&&(t==="scroll"||t==="scrollend"),K=st?ae!==null?ae+"Capture":null:ae;st=[];for(var j=ee,J;j!==null;){var ge=j;if(J=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||J===null||K===null||(ge=Qs(j,K),ge!=null&&st.push(No(j,ge,J))),kt)break;j=j.return}0<st.length&&(ae=new fe(ae,Ye,null,a,pe),_e.push({event:ae,listeners:st}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",ae&&a!==Mu&&(Ye=a.relatedTarget||a.fromElement)&&(Ta(Ye)||Ye[yi]))break e;if((fe||ae)&&(ae=pe.window===pe?pe:(ae=pe.ownerDocument)?ae.defaultView||ae.parentWindow:window,fe?(Ye=a.relatedTarget||a.toElement,fe=ee,Ye=Ye?Ta(Ye):null,Ye!==null&&(kt=c(Ye),st=Ye.tag,Ye!==kt||st!==5&&st!==27&&st!==6)&&(Ye=null)):(fe=null,Ye=ee),fe!==Ye)){if(st=Lp,ge="onMouseLeave",K="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(st=Pp,ge="onPointerLeave",K="onPointerEnter",j="pointer"),kt=fe==null?ae:lr(fe),J=Ye==null?ae:lr(Ye),ae=new st(ge,j+"leave",fe,a,pe),ae.target=kt,ae.relatedTarget=J,ge=null,Ta(pe)===ee&&(st=new st(K,j+"enter",Ye,a,pe),st.target=J,st.relatedTarget=kt,ge=st),kt=ge,fe&&Ye)t:{for(st=iS,K=fe,j=Ye,J=0,ge=K;ge;ge=st(ge))J++;ge=0;for(var tt=j;tt;tt=st(tt))ge++;for(;0<J-ge;)K=st(K),J--;for(;0<ge-J;)j=st(j),ge--;for(;J--;){if(K===j||j!==null&&K===j.alternate){st=K;break t}K=st(K),j=st(j)}st=null}else st=null;fe!==null&&Ag(_e,ae,fe,st,!1),Ye!==null&&kt!==null&&Ag(_e,kt,Ye,st,!0)}}e:{if(ae=ee?lr(ee):window,fe=ae.nodeName&&ae.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ae.type==="file")var wt=kp;else if(Gp(ae))if(jp)wt=py;else{wt=dy;var $e=fy}else fe=ae.nodeName,!fe||fe.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ee&&Si(ee.elementType)&&(wt=kp):wt=hy;if(wt&&(wt=wt(t,ee))){Vp(_e,wt,a,pe);break e}$e&&$e(t,ae,ee),t==="focusout"&&ee&&ae.type==="number"&&ee.memoizedProps.value!=null&&Sn(ae,"number",ae.value)}switch($e=ee?lr(ee):window,t){case"focusin":(Gp($e)||$e.contentEditable==="true")&&(Wr=$e,Pu=ee,ro=null);break;case"focusout":ro=Pu=Wr=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Jp(_e,a,pe);break;case"selectionchange":if(gy)break;case"keydown":case"keyup":Jp(_e,a,pe)}var mt;if(Nu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Xr?Ip(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Bp&&a.locale!=="ko"&&(Xr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Xr&&(mt=Np()):(wa=pe,Au="value"in wa?wa.value:wa.textContent,Xr=!0)),$e=fc(ee,Mt),0<$e.length&&(Mt=new Op(Mt,t,null,a,pe),_e.push({event:Mt,listeners:$e}),mt?Mt.data=mt:(mt=Hp(a),mt!==null&&(Mt.data=mt)))),(mt=sy?oy(t,a):ly(t,a))&&(Mt=fc(ee,"onBeforeInput"),0<Mt.length&&($e=new Op("onBeforeInput","beforeinput",null,a,pe),_e.push({event:$e,listeners:Mt}),$e.data=mt)),$y(_e,t,ee,a,pe)}Eg(_e,n)})}function No(t,n,a){return{instance:t,listener:n,currentTarget:a}}function fc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Qs(t,a),u!=null&&o.unshift(No(t,u,d)),u=Qs(t,n),u!=null&&o.push(No(t,u,d))),t.tag===3)return o;t=t.return}return[]}function iS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ag(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var R=a,H=R.alternate,ee=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ee===null||(H=ee,u?(ee=Qs(a,d),ee!=null&&y.unshift(No(a,ee,H))):u||(ee=Qs(a,d),ee!=null&&y.push(No(a,ee,H)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var aS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function Rg(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(rS,"")}function wg(t,n){return n=Rg(n),Rg(t)===n}function Vt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hn(t,""+o);break;case"className":it(t,"class",o);break;case"tabIndex":it(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":it(t,a,o);break;case"style":Vr(t,o,d);break;case"data":if(n!=="object"){it(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=qi);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=xl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Ke(t,"popover",o);break;case"xlinkActuate":Qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ke(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=L_.get(a)||a,Ke(t,a,o))}}function ld(t,n,a,o,u,d){switch(a){case"style":Vr(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?hn(t,o):(typeof o=="number"||typeof o=="bigint")&&hn(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[_n]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ke(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,d,y,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var R=d=y=u=null,H=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":y=pe;break;case"checked":H=pe;break;case"defaultChecked":ee=pe;break;case"value":d=pe;break;case"defaultValue":R=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Vt(t,n,o,pe,a,null)}}Wi(t,d,R,H,ee,y,u,!1);return;case"select":yt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:Vt(t,n,u,R,a,null)}n=d,a=y,t.multiple=!!o,n!=null?ri(t,!!o,n,!1):a!=null&&ri(t,!!o,a,!0);return;case"textarea":yt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Vt(t,n,y,R,a,null)}Mn(t,o,u,d);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,H,o,a,null));return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<Do.length;o++)yt(Do[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,ee,o,a,null)}return;default:if(Si(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&ld(t,n,pe,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Vt(t,n,R,o,a,null))}function sS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,R=null,H=null,ee=null,pe=null;for(fe in a){var _e=a[fe];if(a.hasOwnProperty(fe)&&_e!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":H=_e;default:o.hasOwnProperty(fe)||Vt(t,n,fe,null,o,_e)}}for(var ae in o){var fe=o[ae];if(_e=a[ae],o.hasOwnProperty(ae)&&(fe!=null||_e!=null))switch(ae){case"type":d=fe;break;case"name":u=fe;break;case"checked":ee=fe;break;case"defaultChecked":pe=fe;break;case"value":y=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==_e&&Vt(t,n,ae,fe,o,_e)}}yn(t,y,R,H,ee,pe,d,u);return;case"select":fe=y=R=ae=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":fe=H;default:o.hasOwnProperty(d)||Vt(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":ae=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==H&&Vt(t,n,u,d,o,H)}n=R,a=y,o=fe,ae!=null?ri(t,!!a,ae,!1):!!o!=!!a&&(n!=null?ri(t,!!a,n,!0):ri(t,!!a,a?[]:"",!1));return;case"textarea":fe=ae=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Vt(t,n,R,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":ae=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Vt(t,n,y,u,o,d)}Ft(t,ae,fe);return;case"option":for(var Ye in a)ae=a[Ye],a.hasOwnProperty(Ye)&&ae!=null&&!o.hasOwnProperty(Ye)&&(Ye==="selected"?t.selected=!1:Vt(t,n,Ye,null,o,ae));for(H in o)ae=o[H],fe=a[H],o.hasOwnProperty(H)&&ae!==fe&&(ae!=null||fe!=null)&&(H==="selected"?t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":Vt(t,n,H,ae,o,fe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in a)ae=a[st],a.hasOwnProperty(st)&&ae!=null&&!o.hasOwnProperty(st)&&Vt(t,n,st,null,o,ae);for(ee in o)if(ae=o[ee],fe=a[ee],o.hasOwnProperty(ee)&&ae!==fe&&(ae!=null||fe!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,n));break;default:Vt(t,n,ee,ae,o,fe)}return;default:if(Si(n)){for(var kt in a)ae=a[kt],a.hasOwnProperty(kt)&&ae!==void 0&&!o.hasOwnProperty(kt)&&ld(t,n,kt,void 0,o,ae);for(pe in o)ae=o[pe],fe=a[pe],!o.hasOwnProperty(pe)||ae===fe||ae===void 0&&fe===void 0||ld(t,n,pe,ae,o,fe);return}}for(var K in a)ae=a[K],a.hasOwnProperty(K)&&ae!=null&&!o.hasOwnProperty(K)&&Vt(t,n,K,null,o,ae);for(_e in o)ae=o[_e],fe=a[_e],!o.hasOwnProperty(_e)||ae===fe||ae==null&&fe==null||Vt(t,n,_e,ae,o,fe)}function Cg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,R=u.duration;if(d&&R&&Cg(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ee=H.startTime;if(ee>R)break;var pe=H.transferSize,_e=H.initiatorType;pe&&Cg(_e)&&(H=H.responseEnd,y+=pe*(H<R?1:(R-ee)/(H-ee)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var cd=null,ud=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function Dg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ng(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function fd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dd=null;function lS(){var t=window.event;return t&&t.type==="popstate"?t===dd?!1:(dd=t,!0):(dd=null,!1)}var Ug=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(t){return Lg.resolve(null).then(t).catch(fS)}:Ug;function fS(t){setTimeout(function(){throw t})}function Xa(t){return t==="head"}function Og(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),_s(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Uo(a);for(var d=a.firstChild;d;){var y=d.nextSibling,R=d.nodeName;d[or]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Uo(t.ownerDocument.body);a=u}while(a);_s(n)}function Pg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function hd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hd(a),Ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function dS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[or])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function hS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function Bg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function pd(t){return t.data==="$?"||t.data==="$~"}function md(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function pS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var gd=null;function Fg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function zg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Ig(t,n,a){switch(n=dc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ks(t)}var hi=new Map,Hg=new Set;function hc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=G.d;G.d={f:mS,r:gS,D:xS,C:vS,L:_S,m:yS,X:MS,S:SS,M:bS};function mS(){var t=ca.f(),n=ac();return t||n}function gS(t){var n=Aa(t);n!==null&&n.tag===5&&n.type==="form"?i0(n):ca.r(t)}var gs=typeof document>"u"?null:document;function Gg(t,n,a){var o=gs;if(o&&typeof n=="string"&&n){var u=ft(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Hg.has(u)||(Hg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),w(n),o.head.appendChild(n)))}}function xS(t){ca.D(t),Gg("dns-prefetch",t,null)}function vS(t,n){ca.C(t,n),Gg("preconnect",t,n)}function _S(t,n,a){ca.L(t,n,a);var o=gs;if(o&&t&&n){var u='link[rel="preload"][as="'+ft(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ft(a.imageSizes)+'"]')):u+='[href="'+ft(t)+'"]';var d=u;switch(n){case"style":d=xs(t);break;case"script":d=vs(t)}hi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Lo(d))||n==="script"&&o.querySelector(Oo(d))||(n=o.createElement("link"),wn(n,"link",t),w(n),o.head.appendChild(n)))}}function yS(t,n){ca.m(t,n);var a=gs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ft(o)+'"][href="'+ft(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=vs(t)}if(!hi.has(d)&&(t=g({rel:"modulepreload",href:t},n),hi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oo(d)))return}o=a.createElement("link"),wn(o,"link",t),w(o),a.head.appendChild(o)}}}function SS(t,n,a){ca.S(t,n,a);var o=gs;if(o&&t){var u=Ra(o).hoistableStyles,d=xs(t);n=n||"default";var y=u.get(d);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Lo(d)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(d))&&xd(t,a);var H=y=o.createElement("link");w(H),wn(H,"link",t),H._p=new Promise(function(ee,pe){H.onload=ee,H.onerror=pe}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,pc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(d,y)}}}function MS(t,n){ca.X(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),d=o.get(u);d||(d=a.querySelector(Oo(u)),d||(t=g({src:t,async:!0},n),(n=hi.get(u))&&vd(t,n),d=a.createElement("script"),w(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function bS(t,n){ca.M(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),d=o.get(u);d||(d=a.querySelector(Oo(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&vd(t,n),d=a.createElement("script"),w(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Vg(t,n,a,o){var u=(u=ne.current)?hc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xs(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xs(a.href);var d=Ra(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Lo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),d||ES(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function xs(t){return'href="'+ft(t)+'"'}function Lo(t){return'link[rel="stylesheet"]['+t+"]"}function kg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function ES(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),w(n),t.head.appendChild(n))}function vs(t){return'[src="'+ft(t)+'"]'}function Oo(t){return"script[async]"+t}function jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ft(a.href)+'"]');if(o)return n.instance=o,w(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),w(o),wn(o,"style",u),pc(o,a.precedence,t),n.instance=o;case"stylesheet":u=xs(a.href);var d=t.querySelector(Lo(u));if(d)return n.state.loading|=4,n.instance=d,w(d),d;o=kg(a),(u=hi.get(u))&&xd(o,u),d=(t.ownerDocument||t).createElement("link"),w(d);var y=d;return y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),wn(d,"link",o),n.state.loading|=4,pc(d,a.precedence,t),n.instance=d;case"script":return d=vs(a.src),(u=t.querySelector(Oo(d)))?(n.instance=u,w(u),u):(o=a,(u=hi.get(d))&&(o=g({},a),vd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),w(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,t));return n.instance}function pc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function vd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var mc=null;function Xg(t,n,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[or]||d[on]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(d):o.set(y,[d])}}return o}function Wg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function TS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function AS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xs(o.href),d=n.querySelector(Lo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=gc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,w(d);return}d=n.ownerDocument||n,o=kg(o),(u=hi.get(u))&&xd(o,u),d=d.createElement("link"),w(d);var y=d;y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),wn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=gc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var _d=0;function RS(t,n){return t.stylesheets&&t.count===0&&vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&_d===0&&(_d=62500*oS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>_d?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var xc=null;function vc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,xc=new Map,n.forEach(wS,t),xc=null,gc.call(t))}function wS(t,n){if(!(n.state.loading&4)){var a=xc.get(t);if(a)var o=a.get(null);else{a=new Map,xc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Po={$$typeof:U,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function CS(t,n,a,o,u,d,y,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Yg(t,n,a,o,u,d,y,R,H,ee,pe,_e){return t=new CS(t,n,a,y,H,ee,pe,_e,R),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),t.current=d,d.stateNode=t,n=Qu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},tf(d),t}function Zg(t){return t?(t=Zr,t):Zr}function Kg(t,n,a,o,u,d){u=Zg(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Pa(t,o,n),a!==null&&(Xn(a,t,n),ho(a,t,n))}function Qg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function yd(t,n){Qg(t,n),(t=t.alternate)&&Qg(t,n)}function Jg(t){if(t.tag===13||t.tag===31){var n=dr(t,67108864);n!==null&&Xn(n,t,67108864),yd(t,67108864)}}function $g(t){if(t.tag===13||t.tag===31){var n=ei();n=qs(n);var a=dr(t,n);a!==null&&Xn(a,t,n),yd(t,n)}}var _c=!0;function DS(t,n,a,o){var u=B.T;B.T=null;var d=G.p;try{G.p=2,Sd(t,n,a,o)}finally{G.p=d,B.T=u}}function NS(t,n,a,o){var u=B.T;B.T=null;var d=G.p;try{G.p=8,Sd(t,n,a,o)}finally{G.p=d,B.T=u}}function Sd(t,n,a,o){if(_c){var u=Md(o);if(u===null)od(t,n,o,yc,a),tx(t,o);else if(LS(u,t,n,a,o))o.stopPropagation();else if(tx(t,o),n&4&&-1<US.indexOf(t)){for(;u!==null;){var d=Aa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Te(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var H=1<<31-Ie(y);R.entanglements[1]|=H,y&=~H}Bi(d),(Lt&6)===0&&(nc=b()+500,Co(0))}}break;case 31:case 13:R=dr(d,2),R!==null&&Xn(R,d,2),ac(),yd(d,2)}if(d=Md(o),d===null&&od(t,n,o,yc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else od(t,n,o,null,a)}}function Md(t){return t=bu(t),bd(t)}var yc=null;function bd(t){if(yc=null,t=Ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return yc=t,null}function ex(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X()){case de:return 2;case ve:return 8;case ce:case je:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Ed=!1,Wa=null,qa=null,Ya=null,Bo=new Map,Fo=new Map,Za=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tx(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function zo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&Jg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function LS(t,n,a,o,u){switch(n){case"focusin":return Wa=zo(Wa,t,n,a,o,u),!0;case"dragenter":return qa=zo(qa,t,n,a,o,u),!0;case"mouseover":return Ya=zo(Ya,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Bo.set(d,zo(Bo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Fo.set(d,zo(Fo.get(d)||null,t,n,a,o,u)),!0}return!1}function nx(t){var n=Ta(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Ui(t.priority,function(){$g(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ui(t.priority,function(){$g(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Md(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Mu=o,a.target.dispatchEvent(o),Mu=null}else return n=Aa(a),n!==null&&Jg(n),t.blockedOn=a,!1;n.shift()}return!0}function ix(t,n,a){Sc(t)&&a.delete(n)}function OS(){Ed=!1,Wa!==null&&Sc(Wa)&&(Wa=null),qa!==null&&Sc(qa)&&(qa=null),Ya!==null&&Sc(Ya)&&(Ya=null),Bo.forEach(ix),Fo.forEach(ix)}function Mc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ed||(Ed=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,OS)))}var bc=null;function ax(t){bc!==t&&(bc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bc===t&&(bc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(bd(o||a)===null)continue;break}var d=Aa(a);d!==null&&(t.splice(n,3),n-=3,Mf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function _s(t){function n(H){return Mc(H,t)}Wa!==null&&Mc(Wa,t),qa!==null&&Mc(qa,t),Ya!==null&&Mc(Ya,t),Bo.forEach(n),Fo.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)nx(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[_n]||null;if(typeof d=="function")y||ax(a);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[_n]||null)R=y.formAction;else if(bd(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),ax(a)}}}function rx(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Td(t){this._internalRoot=t}Ec.prototype.render=Td.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ei();Kg(a,o,t,n,null,null)},Ec.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Kg(t.current,2,null,t,null,null),ac(),n[yi]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ys();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&nx(t)}};var sx=e.version;if(sx!=="19.2.4")throw Error(s(527,sx,"19.2.4"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var PS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{Ee=Tc.inject(PS),Ae=Tc}catch{}}return Ho.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=h0,d=p0,y=m0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Yg(t,1,!1,null,null,a,o,null,u,d,y,rx),t[yi]=n.current,sd(t),new Td(n)},Ho.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=h0,y=p0,R=m0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Yg(t,1,!0,n,a??null,o,u,H,d,y,R,rx),n.context=Zg(null),a=n.current,o=ei(),o=qs(o),u=Oa(o),u.callback=null,Pa(a,u,o),a=o,n.current.lanes=a,Dn(n,a),Bi(n),t[yi]=n.current,sd(t),new Ec(n)},Ho.version="19.2.4",Ho}var gx;function XS(){if(gx)return wd.exports;gx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),wd.exports=jS(),wd.exports}var WS=XS();var xx="popstate";function qS(r={}){function e(s,l){let{pathname:c,search:f,hash:h}=s.location;return ph("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:el(l)}return ZS(e,i,null,r)}function $t(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ki(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YS(){return Math.random().toString(36).substring(2,10)}function vx(r,e){return{usr:r.state,key:r.key,idx:e}}function ph(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Gs(e):e,state:i,key:e&&e.key||s||YS()}}function el({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Gs(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function ZS(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,h="POP",m=null,p=x();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function x(){return(f.state||{idx:null}).idx}function g(){h="POP";let S=x(),_=S==null?null:S-p;p=S,m&&m({action:h,location:T.location,delta:_})}function v(S,_){h="PUSH";let D=ph(T.location,S,_);p=x()+1;let U=vx(D,p),P=T.createHref(D);try{f.pushState(U,"",P)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;l.location.assign(P)}c&&m&&m({action:h,location:T.location,delta:1})}function M(S,_){h="REPLACE";let D=ph(T.location,S,_);p=x();let U=vx(D,p),P=T.createHref(D);f.replaceState(U,"",P),c&&m&&m({action:h,location:T.location,delta:0})}function E(S){return KS(S)}let T={get action(){return h},get location(){return r(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(xx,g),m=S,()=>{l.removeEventListener(xx,g),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:M,go(S){return f.go(S)}};return T}function KS(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$t(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:el(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function Cv(r,e,i="/"){return QS(r,e,i,!1)}function QS(r,e,i,s){let l=typeof e=="string"?Gs(e):e,c=ya(l.pathname||"/",i);if(c==null)return null;let f=Dv(r);JS(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=cM(c);h=oM(f[m],p,s)}return h}function Dv(r,e=[],i=[],s="",l=!1){let c=(f,h,m=l,p)=>{let x={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&m)return;$t(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let g=xa([s,x.relativePath]),v=i.concat(x);f.children&&f.children.length>0&&($t(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Dv(f.children,e,v,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:rM(g,f.index),routesMeta:v})};return r.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Nv(f.path))c(f,h,!0,m)}),e}function Nv(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Nv(s.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>r.startsWith("/")&&m===""?"/":m)}function JS(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:sM(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var $S=/^:[\w-]+$/,eM=3,tM=2,nM=1,iM=10,aM=-2,_x=r=>r==="*";function rM(r,e){let i=r.split("/"),s=i.length;return i.some(_x)&&(s+=aM),e&&(s+=tM),i.filter(l=>!_x(l)).reduce((l,c)=>l+($S.test(c)?eM:c===""?nM:iM),s)}function sM(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function oM(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",g=lu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),v=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=lu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:xa([c,g.pathname]),pathnameBase:hM(xa([c,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(c=xa([c,g.pathnameBase]))}return f}function lu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=lM(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((p,{paramName:x,isOptional:g},v)=>{if(x==="*"){let E=h[v]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[v];return g&&!M?p[x]=void 0:p[x]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:r}}function lM(r,e=!1,i=!0){ki(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(s.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function cM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ki(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ya(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var uM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function fM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Gs(r):r,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=yx(i.substring(1),"/"):c=yx(i,e)):c=e,{pathname:c,search:pM(s),hash:mM(l)}}function yx(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ud(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Uv(r){let e=dM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function Lv(r,e,i,s=!1){let l;typeof r=="string"?l=Gs(r):(l={...r},$t(!l.pathname||!l.pathname.includes("?"),Ud("?","pathname","search",l)),$t(!l.pathname||!l.pathname.includes("#"),Ud("#","pathname","hash",l)),$t(!l.search||!l.search.includes("#"),Ud("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),g-=1;l.pathname=v.join("/")}h=g>=0?e[g]:"/"}let m=fM(l,h),p=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var xa=r=>r.join("/").replace(/\/\/+/g,"/"),hM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),pM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,mM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,gM=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function xM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function vM(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ov=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Pv(r,e){let i=r;if(typeof i!="string"||!uM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(Ov)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=ya(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{ki(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Bv=["POST","PUT","PATCH","DELETE"];new Set(Bv);var _M=["GET",...Bv];new Set(_M);var Vs=q.createContext(null);Vs.displayName="DataRouter";var pu=q.createContext(null);pu.displayName="DataRouterState";var yM=q.createContext(!1),Fv=q.createContext({isTransitioning:!1});Fv.displayName="ViewTransition";var SM=q.createContext(new Map);SM.displayName="Fetchers";var MM=q.createContext(null);MM.displayName="Await";var vi=q.createContext(null);vi.displayName="Navigation";var rl=q.createContext(null);rl.displayName="Location";var Xi=q.createContext({outlet:null,matches:[],isDataRoute:!1});Xi.displayName="Route";var dp=q.createContext(null);dp.displayName="RouteError";var zv="REACT_ROUTER_ERROR",bM="REDIRECT",EM="ROUTE_ERROR_RESPONSE";function TM(r){if(r.startsWith(`${zv}:${bM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function AM(r){if(r.startsWith(`${zv}:${EM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new gM(e.status,e.statusText,e.data)}catch{}}function RM(r,{relative:e}={}){$t(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=q.useContext(vi),{hash:l,pathname:c,search:f}=ll(r,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:xa([i,c])),s.createHref({pathname:h,search:f,hash:l})}function sl(){return q.useContext(rl)!=null}function Fr(){return $t(sl(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(rl).location}var Iv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Hv(r){q.useContext(vi).static||q.useLayoutEffect(r)}function ol(){let{isDataRoute:r}=q.useContext(Xi);return r?GM():wM()}function wM(){$t(sl(),"useNavigate() may be used only in the context of a <Router> component.");let r=q.useContext(Vs),{basename:e,navigator:i}=q.useContext(vi),{matches:s}=q.useContext(Xi),{pathname:l}=Fr(),c=JSON.stringify(Uv(s)),f=q.useRef(!1);return Hv(()=>{f.current=!0}),q.useCallback((m,p={})=>{if(ki(f.current,Iv),!f.current)return;if(typeof m=="number"){i.go(m);return}let x=Lv(m,JSON.parse(c),l,p.relative==="path");r==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:xa([e,x.pathname])),(p.replace?i.replace:i.push)(x,p.state,p)},[e,i,c,l,r])}q.createContext(null);function CM(){let{matches:r}=q.useContext(Xi),e=r[r.length-1];return e?e.params:{}}function ll(r,{relative:e}={}){let{matches:i}=q.useContext(Xi),{pathname:s}=Fr(),l=JSON.stringify(Uv(i));return q.useMemo(()=>Lv(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function DM(r,e){return Gv(r,e)}function Gv(r,e,i,s,l){$t(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=q.useContext(vi),{matches:f}=q.useContext(Xi),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",x=h?h.pathnameBase:"/",g=h&&h.route;{let D=g&&g.path||"";kv(p,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let v=Fr(),M;if(e){let D=typeof e=="string"?Gs(e):e;$t(x==="/"||D.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${D.pathname}" was given in the \`location\` prop.`),M=D}else M=v;let E=M.pathname||"/",T=E;if(x!=="/"){let D=x.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let S=Cv(r,{pathname:T});ki(g||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),ki(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=PM(S&&S.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:xa([x,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?x:xa([x,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,i,s,l);return e&&_?q.createElement(rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function NM(){let r=HM(),e=xM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:c},"ErrorBoundary")," or"," ",q.createElement("code",{style:c},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),i?q.createElement("pre",{style:l},i):null,f)}var UM=q.createElement(NM,null),Vv=class extends q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=AM(r.digest);i&&(r=i)}let e=r!==void 0?q.createElement(Xi.Provider,{value:this.props.routeContext},q.createElement(dp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?q.createElement(LM,{error:r},e):e}};Vv.contextType=yM;var Ld=new WeakMap;function LM({children:r,error:e}){let{basename:i}=q.useContext(vi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=TM(e.digest);if(s){let l=Ld.get(e);if(l)throw l;let c=Pv(s.location,i);if(Ov&&!Ld.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Ld.set(e,f),f}return q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function OM({routeContext:r,match:e,children:i}){let s=q.useContext(Vs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(Xi.Provider,{value:r},i)}function PM(r,e=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i?.errors;if(f!=null){let x=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);$t(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let h=!1,m=-1;if(i)for(let x=0;x<c.length;x++){let g=c[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=x),g.route.id){let{loaderData:v,errors:M}=i,E=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&s?(x,g)=>{s(x,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:vM(i.matches),errorInfo:g})}:void 0;return c.reduceRight((x,g,v)=>{let M,E=!1,T=null,S=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||UM,h&&(m<0&&v===0?(kv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):m===v&&(E=!0,S=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,v+1)),D=()=>{let U;return M?U=T:E?U=S:g.route.Component?U=q.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=x,q.createElement(OM,{match:g,routeContext:{outlet:x,matches:_,isDataRoute:i!=null},children:U})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?q.createElement(Vv,{location:i.location,revalidation:i.revalidation,component:T,error:M,children:D(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):D()},null)}function hp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function BM(r){let e=q.useContext(Vs);return $t(e,hp(r)),e}function FM(r){let e=q.useContext(pu);return $t(e,hp(r)),e}function zM(r){let e=q.useContext(Xi);return $t(e,hp(r)),e}function pp(r){let e=zM(r),i=e.matches[e.matches.length-1];return $t(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function IM(){return pp("useRouteId")}function HM(){let r=q.useContext(dp),e=FM("useRouteError"),i=pp("useRouteError");return r!==void 0?r:e.errors?.[i]}function GM(){let{router:r}=BM("useNavigate"),e=pp("useNavigate"),i=q.useRef(!1);return Hv(()=>{i.current=!0}),q.useCallback(async(l,c={})=>{ki(i.current,Iv),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var Sx={};function kv(r,e,i){!e&&!Sx[r]&&(Sx[r]=!0,ki(!1,i))}q.memo(VM);function VM({routes:r,future:e,state:i,onError:s}){return Gv(r,void 0,i,s,e)}function Ko(r){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function kM({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){$t(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),m=q.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Gs(i));let{pathname:p="/",search:x="",hash:g="",state:v=null,key:M="default"}=i,E=q.useMemo(()=>{let T=ya(p,h);return T==null?null:{location:{pathname:T,search:x,hash:g,state:v,key:M},navigationType:s}},[h,p,x,g,v,M,s]);return ki(E!=null,`<Router basename="${h}"> is not able to match the URL "${p}${x}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:q.createElement(vi.Provider,{value:m},q.createElement(rl.Provider,{children:e,value:E}))}function jM({children:r,location:e}){return DM(mh(r),e)}function mh(r,e=[]){let i=[];return q.Children.forEach(r,(s,l)=>{if(!q.isValidElement(s))return;let c=[...e,l];if(s.type===q.Fragment){i.push.apply(i,mh(s.props.children,c));return}$t(s.type===Ko,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=mh(s.props.children,c)),i.push(f)}),i}var $c="get",eu="application/x-www-form-urlencoded";function mu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function XM(r){return mu(r)&&r.tagName.toLowerCase()==="button"}function WM(r){return mu(r)&&r.tagName.toLowerCase()==="form"}function qM(r){return mu(r)&&r.tagName.toLowerCase()==="input"}function YM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ZM(r,e){return r.button===0&&(!e||e==="_self")&&!YM(r)}var Ac=null;function KM(){if(Ac===null)try{new FormData(document.createElement("form"),0),Ac=!1}catch{Ac=!0}return Ac}var QM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Od(r){return r!=null&&!QM.has(r)?(ki(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eu}"`),null):r}function JM(r,e){let i,s,l,c,f;if(WM(r)){let h=r.getAttribute("action");s=h?ya(h,e):null,i=r.getAttribute("method")||$c,l=Od(r.getAttribute("enctype"))||eu,c=new FormData(r)}else if(XM(r)||qM(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||h.getAttribute("action");if(s=m?ya(m,e):null,i=r.getAttribute("formmethod")||h.getAttribute("method")||$c,l=Od(r.getAttribute("formenctype"))||Od(h.getAttribute("enctype"))||eu,c=new FormData(h,r),!KM()){let{name:p,type:x,value:g}=r;if(x==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,g)}}else{if(mu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=$c,s=null,l=eu,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function $M(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&ya(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function e1(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function t1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function n1(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await e1(c,i);return f.links?f.links():[]}return[]}));return s1(s.flat(1).filter(t1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Mx(r,e,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let x=s.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function i1(r,e,{includeHydrateFallback:i}={}){return a1(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function a1(r){return[...new Set(r)]}function r1(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function s1(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(r1(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function jv(){let r=q.useContext(Vs);return mp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function o1(){let r=q.useContext(pu);return mp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var gp=q.createContext(void 0);gp.displayName="FrameworkContext";function Xv(){let r=q.useContext(gp);return mp(r,"You must render this element inside a <HydratedRouter> element"),r}function l1(r,e){let i=q.useContext(gp),[s,l]=q.useState(!1),[c,f]=q.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:g}=e,v=q.useRef(null);q.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let T=_=>{_.forEach(D=>{f(D.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[r]),q.useEffect(()=>{if(s){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[s]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,v,{}]:[c,v,{onFocus:Go(h,M),onBlur:Go(m,E),onMouseEnter:Go(p,M),onMouseLeave:Go(x,E),onTouchStart:Go(g,M)}]:[!1,v,{}]}function Go(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function c1({page:r,...e}){let{router:i}=jv(),s=q.useMemo(()=>Cv(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?q.createElement(f1,{page:r,matches:s,...e}):null}function u1(r){let{manifest:e,routeModules:i}=Xv(),[s,l]=q.useState([]);return q.useEffect(()=>{let c=!1;return n1(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function f1({page:r,matches:e,...i}){let s=Fr(),{future:l,manifest:c,routeModules:f}=Xv(),{basename:h}=jv(),{loaderData:m,matches:p}=o1(),x=q.useMemo(()=>Mx(r,e,p,c,s,"data"),[r,e,p,c,s]),g=q.useMemo(()=>Mx(r,e,p,c,s,"assets"),[r,e,p,c,s]),v=q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let T=new Set,S=!1;if(e.forEach(D=>{let U=c.routes[D.route.id];!U||!U.hasLoader||(!x.some(P=>P.route.id===D.route.id)&&D.route.id in m&&f[D.route.id]?.shouldRevalidate||U.hasClientLoader?S=!0:T.add(D.route.id))}),T.size===0)return[];let _=$M(r,h,l.unstable_trailingSlashAwareDataRequests,"data");return S&&T.size>0&&_.searchParams.set("_routes",e.filter(D=>T.has(D.route.id)).map(D=>D.route.id).join(",")),[_.pathname+_.search]},[h,l.unstable_trailingSlashAwareDataRequests,m,s,c,x,e,r,f]),M=q.useMemo(()=>i1(g,c),[g,c]),E=u1(g);return q.createElement(q.Fragment,null,v.map(T=>q.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),M.map(T=>q.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),E.map(({key:T,link:S})=>q.createElement("link",{key:T,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function d1(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var h1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{h1&&(window.__reactRouterVersion="7.13.0")}catch{}function p1({basename:r,children:e,unstable_useTransitions:i,window:s}){let l=q.useRef();l.current==null&&(l.current=qS({window:s,v5Compat:!0}));let c=l.current,[f,h]=q.useState({action:c.action,location:c.location}),m=q.useCallback(p=>{i===!1?h(p):q.startTransition(()=>h(p))},[i]);return q.useLayoutEffect(()=>c.listen(m),[c,m]),q.createElement(kM,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var Wv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qv=q.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:x,viewTransition:g,unstable_defaultShouldRevalidate:v,...M},E){let{basename:T,unstable_useTransitions:S}=q.useContext(vi),_=typeof p=="string"&&Wv.test(p),D=Pv(p,T);p=D.to;let U=RM(p,{relative:l}),[P,z,I]=l1(s,M),F=v1(p,{replace:f,state:h,target:m,preventScrollReset:x,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:v,unstable_useTransitions:S});function Y(N){e&&e(N),N.defaultPrevented||F(N)}let C=q.createElement("a",{...M,...I,href:D.absoluteURL||U,onClick:D.isExternal||c?e:Y,ref:d1(E,z),target:m,"data-discover":!_&&i==="render"?"true":void 0});return P&&!_?q.createElement(q.Fragment,null,C,q.createElement(c1,{page:U})):C});qv.displayName="Link";var m1=q.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},x){let g=ll(f,{relative:p.relative}),v=Fr(),M=q.useContext(pu),{navigator:E,basename:T}=q.useContext(vi),S=M!=null&&b1(g)&&h===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,D=v.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(D=D.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&T&&(U=ya(U,T)||U);const P=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let z=D===_||!l&&D.startsWith(_)&&D.charAt(P)==="/",I=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),F={isActive:z,isPending:I,isTransitioning:S},Y=z?e:void 0,C;typeof s=="function"?C=s(F):C=[s,z?"active":null,I?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let N=typeof c=="function"?c(F):c;return q.createElement(qv,{...p,"aria-current":Y,className:C,ref:x,style:N,to:f,viewTransition:h},typeof m=="function"?m(F):m)});m1.displayName="NavLink";var g1=q.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=$c,action:h,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:g,unstable_defaultShouldRevalidate:v,...M},E)=>{let{unstable_useTransitions:T}=q.useContext(vi),S=S1(),_=M1(h,{relative:p}),D=f.toLowerCase()==="get"?"get":"post",U=typeof h=="string"&&Wv.test(h),P=z=>{if(m&&m(z),z.defaultPrevented)return;z.preventDefault();let I=z.nativeEvent.submitter,F=I?.getAttribute("formmethod")||f,Y=()=>S(I||z.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:c,relative:p,preventScrollReset:x,viewTransition:g,unstable_defaultShouldRevalidate:v});T&&i!==!1?q.startTransition(()=>Y()):Y()};return q.createElement("form",{ref:E,method:D,action:_,onSubmit:s?m:P,...M,"data-discover":!U&&r==="render"?"true":void 0})});g1.displayName="Form";function x1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yv(r){let e=q.useContext(Vs);return $t(e,x1(r)),e}function v1(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let p=ol(),x=Fr(),g=ll(r,{relative:c});return q.useCallback(v=>{if(ZM(v,e)){v.preventDefault();let M=i!==void 0?i:el(x)===el(g),E=()=>p(r,{replace:M,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h});m?q.startTransition(()=>E()):E()}},[x,p,g,i,s,e,r,l,c,f,h,m])}var _1=0,y1=()=>`__${String(++_1)}__`;function S1(){let{router:r}=Yv("useSubmit"),{basename:e}=q.useContext(vi),i=IM(),s=r.fetch,l=r.navigate;return q.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:x,body:g}=JM(c,e);if(f.navigate===!1){let v=f.fetcherKey||y1();await s(v,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:x,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:x,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function M1(r,{relative:e}={}){let{basename:i}=q.useContext(vi),s=q.useContext(Xi);$t(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...ll(r||".",{relative:e})},f=Fr();if(r==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(x=>x==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let x=h.toString();c.search=x?`?${x}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:xa([i,c.pathname])),el(c)}function b1(r,{relative:e}={}){let i=q.useContext(Fv);$t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Yv("useViewTransitionState"),l=ll(r,{relative:e});if(!i.isTransitioning)return!1;let c=ya(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=ya(i.nextLocation.pathname,s)||i.nextLocation.pathname;return lu(l.pathname,f)!=null||lu(l.pathname,c)!=null}const Zv="memory-map-data",Kv="memory-map-context";function E1(r){try{localStorage.setItem(Zv,JSON.stringify(r))}catch(e){console.error("Failed to save memories:",e)}}function T1(){try{const r=localStorage.getItem(Zv);return r?JSON.parse(r):[]}catch(r){return console.error("Failed to load memories:",r),[]}}function A1(r){try{localStorage.setItem(Kv,JSON.stringify(r))}catch(e){console.error("Failed to save context:",e)}}function R1(){try{const r=localStorage.getItem(Kv);return r?JSON.parse(r):null}catch(r){return console.error("Failed to load context:",r),null}}function Qv({children:r,variant:e="primary",className:i="",...s}){const l="font-body font-semibold text-base tracking-wide transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2",c={primary:"bg-accent-primary text-bg-primary px-10 py-4 rounded-[4px] hover:bg-accent-secondary hover:shadow-[0_0_24px_rgba(212,165,116,0.25)] active:scale-[0.98]",secondary:"bg-transparent text-accent-primary border border-accent-primary/30 px-8 py-3 rounded-[4px] hover:border-accent-primary/60 hover:bg-accent-primary/5 active:scale-[0.98]",ghost:"bg-transparent text-accent-primary px-4 py-2 hover:text-accent-secondary",icon:"bg-accent-primary text-bg-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent-secondary hover:shadow-[0_0_20px_rgba(212,165,116,0.25)] active:scale-95"};return A.jsx("button",{className:`${l} ${c[e]} ${i}`,...s,children:r})}const xp="182",w1=0,bx=1,C1=2,tu=1,D1=2,Qo=3,sr=0,qn=1,ma=2,va=0,Os=1,Ex=2,Tx=3,Ax=4,N1=5,Ur=100,U1=101,L1=102,O1=103,P1=104,B1=200,F1=201,z1=202,I1=203,gh=204,xh=205,H1=206,G1=207,V1=208,k1=209,j1=210,X1=211,W1=212,q1=213,Y1=214,vh=0,_h=1,yh=2,Bs=3,Sh=4,Mh=5,bh=6,Eh=7,Jv=0,Z1=1,K1=2,Gi=0,$v=1,e_=2,t_=3,n_=4,i_=5,a_=6,r_=7,s_=300,Br=301,Fs=302,Th=303,Ah=304,gu=306,Rh=1e3,ga=1001,wh=1002,Cn=1003,Q1=1004,Rc=1005,On=1006,Pd=1007,Or=1008,gi=1009,o_=1010,l_=1011,tl=1012,vp=1013,ji=1014,Ii=1015,Sa=1016,_p=1017,yp=1018,nl=1020,c_=35902,u_=35899,f_=1021,d_=1022,Di=1023,Ma=1026,Pr=1027,h_=1028,Sp=1029,zs=1030,Mp=1031,bp=1033,nu=33776,iu=33777,au=33778,ru=33779,Ch=35840,Dh=35841,Nh=35842,Uh=35843,Lh=36196,Oh=37492,Ph=37496,Bh=37488,Fh=37489,zh=37490,Ih=37491,Hh=37808,Gh=37809,Vh=37810,kh=37811,jh=37812,Xh=37813,Wh=37814,qh=37815,Yh=37816,Zh=37817,Kh=37818,Qh=37819,Jh=37820,$h=37821,ep=36492,tp=36494,np=36495,ip=36283,ap=36284,rp=36285,sp=36286,J1=3200,$1=0,eb=1,ar="",mi="srgb",Is="srgb-linear",cu="linear",Ht="srgb",ys=7680,Rx=519,tb=512,nb=513,ib=514,Ep=515,ab=516,rb=517,Tp=518,sb=519,wx=35044,Cx="300 es",Hi=2e3,uu=2001;function p_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ob(){const r=fu("canvas");return r.style.display="block",r}const Dx={};function Nx(...r){const e="THREE."+r.shift();console.log(e,...r)}function ut(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Dt(...r){const e="THREE."+r.shift();console.error(e,...r)}function il(...r){const e=r.join(" ");e in Dx||(Dx[e]=!0,ut(...r))}function lb(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=Math.PI/180,op=180/Math.PI;function cl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function Et(r,e,i){return Math.max(e,Math.min(i,r))}function cb(r,e){return(r%e+e)%e}function Fd(r,e,i){return(1-i)*r+i*e}function Vo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class jt{constructor(e=0,i=0){jt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ul{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3],v=c[f+0],M=c[f+1],E=c[f+2],T=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(h>=1){e[i+0]=v,e[i+1]=M,e[i+2]=E,e[i+3]=T;return}if(g!==T||m!==v||p!==M||x!==E){let S=m*v+p*M+x*E+g*T;S<0&&(v=-v,M=-M,E=-E,T=-T,S=-S);let _=1-h;if(S<.9995){const D=Math.acos(S),U=Math.sin(D);_=Math.sin(_*D)/U,h=Math.sin(h*D)/U,m=m*_+v*h,p=p*_+M*h,x=x*_+E*h,g=g*_+T*h}else{m=m*_+v*h,p=p*_+M*h,x=x*_+E*h,g=g*_+T*h;const D=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=D,p*=D,x*=D,g*=D}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=c[f],v=c[f+1],M=c[f+2],E=c[f+3];return e[i]=h*E+x*g+m*M-p*v,e[i+1]=m*E+x*v+p*g-h*M,e[i+2]=p*E+x*M+h*v-m*g,e[i+3]=x*E-h*g-m*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(l/2),g=h(c/2),v=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*x*g+p*M*E,this._y=p*M*g-v*x*E,this._z=p*x*E+v*M*g,this._w=p*x*g-v*M*E;break;case"YXZ":this._x=v*x*g+p*M*E,this._y=p*M*g-v*x*E,this._z=p*x*E-v*M*g,this._w=p*x*g+v*M*E;break;case"ZXY":this._x=v*x*g-p*M*E,this._y=p*M*g+v*x*E,this._z=p*x*E+v*M*g,this._w=p*x*g-v*M*E;break;case"ZYX":this._x=v*x*g-p*M*E,this._y=p*M*g+v*x*E,this._z=p*x*E-v*M*g,this._w=p*x*g+v*M*E;break;case"YZX":this._x=v*x*g+p*M*E,this._y=p*M*g+v*x*E,this._z=p*x*E-v*M*g,this._w=p*x*g-v*M*E;break;case"XZY":this._x=v*x*g-p*M*E,this._y=p*M*g-v*x*E,this._z=p*x*E+v*M*g,this._w=p*x*g+v*M*E;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],v=s+h+g;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>h&&s>g){const M=2*Math.sqrt(1+s-h-g);this._w=(x-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-s-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+g-s-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+f*h+l*p-c*m,this._y=l*x+f*m+c*h-s*p,this._z=c*x+f*p+s*m-l*h,this._w=f*x-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,s=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ux.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ux.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),x=2*(h*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-h*x,this.y=s+m*x+h*p-c*g,this.z=l+m*g+c*x-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return zd.copy(this).projectOnVector(e),this.sub(zd)}reflect(e){return this.sub(zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zd=new re,Ux=new ul;class gt{constructor(e,i,s,l,c,f,h,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=f,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],x=s[4],g=s[7],v=s[2],M=s[5],E=s[8],T=l[0],S=l[3],_=l[6],D=l[1],U=l[4],P=l[7],z=l[2],I=l[5],F=l[8];return c[0]=f*T+h*D+m*z,c[3]=f*S+h*U+m*I,c[6]=f*_+h*P+m*F,c[1]=p*T+x*D+g*z,c[4]=p*S+x*U+g*I,c[7]=p*_+x*P+g*F,c[2]=v*T+M*D+E*z,c[5]=v*S+M*U+E*I,c[8]=v*_+M*P+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*f*x-i*h*p-s*c*x+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=x*f-h*p,v=h*m-x*c,M=p*c-f*m,E=i*g+s*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(l*p-x*s)*T,e[2]=(h*s-l*f)*T,e[3]=v*T,e[4]=(x*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=M*T,e[7]=(s*m-p*i)*T,e[8]=(f*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Id.makeScale(e,i)),this}rotate(e){return this.premultiply(Id.makeRotation(-e)),this}translate(e,i){return this.premultiply(Id.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Id=new gt,Lx=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ox=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ub(){const r={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ht&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ar?cu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Is]:{primaries:e,whitePoint:s,transfer:cu,toXYZ:Lx,fromXYZ:Ox,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:Ht,toXYZ:Lx,fromXYZ:Ox,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const At=ub();function _a(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ss;class fb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ss===void 0&&(Ss=fu("canvas")),Ss.width=e.width,Ss.height=e.height;const l=Ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ss}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=fu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=_a(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(_a(i[s]/255)*255):i[s]=_a(i[s]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let db=0;class Ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Hd(l[f].image)):c.push(Hd(l[f]))}else c=Hd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Hd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let hb=0;const Gd=new re;class zn extends ks{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=ga,l=ga,c=On,f=Or,h=Di,m=gi,p=zn.DEFAULT_ANISOTROPY,x=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=cl(),this.name="",this.source=new Ap(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gd).x}get height(){return this.source.getSize(Gd).y}get depth(){return this.source.getSize(Gd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=s_;zn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],v=m[1],M=m[5],E=m[9],T=m[2],S=m[6],_=m[10];if(Math.abs(x-v)<.01&&Math.abs(g-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,P=(M+1)/2,z=(_+1)/2,I=(x+v)/4,F=(g+T)/4,Y=(E+S)/4;return U>P&&U>z?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=I/s,c=F/s):P>z?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=I/l,c=Y/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=F/c,l=Y/c),this.set(s,l,c,i),this}let D=Math.sqrt((S-E)*(S-E)+(g-T)*(g-T)+(v-x)*(v-x));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(g-T)/D,this.z=(v-x)/D,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pb extends ks{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new zn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Ap(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends pb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class m_ extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mb extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ti):Ti.fromBufferAttribute(c,f),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Cc.subVectors(this.max,ko),Ms.subVectors(e.a,ko),bs.subVectors(e.b,ko),Es.subVectors(e.c,ko),Qa.subVectors(bs,Ms),Ja.subVectors(Es,bs),Tr.subVectors(Ms,Es);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Tr.z,Tr.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Tr.z,0,-Tr.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Tr.y,Tr.x,0];return!Vd(i,Ms,bs,Es,Cc)||(i=[1,0,0,0,1,0,0,0,1],!Vd(i,Ms,bs,Es,Cc))?!1:(Dc.crossVectors(Qa,Ja),i=[Dc.x,Dc.y,Dc.z],Vd(i,Ms,bs,Es,Cc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new re,new re,new re,new re,new re,new re,new re,new re],Ti=new re,wc=new fl,Ms=new re,bs=new re,Es=new re,Qa=new re,Ja=new re,Tr=new re,ko=new re,Cc=new re,Dc=new re,Ar=new re;function Vd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ar.fromArray(r,c);const h=l.x*Math.abs(Ar.x)+l.y*Math.abs(Ar.y)+l.z*Math.abs(Ar.z),m=e.dot(Ar),p=i.dot(Ar),x=s.dot(Ar);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const gb=new fl,jo=new re,kd=new re;class dl{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):gb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(jo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(kd)),this.expandByPoint(jo.copy(e.center).sub(kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fa=new re,jd=new re,Nc=new re,$a=new re,Xd=new re,Uc=new re,Wd=new re;class Rp{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){jd.copy(e).add(i).multiplyScalar(.5),Nc.copy(i).sub(e).normalize(),$a.copy(this.origin).sub(jd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Nc),h=$a.dot(this.direction),m=-$a.dot(Nc),p=$a.lengthSq(),x=Math.abs(1-f*f);let g,v,M,E;if(x>0)if(g=f*m-h,v=f*h-m,E=c*x,g>=0)if(v>=-E)if(v<=E){const T=1/x;g*=T,v*=T,M=g*(g+f*v+2*h)+v*(f*g+v+2*m)+p}else v=c,g=Math.max(0,-(f*v+h)),M=-g*g+v*(v+2*m)+p;else v=-c,g=Math.max(0,-(f*v+h)),M=-g*g+v*(v+2*m)+p;else v<=-E?(g=Math.max(0,-(-f*c+h)),v=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+v*(v+2*m)+p):v<=E?(g=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+p):(g=Math.max(0,-(f*c+h)),v=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+v*(v+2*m)+p);else v=f>0?-c:c,g=Math.max(0,-(f*v+h)),M=-g*g+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(jd).addScaledVector(Nc,v),M}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),x>=0?(c=(e.min.y-v.y)*x,f=(e.max.y-v.y)*x):(c=(e.max.y-v.y)*x,f=(e.min.y-v.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-v.z)*g,m=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,m=(e.min.z-v.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,s,l,c){Xd.subVectors(i,e),Uc.subVectors(s,e),Wd.crossVectors(Xd,Uc);let f=this.direction.dot(Wd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;$a.subVectors(this.origin,e);const m=h*this.direction.dot(Uc.crossVectors($a,Uc));if(m<0)return null;const p=h*this.direction.dot(Xd.cross($a));if(p<0||m+p>f)return null;const x=-h*$a.dot(Wd);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,s,l,c,f,h,m,p,x,g,v,M,E,T,S){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,x,g,v,M,E,T,S)}set(e,i,s,l,c,f,h,m,p,x,g,v,M,E,T,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=v,_[3]=M,_[7]=E,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ts.setFromMatrixColumn(e,0).length(),c=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=f*x,M=f*g,E=h*x,T=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=v-T*p,i[9]=-h*m,i[2]=T-v*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const v=m*x,M=m*g,E=p*x,T=p*g;i[0]=v+T*h,i[4]=E*h-M,i[8]=f*p,i[1]=f*g,i[5]=f*x,i[9]=-h,i[2]=M*h-E,i[6]=T+v*h,i[10]=f*m}else if(e.order==="ZXY"){const v=m*x,M=m*g,E=p*x,T=p*g;i[0]=v-T*h,i[4]=-f*g,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*x,i[9]=T-v*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const v=f*x,M=f*g,E=h*x,T=h*g;i[0]=m*x,i[4]=E*p-M,i[8]=v*p+T,i[1]=m*g,i[5]=T*p+v,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const v=f*m,M=f*p,E=h*m,T=h*p;i[0]=m*x,i[4]=T-v*g,i[8]=E*g+M,i[1]=g,i[5]=f*x,i[9]=-h*x,i[2]=-p*x,i[6]=M*g+E,i[10]=v-T*g}else if(e.order==="XZY"){const v=f*m,M=f*p,E=h*m,T=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=v*g+T,i[5]=f*x,i[9]=M*g-E,i[2]=E*g-M,i[6]=h*x,i[10]=T*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xb,e,vb)}lookAt(e,i,s){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),er.crossVectors(s,ti),er.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),er.crossVectors(s,ti)),er.normalize(),Lc.crossVectors(ti,er),l[0]=er.x,l[4]=Lc.x,l[8]=ti.x,l[1]=er.y,l[5]=Lc.y,l[9]=ti.y,l[2]=er.z,l[6]=Lc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],x=s[1],g=s[5],v=s[9],M=s[13],E=s[2],T=s[6],S=s[10],_=s[14],D=s[3],U=s[7],P=s[11],z=s[15],I=l[0],F=l[4],Y=l[8],C=l[12],N=l[1],k=l[5],se=l[9],oe=l[13],me=l[2],ue=l[6],B=l[10],G=l[14],te=l[3],be=l[7],ye=l[11],O=l[15];return c[0]=f*I+h*N+m*me+p*te,c[4]=f*F+h*k+m*ue+p*be,c[8]=f*Y+h*se+m*B+p*ye,c[12]=f*C+h*oe+m*G+p*O,c[1]=x*I+g*N+v*me+M*te,c[5]=x*F+g*k+v*ue+M*be,c[9]=x*Y+g*se+v*B+M*ye,c[13]=x*C+g*oe+v*G+M*O,c[2]=E*I+T*N+S*me+_*te,c[6]=E*F+T*k+S*ue+_*be,c[10]=E*Y+T*se+S*B+_*ye,c[14]=E*C+T*oe+S*G+_*O,c[3]=D*I+U*N+P*me+z*te,c[7]=D*F+U*k+P*ue+z*be,c[11]=D*Y+U*se+P*B+z*ye,c[15]=D*C+U*oe+P*G+z*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],x=e[2],g=e[6],v=e[10],M=e[14],E=e[3],T=e[7],S=e[11],_=e[15],D=m*M-p*v,U=h*M-p*g,P=h*v-m*g,z=f*M-p*x,I=f*v-m*x,F=f*g-h*x;return i*(T*D-S*U+_*P)-s*(E*D-S*z+_*I)+l*(E*U-T*z+_*F)-c*(E*P-T*I+S*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=e[9],v=e[10],M=e[11],E=e[12],T=e[13],S=e[14],_=e[15],D=g*S*p-T*v*p+T*m*M-h*S*M-g*m*_+h*v*_,U=E*v*p-x*S*p-E*m*M+f*S*M+x*m*_-f*v*_,P=x*T*p-E*g*p+E*h*M-f*T*M-x*h*_+f*g*_,z=E*g*m-x*T*m-E*h*v+f*T*v+x*h*S-f*g*S,I=i*D+s*U+l*P+c*z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=D*F,e[1]=(T*v*c-g*S*c-T*l*M+s*S*M+g*l*_-s*v*_)*F,e[2]=(h*S*c-T*m*c+T*l*p-s*S*p-h*l*_+s*m*_)*F,e[3]=(g*m*c-h*v*c-g*l*p+s*v*p+h*l*M-s*m*M)*F,e[4]=U*F,e[5]=(x*S*c-E*v*c+E*l*M-i*S*M-x*l*_+i*v*_)*F,e[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*_-i*m*_)*F,e[7]=(f*v*c-x*m*c+x*l*p-i*v*p-f*l*M+i*m*M)*F,e[8]=P*F,e[9]=(E*g*c-x*T*c-E*s*M+i*T*M+x*s*_-i*g*_)*F,e[10]=(f*T*c-E*h*c+E*s*p-i*T*p-f*s*_+i*h*_)*F,e[11]=(x*h*c-f*g*c-x*s*p+i*g*p+f*s*M-i*h*M)*F,e[12]=z*F,e[13]=(x*T*l-E*g*l+E*s*v-i*T*v-x*s*S+i*g*S)*F,e[14]=(E*h*l-f*T*l-E*s*m+i*T*m+f*s*S-i*h*S)*F,e[15]=(f*g*l-x*h*l+x*s*m-i*g*m-f*s*v+i*h*v)*F,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,x=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+s,x*m-l*f,0,p*m-l*h,x*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,x=f+f,g=h+h,v=c*p,M=c*x,E=c*g,T=f*x,S=f*g,_=h*g,D=m*p,U=m*x,P=m*g,z=s.x,I=s.y,F=s.z;return l[0]=(1-(T+_))*z,l[1]=(M+P)*z,l[2]=(E-U)*z,l[3]=0,l[4]=(M-P)*I,l[5]=(1-(v+_))*I,l[6]=(S+D)*I,l[7]=0,l[8]=(E+U)*F,l[9]=(S-D)*F,l[10]=(1-(v+T))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Ts.set(l[0],l[1],l[2]).length();const f=Ts.set(l[4],l[5],l[6]).length(),h=Ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,x=1/f,g=1/h;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=x,Ai.elements[5]*=x,Ai.elements[6]*=x,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,i.setFromRotationMatrix(Ai),s.x=c,s.y=f,s.z=h,this}makePerspective(e,i,s,l,c,f,h=Hi,m=!1){const p=this.elements,x=2*c/(i-e),g=2*c/(s-l),v=(i+e)/(i-e),M=(s+l)/(s-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===Hi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===uu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=Hi,m=!1){const p=this.elements,x=2/(i-e),g=2/(s-l),v=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===Hi)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===uu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ts=new re,Ai=new nn,xb=new re(0,0,0),vb=new re(1,1,1),er=new re,Lc=new re,ti=new re,Px=new nn,Bx=new ul;class ba{constructor(e=0,i=0,s=0,l=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Px.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Px,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Bx.setFromEuler(this),this.setFromQuaternion(Bx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class g_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _b=0;const Fx=new re,As=new ul,da=new nn,Oc=new re,Xo=new re,yb=new re,Sb=new ul,zx=new re(1,0,0),Ix=new re(0,1,0),Hx=new re(0,0,1),Gx={type:"added"},Mb={type:"removed"},Rs={type:"childadded",child:null},qd={type:"childremoved",child:null};class In extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new re,i=new ba,s=new ul,l=new re(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new gt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(zx,e)}rotateY(e){return this.rotateOnAxis(Ix,e)}rotateZ(e){return this.rotateOnAxis(Hx,e)}translateOnAxis(e,i){return Fx.copy(e).applyQuaternion(this.quaternion),this.position.add(Fx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(zx,e)}translateY(e){return this.translateOnAxis(Ix,e)}translateZ(e){return this.translateOnAxis(Hx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Oc.copy(e):Oc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Xo,Oc,this.up):da.lookAt(Oc,Xo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),As.setFromRotationMatrix(da),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gx),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Mb),qd.child=e,this.dispatchEvent(qd),qd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gx),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,yb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,Sb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),x=f(e.images),g=f(e.shapes),v=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}In.DEFAULT_UP=new re(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new re,ha=new re,Yd=new re,pa=new re,ws=new re,Cs=new re,Vx=new re,Zd=new re,Kd=new re,Qd=new re,Jd=new sn,$d=new sn,eh=new sn;class Ci{constructor(e=new re,i=new re,s=new re){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ri.subVectors(l,i),ha.subVectors(s,i),Yd.subVectors(e,i);const f=Ri.dot(Ri),h=Ri.dot(ha),m=Ri.dot(Yd),p=ha.dot(ha),x=ha.dot(Yd),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,M=(p*m-h*x)*v,E=(f*x-h*m)*v;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(f,pa.y),m.addScaledVector(h,pa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Jd.setScalar(0),$d.setScalar(0),eh.setScalar(0),Jd.fromBufferAttribute(e,i),$d.fromBufferAttribute(e,s),eh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Jd,c.x),f.addScaledVector($d,c.y),f.addScaledVector(eh,c.z),f}static isFrontFacing(e,i,s,l){return Ri.subVectors(s,i),ha.subVectors(e,i),Ri.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ci.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;ws.subVectors(l,s),Cs.subVectors(c,s),Zd.subVectors(e,s);const m=ws.dot(Zd),p=Cs.dot(Zd);if(m<=0&&p<=0)return i.copy(s);Kd.subVectors(e,l);const x=ws.dot(Kd),g=Cs.dot(Kd);if(x>=0&&g<=x)return i.copy(l);const v=m*g-x*p;if(v<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(s).addScaledVector(ws,f);Qd.subVectors(e,c);const M=ws.dot(Qd),E=Cs.dot(Qd);if(E>=0&&M<=E)return i.copy(c);const T=M*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Cs,h);const S=x*E-M*g;if(S<=0&&g-x>=0&&M-E>=0)return Vx.subVectors(c,l),h=(g-x)/(g-x+(M-E)),i.copy(l).addScaledVector(Vx,h);const _=1/(S+T+v);return f=T*_,h=v*_,i.copy(s).addScaledVector(ws,f).addScaledVector(Cs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function th(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Ot{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=s,At.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=At.workingColorSpace){if(e=cb(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=th(f,c,e+1/3),this.g=th(f,c,e),this.b=th(f,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const s=x_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return At.workingToColorSpace(Ln.copy(this),e),Math.round(Et(Ln.r*255,0,255))*65536+Math.round(Et(Ln.g*255,0,255))*256+Math.round(Et(Ln.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const x=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=x<=.5?g/(f+h):g/(2-f-h),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=mi){At.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,s=Ln.g,l=Ln.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+i,tr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(tr),e.getHSL(Pc);const s=Fd(tr.h,Pc.h,i),l=Fd(tr.s,Pc.s,i),c=Fd(tr.l,Pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ot;Ot.NAMES=x_;let bb=0;class js extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Os,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=xh,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(s.blending=this.blending),this.side!==sr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gh&&(s.blendSrc=this.blendSrc),this.blendDst!==xh&&(s.blendDst=this.blendDst),this.blendEquation!==Ur&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class v_ extends js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=Jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new re,Bc=new jt;let Eb=0;class Fn{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=wx,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Bc.fromBufferAttribute(this,i),Bc.applyMatrix3(e),this.setXY(i,Bc.x,Bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Vo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wx&&(e.usage=this.usage),e}}class __ extends Fn{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class y_ extends Fn{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ni extends Fn{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Tb=0;const pi=new nn,nh=new In,Ds=new re,ni=new fl,Wo=new fl,vn=new re;class ii extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p_(e)?y_:__)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new gt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,s){return pi.makeTranslation(e,i,s),this.applyMatrix4(pi),this}scale(e,i,s){return pi.makeScale(e,i,s),this.applyMatrix4(pi),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ni(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Wo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ni.min,Wo.min),ni.expandByPoint(vn),vn.addVectors(ni.max,Wo.max),ni.expandByPoint(vn)):(ni.expandByPoint(Wo.min),ni.expandByPoint(Wo.max))}ni.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)vn.fromBufferAttribute(h,p),m&&(Ds.fromBufferAttribute(e,p),vn.add(Ds)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Y=0;Y<s.count;Y++)h[Y]=new re,m[Y]=new re;const p=new re,x=new re,g=new re,v=new jt,M=new jt,E=new jt,T=new re,S=new re;function _(Y,C,N){p.fromBufferAttribute(s,Y),x.fromBufferAttribute(s,C),g.fromBufferAttribute(s,N),v.fromBufferAttribute(c,Y),M.fromBufferAttribute(c,C),E.fromBufferAttribute(c,N),x.sub(p),g.sub(p),M.sub(v),E.sub(v);const k=1/(M.x*E.y-E.x*M.y);isFinite(k)&&(T.copy(x).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(k),S.copy(g).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(k),h[Y].add(T),h[C].add(T),h[N].add(T),m[Y].add(S),m[C].add(S),m[N].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let Y=0,C=D.length;Y<C;++Y){const N=D[Y],k=N.start,se=N.count;for(let oe=k,me=k+se;oe<me;oe+=3)_(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const U=new re,P=new re,z=new re,I=new re;function F(Y){z.fromBufferAttribute(l,Y),I.copy(z);const C=h[Y];U.copy(C),U.sub(z.multiplyScalar(z.dot(C))).normalize(),P.crossVectors(I,C);const k=P.dot(m[Y])<0?-1:1;f.setXYZW(Y,U.x,U.y,U.z,k)}for(let Y=0,C=D.length;Y<C;++Y){const N=D[Y],k=N.start,se=N.count;for(let oe=k,me=k+se;oe<me;oe+=3)F(e.getX(oe+0)),F(e.getX(oe+1)),F(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Fn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new re,c=new re,f=new re,h=new re,m=new re,p=new re,x=new re,g=new re;if(e)for(let v=0,M=e.count;v<M;v+=3){const E=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),h.add(x),m.add(x),p.add(x),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,g=h.normalized,v=new p.constructor(m.length*x);let M=0,E=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*x;for(let _=0;_<x;_++)v[E++]=p[M++]}return new Fn(v,x,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const v=p[x],M=e(v,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,v=p.length;g<v;g++){const M=p[g];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let v=0,M=g.length;v<M;v++)x.push(g[v].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,x=f.length;p<x;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kx=new nn,Rr=new Rp,Fc=new dl,jx=new re,zc=new re,Ic=new re,Hc=new re,ih=new re,Gc=new re,Xx=new re,Vc=new re;class Ea extends In{constructor(e=new ii,i=new v_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Gc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(ih.fromBufferAttribute(g,e),f?Gc.addScaledVector(ih,x):Gc.addScaledVector(ih.sub(i),x))}i.add(Gc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(c),Rr.copy(e.ray).recast(e.near),!(Fc.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Fc,jx)===null||Rr.origin.distanceToSquared(jx)>(e.far-e.near)**2))&&(kx.copy(c).invert(),Rr.copy(e.ray).applyMatrix4(kx),!(s.boundingBox!==null&&Rr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Rr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const S=v[E],_=f[S.materialIndex],D=Math.max(S.start,M.start),U=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let P=D,z=U;P<z;P+=3){const I=h.getX(P),F=h.getX(P+1),Y=h.getX(P+2);l=kc(this,_,e,s,p,x,g,I,F,Y),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let S=E,_=T;S<_;S+=3){const D=h.getX(S),U=h.getX(S+1),P=h.getX(S+2);l=kc(this,f,e,s,p,x,g,D,U,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const S=v[E],_=f[S.materialIndex],D=Math.max(S.start,M.start),U=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let P=D,z=U;P<z;P+=3){const I=P,F=P+1,Y=P+2;l=kc(this,_,e,s,p,x,g,I,F,Y),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let S=E,_=T;S<_;S+=3){const D=S,U=S+1,P=S+2;l=kc(this,f,e,s,p,x,g,D,U,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Ab(r,e,i,s,l,c,f,h){let m;if(e.side===qn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===sr,h),m===null)return null;Vc.copy(h),Vc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Vc);return p<i.near||p>i.far?null:{distance:p,point:Vc.clone(),object:r}}function kc(r,e,i,s,l,c,f,h,m,p){r.getVertexPosition(h,zc),r.getVertexPosition(m,Ic),r.getVertexPosition(p,Hc);const x=Ab(r,e,i,s,zc,Ic,Hc,Xx);if(x){const g=new re;Ci.getBarycoord(Xx,zc,Ic,Hc,g),l&&(x.uv=Ci.getInterpolatedAttribute(l,h,m,p,g,new jt)),c&&(x.uv1=Ci.getInterpolatedAttribute(c,h,m,p,g,new jt)),f&&(x.normal=Ci.getInterpolatedAttribute(f,h,m,p,g,new re),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new re,materialIndex:0};Ci.getNormal(zc,Ic,Hc,v.normal),x.face=v,x.barycoord=g}return x}class hl extends ii{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],x=[],g=[];let v=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ni(p,3)),this.setAttribute("normal",new Ni(x,3)),this.setAttribute("uv",new Ni(g,2));function E(T,S,_,D,U,P,z,I,F,Y,C){const N=P/F,k=z/Y,se=P/2,oe=z/2,me=I/2,ue=F+1,B=Y+1;let G=0,te=0;const be=new re;for(let ye=0;ye<B;ye++){const O=ye*k-oe;for(let $=0;$<ue;$++){const xe=$*N-se;be[T]=xe*D,be[S]=O*U,be[_]=me,p.push(be.x,be.y,be.z),be[T]=0,be[S]=0,be[_]=I>0?1:-1,x.push(be.x,be.y,be.z),g.push($/F),g.push(1-ye/Y),G+=1}}for(let ye=0;ye<Y;ye++)for(let O=0;O<F;O++){const $=v+O+ue*ye,xe=v+O+ue*(ye+1),Re=v+(O+1)+ue*(ye+1),Ge=v+(O+1)+ue*ye;m.push($,xe,Ge),m.push(xe,Re,Ge),te+=6}h.addGroup(M,te,C),M+=te,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Bn(r){const e={};for(let i=0;i<r.length;i++){const s=Hs(r[i]);for(const l in s)e[l]=s[l]}return e}function Rb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function S_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const wb={clone:Hs,merge:Bn};var Cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cb,this.fragmentShader=Db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Rb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class M_ extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new re,Wx=new jt,qx=new jt;class wi extends M_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return op*2*Math.atan(Math.tan(Bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,i){return this.getViewBounds(e,Wx,qx),i.subVectors(qx,Wx)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Bd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ns=-90,Us=1;class Nb extends In{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(Ns,Us,e,i);l.layers=this.layers,this.add(l);const c=new wi(Ns,Us,e,i);c.layers=this.layers,this.add(c);const f=new wi(Ns,Us,e,i);f.layers=this.layers,this.add(f);const h=new wi(Ns,Us,e,i);h.layers=this.layers,this.add(h);const m=new wi(Ns,Us,e,i);m.layers=this.layers,this.add(m);const p=new wi(Ns,Us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===uu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,x]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,x),e.setRenderTarget(g,v,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class b_ extends zn{constructor(e=[],i=Br,s,l,c,f,h,m,p,x){super(e,i,s,l,c,f,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E_ extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new b_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new hl(5,5,5),c=new xi({name:"CubemapFromEquirect",uniforms:Hs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:va});c.uniforms.tEquirect.value=i;const f=new Ea(l,c),h=i.minFilter;return i.minFilter===Or&&(i.minFilter=On),new Nb(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class jc extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ub={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,s),_=this._getHandJoint(p,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=x.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ub)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new jc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Lb extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ob extends zn{constructor(e=null,i=1,s=1,l,c,f,h,m,p=Cn,x=Cn,g,v){super(null,f,h,m,p,x,l,c,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rh=new re,Pb=new re,Bb=new gt;class Nr{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=rh.subVectors(s,i).cross(Pb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(rh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Bb.getNormalMatrix(e),l=this.coplanarPoint(rh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new dl,Fb=new jt(.5,.5),Xc=new re;class T_{constructor(e=new Nr,i=new Nr,s=new Nr,l=new Nr,c=new Nr,f=new Nr){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Hi,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],v=c[6],M=c[7],E=c[8],T=c[9],S=c[10],_=c[11],D=c[12],U=c[13],P=c[14],z=c[15];if(l[0].setComponents(p-f,M-x,_-E,z-D).normalize(),l[1].setComponents(p+f,M+x,_+E,z+D).normalize(),l[2].setComponents(p+h,M+g,_+T,z+U).normalize(),l[3].setComponents(p-h,M-g,_-T,z-U).normalize(),s)l[4].setComponents(m,v,S,P).normalize(),l[5].setComponents(p-m,M-v,_-S,z-P).normalize();else if(l[4].setComponents(p-m,M-v,_-S,z-P).normalize(),i===Hi)l[5].setComponents(p+m,M+v,_+S,z+P).normalize();else if(i===uu)l[5].setComponents(m,v,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const i=Fb.distanceTo(e.center);return wr.radius=.7071067811865476+i,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Xc.x=l.normal.x>0?e.max.x:e.min.x,Xc.y=l.normal.y>0?e.max.y:e.min.y,Xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zb extends js{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new re,hu=new re,Yx=new nn,qo=new Rp,Wc=new dl,sh=new re,Zx=new re;class Ib extends In{constructor(e=new ii,i=new zb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)du.fromBufferAttribute(i,l-1),hu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=du.distanceTo(hu);e.setAttribute("lineDistance",new Ni(s,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Wc.copy(s.boundingSphere),Wc.applyMatrix4(l),Wc.radius+=c,e.ray.intersectsSphere(Wc)===!1)return;Yx.copy(l).invert(),qo.copy(e.ray).applyMatrix4(Yx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=s.index,v=s.attributes.position;if(x!==null){const M=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=M,S=E-1;T<S;T+=p){const _=x.getX(T),D=x.getX(T+1),U=qc(this,e,qo,m,_,D,T);U&&i.push(U)}if(this.isLineLoop){const T=x.getX(E-1),S=x.getX(M),_=qc(this,e,qo,m,T,S,E-1);_&&i.push(_)}}else{const M=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=M,S=E-1;T<S;T+=p){const _=qc(this,e,qo,m,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=qc(this,e,qo,m,E-1,M,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function qc(r,e,i,s,l,c,f){const h=r.geometry.attributes.position;if(du.fromBufferAttribute(h,l),hu.fromBufferAttribute(h,c),i.distanceSqToSegment(du,hu,sh,Zx)>s)return;sh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(sh);if(!(p<e.near||p>e.far))return{distance:p,point:Zx.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Kx=new re,Qx=new re;class Hb extends Ib{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Kx.fromBufferAttribute(i,l),Qx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Kx.distanceTo(Qx);e.setAttribute("lineDistance",new Ni(s,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gb extends js{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jx=new nn,lp=new Rp,Yc=new dl,Zc=new re;class Vb extends In{constructor(e=new ii,i=new Gb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(l),Yc.radius+=c,e.ray.intersectsSphere(Yc)===!1)return;Jx.copy(l).invert(),lp.copy(e.ray).applyMatrix4(Jx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,g=s.attributes.position;if(p!==null){const v=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let E=v,T=M;E<T;E++){const S=p.getX(E);Zc.fromBufferAttribute(g,S),$x(Zc,S,m,l,e,i,this)}}else{const v=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let E=v,T=M;E<T;E++)Zc.fromBufferAttribute(g,E),$x(Zc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function $x(r,e,i,s,l,c,f){const h=lp.distanceSqToPoint(r);if(h<i){const m=new re;lp.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class al extends zn{constructor(e,i,s=ji,l,c,f,h=Cn,m=Cn,p,x=Ma,g=1){if(x!==Ma&&x!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,c,f,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ap(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class kb extends al{constructor(e,i=ji,s=Br,l,c,f=Cn,h=Cn,m,p=Ma){const x={width:e,height:e,depth:1},g=[x,x,x,x,x,x];super(e,e,i,s,l,c,f,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class A_ extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xu extends ii{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,x=m+1,g=e/h,v=i/m,M=[],E=[],T=[],S=[];for(let _=0;_<x;_++){const D=_*v-f;for(let U=0;U<p;U++){const P=U*g-c;E.push(P,-D,0),T.push(0,0,1),S.push(U/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let D=0;D<h;D++){const U=D+p*_,P=D+p*(_+1),z=D+1+p*(_+1),I=D+1+p*_;M.push(U,P,I),M.push(P,z,I)}this.setIndex(M),this.setAttribute("position",new Ni(E,3)),this.setAttribute("normal",new Ni(T,3)),this.setAttribute("uv",new Ni(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.width,e.height,e.widthSegments,e.heightSegments)}}class jb extends xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xb extends js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wb extends js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wp extends M_{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qb extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ev(r,e,i,s){const l=Yb(s);switch(i){case f_:return r*e;case h_:return r*e/l.components*l.byteLength;case Sp:return r*e/l.components*l.byteLength;case zs:return r*e*2/l.components*l.byteLength;case Mp:return r*e*2/l.components*l.byteLength;case d_:return r*e*3/l.components*l.byteLength;case Di:return r*e*4/l.components*l.byteLength;case bp:return r*e*4/l.components*l.byteLength;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case au:case ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Uh:return Math.max(r,16)*Math.max(e,8)/4;case Ch:case Nh:return Math.max(r,8)*Math.max(e,8)/2;case Lh:case Oh:case Bh:case Fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ph:case zh:case Ih:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case jh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case $h:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ep:case tp:case np:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ip:case ap:return Math.ceil(r/4)*Math.ceil(e/4)*8;case rp:case sp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Yb(r){switch(r){case gi:case o_:return{byteLength:1,components:1};case tl:case l_:case Sa:return{byteLength:2,components:1};case _p:case yp:return{byteLength:2,components:4};case ji:case vp:case Ii:return{byteLength:4,components:1};case c_:case u_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);function R_(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Zb(r){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,x),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const x=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,x);else{g.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<g.length;M++){const E=g[v],T=g[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,g[v]=T)}g.length=v+1;for(let M=0,E=g.length;M<E;M++){const T=g[M];r.bufferSubData(p,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qb=`#ifdef USE_ALPHAHASH
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
#endif`,Jb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nE=`#ifdef USE_AOMAP
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
#endif`,iE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aE=`#ifdef USE_BATCHING
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
#endif`,rE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cE=`#ifdef USE_IRIDESCENCE
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
#endif`,uE=`#ifdef USE_BUMPMAP
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
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_E=`#define PI 3.141592653589793
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
} // validated`,yE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SE=`vec3 transformedNormal = objectNormal;
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
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AE="gl_FragColor = linearToOutputTexel( gl_FragColor );",RE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wE=`#ifdef USE_ENVMAP
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
#endif`,CE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,LE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BE=`#ifdef USE_FOG
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
}`,zE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GE=`uniform bool receiveShadow;
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
#endif`,VE=`#ifdef USE_ENVMAP
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
#endif`,kE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qE=`PhysicalMaterial material;
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
#endif`,YE=`uniform sampler2D dfgLUT;
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
}`,ZE=`
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
#endif`,KE=`#if defined( RE_IndirectDiffuse )
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
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rT=`#if defined( USE_POINTS_UV )
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
#endif`,sT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fT=`#ifdef USE_MORPHTARGETS
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
#endif`,dT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vT=`#ifdef USE_NORMALMAP
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
#endif`,_T=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ST=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ET=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OT=`float getShadowMask() {
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
}`,PT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BT=`#ifdef USE_SKINNING
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
#endif`,zT=`#ifdef USE_SKINNING
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
#endif`,IT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kT=`#ifdef USE_TRANSMISSION
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
#endif`,jT=`#ifdef USE_TRANSMISSION
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
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KT=`uniform sampler2D t2D;
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
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`#include <common>
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
}`,nA=`#if DEPTH_PACKING == 3200
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
}`,iA=`#define DISTANCE
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
}`,aA=`#define DISTANCE
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
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`uniform float scale;
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
}`,lA=`uniform vec3 diffuse;
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
}`,cA=`#include <common>
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
}`,uA=`uniform vec3 diffuse;
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
}`,fA=`#define LAMBERT
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
}`,dA=`#define LAMBERT
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
}`,hA=`#define MATCAP
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
}`,pA=`#define MATCAP
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
}`,mA=`#define NORMAL
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
}`,gA=`#define NORMAL
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
}`,xA=`#define PHONG
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
}`,vA=`#define PHONG
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
}`,_A=`#define STANDARD
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
}`,yA=`#define STANDARD
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
}`,SA=`#define TOON
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
}`,MA=`#define TOON
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
}`,bA=`uniform float size;
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
}`,EA=`uniform vec3 diffuse;
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
}`,TA=`#include <common>
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
}`,AA=`uniform vec3 color;
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
}`,RA=`uniform float rotation;
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
}`,wA=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:Kb,alphahash_pars_fragment:Qb,alphamap_fragment:Jb,alphamap_pars_fragment:$b,alphatest_fragment:eE,alphatest_pars_fragment:tE,aomap_fragment:nE,aomap_pars_fragment:iE,batching_pars_vertex:aE,batching_vertex:rE,begin_vertex:sE,beginnormal_vertex:oE,bsdfs:lE,iridescence_fragment:cE,bumpmap_pars_fragment:uE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:dE,clipping_planes_pars_vertex:hE,clipping_planes_vertex:pE,color_fragment:mE,color_pars_fragment:gE,color_pars_vertex:xE,color_vertex:vE,common:_E,cube_uv_reflection_fragment:yE,defaultnormal_vertex:SE,displacementmap_pars_vertex:ME,displacementmap_vertex:bE,emissivemap_fragment:EE,emissivemap_pars_fragment:TE,colorspace_fragment:AE,colorspace_pars_fragment:RE,envmap_fragment:wE,envmap_common_pars_fragment:CE,envmap_pars_fragment:DE,envmap_pars_vertex:NE,envmap_physical_pars_fragment:VE,envmap_vertex:UE,fog_vertex:LE,fog_pars_vertex:OE,fog_fragment:PE,fog_pars_fragment:BE,gradientmap_pars_fragment:FE,lightmap_pars_fragment:zE,lights_lambert_fragment:IE,lights_lambert_pars_fragment:HE,lights_pars_begin:GE,lights_toon_fragment:kE,lights_toon_pars_fragment:jE,lights_phong_fragment:XE,lights_phong_pars_fragment:WE,lights_physical_fragment:qE,lights_physical_pars_fragment:YE,lights_fragment_begin:ZE,lights_fragment_maps:KE,lights_fragment_end:QE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:$E,logdepthbuf_pars_vertex:eT,logdepthbuf_vertex:tT,map_fragment:nT,map_pars_fragment:iT,map_particle_fragment:aT,map_particle_pars_fragment:rT,metalnessmap_fragment:sT,metalnessmap_pars_fragment:oT,morphinstance_vertex:lT,morphcolor_vertex:cT,morphnormal_vertex:uT,morphtarget_pars_vertex:fT,morphtarget_vertex:dT,normal_fragment_begin:hT,normal_fragment_maps:pT,normal_pars_fragment:mT,normal_pars_vertex:gT,normal_vertex:xT,normalmap_pars_fragment:vT,clearcoat_normal_fragment_begin:_T,clearcoat_normal_fragment_maps:yT,clearcoat_pars_fragment:ST,iridescence_pars_fragment:MT,opaque_fragment:bT,packing:ET,premultiplied_alpha_fragment:TT,project_vertex:AT,dithering_fragment:RT,dithering_pars_fragment:wT,roughnessmap_fragment:CT,roughnessmap_pars_fragment:DT,shadowmap_pars_fragment:NT,shadowmap_pars_vertex:UT,shadowmap_vertex:LT,shadowmask_pars_fragment:OT,skinbase_vertex:PT,skinning_pars_vertex:BT,skinning_vertex:FT,skinnormal_vertex:zT,specularmap_fragment:IT,specularmap_pars_fragment:HT,tonemapping_fragment:GT,tonemapping_pars_fragment:VT,transmission_fragment:kT,transmission_pars_fragment:jT,uv_pars_fragment:XT,uv_pars_vertex:WT,uv_vertex:qT,worldpos_vertex:YT,background_vert:ZT,background_frag:KT,backgroundCube_vert:QT,backgroundCube_frag:JT,cube_vert:$T,cube_frag:eA,depth_vert:tA,depth_frag:nA,distance_vert:iA,distance_frag:aA,equirect_vert:rA,equirect_frag:sA,linedashed_vert:oA,linedashed_frag:lA,meshbasic_vert:cA,meshbasic_frag:uA,meshlambert_vert:fA,meshlambert_frag:dA,meshmatcap_vert:hA,meshmatcap_frag:pA,meshnormal_vert:mA,meshnormal_frag:gA,meshphong_vert:xA,meshphong_frag:vA,meshphysical_vert:_A,meshphysical_frag:yA,meshtoon_vert:SA,meshtoon_frag:MA,points_vert:bA,points_frag:EA,shadow_vert:TA,shadow_frag:AA,sprite_vert:RA,sprite_frag:wA},ze={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},zi={basic:{uniforms:Bn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Bn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ot(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Bn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Bn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Bn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Ot(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Bn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Bn([ze.points,ze.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Bn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Bn([ze.common,ze.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Bn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Bn([ze.sprite,ze.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Bn([ze.common,ze.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Bn([ze.lights,ze.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};zi.physical={uniforms:Bn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Kc={r:0,b:0,g:0},Cr=new ba,CA=new nn;function DA(r,e,i,s,l,c,f){const h=new Ot(0);let m=c===!0?0:1,p,x,g=null,v=0,M=null;function E(U){let P=U.isScene===!0?U.background:null;return P&&P.isTexture&&(P=(U.backgroundBlurriness>0?i:e).get(P)),P}function T(U){let P=!1;const z=E(U);z===null?_(h,m):z&&z.isColor&&(_(z,1),P=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(U,P){const z=E(P);z&&(z.isCubeTexture||z.mapping===gu)?(x===void 0&&(x=new Ea(new hl(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Hs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(I,F,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Cr.copy(P.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),x.material.uniforms.envMap.value=z,x.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(CA.makeRotationFromEuler(Cr)),x.material.toneMapped=At.getTransfer(z.colorSpace)!==Ht,(g!==z||v!==z.version||M!==r.toneMapping)&&(x.material.needsUpdate=!0,g=z,v=z.version,M=r.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Ea(new xu(2,2),new xi({name:"BackgroundMaterial",uniforms:Hs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=At.getTransfer(z.colorSpace)!==Ht,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||v!==z.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,g=z,v=z.version,M=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,P){U.getRGB(Kc,S_(r)),s.buffers.color.setClear(Kc.r,Kc.g,Kc.b,P,f)}function D(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,P=1){h.set(U),m=P,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:T,addToRenderList:S,dispose:D}}function NA(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function h(N,k,se,oe,me){let ue=!1;const B=g(oe,se,k);c!==B&&(c=B,p(c.object)),ue=M(N,oe,se,me),ue&&E(N,oe,se,me),me!==null&&e.update(me,r.ELEMENT_ARRAY_BUFFER),(ue||f)&&(f=!1,P(N,k,se,oe),me!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function m(){return r.createVertexArray()}function p(N){return r.bindVertexArray(N)}function x(N){return r.deleteVertexArray(N)}function g(N,k,se){const oe=se.wireframe===!0;let me=s[N.id];me===void 0&&(me={},s[N.id]=me);let ue=me[k.id];ue===void 0&&(ue={},me[k.id]=ue);let B=ue[oe];return B===void 0&&(B=v(m()),ue[oe]=B),B}function v(N){const k=[],se=[],oe=[];for(let me=0;me<i;me++)k[me]=0,se[me]=0,oe[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:oe,object:N,attributes:{},index:null}}function M(N,k,se,oe){const me=c.attributes,ue=k.attributes;let B=0;const G=se.getAttributes();for(const te in G)if(G[te].location>=0){const ye=me[te];let O=ue[te];if(O===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),ye===void 0||ye.attribute!==O||O&&ye.data!==O.data)return!0;B++}return c.attributesNum!==B||c.index!==oe}function E(N,k,se,oe){const me={},ue=k.attributes;let B=0;const G=se.getAttributes();for(const te in G)if(G[te].location>=0){let ye=ue[te];ye===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor));const O={};O.attribute=ye,ye&&ye.data&&(O.data=ye.data),me[te]=O,B++}c.attributes=me,c.attributesNum=B,c.index=oe}function T(){const N=c.newAttributes;for(let k=0,se=N.length;k<se;k++)N[k]=0}function S(N){_(N,0)}function _(N,k){const se=c.newAttributes,oe=c.enabledAttributes,me=c.attributeDivisors;se[N]=1,oe[N]===0&&(r.enableVertexAttribArray(N),oe[N]=1),me[N]!==k&&(r.vertexAttribDivisor(N,k),me[N]=k)}function D(){const N=c.newAttributes,k=c.enabledAttributes;for(let se=0,oe=k.length;se<oe;se++)k[se]!==N[se]&&(r.disableVertexAttribArray(se),k[se]=0)}function U(N,k,se,oe,me,ue,B){B===!0?r.vertexAttribIPointer(N,k,se,me,ue):r.vertexAttribPointer(N,k,se,oe,me,ue)}function P(N,k,se,oe){T();const me=oe.attributes,ue=se.getAttributes(),B=k.defaultAttributeValues;for(const G in ue){const te=ue[G];if(te.location>=0){let be=me[G];if(be===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(be=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(be=N.instanceColor)),be!==void 0){const ye=be.normalized,O=be.itemSize,$=e.get(be);if($===void 0)continue;const xe=$.buffer,Re=$.type,Ge=$.bytesPerElement,ne=Re===r.INT||Re===r.UNSIGNED_INT||be.gpuType===vp;if(be.isInterleavedBufferAttribute){const he=be.data,Le=he.stride,Me=be.offset;if(he.isInstancedInterleavedBuffer){for(let Ce=0;Ce<te.locationSize;Ce++)_(te.location+Ce,he.meshPerAttribute);N.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ce=0;Ce<te.locationSize;Ce++)S(te.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let Ce=0;Ce<te.locationSize;Ce++)U(te.location+Ce,O/te.locationSize,Re,ye,Le*Ge,(Me+O/te.locationSize*Ce)*Ge,ne)}else{if(be.isInstancedBufferAttribute){for(let he=0;he<te.locationSize;he++)_(te.location+he,be.meshPerAttribute);N.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let he=0;he<te.locationSize;he++)S(te.location+he);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let he=0;he<te.locationSize;he++)U(te.location+he,O/te.locationSize,Re,ye,O*Ge,O/te.locationSize*he*Ge,ne)}}else if(B!==void 0){const ye=B[G];if(ye!==void 0)switch(ye.length){case 2:r.vertexAttrib2fv(te.location,ye);break;case 3:r.vertexAttrib3fv(te.location,ye);break;case 4:r.vertexAttrib4fv(te.location,ye);break;default:r.vertexAttrib1fv(te.location,ye)}}}}D()}function z(){Y();for(const N in s){const k=s[N];for(const se in k){const oe=k[se];for(const me in oe)x(oe[me].object),delete oe[me];delete k[se]}delete s[N]}}function I(N){if(s[N.id]===void 0)return;const k=s[N.id];for(const se in k){const oe=k[se];for(const me in oe)x(oe[me].object),delete oe[me];delete k[se]}delete s[N.id]}function F(N){for(const k in s){const se=s[k];if(se[N.id]===void 0)continue;const oe=se[N.id];for(const me in oe)x(oe[me].object),delete oe[me];delete se[N.id]}}function Y(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function UA(r,e,i){let s;function l(p){s=p}function c(p,x){r.drawArrays(s,p,x),i.update(x,s,1)}function f(p,x,g){g!==0&&(r.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function h(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let M=0;for(let E=0;E<g;E++)M+=x[E];i.update(M,s,1)}function m(p,x,g,v){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],x[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,x,0,v,0,g);let E=0;for(let T=0;T<g;T++)E+=x[T]*v[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function LA(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Di&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const Y=F===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==gi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!Y)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ut("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:P,maxSamples:z,samples:I}}function OA(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Nr,h=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const M=g.length!==0||v||s!==0||l;return l=v,s=g.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=x(g,v,0)},this.setState=function(g,v,M){const E=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,_=r.get(g);if(!l||E===null||E.length===0||c&&!S)c?x(null):p();else{const D=c?0:s,U=D*4;let P=_.clippingState||null;m.value=P,P=x(E,v,U,M);for(let z=0;z!==U;++z)P[z]=i[z];_.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(g,v,M,E){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=m.value,E!==!0||S===null){const _=M+T*4,D=v.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,P=M;U!==T;++U,P+=4)f.copy(g[U]).applyMatrix4(D,h),f.normal.toArray(S,P),S[P+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function PA(r){let e=new WeakMap;function i(f,h){return h===Th?f.mapping=Br:h===Ah&&(f.mapping=Fs),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Th||h===Ah)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new E_(m.height);return p.fromEquirectangularTexture(r,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const rr=4,tv=[.125,.215,.35,.446,.526,.582],Lr=20,BA=256,Yo=new wp,nv=new Ot;let oh=null,lh=0,ch=0,uh=!1;const FA=new re;class iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=FA}=c;oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,lh,ch),this._renderer.xr.enabled=uh,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Br||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Sa,format:Di,colorSpace:Is,depthBuffer:!1},l=av(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zA(c)),this._blurMaterial=HA(c,e,i),this._ggxMaterial=IA(c,e,i)}return l}_compileMaterial(e){const i=new Ea(new ii,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,s,l,c){const m=new wi(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,M=g.toneMapping;g.getClearColor(nv),g.toneMapping=Gi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ea(new hl,new v_({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let _=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,_=!0):(S.color.copy(nv),_=!0);for(let U=0;U<6;U++){const P=U%3;P===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[U],c.y,c.z)):P===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[U]));const z=this._cubeSize;Ls(l,P*z,U>2?z:0,z,z),g.setRenderTarget(l),_&&g.render(T,m),g.render(e,m)}g.toneMapping=M,g.autoClear=v,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Br||e.mapping===Fs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Yo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),v=0+p*1.25,M=g*v,{_lodMax:E}=this,T=this._sizeLods[s],S=3*T*(s>E-rr?s-E+rr:0),_=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Ls(c,S,_,3*T,2*T),l.setRenderTarget(c),l.render(h,Yo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Ls(e,S,_,3*T,2*T),l.setRenderTarget(e),l.render(h,Yo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const v=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Lr-1),T=c/E,S=isFinite(c)?1+Math.floor(x*T):Lr;S>Lr&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Lr}`);const _=[];let D=0;for(let F=0;F<Lr;++F){const Y=F/T,C=Math.exp(-Y*Y/2);_.push(C),F===0?D+=C:F<S&&(D+=2*C)}for(let F=0;F<_.length;F++)_[F]=_[F]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-s;const P=this._sizeLods[l],z=3*P*(l>U-rr?l-U+rr:0),I=4*(this._cubeSize-P);Ls(i,z,I,3*P,2*P),m.setRenderTarget(i),m.render(g,Yo)}}function zA(r){const e=[],i=[],s=[];let l=r;const c=r-rr+1+tv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-rr?m=tv[f-r+rr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,v=[x,x,g,x,g,g,x,x,g,g,x,g],M=6,E=6,T=3,S=2,_=1,D=new Float32Array(T*E*M),U=new Float32Array(S*E*M),P=new Float32Array(_*E*M);for(let I=0;I<M;I++){const F=I%3*2/3-1,Y=I>2?0:-1,C=[F,Y,0,F+2/3,Y,0,F+2/3,Y+1,0,F,Y,0,F+2/3,Y+1,0,F,Y+1,0];D.set(C,T*E*I),U.set(v,S*E*I);const N=[I,I,I,I,I,I];P.set(N,_*E*I)}const z=new ii;z.setAttribute("position",new Fn(D,T)),z.setAttribute("uv",new Fn(U,S)),z.setAttribute("faceIndex",new Fn(P,_)),s.push(new Ea(z,null)),l>rr&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function av(r,e,i){const s=new Vi(r,e,i);return s.texture.mapping=gu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ls(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function IA(r,e,i){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function HA(r,e,i){const s=new Float32Array(Lr),l=new re(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:vu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function rv(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function sv(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function vu(){return`

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
	`}function GA(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Th||m===Ah,x=m===Br||m===Fs;if(p||x){let g=e.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new iv(r)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new iv(r)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function VA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&il("WebGLRenderer: "+s+" extension not supported."),l}}}function kA(r,e,i,s){const l={},c=new WeakMap;function f(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const M=c.get(v);M&&(e.remove(M),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER)}function p(g){const v=[],M=g.index,E=g.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let U=0,P=D.length;U<P;U+=3){const z=D[U+0],I=D[U+1],F=D[U+2];v.push(z,I,I,F,F,z)}}else if(E!==void 0){const D=E.array;T=E.version;for(let U=0,P=D.length/3-1;U<P;U+=3){const z=U+0,I=U+1,F=U+2;v.push(z,I,I,F,F,z)}}else return;const S=new(p_(v)?y_:__)(v,1);S.version=T;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function x(g){const v=c.get(g);if(v){const M=g.index;M!==null&&v.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function jA(r,e,i){let s;function l(v){s=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,M){r.drawElements(s,M,c,v*f),i.update(M,s,1)}function p(v,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,v*f,E),i.update(M,s,E))}function x(v,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,v,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];i.update(S,s,1)}function g(v,M,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)p(v[_]/f,M[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,v,0,T,0,E);let _=0;for(let D=0;D<E;D++)_+=M[D]*T[D];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function XA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Dt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function WA(r,e,i){const s=new WeakMap,l=new sn;function c(f,h,m){const p=f.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let v=s.get(h);if(v===void 0||v.count!==g){let N=function(){Y.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var M=N;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let P=0;E===!0&&(P=1),T===!0&&(P=2),S===!0&&(P=3);let z=h.attributes.position.count*P,I=1;z>e.maxTextureSize&&(I=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const F=new Float32Array(z*I*4*g),Y=new m_(F,z,I,g);Y.type=Ii,Y.needsUpdate=!0;const C=P*4;for(let k=0;k<g;k++){const se=_[k],oe=D[k],me=U[k],ue=z*I*4*k;for(let B=0;B<se.count;B++){const G=B*C;E===!0&&(l.fromBufferAttribute(se,B),F[ue+G+0]=l.x,F[ue+G+1]=l.y,F[ue+G+2]=l.z,F[ue+G+3]=0),T===!0&&(l.fromBufferAttribute(oe,B),F[ue+G+4]=l.x,F[ue+G+5]=l.y,F[ue+G+6]=l.z,F[ue+G+7]=0),S===!0&&(l.fromBufferAttribute(me,B),F[ue+G+8]=l.x,F[ue+G+9]=l.y,F[ue+G+10]=l.z,F[ue+G+11]=me.itemSize===4?l.w:1)}}v={count:g,texture:Y,size:new jt(z,I)},s.set(h,v),h.addEventListener("dispose",N)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function qA(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const YA={[$v]:"LINEAR_TONE_MAPPING",[e_]:"REINHARD_TONE_MAPPING",[t_]:"CINEON_TONE_MAPPING",[n_]:"ACES_FILMIC_TONE_MAPPING",[a_]:"AGX_TONE_MAPPING",[r_]:"NEUTRAL_TONE_MAPPING",[i_]:"CUSTOM_TONE_MAPPING"};function ZA(r,e,i,s,l){const c=new Vi(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Vi(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),h=new ii;h.setAttribute("position",new Ni([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ni([0,2,0,0,2,0],2));const m=new jb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ea(h,m),x=new wp(-1,1,1,-1,0,1);let g=null,v=null,M=!1,E,T=null,S=[],_=!1;this.setSize=function(D,U){c.setSize(D,U),f.setSize(D,U);for(let P=0;P<S.length;P++){const z=S[P];z.setSize&&z.setSize(D,U)}},this.setEffects=function(D){S=D,_=S.length>0&&S[0].isRenderPass===!0;const U=c.width,P=c.height;for(let z=0;z<S.length;z++){const I=S[z];I.setSize&&I.setSize(U,P)}},this.begin=function(D,U){if(M||D.toneMapping===Gi&&S.length===0)return!1;if(T=U,U!==null){const P=U.width,z=U.height;(c.width!==P||c.height!==z)&&this.setSize(P,z)}return _===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=Gi,!0},this.hasRenderPass=function(){return _},this.end=function(D,U){D.toneMapping=E,M=!0;let P=c,z=f;for(let I=0;I<S.length;I++){const F=S[I];if(F.enabled!==!1&&(F.render(D,z,P,U),F.needsSwap!==!1)){const Y=P;P=z,z=Y}}if(g!==D.outputColorSpace||v!==D.toneMapping){g=D.outputColorSpace,v=D.toneMapping,m.defines={},At.getTransfer(g)===Ht&&(m.defines.SRGB_TRANSFER="");const I=YA[v];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,D.setRenderTarget(T),D.render(p,x),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const w_=new zn,cp=new al(1,1),C_=new m_,D_=new mb,N_=new b_,ov=[],lv=[],cv=new Float32Array(16),uv=new Float32Array(9),fv=new Float32Array(4);function Xs(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=ov[l];if(c===void 0&&(c=new Float32Array(l),ov[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function mn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function gn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function _u(r,e){let i=lv[e];i===void 0&&(i=new Int32Array(e),lv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function KA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function QA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2fv(this.addr,e),gn(i,e)}}function JA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;r.uniform3fv(this.addr,e),gn(i,e)}}function $A(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4fv(this.addr,e),gn(i,e)}}function e2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;fv.set(s),r.uniformMatrix2fv(this.addr,!1,fv),gn(i,s)}}function t2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;uv.set(s),r.uniformMatrix3fv(this.addr,!1,uv),gn(i,s)}}function n2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;cv.set(s),r.uniformMatrix4fv(this.addr,!1,cv),gn(i,s)}}function i2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function a2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2iv(this.addr,e),gn(i,e)}}function r2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3iv(this.addr,e),gn(i,e)}}function s2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4iv(this.addr,e),gn(i,e)}}function o2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function l2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2uiv(this.addr,e),gn(i,e)}}function c2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3uiv(this.addr,e),gn(i,e)}}function u2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4uiv(this.addr,e),gn(i,e)}}function f2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(cp.compareFunction=i.isReversedDepthBuffer()?Tp:Ep,c=cp):c=w_,i.setTexture2D(e||c,l)}function d2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||D_,l)}function h2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||N_,l)}function p2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||C_,l)}function m2(r){switch(r){case 5126:return KA;case 35664:return QA;case 35665:return JA;case 35666:return $A;case 35674:return e2;case 35675:return t2;case 35676:return n2;case 5124:case 35670:return i2;case 35667:case 35671:return a2;case 35668:case 35672:return r2;case 35669:case 35673:return s2;case 5125:return o2;case 36294:return l2;case 36295:return c2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return f2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return h2;case 36289:case 36303:case 36311:case 36292:return p2}}function g2(r,e){r.uniform1fv(this.addr,e)}function x2(r,e){const i=Xs(e,this.size,2);r.uniform2fv(this.addr,i)}function v2(r,e){const i=Xs(e,this.size,3);r.uniform3fv(this.addr,i)}function _2(r,e){const i=Xs(e,this.size,4);r.uniform4fv(this.addr,i)}function y2(r,e){const i=Xs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function S2(r,e){const i=Xs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function M2(r,e){const i=Xs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function b2(r,e){r.uniform1iv(this.addr,e)}function E2(r,e){r.uniform2iv(this.addr,e)}function T2(r,e){r.uniform3iv(this.addr,e)}function A2(r,e){r.uniform4iv(this.addr,e)}function R2(r,e){r.uniform1uiv(this.addr,e)}function w2(r,e){r.uniform2uiv(this.addr,e)}function C2(r,e){r.uniform3uiv(this.addr,e)}function D2(r,e){r.uniform4uiv(this.addr,e)}function N2(r,e,i){const s=this.cache,l=e.length,c=_u(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=cp:f=w_;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function U2(r,e,i){const s=this.cache,l=e.length,c=_u(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||D_,c[f])}function L2(r,e,i){const s=this.cache,l=e.length,c=_u(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||N_,c[f])}function O2(r,e,i){const s=this.cache,l=e.length,c=_u(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||C_,c[f])}function P2(r){switch(r){case 5126:return g2;case 35664:return x2;case 35665:return v2;case 35666:return _2;case 35674:return y2;case 35675:return S2;case 35676:return M2;case 5124:case 35670:return b2;case 35667:case 35671:return E2;case 35668:case 35672:return T2;case 35669:case 35673:return A2;case 5125:return R2;case 36294:return w2;case 36295:return C2;case 36296:return D2;case 35678:case 36198:case 36298:case 36306:case 35682:return N2;case 35679:case 36299:case 36307:return U2;case 35680:case 36300:case 36308:case 36293:return L2;case 36289:case 36303:case 36311:case 36292:return O2}}class B2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=m2(i.type)}}class F2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=P2(i.type)}}class z2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const fh=/(\w+)(\])?(\[|\.)?/g;function dv(r,e){r.seq.push(e),r.map[e.id]=e}function I2(r,e,i){const s=r.name,l=s.length;for(fh.lastIndex=0;;){const c=fh.exec(s),f=fh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){dv(i,p===void 0?new B2(h,r,e):new F2(h,r,e));break}else{let g=i.map[h];g===void 0&&(g=new z2(h),dv(i,g)),i=g}}}class su{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);I2(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function hv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const H2=37297;let G2=0;function V2(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const pv=new gt;function k2(r){At._getMatrix(pv,At.workingColorSpace,r);const e=`mat3( ${pv.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(r)){case cu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function mv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+V2(r.getShaderSource(e),h)}else return c}function j2(r,e){const i=k2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const X2={[$v]:"Linear",[e_]:"Reinhard",[t_]:"Cineon",[n_]:"ACESFilmic",[a_]:"AgX",[r_]:"Neutral",[i_]:"Custom"};function W2(r,e){const i=X2[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Qc=new re;function q2(){At.getLuminanceCoefficients(Qc);const r=Qc.x.toFixed(4),e=Qc.y.toFixed(4),i=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function Z2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function K2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function Jo(r){return r!==""}function gv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q2=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(r){return r.replace(Q2,$2)}const J2=new Map;function $2(r,e){let i=xt[e];if(i===void 0){const s=J2.get(e);if(s!==void 0)i=xt[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return up(i)}const eR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vv(r){return r.replace(eR,tR)}function tR(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function _v(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const nR={[tu]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function iR(r){return nR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aR={[Br]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[gu]:"ENVMAP_TYPE_CUBE_UV"};function rR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const sR={[Fs]:"ENVMAP_MODE_REFRACTION"};function oR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":sR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lR={[Jv]:"ENVMAP_BLENDING_MULTIPLY",[Z1]:"ENVMAP_BLENDING_MIX",[K1]:"ENVMAP_BLENDING_ADD"};function cR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lR[r.combine]||"ENVMAP_BLENDING_NONE"}function uR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function fR(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=iR(i),p=rR(i),x=oR(i),g=cR(i),v=uR(i),M=Y2(i),E=Z2(c),T=l.createProgram();let S,_,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),_.length>0&&(_+=`
`)):(S=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),_=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?xt.tonemapping_pars_fragment:"",i.toneMapping!==Gi?W2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,j2("linearToOutputTexel",i.outputColorSpace),q2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),f=up(f),f=gv(f,i),f=xv(f,i),h=up(h),h=gv(h,i),h=xv(h,i),f=vv(f),h=vv(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Cx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Cx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=D+S+f,P=D+_+h,z=hv(l,l.VERTEX_SHADER,U),I=hv(l,l.FRAGMENT_SHADER,P);l.attachShader(T,z),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(k){if(r.debug.checkShaderErrors){const se=l.getProgramInfoLog(T)||"",oe=l.getShaderInfoLog(z)||"",me=l.getShaderInfoLog(I)||"",ue=se.trim(),B=oe.trim(),G=me.trim();let te=!0,be=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,z,I);else{const ye=mv(l,z,"vertex"),O=mv(l,I,"fragment");Dt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ue+`
`+ye+`
`+O)}else ue!==""?ut("WebGLProgram: Program Info Log:",ue):(B===""||G==="")&&(be=!1);be&&(k.diagnostics={runnable:te,programLog:ue,vertexShader:{log:B,prefix:S},fragmentShader:{log:G,prefix:_}})}l.deleteShader(z),l.deleteShader(I),Y=new su(l,T),C=K2(l,T)}let Y;this.getUniforms=function(){return Y===void 0&&F(this),Y};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(T,H2)),N},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=G2++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=I,this}let dR=0;class hR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new pR(e),i.set(e,s)),s}}class pR{constructor(e){this.id=dR++,this.code=e,this.usedTimes=0}}function mR(r,e,i,s,l,c,f){const h=new g_,m=new hR,p=new Set,x=[],g=new Map,v=l.logarithmicDepthBuffer;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,N,k,se,oe){const me=se.fog,ue=oe.geometry,B=C.isMeshStandardMaterial?se.environment:null,G=(C.isMeshStandardMaterial?i:e).get(C.envMap||B),te=G&&G.mapping===gu?G.image.height:null,be=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&ut("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const ye=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,O=ye!==void 0?ye.length:0;let $=0;ue.morphAttributes.position!==void 0&&($=1),ue.morphAttributes.normal!==void 0&&($=2),ue.morphAttributes.color!==void 0&&($=3);let xe,Re,Ge,ne;if(be){const Tt=zi[be];xe=Tt.vertexShader,Re=Tt.fragmentShader}else xe=C.vertexShader,Re=C.fragmentShader,m.update(C),Ge=m.getVertexShaderID(C),ne=m.getFragmentShaderID(C);const he=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),Me=oe.isInstancedMesh===!0,Ce=oe.isBatchedMesh===!0,Je=!!C.map,Rt=!!C.matcap,ot=!!G,nt=!!C.aoMap,vt=!!C.lightMap,lt=!!C.bumpMap,Kt=!!C.normalMap,V=!!C.displacementMap,Xt=!!C.emissiveMap,Ze=!!C.metalnessMap,De=!!C.roughnessMap,Xe=C.anisotropy>0,L=C.clearcoat>0,b=C.dispersion>0,X=C.iridescence>0,de=C.sheen>0,ve=C.transmission>0,ce=Xe&&!!C.anisotropyMap,je=L&&!!C.clearcoatMap,Ue=L&&!!C.clearcoatNormalMap,We=L&&!!C.clearcoatRoughnessMap,at=X&&!!C.iridescenceMap,Ee=X&&!!C.iridescenceThicknessMap,Ae=de&&!!C.sheenColorMap,Ve=de&&!!C.sheenRoughnessMap,Ie=!!C.specularMap,Oe=!!C.specularColorMap,pt=!!C.specularIntensityMap,W=ve&&!!C.transmissionMap,Be=ve&&!!C.thicknessMap,we=!!C.gradientMap,He=!!C.alphaMap,Te=C.alphaTest>0,Se=!!C.alphaHash,Ne=!!C.extensions;let ct=Gi;C.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ct=r.toneMapping);const Bt={shaderID:be,shaderType:C.type,shaderName:C.name,vertexShader:xe,fragmentShader:Re,defines:C.defines,customVertexShaderID:Ge,customFragmentShaderID:ne,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Ce,batchingColor:Ce&&oe._colorsTexture!==null,instancing:Me,instancingColor:Me&&oe.instanceColor!==null,instancingMorph:Me&&oe.morphTexture!==null,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Is,alphaToCoverage:!!C.alphaToCoverage,map:Je,matcap:Rt,envMap:ot,envMapMode:ot&&G.mapping,envMapCubeUVHeight:te,aoMap:nt,lightMap:vt,bumpMap:lt,normalMap:Kt,displacementMap:V,emissiveMap:Xt,normalMapObjectSpace:Kt&&C.normalMapType===eb,normalMapTangentSpace:Kt&&C.normalMapType===$1,metalnessMap:Ze,roughnessMap:De,anisotropy:Xe,anisotropyMap:ce,clearcoat:L,clearcoatMap:je,clearcoatNormalMap:Ue,clearcoatRoughnessMap:We,dispersion:b,iridescence:X,iridescenceMap:at,iridescenceThicknessMap:Ee,sheen:de,sheenColorMap:Ae,sheenRoughnessMap:Ve,specularMap:Ie,specularColorMap:Oe,specularIntensityMap:pt,transmission:ve,transmissionMap:W,thicknessMap:Be,gradientMap:we,opaque:C.transparent===!1&&C.blending===Os&&C.alphaToCoverage===!1,alphaMap:He,alphaTest:Te,alphaHash:Se,combine:C.combine,mapUv:Je&&T(C.map.channel),aoMapUv:nt&&T(C.aoMap.channel),lightMapUv:vt&&T(C.lightMap.channel),bumpMapUv:lt&&T(C.bumpMap.channel),normalMapUv:Kt&&T(C.normalMap.channel),displacementMapUv:V&&T(C.displacementMap.channel),emissiveMapUv:Xt&&T(C.emissiveMap.channel),metalnessMapUv:Ze&&T(C.metalnessMap.channel),roughnessMapUv:De&&T(C.roughnessMap.channel),anisotropyMapUv:ce&&T(C.anisotropyMap.channel),clearcoatMapUv:je&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&T(C.sheenRoughnessMap.channel),specularMapUv:Ie&&T(C.specularMap.channel),specularColorMapUv:Oe&&T(C.specularColorMap.channel),specularIntensityMapUv:pt&&T(C.specularIntensityMap.channel),transmissionMapUv:W&&T(C.transmissionMap.channel),thicknessMapUv:Be&&T(C.thicknessMap.channel),alphaMapUv:He&&T(C.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Kt||Xe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!ue.attributes.uv&&(Je||He),fog:!!me,useFog:C.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Le,skinning:oe.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:$,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:Je&&C.map.isVideoTexture===!0&&At.getTransfer(C.map.colorSpace)===Ht,decodeVideoTextureEmissive:Xt&&C.emissiveMap.isVideoTexture===!0&&At.getTransfer(C.emissiveMap.colorSpace)===Ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ma,flipSided:C.side===qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ne&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&C.extensions.multiDraw===!0||Ce)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function _(C){const N=[];if(C.shaderID?N.push(C.shaderID):(N.push(C.customVertexShaderID),N.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)N.push(k),N.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(D(N,C),U(N,C),N.push(r.outputColorSpace)),N.push(C.customProgramCacheKey),N.join()}function D(C,N){C.push(N.precision),C.push(N.outputColorSpace),C.push(N.envMapMode),C.push(N.envMapCubeUVHeight),C.push(N.mapUv),C.push(N.alphaMapUv),C.push(N.lightMapUv),C.push(N.aoMapUv),C.push(N.bumpMapUv),C.push(N.normalMapUv),C.push(N.displacementMapUv),C.push(N.emissiveMapUv),C.push(N.metalnessMapUv),C.push(N.roughnessMapUv),C.push(N.anisotropyMapUv),C.push(N.clearcoatMapUv),C.push(N.clearcoatNormalMapUv),C.push(N.clearcoatRoughnessMapUv),C.push(N.iridescenceMapUv),C.push(N.iridescenceThicknessMapUv),C.push(N.sheenColorMapUv),C.push(N.sheenRoughnessMapUv),C.push(N.specularMapUv),C.push(N.specularColorMapUv),C.push(N.specularIntensityMapUv),C.push(N.transmissionMapUv),C.push(N.thicknessMapUv),C.push(N.combine),C.push(N.fogExp2),C.push(N.sizeAttenuation),C.push(N.morphTargetsCount),C.push(N.morphAttributeCount),C.push(N.numDirLights),C.push(N.numPointLights),C.push(N.numSpotLights),C.push(N.numSpotLightMaps),C.push(N.numHemiLights),C.push(N.numRectAreaLights),C.push(N.numDirLightShadows),C.push(N.numPointLightShadows),C.push(N.numSpotLightShadows),C.push(N.numSpotLightShadowsWithMaps),C.push(N.numLightProbes),C.push(N.shadowMapType),C.push(N.toneMapping),C.push(N.numClippingPlanes),C.push(N.numClipIntersection),C.push(N.depthPacking)}function U(C,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),C.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),C.push(h.mask)}function P(C){const N=E[C.type];let k;if(N){const se=zi[N];k=wb.clone(se.uniforms)}else k=C.uniforms;return k}function z(C,N){let k=g.get(N);return k!==void 0?++k.usedTimes:(k=new fR(r,N,C,c),x.push(k),g.set(N,k)),k}function I(C){if(--C.usedTimes===0){const N=x.indexOf(C);x[N]=x[x.length-1],x.pop(),g.delete(C.cacheKey),C.destroy()}}function F(C){m.remove(C)}function Y(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:P,acquireProgram:z,releaseProgram:I,releaseShaderCache:F,programs:x,dispose:Y}}function gR(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function xR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function yv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g,v,M,E,T,S){let _=r[e];return _===void 0?(_={id:g.id,object:g,geometry:v,material:M,groupOrder:E,renderOrder:g.renderOrder,z:T,group:S},r[e]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=M,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=S),e++,_}function h(g,v,M,E,T,S){const _=f(g,v,M,E,T,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,v,M,E,T,S){const _=f(g,v,M,E,T,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,v){i.length>1&&i.sort(g||xR),s.length>1&&s.sort(v||yv),l.length>1&&l.sort(v||yv)}function x(){for(let g=e,v=r.length;g<v;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function vR(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new Sv,r.set(s,[f])):l>=c.length?(f=new Sv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function _R(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Ot};break;case"SpotLight":i={position:new re,direction:new re,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":i={color:new Ot,position:new re,halfWidth:new re,halfHeight:new re};break}return r[e.id]=i,i}}}function yR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let SR=0;function MR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bR(r){const e=new _R,i=yR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new re);const l=new re,c=new nn,f=new nn;function h(p){let x=0,g=0,v=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,E=0,T=0,S=0,_=0,D=0,U=0,P=0,z=0,I=0,F=0;p.sort(MR);for(let C=0,N=p.length;C<N;C++){const k=p[C],se=k.color,oe=k.intensity,me=k.distance;let ue=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===zs?ue=k.shadow.map.texture:ue=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)x+=se.r*oe,g+=se.g*oe,v+=se.b*oe;else if(k.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(k.sh.coefficients[B],oe);F++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,s.directionalShadow[M]=te,s.directionalShadowMap[M]=ue,s.directionalShadowMatrix[M]=k.shadow.matrix,D++}s.directional[M]=B,M++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(se).multiplyScalar(oe),B.distance=me,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,s.spot[T]=B;const G=k.shadow;if(k.map&&(s.spotLightMap[z]=k.map,z++,G.updateMatrices(k),k.castShadow&&I++),s.spotLightMatrix[T]=G.matrix,k.castShadow){const te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,s.spotShadow[T]=te,s.spotShadowMap[T]=ue,P++}T++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(se).multiplyScalar(oe),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=B,S++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const G=k.shadow,te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,te.shadowCameraNear=G.camera.near,te.shadowCameraFar=G.camera.far,s.pointShadow[E]=te,s.pointShadowMap[E]=ue,s.pointShadowMatrix[E]=k.shadow.matrix,U++}s.point[E]=B,E++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(oe),B.groundColor.copy(k.groundColor).multiplyScalar(oe),s.hemi[_]=B,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=v;const Y=s.hash;(Y.directionalLength!==M||Y.pointLength!==E||Y.spotLength!==T||Y.rectAreaLength!==S||Y.hemiLength!==_||Y.numDirectionalShadows!==D||Y.numPointShadows!==U||Y.numSpotShadows!==P||Y.numSpotMaps!==z||Y.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=S,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=P+z-I,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=F,Y.directionalLength=M,Y.pointLength=E,Y.spotLength=T,Y.rectAreaLength=S,Y.hemiLength=_,Y.numDirectionalShadows=D,Y.numPointShadows=U,Y.numSpotShadows=P,Y.numSpotMaps=z,Y.numLightProbes=F,s.version=SR++)}function m(p,x){let g=0,v=0,M=0,E=0,T=0;const S=x.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const U=p[_];if(U.isDirectionalLight){const P=s.directional[g];P.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),g++}else if(U.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),M++}else if(U.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(S),f.identity(),c.copy(U.matrixWorld),c.premultiply(S),f.extractRotation(c),P.halfWidth.set(U.width*.5,0,0),P.halfHeight.set(0,U.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const P=s.point[v];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const P=s.hemi[T];P.direction.setFromMatrixPosition(U.matrixWorld),P.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:s}}function Mv(r){const e=new bR(r),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function f(x){s.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function ER(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new Mv(r),e.set(l,[h])):c>=f.length?(h=new Mv(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const TR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AR=`uniform sampler2D shadow_pass;
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
}`,RR=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],wR=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],bv=new nn,Zo=new re,dh=new re;function CR(r,e,i){let s=new T_;const l=new jt,c=new jt,f=new sn,h=new Xb,m=new Wb,p={},x=i.maxTextureSize,g={[sr]:qn,[qn]:sr,[ma]:ma},v=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:TR,fragmentShader:AR}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new ii;E.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ea(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let _=this.type;this.render=function(I,F,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;I.type===D1&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=tu);const C=r.getRenderTarget(),N=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),se=r.state;se.setBlending(va),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const oe=_!==this.type;oe&&F.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(ue=>ue.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,ue=I.length;me<ue;me++){const B=I[me],G=B.shadow;if(G===void 0){ut("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const te=G.getFrameExtents();if(l.multiply(te),c.copy(G.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/te.x),l.x=c.x*te.x,G.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/te.y),l.y=c.y*te.y,G.mapSize.y=c.y)),G.map===null||oe===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Qo){if(B.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Vi(l.x,l.y,{format:zs,type:Sa,minFilter:On,magFilter:On,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new al(l.x,l.y,Ii),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ma,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn}else{B.isPointLight?(G.map=new E_(l.x),G.map.depthTexture=new kb(l.x,ji)):(G.map=new Vi(l.x,l.y),G.map.depthTexture=new al(l.x,l.y,ji)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ma;const ye=r.state.buffers.depth.getReversed();this.type===tu?(G.map.depthTexture.compareFunction=ye?Tp:Ep,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn)}G.camera.updateProjectionMatrix()}const be=G.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<be;ye++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,ye),r.clear();else{ye===0&&(r.setRenderTarget(G.map),r.clear());const O=G.getViewport(ye);f.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),se.viewport(f)}if(B.isPointLight){const O=G.camera,$=G.matrix,xe=B.distance||O.far;xe!==O.far&&(O.far=xe,O.updateProjectionMatrix()),Zo.setFromMatrixPosition(B.matrixWorld),O.position.copy(Zo),dh.copy(O.position),dh.add(RR[ye]),O.up.copy(wR[ye]),O.lookAt(dh),O.updateMatrixWorld(),$.makeTranslation(-Zo.x,-Zo.y,-Zo.z),bv.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G._frustum.setFromProjectionMatrix(bv,O.coordinateSystem,O.reversedDepth)}else G.updateMatrices(B);s=G.getFrustum(),P(F,Y,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Qo&&D(G,Y),G.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(C,N,k)};function D(I,F){const Y=e.update(T);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Vi(l.x,l.y,{format:zs,type:Sa})),v.uniforms.shadow_pass.value=I.map.depthTexture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(F,null,Y,v,T,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(F,null,Y,M,T,null)}function U(I,F,Y,C){let N=null;const k=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)N=k;else if(N=Y.isPointLight===!0?m:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const se=N.uuid,oe=F.uuid;let me=p[se];me===void 0&&(me={},p[se]=me);let ue=me[oe];ue===void 0&&(ue=N.clone(),me[oe]=ue,F.addEventListener("dispose",z)),N=ue}if(N.visible=F.visible,N.wireframe=F.wireframe,C===Qo?N.side=F.shadowSide!==null?F.shadowSide:F.side:N.side=F.shadowSide!==null?F.shadowSide:g[F.side],N.alphaMap=F.alphaMap,N.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,N.map=F.map,N.clipShadows=F.clipShadows,N.clippingPlanes=F.clippingPlanes,N.clipIntersection=F.clipIntersection,N.displacementMap=F.displacementMap,N.displacementScale=F.displacementScale,N.displacementBias=F.displacementBias,N.wireframeLinewidth=F.wireframeLinewidth,N.linewidth=F.linewidth,Y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const se=r.properties.get(N);se.light=Y}return N}function P(I,F,Y,C,N){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&N===Qo)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);const oe=e.update(I),me=I.material;if(Array.isArray(me)){const ue=oe.groups;for(let B=0,G=ue.length;B<G;B++){const te=ue[B],be=me[te.materialIndex];if(be&&be.visible){const ye=U(I,be,C,N);I.onBeforeShadow(r,I,F,Y,oe,ye,te),r.renderBufferDirect(Y,null,oe,ye,I,te),I.onAfterShadow(r,I,F,Y,oe,ye,te)}}}else if(me.visible){const ue=U(I,me,C,N);I.onBeforeShadow(r,I,F,Y,oe,ue,null),r.renderBufferDirect(Y,null,oe,ue,I,null),I.onAfterShadow(r,I,F,Y,oe,ue,null)}}const se=I.children;for(let oe=0,me=se.length;oe<me;oe++)P(se[oe],F,Y,C,N)}function z(I){I.target.removeEventListener("dispose",z);for(const Y in p){const C=p[Y],N=I.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}const DR={[vh]:_h,[yh]:bh,[Sh]:Eh,[Bs]:Mh,[_h]:vh,[bh]:yh,[Eh]:Sh,[Mh]:Bs};function NR(r,e){function i(){let W=!1;const Be=new sn;let we=null;const He=new sn(0,0,0,0);return{setMask:function(Te){we!==Te&&!W&&(r.colorMask(Te,Te,Te,Te),we=Te)},setLocked:function(Te){W=Te},setClear:function(Te,Se,Ne,ct,Bt){Bt===!0&&(Te*=ct,Se*=ct,Ne*=ct),Be.set(Te,Se,Ne,ct),He.equals(Be)===!1&&(r.clearColor(Te,Se,Ne,ct),He.copy(Be))},reset:function(){W=!1,we=null,He.set(-1,0,0,0)}}}function s(){let W=!1,Be=!1,we=null,He=null,Te=null;return{setReversed:function(Se){if(Be!==Se){const Ne=e.get("EXT_clip_control");Se?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),Be=Se;const ct=Te;Te=null,this.setClear(ct)}},getReversed:function(){return Be},setTest:function(Se){Se?he(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(Se){we!==Se&&!W&&(r.depthMask(Se),we=Se)},setFunc:function(Se){if(Be&&(Se=DR[Se]),He!==Se){switch(Se){case vh:r.depthFunc(r.NEVER);break;case _h:r.depthFunc(r.ALWAYS);break;case yh:r.depthFunc(r.LESS);break;case Bs:r.depthFunc(r.LEQUAL);break;case Sh:r.depthFunc(r.EQUAL);break;case Mh:r.depthFunc(r.GEQUAL);break;case bh:r.depthFunc(r.GREATER);break;case Eh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}He=Se}},setLocked:function(Se){W=Se},setClear:function(Se){Te!==Se&&(Be&&(Se=1-Se),r.clearDepth(Se),Te=Se)},reset:function(){W=!1,we=null,He=null,Te=null,Be=!1}}}function l(){let W=!1,Be=null,we=null,He=null,Te=null,Se=null,Ne=null,ct=null,Bt=null;return{setTest:function(Tt){W||(Tt?he(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(Tt){Be!==Tt&&!W&&(r.stencilMask(Tt),Be=Tt)},setFunc:function(Tt,Dn,_i){(we!==Tt||He!==Dn||Te!==_i)&&(r.stencilFunc(Tt,Dn,_i),we=Tt,He=Dn,Te=_i)},setOp:function(Tt,Dn,_i){(Se!==Tt||Ne!==Dn||ct!==_i)&&(r.stencilOp(Tt,Dn,_i),Se=Tt,Ne=Dn,ct=_i)},setLocked:function(Tt){W=Tt},setClear:function(Tt){Bt!==Tt&&(r.clearStencil(Tt),Bt=Tt)},reset:function(){W=!1,Be=null,we=null,He=null,Te=null,Se=null,Ne=null,ct=null,Bt=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},v=new WeakMap,M=[],E=null,T=!1,S=null,_=null,D=null,U=null,P=null,z=null,I=null,F=new Ot(0,0,0),Y=0,C=!1,N=null,k=null,se=null,oe=null,me=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(te)[1]),B=G>=1):te.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),B=G>=2);let be=null,ye={};const O=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),xe=new sn().fromArray(O),Re=new sn().fromArray($);function Ge(W,Be,we,He){const Te=new Uint8Array(4),Se=r.createTexture();r.bindTexture(W,Se),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ne=0;Ne<we;Ne++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Be,0,r.RGBA,1,1,He,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(Be+Ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return Se}const ne={};ne[r.TEXTURE_2D]=Ge(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=Ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=Ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=Ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),he(r.DEPTH_TEST),f.setFunc(Bs),lt(!1),Kt(bx),he(r.CULL_FACE),nt(va);function he(W){x[W]!==!0&&(r.enable(W),x[W]=!0)}function Le(W){x[W]!==!1&&(r.disable(W),x[W]=!1)}function Me(W,Be){return g[W]!==Be?(r.bindFramebuffer(W,Be),g[W]=Be,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Be),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Be),!0):!1}function Ce(W,Be){let we=M,He=!1;if(W){we=v.get(Be),we===void 0&&(we=[],v.set(Be,we));const Te=W.textures;if(we.length!==Te.length||we[0]!==r.COLOR_ATTACHMENT0){for(let Se=0,Ne=Te.length;Se<Ne;Se++)we[Se]=r.COLOR_ATTACHMENT0+Se;we.length=Te.length,He=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,He=!0);He&&r.drawBuffers(we)}function Je(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const Rt={[Ur]:r.FUNC_ADD,[U1]:r.FUNC_SUBTRACT,[L1]:r.FUNC_REVERSE_SUBTRACT};Rt[O1]=r.MIN,Rt[P1]=r.MAX;const ot={[B1]:r.ZERO,[F1]:r.ONE,[z1]:r.SRC_COLOR,[gh]:r.SRC_ALPHA,[j1]:r.SRC_ALPHA_SATURATE,[V1]:r.DST_COLOR,[H1]:r.DST_ALPHA,[I1]:r.ONE_MINUS_SRC_COLOR,[xh]:r.ONE_MINUS_SRC_ALPHA,[k1]:r.ONE_MINUS_DST_COLOR,[G1]:r.ONE_MINUS_DST_ALPHA,[X1]:r.CONSTANT_COLOR,[W1]:r.ONE_MINUS_CONSTANT_COLOR,[q1]:r.CONSTANT_ALPHA,[Y1]:r.ONE_MINUS_CONSTANT_ALPHA};function nt(W,Be,we,He,Te,Se,Ne,ct,Bt,Tt){if(W===va){T===!0&&(Le(r.BLEND),T=!1);return}if(T===!1&&(he(r.BLEND),T=!0),W!==N1){if(W!==S||Tt!==C){if((_!==Ur||P!==Ur)&&(r.blendEquation(r.FUNC_ADD),_=Ur,P=Ur),Tt)switch(W){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ex:r.blendFunc(r.ONE,r.ONE);break;case Tx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ax:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Dt("WebGLState: Invalid blending: ",W);break}else switch(W){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ex:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Tx:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ax:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",W);break}D=null,U=null,z=null,I=null,F.set(0,0,0),Y=0,S=W,C=Tt}return}Te=Te||Be,Se=Se||we,Ne=Ne||He,(Be!==_||Te!==P)&&(r.blendEquationSeparate(Rt[Be],Rt[Te]),_=Be,P=Te),(we!==D||He!==U||Se!==z||Ne!==I)&&(r.blendFuncSeparate(ot[we],ot[He],ot[Se],ot[Ne]),D=we,U=He,z=Se,I=Ne),(ct.equals(F)===!1||Bt!==Y)&&(r.blendColor(ct.r,ct.g,ct.b,Bt),F.copy(ct),Y=Bt),S=W,C=!1}function vt(W,Be){W.side===ma?Le(r.CULL_FACE):he(r.CULL_FACE);let we=W.side===qn;Be&&(we=!we),lt(we),W.blending===Os&&W.transparent===!1?nt(va):nt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const He=W.stencilWrite;h.setTest(He),He&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Xt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){N!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),N=W)}function Kt(W){W!==w1?(he(r.CULL_FACE),W!==k&&(W===bx?r.cullFace(r.BACK):W===C1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),k=W}function V(W){W!==se&&(B&&r.lineWidth(W),se=W)}function Xt(W,Be,we){W?(he(r.POLYGON_OFFSET_FILL),(oe!==Be||me!==we)&&(r.polygonOffset(Be,we),oe=Be,me=we)):Le(r.POLYGON_OFFSET_FILL)}function Ze(W){W?he(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function De(W){W===void 0&&(W=r.TEXTURE0+ue-1),be!==W&&(r.activeTexture(W),be=W)}function Xe(W,Be,we){we===void 0&&(be===null?we=r.TEXTURE0+ue-1:we=be);let He=ye[we];He===void 0&&(He={type:void 0,texture:void 0},ye[we]=He),(He.type!==W||He.texture!==Be)&&(be!==we&&(r.activeTexture(we),be=we),r.bindTexture(W,Be||ne[W]),He.type=W,He.texture=Be)}function L(){const W=ye[be];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function X(){try{r.compressedTexImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function de(){try{r.texSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ve(){try{r.texSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function je(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Ue(){try{r.texStorage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function We(){try{r.texStorage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function at(){try{r.texImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Ee(){try{r.texImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Ae(W){xe.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),xe.copy(W))}function Ve(W){Re.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Re.copy(W))}function Ie(W,Be){let we=p.get(Be);we===void 0&&(we=new WeakMap,p.set(Be,we));let He=we.get(W);He===void 0&&(He=r.getUniformBlockIndex(Be,W.name),we.set(W,He))}function Oe(W,Be){const He=p.get(Be).get(W);m.get(Be)!==He&&(r.uniformBlockBinding(Be,He,W.__bindingPointIndex),m.set(Be,He))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},be=null,ye={},g={},v=new WeakMap,M=[],E=null,T=!1,S=null,_=null,D=null,U=null,P=null,z=null,I=null,F=new Ot(0,0,0),Y=0,C=!1,N=null,k=null,se=null,oe=null,me=null,xe.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:he,disable:Le,bindFramebuffer:Me,drawBuffers:Ce,useProgram:Je,setBlending:nt,setMaterial:vt,setFlipSided:lt,setCullFace:Kt,setLineWidth:V,setPolygonOffset:Xt,setScissorTest:Ze,activeTexture:De,bindTexture:Xe,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:X,texImage2D:at,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:Oe,texStorage2D:Ue,texStorage3D:We,texSubImage2D:de,texSubImage3D:ve,compressedTexSubImage2D:ce,compressedTexSubImage3D:je,scissor:Ae,viewport:Ve,reset:pt}}function UR(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new jt,x=new WeakMap;let g;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return M?new OffscreenCanvas(L,b):fu("canvas")}function T(L,b,X){let de=1;const ve=Xe(L);if((ve.width>X||ve.height>X)&&(de=X/Math.max(ve.width,ve.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ce=Math.floor(de*ve.width),je=Math.floor(de*ve.height);g===void 0&&(g=E(ce,je));const Ue=b?E(ce,je):g;return Ue.width=ce,Ue.height=je,Ue.getContext("2d").drawImage(L,0,0,ce,je),ut("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ce+"x"+je+")."),Ue}else return"data"in L&&ut("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(L,b,X,de,ve=!1){if(L!==null){if(r[L]!==void 0)return r[L];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=b;if(b===r.RED&&(X===r.FLOAT&&(ce=r.R32F),X===r.HALF_FLOAT&&(ce=r.R16F),X===r.UNSIGNED_BYTE&&(ce=r.R8)),b===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ce=r.R8UI),X===r.UNSIGNED_SHORT&&(ce=r.R16UI),X===r.UNSIGNED_INT&&(ce=r.R32UI),X===r.BYTE&&(ce=r.R8I),X===r.SHORT&&(ce=r.R16I),X===r.INT&&(ce=r.R32I)),b===r.RG&&(X===r.FLOAT&&(ce=r.RG32F),X===r.HALF_FLOAT&&(ce=r.RG16F),X===r.UNSIGNED_BYTE&&(ce=r.RG8)),b===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(ce=r.RG8UI),X===r.UNSIGNED_SHORT&&(ce=r.RG16UI),X===r.UNSIGNED_INT&&(ce=r.RG32UI),X===r.BYTE&&(ce=r.RG8I),X===r.SHORT&&(ce=r.RG16I),X===r.INT&&(ce=r.RG32I)),b===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),X===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),X===r.UNSIGNED_INT&&(ce=r.RGB32UI),X===r.BYTE&&(ce=r.RGB8I),X===r.SHORT&&(ce=r.RGB16I),X===r.INT&&(ce=r.RGB32I)),b===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),X===r.UNSIGNED_INT&&(ce=r.RGBA32UI),X===r.BYTE&&(ce=r.RGBA8I),X===r.SHORT&&(ce=r.RGBA16I),X===r.INT&&(ce=r.RGBA32I)),b===r.RGB&&(X===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),b===r.RGBA){const je=ve?cu:At.getTransfer(de);X===r.FLOAT&&(ce=r.RGBA32F),X===r.HALF_FLOAT&&(ce=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ce=je===Ht?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(L,b){let X;return L?b===null||b===ji||b===nl?X=r.DEPTH24_STENCIL8:b===Ii?X=r.DEPTH32F_STENCIL8:b===tl&&(X=r.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ji||b===nl?X=r.DEPTH_COMPONENT24:b===Ii?X=r.DEPTH_COMPONENT32F:b===tl&&(X=r.DEPTH_COMPONENT16),X}function z(L,b){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function I(L){const b=L.target;b.removeEventListener("dispose",I),Y(b),b.isVideoTexture&&x.delete(b)}function F(L){const b=L.target;b.removeEventListener("dispose",F),N(b)}function Y(L){const b=s.get(L);if(b.__webglInit===void 0)return;const X=L.source,de=v.get(X);if(de){const ve=de[b.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(L),Object.keys(de).length===0&&v.delete(X)}s.remove(L)}function C(L){const b=s.get(L);r.deleteTexture(b.__webglTexture);const X=L.source,de=v.get(X);delete de[b.__cacheKey],f.memory.textures--}function N(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(b.__webglFramebuffer[de]))for(let ve=0;ve<b.__webglFramebuffer[de].length;ve++)r.deleteFramebuffer(b.__webglFramebuffer[de][ve]);else r.deleteFramebuffer(b.__webglFramebuffer[de]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[de])}else{if(Array.isArray(b.__webglFramebuffer))for(let de=0;de<b.__webglFramebuffer.length;de++)r.deleteFramebuffer(b.__webglFramebuffer[de]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let de=0;de<b.__webglColorRenderbuffer.length;de++)b.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[de]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=L.textures;for(let de=0,ve=X.length;de<ve;de++){const ce=s.get(X[de]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),f.memory.textures--),s.remove(X[de])}s.remove(L)}let k=0;function se(){k=0}function oe(){const L=k;return L>=l.maxTextures&&ut("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),k+=1,L}function me(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function ue(L,b){const X=s.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){const de=L.image;if(de===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(X,L,b);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+b)}function B(L,b){const X=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ne(X,L,b);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+b)}function G(L,b){const X=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ne(X,L,b);return}i.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+b)}function te(L,b){const X=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&X.__version!==L.version){he(X,L,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+b)}const be={[Rh]:r.REPEAT,[ga]:r.CLAMP_TO_EDGE,[wh]:r.MIRRORED_REPEAT},ye={[Cn]:r.NEAREST,[Q1]:r.NEAREST_MIPMAP_NEAREST,[Rc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[Pd]:r.LINEAR_MIPMAP_NEAREST,[Or]:r.LINEAR_MIPMAP_LINEAR},O={[tb]:r.NEVER,[sb]:r.ALWAYS,[nb]:r.LESS,[Ep]:r.LEQUAL,[ib]:r.EQUAL,[Tp]:r.GEQUAL,[ab]:r.GREATER,[rb]:r.NOTEQUAL};function $(L,b){if(b.type===Ii&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===Pd||b.magFilter===Rc||b.magFilter===Or||b.minFilter===On||b.minFilter===Pd||b.minFilter===Rc||b.minFilter===Or)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,be[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,be[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,be[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ye[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Cn||b.minFilter!==Rc&&b.minFilter!==Or||b.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function xe(L,b){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",I));const de=b.source;let ve=v.get(de);ve===void 0&&(ve={},v.set(de,ve));const ce=me(b);if(ce!==L.__cacheKey){ve[ce]===void 0&&(ve[ce]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,X=!0),ve[ce].usedTimes++;const je=ve[L.__cacheKey];je!==void 0&&(ve[L.__cacheKey].usedTimes--,je.usedTimes===0&&C(b)),L.__cacheKey=ce,L.__webglTexture=ve[ce].texture}return X}function Re(L,b,X){return Math.floor(Math.floor(L/X)/b)}function Ge(L,b,X,de){const ce=L.updateRanges;if(ce.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,X,de,b.data);else{ce.sort((Ee,Ae)=>Ee.start-Ae.start);let je=0;for(let Ee=1;Ee<ce.length;Ee++){const Ae=ce[je],Ve=ce[Ee],Ie=Ae.start+Ae.count,Oe=Re(Ve.start,b.width,4),pt=Re(Ae.start,b.width,4);Ve.start<=Ie+1&&Oe===pt&&Re(Ve.start+Ve.count-1,b.width,4)===Oe?Ae.count=Math.max(Ae.count,Ve.start+Ve.count-Ae.start):(++je,ce[je]=Ve)}ce.length=je+1;const Ue=r.getParameter(r.UNPACK_ROW_LENGTH),We=r.getParameter(r.UNPACK_SKIP_PIXELS),at=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,Ae=ce.length;Ee<Ae;Ee++){const Ve=ce[Ee],Ie=Math.floor(Ve.start/4),Oe=Math.ceil(Ve.count/4),pt=Ie%b.width,W=Math.floor(Ie/b.width),Be=Oe,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,pt,W,Be,we,X,de,b.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,at)}}function ne(L,b,X){let de=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(de=r.TEXTURE_3D);const ve=xe(L,b),ce=b.source;i.bindTexture(de,L.__webglTexture,r.TEXTURE0+X);const je=s.get(ce);if(ce.version!==je.__version||ve===!0){i.activeTexture(r.TEXTURE0+X);const Ue=At.getPrimaries(At.workingColorSpace),We=b.colorSpace===ar?null:At.getPrimaries(b.colorSpace),at=b.colorSpace===ar||Ue===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Ee=T(b.image,!1,l.maxTextureSize);Ee=De(b,Ee);const Ae=c.convert(b.format,b.colorSpace),Ve=c.convert(b.type);let Ie=U(b.internalFormat,Ae,Ve,b.colorSpace,b.isVideoTexture);$(de,b);let Oe;const pt=b.mipmaps,W=b.isVideoTexture!==!0,Be=je.__version===void 0||ve===!0,we=ce.dataReady,He=z(b,Ee);if(b.isDepthTexture)Ie=P(b.format===Pr,b.type),Be&&(W?i.texStorage2D(r.TEXTURE_2D,1,Ie,Ee.width,Ee.height):i.texImage2D(r.TEXTURE_2D,0,Ie,Ee.width,Ee.height,0,Ae,Ve,null));else if(b.isDataTexture)if(pt.length>0){W&&Be&&i.texStorage2D(r.TEXTURE_2D,He,Ie,pt[0].width,pt[0].height);for(let Te=0,Se=pt.length;Te<Se;Te++)Oe=pt[Te],W?we&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,Ae,Ve,Oe.data):i.texImage2D(r.TEXTURE_2D,Te,Ie,Oe.width,Oe.height,0,Ae,Ve,Oe.data);b.generateMipmaps=!1}else W?(Be&&i.texStorage2D(r.TEXTURE_2D,He,Ie,Ee.width,Ee.height),we&&Ge(b,Ee,Ae,Ve)):i.texImage2D(r.TEXTURE_2D,0,Ie,Ee.width,Ee.height,0,Ae,Ve,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Be&&i.texStorage3D(r.TEXTURE_2D_ARRAY,He,Ie,pt[0].width,pt[0].height,Ee.depth);for(let Te=0,Se=pt.length;Te<Se;Te++)if(Oe=pt[Te],b.format!==Di)if(Ae!==null)if(W){if(we)if(b.layerUpdates.size>0){const Ne=ev(Oe.width,Oe.height,b.format,b.type);for(const ct of b.layerUpdates){const Bt=Oe.data.subarray(ct*Ne/Oe.data.BYTES_PER_ELEMENT,(ct+1)*Ne/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,ct,Oe.width,Oe.height,1,Ae,Bt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Oe.width,Oe.height,Ee.depth,Ae,Oe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,Ie,Oe.width,Oe.height,Ee.depth,0,Oe.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?we&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Oe.width,Oe.height,Ee.depth,Ae,Ve,Oe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,Ie,Oe.width,Oe.height,Ee.depth,0,Ae,Ve,Oe.data)}else{W&&Be&&i.texStorage2D(r.TEXTURE_2D,He,Ie,pt[0].width,pt[0].height);for(let Te=0,Se=pt.length;Te<Se;Te++)Oe=pt[Te],b.format!==Di?Ae!==null?W?we&&i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,Ae,Oe.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,Ie,Oe.width,Oe.height,0,Oe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?we&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,Ae,Ve,Oe.data):i.texImage2D(r.TEXTURE_2D,Te,Ie,Oe.width,Oe.height,0,Ae,Ve,Oe.data)}else if(b.isDataArrayTexture)if(W){if(Be&&i.texStorage3D(r.TEXTURE_2D_ARRAY,He,Ie,Ee.width,Ee.height,Ee.depth),we)if(b.layerUpdates.size>0){const Te=ev(Ee.width,Ee.height,b.format,b.type);for(const Se of b.layerUpdates){const Ne=Ee.data.subarray(Se*Te/Ee.data.BYTES_PER_ELEMENT,(Se+1)*Te/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Se,Ee.width,Ee.height,1,Ae,Ve,Ne)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Ve,Ee.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,Ee.width,Ee.height,Ee.depth,0,Ae,Ve,Ee.data);else if(b.isData3DTexture)W?(Be&&i.texStorage3D(r.TEXTURE_3D,He,Ie,Ee.width,Ee.height,Ee.depth),we&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Ve,Ee.data)):i.texImage3D(r.TEXTURE_3D,0,Ie,Ee.width,Ee.height,Ee.depth,0,Ae,Ve,Ee.data);else if(b.isFramebufferTexture){if(Be)if(W)i.texStorage2D(r.TEXTURE_2D,He,Ie,Ee.width,Ee.height);else{let Te=Ee.width,Se=Ee.height;for(let Ne=0;Ne<He;Ne++)i.texImage2D(r.TEXTURE_2D,Ne,Ie,Te,Se,0,Ae,Ve,null),Te>>=1,Se>>=1}}else if(pt.length>0){if(W&&Be){const Te=Xe(pt[0]);i.texStorage2D(r.TEXTURE_2D,He,Ie,Te.width,Te.height)}for(let Te=0,Se=pt.length;Te<Se;Te++)Oe=pt[Te],W?we&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ae,Ve,Oe):i.texImage2D(r.TEXTURE_2D,Te,Ie,Ae,Ve,Oe);b.generateMipmaps=!1}else if(W){if(Be){const Te=Xe(Ee);i.texStorage2D(r.TEXTURE_2D,He,Ie,Te.width,Te.height)}we&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Ve,Ee)}else i.texImage2D(r.TEXTURE_2D,0,Ie,Ae,Ve,Ee);S(b)&&_(de),je.__version=ce.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function he(L,b,X){if(b.image.length!==6)return;const de=xe(L,b),ve=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+X);const ce=s.get(ve);if(ve.version!==ce.__version||de===!0){i.activeTexture(r.TEXTURE0+X);const je=At.getPrimaries(At.workingColorSpace),Ue=b.colorSpace===ar?null:At.getPrimaries(b.colorSpace),We=b.colorSpace===ar||je===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const at=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let Se=0;Se<6;Se++)!at&&!Ee?Ae[Se]=T(b.image[Se],!0,l.maxCubemapSize):Ae[Se]=Ee?b.image[Se].image:b.image[Se],Ae[Se]=De(b,Ae[Se]);const Ve=Ae[0],Ie=c.convert(b.format,b.colorSpace),Oe=c.convert(b.type),pt=U(b.internalFormat,Ie,Oe,b.colorSpace),W=b.isVideoTexture!==!0,Be=ce.__version===void 0||de===!0,we=ve.dataReady;let He=z(b,Ve);$(r.TEXTURE_CUBE_MAP,b);let Te;if(at){W&&Be&&i.texStorage2D(r.TEXTURE_CUBE_MAP,He,pt,Ve.width,Ve.height);for(let Se=0;Se<6;Se++){Te=Ae[Se].mipmaps;for(let Ne=0;Ne<Te.length;Ne++){const ct=Te[Ne];b.format!==Di?Ie!==null?W?we&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,0,0,ct.width,ct.height,Ie,ct.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,pt,ct.width,ct.height,0,ct.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,0,0,ct.width,ct.height,Ie,Oe,ct.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,pt,ct.width,ct.height,0,Ie,Oe,ct.data)}}}else{if(Te=b.mipmaps,W&&Be){Te.length>0&&He++;const Se=Xe(Ae[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,He,pt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ee){W?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ae[Se].width,Ae[Se].height,Ie,Oe,Ae[Se].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pt,Ae[Se].width,Ae[Se].height,0,Ie,Oe,Ae[Se].data);for(let Ne=0;Ne<Te.length;Ne++){const Bt=Te[Ne].image[Se].image;W?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,0,0,Bt.width,Bt.height,Ie,Oe,Bt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,pt,Bt.width,Bt.height,0,Ie,Oe,Bt.data)}}else{W?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ie,Oe,Ae[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pt,Ie,Oe,Ae[Se]);for(let Ne=0;Ne<Te.length;Ne++){const ct=Te[Ne];W?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,0,0,Ie,Oe,ct.image[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,pt,Ie,Oe,ct.image[Se])}}}S(b)&&_(r.TEXTURE_CUBE_MAP),ce.__version=ve.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Le(L,b,X,de,ve,ce){const je=c.convert(X.format,X.colorSpace),Ue=c.convert(X.type),We=U(X.internalFormat,je,Ue,X.colorSpace),at=s.get(b),Ee=s.get(X);if(Ee.__renderTarget=b,!at.__hasExternalTextures){const Ae=Math.max(1,b.width>>ce),Ve=Math.max(1,b.height>>ce);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?i.texImage3D(ve,ce,We,Ae,Ve,b.depth,0,je,Ue,null):i.texImage2D(ve,ce,We,Ae,Ve,0,je,Ue,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),Xt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ve,Ee.__webglTexture,0,V(b)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ve,Ee.__webglTexture,ce),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(L,b,X){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer){const de=b.depthTexture,ve=de&&de.isDepthTexture?de.type:null,ce=P(b.stencilBuffer,ve),je=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Xt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),ce,b.width,b.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),ce,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ce,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,je,r.RENDERBUFFER,L)}else{const de=b.textures;for(let ve=0;ve<de.length;ve++){const ce=de[ve],je=c.convert(ce.format,ce.colorSpace),Ue=c.convert(ce.type),We=U(ce.internalFormat,je,Ue,ce.colorSpace);Xt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),We,b.width,b.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),We,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,We,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(L,b,X){const de=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=s.get(b.depthTexture);if(ve.__renderTarget=b,(!ve.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),ve.__webglTexture===void 0){ve.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),$(r.TEXTURE_CUBE_MAP,b.depthTexture);const at=c.convert(b.depthTexture.format),Ee=c.convert(b.depthTexture.type);let Ae;b.depthTexture.format===Ma?Ae=r.DEPTH_COMPONENT24:b.depthTexture.format===Pr&&(Ae=r.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Ae,b.width,b.height,0,at,Ee,null)}}else ue(b.depthTexture,0);const ce=ve.__webglTexture,je=V(b),Ue=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,We=b.depthTexture.format===Pr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ma)Xt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,Ue,ce,0,je):r.framebufferTexture2D(r.FRAMEBUFFER,We,Ue,ce,0);else if(b.depthTexture.format===Pr)Xt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,Ue,ce,0,je):r.framebufferTexture2D(r.FRAMEBUFFER,We,Ue,ce,0);else throw new Error("Unknown depthTexture format")}function Je(L){const b=s.get(L),X=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),de){const ve=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,de.removeEventListener("dispose",ve)};de.addEventListener("dispose",ve),b.__depthDisposeCallback=ve}b.__boundDepthTexture=de}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(X)for(let de=0;de<6;de++)Ce(b.__webglFramebuffer[de],L,de);else{const de=L.texture.mipmaps;de&&de.length>0?Ce(b.__webglFramebuffer[0],L,0):Ce(b.__webglFramebuffer,L,0)}else if(X){b.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[de]),b.__webglDepthbuffer[de]===void 0)b.__webglDepthbuffer[de]=r.createRenderbuffer(),Me(b.__webglDepthbuffer[de],L,!1);else{const ve=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ce)}}else{const de=L.texture.mipmaps;if(de&&de.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Me(b.__webglDepthbuffer,L,!1);else{const ve=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ce)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(L,b,X){const de=s.get(L);b!==void 0&&Le(de.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Je(L)}function ot(L){const b=L.texture,X=s.get(L),de=s.get(b);L.addEventListener("dispose",F);const ve=L.textures,ce=L.isWebGLCubeRenderTarget===!0,je=ve.length>1;if(je||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=b.version,f.memory.textures++),ce){X.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[Ue]=[];for(let We=0;We<b.mipmaps.length;We++)X.__webglFramebuffer[Ue][We]=r.createFramebuffer()}else X.__webglFramebuffer[Ue]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)X.__webglFramebuffer[Ue]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(je)for(let Ue=0,We=ve.length;Ue<We;Ue++){const at=s.get(ve[Ue]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&Xt(L)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ue=0;Ue<ve.length;Ue++){const We=ve[Ue];X.__webglColorRenderbuffer[Ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[Ue]);const at=c.convert(We.format,We.colorSpace),Ee=c.convert(We.type),Ae=U(We.internalFormat,at,Ee,We.colorSpace,L.isXRRenderTarget===!0),Ve=V(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,Ae,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,X.__webglColorRenderbuffer[Ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Me(X.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){i.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),$(r.TEXTURE_CUBE_MAP,b);for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)Le(X.__webglFramebuffer[Ue][We],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,We);else Le(X.__webglFramebuffer[Ue],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(b)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let Ue=0,We=ve.length;Ue<We;Ue++){const at=ve[Ue],Ee=s.get(at);let Ae=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Ee.__webglTexture),$(Ae,at),Le(X.__webglFramebuffer,L,at,r.COLOR_ATTACHMENT0+Ue,Ae,0),S(at)&&_(Ae)}i.unbindTexture()}else{let Ue=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ue,de.__webglTexture),$(Ue,b),b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)Le(X.__webglFramebuffer[We],L,b,r.COLOR_ATTACHMENT0,Ue,We);else Le(X.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,Ue,0);S(b)&&_(Ue),i.unbindTexture()}L.depthBuffer&&Je(L)}function nt(L){const b=L.textures;for(let X=0,de=b.length;X<de;X++){const ve=b[X];if(S(ve)){const ce=D(L),je=s.get(ve).__webglTexture;i.bindTexture(ce,je),_(ce),i.unbindTexture()}}}const vt=[],lt=[];function Kt(L){if(L.samples>0){if(Xt(L)===!1){const b=L.textures,X=L.width,de=L.height;let ve=r.COLOR_BUFFER_BIT;const ce=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,je=s.get(L),Ue=b.length>1;if(Ue)for(let at=0;at<b.length;at++)i.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const We=L.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let at=0;at<b.length;at++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,je.__webglColorRenderbuffer[at]);const Ee=s.get(b[at]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,X,de,0,0,X,de,ve,r.NEAREST),m===!0&&(vt.length=0,lt.length=0,vt.push(r.COLOR_ATTACHMENT0+at),L.depthBuffer&&L.resolveDepthBuffer===!1&&(vt.push(ce),lt.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,vt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ue)for(let at=0;at<b.length;at++){i.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,je.__webglColorRenderbuffer[at]);const Ee=s.get(b[at]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,Ee,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function Xt(L){const b=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ze(L){const b=f.render.frame;x.get(L)!==b&&(x.set(L,b),L.update())}function De(L,b){const X=L.colorSpace,de=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Is&&X!==ar&&(At.getTransfer(X)===Ht?(de!==Di||ve!==gi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",X)),b}function Xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=se,this.setTexture2D=ue,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=te,this.rebindTextures=Rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function LR(r,e){function i(s,l=ar){let c;const f=At.getTransfer(l);if(s===gi)return r.UNSIGNED_BYTE;if(s===_p)return r.UNSIGNED_SHORT_4_4_4_4;if(s===yp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===c_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===u_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===o_)return r.BYTE;if(s===l_)return r.SHORT;if(s===tl)return r.UNSIGNED_SHORT;if(s===vp)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Ii)return r.FLOAT;if(s===Sa)return r.HALF_FLOAT;if(s===f_)return r.ALPHA;if(s===d_)return r.RGB;if(s===Di)return r.RGBA;if(s===Ma)return r.DEPTH_COMPONENT;if(s===Pr)return r.DEPTH_STENCIL;if(s===h_)return r.RED;if(s===Sp)return r.RED_INTEGER;if(s===zs)return r.RG;if(s===Mp)return r.RG_INTEGER;if(s===bp)return r.RGBA_INTEGER;if(s===nu||s===iu||s===au||s===ru)if(f===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ch||s===Dh||s===Nh||s===Uh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Uh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Lh||s===Oh||s===Ph||s===Bh||s===Fh||s===zh||s===Ih)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Lh||s===Oh)return f===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ph)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Bh)return c.COMPRESSED_R11_EAC;if(s===Fh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===zh)return c.COMPRESSED_RG11_EAC;if(s===Ih)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Hh||s===Gh||s===Vh||s===kh||s===jh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Hh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===kh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$h)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ep||s===tp||s===np)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===ep)return f===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===tp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===np)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ip||s===ap||s===rp||s===sp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===ip)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ap)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const OR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PR=`
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

}`;class BR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new A_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new xi({vertexShader:OR,fragmentShader:PR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ea(new xu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FR extends ks{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,x=null,g=null,v=null,M=null,E=null;const T=typeof XRWebGLBinding<"u",S=new BR,_={},D=i.getContextAttributes();let U=null,P=null;const z=[],I=[],F=new jt;let Y=null;const C=new wi;C.viewport=new sn;const N=new wi;N.viewport=new sn;const k=[C,N],se=new qb;let oe=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=z[ne];return he===void 0&&(he=new ah,z[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=z[ne];return he===void 0&&(he=new ah,z[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=z[ne];return he===void 0&&(he=new ah,z[ne]=he),he.getHandSpace()};function ue(ne){const he=I.indexOf(ne.inputSource);if(he===-1)return;const Le=z[he];Le!==void 0&&(Le.update(ne.inputSource,ne.frame,p||f),Le.dispatchEvent({type:ne.type,data:ne.inputSource}))}function B(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",G);for(let ne=0;ne<z.length;ne++){const he=I[ne];he!==null&&(I[ne]=null,z[ne].disconnect(he))}oe=null,me=null,S.reset();for(const ne in _)delete _[ne];e.setRenderTarget(U),M=null,v=null,g=null,l=null,P=null,Ge.stop(),s.isPresenting=!1,e.setPixelRatio(Y),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",B),l.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await i.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Me=null,Ce=null;D.depth&&(Ce=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Le=D.stencil?Pr:Ma,Me=D.stencil?nl:ji);const Je={colorFormat:i.RGBA8,depthFormat:Ce,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Je),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Vi(v.textureWidth,v.textureHeight,{format:Di,type:gi,depthTexture:new al(v.textureWidth,v.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Le={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Le),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Di,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ge.setContext(l),Ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(ne){for(let he=0;he<ne.removed.length;he++){const Le=ne.removed[he],Me=I.indexOf(Le);Me>=0&&(I[Me]=null,z[Me].disconnect(Le))}for(let he=0;he<ne.added.length;he++){const Le=ne.added[he];let Me=I.indexOf(Le);if(Me===-1){for(let Je=0;Je<z.length;Je++)if(Je>=I.length){I.push(Le),Me=Je;break}else if(I[Je]===null){I[Je]=Le,Me=Je;break}if(Me===-1)break}const Ce=z[Me];Ce&&Ce.connect(Le)}}const te=new re,be=new re;function ye(ne,he,Le){te.setFromMatrixPosition(he.matrixWorld),be.setFromMatrixPosition(Le.matrixWorld);const Me=te.distanceTo(be),Ce=he.projectionMatrix.elements,Je=Le.projectionMatrix.elements,Rt=Ce[14]/(Ce[10]-1),ot=Ce[14]/(Ce[10]+1),nt=(Ce[9]+1)/Ce[5],vt=(Ce[9]-1)/Ce[5],lt=(Ce[8]-1)/Ce[0],Kt=(Je[8]+1)/Je[0],V=Rt*lt,Xt=Rt*Kt,Ze=Me/(-lt+Kt),De=Ze*-lt;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(De),ne.translateZ(Ze),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ce[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Xe=Rt+Ze,L=ot+Ze,b=V-De,X=Xt+(Me-De),de=nt*ot/L*Xe,ve=vt*ot/L*Xe;ne.projectionMatrix.makePerspective(b,X,de,ve,Xe,L),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function O(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let he=ne.near,Le=ne.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(Le=S.depthFar)),se.near=N.near=C.near=he,se.far=N.far=C.far=Le,(oe!==se.near||me!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),oe=se.near,me=se.far),se.layers.mask=ne.layers.mask|6,C.layers.mask=se.layers.mask&3,N.layers.mask=se.layers.mask&5;const Me=ne.parent,Ce=se.cameras;O(se,Me);for(let Je=0;Je<Ce.length;Je++)O(Ce[Je],Me);Ce.length===2?ye(se,C,N):se.projectionMatrix.copy(C.projectionMatrix),$(ne,se,Me)};function $(ne,he,Le){Le===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(Le.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=op*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(ne){m=ne,v!==null&&(v.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(se)},this.getCameraTexture=function(ne){return _[ne]};let xe=null;function Re(ne,he){if(x=he.getViewerPose(p||f),E=he,x!==null){const Le=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Me=!1;Le.length!==se.cameras.length&&(se.cameras.length=0,Me=!0);for(let ot=0;ot<Le.length;ot++){const nt=Le[ot];let vt=null;if(M!==null)vt=M.getViewport(nt);else{const Kt=g.getViewSubImage(v,nt);vt=Kt.viewport,ot===0&&(e.setRenderTargetTextures(P,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(P))}let lt=k[ot];lt===void 0&&(lt=new wi,lt.layers.enable(ot),lt.viewport=new sn,k[ot]=lt),lt.matrix.fromArray(nt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(nt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(vt.x,vt.y,vt.width,vt.height),ot===0&&(se.matrix.copy(lt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Me===!0&&se.cameras.push(lt)}const Ce=l.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const ot=g.getDepthInformation(Le[0]);ot&&ot.isValid&&ot.texture&&S.init(ot,l.renderState)}if(Ce&&Ce.includes("camera-access")&&T){e.state.unbindTexture(),g=s.getBinding();for(let ot=0;ot<Le.length;ot++){const nt=Le[ot].camera;if(nt){let vt=_[nt];vt||(vt=new A_,_[nt]=vt);const lt=g.getCameraImage(nt);vt.sourceTexture=lt}}}}for(let Le=0;Le<z.length;Le++){const Me=I[Le],Ce=z[Le];Me!==null&&Ce!==void 0&&Ce.update(Me,he,p||f)}xe&&xe(ne,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const Ge=new R_;Ge.setAnimationLoop(Re),this.setAnimationLoop=function(ne){xe=ne},this.dispose=function(){}}}const Dr=new ba,zR=new nn;function IR(r,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,S_(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,D,U,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),x(S,_)):_.isMeshStandardMaterial?(c(S,_),v(S,_),_.isMeshPhysicalMaterial&&M(S,_,P)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),T(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,D,U):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===qn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===qn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const D=e.get(_),U=D.envMap,P=D.envMapRotation;U&&(S.envMap.value=U,Dr.copy(P),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),S.envMapRotation.value.setFromMatrix4(zR.makeRotationFromEuler(Dr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,D,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*D,S.scale.value=U*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function x(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,D){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const D=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function HR(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const P=U.program;s.uniformBlockBinding(D,P)}function p(D,U){let P=l[D.id];P===void 0&&(E(D),P=x(D),l[D.id]=P,D.addEventListener("dispose",S));const z=U.program;s.updateUBOMapping(D,z);const I=e.render.frame;c[D.id]!==I&&(v(D),c[D.id]=I)}function x(D){const U=g();D.__bindingPointIndex=U;const P=r.createBuffer(),z=D.__size,I=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,z,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,P),P}function g(){for(let D=0;D<h;D++)if(f.indexOf(D)===-1)return f.push(D),D;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const U=l[D.id],P=D.uniforms,z=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let I=0,F=P.length;I<F;I++){const Y=Array.isArray(P[I])?P[I]:[P[I]];for(let C=0,N=Y.length;C<N;C++){const k=Y[C];if(M(k,I,C,z)===!0){const se=k.__offset,oe=Array.isArray(k.value)?k.value:[k.value];let me=0;for(let ue=0;ue<oe.length;ue++){const B=oe[ue],G=T(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,se+me,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,me),me+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,se,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(D,U,P,z){const I=D.value,F=U+"_"+P;if(z[F]===void 0)return typeof I=="number"||typeof I=="boolean"?z[F]=I:z[F]=I.clone(),!0;{const Y=z[F];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return z[F]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function E(D){const U=D.uniforms;let P=0;const z=16;for(let F=0,Y=U.length;F<Y;F++){const C=Array.isArray(U[F])?U[F]:[U[F]];for(let N=0,k=C.length;N<k;N++){const se=C[N],oe=Array.isArray(se.value)?se.value:[se.value];for(let me=0,ue=oe.length;me<ue;me++){const B=oe[me],G=T(B),te=P%z,be=te%G.boundary,ye=te+be;P+=be,ye!==0&&z-ye<G.storage&&(P+=z-ye),se.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=P,P+=G.storage}}}const I=P%z;return I>0&&(P+=z-I),D.__size=P,D.__cache={},this}function T(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",D),U}function S(D){const U=D.target;U.removeEventListener("dispose",S);const P=f.indexOf(U.__bindingPointIndex);f.splice(P,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}const GR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function VR(){return Fi===null&&(Fi=new Ob(GR,16,16,zs,Sa),Fi.name="DFG_LUT",Fi.minFilter=On,Fi.magFilter=On,Fi.wrapS=ga,Fi.wrapT=ga,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class kR{constructor(e={}){const{canvas:i=ob(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:M=gi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const T=M,S=new Set([bp,Mp,Sp]),_=new Set([gi,ji,tl,nl,_p,yp]),D=new Uint32Array(4),U=new Int32Array(4);let P=null,z=null;const I=[],F=[];let Y=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1;this._outputColorSpace=mi;let k=0,se=0,oe=null,me=-1,ue=null;const B=new sn,G=new sn;let te=null;const be=new Ot(0);let ye=0,O=i.width,$=i.height,xe=1,Re=null,Ge=null;const ne=new sn(0,0,O,$),he=new sn(0,0,O,$);let Le=!1;const Me=new T_;let Ce=!1,Je=!1;const Rt=new nn,ot=new re,nt=new sn,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Kt(){return oe===null?xe:1}let V=s;function Xt(w,Z){return i.getContext(w,Z)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xp}`),i.addEventListener("webglcontextlost",ct,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),V===null){const Z="webgl2";if(V=Xt(Z,w),V===null)throw Xt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Dt("WebGLRenderer: "+w.message),w}let Ze,De,Xe,L,b,X,de,ve,ce,je,Ue,We,at,Ee,Ae,Ve,Ie,Oe,pt,W,Be,we,He,Te;function Se(){Ze=new VA(V),Ze.init(),we=new LR(V,Ze),De=new LA(V,Ze,e,we),Xe=new NR(V,Ze),De.reversedDepthBuffer&&v&&Xe.buffers.depth.setReversed(!0),L=new XA(V),b=new gR,X=new UR(V,Ze,Xe,b,De,we,L),de=new PA(C),ve=new GA(C),ce=new Zb(V),He=new NA(V,ce),je=new kA(V,ce,L,He),Ue=new qA(V,je,ce,L),pt=new WA(V,De,X),Ve=new OA(b),We=new mR(C,de,ve,Ze,De,He,Ve),at=new IR(C,b),Ee=new vR,Ae=new ER(Ze),Oe=new DA(C,de,ve,Xe,Ue,E,m),Ie=new CR(C,Ue,De),Te=new HR(V,L,De,Xe),W=new UA(V,Ze,L),Be=new jA(V,Ze,L),L.programs=We.programs,C.capabilities=De,C.extensions=Ze,C.properties=b,C.renderLists=Ee,C.shadowMap=Ie,C.state=Xe,C.info=L}Se(),T!==gi&&(Y=new ZA(T,i.width,i.height,l,c));const Ne=new FR(C,V);this.xr=Ne,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=Ze.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ze.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(w){w!==void 0&&(xe=w,this.setSize(O,$,!1))},this.getSize=function(w){return w.set(O,$)},this.setSize=function(w,Z,le=!0){if(Ne.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,$=Z,i.width=Math.floor(w*xe),i.height=Math.floor(Z*xe),le===!0&&(i.style.width=w+"px",i.style.height=Z+"px"),Y!==null&&Y.setSize(i.width,i.height),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(O*xe,$*xe).floor()},this.setDrawingBufferSize=function(w,Z,le){O=w,$=Z,xe=le,i.width=Math.floor(w*le),i.height=Math.floor(Z*le),this.setViewport(0,0,w,Z)},this.setEffects=function(w){if(T===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Z=0;Z<w.length;Z++)if(w[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(ne)},this.setViewport=function(w,Z,le,ie){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,Z,le,ie),Xe.viewport(B.copy(ne).multiplyScalar(xe).round())},this.getScissor=function(w){return w.copy(he)},this.setScissor=function(w,Z,le,ie){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,Z,le,ie),Xe.scissor(G.copy(he).multiplyScalar(xe).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(w){Xe.setScissorTest(Le=w)},this.setOpaqueSort=function(w){Re=w},this.setTransparentSort=function(w){Ge=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,le=!0){let ie=0;if(w){let Q=!1;if(oe!==null){const Pe=oe.texture.format;Q=S.has(Pe)}if(Q){const Pe=oe.texture.type,ke=_.has(Pe),Fe=Oe.getClearColor(),qe=Oe.getClearAlpha(),Ke=Fe.r,it=Fe.g,Qe=Fe.b;ke?(D[0]=Ke,D[1]=it,D[2]=Qe,D[3]=qe,V.clearBufferuiv(V.COLOR,0,D)):(U[0]=Ke,U[1]=it,U[2]=Qe,U[3]=qe,V.clearBufferiv(V.COLOR,0,U))}else ie|=V.COLOR_BUFFER_BIT}Z&&(ie|=V.DEPTH_BUFFER_BIT),le&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ct,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Oe.dispose(),Ee.dispose(),Ae.dispose(),b.dispose(),de.dispose(),ve.dispose(),Ue.dispose(),He.dispose(),Te.dispose(),We.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Ir),Ne.removeEventListener("sessionend",Ys),Ui.stop()};function ct(w){w.preventDefault(),Nx("WebGLRenderer: Context Lost."),N=!0}function Bt(){Nx("WebGLRenderer: Context Restored."),N=!1;const w=L.autoReset,Z=Ie.enabled,le=Ie.autoUpdate,ie=Ie.needsUpdate,Q=Ie.type;Se(),L.autoReset=w,Ie.enabled=Z,Ie.autoUpdate=le,Ie.needsUpdate=ie,Ie.type=Q}function Tt(w){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dn(w){const Z=w.target;Z.removeEventListener("dispose",Dn),_i(Z)}function _i(w){ml(w),b.remove(w)}function ml(w){const Z=b.get(w).programs;Z!==void 0&&(Z.forEach(function(le){We.releaseProgram(le)}),w.isShaderMaterial&&We.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,le,ie,Q,Pe){Z===null&&(Z=vt);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,Fe=or(w,Z,le,ie,Q);Xe.setMaterial(ie,ke);let qe=le.index,Ke=1;if(ie.wireframe===!0){if(qe=je.getWireframeAttribute(le),qe===void 0)return;Ke=2}const it=le.drawRange,Qe=le.attributes.position;let rt=it.start*Ke,Nt=(it.start+it.count)*Ke;Pe!==null&&(rt=Math.max(rt,Pe.start*Ke),Nt=Math.min(Nt,(Pe.start+Pe.count)*Ke)),qe!==null?(rt=Math.max(rt,0),Nt=Math.min(Nt,qe.count)):Qe!=null&&(rt=Math.max(rt,0),Nt=Math.min(Nt,Qe.count));const Qt=Nt-rt;if(Qt<0||Qt===1/0)return;He.setup(Q,ie,Fe,le,qe);let qt,Pt=W;if(qe!==null&&(qt=ce.get(qe),Pt=Be,Pt.setIndex(qt)),Q.isMesh)ie.wireframe===!0?(Xe.setLineWidth(ie.wireframeLinewidth*Kt()),Pt.setMode(V.LINES)):Pt.setMode(V.TRIANGLES);else if(Q.isLine){let et=ie.linewidth;et===void 0&&(et=1),Xe.setLineWidth(et*Kt()),Q.isLineSegments?Pt.setMode(V.LINES):Q.isLineLoop?Pt.setMode(V.LINE_LOOP):Pt.setMode(V.LINE_STRIP)}else Q.isPoints?Pt.setMode(V.POINTS):Q.isSprite&&Pt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)il("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const et=Q._multiDrawStarts,Ut=Q._multiDrawCounts,ft=Q._multiDrawCount,yn=qe?ce.get(qe).bytesPerElement:1,Wi=b.get(ie).currentProgram.getUniforms();for(let Sn=0;Sn<ft;Sn++)Wi.setValue(V,"_gl_DrawID",Sn),Pt.render(et[Sn]/yn,Ut[Sn])}else if(Q.isInstancedMesh)Pt.renderInstances(rt,Qt,Q.count);else if(le.isInstancedBufferGeometry){const et=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ut=Math.min(le.instanceCount,et);Pt.renderInstances(rt,Qt,Ut)}else Pt.render(rt,Qt)};function Ws(w,Z,le){w.transparent===!0&&w.side===ma&&w.forceSinglePass===!1?(w.side=qn,w.needsUpdate=!0,Gr(w,Z,le),w.side=sr,w.needsUpdate=!0,Gr(w,Z,le),w.side=ma):Gr(w,Z,le)}this.compile=function(w,Z,le=null){le===null&&(le=w),z=Ae.get(le),z.init(Z),F.push(z),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),w!==le&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),z.setupLights();const ie=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Pe=Q.material;if(Pe)if(Array.isArray(Pe))for(let ke=0;ke<Pe.length;ke++){const Fe=Pe[ke];Ws(Fe,le,Q),ie.add(Fe)}else Ws(Pe,le,Q),ie.add(Pe)}),z=F.pop(),ie},this.compileAsync=function(w,Z,le=null){const ie=this.compile(w,Z,le);return new Promise(Q=>{function Pe(){if(ie.forEach(function(ke){b.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){Q(w);return}setTimeout(Pe,10)}Ze.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let zr=null;function qs(w){zr&&zr(w)}function Ir(){Ui.stop()}function Ys(){Ui.start()}const Ui=new R_;Ui.setAnimationLoop(qs),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(w){zr=w,Ne.setAnimationLoop(w),w===null?Ui.stop():Ui.start()},Ne.addEventListener("sessionstart",Ir),Ne.addEventListener("sessionend",Ys),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const le=Ne.enabled===!0&&Ne.isPresenting===!0,ie=Y!==null&&(oe===null||le)&&Y.begin(C,oe);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(Z),Z=Ne.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,Z,oe),z=Ae.get(w,F.length),z.init(Z),F.push(z),Rt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Me.setFromProjectionMatrix(Rt,Hi,Z.reversedDepth),Je=this.localClippingEnabled,Ce=Ve.init(this.clippingPlanes,Je),P=Ee.get(w,I.length),P.init(),I.push(P),Ne.enabled===!0&&Ne.isPresenting===!0){const ke=C.xr.getDepthSensingMesh();ke!==null&&ai(ke,Z,-1/0,C.sortObjects)}ai(w,Z,0,C.sortObjects),P.finish(),C.sortObjects===!0&&P.sort(Re,Ge),lt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,lt&&Oe.addToRenderList(P,w),this.info.render.frame++,Ce===!0&&Ve.beginShadows();const Q=z.state.shadowsArray;if(Ie.render(Q,w,Z),Ce===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&Y.hasRenderPass())===!1){const ke=P.opaque,Fe=P.transmissive;if(z.setupLights(),Z.isArrayCamera){const qe=Z.cameras;if(Fe.length>0)for(let Ke=0,it=qe.length;Ke<it;Ke++){const Qe=qe[Ke];_n(ke,Fe,w,Qe)}lt&&Oe.render(w);for(let Ke=0,it=qe.length;Ke<it;Ke++){const Qe=qe[Ke];on(P,w,Qe,Qe.viewport)}}else Fe.length>0&&_n(ke,Fe,w,Z),lt&&Oe.render(w),on(P,w,Z)}oe!==null&&se===0&&(X.updateMultisampleRenderTarget(oe),X.updateRenderTargetMipmap(oe)),ie&&Y.end(C),w.isScene===!0&&w.onAfterRender(C,w,Z),He.resetDefaultState(),me=-1,ue=null,F.pop(),F.length>0?(z=F[F.length-1],Ce===!0&&Ve.setGlobalState(C.clippingPlanes,z.state.camera)):z=null,I.pop(),I.length>0?P=I[I.length-1]:P=null};function ai(w,Z,le,ie){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)le=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)z.pushLight(w),w.castShadow&&z.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Me.intersectsSprite(w)){ie&&nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);const ke=Ue.update(w),Fe=w.material;Fe.visible&&P.push(w,ke,Fe,le,nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Me.intersectsObject(w))){const ke=Ue.update(w),Fe=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),nt.copy(w.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),nt.copy(ke.boundingSphere.center)),nt.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(Fe)){const qe=ke.groups;for(let Ke=0,it=qe.length;Ke<it;Ke++){const Qe=qe[Ke],rt=Fe[Qe.materialIndex];rt&&rt.visible&&P.push(w,ke,rt,le,nt.z,Qe)}}else Fe.visible&&P.push(w,ke,Fe,le,nt.z,null)}}const Pe=w.children;for(let ke=0,Fe=Pe.length;ke<Fe;ke++)ai(Pe[ke],Z,le,ie)}function on(w,Z,le,ie){const{opaque:Q,transmissive:Pe,transparent:ke}=w;z.setupLightsView(le),Ce===!0&&Ve.setGlobalState(C.clippingPlanes,le),ie&&Xe.viewport(B.copy(ie)),Q.length>0&&yi(Q,Z,le),Pe.length>0&&yi(Pe,Z,le),ke.length>0&&yi(ke,Z,le),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function _n(w,Z,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ie.id]===void 0){const rt=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ie.id]=new Vi(1,1,{generateMipmaps:!0,type:rt?Sa:gi,minFilter:Or,samples:De.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Pe=z.state.transmissionRenderTarget[ie.id],ke=ie.viewport||B;Pe.setSize(ke.z*C.transmissionResolutionScale,ke.w*C.transmissionResolutionScale);const Fe=C.getRenderTarget(),qe=C.getActiveCubeFace(),Ke=C.getActiveMipmapLevel();C.setRenderTarget(Pe),C.getClearColor(be),ye=C.getClearAlpha(),ye<1&&C.setClearColor(16777215,.5),C.clear(),lt&&Oe.render(le);const it=C.toneMapping;C.toneMapping=Gi;const Qe=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),z.setupLightsView(ie),Ce===!0&&Ve.setGlobalState(C.clippingPlanes,ie),yi(w,le,ie),X.updateMultisampleRenderTarget(Pe),X.updateRenderTargetMipmap(Pe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Nt=0,Qt=Z.length;Nt<Qt;Nt++){const qt=Z[Nt],{object:Pt,geometry:et,material:Ut,group:ft}=qt;if(Ut.side===ma&&Pt.layers.test(ie.layers)){const yn=Ut.side;Ut.side=qn,Ut.needsUpdate=!0,Hr(Pt,le,ie,et,Ut,ft),Ut.side=yn,Ut.needsUpdate=!0,rt=!0}}rt===!0&&(X.updateMultisampleRenderTarget(Pe),X.updateRenderTargetMipmap(Pe))}C.setRenderTarget(Fe,qe,Ke),C.setClearColor(be,ye),Qe!==void 0&&(ie.viewport=Qe),C.toneMapping=it}function yi(w,Z,le){const ie=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Pe=w.length;Q<Pe;Q++){const ke=w[Q],{object:Fe,geometry:qe,group:Ke}=ke;let it=ke.material;it.allowOverride===!0&&ie!==null&&(it=ie),Fe.layers.test(le.layers)&&Hr(Fe,Z,le,qe,it,Ke)}}function Hr(w,Z,le,ie,Q,Pe){w.onBeforeRender(C,Z,le,ie,Q,Pe),w.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(C,Z,le,ie,w,Pe),Q.transparent===!0&&Q.side===ma&&Q.forceSinglePass===!1?(Q.side=qn,Q.needsUpdate=!0,C.renderBufferDirect(le,Z,ie,Q,w,Pe),Q.side=sr,Q.needsUpdate=!0,C.renderBufferDirect(le,Z,ie,Q,w,Pe),Q.side=ma):C.renderBufferDirect(le,Z,ie,Q,w,Pe),w.onAfterRender(C,Z,le,ie,Q,Pe)}function Gr(w,Z,le){Z.isScene!==!0&&(Z=vt);const ie=b.get(w),Q=z.state.lights,Pe=z.state.shadowsArray,ke=Q.state.version,Fe=We.getParameters(w,Q.state,Pe,Z,le),qe=We.getProgramCacheKey(Fe);let Ke=ie.programs;ie.environment=w.isMeshStandardMaterial?Z.environment:null,ie.fog=Z.fog,ie.envMap=(w.isMeshStandardMaterial?ve:de).get(w.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,Ke===void 0&&(w.addEventListener("dispose",Dn),Ke=new Map,ie.programs=Ke);let it=Ke.get(qe);if(it!==void 0){if(ie.currentProgram===it&&ie.lightsStateVersion===ke)return Zs(w,Fe),it}else Fe.uniforms=We.getUniforms(w),w.onBeforeCompile(Fe,C),it=We.acquireProgram(Fe,qe),Ke.set(qe,it),ie.uniforms=Fe.uniforms;const Qe=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=Ve.uniform),Zs(w,Fe),ie.needsLights=Ta(w),ie.lightsStateVersion=ke,ie.needsLights&&(Qe.ambientLightColor.value=Q.state.ambient,Qe.lightProbe.value=Q.state.probe,Qe.directionalLights.value=Q.state.directional,Qe.directionalLightShadows.value=Q.state.directionalShadow,Qe.spotLights.value=Q.state.spot,Qe.spotLightShadows.value=Q.state.spotShadow,Qe.rectAreaLights.value=Q.state.rectArea,Qe.ltc_1.value=Q.state.rectAreaLTC1,Qe.ltc_2.value=Q.state.rectAreaLTC2,Qe.pointLights.value=Q.state.point,Qe.pointLightShadows.value=Q.state.pointShadow,Qe.hemisphereLights.value=Q.state.hemi,Qe.directionalShadowMap.value=Q.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qe.spotShadowMap.value=Q.state.spotShadowMap,Qe.spotLightMatrix.value=Q.state.spotLightMatrix,Qe.spotLightMap.value=Q.state.spotLightMap,Qe.pointShadowMap.value=Q.state.pointShadowMap,Qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),ie.currentProgram=it,ie.uniformsList=null,it}function gl(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=su.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function Zs(w,Z){const le=b.get(w);le.outputColorSpace=Z.outputColorSpace,le.batching=Z.batching,le.batchingColor=Z.batchingColor,le.instancing=Z.instancing,le.instancingColor=Z.instancingColor,le.instancingMorph=Z.instancingMorph,le.skinning=Z.skinning,le.morphTargets=Z.morphTargets,le.morphNormals=Z.morphNormals,le.morphColors=Z.morphColors,le.morphTargetsCount=Z.morphTargetsCount,le.numClippingPlanes=Z.numClippingPlanes,le.numIntersection=Z.numClipIntersection,le.vertexAlphas=Z.vertexAlphas,le.vertexTangents=Z.vertexTangents,le.toneMapping=Z.toneMapping}function or(w,Z,le,ie,Q){Z.isScene!==!0&&(Z=vt),X.resetTextureUnits();const Pe=Z.fog,ke=ie.isMeshStandardMaterial?Z.environment:null,Fe=oe===null?C.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Is,qe=(ie.isMeshStandardMaterial?ve:de).get(ie.envMap||ke),Ke=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,it=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Qe=!!le.morphAttributes.position,rt=!!le.morphAttributes.normal,Nt=!!le.morphAttributes.color;let Qt=Gi;ie.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Qt=C.toneMapping);const qt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Pt=qt!==void 0?qt.length:0,et=b.get(ie),Ut=z.state.lights;if(Ce===!0&&(Je===!0||w!==ue)){const bn=w===ue&&ie.id===me;Ve.setState(ie,w,bn)}let ft=!1;ie.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ut.state.version||et.outputColorSpace!==Fe||Q.isBatchedMesh&&et.batching===!1||!Q.isBatchedMesh&&et.batching===!0||Q.isBatchedMesh&&et.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&et.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&et.instancing===!1||!Q.isInstancedMesh&&et.instancing===!0||Q.isSkinnedMesh&&et.skinning===!1||!Q.isSkinnedMesh&&et.skinning===!0||Q.isInstancedMesh&&et.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&et.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&et.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&et.instancingMorph===!1&&Q.morphTexture!==null||et.envMap!==qe||ie.fog===!0&&et.fog!==Pe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ve.numPlanes||et.numIntersection!==Ve.numIntersection)||et.vertexAlphas!==Ke||et.vertexTangents!==it||et.morphTargets!==Qe||et.morphNormals!==rt||et.morphColors!==Nt||et.toneMapping!==Qt||et.morphTargetsCount!==Pt)&&(ft=!0):(ft=!0,et.__version=ie.version);let yn=et.currentProgram;ft===!0&&(yn=Gr(ie,Z,Q));let Wi=!1,Sn=!1,ri=!1;const Ft=yn.getUniforms(),Mn=et.uniforms;if(Xe.useProgram(yn.program)&&(Wi=!0,Sn=!0,ri=!0),ie.id!==me&&(me=ie.id,Sn=!0),Wi||ue!==w){Xe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ft.setValue(V,"projectionMatrix",w.projectionMatrix),Ft.setValue(V,"viewMatrix",w.matrixWorldInverse);const En=Ft.map.cameraPosition;En!==void 0&&En.setValue(V,ot.setFromMatrixPosition(w.matrixWorld)),De.logarithmicDepthBuffer&&Ft.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ft.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),ue!==w&&(ue=w,Sn=!0,ri=!0)}if(et.needsLights&&(Ut.state.directionalShadowMap.length>0&&Ft.setValue(V,"directionalShadowMap",Ut.state.directionalShadowMap,X),Ut.state.spotShadowMap.length>0&&Ft.setValue(V,"spotShadowMap",Ut.state.spotShadowMap,X),Ut.state.pointShadowMap.length>0&&Ft.setValue(V,"pointShadowMap",Ut.state.pointShadowMap,X)),Q.isSkinnedMesh){Ft.setOptional(V,Q,"bindMatrix"),Ft.setOptional(V,Q,"bindMatrixInverse");const bn=Q.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ft.setValue(V,"boneTexture",bn.boneTexture,X))}Q.isBatchedMesh&&(Ft.setOptional(V,Q,"batchingTexture"),Ft.setValue(V,"batchingTexture",Q._matricesTexture,X),Ft.setOptional(V,Q,"batchingIdTexture"),Ft.setValue(V,"batchingIdTexture",Q._indirectTexture,X),Ft.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ft.setValue(V,"batchingColorTexture",Q._colorsTexture,X));const hn=le.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&pt.update(Q,le,yn),(Sn||et.receiveShadow!==Q.receiveShadow)&&(et.receiveShadow=Q.receiveShadow,Ft.setValue(V,"receiveShadow",Q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Mn.envMap.value=qe,Mn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&Z.environment!==null&&(Mn.envMapIntensity.value=Z.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=VR()),Sn&&(Ft.setValue(V,"toneMappingExposure",C.toneMappingExposure),et.needsLights&&Ks(Mn,ri),Pe&&ie.fog===!0&&at.refreshFogUniforms(Mn,Pe),at.refreshMaterialUniforms(Mn,ie,xe,$,z.state.transmissionRenderTarget[w.id]),su.upload(V,gl(et),Mn,X)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(su.upload(V,gl(et),Mn,X),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ft.setValue(V,"center",Q.center),Ft.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ft.setValue(V,"normalMatrix",Q.normalMatrix),Ft.setValue(V,"modelMatrix",Q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const bn=ie.uniformsGroups;for(let En=0,Vr=bn.length;En<Vr;En++){const Si=bn[En];Te.update(Si,yn),Te.bind(Si,yn)}}return yn}function Ks(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function Ta(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(w,Z,le){const ie=b.get(w);ie.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=Z,b.get(w.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const le=b.get(w);le.__webglFramebuffer=Z,le.__useDefaultFramebuffer=Z===void 0};const Aa=V.createFramebuffer();this.setRenderTarget=function(w,Z=0,le=0){oe=w,k=Z,se=le;let ie=null,Q=!1,Pe=!1;if(w){const Fe=b.get(w);if(Fe.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(V.FRAMEBUFFER,Fe.__webglFramebuffer),B.copy(w.viewport),G.copy(w.scissor),te=w.scissorTest,Xe.viewport(B),Xe.scissor(G),Xe.setScissorTest(te),me=-1;return}else if(Fe.__webglFramebuffer===void 0)X.setupRenderTarget(w);else if(Fe.__hasExternalTextures)X.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const it=w.depthTexture;if(Fe.__boundDepthTexture!==it){if(it!==null&&b.has(it)&&(w.width!==it.image.width||w.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(w)}}const qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);const Ke=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ke[Z])?ie=Ke[Z][le]:ie=Ke[Z],Q=!0):w.samples>0&&X.useMultisampledRTT(w)===!1?ie=b.get(w).__webglMultisampledFramebuffer:Array.isArray(Ke)?ie=Ke[le]:ie=Ke,B.copy(w.viewport),G.copy(w.scissor),te=w.scissorTest}else B.copy(ne).multiplyScalar(xe).floor(),G.copy(he).multiplyScalar(xe).floor(),te=Le;if(le!==0&&(ie=Aa),Xe.bindFramebuffer(V.FRAMEBUFFER,ie)&&Xe.drawBuffers(w,ie),Xe.viewport(B),Xe.scissor(G),Xe.setScissorTest(te),Q){const Fe=b.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe.__webglTexture,le)}else if(Pe){const Fe=Z;for(let qe=0;qe<w.textures.length;qe++){const Ke=b.get(w.textures[qe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+qe,Ke.__webglTexture,le,Fe)}}else if(w!==null&&le!==0){const Fe=b.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Fe.__webglTexture,le)}me=-1},this.readRenderTargetPixels=function(w,Z,le,ie,Q,Pe,ke,Fe=0){if(!(w&&w.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe){Xe.bindFramebuffer(V.FRAMEBUFFER,qe);try{const Ke=w.textures[Fe],it=Ke.format,Qe=Ke.type;if(!De.textureFormatReadable(it)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Qe)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-ie&&le>=0&&le<=w.height-Q&&(w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe),V.readPixels(Z,le,ie,Q,we.convert(it),we.convert(Qe),Pe))}finally{const Ke=oe!==null?b.get(oe).__webglFramebuffer:null;Xe.bindFramebuffer(V.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(w,Z,le,ie,Q,Pe,ke,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe)if(Z>=0&&Z<=w.width-ie&&le>=0&&le<=w.height-Q){Xe.bindFramebuffer(V.FRAMEBUFFER,qe);const Ke=w.textures[Fe],it=Ke.format,Qe=Ke.type;if(!De.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,rt),V.bufferData(V.PIXEL_PACK_BUFFER,Pe.byteLength,V.STREAM_READ),w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe),V.readPixels(Z,le,ie,Q,we.convert(it),we.convert(Qe),0);const Nt=oe!==null?b.get(oe).__webglFramebuffer:null;Xe.bindFramebuffer(V.FRAMEBUFFER,Nt);const Qt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await lb(V,Qt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,rt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pe),V.deleteBuffer(rt),V.deleteSync(Qt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,le=0){const ie=Math.pow(2,-le),Q=Math.floor(w.image.width*ie),Pe=Math.floor(w.image.height*ie),ke=Z!==null?Z.x:0,Fe=Z!==null?Z.y:0;X.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,ke,Fe,Q,Pe),Xe.unbindTexture()};const lr=V.createFramebuffer(),Ra=V.createFramebuffer();this.copyTextureToTexture=function(w,Z,le=null,ie=null,Q=0,Pe=null){Pe===null&&(Q!==0?(il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=Q,Q=0):Pe=0);let ke,Fe,qe,Ke,it,Qe,rt,Nt,Qt;const qt=w.isCompressedTexture?w.mipmaps[Pe]:w.image;if(le!==null)ke=le.max.x-le.min.x,Fe=le.max.y-le.min.y,qe=le.isBox3?le.max.z-le.min.z:1,Ke=le.min.x,it=le.min.y,Qe=le.isBox3?le.min.z:0;else{const hn=Math.pow(2,-Q);ke=Math.floor(qt.width*hn),Fe=Math.floor(qt.height*hn),w.isDataArrayTexture?qe=qt.depth:w.isData3DTexture?qe=Math.floor(qt.depth*hn):qe=1,Ke=0,it=0,Qe=0}ie!==null?(rt=ie.x,Nt=ie.y,Qt=ie.z):(rt=0,Nt=0,Qt=0);const Pt=we.convert(Z.format),et=we.convert(Z.type);let Ut;Z.isData3DTexture?(X.setTexture3D(Z,0),Ut=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(X.setTexture2DArray(Z,0),Ut=V.TEXTURE_2D_ARRAY):(X.setTexture2D(Z,0),Ut=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const ft=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Wi=V.getParameter(V.UNPACK_SKIP_PIXELS),Sn=V.getParameter(V.UNPACK_SKIP_ROWS),ri=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ke),V.pixelStorei(V.UNPACK_SKIP_ROWS,it),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qe);const Ft=w.isDataArrayTexture||w.isData3DTexture,Mn=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const hn=b.get(w),bn=b.get(Z),En=b.get(hn.__renderTarget),Vr=b.get(bn.__renderTarget);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let Si=0;Si<qe;Si++)Ft&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(w).__webglTexture,Q,Qe+Si),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(Z).__webglTexture,Pe,Qt+Si)),V.blitFramebuffer(Ke,it,ke,Fe,rt,Nt,ke,Fe,V.DEPTH_BUFFER_BIT,V.NEAREST);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||b.has(w)){const hn=b.get(w),bn=b.get(Z);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,lr),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ra);for(let En=0;En<qe;En++)Ft?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,Q,Qe+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,Q),Mn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,Pe,Qt+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,Pe),Q!==0?V.blitFramebuffer(Ke,it,ke,Fe,rt,Nt,ke,Fe,V.COLOR_BUFFER_BIT,V.NEAREST):Mn?V.copyTexSubImage3D(Ut,Pe,rt,Nt,Qt+En,Ke,it,ke,Fe):V.copyTexSubImage2D(Ut,Pe,rt,Nt,Ke,it,ke,Fe);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Mn?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(Ut,Pe,rt,Nt,Qt,ke,Fe,qe,Pt,et,qt.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(Ut,Pe,rt,Nt,Qt,ke,Fe,qe,Pt,qt.data):V.texSubImage3D(Ut,Pe,rt,Nt,Qt,ke,Fe,qe,Pt,et,qt):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pe,rt,Nt,ke,Fe,Pt,et,qt.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pe,rt,Nt,qt.width,qt.height,Pt,qt.data):V.texSubImage2D(V.TEXTURE_2D,Pe,rt,Nt,ke,Fe,Pt,et,qt);V.pixelStorei(V.UNPACK_ROW_LENGTH,ft),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Sn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ri),Pe===0&&Z.generateMipmaps&&V.generateMipmap(Ut),Xe.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&X.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?X.setTextureCube(w,0):w.isData3DTexture?X.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?X.setTexture2DArray(w,0):X.setTexture2D(w,0),Xe.unbindTexture()},this.resetState=function(){k=0,se=0,oe=null,Xe.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}const jR=`
  attribute float alpha;
  attribute float aSize;
  varying float vAlpha;
  void main() {
    vAlpha = alpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize;
    gl_Position = projectionMatrix * mvPosition;
  }
`,XR=`
  varying float vAlpha;
  uniform vec3 uColor;
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float softEdge = 1.0 - smoothstep(0.25, 0.5, dist);
    gl_FragColor = vec4(uColor, vAlpha * softEdge);
  }
`,WR=`
  attribute float alpha;
  varying float vAlpha;
  void main() {
    vAlpha = alpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,qR=`
  varying float vAlpha;
  uniform vec3 uColor;
  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
  }
`;function YR(r,e){const i=16*Math.pow(Math.sin(r),3),s=13*Math.cos(r)-5*Math.cos(2*r)-2*Math.cos(3*r)-Math.cos(4*r);return{x:i*e,y:s*e}}function Ev(r,e){const i=[];for(let s=0;s<r;s++){const l=s/r*Math.PI*2,c=(Math.random()-.5)*e*.6,f=(Math.random()-.5)*e*.6,h=YR(l,e);i.push({x:h.x+c,y:h.y+f})}return i}function ZR(r){return r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2}function KR(r,e,i){const s=new Map;for(let l=0;l<r.length;l++){const c=r[l],f=Math.floor((c.x+i)/e)*1e4+Math.floor((c.y+i)/e);s.has(f)||s.set(f,[]),s.get(f).push(l)}return s}function QR(r,e,i){const s=[];for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const f=r.get((e+l)*1e4+(i+c));if(f)for(let h=0;h<f.length;h++)s.push(f[h])}return s}function JR(r,e={}){const{particleCount:i=90,connectionDistance:s=120,color:l=13935988,heartMode:c="heart",alphaMultiplier:f=1,connectionAlphaMultiplier:h=1}=e;let m=window.innerWidth,p=window.innerHeight,x=m/2,g=p/2,v=null;const M=130,E=M*M,T=250,S=.2,_=10,D=3,U=4,P=2.5,z=_+D+U+P;let I=c==="heart";const F={x:0,y:0,active:!1},Y={active:!1,startTime:0,duration:1.5},C=window.matchMedia("(prefers-reduced-motion: reduce)").matches,N=new kR({canvas:r,alpha:!0,antialias:!1,powerPreference:"low-power"});N.setPixelRatio(Math.min(window.devicePixelRatio,2)),N.setSize(m,p);const k=new wp(-x,x,g,-g,.1,100);k.position.z=10;const se=new Lb,oe=new Ot(l),me=Math.min(m,p)*.028;let ue=I?Ev(i,me):null;const B=[];for(let Me=0;Me<i;Me++)B.push({x:(Math.random()-.5)*m,y:(Math.random()-.5)*p,homeX:(Math.random()-.5)*m,homeY:(Math.random()-.5)*p,heartX:ue?ue[Me].x:0,heartY:ue?ue[Me].y:0,snapX:0,snapY:0,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,baseAlpha:(.2+Math.random()*.4)*f,size:(2+Math.random()*2.5)*Math.min(window.devicePixelRatio,2),phase:Math.random()*Math.PI*2});const G=new Float32Array(i*3),te=new Float32Array(i),be=new Float32Array(i);for(let Me=0;Me<i;Me++)G[Me*3]=B[Me].x,G[Me*3+1]=B[Me].y,G[Me*3+2]=0,te[Me]=B[Me].baseAlpha,be[Me]=B[Me].size;const ye=new ii;ye.setAttribute("position",new Fn(G,3)),ye.setAttribute("alpha",new Fn(te,1)),ye.setAttribute("aSize",new Fn(be,1));const O=new xi({uniforms:{uColor:{value:oe}},vertexShader:jR,fragmentShader:XR,transparent:!0,depthWrite:!1});se.add(new Vb(ye,O));const $=new Float32Array(T*6),xe=new Float32Array(T*2),Re=new ii;Re.setAttribute("position",new Fn($,3)),Re.setAttribute("alpha",new Fn(xe,1)),Re.setDrawRange(0,0);const Ge=new xi({uniforms:{uColor:{value:oe}},vertexShader:WR,fragmentShader:qR,transparent:!0,depthWrite:!1});se.add(new Hb(Re,Ge));const ne=s*s;let he="drift";function Le(Me){v=requestAnimationFrame(Le);const Ce=Me*.001;let Je="drift",Rt=0;if(I){const Ze=Ce%z;Ze<_?(Je="drift",Rt=Ze/_):Ze<_+D?(Je="gather",Rt=(Ze-_)/D):Ze<_+D+U?(Je="hold",Rt=(Ze-_-D)/U):(Je="scatter",Rt=(Ze-_-D-U)/P)}if(Je!==he){for(let Ze=0;Ze<i;Ze++){const De=B[Ze];De.snapX=De.x,De.snapY=De.y,Je==="scatter"&&(De.homeX=(Math.random()-.5)*m,De.homeY=(Math.random()-.5)*p)}he=Je}const ot=ZR(Math.min(Rt,1));for(let Ze=0;Ze<i;Ze++){const De=B[Ze];if(Je==="drift")De.x+=De.vx,De.y+=De.vy,De.x>x+30&&(De.x=-x-30),De.x<-x-30&&(De.x=x+30),De.y>g+30&&(De.y=-g-30),De.y<-g-30&&(De.y=g+30);else if(Je==="gather")De.x=De.snapX+(De.heartX-De.snapX)*ot,De.y=De.snapY+(De.heartY-De.snapY)*ot;else if(Je==="hold"){const X=1+Math.sin(Ce*2)*.03;De.x=De.heartX*X,De.y=De.heartY*X}else Je==="scatter"&&(De.x=De.snapX+(De.homeX-De.snapX)*ot,De.y=De.snapY+(De.homeY-De.snapY)*ot);if(F.active){const X=De.x-F.x,de=De.y-F.y,ve=X*X+de*de;if(ve<E&&ve>1){const ce=Math.sqrt(ve),je=(1-ce/M)*.9;De.x+=X/ce*je,De.y+=de/ce*je}}const Xe=Math.sin(Ce*.5+De.phase)*.12;let L=0;Je==="gather"&&(L=ot*.15),Je==="hold"&&(L=.15),Je==="scatter"&&(L=(1-ot)*.15);let b=0;if(Y.active){const X=Ce-Y.startTime;if(X>Y.duration)Y.active=!1;else{const de=X/Y.duration;b=(1-de)*.5*Math.sin(de*Math.PI)}}G[Ze*3]=De.x,G[Ze*3+1]=De.y,te[Ze]=Math.max(.05,De.baseAlpha+Xe+L+b)}let nt=s,vt=ne,lt=S*h;if(Je==="gather"?(nt+=ot*60,vt=nt*nt,lt+=ot*.1):Je==="hold"?(nt+=60,vt=nt*nt,lt+=.1):Je==="scatter"&&(nt+=(1-ot)*60,vt=nt*nt,lt+=(1-ot)*.1),Y.active){const Ze=(Ce-Y.startTime)/Y.duration,De=(1-Ze)*Math.sin(Ze*Math.PI);nt+=De*80,vt=nt*nt,lt+=De*.2}const Kt=KR(B,nt,x);let V=0;const Xt=new Set;for(let Ze=0;Ze<i&&V<T;Ze++){const De=B[Ze],Xe=Math.floor((De.x+x)/nt),L=Math.floor((De.y+x)/nt),b=QR(Kt,Xe,L);for(let X=0;X<b.length&&V<T;X++){const de=b[X];if(de<=Ze)continue;const ve=Ze*i+de;if(Xt.has(ve))continue;Xt.add(ve);const ce=B[de],je=De.x-ce.x,Ue=De.y-ce.y,We=je*je+Ue*Ue;if(We<vt){const at=Math.sqrt(We),Ee=(1-at/nt)*lt,Ae=V*6;$[Ae]=De.x,$[Ae+1]=De.y,$[Ae+2]=0,$[Ae+3]=ce.x,$[Ae+4]=ce.y,$[Ae+5]=0,xe[V*2]=Ee,xe[V*2+1]=Ee,V++}}}Re.setDrawRange(0,V*2),ye.attributes.position.needsUpdate=!0,ye.attributes.alpha.needsUpdate=!0,Re.attributes.position.needsUpdate=!0,Re.attributes.alpha.needsUpdate=!0,N.render(se,k)}if(C){if(ue)for(let Me=0;Me<i;Me++)G[Me*3]=ue[Me].x,G[Me*3+1]=ue[Me].y,te[Me]=B[Me].baseAlpha+.15;ye.attributes.position.needsUpdate=!0,ye.attributes.alpha.needsUpdate=!0,N.render(se,k)}else v=requestAnimationFrame(Le);return{destroy(){v!==null&&cancelAnimationFrame(v),ye.dispose(),O.dispose(),Re.dispose(),Ge.dispose(),N.dispose()},resize(Me,Ce){m=Me,p=Ce,x=Me/2,g=Ce/2,N.setSize(Me,Ce),k.left=-x,k.right=x,k.top=g,k.bottom=-g,k.updateProjectionMatrix()},setMouse(Me,Ce,Je){F.x=Me-x,F.y=-(Ce-g),F.active=Je},burst(){Y.active=!0,Y.startTime=performance.now()*.001;for(let Me=0;Me<i;Me++){const Ce=B[Me],Je=Ce.x,Rt=Ce.y,ot=Math.sqrt(Je*Je+Rt*Rt)||1;Ce.vx+=Je/ot*1.2,Ce.vy+=Rt/ot*1.2}},setHeartMode(Me){if(I=Me==="heart",I&&!ue){ue=Ev(i,me);for(let Ce=0;Ce<i;Ce++)B[Ce].heartX=ue[Ce].x,B[Ce].heartY=ue[Ce].y}}}}function $R(){try{const r=document.createElement("canvas");return!!(r.getContext("webgl")||r.getContext("experimental-webgl"))}catch{return!1}}const pl=q.forwardRef(function({mode:e="heart",intensity:i=.6,color:s=13935988,className:l="",fixed:c=!1},f){const h=q.useRef(null),m=q.useRef(null),[p]=q.useState(()=>$R());if(q.useImperativeHandle(f,()=>({burst:()=>m.current?.burst(),setHeartMode:g=>m.current?.setHeartMode(g)})),q.useEffect(()=>{if(!p)return;const g=h.current;if(!g)return;const v=window.innerWidth<768,E=Math.round((v?35:70)*(.4+i*.8)),S=Math.round((v?80:110)*(.7+i*.5));let _="heart";(e==="drift"||e==="ambient")&&(_="none");try{m.current=JR(g,{particleCount:E,connectionDistance:S,color:s,heartMode:_,alphaMultiplier:e==="ambient"?.4:.6+i*.4,connectionAlphaMultiplier:e==="ambient"?.3:.5+i*.5})}catch(Y){console.warn("ParticleField: scene creation failed",Y)}let D=null;const U=()=>{clearTimeout(D),D=setTimeout(()=>{m.current?.resize(window.innerWidth,window.innerHeight)},200)};window.addEventListener("resize",U);const P=Y=>m.current?.setMouse(Y.clientX,Y.clientY,!0),z=()=>m.current?.setMouse(0,0,!1),I=Y=>{const C=Y.touches[0];C&&m.current?.setMouse(C.clientX,C.clientY,!0)},F=()=>m.current?.setMouse(0,0,!1);return window.addEventListener("mousemove",P),document.addEventListener("mouseleave",z),window.addEventListener("touchmove",I,{passive:!0}),window.addEventListener("touchend",F),()=>{clearTimeout(D),m.current?.destroy(),m.current=null,window.removeEventListener("resize",U),window.removeEventListener("mousemove",P),document.removeEventListener("mouseleave",z),window.removeEventListener("touchmove",I),window.removeEventListener("touchend",F)}},[p,e,i,s]),!p)return null;const x=c?"fixed":"absolute";return A.jsx("canvas",{ref:h,className:`${x} inset-0 w-full h-full pointer-events-none ${l}`,style:{zIndex:1},"aria-hidden":"true"})});function ew(){const r=ol();return A.jsxs("section",{className:"min-h-screen flex items-center justify-center relative overflow-hidden px-6",children:[A.jsx(pl,{mode:"heart",intensity:.7}),A.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(212,165,116,0.07) 0%, transparent 60%)"}}),A.jsx("div",{className:"absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(212,165,116,0.04) 0%, transparent 70%)",animationDelay:"2s"}}),A.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(ellipse at 50% 0%, rgba(212,165,116,0.03) 0%, transparent 50%)"}}),A.jsxs("div",{className:"max-w-[680px] text-center relative z-10",children:[A.jsx("p",{className:"font-body text-[11px] uppercase tracking-[0.2em] text-accent-primary/50 mb-6 opacity-0 animate-fade-in",style:{animationDelay:"0.1s",animationFillMode:"forwards"},children:"A valentine's day experience"}),A.jsx("h1",{className:"font-display text-[clamp(36px,6vw,60px)] leading-[1.08] font-medium tracking-[-0.02em] text-text-primary opacity-0 animate-fade-up",style:{animationFillMode:"forwards",animationDelay:"0.2s"},children:"Turn your memories into something they can see."}),A.jsx("p",{className:"font-body font-normal text-[clamp(16px,2.5vw,20px)] text-text-secondary mt-6 max-w-[480px] mx-auto leading-relaxed opacity-0 animate-fade-up",style:{animationDelay:"0.5s",animationFillMode:"forwards"},children:"Talk about the person you love. We'll turn it into a visual story you can share."}),A.jsx("div",{className:"mt-12 opacity-0 animate-fade-up",style:{animationDelay:"0.7s",animationFillMode:"forwards"},children:A.jsx(Qv,{onClick:()=>r("/create"),children:"Start Your Memory Map"})}),A.jsx("p",{className:"font-body text-[11px] text-text-tertiary/40 mt-4 opacity-0 animate-fade-in",style:{animationDelay:"1s",animationFillMode:"forwards"},children:"No account needed. Free to create."})]}),A.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in",style:{animationDelay:"1.5s",animationFillMode:"forwards"},children:A.jsx("div",{className:"animate-gentle-bounce",children:A.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-text-tertiary/40",children:A.jsx("path",{d:"M6 9l6 6 6-6"})})})})]})}function yu(r={}){const e=q.useRef(null),[i,s]=q.useState(!1);return q.useEffect(()=>{const l=e.current;if(!l)return;const c=new IntersectionObserver(([f])=>{f.isIntersecting&&(s(!0),c.unobserve(l))},{threshold:r.threshold||.1,rootMargin:r.rootMargin||"0px 0px -40px 0px"});return c.observe(l),()=>c.disconnect()},[r.threshold,r.rootMargin]),[e,i]}function ir({children:r,className:e="",delay:i=0,direction:s="up"}){const[l,c]=yu(),f={up:"translate-y-5",left:"-translate-x-[30px]",right:"translate-x-[30px]",none:""};return A.jsx("div",{ref:l,className:`transition-all duration-600 ease-out ${c?"opacity-100 translate-y-0 translate-x-0":`opacity-0 ${f[s]}`} ${e}`,style:{transitionDelay:`${i}s`},children:r})}const tw=[{number:"1",label:"Share your memories",description:"Talk or type about moments that matter"},{number:"2",label:"Watch it take shape",description:"Each memory becomes a point on your timeline"},{number:"3",label:"Send it as a gift",description:"Share a link they'll actually want to keep"}];function nw(){return A.jsx("section",{className:"py-[120px] px-6",children:A.jsx("div",{className:"max-w-[900px] mx-auto",children:A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative",children:[A.jsx("div",{className:"hidden md:block absolute top-[32px] left-[16.6%] right-[16.6%] h-px bg-accent-primary/20"}),tw.map((r,e)=>A.jsx(ir,{delay:e*.15,children:A.jsxs("div",{className:"text-center",children:[A.jsx("span",{className:"font-accent italic text-[48px] text-accent-primary/60 leading-none",children:r.number}),A.jsx("h3",{className:"font-body text-sm uppercase tracking-[0.1em] text-text-primary mt-4 mb-2",children:r.label}),A.jsx("p",{className:"font-body text-base text-text-secondary",children:r.description})]})},r.number))]})})})}function iw(){return A.jsxs("main",{children:[A.jsx(ew,{}),A.jsx(nw,{})]})}function Su({count:r=12,opacity:e=.08}){const i=q.useMemo(()=>Array.from({length:r},(s,l)=>({id:l,left:`${5+l*89%90}%`,size:10+l*7%16,delay:`${l*2.3%8}s`,duration:`${12+l*3.7%10}s`,opacity:e*(.5+l*13%10/10)})),[r,e]);return A.jsx("div",{className:"floating-hearts",children:i.map(s=>A.jsx("svg",{className:"heart",width:s.size,height:s.size,viewBox:"0 0 24 24",fill:"currentColor",style:{left:s.left,animationDuration:s.duration,animationDelay:s.delay,color:`rgba(200, 140, 140, ${s.opacity})`},children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})},s.id))})}const aw=[{id:"partner",label:"My Partner",sub:"romantic love"},{id:"friend",label:"My Best Friend",sub:"the one who gets it"},{id:"parent",label:"My Parent",sub:"who shaped me"},{id:"sibling",label:"My Sibling",sub:"built-in best friend"},{id:"grandparent",label:"My Grandparent",sub:"living history"},{id:"other",label:"Someone Special",sub:"in my own words"}];function rw({onComplete:r}){const[e,i]=q.useState(""),[s,l]=q.useState(null),[c,f]=q.useState(0),h=p=>{p.preventDefault(),e.trim()&&f(1)},m=p=>{l(p),f(2),setTimeout(()=>{r({name:e.trim(),type:p.id,typeLabel:p.label})},600)};return A.jsxs("section",{className:"min-h-screen flex items-center justify-center relative overflow-hidden px-6",children:[A.jsx(pl,{mode:"ambient",intensity:.4}),A.jsx(Su,{count:8,opacity:.04}),A.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)"}}),A.jsxs("div",{className:`text-center max-w-[560px] relative z-10 transition-all duration-700 ease-out ${c===2?"opacity-0 translate-y-[-20px]":"opacity-100"}`,children:[c===0&&A.jsxs("form",{onSubmit:h,className:"animate-fade-up",style:{animationFillMode:"forwards"},children:[A.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto mb-6 text-accent-primary/40 heart-glow animate-heart-beat",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),A.jsx("p",{className:"font-accent text-[clamp(24px,4vw,32px)] font-light text-text-primary leading-[1.3] mb-10",children:"Who is this Memory Map for?"}),A.jsxs("div",{className:"relative max-w-[400px] mx-auto",children:[A.jsx("input",{type:"text",value:e,onChange:p=>i(p.target.value),placeholder:"Their first name",autoFocus:!0,className:"w-full bg-transparent border-0 border-b-2 border-accent-primary/20 focus:border-accent-primary/60 text-center font-display text-[clamp(28px,5vw,40px)] font-medium text-text-primary placeholder:text-text-tertiary/30 focus:outline-none pb-3 transition-all duration-300"}),A.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-primary transition-all duration-500",style:{width:e?"100%":"0%"}})]}),A.jsxs("button",{type:"submit",disabled:!e.trim(),className:`mt-10 font-body text-sm tracking-wide transition-all duration-500 cursor-pointer ${e.trim()?"text-accent-primary opacity-100 translate-y-0":"text-text-tertiary/30 opacity-0 translate-y-2 pointer-events-none"}`,children:["Continue",A.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"inline-block ml-2",children:A.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c>=1&&c<2&&A.jsxs("div",{className:"animate-fade-up",style:{animationFillMode:"forwards"},children:[A.jsxs("p",{className:"font-accent text-[clamp(20px,3.5vw,28px)] font-light text-text-primary leading-[1.3] mb-3",children:[A.jsx("span",{className:"text-accent-primary",children:e.trim()})," is..."]}),A.jsx("p",{className:"font-body text-sm text-text-tertiary/60 mb-10",children:"This helps us understand the tone of your memories"}),A.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[480px] mx-auto",children:aw.map(p=>A.jsxs("button",{onClick:()=>m(p),className:"group glass-card rounded-lg px-4 py-5 text-center cursor-pointer transition-all duration-300 hover:border-accent-primary/30 hover:bg-bg-elevated/60 active:scale-[0.97]",children:[A.jsx("span",{className:"font-body text-sm font-medium text-text-primary block",children:p.label}),A.jsx("span",{className:"font-body text-[10px] text-text-tertiary/50 mt-1 block",children:p.sub})]},p.id))})]}),c===2&&s&&A.jsxs("div",{className:"animate-fade-in text-center",children:[A.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto mb-4 text-accent-primary/50 animate-heart-fade-in heart-glow",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),A.jsxs("p",{className:"font-accent text-[clamp(22px,4vw,30px)] font-light text-text-primary",children:["A Memory Map for ",A.jsx("span",{className:"text-accent-primary",children:e.trim()})]})]})]})]})}function sw({prompt:r,onSubmit:e,isProcessing:i,memoryIndex:s}){const[l,c]=q.useState(""),[f,h]=q.useState(!1),m=q.useRef(null);q.useEffect(()=>{const g=setTimeout(()=>h(!0),100);return()=>clearTimeout(g)},[]),q.useEffect(()=>{if(f){const g=setTimeout(()=>m.current?.focus(),500);return()=>clearTimeout(g)}},[f]),q.useEffect(()=>{const g=m.current;g&&(g.style.height="auto",g.style.height=Math.min(g.scrollHeight,200)+"px")},[l]);const p=()=>{const g=l.trim();!g||i||e(g)},x=g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),p())};return A.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:[A.jsx("p",{className:`font-accent text-[clamp(22px,4vw,32px)] font-light text-text-primary text-center
          max-w-[600px] leading-[1.4] transition-all duration-1000 ease-out
          ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:r}),A.jsxs("div",{className:`mt-10 w-full max-w-[560px] transition-all duration-1000 ease-out
          ${f?"opacity-100 translate-y-0 delay-300":"opacity-0 translate-y-4"}`,children:[A.jsx("textarea",{ref:m,value:l,onChange:g=>c(g.target.value),onKeyDown:x,disabled:i,placeholder:"Speak or type your memory...",rows:2,className:`w-full bg-transparent text-center font-body text-lg text-text-primary\r
            placeholder:font-accent placeholder:italic placeholder:text-text-tertiary/40\r
            resize-none pb-4 transition-colors duration-500`,style:{border:"none",borderBottom:"1px solid rgba(212, 165, 116, 0.15)",outline:"none",boxShadow:"none"},onFocus:g=>{g.target.style.borderBottomColor="rgba(212, 165, 116, 0.4)",g.target.style.outline="none"},onBlur:g=>{g.target.style.borderBottomColor="rgba(212, 165, 116, 0.15)"}}),A.jsx("div",{className:"flex justify-center mt-4",children:A.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/50 animate-breathe",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),A.jsx("div",{className:`mt-6 flex justify-center transition-all duration-500
            ${l.trim()?"opacity-100 translate-y-0":"opacity-0 translate-y-2 pointer-events-none"}`,children:A.jsxs("button",{onClick:p,disabled:!l.trim()||i,className:`font-body text-sm text-accent-primary hover:text-accent-secondary\r
              transition-colors cursor-pointer flex items-center gap-2`,children:["Save this memory",A.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",className:"opacity-70",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})]})}),A.jsx("p",{className:`mt-4 text-center font-body text-[11px] text-text-tertiary/30
            transition-all duration-500
            ${f?"opacity-100 delay-700":"opacity-0"}`,children:"Press Enter to save"})]}),s>0&&A.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2",children:A.jsxs("div",{className:"flex items-center gap-2",children:[Array.from({length:s}).map((g,v)=>A.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/40",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})},v)),A.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary animate-breathe",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})]})})]})}function ow({memory:r,onContinue:e}){const[i,s]=q.useState(0);q.useEffect(()=>{const c=setTimeout(()=>s(1),100);return()=>clearTimeout(c)},[]);const l=()=>{s(2),setTimeout(()=>e(),600)};return r.loading?A.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:A.jsxs("div",{className:"text-center",children:[A.jsx("div",{className:"w-2 h-2 rounded-full bg-accent-primary animate-breathe mx-auto mb-4"}),A.jsx("p",{className:"font-accent text-lg text-text-tertiary italic animate-fade-in",children:"Understanding your memory..."})]})}):A.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:A.jsxs("div",{className:`max-w-[480px] w-full glass-card rounded-xl p-8 transition-all duration-700 ease-out
          ${i===0?"opacity-0 translate-y-6 scale-95":""}
          ${i===1?"opacity-100 translate-y-0 scale-100":""}
          ${i===2?"opacity-0 -translate-y-6 scale-95":""}`,children:[A.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/30 mb-3 mx-auto heart-glow",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),A.jsx("h3",{className:"font-display text-2xl font-medium text-text-primary mb-2",children:r.title}),r.date_hint&&A.jsx("p",{className:"font-body text-[11px] uppercase tracking-[0.1em] text-text-tertiary mb-4",children:r.date_hint}),A.jsxs("p",{className:"font-accent text-lg text-text-secondary leading-relaxed mb-5",children:["“",r.excerpt,"”"]}),A.jsxs("div",{className:"flex items-center gap-2 flex-wrap mb-6",children:[r.emotion&&A.jsx("span",{className:`font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/80\r
              border border-accent-primary/20 rounded-full px-3 py-1`,children:r.emotion}),r.location?.place_name&&A.jsxs("span",{className:"font-body text-[11px] text-text-tertiary flex items-center gap-1",children:[A.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),A.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),r.location.place_name]}),r.theme_tags?.map(c=>A.jsx("span",{className:"font-body text-[10px] text-text-tertiary/60 border border-border-subtle rounded-full px-2 py-0.5",children:c},c))]}),A.jsxs("button",{onClick:l,className:`font-body text-sm text-accent-primary hover:text-accent-secondary\r
            transition-colors cursor-pointer flex items-center gap-2 mx-auto`,children:["Continue",A.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})})}function lw({memoryCount:r,recipientName:e,onAddMore:i}){const s=ol(),[l,c]=q.useState(0);return q.useEffect(()=>{const f=setTimeout(()=>c(1),200),h=setTimeout(()=>c(2),800),m=setTimeout(()=>c(3),1400);return()=>{clearTimeout(f),clearTimeout(h),clearTimeout(m)}},[]),A.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:[A.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)",opacity:l>=1?1:0,transition:"opacity 2s ease-out"}}),A.jsxs("div",{className:"text-center max-w-[500px] relative z-10",children:[A.jsx("div",{className:`mb-4 transition-all duration-700 ${l>=1?"opacity-100 scale-100":"opacity-0 scale-50"}`,children:A.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto text-accent-primary/50 heart-glow animate-heart-beat",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),A.jsxs("div",{className:`mb-6 transition-all duration-700 ${l>=1?"opacity-100":"opacity-0"}`,children:[A.jsx("span",{className:"font-display text-5xl text-accent-primary",children:r}),A.jsxs("p",{className:"font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary/50 mt-2",children:[r===1?"Memory":"Memories"," captured"]})]}),A.jsxs("div",{className:`flex items-center justify-center gap-3 mb-8 transition-all duration-800 ${l>=1?"opacity-100":"opacity-0"}`,children:[A.jsx("div",{className:"w-8 h-px bg-gradient-to-r from-transparent to-accent-primary/25"}),A.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/30",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),A.jsx("div",{className:"w-8 h-px bg-gradient-to-l from-transparent to-accent-primary/25"})]}),A.jsxs("p",{className:`font-accent text-[clamp(22px,4vw,30px)] font-light text-text-primary leading-[1.4] mb-10 transition-all duration-[1200ms] ease-out ${l>=2?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,style:{filter:l>=2?"blur(0)":"blur(4px)"},children:["Your map of ",A.jsx("span",{className:"text-accent-primary",children:e})," is ready."]}),A.jsxs("div",{className:`flex flex-col items-center gap-5 transition-all duration-700 ${l>=3?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:[A.jsxs("button",{onClick:()=>s("/preview"),className:"group relative font-body text-sm text-accent-primary hover:text-accent-secondary transition-all duration-500 cursor-pointer border border-accent-primary/25 rounded-full px-10 py-3 hover:border-accent-primary/50",children:[A.jsx("span",{className:"absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",style:{boxShadow:"0 0 30px rgba(212,165,116,0.12), inset 0 0 20px rgba(212,165,116,0.05)"}}),A.jsxs("span",{className:"relative z-10 flex items-center gap-2",children:["See Your Memory Map",A.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",className:"opacity-60",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})]})]}),A.jsx("button",{onClick:i,className:"font-body text-xs text-text-tertiary/50 hover:text-accent-primary/70 transition-colors cursor-pointer",children:"+ Add another memory"})]})]})]})}const U_="/api";async function cw(r,e){const i=await fetch(`${U_}/process-memory`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:r,context:e||null})});if(!i.ok)throw new Error(`API error: ${i.status}`);return i.json()}async function uw(r,e){const i=await fetch(`${U_}/relationship-summary`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({memories:r,context:e||null})});if(!i.ok)throw new Error(`API error: ${i.status}`);return i.json()}function fw({addMemory:r,updateMemory:e,memories:i,setRelationshipSummary:s,relationshipContext:l}){return{submitMemory:q.useCallback(f=>{const h=Date.now().toString();return r({id:h,rawText:f,loading:!0,title:null,date_hint:null,location:null,emotion:null,excerpt:null,theme_tags:[]}),cw(f,l).then(p=>{if(e(h,{...p,loading:!1,rawText:f}),i.length+1>=3){const g=[...i.map(v=>v.rawText||v.excerpt),f];uw(g,l).then(v=>s(v)).catch(v=>console.error("Summary generation failed:",v))}}).catch(p=>{console.error("Memory processing failed:",p);const x=f.trim().split(/\s+/);let v=x.slice(0,Math.min(6,x.length)).join(" ");x.length>6&&(v+="..."),v=v.charAt(0).toUpperCase()+v.slice(1),e(h,{loading:!1,title:v||"A moment remembered",excerpt:f,emotion:"nostalgia",theme_tags:["personal"]})}),h},[r,e,i,s,l])}}const Jc={first:[r=>`What's a moment with ${r} that still makes you smile?`,r=>`Tell me about the first time you met ${r}.`,r=>`What's a memory with ${r} you never want to forget?`],second:[r=>`What's something ${r} does that you absolutely love?`,r=>`Tell me about a time ${r} completely surprised you.`,r=>`Is there a place that always reminds you of ${r}?`],third:[r=>`What would you want ${r} to know they mean to you?`,r=>`What's the funniest thing that's happened between you and ${r}?`,r=>`Tell me about a quiet moment with ${r} that meant everything.`],continuing:[r=>`Is there another moment with ${r} on your mind?`,r=>`What else comes to heart when you think of ${r}?`,r=>"Take your time... any other memory you'd like to capture?"]};function hh(r,e){const i=r===0?Jc.first:r===1?Jc.second:r===2?Jc.third:Jc.continuing,s=Math.floor(Math.random()*i.length);return i[s](e)}function dw({memories:r,addMemory:e,updateMemory:i,deleteMemory:s,relationshipContext:l,setRelationshipContext:c,relationshipSummary:f,setRelationshipSummary:h}){const[m,p]=q.useState("prompting"),[x,g]=q.useState(""),[v,M]=q.useState(null),[E,T]=q.useState(0),S=q.useRef(null),{submitMemory:_}=fw({addMemory:e,updateMemory:i,memories:r,setRelationshipSummary:h,relationshipContext:l});q.useEffect(()=>{l&&!x&&g(hh(r.length,l.name))},[l]);const D=r.find(I=>I.id===v);q.useEffect(()=>{m==="processing"&&D&&!D.loading&&p("revealing")},[m,D?.loading]);const U=q.useCallback(I=>{S.current?.burst();const F=_(I);M(F),p("processing")},[_]),P=q.useCallback(()=>{r.length>=3?(S.current?.setHeartMode("heart"),p("complete")):(g(hh(r.length,l.name)),T(I=>I+1),p("prompting"))},[r.length,l]),z=q.useCallback(()=>{S.current?.setHeartMode("none"),g(hh(r.length,l.name)),T(I=>I+1),p("prompting")},[r.length,l]);return l?A.jsxs("main",{className:"min-h-screen bg-bg-primary relative overflow-hidden",children:[A.jsx(pl,{ref:S,mode:m==="complete"?"heart":"drift",intensity:m==="processing"?.8:m==="complete"?.7:.5,fixed:!0}),A.jsx(Su,{count:10,opacity:.05}),A.jsx("div",{className:`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]\r
          rounded-full pointer-events-none animate-glow-pulse`,style:{background:"radial-gradient(circle, rgba(212,165,116,0.05) 0%, transparent 60%)"}}),m==="prompting"&&A.jsx(sw,{prompt:x,onSubmit:U,isProcessing:!1,memoryIndex:r.length},E),m==="processing"&&D?.loading&&A.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:A.jsxs("div",{className:"text-center",children:[A.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto mb-4 text-accent-primary animate-heart-beat heart-glow",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),A.jsx("p",{className:"font-accent text-lg text-text-tertiary italic animate-fade-in",children:"Understanding your memory..."})]})}),(m==="revealing"||m==="processing"&&D&&!D.loading)&&D&&A.jsx(ow,{memory:D,onContinue:P}),m==="complete"&&A.jsx(lw,{memoryCount:r.length,recipientName:l.name,onAddMore:z})]}):A.jsx("main",{className:"min-h-screen bg-bg-primary",children:A.jsx(rw,{onComplete:c})})}const hw="modulepreload",pw=function(r){return"/"+r},Tv={},$o=function(e,i,s){let l=Promise.resolve();if(i&&i.length>0){let p=function(x){return Promise.all(x.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};var f=p;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=h?.nonce||h?.getAttribute("nonce");l=p(i.map(x=>{if(x=pw(x),x in Tv)return;Tv[x]=!0;const g=x.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${v}`))return;const M=document.createElement("link");if(M.rel=g?"stylesheet":hw,g||(M.as="script"),M.crossOrigin="",M.href=x,m&&M.setAttribute("nonce",m),document.head.appendChild(M),g)return new Promise((E,T)=>{M.addEventListener("load",E),M.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${x}`)))})}))}function c(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return l.then(h=>{for(const m of h||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})};function mw({memories:r}){const e=q.useRef(null),i=q.useRef(null),[s,l]=q.useState(!1),c=r.filter(f=>f.location?.coordinates&&!f.loading);return q.useEffect(()=>!e.current||i.current?void 0:((async()=>{const h=(await $o(async()=>{const{default:p}=await import("./mapbox-gl-yvUAwFkg.js").then(x=>x.m);return{default:p}},[])).default;await $o(()=>Promise.resolve({}),__vite__mapDeps([0]));try{const x=await(await fetch("/api/config")).json();h.accessToken=x.mapboxToken||""}catch{h.accessToken=""}if(!h.accessToken){console.warn("Mapbox token not set. Map will not render.");return}const m=new h.Map({container:e.current,style:"mapbox://styles/mapbox/dark-v11",center:[-98.5,39.8],zoom:3,attributionControl:!1,logoPosition:"bottom-left"});m.on("load",()=>{l(!0)}),i.current=m})(),()=>{i.current&&(i.current.remove(),i.current=null)}),[]),q.useEffect(()=>{if(!i.current||!s)return;const f=i.current;if(document.querySelectorAll(".memory-marker").forEach(p=>p.remove()),f.getLayer("preview-route-glow")&&f.removeLayer("preview-route-glow"),f.getLayer("preview-route-line")&&f.removeLayer("preview-route-line"),f.getSource("preview-route")&&f.removeSource("preview-route"),c.length===0)return;(async()=>{const p=(await $o(async()=>{const{default:v}=await import("./mapbox-gl-yvUAwFkg.js").then(M=>M.m);return{default:v}},[])).default,x=new p.LngLatBounds,g=[];if(c.forEach((v,M)=>{const[E,T]=v.location.coordinates,S=[T,E];x.extend(S),g.push(S);const _=document.createElement("div");_.className="memory-marker",_.style.cssText=`
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
        `,D.textContent=v.location.place_name,_.appendChild(D);const U=new p.Popup({offset:15,closeButton:!1,className:"memory-popup"}).setHTML(`<div style="font-family: Satoshi, sans-serif; font-size: 11px; color: #E8C9A0; background: #111; padding: 6px 10px; border-radius: 4px;">
            ${v.location.place_name}
          </div>`);new p.Marker({element:_}).setLngLat(S).setPopup(U).addTo(f)}),g.length>=2&&(f.addSource("preview-route",{type:"geojson",data:{type:"Feature",geometry:{type:"LineString",coordinates:g}}}),f.addLayer({id:"preview-route-glow",type:"line",source:"preview-route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"rgba(212, 165, 116, 0.1)","line-width":5,"line-blur":4}}),f.addLayer({id:"preview-route-line",type:"line",source:"preview-route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"rgba(212, 165, 116, 0.3)","line-width":1.5,"line-dasharray":[3,4]}})),c.length>1)f.fitBounds(x,{padding:60,maxZoom:12});else{const[v,M]=c[0].location.coordinates;f.flyTo({center:[M,v],zoom:10})}})()},[c,s]),A.jsxs("div",{className:"relative h-full min-h-[300px] rounded-lg overflow-hidden",children:[A.jsx("div",{ref:e,className:"w-full h-full"}),c.length===0&&A.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-bg-secondary/80 pointer-events-none",children:A.jsx("p",{className:"font-body text-sm text-text-tertiary text-center px-6",children:"Memories with places will appear here"})})]})}function gw(r,e,i,s){const l={m:r.map(h=>({t:h.title,e:h.excerpt,d:h.date_hint,em:h.emotion,l:h.location,tags:h.theme_tags})),s:e?{e:e.relationship_essence,t:e.timeline_title,th:e.dominant_themes,c:e.color_mood}:null,n:i||null,r:s?{name:s.name,type:s.type}:null},c=JSON.stringify(l);return btoa(unescape(encodeURIComponent(c)))}function xw(r){try{const e=decodeURIComponent(escape(atob(r))),i=JSON.parse(e),s=i.m.map((f,h)=>({id:`shared-${h}`,title:f.t,excerpt:f.e,date_hint:f.d,emotion:f.em,location:f.l,theme_tags:f.tags||[]})),l=i.s?{relationship_essence:i.s.e,timeline_title:i.s.t,dominant_themes:i.s.th,color_mood:i.s.c}:null,c=i.r||null;return{memories:s,summary:l,personalNote:i.n,relationshipContext:c}}catch(e){return console.error("Failed to decode share data:",e),null}}function vw(r,e,i,s){const l=gw(r,e,i,s);return`${window.location.origin}/shared/${l}`}function _w({memories:r,summary:e,personalNote:i,relationshipContext:s}){const[l,c]=q.useState(""),[f,h]=q.useState(!1),[m,p]=q.useState(!1),x=()=>{p(!0),setTimeout(()=>{const E=vw(r,e,i,s);c(E),p(!1)},600)},g=async()=>{try{await navigator.clipboard.writeText(l),h(!0),setTimeout(()=>h(!1),2e3)}catch{const E=document.createElement("input");E.value=l,document.body.appendChild(E),E.select(),document.execCommand("copy"),document.body.removeChild(E),h(!0),setTimeout(()=>h(!1),2e3)}},v=()=>{const E=encodeURIComponent("I made a Memory Map for someone I care about. Check it out:");window.open(`https://twitter.com/intent/tweet?text=${E}&url=${encodeURIComponent(l)}`,"_blank")},M=()=>{window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(l)}`,"_blank")};return A.jsx("div",{className:"text-center py-8 max-w-[480px] mx-auto px-6",children:l?A.jsxs("div",{className:"space-y-5 animate-fade-up",style:{animationFillMode:"forwards"},children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("input",{type:"text",readOnly:!0,value:l,className:"flex-1 bg-transparent border-b border-border-subtle px-2 py-2.5 font-body text-xs text-text-secondary/70 truncate text-center",style:{outline:"none"}}),A.jsx("button",{onClick:g,className:"font-body text-xs text-accent-primary/80 hover:text-accent-secondary border border-accent-primary/20 rounded-full px-4 py-2 hover:border-accent-primary/40 transition-all duration-300 cursor-pointer shrink-0",children:f?A.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M20 6L9 17l-5-5"})}):"Copy"})]}),A.jsxs("div",{className:"flex items-center justify-center gap-5 pt-1",children:[A.jsx("button",{onClick:v,className:"text-text-tertiary/40 hover:text-accent-primary transition-colors duration-300 cursor-pointer","aria-label":"Share on X",children:A.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:A.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),A.jsx("button",{onClick:M,className:"text-text-tertiary/40 hover:text-accent-primary transition-colors duration-300 cursor-pointer","aria-label":"Share on LinkedIn",children:A.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:A.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})})]})]}):A.jsxs("button",{onClick:x,disabled:m,className:"group relative font-body text-sm text-accent-primary hover:text-accent-secondary transition-all duration-500 cursor-pointer border border-accent-primary/25 rounded-full px-10 py-3 hover:border-accent-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",children:[A.jsx("span",{className:"absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",style:{boxShadow:"0 0 30px rgba(212,165,116,0.12), inset 0 0 20px rgba(212,165,116,0.05)"}}),A.jsx("span",{className:"relative z-10 flex items-center justify-center gap-2",children:m?A.jsxs(A.Fragment,{children:[A.jsx("svg",{className:"w-4 h-4 animate-spin",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.49-8.49l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83"})}),"Creating your link..."]}):A.jsxs(A.Fragment,{children:["Generate Share Link",A.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",className:"opacity-60",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})]})})]})})}function ou({size:r=14,className:e=""}){return A.jsx("div",{className:`heart-divider py-6 ${e}`,children:A.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/30 heart-glow animate-heart-beat",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})}const Av={"Words of Affirmation":{emotions:["gratitude","love","joy"],tags:["communication","support","encouragement","letters","compliments","words","talking","said","told","message","text"],description:"Language is your bridge to intimacy",insights:[r=>`The words between you and ${r||"them"} carry a weight that silence never could. This memory proves it.`,r=>`What was said here matters more than where or when — because ${r?r+"'s":"their"} heart hears through words.`,r=>"In this moment, love was spoken aloud. That's everything."]},"Quality Time":{emotions:["joy","comfort","nostalgia","adventure"],tags:["travel","together","evening","weekend","dinner","walk","adventure","explore","date","night","morning","trip","visit","spent","everyday moments","routine"],description:"Presence is the greatest gift",insights:[r=>"Being together — truly present — is where your story lives. This moment is proof.",r=>`Time shared with ${r||"someone you love"} isn't just hours passing. It's love accumulating.`,r=>"The best memories aren't planned. They're the quiet minutes that become everything."]},"Acts of Service":{emotions:["gratitude","comfort","love"],tags:["help","care","cooking","support","surprise","effort","sacrifice","drove","made","built","fixed","cleaned","prepared"],description:"Actions speak your love language",insights:[r=>"Love isn't always said — sometimes it's done. This memory captures that perfectly.",r=>"The quiet effort behind this moment? That's love in its purest form.",r=>`Showing up through actions defines your bond with ${r||"them"}. This is the proof.`]},"Physical Touch":{emotions:["love","comfort","bittersweet"],tags:["embrace","dance","touch","hold","close","warmth","cuddle","hug","kiss","hand","shoulder","lean"],description:"Connection through closeness",insights:[r=>"Some things can only be felt, not spoken. This memory holds that warmth.",r=>"The closeness in this moment — that's a language all its own.",r=>"Presence, warmth, and touch. The simplest gestures carry the deepest meaning."]},"Receiving Gifts":{emotions:["joy","gratitude","love"],tags:["gift","surprise","present","birthday","celebration","anniversary","ring","bought","gave","special","milestones","first times"],description:"Thoughtful gestures speak volumes",insights:[r=>"A thoughtful gesture became a lasting symbol. This is how your love story grows.",r=>`It was never about the thing itself — it was about what it meant between you and ${r||"them"}.`,r=>"Milestones and meaningful gifts — they're the bookmarks of your story together."]}};function yw(r,e=[],i=""){let s=null,l=0;const c=e.map(m=>m.toLowerCase());for(const[m,p]of Object.entries(Av)){let x=0;p.emotions.includes(r)&&(x+=2);for(const g of c)p.tags.some(v=>g.includes(v)||v.includes(g))&&(x+=3);x>l&&(l=x,s={language:m,config:p,score:x})}(!s||l<2)&&(s={language:"Quality Time",config:Av["Quality Time"],score:0});const f=(r||"").length%s.config.insights.length,h=s.config.insights[f](i);return{language:s.language,description:s.config.description,insight:h}}const Rv={joy:{accent:"#D4A574",glow:"rgba(212, 165, 116, 0.10)"},nostalgia:{accent:"#B4A0C8",glow:"rgba(180, 160, 200, 0.08)"},gratitude:{accent:"#A0C8AA",glow:"rgba(160, 200, 170, 0.08)"},love:{accent:"#C88C8C",glow:"rgba(200, 140, 140, 0.10)"},humor:{accent:"#D4BE74",glow:"rgba(212, 190, 116, 0.08)"},bittersweet:{accent:"#AA9BBE",glow:"rgba(170, 155, 190, 0.08)"},adventure:{accent:"#74AFD4",glow:"rgba(116, 175, 212, 0.08)"},comfort:{accent:"#D4B98C",glow:"rgba(212, 185, 140, 0.08)"}};function Sw({memory:r,index:e,recipientName:i}){const[s,l]=q.useState(!1),c=q.useRef(null),[f,h]=q.useState(0),m=Rv[r.emotion]||Rv.joy,p=yw(r.emotion,r.theme_tags,i);return q.useEffect(()=>{c.current&&h(c.current.scrollHeight)},[s,r]),A.jsxs("div",{className:`memory-card-cinematic p-8 text-center cursor-pointer transition-all duration-500 ${s?"ring-1 ring-accent-primary/15":""}`,onClick:()=>l(!s),role:"button",tabIndex:0,"aria-expanded":s,onKeyDown:x=>x.key==="Enter"&&l(!s),style:{padding:"32px",textAlign:"center",boxShadow:s?`0 20px 80px rgba(0,0,0,0.5), 0 0 60px ${m.glow}`:void 0},children:[A.jsxs("div",{className:"flex items-center justify-center gap-4 mb-5",children:[r.emotion&&A.jsx("span",{className:"font-body text-[9px] uppercase tracking-[0.12em] rounded-full px-3 py-1 border",style:{color:`${m.accent}cc`,borderColor:`${m.accent}30`},children:r.emotion}),r.date_hint&&A.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.08em] text-text-tertiary/50",children:r.date_hint})]}),A.jsx("h3",{className:"font-display text-[clamp(22px,3.5vw,28px)] font-medium text-text-primary mb-4 leading-[1.2]",children:r.title}),A.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[A.jsx("div",{className:"w-6 h-px bg-gradient-to-r from-transparent to-accent-primary/20"}),A.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/25",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),A.jsx("div",{className:"w-6 h-px bg-gradient-to-l from-transparent to-accent-primary/20"})]}),A.jsxs("p",{className:"font-accent text-[clamp(15px,2.2vw,19px)] text-text-secondary/85 leading-[1.8] mb-5 max-w-[480px] mx-auto",children:["“",r.excerpt,"”"]}),A.jsxs("div",{className:"flex items-center justify-center gap-3 flex-wrap",children:[r.location?.place_name&&A.jsxs("span",{className:"font-body text-[10px] text-text-tertiary/60 flex items-center gap-1.5",children:[A.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"shrink-0 text-accent-primary/50",children:[A.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),A.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),r.location.place_name]}),r.theme_tags?.map(x=>A.jsx("span",{className:"font-body text-[9px] text-text-tertiary/30 bg-bg-elevated/30 rounded-full px-2.5 py-0.5",children:x},x))]}),A.jsx("div",{className:`mt-5 transition-all duration-400 ${s?"opacity-0 h-0 mt-0":"opacity-40"}`,children:A.jsxs("span",{className:"font-body text-[9px] uppercase tracking-[0.15em] text-text-tertiary/50 flex items-center justify-center gap-1.5",children:[A.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"text-accent-primary/30",children:A.jsx("path",{d:"M6 9l6 6 6-6"})}),"Tap to reveal love language"]})}),A.jsx("div",{className:"overflow-hidden",style:{maxHeight:s?`${f+20}px`:"0px",opacity:s?1:0,transition:"max-height 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease-out"},children:A.jsxs("div",{ref:c,children:[A.jsx("div",{className:"w-full h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent mt-6 mb-8"}),A.jsx("div",{className:"flex justify-center mb-6",children:A.jsx("div",{className:"w-24 h-24 rounded-full animate-breathe",style:{background:`radial-gradient(circle, ${m.glow}, transparent 70%)`}})}),A.jsx("p",{className:"font-body text-[9px] uppercase tracking-[0.2em] text-text-tertiary/50 mb-2",children:"Love Language"}),A.jsx("h4",{className:"font-display text-[clamp(20px,3vw,26px)] font-medium mb-2 leading-[1.2]",style:{color:m.accent},children:p.language}),A.jsx("p",{className:"font-body text-[10px] uppercase tracking-[0.12em] mb-5",style:{color:`${m.accent}80`},children:p.description}),A.jsx("p",{className:"font-accent text-base text-text-secondary/70 leading-relaxed max-w-[420px] mx-auto mb-6 italic",children:p.insight}),r.rawText&&r.rawText!==r.excerpt&&A.jsxs("div",{className:"mt-2 p-5 rounded-xl bg-bg-elevated/20 border border-border-subtle/50 text-left",children:[A.jsx("p",{className:"font-body text-[9px] uppercase tracking-[0.15em] text-text-tertiary/40 mb-3",children:"In your own words"}),A.jsx("p",{className:"font-accent text-sm text-text-secondary/50 leading-relaxed italic",children:r.rawText})]}),A.jsx("div",{className:"mt-6",children:A.jsxs("span",{className:"font-body text-[9px] uppercase tracking-[0.15em] text-text-tertiary/30 flex items-center justify-center gap-1.5",children:[A.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"text-accent-primary/30 rotate-180",children:A.jsx("path",{d:"M6 9l6 6 6-6"})}),"Tap to collapse"]})})]})})]})}function Mw({memories:r,relationshipContext:e,relationshipSummary:i,personalNote:s,setPersonalNote:l}){const c=ol(),[f,h]=q.useState(!1),[m,p]=q.useState(!1),x=q.useRef(null);if(q.useEffect(()=>{const T=setTimeout(()=>h(!0),150),S=setTimeout(()=>p(!0),900);return()=>{clearTimeout(T),clearTimeout(S)}},[]),r.length===0)return A.jsx("main",{className:"min-h-screen bg-bg-primary flex items-center justify-center px-6",children:A.jsxs("div",{className:"text-center",children:[A.jsx("p",{className:"font-accent text-xl text-text-secondary mb-6",children:"No memories yet. Start by sharing some moments."}),A.jsx(Qv,{onClick:()=>c("/create"),children:"Create Memories"})]})});const g=r.some(T=>T.location?.coordinates),v=e?.name||"them",M=[...new Set(r.map(T=>T.emotion).filter(Boolean))],E=[...new Set(r.map(T=>T.location?.place_name).filter(Boolean))];return A.jsxs("main",{className:"min-h-screen bg-bg-primary relative overflow-hidden",children:[A.jsx(pl,{ref:x,mode:"heart",intensity:.6,fixed:!0}),A.jsx(Su,{count:14,opacity:.06}),A.jsxs("section",{className:"min-h-screen flex flex-col items-center justify-center relative px-6",children:[A.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)"}}),A.jsxs("button",{onClick:()=>c("/create"),className:"absolute top-8 left-8 font-body text-xs text-text-tertiary/50 hover:text-accent-primary transition-colors flex items-center gap-2 cursor-pointer z-20",children:[A.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Edit memories"]}),A.jsxs("div",{className:"text-center max-w-[600px] relative z-10",children:[A.jsx("div",{className:`mb-6 transition-all duration-1000 ${f?"opacity-100 scale-100":"opacity-0 scale-50"}`,children:A.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto text-accent-primary/40 heart-glow animate-heart-beat",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),A.jsx("h1",{className:`font-display text-[clamp(36px,6vw,56px)] font-medium text-text-primary leading-[1.1] mb-4 transition-all duration-[1200ms] ease-out ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{filter:f?"blur(0)":"blur(8px)"},children:i?.timeline_title||"Your Memory Map"}),i?.relationship_essence&&A.jsx("p",{className:`font-accent italic text-[clamp(16px,2.5vw,22px)] text-text-secondary/80 leading-[1.6] max-w-[500px] mx-auto transition-all duration-1000 ease-out ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,style:{transitionDelay:"0.4s"},children:i.relationship_essence}),A.jsx("div",{className:`w-16 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent mx-auto mt-8 mb-6 transition-all duration-800 ${f?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.7s",transformOrigin:"center",transform:f?"scaleX(1)":"scaleX(0)"}}),A.jsxs("div",{className:`flex items-center justify-center gap-10 mt-4 transition-all duration-700 ${m?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:[A.jsxs("div",{className:"text-center",children:[A.jsx("span",{className:"font-display text-3xl text-accent-primary block",children:r.length}),A.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/50 mt-1 block",children:r.length===1?"Memory":"Memories"})]}),E.length>0&&A.jsxs("div",{className:"text-center",children:[A.jsx("span",{className:"font-display text-3xl text-accent-primary block",children:E.length}),A.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/50 mt-1 block",children:E.length===1?"Place":"Places"})]}),M.length>0&&A.jsxs("div",{className:"text-center",children:[A.jsx("span",{className:"font-display text-3xl text-accent-primary block",children:M.length}),A.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/50 mt-1 block",children:M.length===1?"Emotion":"Emotions"})]})]})]}),A.jsx("div",{className:`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${m?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.5s"},children:A.jsxs("div",{className:"flex flex-col items-center gap-2",children:[A.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/40",children:"Preview your memories"}),A.jsx("div",{className:"animate-gentle-bounce",children:A.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-text-tertiary/40",children:A.jsx("path",{d:"M6 9l6 6 6-6"})})})]})})]}),A.jsxs("section",{className:"relative z-10 pb-12",style:{width:"100%"},children:[A.jsx(ir,{children:A.jsxs("div",{className:"text-center mb-16",children:[A.jsx(ou,{size:12}),A.jsx("p",{className:"font-body text-[10px] uppercase tracking-[0.25em] text-text-tertiary/40 mt-2",children:"Each memory, in your words"})]})}),A.jsx("div",{style:{maxWidth:"560px",width:"100%",marginLeft:"auto",marginRight:"auto",paddingLeft:"24px",paddingRight:"24px"},children:r.map((T,S)=>A.jsx(ir,{delay:S*.08,children:A.jsxs("div",{className:"mb-10 relative",children:[S<r.length-1&&A.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-px h-10 bg-gradient-to-b from-accent-primary/15 to-transparent"}),A.jsx(Sw,{memory:T,index:S,recipientName:v})]})},T.id))})]}),g&&A.jsxs("section",{className:"relative z-10 py-20",children:[A.jsx(ir,{children:A.jsxs("div",{className:"text-center mb-10",children:[A.jsx(ou,{size:12}),A.jsx("p",{className:"font-body text-xs uppercase tracking-[0.2em] text-text-tertiary/40 mt-2",children:"Your Journey Together"})]})}),A.jsx(ir,{delay:.2,children:A.jsx("div",{className:"max-w-[900px] mx-auto px-6",children:A.jsx("div",{className:"map-cinematic h-[450px] border border-border-subtle",children:A.jsx(mw,{memories:r})})})})]}),i?.dominant_themes&&A.jsx(ir,{delay:.1,children:A.jsx("div",{className:"flex items-center justify-center gap-3 py-8 flex-wrap px-6 relative z-10",children:i.dominant_themes.map((T,S)=>A.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/60 border border-accent-primary/15 rounded-full px-5 py-1.5 animate-stagger-up",style:{animationDelay:`${S*.1}s`,opacity:0},children:T},T))})}),A.jsx(ir,{delay:.1,children:A.jsxs("div",{className:"max-w-[520px] mx-auto px-6 py-16 relative z-10",children:[A.jsxs("label",{className:"font-accent text-base text-text-secondary/60 block mb-4 text-center",children:["Add a personal note for ",v]}),A.jsx("textarea",{value:s,onChange:T=>l(T.target.value),placeholder:`A message that appears when ${v} opens your Memory Map...`,rows:3,className:`w-full bg-transparent text-center font-accent text-lg text-text-primary\r
              placeholder:text-text-tertiary/30 placeholder:italic\r
              resize-none pb-4 transition-colors duration-500`,style:{border:"none",borderBottom:"1px solid rgba(212, 165, 116, 0.12)",outline:"none",boxShadow:"none"},onFocus:T=>{T.target.style.borderBottomColor="rgba(212, 165, 116, 0.35)",T.target.style.outline="none"},onBlur:T=>{T.target.style.borderBottomColor="rgba(212, 165, 116, 0.12)"}})]})}),A.jsxs("section",{className:"relative z-10 pb-24",children:[A.jsx(ou,{size:16,className:"mb-8"}),A.jsx(ir,{children:A.jsxs("div",{className:"text-center mb-6",children:[A.jsxs("p",{className:"font-accent text-[clamp(20px,3vw,28px)] text-text-secondary/70 mb-2",children:["Ready to send this to ",v,"?"]}),A.jsxs("p",{className:"font-body text-xs text-text-tertiary/40 flex items-center justify-center gap-2",children:["Every point is a real moment, in your own words",A.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/30",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})]})]})}),A.jsx(_w,{memories:r,summary:i,personalNote:s,relationshipContext:e})]})]})}const wv={joy:{bg:"rgba(212, 165, 116, 0.03)",glow:"radial-gradient(circle at 50% 40%, rgba(212, 165, 116, 0.08) 0%, transparent 60%)",accent:"#D4A574"},nostalgia:{bg:"rgba(180, 160, 200, 0.03)",glow:"radial-gradient(circle at 50% 40%, rgba(180, 160, 200, 0.06) 0%, transparent 60%)",accent:"#B4A0C8"},gratitude:{bg:"rgba(160, 200, 170, 0.03)",glow:"radial-gradient(circle at 50% 40%, rgba(160, 200, 170, 0.06) 0%, transparent 60%)",accent:"#A0C8AA"},love:{bg:"rgba(200, 140, 140, 0.03)",glow:"radial-gradient(circle at 50% 40%, rgba(200, 140, 140, 0.08) 0%, transparent 60%)",accent:"#C88C8C"},humor:{bg:"rgba(212, 190, 116, 0.03)",glow:"radial-gradient(circle at 50% 40%, rgba(212, 190, 116, 0.06) 0%, transparent 60%)",accent:"#D4BE74"},bittersweet:{bg:"rgba(170, 155, 190, 0.03)",glow:"radial-gradient(circle at 50% 40%, rgba(170, 155, 190, 0.06) 0%, transparent 60%)",accent:"#AA9BBE"},adventure:{bg:"rgba(116, 175, 212, 0.03)",glow:"radial-gradient(circle at 50% 40%, rgba(116, 175, 212, 0.06) 0%, transparent 60%)",accent:"#74AFD4"},comfort:{bg:"rgba(212, 185, 140, 0.03)",glow:"radial-gradient(circle at 50% 40%, rgba(212, 185, 140, 0.06) 0%, transparent 60%)",accent:"#D4B98C"}};function bw({memory:r,index:e,total:i}){const[s,l]=yu({threshold:.2}),[c,f]=q.useState(0);q.useEffect(()=>{if(l){const p=setTimeout(()=>f(1),200),x=setTimeout(()=>f(2),700),g=setTimeout(()=>f(3),1300);return()=>{clearTimeout(p),clearTimeout(x),clearTimeout(g)}}},[l]);const h=wv[r.emotion]||wv.joy,m=e%2===0;return A.jsxs("section",{ref:s,className:"min-h-[90vh] flex items-center justify-center px-6 py-24 relative overflow-hidden",style:{backgroundColor:h.bg},children:[A.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:h.glow,opacity:l?1:0,transition:"opacity 2s ease-out"}}),A.jsx("div",{className:`absolute top-[15%] ${m?"right-[8%]":"left-[8%]"} pointer-events-none hidden md:block transition-all duration-[2s] ${c>=1?"opacity-[0.03]":"opacity-0"}`,children:A.jsx("span",{className:"font-display text-[200px] font-bold text-text-primary leading-none select-none",children:String(e+1).padStart(2,"0")})}),A.jsxs("div",{className:"max-w-[620px] text-center relative z-10",children:[A.jsxs("div",{className:`flex items-center justify-center gap-3 mb-10 transition-all duration-600 ${c>=1?"opacity-100":"opacity-0"}`,children:[A.jsx("div",{className:"w-8 h-px bg-gradient-to-r from-transparent to-accent-primary/20"}),A.jsxs("span",{className:"font-body text-[10px] uppercase tracking-[0.25em] text-text-tertiary/40",children:["Memory ",e+1," of ",i]}),A.jsx("div",{className:"w-8 h-px bg-gradient-to-l from-transparent to-accent-primary/20"})]}),A.jsx("h2",{className:`font-display text-[clamp(30px,6vw,48px)] font-medium text-text-primary leading-[1.1] transition-all duration-[1200ms] ease-out ${c>=1?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{filter:c>=1?"blur(0)":"blur(6px)"},children:r.title}),A.jsxs("div",{className:`flex items-center justify-center gap-3 mt-7 mb-8 transition-all duration-800 ${c>=2?"opacity-100":"opacity-0"}`,children:[A.jsx("div",{className:`h-px bg-gradient-to-r from-transparent to-accent-primary/20 transition-all duration-800 ${c>=2?"w-8":"w-0"}`}),A.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/30 shrink-0",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),A.jsx("div",{className:`h-px bg-gradient-to-l from-transparent to-accent-primary/20 transition-all duration-800 ${c>=2?"w-8":"w-0"}`})]}),A.jsxs("p",{className:`font-accent text-[clamp(18px,3vw,24px)] text-text-secondary leading-[1.8] transition-all duration-[1000ms] ease-out ${c>=2?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:["“",r.excerpt,"”"]}),A.jsxs("div",{className:`mt-12 transition-all duration-700 ease-out ${c>=3?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:[A.jsxs("div",{className:"flex items-center justify-center gap-6 mb-5 flex-wrap",children:[r.date_hint&&A.jsxs("span",{className:"font-body text-[11px] uppercase tracking-[0.1em] text-text-tertiary/60 flex items-center gap-2",children:[A.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-accent-primary/40",children:[A.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),A.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]}),r.date_hint]}),r.location?.place_name&&A.jsxs("span",{className:"font-body text-[11px] text-text-tertiary/60 flex items-center gap-2",children:[A.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-accent-primary/40",children:[A.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),A.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),r.location.place_name]})]}),A.jsxs("div",{className:"flex items-center justify-center gap-2 flex-wrap",children:[r.emotion&&A.jsx("span",{className:"font-body text-[9px] uppercase tracking-[0.12em] rounded-full px-4 py-1 border",style:{color:`${h.accent}99`,borderColor:`${h.accent}25`},children:r.emotion}),r.theme_tags?.map(p=>A.jsx("span",{className:"font-body text-[9px] text-text-tertiary/35 bg-bg-elevated/20 rounded-full px-3 py-0.5",children:p},p))]})]})]}),A.jsx("div",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-accent-primary/12 to-transparent transition-all duration-1000 ${c>=3?"h-16 opacity-100":"h-0 opacity-0"}`})]})}function Ew({memories:r}){const[e,i]=yu({threshold:.2}),s=q.useRef(null),l=q.useRef(null),[c,f]=q.useState(!1),[h,m]=q.useState(!1),p=r.filter(x=>x.location?.coordinates);return q.useEffect(()=>!i||!s.current||l.current?void 0:((async()=>{const g=(await $o(async()=>{const{default:M}=await import("./mapbox-gl-yvUAwFkg.js").then(E=>E.m);return{default:M}},[])).default;await $o(()=>Promise.resolve({}),__vite__mapDeps([0]));try{const E=await(await fetch("/api/config")).json();g.accessToken=E.mapboxToken||""}catch{g.accessToken=""}if(!g.accessToken)return;const v=new g.Map({container:s.current,style:"mapbox://styles/mapbox/dark-v11",center:[-98.5,39.8],zoom:3,attributionControl:!1,interactive:!0,pitch:0});v.on("load",()=>{if(f(!0),p.length===0)return;const M=new g.LngLatBounds,E=[];if(p.forEach((T,S)=>{const[_,D]=T.location.coordinates,U=[D,_];M.extend(U),E.push(U),setTimeout(()=>{const P=document.createElement("div");P.style.cssText=`
              position: absolute;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              border: 1px solid rgba(212,165,116,0.3);
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              animation: pulse-ring 2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
              animation-delay: ${S*.5}s;
            `;const z=document.createElement("div");z.style.cssText=`
              width: 14px;
              height: 14px;
              background: radial-gradient(circle, #E8C9A0 0%, #D4A574 60%, rgba(212,165,116,0.6) 100%);
              border-radius: 50%;
              box-shadow: 0 0 16px rgba(212,165,116,0.6), 0 0 40px rgba(212,165,116,0.2);
              animation: marker-drop 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
              position: relative;
            `,z.appendChild(P);const I=document.createElement("div");I.style.cssText=`
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
            `,I.textContent=T.location.place_name,z.appendChild(I),new g.Marker({element:z,anchor:"center"}).setLngLat(U).addTo(v),S===p.length-1&&setTimeout(()=>{m(!0),E.length>=2&&Tw(v,E)},400)},S*400)}),p.length>1)v.fitBounds(M,{padding:100,maxZoom:11});else{const[T,S]=p[0].location.coordinates;v.flyTo({center:[S,T],zoom:10,duration:2e3})}}),l.current=v})(),()=>{l.current&&(l.current.remove(),l.current=null)}),[i,p]),p.length===0?null:A.jsxs("section",{ref:e,className:"min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden",children:[A.jsxs("div",{className:`text-center mb-10 transition-all duration-800 ease-out ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:[A.jsx("p",{className:"font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary/40 mb-3",children:"Your Journey Together"}),A.jsx("div",{className:`w-12 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent mx-auto ${i?"animate-line-grow":"opacity-0"}`})]}),A.jsx("div",{className:`w-full max-w-[950px] map-cinematic transition-all duration-[1500ms] ease-out ${i?"opacity-100 scale-100":"opacity-0 scale-[0.97]"}`,style:{transitionDelay:"0.3s"},children:A.jsx("div",{className:"h-[500px] md:h-[550px]",style:{borderRadius:"16px",overflow:"hidden"},children:A.jsx("div",{ref:s,className:"w-full h-full"})})}),h&&p.length>=2&&A.jsxs("p",{className:"mt-6 font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/30 animate-fade-up",style:{animationDelay:"0.2s",opacity:0,animationFillMode:"forwards"},children:[p.length," places, one story"]})]})}function Tw(r,e){const i="memory-route",s="memory-route-line",l="memory-route-glow";r.getSource(i)||(r.addSource(i,{type:"geojson",data:{type:"Feature",geometry:{type:"LineString",coordinates:e}}}),r.addLayer({id:l,type:"line",source:i,layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"rgba(212, 165, 116, 0.12)","line-width":6,"line-blur":4}}),r.addLayer({id:s,type:"line",source:i,layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"rgba(212, 165, 116, 0.35)","line-width":1.5,"line-dasharray":[3,4]}}))}function Aw({summary:r}){const[e,i]=yu({threshold:.25}),[s,l]=q.useState(0),c=ol();return q.useEffect(()=>{if(i){const f=setTimeout(()=>l(1),300),h=setTimeout(()=>l(2),1200),m=setTimeout(()=>l(3),2e3);return()=>{clearTimeout(f),clearTimeout(h),clearTimeout(m)}}},[i]),A.jsxs("section",{ref:e,className:"min-h-[80vh] flex items-center justify-center px-6 py-24 relative overflow-hidden",children:[A.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(212,165,116,0.08) 0%, transparent 65%)",opacity:s>=1?1:0,transition:"opacity 2.5s ease-out"}}),A.jsxs("div",{className:"text-center max-w-[550px] relative z-10",children:[A.jsx("div",{className:`mx-auto mb-10 transition-all duration-1000 ${s>=1?"opacity-100 scale-100":"opacity-0 scale-50"}`,children:A.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto text-accent-primary/40 heart-glow animate-heart-beat",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),r?.relationship_essence&&A.jsxs("p",{className:`font-accent italic text-[clamp(22px,4vw,30px)] text-text-secondary leading-[1.6] transition-all duration-[1500ms] ease-out ${s>=1?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{filter:s>=1?"blur(0)":"blur(4px)"},children:["“",r.relationship_essence,"”"]}),r?.dominant_themes&&A.jsx("div",{className:`flex items-center justify-center gap-3 mt-10 flex-wrap transition-all duration-800 ${s>=2?"opacity-100":"opacity-0"}`,children:r.dominant_themes.map((f,h)=>A.jsx("span",{className:"font-body text-[9px] uppercase tracking-[0.1em] text-accent-primary/45 border border-accent-primary/12 rounded-full px-4 py-1 animate-stagger-up",style:{animationDelay:`${h*.15}s`,opacity:0,animationFillMode:"forwards"},children:f},f))}),A.jsx("div",{className:`w-20 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent mx-auto my-12 transition-all duration-1000 ${s>=2?"opacity-100":"opacity-0"}`,style:{transformOrigin:"center",transform:s>=2?"scaleX(1)":"scaleX(0)"}}),A.jsxs("div",{className:`space-y-6 transition-all duration-800 ease-out ${s>=3?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:[A.jsxs("p",{className:"font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary/30 flex items-center justify-center gap-2",children:["Made with",A.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",className:"text-accent-primary/40",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),"using The Memory Map"]}),A.jsxs("button",{onClick:()=>c("/"),className:"group font-body text-sm text-accent-primary/80 hover:text-accent-secondary transition-all duration-500 cursor-pointer border border-accent-primary/20 rounded-full px-8 py-2.5 hover:border-accent-primary/40 relative overflow-hidden",children:[A.jsx("span",{className:"absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500",style:{boxShadow:"0 0 24px rgba(212,165,116,0.12), inset 0 0 24px rgba(212,165,116,0.06)"}}),A.jsx("span",{className:"relative z-10",children:"Create Your Own Memory Map"})]})]})]})]})}function Rw(){const{data:r}=CM(),[e,i]=q.useState(0),s=q.useMemo(()=>r?xw(r):null,[r]);if(q.useEffect(()=>{const p=setTimeout(()=>i(1),300),x=setTimeout(()=>i(2),1600),g=setTimeout(()=>i(3),2600);return()=>{clearTimeout(p),clearTimeout(x),clearTimeout(g)}},[]),!s)return A.jsx("main",{className:"min-h-screen bg-bg-primary flex items-center justify-center",children:A.jsx("p",{className:"font-accent text-xl text-text-secondary",children:"This memory map couldn't be found."})});const{memories:l,summary:c,personalNote:f,relationshipContext:h}=s,m=h?.name;return A.jsxs("main",{className:"min-h-screen bg-bg-primary relative",children:[A.jsx(pl,{mode:"heart",intensity:.8,fixed:!0}),A.jsx(Su,{count:16,opacity:.07}),A.jsxs("section",{className:"min-h-screen flex items-center justify-center relative px-6 overflow-hidden",children:[A.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)"}}),A.jsx("div",{className:`absolute top-[30%] left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-accent-primary/30 to-transparent transition-all duration-1500 ease-out ${e>=1?"h-16 opacity-100":"h-0 opacity-0"}`}),A.jsxs("div",{className:"text-center max-w-[500px] relative z-10",children:[A.jsx("div",{className:`mb-6 transition-all duration-1000 ${e>=1?"opacity-100 scale-100":"opacity-0 scale-50"}`,children:A.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",className:"mx-auto text-accent-primary/50 heart-glow animate-heart-beat",children:A.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),A.jsx("p",{className:`font-accent text-[clamp(26px,5vw,32px)] font-light text-text-primary leading-[1.3] transition-all duration-[1500ms] ease-out ${e>=1?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:m?A.jsxs(A.Fragment,{children:["Someone made this for you, ",A.jsx("span",{className:"text-accent-primary",children:m}),"."]}):"Someone made this for you."}),A.jsx("p",{className:`font-accent text-base text-text-tertiary/60 mt-4 transition-all duration-1000 ease-out ${e>=1?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.8s"},children:"These are their memories of the two of you, in their own words."}),f&&A.jsxs("p",{className:`font-accent italic text-lg text-text-secondary mt-10 leading-relaxed transition-all duration-800 ease-out ${e>=2?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:["“",f,"”"]}),c?.timeline_title&&A.jsx("p",{className:`font-display text-lg text-accent-primary/60 mt-8 tracking-wide transition-all duration-700 ${e>=2?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.4s"},children:c.timeline_title})]}),A.jsx("div",{className:`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${e>=3?"opacity-100":"opacity-0"}`,children:A.jsxs("div",{className:"flex flex-col items-center gap-2",children:[A.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/40",children:"Scroll to begin"}),A.jsx("div",{className:"animate-gentle-bounce",children:A.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-text-tertiary/40",children:A.jsx("path",{d:"M6 9l6 6 6-6"})})})]})})]}),A.jsx(ou,{size:14,className:"mb-4"}),l.map((p,x)=>A.jsx(bw,{memory:p,index:x,total:l.length},p.id)),A.jsx(Ew,{memories:l}),A.jsx(Aw,{summary:c})]})}function ww(){const[r,e]=q.useState(()=>T1()),[i,s]=q.useState(()=>R1()),[l,c]=q.useState(null),[f,h]=q.useState("");q.useEffect(()=>{const g=r.filter(v=>!v.loading);g.length>0&&E1(g)},[r]),q.useEffect(()=>{i&&A1(i)},[i]);const m=q.useCallback(g=>{e(v=>[...v,{...g,id:g.id||Date.now().toString()}])},[]),p=q.useCallback((g,v)=>{e(M=>M.map(E=>E.id===g?{...E,...v}:E))},[]),x=q.useCallback(g=>{e(v=>v.filter(M=>M.id!==g))},[]);return A.jsx("div",{className:"min-h-screen bg-bg-primary",children:A.jsxs(jM,{children:[A.jsx(Ko,{path:"/",element:A.jsx(iw,{})}),A.jsx(Ko,{path:"/create",element:A.jsx(dw,{memories:r,addMemory:m,updateMemory:p,deleteMemory:x,relationshipContext:i,setRelationshipContext:s,relationshipSummary:l,setRelationshipSummary:c})}),A.jsx(Ko,{path:"/preview",element:A.jsx(Mw,{memories:r,relationshipContext:i,relationshipSummary:l,personalNote:f,setPersonalNote:h})}),A.jsx(Ko,{path:"/shared/:data",element:A.jsx(Rw,{})})]})})}WS.createRoot(document.getElementById("root")).render(A.jsx(q.StrictMode,{children:A.jsx(p1,{children:A.jsx(ww,{})})}));

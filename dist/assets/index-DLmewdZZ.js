const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mapbox-gl-V3smlL-h.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Td={exports:{}},zo={};var s_;function US(){if(s_)return zo;s_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return zo.Fragment=e,zo.jsx=i,zo.jsxs=i,zo}var o_;function LS(){return o_||(o_=1,Td.exports=US()),Td.exports}var P=LS(),Ad={exports:{}},dt={};var l_;function OS(){if(l_)return dt;l_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function x(L,$,_e){this.props=L,this.context=$,this.refs=S,this.updater=_e||E}x.prototype.isReactComponent={},x.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function w(){}w.prototype=x.prototype;function N(L,$,_e){this.props=L,this.context=$,this.refs=S,this.updater=_e||E}var O=N.prototype=new w;O.constructor=N,T(O,x.prototype),O.isPureReactComponent=!0;var I=Array.isArray;function z(){}var B={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function C(L,$,_e){var Re=_e.ref;return{$$typeof:r,type:L,key:$,ref:Re!==void 0?Re:null,props:_e}}function D(L,$){return C(L.type,$,L.props)}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function se(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(_e){return $[_e]})}var oe=/\/+/g;function me(L,$){return typeof L=="object"&&L!==null&&L.key!=null?se(""+L.key):$.toString(36)}function ue(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(z,z):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function F(L,$,_e,Re,Ge){var ne=typeof L;(ne==="undefined"||ne==="boolean")&&(L=null);var he=!1;if(L===null)he=!0;else switch(ne){case"bigint":case"string":case"number":he=!0;break;case"object":switch(L.$$typeof){case r:case e:he=!0;break;case _:return he=L._init,F(he(L._payload),$,_e,Re,Ge)}}if(he)return Ge=Ge(L),he=Re===""?"."+me(L,0):Re,I(Ge)?(_e="",he!=null&&(_e=he.replace(oe,"$&/")+"/"),F(Ge,$,_e,"",function(we){return we})):Ge!=null&&(k(Ge)&&(Ge=D(Ge,_e+(Ge.key==null||L&&L.key===Ge.key?"":(""+Ge.key).replace(oe,"$&/")+"/")+he)),$.push(Ge)),1;he=0;var Le=Re===""?".":Re+":";if(I(L))for(var Me=0;Me<L.length;Me++)Re=L[Me],ne=Le+me(Re,Me),he+=F(Re,$,_e,ne,Ge);else if(Me=M(L),typeof Me=="function")for(L=Me.call(L),Me=0;!(Re=L.next()).done;)Re=Re.value,ne=Le+me(Re,Me++),he+=F(Re,$,_e,ne,Ge);else if(ne==="object"){if(typeof L.then=="function")return F(ue(L),$,_e,Re,Ge);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return he}function G(L,$,_e){if(L==null)return L;var Re=[],Ge=0;return F(L,Re,"","",function(ne){return $.call(_e,ne,Ge++)}),Re}function te(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(_e){(L._status===0||L._status===-1)&&(L._status=1,L._result=_e)},function(_e){(L._status===0||L._status===-1)&&(L._status=2,L._result=_e)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var be=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},ye={map:G,forEach:function(L,$,_e){G(L,function(){$.apply(this,arguments)},_e)},count:function(L){var $=0;return G(L,function(){$++}),$},toArray:function(L){return G(L,function($){return $})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return dt.Activity=g,dt.Children=ye,dt.Component=x,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=N,dt.StrictMode=s,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,dt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},dt.cache=function(L){return function(){return L.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(L,$,_e){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Re=T({},L.props),Ge=L.key;if($!=null)for(ne in $.key!==void 0&&(Ge=""+$.key),$)!q.call($,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&$.ref===void 0||(Re[ne]=$[ne]);var ne=arguments.length-2;if(ne===1)Re.children=_e;else if(1<ne){for(var he=Array(ne),Le=0;Le<ne;Le++)he[Le]=arguments[Le+2];Re.children=he}return C(L.type,Ge,Re)},dt.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},dt.createElement=function(L,$,_e){var Re,Ge={},ne=null;if($!=null)for(Re in $.key!==void 0&&(ne=""+$.key),$)q.call($,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Ge[Re]=$[Re]);var he=arguments.length-2;if(he===1)Ge.children=_e;else if(1<he){for(var Le=Array(he),Me=0;Me<he;Me++)Le[Me]=arguments[Me+2];Ge.children=Le}if(L&&L.defaultProps)for(Re in he=L.defaultProps,he)Ge[Re]===void 0&&(Ge[Re]=he[Re]);return C(L,ne,Ge)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(L){return{$$typeof:h,render:L}},dt.isValidElement=k,dt.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:te}},dt.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},dt.startTransition=function(L){var $=B.T,_e={};B.T=_e;try{var Re=L(),Ge=B.S;Ge!==null&&Ge(_e,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(z,be)}catch(ne){be(ne)}finally{$!==null&&_e.types!==null&&($.types=_e.types),B.T=$}},dt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},dt.use=function(L){return B.H.use(L)},dt.useActionState=function(L,$,_e){return B.H.useActionState(L,$,_e)},dt.useCallback=function(L,$){return B.H.useCallback(L,$)},dt.useContext=function(L){return B.H.useContext(L)},dt.useDebugValue=function(){},dt.useDeferredValue=function(L,$){return B.H.useDeferredValue(L,$)},dt.useEffect=function(L,$){return B.H.useEffect(L,$)},dt.useEffectEvent=function(L){return B.H.useEffectEvent(L)},dt.useId=function(){return B.H.useId()},dt.useImperativeHandle=function(L,$,_e){return B.H.useImperativeHandle(L,$,_e)},dt.useInsertionEffect=function(L,$){return B.H.useInsertionEffect(L,$)},dt.useLayoutEffect=function(L,$){return B.H.useLayoutEffect(L,$)},dt.useMemo=function(L,$){return B.H.useMemo(L,$)},dt.useOptimistic=function(L,$){return B.H.useOptimistic(L,$)},dt.useReducer=function(L,$,_e){return B.H.useReducer(L,$,_e)},dt.useRef=function(L){return B.H.useRef(L)},dt.useState=function(L){return B.H.useState(L)},dt.useSyncExternalStore=function(L,$,_e){return B.H.useSyncExternalStore(L,$,_e)},dt.useTransition=function(){return B.H.useTransition()},dt.version="19.2.4",dt}var c_;function up(){return c_||(c_=1,Ad.exports=OS()),Ad.exports}var K=up(),Rd={exports:{}},Ho={},Cd={exports:{}},wd={};var u_;function PS(){return u_||(u_=1,(function(r){function e(F,G){var te=F.length;F.push(G);e:for(;0<te;){var be=te-1>>>1,ye=F[be];if(0<l(ye,G))F[be]=G,F[te]=ye,te=be;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var G=F[0],te=F.pop();if(te!==G){F[0]=te;e:for(var be=0,ye=F.length,L=ye>>>1;be<L;){var $=2*(be+1)-1,_e=F[$],Re=$+1,Ge=F[Re];if(0>l(_e,te))Re<ye&&0>l(Ge,_e)?(F[be]=Ge,F[Re]=te,be=Re):(F[be]=_e,F[$]=te,be=$);else if(Re<ye&&0>l(Ge,te))F[be]=Ge,F[Re]=te,be=Re;else break e}}return G}function l(F,G){var te=F.sortIndex-G.sortIndex;return te!==0?te:F.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,g=null,v=3,M=!1,E=!1,T=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(F){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=F)s(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function I(F){if(T=!1,O(F),!E)if(i(m)!==null)E=!0,z||(z=!0,se());else{var G=i(p);G!==null&&ue(I,G.startTime-F)}}var z=!1,B=-1,q=5,C=-1;function D(){return S?!0:!(r.unstable_now()-C<q)}function k(){if(S=!1,z){var F=r.unstable_now();C=F;var G=!0;try{e:{E=!1,T&&(T=!1,w(B),B=-1),M=!0;var te=v;try{t:{for(O(F),g=i(m);g!==null&&!(g.expirationTime>F&&D());){var be=g.callback;if(typeof be=="function"){g.callback=null,v=g.priorityLevel;var ye=be(g.expirationTime<=F);if(F=r.unstable_now(),typeof ye=="function"){g.callback=ye,O(F),G=!0;break t}g===i(m)&&s(m),O(F)}else s(m);g=i(m)}if(g!==null)G=!0;else{var L=i(p);L!==null&&ue(I,L.startTime-F),G=!1}}break e}finally{g=null,v=te,M=!1}G=void 0}}finally{G?se():z=!1}}}var se;if(typeof N=="function")se=function(){N(k)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,me=oe.port2;oe.port1.onmessage=k,se=function(){me.postMessage(null)}}else se=function(){x(k,0)};function ue(F,G){B=x(function(){F(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(F){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var te=v;v=G;try{return F()}finally{v=te}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var te=v;v=F;try{return G()}finally{v=te}},r.unstable_scheduleCallback=function(F,G,te){var be=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?be+te:be):te=be,F){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=te+ye,F={id:_++,callback:G,priorityLevel:F,startTime:te,expirationTime:ye,sortIndex:-1},te>be?(F.sortIndex=te,e(p,F),i(m)===null&&F===i(p)&&(T?(w(B),B=-1):T=!0,ue(I,te-be))):(F.sortIndex=ye,e(m,F),E||M||(E=!0,z||(z=!0,se()))),F},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(F){var G=v;return function(){var te=v;v=G;try{return F.apply(this,arguments)}finally{v=te}}}})(wd)),wd}var f_;function FS(){return f_||(f_=1,Cd.exports=PS()),Cd.exports}var Dd={exports:{}},Nn={};var d_;function BS(){if(d_)return Nn;d_=1;var r=up();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Nn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var h_;function IS(){if(h_)return Dd.exports;h_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Dd.exports=BS(),Dd.exports}var p_;function zS(){if(p_)return Ho;p_=1;var r=FS(),e=up(),i=IS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=d;break}if(A===o){y=!0,o=u,a=d;break}A=A.sibling}if(!y){for(A=d.child;A;){if(A===a){y=!0,a=d,o=u;break}if(A===o){y=!0,o=d,a=u;break}A=A.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var ue=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},be=[],ye=-1;function L(t){return{current:t}}function $(t){0>ye||(t.current=be[ye],be[ye]=null,ye--)}function _e(t,n){ye++,be[ye]=t.current,t.current=n}var Re=L(null),Ge=L(null),ne=L(null),he=L(null);function Le(t,n){switch(_e(ne,n),_e(Ge,t),_e(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?wg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=wg(n),t=Dg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(Re),_e(Re,t)}function Me(){$(Re),$(Ge),$(ne)}function we(t){t.memoizedState!==null&&_e(he,t);var n=Re.current,a=Dg(n,t.type);n!==a&&(_e(Ge,t),_e(Re,a))}function Je(t){Ge.current===t&&($(Re),$(Ge)),he.current===t&&($(he),Po._currentValue=te)}var Rt,ot;function nt(t){if(Rt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Rt=n&&n[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+t+ot}var vt=!1;function lt(t,n){if(!t||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(fe){var ae=fe}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(fe){ae=fe}t.call(xe.prototype)}}else{try{throw Error()}catch(fe){ae=fe}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(fe){if(fe&&ae&&typeof fe.stack=="string")return[fe.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],A=d[1];if(y&&A){var H=y.split(`
`),ee=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ee.length)for(o=H.length-1,u=ee.length-1;1<=o&&0<=u&&H[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ee[u]){var pe=`
`+H[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?nt(a):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return nt(t.type);case 16:return nt("Lazy");case 13:return t.child!==n&&n!==null?nt("Suspense Fallback"):nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return lt(t.type,!1);case 11:return lt(t.type.render,!1);case 1:return lt(t.type,!0);case 31:return nt("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=Kt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Wt=Object.prototype.hasOwnProperty,Ze=r.unstable_scheduleCallback,De=r.unstable_cancelCallback,We=r.unstable_shouldYield,U=r.unstable_requestPaint,b=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,de=r.unstable_ImmediatePriority,ve=r.unstable_UserBlockingPriority,ce=r.unstable_NormalPriority,Xe=r.unstable_LowPriority,Ue=r.unstable_IdlePriority,je=r.log,at=r.unstable_setDisableYieldValue,Ee=null,Ae=null;function Ve(t){if(typeof je=="function"&&at(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Ee,t)}catch{}}var ze=Math.clz32?Math.clz32:j,Oe=Math.log,pt=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(Oe(t)/pt|0)|0}var Fe=256,Ce=262144,He=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Te(o):(y&=A,y!==0?u=Te(y):a||(a=A&~t,a!==0&&(u=Te(a))))):(A=o&~d,A!==0?u=Te(A):y!==0?u=Te(y):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ne(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ct(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var t=He;return He<<=1,(He&62914560)===0&&(He=4194304),t}function Tt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,ee=t.hiddenUpdates;for(a=y&~a;0<a;){var pe=31-ze(a),xe=1<<pe;A[pe]=0,H[pe]=-1;var ae=ee[pe];if(ae!==null)for(ee[pe]=null,pe=0;pe<ae.length;pe++){var fe=ae[pe];fe!==null&&(fe.lane&=-536870913)}a&=~xe}o!==0&&gl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function gl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ze(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function js(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ze(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Ir(t,n){var a=n&-n;return a=(a&42)!==0?1:qs(a),(a&(t.suspendedLanes|n))!==0?0:a}function qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ys(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:$g(t.type))}function Ui(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var ai=Math.random().toString(36).slice(2),on="__reactFiber$"+ai,xn="__reactProps$"+ai,yi="__reactContainer$"+ai,Hr="__reactEvents$"+ai,Gr="__reactListeners$"+ai,_l="__reactHandles$"+ai,Zs="__reactResources$"+ai,sr="__reactMarker$"+ai;function Ks(t){delete t[on],delete t[xn],delete t[Hr],delete t[Gr],delete t[_l]}function Ta(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Bg(t);t!==null;){if(a=t[on])return a;t=Bg(t)}return n}t=a,a=t.parentNode}return null}function Aa(t){if(t=t[on]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function or(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ra(t){var n=t[Zs];return n||(n=t[Zs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[sr]=!0}var Y=new Set,le={};function ie(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(le[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Be={};function qe(t){return Wt.call(Be,t)?!0:Wt.call(ke,t)?!1:Pe.test(t)?Be[t]=!0:(ke[t]=!0,!1)}function Ke(t,n,a){if(qe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function it(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function rt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qt(t){if(!t._valueTracker){var n=Nt(t)?"checked":"value";t._valueTracker=Qt(t,n,""+t[n])}}function Pt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Nt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function et(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ut=/[\n"\\]/g;function ft(t){return t.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(t,n,a,o,u,d,y,A){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+rt(n)):t.value!==""+rt(n)&&(t.value=""+rt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,y,rt(n)):a!=null?Sn(t,y,rt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+rt(A):t.removeAttribute("name")}function ji(t,n,a,o,u,d,y,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){qt(t);return}a=a!=null?""+rt(a):"",n=n!=null?""+rt(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),qt(t)}function Sn(t,n,a){n==="number"&&et(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ri(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+rt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Bt(t,n,a){if(n!=null&&(n=""+rt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+rt(a):""}function Mn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ue(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=rt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),qt(t)}function hn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vr(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&En(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&En(t,d,n[d])}function Si(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(t){return wx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var Su=null;function Mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Xr=null;function Cp(t){var n=Aa(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(yn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(s(90));yn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Pt(o)}break e;case"textarea":Bt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ri(t,!!a.multiple,n,!1)}}}var bu=!1;function wp(t,n,a){if(bu)return t(n,a);bu=!0;try{var o=t(n);return o}finally{if(bu=!1,(kr!==null||Xr!==null)&&(rc(),kr&&(n=kr,t=Xr,Xr=kr=null,Cp(n),t)))for(n=0;n<t.length;n++)Cp(t[n])}}function Qs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=!1;if(Yi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Eu=!1}var Ca=null,Tu=null,xl=null;function Dp(){if(xl)return xl;var t,n=Tu,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return xl=u.slice(t,1<o?1-o:void 0)}function yl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function Np(){return!1}function Hn(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Sl:Np,this.isPropagationStopped=Np,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=Hn(lr),$s=g({},lr,{view:0,detail:0}),Dx=Hn($s),Au,Ru,eo,bl=g({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Au=t.screenX-eo.screenX,Ru=t.screenY-eo.screenY):Ru=Au=0,eo=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),Up=Hn(bl),Nx=g({},bl,{dataTransfer:0}),Ux=Hn(Nx),Lx=g({},$s,{relatedTarget:0}),Cu=Hn(Lx),Ox=g({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Px=Hn(Ox),Fx=g({},lr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bx=Hn(Fx),Ix=g({},lr,{data:0}),Lp=Hn(Ix),zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Gx[t])?!!n[t]:!1}function wu(){return Vx}var kx=g({},$s,{key:function(t){if(t.key){var n=zx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xx=Hn(kx),Wx=g({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Hn(Wx),jx=g({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),qx=Hn(jx),Yx=g({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zx=Hn(Yx),Kx=g({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=Hn(Kx),Jx=g({},lr,{newState:0,oldState:0}),$x=Hn(Jx),ey=[9,13,27,32],Du=Yi&&"CompositionEvent"in window,to=null;Yi&&"documentMode"in document&&(to=document.documentMode);var ty=Yi&&"TextEvent"in window&&!to,Pp=Yi&&(!Du||to&&8<to&&11>=to),Fp=" ",Bp=!1;function Ip(t,n){switch(t){case"keyup":return ey.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function ny(t,n){switch(t){case"compositionend":return zp(n);case"keypress":return n.which!==32?null:(Bp=!0,Fp);case"textInput":return t=n.data,t===Fp&&Bp?null:t;default:return null}}function iy(t,n){if(Wr)return t==="compositionend"||!Du&&Ip(t,n)?(t=Dp(),xl=Tu=Ca=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pp&&n.locale!=="ko"?null:n.data;default:return null}}var ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ay[t.type]:n==="textarea"}function Gp(t,n,a,o){kr?Xr?Xr.push(o):Xr=[o]:kr=o,n=dc(n,"onChange"),0<n.length&&(a=new Ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var no=null,io=null;function ry(t){bg(t,0)}function El(t){var n=or(t);if(Pt(n))return t}function Vp(t,n){if(t==="change")return n}var kp=!1;if(Yi){var Nu;if(Yi){var Uu="oninput"in document;if(!Uu){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Uu=typeof Xp.oninput=="function"}Nu=Uu}else Nu=!1;kp=Nu&&(!document.documentMode||9<document.documentMode)}function Wp(){no&&(no.detachEvent("onpropertychange",jp),io=no=null)}function jp(t){if(t.propertyName==="value"&&El(io)){var n=[];Gp(n,io,t,Mu(t)),wp(ry,n)}}function sy(t,n,a){t==="focusin"?(Wp(),no=n,io=a,no.attachEvent("onpropertychange",jp)):t==="focusout"&&Wp()}function oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(io)}function ly(t,n){if(t==="click")return El(n)}function cy(t,n){if(t==="input"||t==="change")return El(n)}function uy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:uy;function ao(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Wt.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yp(t,n){var a=qp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qp(a)}}function Zp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Zp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=et(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=et(t.document)}return n}function Lu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var fy=Yi&&"documentMode"in document&&11>=document.documentMode,jr=null,Ou=null,ro=null,Pu=!1;function Qp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pu||jr==null||jr!==et(o)||(o=jr,"selectionStart"in o&&Lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&ao(ro,o)||(ro=o,o=dc(Ou,"onSelect"),0<o.length&&(n=new Ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=jr)))}function cr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var qr={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionrun:cr("Transition","TransitionRun"),transitionstart:cr("Transition","TransitionStart"),transitioncancel:cr("Transition","TransitionCancel"),transitionend:cr("Transition","TransitionEnd")},Fu={},Jp={};Yi&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function ur(t){if(Fu[t])return Fu[t];if(!qr[t])return t;var n=qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jp)return Fu[t]=n[a];return t}var $p=ur("animationend"),em=ur("animationiteration"),tm=ur("animationstart"),dy=ur("transitionrun"),hy=ur("transitionstart"),py=ur("transitioncancel"),nm=ur("transitionend"),im=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function Mi(t,n){im.set(t,n),ie(n,[t])}var Tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],Yr=0,Iu=0;function Al(){for(var t=Yr,n=Iu=Yr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&am(a,u,d)}}function Rl(t,n,a,o){si[Yr++]=t,si[Yr++]=n,si[Yr++]=a,si[Yr++]=o,Iu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function zu(t,n,a,o){return Rl(t,n,a,o),Cl(t)}function fr(t,n){return Rl(t,null,null,n),Cl(t)}function am(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-ze(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Cl(t){if(50<Co)throw Co=0,Zf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zr={};function my(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,o){return new my(t,n,a,o)}function Hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function rm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function wl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Hu(t)&&(y=1);else if(typeof t=="string")y=yS(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Zn(31,a,n,u),t.elementType=C,t.lanes=d,t;case T:return dr(a.children,u,d,n);case S:y=8,u|=24;break;case x:return t=Zn(12,a,n,u|2),t.elementType=x,t.lanes=d,t;case I:return t=Zn(13,a,n,u),t.elementType=I,t.lanes=d,t;case z:return t=Zn(19,a,n,u),t.elementType=z,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:y=10;break e;case w:y=9;break e;case O:y=11;break e;case B:y=14;break e;case q:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Zn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function dr(t,n,a,o){return t=Zn(7,t,o,n),t.lanes=a,t}function Gu(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function sm(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function Vu(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var om=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=om.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},om.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Kr=[],Qr=0,Dl=null,so=0,li=[],ci=0,wa=null,Li=1,Oi="";function Ki(t,n){Kr[Qr++]=so,Kr[Qr++]=Dl,Dl=t,so=n}function lm(t,n,a){li[ci++]=Li,li[ci++]=Oi,li[ci++]=wa,wa=t;var o=Li;t=Oi;var u=32-ze(o)-1;o&=~(1<<u),a+=1;var d=32-ze(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Li=1<<32-ze(n)+u|a<<u|o,Oi=d+t}else Li=1<<d|a<<u|o,Oi=t}function ku(t){t.return!==null&&(Ki(t,1),lm(t,1,0))}function Xu(t){for(;t===Dl;)Dl=Kr[--Qr],Kr[Qr]=null,so=Kr[--Qr],Kr[Qr]=null;for(;t===wa;)wa=li[--ci],li[ci]=null,Oi=li[--ci],li[ci]=null,Li=li[--ci],li[ci]=null}function cm(t,n){li[ci++]=Li,li[ci++]=Oi,li[ci++]=wa,Li=n.id,Oi=n.overflow,wa=t}var Tn=null,Yt=null,bt=!1,Da=null,ui=!1,Wu=Error(s(519));function Na(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(oi(n,t)),Wu}function um(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[xn]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<Do.length;a++)yt(Do[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),ji(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Rg(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Na(t,!0)}function fm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Tn=Tn.return}}function Jr(t){if(t!==Tn)return!1;if(!bt)return fm(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ud(t.type,t.memoizedProps)),a=!a),a&&Yt&&Na(t),fm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=Fg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=Fg(t)}else n===27?(n=Yt,Wa(t.type)?(t=md,md=null,Yt=t):Yt=n):Yt=Tn?di(t.stateNode.nextSibling):null;return!0}function hr(){Yt=Tn=null,bt=!1}function ju(){var t=Da;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Da=null),t}function oo(t){Da===null?Da=[t]:Da.push(t)}var qu=L(null),pr=null,Qi=null;function Ua(t,n,a){_e(qu,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=qu.current,$(qu)}function Yu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Zu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Yu(d.return,a,t),o||(y=null);break e}d=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Yu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function $r(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=u.type;Yn(u.pendingProps.value,y.value)||(t!==null?t.push(A):t=[A])}}else if(u===he.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Po):t=[Po])}u=u.return}t!==null&&Zu(n,t,a,o),n.flags|=262144}function Nl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function mr(t){pr=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return dm(pr,t)}function Ul(t,n){return pr===null&&mr(t),dm(t,n)}function dm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(s(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var gy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},_y=r.unstable_scheduleCallback,vy=r.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new gy,data:new Map,refCount:0}}function lo(t){t.refCount--,t.refCount===0&&_y(vy,function(){t.controller.abort()})}var co=null,Qu=0,es=0,ts=null;function xy(t,n){if(co===null){var a=co=[];Qu=0,es=td(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Qu++,n.then(hm,hm),n}function hm(){if(--Qu===0&&co!==null){ts!==null&&(ts.status="fulfilled");var t=co;co=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function yy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var pm=F.S;F.S=function(t,n){Q0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&xy(t,n),pm!==null&&pm(t,n)};var gr=L(null);function Ju(){var t=gr.current;return t!==null?t:jt.pooledCache}function Ll(t,n){n===null?_e(gr,gr.current):_e(gr,n.pool)}function mm(){var t=Ju();return t===null?null:{parent:ln._currentValue,pool:t}}var ns=Error(s(460)),$u=Error(s(474)),Ol=Error(s(542)),Pl={then:function(){}};function gm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _m(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xm(t),t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xm(t),t}throw vr=n,ns}}function _r(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vr=a,ns):a}}var vr=null;function vm(){if(vr===null)throw Error(s(459));var t=vr;return vr=null,t}function xm(t){if(t===ns||t===Ol)throw Error(s(483))}var is=null,uo=0;function Fl(t){var n=uo;return uo+=1,is===null&&(is=[]),_m(is,t,n)}function fo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Bl(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ym(t){function n(Z,X){if(t){var J=Z.deletions;J===null?(Z.deletions=[X],Z.flags|=16):J.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=Zi(Z,X),Z.index=0,Z.sibling=null,Z}function d(Z,X,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<X?(Z.flags|=67108866,X):J):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function y(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,X,J,ge){return X===null||X.tag!==6?(X=Gu(J,Z.mode,ge),X.return=Z,X):(X=u(X,J),X.return=Z,X)}function H(Z,X,J,ge){var tt=J.type;return tt===T?pe(Z,X,J.props.children,ge,J.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===q&&_r(tt)===X.type)?(X=u(X,J.props),fo(X,J),X.return=Z,X):(X=wl(J.type,J.key,J.props,null,Z.mode,ge),fo(X,J),X.return=Z,X)}function ee(Z,X,J,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Vu(J,Z.mode,ge),X.return=Z,X):(X=u(X,J.children||[]),X.return=Z,X)}function pe(Z,X,J,ge,tt){return X===null||X.tag!==7?(X=dr(J,Z.mode,ge,tt),X.return=Z,X):(X=u(X,J),X.return=Z,X)}function xe(Z,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Gu(""+X,Z.mode,J),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return J=wl(X.type,X.key,X.props,null,Z.mode,J),fo(J,X),J.return=Z,J;case E:return X=Vu(X,Z.mode,J),X.return=Z,X;case q:return X=_r(X),xe(Z,X,J)}if(ue(X)||se(X))return X=dr(X,Z.mode,J,null),X.return=Z,X;if(typeof X.then=="function")return xe(Z,Fl(X),J);if(X.$$typeof===N)return xe(Z,Ul(Z,X),J);Bl(Z,X)}return null}function ae(Z,X,J,ge){var tt=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return tt!==null?null:A(Z,X,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===tt?H(Z,X,J,ge):null;case E:return J.key===tt?ee(Z,X,J,ge):null;case q:return J=_r(J),ae(Z,X,J,ge)}if(ue(J)||se(J))return tt!==null?null:pe(Z,X,J,ge,null);if(typeof J.then=="function")return ae(Z,X,Fl(J),ge);if(J.$$typeof===N)return ae(Z,X,Ul(Z,J),ge);Bl(Z,J)}return null}function fe(Z,X,J,ge,tt){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Z=Z.get(J)||null,A(X,Z,""+ge,tt);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return Z=Z.get(ge.key===null?J:ge.key)||null,H(X,Z,ge,tt);case E:return Z=Z.get(ge.key===null?J:ge.key)||null,ee(X,Z,ge,tt);case q:return ge=_r(ge),fe(Z,X,J,ge,tt)}if(ue(ge)||se(ge))return Z=Z.get(J)||null,pe(X,Z,ge,tt,null);if(typeof ge.then=="function")return fe(Z,X,J,Fl(ge),tt);if(ge.$$typeof===N)return fe(Z,X,J,Ul(X,ge),tt);Bl(X,ge)}return null}function Ye(Z,X,J,ge){for(var tt=null,Ct=null,$e=X,mt=X=0,Mt=null;$e!==null&&mt<J.length;mt++){$e.index>mt?(Mt=$e,$e=null):Mt=$e.sibling;var wt=ae(Z,$e,J[mt],ge);if(wt===null){$e===null&&($e=Mt);break}t&&$e&&wt.alternate===null&&n(Z,$e),X=d(wt,X,mt),Ct===null?tt=wt:Ct.sibling=wt,Ct=wt,$e=Mt}if(mt===J.length)return a(Z,$e),bt&&Ki(Z,mt),tt;if($e===null){for(;mt<J.length;mt++)$e=xe(Z,J[mt],ge),$e!==null&&(X=d($e,X,mt),Ct===null?tt=$e:Ct.sibling=$e,Ct=$e);return bt&&Ki(Z,mt),tt}for($e=o($e);mt<J.length;mt++)Mt=fe($e,Z,mt,J[mt],ge),Mt!==null&&(t&&Mt.alternate!==null&&$e.delete(Mt.key===null?mt:Mt.key),X=d(Mt,X,mt),Ct===null?tt=Mt:Ct.sibling=Mt,Ct=Mt);return t&&$e.forEach(function(Ka){return n(Z,Ka)}),bt&&Ki(Z,mt),tt}function st(Z,X,J,ge){if(J==null)throw Error(s(151));for(var tt=null,Ct=null,$e=X,mt=X=0,Mt=null,wt=J.next();$e!==null&&!wt.done;mt++,wt=J.next()){$e.index>mt?(Mt=$e,$e=null):Mt=$e.sibling;var Ka=ae(Z,$e,wt.value,ge);if(Ka===null){$e===null&&($e=Mt);break}t&&$e&&Ka.alternate===null&&n(Z,$e),X=d(Ka,X,mt),Ct===null?tt=Ka:Ct.sibling=Ka,Ct=Ka,$e=Mt}if(wt.done)return a(Z,$e),bt&&Ki(Z,mt),tt;if($e===null){for(;!wt.done;mt++,wt=J.next())wt=xe(Z,wt.value,ge),wt!==null&&(X=d(wt,X,mt),Ct===null?tt=wt:Ct.sibling=wt,Ct=wt);return bt&&Ki(Z,mt),tt}for($e=o($e);!wt.done;mt++,wt=J.next())wt=fe($e,Z,mt,wt.value,ge),wt!==null&&(t&&wt.alternate!==null&&$e.delete(wt.key===null?mt:wt.key),X=d(wt,X,mt),Ct===null?tt=wt:Ct.sibling=wt,Ct=wt);return t&&$e.forEach(function(NS){return n(Z,NS)}),bt&&Ki(Z,mt),tt}function kt(Z,X,J,ge){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:e:{for(var tt=J.key;X!==null;){if(X.key===tt){if(tt=J.type,tt===T){if(X.tag===7){a(Z,X.sibling),ge=u(X,J.props.children),ge.return=Z,Z=ge;break e}}else if(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===q&&_r(tt)===X.type){a(Z,X.sibling),ge=u(X,J.props),fo(ge,J),ge.return=Z,Z=ge;break e}a(Z,X);break}else n(Z,X);X=X.sibling}J.type===T?(ge=dr(J.props.children,Z.mode,ge,J.key),ge.return=Z,Z=ge):(ge=wl(J.type,J.key,J.props,null,Z.mode,ge),fo(ge,J),ge.return=Z,Z=ge)}return y(Z);case E:e:{for(tt=J.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){a(Z,X.sibling),ge=u(X,J.children||[]),ge.return=Z,Z=ge;break e}else{a(Z,X);break}else n(Z,X);X=X.sibling}ge=Vu(J,Z.mode,ge),ge.return=Z,Z=ge}return y(Z);case q:return J=_r(J),kt(Z,X,J,ge)}if(ue(J))return Ye(Z,X,J,ge);if(se(J)){if(tt=se(J),typeof tt!="function")throw Error(s(150));return J=tt.call(J),st(Z,X,J,ge)}if(typeof J.then=="function")return kt(Z,X,Fl(J),ge);if(J.$$typeof===N)return kt(Z,X,Ul(Z,J),ge);Bl(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(a(Z,X.sibling),ge=u(X,J),ge.return=Z,Z=ge):(a(Z,X),ge=Gu(J,Z.mode,ge),ge.return=Z,Z=ge),y(Z)):a(Z,X)}return function(Z,X,J,ge){try{uo=0;var tt=kt(Z,X,J,ge);return is=null,tt}catch($e){if($e===ns||$e===Ol)throw $e;var Ct=Zn(29,$e,null,Z.mode);return Ct.lanes=ge,Ct.return=Z,Ct}}}var xr=ym(!0),Sm=ym(!1),La=!1;function ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Cl(t),am(t,null,a),n}return Rl(t,o,n,a),Cl(t)}function ho(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,js(t,a)}}function nf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var af=!1;function po(){if(af){var t=ts;if(t!==null)throw t}}function mo(t,n,a,o){af=!1;var u=t.updateQueue;La=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,ee=H.next;H.next=null,y===null?d=ee:y.next=ee,y=H;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==y&&(A===null?pe.firstBaseUpdate=ee:A.next=ee,pe.lastBaseUpdate=H))}if(d!==null){var xe=u.baseState;y=0,pe=ee=H=null,A=d;do{var ae=A.lane&-536870913,fe=ae!==A.lane;if(fe?(St&ae)===ae:(o&ae)===ae){ae!==0&&ae===es&&(af=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ye=t,st=A;ae=n;var kt=a;switch(st.tag){case 1:if(Ye=st.payload,typeof Ye=="function"){xe=Ye.call(kt,xe,ae);break e}xe=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=st.payload,ae=typeof Ye=="function"?Ye.call(kt,xe,ae):Ye,ae==null)break e;xe=g({},xe,ae);break e;case 2:La=!0}}ae=A.callback,ae!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[ae]:fe.push(ae))}else fe={lane:ae,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(ee=pe=fe,H=xe):pe=pe.next=fe,y|=ae;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;fe=A,A=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);pe===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=ee,u.lastBaseUpdate=pe,d===null&&(u.shared.lanes=0),Ha|=y,t.lanes=y,t.memoizedState=xe}}function Mm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function bm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Mm(a[t],n)}var as=L(null),Il=L(0);function Em(t,n){t=oa,_e(Il,t),_e(as,n),oa=t|n.baseLanes}function rf(){_e(Il,oa),_e(as,as.current)}function sf(){oa=Il.current,$(as),$(Il)}var Kn=L(null),fi=null;function Fa(t){var n=t.alternate;_e(an,an.current&1),_e(Kn,t),fi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(fi=t)}function of(t){_e(an,an.current),_e(Kn,t),fi===null&&(fi=t)}function Tm(t){t.tag===22?(_e(an,an.current),_e(Kn,t),fi===null&&(fi=t)):Ba()}function Ba(){_e(an,an.current),_e(Kn,Kn.current)}function Qn(t){$(Kn),fi===t&&(fi=null),$(an)}var an=L(0);function zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hd(a)||pd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,ht=null,Gt=null,cn=null,Hl=!1,rs=!1,yr=!1,Gl=0,go=0,ss=null,Sy=0;function en(){throw Error(s(321))}function lf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function cf(t,n,a,o,u,d){return $i=d,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?l0:Ef,yr=!1,d=a(o,u),yr=!1,rs&&(d=Rm(n,a,o,u)),Am(t),d}function Am(t){F.H=xo;var n=Gt!==null&&Gt.next!==null;if($i=0,cn=Gt=ht=null,Hl=!1,go=0,ss=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&Nl(t)&&(un=!0))}function Rm(t,n,a,o){ht=t;var u=0;do{if(rs&&(ss=null),go=0,rs=!1,25<=u)throw Error(s(301));if(u+=1,cn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=c0,d=n(a,o)}while(rs);return d}function My(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?_o(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ht.flags|=1024),n}function uf(){var t=Gl!==0;return Gl=0,t}function ff(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function df(t){if(Hl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Hl=!1}$i=0,cn=Gt=ht=null,rs=!1,go=Gl=0,ss=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ht.memoizedState=cn=t:cn=cn.next=t,cn}function rn(){if(Gt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=cn===null?ht.memoizedState:cn.next;if(n!==null)cn=n,Gt=t;else{if(t===null)throw ht.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},cn===null?ht.memoizedState=cn=t:cn=cn.next=t}return cn}function Vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(t){var n=go;return go+=1,ss===null&&(ss=[]),t=_m(ss,t,n),n=ht,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?l0:Ef),t}function kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _o(t);if(t.$$typeof===N)return An(t)}throw Error(s(438,String(t)))}function hf(t){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Vl(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function Xl(t){var n=rn();return pf(n,Gt,t)}function pf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var A=y=null,H=null,ee=n,pe=!1;do{var xe=ee.lane&-536870913;if(xe!==ee.lane?(St&xe)===xe:($i&xe)===xe){var ae=ee.revertLane;if(ae===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),xe===es&&(pe=!0);else if(($i&ae)===ae){ee=ee.next,ae===es&&(pe=!0);continue}else xe={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(A=H=xe,y=d):H=H.next=xe,ht.lanes|=ae,Ha|=ae;xe=ee.action,yr&&a(d,xe),d=ee.hasEagerState?ee.eagerState:a(d,xe)}else ae={lane:xe,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(A=H=ae,y=d):H=H.next=ae,ht.lanes|=xe,Ha|=xe;ee=ee.next}while(ee!==null&&ee!==n);if(H===null?y=d:H.next=A,!Yn(d,t.memoizedState)&&(un=!0,pe&&(a=ts,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function mf(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);Yn(d,n.memoizedState)||(un=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Cm(t,n,a){var o=ht,u=rn(),d=bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Yn((Gt||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,vf(Nm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,os(9,{destroy:void 0},Dm.bind(null,o,u,a,n),null),jt===null)throw Error(s(349));d||($i&127)!==0||wm(o,n,a)}return a}function wm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Vl(),ht.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Dm(t,n,a,o){n.value=a,n.getSnapshot=o,Um(n)&&Lm(t)}function Nm(t,n,a){return a(function(){Um(n)&&Lm(t)})}function Um(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Lm(t){var n=fr(t,2);n!==null&&Wn(n,t,2)}function gf(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),yr){Ve(!0);try{a()}finally{Ve(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function Om(t,n,a,o){return t.baseState=a,pf(t,Gt,typeof o=="function"?o:ea)}function by(t,n,a,o,u){if(ql(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Pm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Pm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=F.T,y={};F.T=y;try{var A=a(u,o),H=F.S;H!==null&&H(y,A),Fm(t,n,A)}catch(ee){_f(t,n,ee)}finally{d!==null&&y.types!==null&&(d.types=y.types),F.T=d}}else try{d=a(u,o),Fm(t,n,d)}catch(ee){_f(t,n,ee)}}function Fm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Bm(t,n,o)},function(o){return _f(t,n,o)}):Bm(t,n,a)}function Bm(t,n,a){n.status="fulfilled",n.value=a,Im(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Pm(t,a)))}function _f(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Im(n),n=n.next;while(n!==o)}t.action=null}function Im(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function zm(t,n){return n}function Hm(t,n){if(bt){var a=jt.formState;if(a!==null){e:{var o=ht;if(bt){if(Yt){t:{for(var u=Yt,d=ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Yt=di(u.nextSibling),o=u.data==="F!";break e}}Na(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:n},a.queue=o,a=r0.bind(null,ht,o),o.dispatch=a,o=gf(!1),d=bf.bind(null,ht,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=by.bind(null,ht,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Gm(t){var n=rn();return Vm(n,Gt,t)}function Vm(t,n,a){if(n=pf(t,n,zm)[0],t=Xl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=_o(n)}catch(y){throw y===ns?Ol:y}else o=n;n=rn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,os(9,{destroy:void 0},Ey.bind(null,u,a),null)),[o,d,t]}function Ey(t,n){t.action=n}function km(t){var n=rn(),a=Gt;if(a!==null)return Vm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function os(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Vl(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Xm(){return rn().memoizedState}function Wl(t,n,a,o){var u=Pn();ht.flags|=t,u.memoizedState=os(1|n,{destroy:void 0},a,o===void 0?null:o)}function jl(t,n,a,o){var u=rn();o=o===void 0?null:o;var d=u.memoizedState.inst;Gt!==null&&o!==null&&lf(o,Gt.memoizedState.deps)?u.memoizedState=os(n,d,a,o):(ht.flags|=t,u.memoizedState=os(1|n,d,a,o))}function Wm(t,n){Wl(8390656,8,t,n)}function vf(t,n){jl(2048,8,t,n)}function Ty(t){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=Vl(),ht.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function jm(t){var n=rn().memoizedState;return Ty({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function qm(t,n){return jl(4,2,t,n)}function Ym(t,n){return jl(4,4,t,n)}function Zm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Km(t,n,a){a=a!=null?a.concat([t]):null,jl(4,4,Zm.bind(null,n,t),a)}function xf(){}function Qm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&lf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Jm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&lf(n,o[1]))return o[0];if(o=t(),yr){Ve(!0);try{t()}finally{Ve(!1)}}return a.memoizedState=[o,n],o}function yf(t,n,a){return a===void 0||($i&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=$0(),ht.lanes|=t,Ha|=t,a)}function $m(t,n,a,o){return Yn(a,n)?a:as.current!==null?(t=yf(t,a,o),Yn(t,n)||(un=!0),t):($i&42)===0||($i&1073741824)!==0&&(St&261930)===0?(un=!0,t.memoizedState=a):(t=$0(),ht.lanes|=t,Ha|=t,n)}function e0(t,n,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var y=F.T,A={};F.T=A,bf(t,!1,n,a);try{var H=u(),ee=F.S;if(ee!==null&&ee(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=yy(H,o);vo(t,n,pe,ei(t))}else vo(t,n,o,ei(t))}catch(xe){vo(t,n,{then:function(){},status:"rejected",reason:xe},ei())}finally{G.p=d,y!==null&&A.types!==null&&(y.types=A.types),F.T=y}}function Ay(){}function Sf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=t0(t).queue;e0(t,u,n,te,a===null?Ay:function(){return n0(t),a(o)})}function t0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function n0(t){var n=t0(t);n.next===null&&(n=t.alternate.memoizedState),vo(t,n.next.queue,{},ei())}function Mf(){return An(Po)}function i0(){return rn().memoizedState}function a0(){return rn().memoizedState}function Ry(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Oa(a);var o=Pa(n,t,a);o!==null&&(Wn(o,n,a),ho(o,n,a)),n={cache:Ku()},t.payload=n;return}n=n.return}}function Cy(t,n,a){var o=ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(t)?s0(n,a):(a=zu(t,n,a,o),a!==null&&(Wn(a,t,o),o0(a,n,o)))}function r0(t,n,a){var o=ei();vo(t,n,a,o)}function vo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(t))s0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,A=d(y,a);if(u.hasEagerState=!0,u.eagerState=A,Yn(A,y))return Rl(t,n,u,0),jt===null&&Al(),!1}catch{}if(a=zu(t,n,u,o),a!==null)return Wn(a,t,o),o0(a,n,o),!0}return!1}function bf(t,n,a,o){if(o={lane:2,revertLane:td(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(s(479))}else n=zu(t,a,o,2),n!==null&&Wn(n,t,2)}function ql(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function s0(t,n){rs=Hl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function o0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,js(t,a)}}var xo={readContext:An,use:kl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};xo.useEffectEvent=en;var l0={readContext:An,use:kl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Wm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Wl(4194308,4,Zm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Wl(4194308,4,t,n)},useInsertionEffect:function(t,n){Wl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(yr){Ve(!0);try{t()}finally{Ve(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(yr){Ve(!0);try{a(n)}finally{Ve(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Cy.bind(null,ht,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=gf(t);var n=t.queue,a=r0.bind(null,ht,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:xf,useDeferredValue:function(t,n){var a=Pn();return yf(a,t,n)},useTransition:function(){var t=gf(!1);return t=e0.bind(null,ht,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ht,u=Pn();if(bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(St&127)!==0||wm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Wm(Nm.bind(null,o,d,t),[t]),o.flags|=2048,os(9,{destroy:void 0},Dm.bind(null,o,d,a,n),null),a},useId:function(){var t=Pn(),n=jt.identifierPrefix;if(bt){var a=Oi,o=Li;a=(o&~(1<<32-ze(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Sy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Mf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=bf.bind(null,ht,!0,a),a.dispatch=n,[t,n]},useMemoCache:hf,useCacheRefresh:function(){return Pn().memoizedState=Ry.bind(null,ht)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ef={readContext:An,use:kl,useCallback:Qm,useContext:An,useEffect:vf,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Jm,useReducer:Xl,useRef:Xm,useState:function(){return Xl(ea)},useDebugValue:xf,useDeferredValue:function(t,n){var a=rn();return $m(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Xl(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:Cm,useId:i0,useHostTransitionStatus:Mf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t,n){var a=rn();return Om(a,Gt,t,n)},useMemoCache:hf,useCacheRefresh:a0};Ef.useEffectEvent=jm;var c0={readContext:An,use:kl,useCallback:Qm,useContext:An,useEffect:vf,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Jm,useReducer:mf,useRef:Xm,useState:function(){return mf(ea)},useDebugValue:xf,useDeferredValue:function(t,n){var a=rn();return Gt===null?yf(a,t,n):$m(a,Gt.memoizedState,t,n)},useTransition:function(){var t=mf(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:Cm,useId:i0,useHostTransitionStatus:Mf,useFormState:km,useActionState:km,useOptimistic:function(t,n){var a=rn();return Gt!==null?Om(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:hf,useCacheRefresh:a0};c0.useEffectEvent=jm;function Tf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Af={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Oa(o);u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(Wn(n,t,o),ho(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Oa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(Wn(n,t,o),ho(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,a),n!==null&&(Wn(n,t,a),ho(n,t,a))}};function u0(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,d):!0}function f0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Af.enqueueReplaceState(n,n.state,null)}function Sr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function d0(t){Tl(t)}function h0(t){console.error(t)}function p0(t){Tl(t)}function Yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function m0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Rf(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(t,n)},a}function g0(t){return t=Oa(t),t.tag=3,t}function _0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){m0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){m0(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function wy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?sc():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Jf(t,o,u)),!1;case 22:return a.flags|=65536,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Jf(t,o,u)),!1}throw Error(s(435,a.tag))}return Jf(t,o,u),sc(),!1}if(bt)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Wu&&(t=Error(s(422),{cause:o}),oo(oi(t,a)))):(o!==Wu&&(n=Error(s(423),{cause:o}),oo(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=Rf(t.stateNode,o,u),nf(t,u),tn!==4&&(tn=2)),!1;var d=Error(s(520),{cause:o});if(d=oi(d,a),Ro===null?Ro=[d]:Ro.push(d),tn!==4&&(tn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Rf(a.stateNode,o,t),nf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ga===null||!Ga.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=g0(u),_0(u,t,a,o),nf(a,u),!1}a=a.return}while(a!==null);return!1}var Cf=Error(s(461)),un=!1;function Rn(t,n,a,o){n.child=t===null?Sm(n,null,a,o):xr(n,t.child,a,o)}function v0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return mr(n),o=cf(t,n,a,y,d,u),A=uf(),t!==null&&!un?(ff(t,n,u),ta(t,n,u)):(bt&&A&&ku(n),n.flags|=1,Rn(t,n,o,u),n.child)}function x0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Hu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,y0(t,n,d,o,u)):(t=wl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Ff(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(y,o)&&t.ref===n.ref)return ta(t,n,u)}return n.flags|=1,t=Zi(d,o),t.ref=n.ref,t.return=n,n.child=t}function y0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(ao(d,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=d,Ff(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ta(t,n,u)}return wf(t,n,a,o,u)}function S0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return M0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ll(n,d!==null?d.cachePool:null),d!==null?Em(n,d):rf(),Tm(n);else return o=n.lanes=536870912,M0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ll(n,d.cachePool),Em(n,d),Ba(),n.memoizedState=null):(t!==null&&Ll(n,null),rf(),Ba());return Rn(t,n,u,a),n.child}function yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function M0(t,n,a,o,u){var d=Ju();return d=d===null?null:{parent:ln._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Ll(n,null),rf(),Tm(n),t!==null&&$r(t,n,o,!0),n.childLanes=u,null}function Zl(t,n){return n=Ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function b0(t,n,a){return xr(n,t.child,null,a),t=Zl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function Dy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=Zl(n,o),n.lanes=536870912,yo(null,t);if(of(n),(t=Yt)?(t=Pg(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=sm(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return Zl(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(of(n),u)if(n.flags&256)n.flags&=-257,n=b0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||$r(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(o=jt,o!==null&&(y=Ir(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,fr(t,y),Wn(o,t,y),Cf;sc(),n=b0(t,n,a)}else t=d.treeContext,Yt=di(y.nextSibling),Tn=n,bt=!0,Da=null,ui=!1,t!==null&&cm(n,t),n=Zl(n,o),n.flags|=4096;return n}return t=Zi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function wf(t,n,a,o,u){return mr(n),a=cf(t,n,a,o,void 0,u),o=uf(),t!==null&&!un?(ff(t,n,u),ta(t,n,u)):(bt&&o&&ku(n),n.flags|=1,Rn(t,n,a,u),n.child)}function E0(t,n,a,o,u,d){return mr(n),n.updateQueue=null,a=Rm(n,o,a,u),Am(t),o=uf(),t!==null&&!un?(ff(t,n,d),ta(t,n,d)):(bt&&o&&ku(n),n.flags|=1,Rn(t,n,a,d),n.child)}function T0(t,n,a,o,u){if(mr(n),n.stateNode===null){var d=Zr,y=a.contextType;typeof y=="object"&&y!==null&&(d=An(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Af,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},ef(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?An(y):Zr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Tf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Af.enqueueReplaceState(d,d.state,null),mo(n,o,d,u),po(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var A=n.memoizedProps,H=Sr(a,A);d.props=H;var ee=d.context,pe=a.contextType;y=Zr,typeof pe=="object"&&pe!==null&&(y=An(pe));var xe=a.getDerivedStateFromProps;pe=typeof xe=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||ee!==y)&&f0(n,d,o,y),La=!1;var ae=n.memoizedState;d.state=ae,mo(n,o,d,u),po(),ee=n.memoizedState,A||ae!==ee||La?(typeof xe=="function"&&(Tf(n,a,xe,o),ee=n.memoizedState),(H=La||u0(n,a,H,o,ae,ee,y))?(pe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),d.props=o,d.state=ee,d.context=y,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,tf(t,n),y=n.memoizedProps,pe=Sr(a,y),d.props=pe,xe=n.pendingProps,ae=d.context,ee=a.contextType,H=Zr,typeof ee=="object"&&ee!==null&&(H=An(ee)),A=a.getDerivedStateFromProps,(ee=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==xe||ae!==H)&&f0(n,d,o,H),La=!1,ae=n.memoizedState,d.state=ae,mo(n,o,d,u),po();var fe=n.memoizedState;y!==xe||ae!==fe||La||t!==null&&t.dependencies!==null&&Nl(t.dependencies)?(typeof A=="function"&&(Tf(n,a,A,o),fe=n.memoizedState),(pe=La||u0(n,a,pe,o,ae,fe,H)||t!==null&&t.dependencies!==null&&Nl(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,fe,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,fe,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),d.props=o,d.state=fe,d.context=H,o=pe):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Kl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=xr(n,t.child,null,u),n.child=xr(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ta(t,n,u),t}function A0(t,n,a,o){return hr(),n.flags|=256,Rn(t,n,a,o),n.child}var Df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(t){return{baseLanes:t,cachePool:mm()}}function Uf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function R0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Fa(n):Ba(),(t=Yt)?(t=Pg(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=sm(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Na(n);return pd(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ba(),u=n.mode,A=Ql({mode:"hidden",children:A},u),o=dr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Nf(a),o.childLanes=Uf(t,y,a),n.memoizedState=Df,yo(null,o)):(Fa(n),Lf(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(d)n.flags&256?(Fa(n),n.flags&=-257,n=Of(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),A=o.fallback,u=n.mode,o=Ql({mode:"visible",children:o.children},u),A=dr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,xr(n,t.child,null,a),o=n.child,o.memoizedState=Nf(a),o.childLanes=Uf(t,y,a),n.memoizedState=Df,n=yo(null,o));else if(Fa(n),pd(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var ee=y.dgst;y=ee,o=Error(s(419)),o.stack="",o.digest=y,oo({value:o,source:null,stack:null}),n=Of(t,n,a)}else if(un||$r(t,n,a,!1),y=(a&t.childLanes)!==0,un||y){if(y=jt,y!==null&&(o=Ir(y,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,fr(t,o),Wn(y,t,o),Cf;hd(A)||sc(),n=Of(t,n,a)}else hd(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Yt=di(A.nextSibling),Tn=n,bt=!0,Da=null,ui=!1,t!==null&&cm(n,t),n=Lf(n,o.children),n.flags|=4096);return n}return u?(Ba(),A=o.fallback,u=n.mode,H=t.child,ee=H.sibling,o=Zi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ee!==null?A=Zi(ee,A):(A=dr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,yo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Nf(a):(u=A.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=mm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Uf(t,y,a),n.memoizedState=Df,yo(t.child,o)):(Fa(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Lf(t,n){return n=Ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ql(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function Of(t,n,a){return xr(n,t.child,null,a),t=Lf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function C0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Yu(t.return,n,a)}function Pf(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function w0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=an.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,_e(an,y),Rn(t,n,o,a),o=bt?so:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&C0(t,a,n);else if(t.tag===19)C0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&zl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Pf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&zl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Pf(n,!0,a,null,d,o);break;case"together":Pf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ff(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Nl(t)))}function Ny(t,n,a){switch(n.tag){case 3:Le(n,n.stateNode.containerInfo),Ua(n,ln,t.memoizedState.cache),hr();break;case 27:case 5:we(n);break;case 4:Le(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,of(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?R0(t,n,a):(Fa(n),t=ta(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return w0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(an,an.current),o)break;return null;case 22:return n.lanes=0,S0(t,n,a,n.pendingProps);case 24:Ua(n,ln,t.memoizedState.cache)}return ta(t,n,a)}function D0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Ff(t,a)&&(n.flags&128)===0)return un=!1,Ny(t,n,a);un=(t.flags&131072)!==0}else un=!1,bt&&(n.flags&1048576)!==0&&lm(n,so,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=_r(n.elementType),n.type=t,typeof t=="function")Hu(t)?(o=Sr(t,o),n.tag=1,n=T0(null,n,t,o,a)):(n.tag=0,n=wf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=v0(null,n,t,o,a);break e}else if(u===B){n.tag=14,n=x0(null,n,t,o,a);break e}}throw n=me(t)||t,Error(s(306,n,""))}}return n;case 0:return wf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Sr(o,n.pendingProps),T0(t,n,o,u,a);case 3:e:{if(Le(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,tf(t,n),mo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ua(n,ln,o),o!==d.cache&&Zu(n,[ln],a,!0),po(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=A0(t,n,o,a);break e}else if(o!==u){u=oi(Error(s(424)),n),oo(u),n=A0(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Yt=di(t.firstChild),Tn=n,bt=!0,Da=null,ui=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hr(),o===u){n=ta(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Kl(t,n),t===null?(a=Gg(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=hc(ne.current).createElement(a),o[on]=n,o[xn]=t,Cn(o,a,t),R(o),n.stateNode=o):n.memoizedState=Gg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return we(n),t===null&&bt&&(o=n.stateNode=Ig(n.type,n.pendingProps,ne.current),Tn=n,ui=!0,u=Yt,Wa(n.type)?(md=u,Yt=di(o.firstChild)):Yt=u),Rn(t,n,n.pendingProps.children,a),Kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=Yt)&&(o=oS(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,Tn=n,Yt=di(o.firstChild),ui=!1,u=!0):u=!1),u||Na(n)),we(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,ud(u,d)?o=null:y!==null&&ud(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=cf(t,n,My,null,null,a),Po._currentValue=u),Kl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=Yt)&&(a=lS(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Tn=n,Yt=null,t=!0):t=!1),t||Na(n)),null;case 13:return R0(t,n,a);case 4:return Le(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=xr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return v0(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,mr(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return x0(t,n,n.type,n.pendingProps,a);case 15:return y0(t,n,n.type,n.pendingProps,a);case 19:return w0(t,n,a);case 31:return Dy(t,n,a);case 22:return S0(t,n,a,n.pendingProps);case 24:return mr(n),o=An(ln),t===null?(u=Ju(),u===null&&(u=jt,d=Ku(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},ef(n),Ua(n,ln,u)):((t.lanes&a)!==0&&(tf(t,n),mo(n,null,null,a),po()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,ln,o)):(o=d.cache,Ua(n,ln,o),o!==u.cache&&Zu(n,[ln],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(t){t.flags|=4}function Bf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(ig())t.flags|=8192;else throw vr=Pl,$u}else t.flags&=-16777217}function N0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!jg(n))if(ig())t.flags|=8192;else throw vr=Pl,$u}function Jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ft():536870912,t.lanes|=n,fs|=n)}function So(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Uy(t,n,a){var o=n.pendingProps;switch(Xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ji(ln),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jr(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),Zt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(na(n),d!==null?(Zt(n),N0(n,d)):(Zt(n),Bf(n,u,null,o,a))):d?d!==t.memoizedState?(na(n),Zt(n),N0(n,d)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&na(n),Zt(n),Bf(n,u,t,o,a)),null;case 27:if(Je(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}t=Re.current,Jr(n)?um(n):(t=Ig(u,o,a),n.stateNode=t,na(n))}return Zt(n),null;case 5:if(Je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}if(d=Re.current,Jr(n))um(n);else{var y=hc(ne.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[on]=n,d[xn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(Cn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&na(n)}}return Zt(n),Bf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ne.current,Jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Rg(t.nodeValue,a)),t||Na(n,!0)}else t=hc(t).createTextNode(o),t[on]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Jr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[on]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Jl(n,n.updateQueue),Zt(n),null);case 4:return Me(),t===null&&rd(n.stateNode.containerInfo),Zt(n),null;case 10:return Ji(n.type),Zt(n),null;case 19:if($(an),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)So(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=zl(t),d!==null){for(n.flags|=128,So(o,!1),t=d.updateQueue,n.updateQueue=t,Jl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)rm(a,t),a=a.sibling;return _e(an,an.current&1|2),bt&&Ki(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>ic&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304)}else{if(!u)if(t=zl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Jl(n,t),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!bt)return Zt(n),null}else 2*b()-o.renderingStartTime>ic&&a!==536870912&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=an.current,_e(an,u?a&1|2:a&1),bt&&Ki(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return Qn(n),sf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Jl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&$(gr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(ln),Zt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ly(t,n){switch(Xu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(ln),Me(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $(an),null;case 4:return Me(),null;case 10:return Ji(n.type),null;case 22:case 23:return Qn(n),sf(),t!==null&&$(gr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(ln),null;case 25:return null;default:return null}}function U0(t,n){switch(Xu(n),n.tag){case 3:Ji(ln),Me();break;case 26:case 27:case 5:Je(n);break;case 4:Me();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:$(an);break;case 10:Ji(n.type);break;case 22:case 23:Qn(n),sf(),t!==null&&$(gr);break;case 24:Ji(ln)}}function Mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){zt(n,n.return,A)}}function Ia(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var H=a,ee=A;try{ee()}catch(pe){zt(u,H,pe)}}}o=o.next}while(o!==d)}}catch(pe){zt(n,n.return,pe)}}function L0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{bm(n,a)}catch(o){zt(t,t.return,o)}}}function O0(t,n,a){a.props=Sr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function bo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function P0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function If(t,n,a){try{var o=t.stateNode;tS(o,t.type,a,n),o[xn]=n}catch(u){zt(t,t.return,u)}}function F0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Hf(t,n,a),t=t.sibling;t!==null;)Hf(t,n,a),t=t.sibling}function $l(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for($l(t,n,a),t=t.sibling;t!==null;)$l(t,n,a),t=t.sibling}function B0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[on]=t,n[xn]=a}catch(d){zt(t,t.return,d)}}var ia=!1,fn=!1,Gf=!1,I0=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Oy(t,n){if(t=t.containerInfo,ld=yc,t=Kp(t),Lu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,A=-1,H=-1,ee=0,pe=0,xe=t,ae=null;t:for(;;){for(var fe;xe!==a||u!==0&&xe.nodeType!==3||(A=y+u),xe!==d||o!==0&&xe.nodeType!==3||(H=y+o),xe.nodeType===3&&(y+=xe.nodeValue.length),(fe=xe.firstChild)!==null;)ae=xe,xe=fe;for(;;){if(xe===t)break t;if(ae===a&&++ee===u&&(A=y),ae===d&&++pe===o&&(H=y),(fe=xe.nextSibling)!==null)break;xe=ae,ae=xe.parentNode}xe=fe}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(cd={focusedElem:t,selectionRange:a},yc=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Ye=Sr(a.type,u);t=o.getSnapshotBeforeUpdate(Ye,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(st){zt(a,a.return,st)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)dd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":dd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function z0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),o&4&&Mo(5,a);break;case 1:if(ra(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){zt(a,a.return,y)}else{var u=Sr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){zt(a,a.return,y)}}o&64&&L0(a),o&512&&bo(a,a.return);break;case 3:if(ra(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bm(t,n)}catch(y){zt(a,a.return,y)}}break;case 27:n===null&&o&4&&B0(a);case 26:case 5:ra(t,a),n===null&&o&4&&P0(a),o&512&&bo(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),o&4&&V0(t,a);break;case 13:ra(t,a),o&4&&k0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ky.bind(null,a),cS(t,a))));break;case 22:if(o=a.memoizedState!==null||ia,!o){n=n!==null&&n.memoizedState!==null||fn,u=ia;var d=fn;ia=o,(fn=n)&&!d?sa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),ia=u,fn=d}break;case 30:break;default:ra(t,a)}}function H0(t){var n=t.alternate;n!==null&&(t.alternate=null,H0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ks(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Gn=!1;function aa(t,n,a){for(a=a.child;a!==null;)G0(t,n,a),a=a.sibling}function G0(t,n,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:fn||Pi(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Pi(a,n);var o=Jt,u=Gn;Wa(a.type)&&(Jt=a.stateNode,Gn=!1),aa(t,n,a),Uo(a.stateNode),Jt=o,Gn=u;break;case 5:fn||Pi(a,n);case 6:if(o=Jt,u=Gn,Jt=null,aa(t,n,a),Jt=o,Gn=u,Jt!==null)if(Gn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(d){zt(a,n,d)}else try{Jt.removeChild(a.stateNode)}catch(d){zt(a,n,d)}break;case 18:Jt!==null&&(Gn?(t=Jt,Lg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xs(t)):Lg(Jt,a.stateNode));break;case 4:o=Jt,u=Gn,Jt=a.stateNode.containerInfo,Gn=!0,aa(t,n,a),Jt=o,Gn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),fn||Ia(4,a,n),aa(t,n,a);break;case 1:fn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&O0(a,n,o)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,aa(t,n,a),fn=o;break;default:aa(t,n,a)}}function V0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xs(t)}catch(a){zt(n,n.return,a)}}}function k0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xs(t)}catch(a){zt(n,n.return,a)}}function Py(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new I0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new I0),n;default:throw Error(s(435,t.tag))}}function ec(t,n){var a=Py(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Xy.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,A=y;e:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){Jt=A.stateNode,Gn=!1;break e}break;case 5:Jt=A.stateNode,Gn=!1;break e;case 3:case 4:Jt=A.stateNode.containerInfo,Gn=!0;break e}A=A.return}if(Jt===null)throw Error(s(160));G0(d,y,u),Jt=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)X0(n,t),n=n.sibling}var bi=null;function X0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(Ia(3,t,t.return),Mo(3,t),Ia(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&64&&ia&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[sr]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[on]=t,R(d),o=d;break e;case"link":var y=Xg("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(d=y[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=Xg("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(d=y[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[on]=t,R(d),o=d}t.stateNode=o}else Wg(u,t.type,t.stateNode);else t.stateNode=kg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Wg(u,t.type,t.stateNode):kg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&If(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),a!==null&&o&4&&If(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(fn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{hn(u,"")}catch(Ye){zt(t,t.return,Ye)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,If(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Gf=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ye){zt(t,t.return,Ye)}}break;case 3:if(gc=null,u=bi,bi=pc(n.containerInfo),Vn(n,t),bi=u,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(Ye){zt(t,t.return,Ye)}Gf&&(Gf=!1,W0(t));break;case 4:o=bi,bi=pc(t.stateNode.containerInfo),Vn(n,t),kn(t),bi=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nc=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ee=ia,pe=fn;if(ia=ee||u,fn=pe||H,Vn(n,t),fn=pe,ia=ee,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ia||fn||Mr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=H.stateNode;var xe=H.memoizedProps.style,ae=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;A.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(Ye){zt(H,H.return,Ye)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ye){zt(H,H.return,Ye)}}}else if(n.tag===18){if(a===null){H=n;try{var fe=H.stateNode;u?Og(fe,!0):Og(H.stateNode,!1)}catch(Ye){zt(H,H.return,Ye)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ec(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(F0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=zf(t);$l(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(hn(y,""),a.flags&=-33);var A=zf(t);$l(t,A,y);break;case 3:case 4:var H=a.stateNode.containerInfo,ee=zf(t);Hf(t,ee,H);break;default:throw Error(s(161))}}catch(pe){zt(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function W0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;W0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)z0(t,n.alternate,n),n=n.sibling}function Mr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),Mr(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&O0(n,n.return,a),Mr(n);break;case 27:Uo(n.stateNode);case 26:case 5:Pi(n,n.return),Mr(n);break;case 22:n.memoizedState===null&&Mr(n);break;case 30:Mr(n);break;default:Mr(n)}t=t.sibling}}function sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:sa(u,d,a),Mo(4,d);break;case 1:if(sa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){zt(o,o.return,ee)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Mm(H[u],A)}catch(ee){zt(o,o.return,ee)}}a&&y&64&&L0(d),bo(d,d.return);break;case 27:B0(d);case 26:case 5:sa(u,d,a),a&&o===null&&y&4&&P0(d),bo(d,d.return);break;case 12:sa(u,d,a);break;case 31:sa(u,d,a),a&&y&4&&V0(u,d);break;case 13:sa(u,d,a),a&&y&4&&k0(u,d);break;case 22:d.memoizedState===null&&sa(u,d,a),bo(d,d.return);break;case 30:break;default:sa(u,d,a)}n=n.sibling}}function Vf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&lo(a))}function kf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)j0(t,n,a,o),n=n.sibling}function j0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),u&2048&&Mo(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t)));break;case 12:if(u&2048){Ei(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,A=d.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){zt(n,n.return,H)}}else Ei(t,n,a,o);break;case 31:Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Ei(t,n,a,o):Eo(t,n):d._visibility&2?Ei(t,n,a,o):(d._visibility|=2,ls(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Vf(y,n);break;case 24:Ei(t,n,a,o),u&2048&&kf(n.alternate,n);break;default:Ei(t,n,a,o)}}function ls(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,A=a,H=o,ee=y.flags;switch(y.tag){case 0:case 11:case 15:ls(d,y,A,H,u),Mo(8,y);break;case 23:break;case 22:var pe=y.stateNode;y.memoizedState!==null?pe._visibility&2?ls(d,y,A,H,u):Eo(d,y):(pe._visibility|=2,ls(d,y,A,H,u)),u&&ee&2048&&Vf(y.alternate,y);break;case 24:ls(d,y,A,H,u),u&&ee&2048&&kf(y.alternate,y);break;default:ls(d,y,A,H,u)}n=n.sibling}}function Eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&Vf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&kf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var To=8192;function cs(t,n,a){if(t.subtreeFlags&To)for(t=t.child;t!==null;)q0(t,n,a),t=t.sibling}function q0(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&To&&t.memoizedState!==null&&SS(a,bi,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var o=bi;bi=pc(t.stateNode.containerInfo),cs(t,n,a),bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=To,To=16777216,cs(t,n,a),To=o):cs(t,n,a));break;default:cs(t,n,a)}}function Y0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,K0(o,t)}Y0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Z0(t),t=t.sibling}function Z0(t){switch(t.tag){case 0:case 11:case 15:Ao(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:Ao(t);break;case 12:Ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,tc(t)):Ao(t);break;default:Ao(t)}}function tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,K0(o,t)}Y0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tc(n));break;default:tc(n)}t=t.sibling}}function K0(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:lo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else e:for(a=t;_n!==null;){o=_n;var u=o.sibling,d=o.return;if(H0(o),o===a){_n=null;break e}if(u!==null){u.return=d,_n=u;break e}_n=d}}}var Fy={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},By=typeof WeakMap=="function"?WeakMap:Map,Lt=0,jt=null,xt=null,St=0,It=0,Jn=null,za=!1,us=!1,Xf=!1,oa=0,tn=0,Ha=0,br=0,Wf=0,$n=0,fs=0,Ro=null,Xn=null,jf=!1,nc=0,Q0=0,ic=1/0,ac=null,Ga=null,pn=0,Va=null,ds=null,la=0,qf=0,Yf=null,J0=null,Co=0,Zf=null;function ei(){return(Lt&2)!==0&&St!==0?St&-St:F.T!==null?td():Ys()}function $0(){if($n===0)if((St&536870912)===0||bt){var t=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Wn(t,n,a){(t===jt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(hs(t,0),ka(t,St,$n,!1)),Dn(t,a),((Lt&2)===0||t!==jt)&&(t===jt&&((Lt&2)===0&&(br|=a),tn===4&&ka(t,St,$n,!1)),Fi(t))}function eg(t,n,a){if((Lt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ne(t,n),u=o?Hy(t,n):Qf(t,n,!0),d=o;do{if(u===0){us&&!o&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Iy(a)){u=Qf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var A=t;u=Ro;var H=A.current.memoizedState.isDehydrated;if(H&&(hs(A,y).flags|=256),y=Qf(A,y,!1),y!==2){if(Xf&&!H){A.errorRecoveryDisabledLanes|=d,br|=d,u=4;break e}d=Xn,Xn=u,d!==null&&(Xn===null?Xn=d:Xn.push.apply(Xn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){hs(t,0),ka(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,$n,!za);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=nc+300-b(),10<u)){if(ka(o,n,$n,!za),Se(o,0,!0)!==0)break e;la=n,o.timeoutHandle=Ng(tg.bind(null,o,a,Xn,ac,jf,n,$n,br,fs,za,d,"Throttled",-0,0),u);break e}tg(o,a,Xn,ac,jf,n,$n,br,fs,za,d,null,-0,0)}}break}while(!0);Fi(t)}function tg(t,n,a,o,u,d,y,A,H,ee,pe,xe,ae,fe){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},q0(n,d,xe);var Ye=(d&62914560)===d?nc-b():(d&4194048)===d?Q0-b():0;if(Ye=MS(xe,Ye),Ye!==null){la=d,t.cancelPendingCommit=Ye(cg.bind(null,t,n,d,a,o,u,y,A,H,pe,xe,null,ae,fe)),ka(t,d,y,!ee);return}}cg(t,n,d,a,o,u,y,A,H)}function Iy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Yn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,o){n&=~Wf,n&=~br,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-ze(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&gl(t,a,n)}function rc(){return(Lt&6)===0?(wo(0),!1):!0}function Kf(){if(xt!==null){if(It===0)var t=xt.return;else t=xt,Qi=pr=null,df(t),is=null,uo=0,t=xt;for(;t!==null;)U0(t.alternate,t),t=t.return;xt=null}}function hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,aS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,Kf(),jt=t,xt=a=Zi(t.current,null),St=n,It=0,Jn=null,za=!1,us=Ne(t,n),Xf=!1,fs=$n=Wf=br=Ha=tn=0,Xn=Ro=null,jf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ze(o),d=1<<u;n|=t[u],o&=~d}return oa=n,Al(),a}function ng(t,n){ht=null,F.H=xo,n===ns||n===Ol?(n=vm(),It=3):n===$u?(n=vm(),It=4):It=n===Cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,xt===null&&(tn=1,Yl(t,oi(n,t.current)))}function ig(){var t=Kn.current;return t===null?!0:(St&4194048)===St?fi===null:(St&62914560)===St||(St&536870912)!==0?t===fi:!1}function ag(){var t=F.H;return F.H=xo,t===null?xo:t}function rg(){var t=F.A;return F.A=Fy,t}function sc(){tn=4,za||(St&4194048)!==St&&Kn.current!==null||(us=!0),(Ha&134217727)===0&&(br&134217727)===0||jt===null||ka(jt,St,$n,!1)}function Qf(t,n,a){var o=Lt;Lt|=2;var u=ag(),d=rg();(jt!==t||St!==n)&&(ac=null,hs(t,n)),n=!1;var y=tn;e:do try{if(It!==0&&xt!==null){var A=xt,H=Jn;switch(It){case 8:Kf(),y=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var ee=It;if(It=0,Jn=null,ps(t,A,H,ee),a&&us){y=0;break e}break;default:ee=It,It=0,Jn=null,ps(t,A,H,ee)}}zy(),y=tn;break}catch(pe){ng(t,pe)}while(!0);return n&&t.shellSuspendCounter++,Qi=pr=null,Lt=o,F.H=u,F.A=d,xt===null&&(jt=null,St=0,Al()),y}function zy(){for(;xt!==null;)sg(xt)}function Hy(t,n){var a=Lt;Lt|=2;var o=ag(),u=rg();jt!==t||St!==n?(ac=null,ic=b()+500,hs(t,n)):us=Ne(t,n);e:do try{if(It!==0&&xt!==null){n=xt;var d=Jn;t:switch(It){case 1:It=0,Jn=null,ps(t,n,d,1);break;case 2:case 9:if(gm(d)){It=0,Jn=null,og(n);break}n=function(){It!==2&&It!==9||jt!==t||(It=7),Fi(t)},d.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:gm(d)?(It=0,Jn=null,og(n)):(It=0,Jn=null,ps(t,n,d,7));break;case 5:var y=null;switch(xt.tag){case 26:y=xt.memoizedState;case 5:case 27:var A=xt;if(y?jg(y):A.stateNode.complete){It=0,Jn=null;var H=A.sibling;if(H!==null)xt=H;else{var ee=A.return;ee!==null?(xt=ee,oc(ee)):xt=null}break t}}It=0,Jn=null,ps(t,n,d,5);break;case 6:It=0,Jn=null,ps(t,n,d,6);break;case 8:Kf(),tn=6;break e;default:throw Error(s(462))}}Gy();break}catch(pe){ng(t,pe)}while(!0);return Qi=pr=null,F.H=o,F.A=u,Lt=a,xt!==null?0:(jt=null,St=0,Al(),tn)}function Gy(){for(;xt!==null&&!We();)sg(xt)}function sg(t){var n=D0(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?oc(t):xt=n}function og(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=E0(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=E0(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:df(n);default:U0(a,n),n=xt=rm(n,oa),n=D0(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?oc(t):xt=n}function ps(t,n,a,o){Qi=pr=null,df(n),is=null,uo=0;var u=n.return;try{if(wy(t,u,n,a,St)){tn=1,Yl(t,oi(a,t.current)),xt=null;return}}catch(d){if(u!==null)throw xt=u,d;tn=1,Yl(t,oi(a,t.current)),xt=null;return}n.flags&32768?(bt||o===1?t=!0:us||(St&536870912)!==0?t=!1:(za=t=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),lg(n,t)):oc(n)}function oc(t){var n=t;do{if((n.flags&32768)!==0){lg(n,za);return}t=n.return;var a=Uy(n.alternate,n,oa);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);tn===0&&(tn=5)}function lg(t,n){do{var a=Ly(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);tn=6,xt=null}function cg(t,n,a,o,u,d,y,A,H){t.cancelPendingCommit=null;do lc();while(pn!==0);if((Lt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Iu,xi(t,a,d,y,A,H),t===jt&&(xt=jt=null,St=0),ds=n,Va=t,la=a,qf=d,Yf=u,J0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Wy(ce,function(){return pg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=G.p,G.p=2,y=Lt,Lt|=4;try{Oy(t,n,a)}finally{Lt=y,G.p=u,F.T=o}}pn=1,ug(),fg(),dg()}}function ug(){if(pn===1){pn=0;var t=Va,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=Lt;Lt|=4;try{X0(n,t);var d=cd,y=Kp(t.containerInfo),A=d.focusedElem,H=d.selectionRange;if(y!==A&&A&&A.ownerDocument&&Zp(A.ownerDocument.documentElement,A)){if(H!==null&&Lu(A)){var ee=H.start,pe=H.end;if(pe===void 0&&(pe=ee),"selectionStart"in A)A.selectionStart=ee,A.selectionEnd=Math.min(pe,A.value.length);else{var xe=A.ownerDocument||document,ae=xe&&xe.defaultView||window;if(ae.getSelection){var fe=ae.getSelection(),Ye=A.textContent.length,st=Math.min(H.start,Ye),kt=H.end===void 0?st:Math.min(H.end,Ye);!fe.extend&&st>kt&&(y=kt,kt=st,st=y);var Z=Yp(A,st),X=Yp(A,kt);if(Z&&X&&(fe.rangeCount!==1||fe.anchorNode!==Z.node||fe.anchorOffset!==Z.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var J=xe.createRange();J.setStart(Z.node,Z.offset),fe.removeAllRanges(),st>kt?(fe.addRange(J),fe.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),fe.addRange(J))}}}}for(xe=[],fe=A;fe=fe.parentNode;)fe.nodeType===1&&xe.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var ge=xe[A];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}yc=!!ld,cd=ld=null}finally{Lt=u,G.p=o,F.T=a}}t.current=n,pn=2}}function fg(){if(pn===2){pn=0;var t=Va,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=Lt;Lt|=4;try{z0(t,n.alternate,n)}finally{Lt=u,G.p=o,F.T=a}}pn=3}}function dg(){if(pn===4||pn===3){pn=0,U();var t=Va,n=ds,a=la,o=J0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,ds=Va=null,hg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ga=null),zr(a),n=n.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=G.p,G.p=2,F.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var A=o[y];d(A.value,{componentStack:A.stack})}}finally{F.T=n,G.p=u}}(la&3)!==0&&lc(),Fi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Zf?Co++:(Co=0,Zf=t):Co=0,wo(0)}}function hg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,lo(n)))}function lc(){return ug(),fg(),dg(),pg()}function pg(){if(pn!==5)return!1;var t=Va,n=qf;qf=0;var a=zr(la),o=F.T,u=G.p;try{G.p=32>a?32:a,F.T=null,a=Yf,Yf=null;var d=Va,y=la;if(pn=0,ds=Va=null,la=0,(Lt&6)!==0)throw Error(s(331));var A=Lt;if(Lt|=4,Z0(d.current),j0(d,d.current,y,a),Lt=A,wo(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ee,d)}catch{}return!0}finally{G.p=u,F.T=o,hg(t,n)}}function mg(t,n,a){n=oi(a,n),n=Rf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Dn(t,2),Fi(t))}function zt(t,n,a){if(t.tag===3)mg(t,t,a);else for(;n!==null;){if(n.tag===3){mg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){t=oi(a,t),a=g0(2),o=Pa(n,a,2),o!==null&&(_0(a,o,n,t),Dn(o,2),Fi(o));break}}n=n.return}}function Jf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new By;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Xf=!0,u.add(a),t=Vy.bind(null,t,n,a),n.then(t,t))}function Vy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(St&a)===a&&(tn===4||tn===3&&(St&62914560)===St&&300>b()-nc?(Lt&2)===0&&hs(t,0):Wf|=a,fs===St&&(fs=0)),Fi(t)}function gg(t,n){n===0&&(n=Ft()),t=fr(t,n),t!==null&&(Dn(t,n),Fi(t))}function ky(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),gg(t,a)}function Xy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),gg(t,a)}function Wy(t,n){return Ze(t,n)}var cc=null,ms=null,$f=!1,uc=!1,ed=!1,Xa=0;function Fi(t){t!==ms&&t.next===null&&(ms===null?cc=ms=t:ms=ms.next=t),uc=!0,$f||($f=!0,qy())}function wo(t,n){if(!ed&&uc){ed=!0;do for(var a=!1,o=cc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-ze(42|t)+1)-1,d&=u&~(y&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,yg(o,d))}else d=St,d=Se(o,o===jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ne(o,d)||(a=!0,yg(o,d));o=o.next}while(a);ed=!1}}function jy(){_g()}function _g(){uc=$f=!1;var t=0;Xa!==0&&iS()&&(t=Xa);for(var n=b(),a=null,o=cc;o!==null;){var u=o.next,d=vg(o,n);d===0?(o.next=null,a===null?cc=u:a.next=u,u===null&&(ms=a)):(a=o,(t!==0||(d&3)!==0)&&(uc=!0)),o=u}pn!==0&&pn!==5||wo(t),Xa!==0&&(Xa=0)}function vg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-ze(d),A=1<<y,H=u[y];H===-1?((A&a)===0||(A&o)!==0)&&(u[y]=ct(A,n)):H<=n&&(t.expiredLanes|=A),d&=~A}if(n=jt,a=St,a=Se(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&De(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ne(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&De(o),zr(a)){case 2:case 8:a=ve;break;case 32:a=ce;break;case 268435456:a=Ue;break;default:a=ce}return o=xg.bind(null,t),a=Ze(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&De(o),t.callbackPriority=2,t.callbackNode=null,2}function xg(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(lc()&&t.callbackNode!==a)return null;var o=St;return o=Se(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(eg(t,o,n),vg(t,b()),t.callbackNode!=null&&t.callbackNode===a?xg.bind(null,t):null)}function yg(t,n){if(lc())return null;eg(t,n,!0)}function qy(){rS(function(){(Lt&6)!==0?Ze(de,jy):_g()})}function td(){if(Xa===0){var t=es;t===0&&(t=Fe,Fe<<=1,(Fe&261888)===0&&(Fe=256)),Xa=t}return Xa}function Sg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:vl(""+t)}function Mg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Sg((u[xn]||null).action),y=o.submitter;y&&(n=(n=y[xn]||null)?Sg(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var A=new Ml("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var H=y?Mg(u,y):new FormData(u);Sf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(A.preventDefault(),H=y?Mg(u,y):new FormData(u),Sf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var nd=0;nd<Bu.length;nd++){var id=Bu[nd],Zy=id.toLowerCase(),Ky=id[0].toUpperCase()+id.slice(1);Mi(Zy,"on"+Ky)}Mi($p,"onAnimationEnd"),Mi(em,"onAnimationIteration"),Mi(tm,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(dy,"onTransitionRun"),Mi(hy,"onTransitionStart"),Mi(py,"onTransitionCancel"),Mi(nm,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function bg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],H=A.instance,ee=A.currentTarget;if(A=A.listener,H!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=ee;try{d(u)}catch(pe){Tl(pe)}u.currentTarget=null,d=H}else for(y=0;y<o.length;y++){if(A=o[y],H=A.instance,ee=A.currentTarget,A=A.listener,H!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=ee;try{d(u)}catch(pe){Tl(pe)}u.currentTarget=null,d=H}}}}function yt(t,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var o=t+"__bubble";a.has(o)||(Eg(n,t,2,!1),a.add(o))}function ad(t,n,a){var o=0;n&&(o|=4),Eg(a,t,o,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function rd(t){if(!t[fc]){t[fc]=!0,Y.forEach(function(a){a!=="selectionchange"&&(Qy.has(a)||ad(a,!1,t),ad(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[fc]||(n[fc]=!0,ad("selectionchange",!1,n))}}function Eg(t,n,a,o){switch($g(n)){case 2:var u=TS;break;case 8:u=AS;break;default:u=yd}a=u.bind(null,n,a,t),u=void 0,!Eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function sd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=Ta(A),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){o=d=y;continue e}A=A.parentNode}}o=o.return}wp(function(){var ee=d,pe=Mu(a),xe=[];e:{var ae=im.get(t);if(ae!==void 0){var fe=Ml,Ye=t;switch(t){case"keypress":if(yl(a)===0)break e;case"keydown":case"keyup":fe=Xx;break;case"focusin":Ye="focus",fe=Cu;break;case"focusout":Ye="blur",fe=Cu;break;case"beforeblur":case"afterblur":fe=Cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=qx;break;case $p:case em:case tm:fe=Px;break;case nm:fe=Zx;break;case"scroll":case"scrollend":fe=Dx;break;case"wheel":fe=Qx;break;case"copy":case"cut":case"paste":fe=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Op;break;case"toggle":case"beforetoggle":fe=$x}var st=(n&4)!==0,kt=!st&&(t==="scroll"||t==="scrollend"),Z=st?ae!==null?ae+"Capture":null:ae;st=[];for(var X=ee,J;X!==null;){var ge=X;if(J=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||J===null||Z===null||(ge=Qs(X,Z),ge!=null&&st.push(No(X,ge,J))),kt)break;X=X.return}0<st.length&&(ae=new fe(ae,Ye,null,a,pe),xe.push({event:ae,listeners:st}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",ae&&a!==Su&&(Ye=a.relatedTarget||a.fromElement)&&(Ta(Ye)||Ye[yi]))break e;if((fe||ae)&&(ae=pe.window===pe?pe:(ae=pe.ownerDocument)?ae.defaultView||ae.parentWindow:window,fe?(Ye=a.relatedTarget||a.toElement,fe=ee,Ye=Ye?Ta(Ye):null,Ye!==null&&(kt=c(Ye),st=Ye.tag,Ye!==kt||st!==5&&st!==27&&st!==6)&&(Ye=null)):(fe=null,Ye=ee),fe!==Ye)){if(st=Up,ge="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(st=Op,ge="onPointerLeave",Z="onPointerEnter",X="pointer"),kt=fe==null?ae:or(fe),J=Ye==null?ae:or(Ye),ae=new st(ge,X+"leave",fe,a,pe),ae.target=kt,ae.relatedTarget=J,ge=null,Ta(pe)===ee&&(st=new st(Z,X+"enter",Ye,a,pe),st.target=J,st.relatedTarget=kt,ge=st),kt=ge,fe&&Ye)t:{for(st=Jy,Z=fe,X=Ye,J=0,ge=Z;ge;ge=st(ge))J++;ge=0;for(var tt=X;tt;tt=st(tt))ge++;for(;0<J-ge;)Z=st(Z),J--;for(;0<ge-J;)X=st(X),ge--;for(;J--;){if(Z===X||X!==null&&Z===X.alternate){st=Z;break t}Z=st(Z),X=st(X)}st=null}else st=null;fe!==null&&Tg(xe,ae,fe,st,!1),Ye!==null&&kt!==null&&Tg(xe,kt,Ye,st,!0)}}e:{if(ae=ee?or(ee):window,fe=ae.nodeName&&ae.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ae.type==="file")var Ct=Vp;else if(Hp(ae))if(kp)Ct=cy;else{Ct=oy;var $e=sy}else fe=ae.nodeName,!fe||fe.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ee&&Si(ee.elementType)&&(Ct=Vp):Ct=ly;if(Ct&&(Ct=Ct(t,ee))){Gp(xe,Ct,a,pe);break e}$e&&$e(t,ae,ee),t==="focusout"&&ee&&ae.type==="number"&&ee.memoizedProps.value!=null&&Sn(ae,"number",ae.value)}switch($e=ee?or(ee):window,t){case"focusin":(Hp($e)||$e.contentEditable==="true")&&(jr=$e,Ou=ee,ro=null);break;case"focusout":ro=Ou=jr=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,Qp(xe,a,pe);break;case"selectionchange":if(fy)break;case"keydown":case"keyup":Qp(xe,a,pe)}var mt;if(Du)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Wr?Ip(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Pp&&a.locale!=="ko"&&(Wr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Wr&&(mt=Dp()):(Ca=pe,Tu="value"in Ca?Ca.value:Ca.textContent,Wr=!0)),$e=dc(ee,Mt),0<$e.length&&(Mt=new Lp(Mt,t,null,a,pe),xe.push({event:Mt,listeners:$e}),mt?Mt.data=mt:(mt=zp(a),mt!==null&&(Mt.data=mt)))),(mt=ty?ny(t,a):iy(t,a))&&(Mt=dc(ee,"onBeforeInput"),0<Mt.length&&($e=new Lp("onBeforeInput","beforeinput",null,a,pe),xe.push({event:$e,listeners:Mt}),$e.data=mt)),Yy(xe,t,ee,a,pe)}bg(xe,n)})}function No(t,n,a){return{instance:t,listener:n,currentTarget:a}}function dc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Qs(t,a),u!=null&&o.unshift(No(t,u,d)),u=Qs(t,n),u!=null&&o.push(No(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Jy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tg(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var A=a,H=A.alternate,ee=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||ee===null||(H=ee,u?(ee=Qs(a,d),ee!=null&&y.unshift(No(a,ee,H))):u||(ee=Qs(a,d),ee!=null&&y.push(No(a,ee,H)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var $y=/\r\n?/g,eS=/\u0000|\uFFFD/g;function Ag(t){return(typeof t=="string"?t:""+t).replace($y,`
`).replace(eS,"")}function Rg(t,n){return n=Ag(n),Ag(t)===n}function Vt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hn(t,""+o);break;case"className":it(t,"class",o);break;case"tabIndex":it(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":it(t,a,o);break;case"style":Vr(t,o,d);break;case"data":if(n!=="object"){it(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=qi);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=vl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Ke(t,"popover",o);break;case"xlinkActuate":Qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ke(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cx.get(a)||a,Ke(t,a,o))}}function od(t,n,a,o,u,d){switch(a){case"style":Vr(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?hn(t,o):(typeof o=="number"||typeof o=="bigint")&&hn(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[xn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ke(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,d,y,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var A=d=y=u=null,H=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":y=pe;break;case"checked":H=pe;break;case"defaultChecked":ee=pe;break;case"value":d=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Vt(t,n,o,pe,a,null)}}ji(t,d,A,H,ee,y,u,!1);return;case"select":yt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Vt(t,n,u,A,a,null)}n=d,a=y,t.multiple=!!o,n!=null?ri(t,!!o,n,!1):a!=null&&ri(t,!!o,a,!0);return;case"textarea":yt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Vt(t,n,y,A,a,null)}Mn(t,o,u,d);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,H,o,a,null));return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<Do.length;o++)yt(Do[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,ee,o,a,null)}return;default:if(Si(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&od(t,n,pe,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Vt(t,n,A,o,a,null))}function tS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,A=null,H=null,ee=null,pe=null;for(fe in a){var xe=a[fe];if(a.hasOwnProperty(fe)&&xe!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":H=xe;default:o.hasOwnProperty(fe)||Vt(t,n,fe,null,o,xe)}}for(var ae in o){var fe=o[ae];if(xe=a[ae],o.hasOwnProperty(ae)&&(fe!=null||xe!=null))switch(ae){case"type":d=fe;break;case"name":u=fe;break;case"checked":ee=fe;break;case"defaultChecked":pe=fe;break;case"value":y=fe;break;case"defaultValue":A=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==xe&&Vt(t,n,ae,fe,o,xe)}}yn(t,y,A,H,ee,pe,d,u);return;case"select":fe=y=A=ae=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":fe=H;default:o.hasOwnProperty(d)||Vt(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":ae=d;break;case"defaultValue":A=d;break;case"multiple":y=d;default:d!==H&&Vt(t,n,u,d,o,H)}n=A,a=y,o=fe,ae!=null?ri(t,!!a,ae,!1):!!o!=!!a&&(n!=null?ri(t,!!a,n,!0):ri(t,!!a,a?[]:"",!1));return;case"textarea":fe=ae=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Vt(t,n,A,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":ae=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Vt(t,n,y,u,o,d)}Bt(t,ae,fe);return;case"option":for(var Ye in a)ae=a[Ye],a.hasOwnProperty(Ye)&&ae!=null&&!o.hasOwnProperty(Ye)&&(Ye==="selected"?t.selected=!1:Vt(t,n,Ye,null,o,ae));for(H in o)ae=o[H],fe=a[H],o.hasOwnProperty(H)&&ae!==fe&&(ae!=null||fe!=null)&&(H==="selected"?t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":Vt(t,n,H,ae,o,fe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in a)ae=a[st],a.hasOwnProperty(st)&&ae!=null&&!o.hasOwnProperty(st)&&Vt(t,n,st,null,o,ae);for(ee in o)if(ae=o[ee],fe=a[ee],o.hasOwnProperty(ee)&&ae!==fe&&(ae!=null||fe!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,n));break;default:Vt(t,n,ee,ae,o,fe)}return;default:if(Si(n)){for(var kt in a)ae=a[kt],a.hasOwnProperty(kt)&&ae!==void 0&&!o.hasOwnProperty(kt)&&od(t,n,kt,void 0,o,ae);for(pe in o)ae=o[pe],fe=a[pe],!o.hasOwnProperty(pe)||ae===fe||ae===void 0&&fe===void 0||od(t,n,pe,ae,o,fe);return}}for(var Z in a)ae=a[Z],a.hasOwnProperty(Z)&&ae!=null&&!o.hasOwnProperty(Z)&&Vt(t,n,Z,null,o,ae);for(xe in o)ae=o[xe],fe=a[xe],!o.hasOwnProperty(xe)||ae===fe||ae==null&&fe==null||Vt(t,n,xe,ae,o,fe)}function Cg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,A=u.duration;if(d&&A&&Cg(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ee=H.startTime;if(ee>A)break;var pe=H.transferSize,xe=H.initiatorType;pe&&Cg(xe)&&(H=H.responseEnd,y+=pe*(H<A?1:(A-ee)/(H-ee)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ld=null,cd=null;function hc(t){return t.nodeType===9?t:t.ownerDocument}function wg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ud(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fd=null;function iS(){var t=window.event;return t&&t.type==="popstate"?t===fd?!1:(fd=t,!0):(fd=null,!1)}var Ng=typeof setTimeout=="function"?setTimeout:void 0,aS=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,rS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(t){return Ug.resolve(null).then(t).catch(sS)}:Ng;function sS(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function Lg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),xs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Uo(a);for(var d=a.firstChild;d;){var y=d.nextSibling,A=d.nodeName;d[sr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Uo(t.ownerDocument.body);a=u}while(a);xs(n)}function Og(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function dd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":dd(a),Ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function oS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[sr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function lS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function Pg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function hd(t){return t.data==="$?"||t.data==="$~"}function pd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var md=null;function Fg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Bg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Ig(t,n,a){switch(n=hc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ks(t)}var hi=new Map,zg=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=G.d;G.d={f:uS,r:fS,D:dS,C:hS,L:pS,m:mS,X:_S,S:gS,M:vS};function uS(){var t=ca.f(),n=rc();return t||n}function fS(t){var n=Aa(t);n!==null&&n.tag===5&&n.type==="form"?n0(n):ca.r(t)}var gs=typeof document>"u"?null:document;function Hg(t,n,a){var o=gs;if(o&&typeof n=="string"&&n){var u=ft(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),zg.has(u)||(zg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),R(n),o.head.appendChild(n)))}}function dS(t){ca.D(t),Hg("dns-prefetch",t,null)}function hS(t,n){ca.C(t,n),Hg("preconnect",t,n)}function pS(t,n,a){ca.L(t,n,a);var o=gs;if(o&&t&&n){var u='link[rel="preload"][as="'+ft(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ft(a.imageSizes)+'"]')):u+='[href="'+ft(t)+'"]';var d=u;switch(n){case"style":d=_s(t);break;case"script":d=vs(t)}hi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Lo(d))||n==="script"&&o.querySelector(Oo(d))||(n=o.createElement("link"),Cn(n,"link",t),R(n),o.head.appendChild(n)))}}function mS(t,n){ca.m(t,n);var a=gs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ft(o)+'"][href="'+ft(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=vs(t)}if(!hi.has(d)&&(t=g({rel:"modulepreload",href:t},n),hi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oo(d)))return}o=a.createElement("link"),Cn(o,"link",t),R(o),a.head.appendChild(o)}}}function gS(t,n,a){ca.S(t,n,a);var o=gs;if(o&&t){var u=Ra(o).hoistableStyles,d=_s(t);n=n||"default";var y=u.get(d);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Lo(d)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(d))&&gd(t,a);var H=y=o.createElement("link");R(H),Cn(H,"link",t),H._p=new Promise(function(ee,pe){H.onload=ee,H.onerror=pe}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,mc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(d,y)}}}function _S(t,n){ca.X(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),d=o.get(u);d||(d=a.querySelector(Oo(u)),d||(t=g({src:t,async:!0},n),(n=hi.get(u))&&_d(t,n),d=a.createElement("script"),R(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function vS(t,n){ca.M(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),d=o.get(u);d||(d=a.querySelector(Oo(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&_d(t,n),d=a.createElement("script"),R(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Gg(t,n,a,o){var u=(u=ne.current)?pc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_s(a.href);var d=Ra(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Lo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),d||xS(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function _s(t){return'href="'+ft(t)+'"'}function Lo(t){return'link[rel="stylesheet"]['+t+"]"}function Vg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function xS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),R(n),t.head.appendChild(n))}function vs(t){return'[src="'+ft(t)+'"]'}function Oo(t){return"script[async]"+t}function kg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ft(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),R(o),Cn(o,"style",u),mc(o,a.precedence,t),n.instance=o;case"stylesheet":u=_s(a.href);var d=t.querySelector(Lo(u));if(d)return n.state.loading|=4,n.instance=d,R(d),d;o=Vg(a),(u=hi.get(u))&&gd(o,u),d=(t.ownerDocument||t).createElement("link"),R(d);var y=d;return y._p=new Promise(function(A,H){y.onload=A,y.onerror=H}),Cn(d,"link",o),n.state.loading|=4,mc(d,a.precedence,t),n.instance=d;case"script":return d=vs(a.src),(u=t.querySelector(Oo(d)))?(n.instance=u,R(u),u):(o=a,(u=hi.get(d))&&(o=g({},a),_d(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),R(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,mc(o,a.precedence,t));return n.instance}function mc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function gd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var gc=null;function Xg(t,n,a){if(gc===null){var o=new Map,u=gc=new Map;u.set(a,o)}else u=gc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[sr]||d[on]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var A=o.get(y);A?A.push(d):o.set(y,[d])}}return o}function Wg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function yS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function jg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function SS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_s(o.href),d=n.querySelector(Lo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=_c.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,R(d);return}d=n.ownerDocument||n,o=Vg(o),(u=hi.get(u))&&gd(o,u),d=d.createElement("link"),R(d);var y=d;y._p=new Promise(function(A,H){y.onload=A,y.onerror=H}),Cn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_c.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var vd=0;function MS(t,n){return t.stylesheets&&t.count===0&&xc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&vd===0&&(vd=62500*nS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>vd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vc=null;function xc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vc=new Map,n.forEach(bS,t),vc=null,_c.call(t))}function bS(t,n){if(!(n.state.loading&4)){var a=vc.get(t);if(a)var o=a.get(null);else{a=new Map,vc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=_c.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Po={$$typeof:N,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function ES(t,n,a,o,u,d,y,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function qg(t,n,a,o,u,d,y,A,H,ee,pe,xe){return t=new ES(t,n,a,y,H,ee,pe,xe,A),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),t.current=d,d.stateNode=t,n=Ku(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},ef(d),t}function Yg(t){return t?(t=Zr,t):Zr}function Zg(t,n,a,o,u,d){u=Yg(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Pa(t,o,n),a!==null&&(Wn(a,t,n),ho(a,t,n))}function Kg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function xd(t,n){Kg(t,n),(t=t.alternate)&&Kg(t,n)}function Qg(t){if(t.tag===13||t.tag===31){var n=fr(t,67108864);n!==null&&Wn(n,t,67108864),xd(t,67108864)}}function Jg(t){if(t.tag===13||t.tag===31){var n=ei();n=qs(n);var a=fr(t,n);a!==null&&Wn(a,t,n),xd(t,n)}}var yc=!0;function TS(t,n,a,o){var u=F.T;F.T=null;var d=G.p;try{G.p=2,yd(t,n,a,o)}finally{G.p=d,F.T=u}}function AS(t,n,a,o){var u=F.T;F.T=null;var d=G.p;try{G.p=8,yd(t,n,a,o)}finally{G.p=d,F.T=u}}function yd(t,n,a,o){if(yc){var u=Sd(o);if(u===null)sd(t,n,o,Sc,a),e_(t,o);else if(CS(u,t,n,a,o))o.stopPropagation();else if(e_(t,o),n&4&&-1<RS.indexOf(t)){for(;u!==null;){var d=Aa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Te(d.pendingLanes);if(y!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var H=1<<31-ze(y);A.entanglements[1]|=H,y&=~H}Fi(d),(Lt&6)===0&&(ic=b()+500,wo(0))}}break;case 31:case 13:A=fr(d,2),A!==null&&Wn(A,d,2),rc(),xd(d,2)}if(d=Sd(o),d===null&&sd(t,n,o,Sc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else sd(t,n,o,null,a)}}function Sd(t){return t=Mu(t),Md(t)}var Sc=null;function Md(t){if(Sc=null,t=Ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Sc=t,null}function $g(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case de:return 2;case ve:return 8;case ce:case Xe:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var bd=!1,ja=null,qa=null,Ya=null,Fo=new Map,Bo=new Map,Za=[],RS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e_(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Io(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&Qg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function CS(t,n,a,o,u){switch(n){case"focusin":return ja=Io(ja,t,n,a,o,u),!0;case"dragenter":return qa=Io(qa,t,n,a,o,u),!0;case"mouseover":return Ya=Io(Ya,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Fo.set(d,Io(Fo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Bo.set(d,Io(Bo.get(d)||null,t,n,a,o,u)),!0}return!1}function t_(t){var n=Ta(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Ui(t.priority,function(){Jg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ui(t.priority,function(){Jg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Sd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Su=o,a.target.dispatchEvent(o),Su=null}else return n=Aa(a),n!==null&&Qg(n),t.blockedOn=a,!1;n.shift()}return!0}function n_(t,n,a){Mc(t)&&a.delete(n)}function wS(){bd=!1,ja!==null&&Mc(ja)&&(ja=null),qa!==null&&Mc(qa)&&(qa=null),Ya!==null&&Mc(Ya)&&(Ya=null),Fo.forEach(n_),Bo.forEach(n_)}function bc(t,n){t.blockedOn===n&&(t.blockedOn=null,bd||(bd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,wS)))}var Ec=null;function i_(t){Ec!==t&&(Ec=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Md(o||a)===null)continue;break}var d=Aa(a);d!==null&&(t.splice(n,3),n-=3,Sf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xs(t){function n(H){return bc(H,t)}ja!==null&&bc(ja,t),qa!==null&&bc(qa,t),Ya!==null&&bc(Ya,t),Fo.forEach(n),Bo.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[xn]||null;if(typeof d=="function")y||i_(a);else if(y){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[xn]||null)A=y.formAction;else if(Md(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),i_(a)}}}function a_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ed(t){this._internalRoot=t}Tc.prototype.render=Ed.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ei();Zg(a,o,t,n,null,null)},Tc.prototype.unmount=Ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Zg(t.current,2,null,t,null,null),rc(),n[yi]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ys();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&t_(t)}};var r_=e.version;if(r_!=="19.2.4")throw Error(s(527,r_,"19.2.4"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var DS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Ee=Ac.inject(DS),Ae=Ac}catch{}}return Ho.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=d0,d=h0,y=p0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=qg(t,1,!1,null,null,a,o,null,u,d,y,a_),t[yi]=n.current,rd(t),new Ed(n)},Ho.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=d0,y=h0,A=p0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=qg(t,1,!0,n,a??null,o,u,H,d,y,A,a_),n.context=Yg(null),a=n.current,o=ei(),o=qs(o),u=Oa(o),u.callback=null,Pa(a,u,o),a=o,n.current.lanes=a,Dn(n,a),Fi(n),t[yi]=n.current,rd(t),new Tc(n)},Ho.version="19.2.4",Ho}var m_;function HS(){if(m_)return Rd.exports;m_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Rd.exports=zS(),Rd.exports}var GS=HS();var g_="popstate";function VS(r={}){function e(s,l){let{pathname:c,search:f,hash:h}=s.location;return hh("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:el(l)}return XS(e,i,null,r)}function $t(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ki(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kS(){return Math.random().toString(36).substring(2,10)}function __(r,e){return{usr:r.state,key:r.key,idx:e}}function hh(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Gs(e):e,state:i,key:e&&e.key||s||kS()}}function el({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Gs(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function XS(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,h="POP",m=null,p=_();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function _(){return(f.state||{idx:null}).idx}function g(){h="POP";let S=_(),x=S==null?null:S-p;p=S,m&&m({action:h,location:T.location,delta:x})}function v(S,x){h="PUSH";let w=hh(T.location,S,x);p=_()+1;let N=__(w,p),O=T.createHref(w);try{f.pushState(N,"",O)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(O)}c&&m&&m({action:h,location:T.location,delta:1})}function M(S,x){h="REPLACE";let w=hh(T.location,S,x);p=_();let N=__(w,p),O=T.createHref(w);f.replaceState(N,"",O),c&&m&&m({action:h,location:T.location,delta:0})}function E(S){return WS(S)}let T={get action(){return h},get location(){return r(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(g_,g),m=S,()=>{l.removeEventListener(g_,g),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let x=E(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:M,go(S){return f.go(S)}};return T}function WS(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$t(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:el(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function Tv(r,e,i="/"){return jS(r,e,i,!1)}function jS(r,e,i,s){let l=typeof e=="string"?Gs(e):e,c=ya(l.pathname||"/",i);if(c==null)return null;let f=Av(r);qS(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=aM(c);h=nM(f[m],p,s)}return h}function Av(r,e=[],i=[],s="",l=!1){let c=(f,h,m=l,p)=>{let _={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(s)&&m)return;$t(_.relativePath.startsWith(s),`Absolute route path "${_.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(s.length)}let g=_a([s,_.relativePath]),v=i.concat(_);f.children&&f.children.length>0&&($t(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Av(f.children,e,v,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:eM(g,f.index),routesMeta:v})};return r.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Rv(f.path))c(f,h,!0,m)}),e}function Rv(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Rv(s.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>r.startsWith("/")&&m===""?"/":m)}function qS(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:tM(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var YS=/^:[\w-]+$/,ZS=3,KS=2,QS=1,JS=10,$S=-2,v_=r=>r==="*";function eM(r,e){let i=r.split("/"),s=i.length;return i.some(v_)&&(s+=$S),e&&(s+=KS),i.filter(l=>!v_(l)).reduce((l,c)=>l+(YS.test(c)?ZS:c===""?QS:JS),s)}function tM(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function nM(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,_=c==="/"?e:e.slice(c.length)||"/",g=lu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),v=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=lu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:_a([c,g.pathname]),pathnameBase:lM(_a([c,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(c=_a([c,g.pathnameBase]))}return f}function lu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=iM(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((p,{paramName:_,isOptional:g},v)=>{if(_==="*"){let E=h[v]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[v];return g&&!M?p[_]=void 0:p[_]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:r}}function iM(r,e=!1,i=!0){ki(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(s.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function aM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ki(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ya(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var rM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function sM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Gs(r):r,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=x_(i.substring(1),"/"):c=x_(i,e)):c=e,{pathname:c,search:cM(s),hash:uM(l)}}function x_(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Nd(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Cv(r){let e=oM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function wv(r,e,i,s=!1){let l;typeof r=="string"?l=Gs(r):(l={...r},$t(!l.pathname||!l.pathname.includes("?"),Nd("?","pathname","search",l)),$t(!l.pathname||!l.pathname.includes("#"),Nd("#","pathname","hash",l)),$t(!l.search||!l.search.includes("#"),Nd("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),g-=1;l.pathname=v.join("/")}h=g>=0?e[g]:"/"}let m=sM(l,h),p=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var _a=r=>r.join("/").replace(/\/\/+/g,"/"),lM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),cM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,uM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,fM=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function dM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function hM(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Dv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Nv(r,e){let i=r;if(typeof i!="string"||!rM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(Dv)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=ya(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{ki(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Uv=["POST","PUT","PATCH","DELETE"];new Set(Uv);var pM=["GET",...Uv];new Set(pM);var Vs=K.createContext(null);Vs.displayName="DataRouter";var pu=K.createContext(null);pu.displayName="DataRouterState";var mM=K.createContext(!1),Lv=K.createContext({isTransitioning:!1});Lv.displayName="ViewTransition";var gM=K.createContext(new Map);gM.displayName="Fetchers";var _M=K.createContext(null);_M.displayName="Await";var vi=K.createContext(null);vi.displayName="Navigation";var sl=K.createContext(null);sl.displayName="Location";var Wi=K.createContext({outlet:null,matches:[],isDataRoute:!1});Wi.displayName="Route";var fp=K.createContext(null);fp.displayName="RouteError";var Ov="REACT_ROUTER_ERROR",vM="REDIRECT",xM="ROUTE_ERROR_RESPONSE";function yM(r){if(r.startsWith(`${Ov}:${vM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function SM(r){if(r.startsWith(`${Ov}:${xM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new fM(e.status,e.statusText,e.data)}catch{}}function MM(r,{relative:e}={}){$t(ol(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=K.useContext(vi),{hash:l,pathname:c,search:f}=cl(r,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:_a([i,c])),s.createHref({pathname:h,search:f,hash:l})}function ol(){return K.useContext(sl)!=null}function Br(){return $t(ol(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(sl).location}var Pv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fv(r){K.useContext(vi).static||K.useLayoutEffect(r)}function ll(){let{isDataRoute:r}=K.useContext(Wi);return r?FM():bM()}function bM(){$t(ol(),"useNavigate() may be used only in the context of a <Router> component.");let r=K.useContext(Vs),{basename:e,navigator:i}=K.useContext(vi),{matches:s}=K.useContext(Wi),{pathname:l}=Br(),c=JSON.stringify(Cv(s)),f=K.useRef(!1);return Fv(()=>{f.current=!0}),K.useCallback((m,p={})=>{if(ki(f.current,Pv),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=wv(m,JSON.parse(c),l,p.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:_a([e,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[e,i,c,l,r])}K.createContext(null);function EM(){let{matches:r}=K.useContext(Wi),e=r[r.length-1];return e?e.params:{}}function cl(r,{relative:e}={}){let{matches:i}=K.useContext(Wi),{pathname:s}=Br(),l=JSON.stringify(Cv(i));return K.useMemo(()=>wv(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function TM(r,e){return Bv(r,e)}function Bv(r,e,i,s,l){$t(ol(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=K.useContext(vi),{matches:f}=K.useContext(Wi),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",_=h?h.pathnameBase:"/",g=h&&h.route;{let w=g&&g.path||"";zv(p,!g||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let v=Br(),M;if(e){let w=typeof e=="string"?Gs(e):e;$t(_==="/"||w.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${w.pathname}" was given in the \`location\` prop.`),M=w}else M=v;let E=M.pathname||"/",T=E;if(_!=="/"){let w=_.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(w.length).join("/")}let S=Tv(r,{pathname:T});ki(g||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),ki(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=DM(S&&S.map(w=>Object.assign({},w,{params:Object.assign({},m,w.params),pathname:_a([_,c.encodeLocation?c.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?_:_a([_,c.encodeLocation?c.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),f,i,s,l);return e&&x?K.createElement(sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},x):x}function AM(){let r=PM(),e=dM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:c},"ErrorBoundary")," or"," ",K.createElement("code",{style:c},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),i?K.createElement("pre",{style:l},i):null,f)}var RM=K.createElement(AM,null),Iv=class extends K.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=SM(r.digest);i&&(r=i)}let e=r!==void 0?K.createElement(Wi.Provider,{value:this.props.routeContext},K.createElement(fp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?K.createElement(CM,{error:r},e):e}};Iv.contextType=mM;var Ud=new WeakMap;function CM({children:r,error:e}){let{basename:i}=K.useContext(vi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=yM(e.digest);if(s){let l=Ud.get(e);if(l)throw l;let c=Nv(s.location,i);if(Dv&&!Ud.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Ud.set(e,f),f}return K.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function wM({routeContext:r,match:e,children:i}){let s=K.useContext(Vs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),K.createElement(Wi.Provider,{value:r},i)}function DM(r,e=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i?.errors;if(f!=null){let _=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);$t(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,_+1))}let h=!1,m=-1;if(i)for(let _=0;_<c.length;_++){let g=c[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=_),g.route.id){let{loaderData:v,errors:M}=i,E=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&s?(_,g)=>{s(_,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:hM(i.matches),errorInfo:g})}:void 0;return c.reduceRight((_,g,v)=>{let M,E=!1,T=null,S=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||RM,h&&(m<0&&v===0?(zv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):m===v&&(E=!0,S=g.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,v+1)),w=()=>{let N;return M?N=T:E?N=S:g.route.Component?N=K.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=_,K.createElement(wM,{match:g,routeContext:{outlet:_,matches:x,isDataRoute:i!=null},children:N})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?K.createElement(Iv,{location:i.location,revalidation:i.revalidation,component:T,error:M,children:w(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):w()},null)}function dp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NM(r){let e=K.useContext(Vs);return $t(e,dp(r)),e}function UM(r){let e=K.useContext(pu);return $t(e,dp(r)),e}function LM(r){let e=K.useContext(Wi);return $t(e,dp(r)),e}function hp(r){let e=LM(r),i=e.matches[e.matches.length-1];return $t(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function OM(){return hp("useRouteId")}function PM(){let r=K.useContext(fp),e=UM("useRouteError"),i=hp("useRouteError");return r!==void 0?r:e.errors?.[i]}function FM(){let{router:r}=NM("useNavigate"),e=hp("useNavigate"),i=K.useRef(!1);return Fv(()=>{i.current=!0}),K.useCallback(async(l,c={})=>{ki(i.current,Pv),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var y_={};function zv(r,e,i){!e&&!y_[r]&&(y_[r]=!0,ki(!1,i))}K.memo(BM);function BM({routes:r,future:e,state:i,onError:s}){return Bv(r,void 0,i,s,e)}function Ko(r){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function IM({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){$t(!ol(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),m=K.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Gs(i));let{pathname:p="/",search:_="",hash:g="",state:v=null,key:M="default"}=i,E=K.useMemo(()=>{let T=ya(p,h);return T==null?null:{location:{pathname:T,search:_,hash:g,state:v,key:M},navigationType:s}},[h,p,_,g,v,M,s]);return ki(E!=null,`<Router basename="${h}"> is not able to match the URL "${p}${_}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:K.createElement(vi.Provider,{value:m},K.createElement(sl.Provider,{children:e,value:E}))}function zM({children:r,location:e}){return TM(ph(r),e)}function ph(r,e=[]){let i=[];return K.Children.forEach(r,(s,l)=>{if(!K.isValidElement(s))return;let c=[...e,l];if(s.type===K.Fragment){i.push.apply(i,ph(s.props.children,c));return}$t(s.type===Ko,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=ph(s.props.children,c)),i.push(f)}),i}var eu="get",tu="application/x-www-form-urlencoded";function mu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function HM(r){return mu(r)&&r.tagName.toLowerCase()==="button"}function GM(r){return mu(r)&&r.tagName.toLowerCase()==="form"}function VM(r){return mu(r)&&r.tagName.toLowerCase()==="input"}function kM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function XM(r,e){return r.button===0&&(!e||e==="_self")&&!kM(r)}var Rc=null;function WM(){if(Rc===null)try{new FormData(document.createElement("form"),0),Rc=!1}catch{Rc=!0}return Rc}var jM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ld(r){return r!=null&&!jM.has(r)?(ki(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tu}"`),null):r}function qM(r,e){let i,s,l,c,f;if(GM(r)){let h=r.getAttribute("action");s=h?ya(h,e):null,i=r.getAttribute("method")||eu,l=Ld(r.getAttribute("enctype"))||tu,c=new FormData(r)}else if(HM(r)||VM(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||h.getAttribute("action");if(s=m?ya(m,e):null,i=r.getAttribute("formmethod")||h.getAttribute("method")||eu,l=Ld(r.getAttribute("formenctype"))||Ld(h.getAttribute("enctype"))||tu,c=new FormData(h,r),!WM()){let{name:p,type:_,value:g}=r;if(_==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,g)}}else{if(mu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=eu,s=null,l=tu,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function YM(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&ya(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function ZM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function KM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function QM(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await ZM(c,i);return f.links?f.links():[]}return[]}));return tb(s.flat(1).filter(KM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function S_(r,e,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function JM(r,e,{includeHydrateFallback:i}={}){return $M(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function $M(r){return[...new Set(r)]}function eb(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function tb(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(eb(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function Hv(){let r=K.useContext(Vs);return pp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function nb(){let r=K.useContext(pu);return pp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var mp=K.createContext(void 0);mp.displayName="FrameworkContext";function Gv(){let r=K.useContext(mp);return pp(r,"You must render this element inside a <HydratedRouter> element"),r}function ib(r,e){let i=K.useContext(mp),[s,l]=K.useState(!1),[c,f]=K.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:g}=e,v=K.useRef(null);K.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let T=x=>{x.forEach(w=>{f(w.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[r]),K.useEffect(()=>{if(s){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[s]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,v,{}]:[c,v,{onFocus:Go(h,M),onBlur:Go(m,E),onMouseEnter:Go(p,M),onMouseLeave:Go(_,E),onTouchStart:Go(g,M)}]:[!1,v,{}]}function Go(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function ab({page:r,...e}){let{router:i}=Hv(),s=K.useMemo(()=>Tv(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?K.createElement(sb,{page:r,matches:s,...e}):null}function rb(r){let{manifest:e,routeModules:i}=Gv(),[s,l]=K.useState([]);return K.useEffect(()=>{let c=!1;return QM(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function sb({page:r,matches:e,...i}){let s=Br(),{future:l,manifest:c,routeModules:f}=Gv(),{basename:h}=Hv(),{loaderData:m,matches:p}=nb(),_=K.useMemo(()=>S_(r,e,p,c,s,"data"),[r,e,p,c,s]),g=K.useMemo(()=>S_(r,e,p,c,s,"assets"),[r,e,p,c,s]),v=K.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let T=new Set,S=!1;if(e.forEach(w=>{let N=c.routes[w.route.id];!N||!N.hasLoader||(!_.some(O=>O.route.id===w.route.id)&&w.route.id in m&&f[w.route.id]?.shouldRevalidate||N.hasClientLoader?S=!0:T.add(w.route.id))}),T.size===0)return[];let x=YM(r,h,l.unstable_trailingSlashAwareDataRequests,"data");return S&&T.size>0&&x.searchParams.set("_routes",e.filter(w=>T.has(w.route.id)).map(w=>w.route.id).join(",")),[x.pathname+x.search]},[h,l.unstable_trailingSlashAwareDataRequests,m,s,c,_,e,r,f]),M=K.useMemo(()=>JM(g,c),[g,c]),E=rb(g);return K.createElement(K.Fragment,null,v.map(T=>K.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),M.map(T=>K.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),E.map(({key:T,link:S})=>K.createElement("link",{key:T,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function ob(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var lb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lb&&(window.__reactRouterVersion="7.13.0")}catch{}function cb({basename:r,children:e,unstable_useTransitions:i,window:s}){let l=K.useRef();l.current==null&&(l.current=VS({window:s,v5Compat:!0}));let c=l.current,[f,h]=K.useState({action:c.action,location:c.location}),m=K.useCallback(p=>{i===!1?h(p):K.startTransition(()=>h(p))},[i]);return K.useLayoutEffect(()=>c.listen(m),[c,m]),K.createElement(IM,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var Vv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kv=K.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:v,...M},E){let{basename:T,unstable_useTransitions:S}=K.useContext(vi),x=typeof p=="string"&&Vv.test(p),w=Nv(p,T);p=w.to;let N=MM(p,{relative:l}),[O,I,z]=ib(s,M),B=hb(p,{replace:f,state:h,target:m,preventScrollReset:_,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:v,unstable_useTransitions:S});function q(D){e&&e(D),D.defaultPrevented||B(D)}let C=K.createElement("a",{...M,...z,href:w.absoluteURL||N,onClick:w.isExternal||c?e:q,ref:ob(E,I),target:m,"data-discover":!x&&i==="render"?"true":void 0});return O&&!x?K.createElement(K.Fragment,null,C,K.createElement(ab,{page:N})):C});kv.displayName="Link";var ub=K.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},_){let g=cl(f,{relative:p.relative}),v=Br(),M=K.useContext(pu),{navigator:E,basename:T}=K.useContext(vi),S=M!=null&&vb(g)&&h===!0,x=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,w=v.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(w=w.toLowerCase(),N=N?N.toLowerCase():null,x=x.toLowerCase()),N&&T&&(N=ya(N,T)||N);const O=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let I=w===x||!l&&w.startsWith(x)&&w.charAt(O)==="/",z=N!=null&&(N===x||!l&&N.startsWith(x)&&N.charAt(x.length)==="/"),B={isActive:I,isPending:z,isTransitioning:S},q=I?e:void 0,C;typeof s=="function"?C=s(B):C=[s,I?"active":null,z?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(B):c;return K.createElement(kv,{...p,"aria-current":q,className:C,ref:_,style:D,to:f,viewTransition:h},typeof m=="function"?m(B):m)});ub.displayName="NavLink";var fb=K.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=eu,action:h,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:v,...M},E)=>{let{unstable_useTransitions:T}=K.useContext(vi),S=gb(),x=_b(h,{relative:p}),w=f.toLowerCase()==="get"?"get":"post",N=typeof h=="string"&&Vv.test(h),O=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let z=I.nativeEvent.submitter,B=z?.getAttribute("formmethod")||f,q=()=>S(z||I.currentTarget,{fetcherKey:e,method:B,navigate:i,replace:l,state:c,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:v});T&&i!==!1?K.startTransition(()=>q()):q()};return K.createElement("form",{ref:E,method:w,action:x,onSubmit:s?m:O,...M,"data-discover":!N&&r==="render"?"true":void 0})});fb.displayName="Form";function db(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xv(r){let e=K.useContext(Vs);return $t(e,db(r)),e}function hb(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let p=ll(),_=Br(),g=cl(r,{relative:c});return K.useCallback(v=>{if(XM(v,e)){v.preventDefault();let M=i!==void 0?i:el(_)===el(g),E=()=>p(r,{replace:M,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h});m?K.startTransition(()=>E()):E()}},[_,p,g,i,s,e,r,l,c,f,h,m])}var pb=0,mb=()=>`__${String(++pb)}__`;function gb(){let{router:r}=Xv("useSubmit"),{basename:e}=K.useContext(vi),i=OM(),s=r.fetch,l=r.navigate;return K.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:_,body:g}=qM(c,e);if(f.navigate===!1){let v=f.fetcherKey||mb();await s(v,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function _b(r,{relative:e}={}){let{basename:i}=K.useContext(vi),s=K.useContext(Wi);$t(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...cl(r||".",{relative:e})},f=Br();if(r==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(_=>_==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let _=h.toString();c.search=_?`?${_}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:_a([i,c.pathname])),el(c)}function vb(r,{relative:e}={}){let i=K.useContext(Lv);$t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Xv("useViewTransitionState"),l=cl(r,{relative:e});if(!i.isTransitioning)return!1;let c=ya(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=ya(i.nextLocation.pathname,s)||i.nextLocation.pathname;return lu(l.pathname,f)!=null||lu(l.pathname,c)!=null}const Wv="memory-map-data",jv="memory-map-context";function xb(r){try{localStorage.setItem(Wv,JSON.stringify(r))}catch(e){console.error("Failed to save memories:",e)}}function yb(){try{const r=localStorage.getItem(Wv);return r?JSON.parse(r):[]}catch(r){return console.error("Failed to load memories:",r),[]}}function Sb(r){try{localStorage.setItem(jv,JSON.stringify(r))}catch(e){console.error("Failed to save context:",e)}}function Mb(){try{const r=localStorage.getItem(jv);return r?JSON.parse(r):null}catch(r){return console.error("Failed to load context:",r),null}}function tl({children:r,variant:e="primary",className:i="",...s}){const l="font-body font-semibold text-base tracking-wide transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2",c={primary:"bg-accent-primary text-bg-primary px-10 py-4 rounded-[4px] hover:bg-accent-secondary hover:shadow-[0_0_24px_rgba(212,165,116,0.25)] active:scale-[0.98]",secondary:"bg-transparent text-accent-primary border border-accent-primary/30 px-8 py-3 rounded-[4px] hover:border-accent-primary/60 hover:bg-accent-primary/5 active:scale-[0.98]",ghost:"bg-transparent text-accent-primary px-4 py-2 hover:text-accent-secondary",icon:"bg-accent-primary text-bg-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent-secondary hover:shadow-[0_0_20px_rgba(212,165,116,0.25)] active:scale-95"};return P.jsx("button",{className:`${l} ${c[e]} ${i}`,...s,children:r})}const gp="182",bb=0,M_=1,Eb=2,nu=1,Tb=2,Qo=3,rr=0,qn=1,ma=2,va=0,Os=1,b_=2,E_=3,T_=4,Ab=5,Ur=100,Rb=101,Cb=102,wb=103,Db=104,Nb=200,Ub=201,Lb=202,Ob=203,mh=204,gh=205,Pb=206,Fb=207,Bb=208,Ib=209,zb=210,Hb=211,Gb=212,Vb=213,kb=214,_h=0,vh=1,xh=2,Fs=3,yh=4,Sh=5,Mh=6,bh=7,qv=0,Xb=1,Wb=2,Gi=0,Yv=1,Zv=2,Kv=3,Qv=4,Jv=5,$v=6,ex=7,tx=300,Fr=301,Bs=302,Eh=303,Th=304,gu=306,Ah=1e3,ga=1001,Rh=1002,wn=1003,jb=1004,Cc=1005,On=1006,Od=1007,Or=1008,gi=1009,nx=1010,ix=1011,nl=1012,_p=1013,Xi=1014,zi=1015,Sa=1016,vp=1017,xp=1018,il=1020,ax=35902,rx=35899,sx=1021,ox=1022,Di=1023,Ma=1026,Pr=1027,lx=1028,yp=1029,Is=1030,Sp=1031,Mp=1033,iu=33776,au=33777,ru=33778,su=33779,Ch=35840,wh=35841,Dh=35842,Nh=35843,Uh=36196,Lh=37492,Oh=37496,Ph=37488,Fh=37489,Bh=37490,Ih=37491,zh=37808,Hh=37809,Gh=37810,Vh=37811,kh=37812,Xh=37813,Wh=37814,jh=37815,qh=37816,Yh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,$h=36492,ep=36494,tp=36495,np=36283,ip=36284,ap=36285,rp=36286,qb=3200,Yb=0,Zb=1,ir="",mi="srgb",zs="srgb-linear",cu="linear",Ht="srgb",ys=7680,A_=519,Kb=512,Qb=513,Jb=514,bp=515,$b=516,eE=517,Ep=518,tE=519,R_=35044,C_="300 es",Hi=2e3,uu=2001;function cx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function nE(){const r=fu("canvas");return r.style.display="block",r}const w_={};function D_(...r){const e="THREE."+r.shift();console.log(e,...r)}function ut(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Dt(...r){const e="THREE."+r.shift();console.error(e,...r)}function al(...r){const e=r.join(" ");e in w_||(w_[e]=!0,ut(...r))}function iE(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pd=Math.PI/180,sp=180/Math.PI;function ul(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function Et(r,e,i){return Math.max(e,Math.min(i,r))}function aE(r,e){return(r%e+e)%e}function Fd(r,e,i){return(1-i)*r+i*e}function Vo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(e=0,i=0){Xt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],v=c[f+0],M=c[f+1],E=c[f+2],T=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(h>=1){e[i+0]=v,e[i+1]=M,e[i+2]=E,e[i+3]=T;return}if(g!==T||m!==v||p!==M||_!==E){let S=m*v+p*M+_*E+g*T;S<0&&(v=-v,M=-M,E=-E,T=-T,S=-S);let x=1-h;if(S<.9995){const w=Math.acos(S),N=Math.sin(w);x=Math.sin(x*w)/N,h=Math.sin(h*w)/N,m=m*x+v*h,p=p*x+M*h,_=_*x+E*h,g=g*x+T*h}else{m=m*x+v*h,p=p*x+M*h,_=_*x+E*h,g=g*x+T*h;const w=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=w,p*=w,_*=w,g*=w}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[f],v=c[f+1],M=c[f+2],E=c[f+3];return e[i]=h*E+_*g+m*M-p*v,e[i+1]=m*E+_*v+p*g-h*M,e[i+2]=p*E+_*M+h*v-m*g,e[i+3]=_*E-h*g-m*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),g=h(c/2),v=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*_*g+p*M*E,this._y=p*M*g-v*_*E,this._z=p*_*E+v*M*g,this._w=p*_*g-v*M*E;break;case"YXZ":this._x=v*_*g+p*M*E,this._y=p*M*g-v*_*E,this._z=p*_*E-v*M*g,this._w=p*_*g+v*M*E;break;case"ZXY":this._x=v*_*g-p*M*E,this._y=p*M*g+v*_*E,this._z=p*_*E+v*M*g,this._w=p*_*g-v*M*E;break;case"ZYX":this._x=v*_*g-p*M*E,this._y=p*M*g+v*_*E,this._z=p*_*E-v*M*g,this._w=p*_*g+v*M*E;break;case"YZX":this._x=v*_*g+p*M*E,this._y=p*M*g+v*_*E,this._z=p*_*E-v*M*g,this._w=p*_*g-v*M*E;break;case"XZY":this._x=v*_*g-p*M*E,this._y=p*M*g-v*_*E,this._z=p*_*E+v*M*g,this._w=p*_*g+v*M*E;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],v=s+h+g;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>h&&s>g){const M=2*Math.sqrt(1+s-h-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-s-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-s-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-s*p,this._z=c*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,s=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(N_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(N_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),_=2*(h*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-h*_,this.y=s+m*_+h*p-c*g,this.z=l+m*g+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Bd.copy(this).projectOnVector(e),this.sub(Bd)}reflect(e){return this.sub(Bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bd=new re,N_=new fl;class gt{constructor(e,i,s,l,c,f,h,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],g=s[7],v=s[2],M=s[5],E=s[8],T=l[0],S=l[3],x=l[6],w=l[1],N=l[4],O=l[7],I=l[2],z=l[5],B=l[8];return c[0]=f*T+h*w+m*I,c[3]=f*S+h*N+m*z,c[6]=f*x+h*O+m*B,c[1]=p*T+_*w+g*I,c[4]=p*S+_*N+g*z,c[7]=p*x+_*O+g*B,c[2]=v*T+M*w+E*I,c[5]=v*S+M*N+E*z,c[8]=v*x+M*O+E*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*h*p-s*c*_+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=_*f-h*p,v=h*m-_*c,M=p*c-f*m,E=i*g+s*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(l*p-_*s)*T,e[2]=(h*s-l*f)*T,e[3]=v*T,e[4]=(_*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=M*T,e[7]=(s*m-p*i)*T,e[8]=(f*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Id.makeScale(e,i)),this}rotate(e){return this.premultiply(Id.makeRotation(-e)),this}translate(e,i){return this.premultiply(Id.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Id=new gt,U_=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rE(){const r={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ht&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ir?cu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[zs]:{primaries:e,whitePoint:s,transfer:cu,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:Ht,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const At=rE();function xa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ss;class sE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ss===void 0&&(Ss=fu("canvas")),Ss.width=e.width,Ss.height=e.height;const l=Ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ss}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=fu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=xa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oE=0;class Tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(zd(l[f].image)):c.push(zd(l[f]))}else c=zd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function zd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let lE=0;const Hd=new re;class In extends ks{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=ga,l=ga,c=On,f=Or,h=Di,m=gi,p=In.DEFAULT_ANISOTROPY,_=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=ul(),this.name="",this.source=new Tp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hd).x}get height(){return this.source.getSize(Hd).y}get depth(){return this.source.getSize(Hd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=tx;In.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],v=m[1],M=m[5],E=m[9],T=m[2],S=m[6],x=m[10];if(Math.abs(_-v)<.01&&Math.abs(g-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,O=(M+1)/2,I=(x+1)/2,z=(_+v)/4,B=(g+T)/4,q=(E+S)/4;return N>O&&N>I?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=z/s,c=B/s):O>I?O<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),s=z/l,c=q/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=B/c,l=q/c),this.set(s,l,c,i),this}let w=Math.sqrt((S-E)*(S-E)+(g-T)*(g-T)+(v-_)*(v-_));return Math.abs(w)<.001&&(w=1),this.x=(S-E)/w,this.y=(g-T)/w,this.z=(v-_)/w,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cE extends ks{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new In(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Tp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends cE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class ux extends In{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uE extends In{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ti):Ti.fromBufferAttribute(c,f),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Dc.subVectors(this.max,ko),Ms.subVectors(e.a,ko),bs.subVectors(e.b,ko),Es.subVectors(e.c,ko),Qa.subVectors(bs,Ms),Ja.subVectors(Es,bs),Er.subVectors(Ms,Es);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Er.z,Er.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Er.z,0,-Er.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Er.y,Er.x,0];return!Gd(i,Ms,bs,Es,Dc)||(i=[1,0,0,0,1,0,0,0,1],!Gd(i,Ms,bs,Es,Dc))?!1:(Nc.crossVectors(Qa,Ja),i=[Nc.x,Nc.y,Nc.z],Gd(i,Ms,bs,Es,Dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new re,new re,new re,new re,new re,new re,new re,new re],Ti=new re,wc=new dl,Ms=new re,bs=new re,Es=new re,Qa=new re,Ja=new re,Er=new re,ko=new re,Dc=new re,Nc=new re,Tr=new re;function Gd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Tr.fromArray(r,c);const h=l.x*Math.abs(Tr.x)+l.y*Math.abs(Tr.y)+l.z*Math.abs(Tr.z),m=e.dot(Tr),p=i.dot(Tr),_=s.dot(Tr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const fE=new dl,Xo=new re,Vd=new re;class hl{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):fE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Vd)),this.expandByPoint(Xo.copy(e.center).sub(Vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fa=new re,kd=new re,Uc=new re,$a=new re,Xd=new re,Lc=new re,Wd=new re;class Ap{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){kd.copy(e).add(i).multiplyScalar(.5),Uc.copy(i).sub(e).normalize(),$a.copy(this.origin).sub(kd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Uc),h=$a.dot(this.direction),m=-$a.dot(Uc),p=$a.lengthSq(),_=Math.abs(1-f*f);let g,v,M,E;if(_>0)if(g=f*m-h,v=f*h-m,E=c*_,g>=0)if(v>=-E)if(v<=E){const T=1/_;g*=T,v*=T,M=g*(g+f*v+2*h)+v*(f*g+v+2*m)+p}else v=c,g=Math.max(0,-(f*v+h)),M=-g*g+v*(v+2*m)+p;else v=-c,g=Math.max(0,-(f*v+h)),M=-g*g+v*(v+2*m)+p;else v<=-E?(g=Math.max(0,-(-f*c+h)),v=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+v*(v+2*m)+p):v<=E?(g=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+p):(g=Math.max(0,-(f*c+h)),v=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+v*(v+2*m)+p);else v=f>0?-c:c,g=Math.max(0,-(f*v+h)),M=-g*g+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(kd).addScaledVector(Uc,v),M}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),_>=0?(c=(e.min.y-v.y)*_,f=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,f=(e.min.y-v.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-v.z)*g,m=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,m=(e.min.z-v.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,s,l,c){Xd.subVectors(i,e),Lc.subVectors(s,e),Wd.crossVectors(Xd,Lc);let f=this.direction.dot(Wd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;$a.subVectors(this.origin,e);const m=h*this.direction.dot(Lc.crossVectors($a,Lc));if(m<0)return null;const p=h*this.direction.dot(Xd.cross($a));if(p<0||m+p>f)return null;const _=-h*$a.dot(Wd);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,s,l,c,f,h,m,p,_,g,v,M,E,T,S){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,_,g,v,M,E,T,S)}set(e,i,s,l,c,f,h,m,p,_,g,v,M,E,T,S){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=h,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=M,x[7]=E,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ts.setFromMatrixColumn(e,0).length(),c=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=f*_,M=f*g,E=h*_,T=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=v-T*p,i[9]=-h*m,i[2]=T-v*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const v=m*_,M=m*g,E=p*_,T=p*g;i[0]=v+T*h,i[4]=E*h-M,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-h,i[2]=M*h-E,i[6]=T+v*h,i[10]=f*m}else if(e.order==="ZXY"){const v=m*_,M=m*g,E=p*_,T=p*g;i[0]=v-T*h,i[4]=-f*g,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*_,i[9]=T-v*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const v=f*_,M=f*g,E=h*_,T=h*g;i[0]=m*_,i[4]=E*p-M,i[8]=v*p+T,i[1]=m*g,i[5]=T*p+v,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const v=f*m,M=f*p,E=h*m,T=h*p;i[0]=m*_,i[4]=T-v*g,i[8]=E*g+M,i[1]=g,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*g+E,i[10]=v-T*g}else if(e.order==="XZY"){const v=f*m,M=f*p,E=h*m,T=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=v*g+T,i[5]=f*_,i[9]=M*g-E,i[2]=E*g-M,i[6]=h*_,i[10]=T*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dE,e,hE)}lookAt(e,i,s){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),er.crossVectors(s,ti),er.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),er.crossVectors(s,ti)),er.normalize(),Oc.crossVectors(ti,er),l[0]=er.x,l[4]=Oc.x,l[8]=ti.x,l[1]=er.y,l[5]=Oc.y,l[9]=ti.y,l[2]=er.z,l[6]=Oc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],g=s[5],v=s[9],M=s[13],E=s[2],T=s[6],S=s[10],x=s[14],w=s[3],N=s[7],O=s[11],I=s[15],z=l[0],B=l[4],q=l[8],C=l[12],D=l[1],k=l[5],se=l[9],oe=l[13],me=l[2],ue=l[6],F=l[10],G=l[14],te=l[3],be=l[7],ye=l[11],L=l[15];return c[0]=f*z+h*D+m*me+p*te,c[4]=f*B+h*k+m*ue+p*be,c[8]=f*q+h*se+m*F+p*ye,c[12]=f*C+h*oe+m*G+p*L,c[1]=_*z+g*D+v*me+M*te,c[5]=_*B+g*k+v*ue+M*be,c[9]=_*q+g*se+v*F+M*ye,c[13]=_*C+g*oe+v*G+M*L,c[2]=E*z+T*D+S*me+x*te,c[6]=E*B+T*k+S*ue+x*be,c[10]=E*q+T*se+S*F+x*ye,c[14]=E*C+T*oe+S*G+x*L,c[3]=w*z+N*D+O*me+I*te,c[7]=w*B+N*k+O*ue+I*be,c[11]=w*q+N*se+O*F+I*ye,c[15]=w*C+N*oe+O*G+I*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],g=e[6],v=e[10],M=e[14],E=e[3],T=e[7],S=e[11],x=e[15],w=m*M-p*v,N=h*M-p*g,O=h*v-m*g,I=f*M-p*_,z=f*v-m*_,B=f*g-h*_;return i*(T*w-S*N+x*O)-s*(E*w-S*I+x*z)+l*(E*N-T*I+x*B)-c*(E*O-T*z+S*B)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=e[9],v=e[10],M=e[11],E=e[12],T=e[13],S=e[14],x=e[15],w=g*S*p-T*v*p+T*m*M-h*S*M-g*m*x+h*v*x,N=E*v*p-_*S*p-E*m*M+f*S*M+_*m*x-f*v*x,O=_*T*p-E*g*p+E*h*M-f*T*M-_*h*x+f*g*x,I=E*g*m-_*T*m-E*h*v+f*T*v+_*h*S-f*g*S,z=i*w+s*N+l*O+c*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return e[0]=w*B,e[1]=(T*v*c-g*S*c-T*l*M+s*S*M+g*l*x-s*v*x)*B,e[2]=(h*S*c-T*m*c+T*l*p-s*S*p-h*l*x+s*m*x)*B,e[3]=(g*m*c-h*v*c-g*l*p+s*v*p+h*l*M-s*m*M)*B,e[4]=N*B,e[5]=(_*S*c-E*v*c+E*l*M-i*S*M-_*l*x+i*v*x)*B,e[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*x-i*m*x)*B,e[7]=(f*v*c-_*m*c+_*l*p-i*v*p-f*l*M+i*m*M)*B,e[8]=O*B,e[9]=(E*g*c-_*T*c-E*s*M+i*T*M+_*s*x-i*g*x)*B,e[10]=(f*T*c-E*h*c+E*s*p-i*T*p-f*s*x+i*h*x)*B,e[11]=(_*h*c-f*g*c-_*s*p+i*g*p+f*s*M-i*h*M)*B,e[12]=I*B,e[13]=(_*T*l-E*g*l+E*s*v-i*T*v-_*s*S+i*g*S)*B,e[14]=(E*h*l-f*T*l-E*s*m+i*T*m+f*s*S-i*h*S)*B,e[15]=(f*g*l-_*h*l+_*s*m-i*g*m-f*s*v+i*h*v)*B,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,g=h+h,v=c*p,M=c*_,E=c*g,T=f*_,S=f*g,x=h*g,w=m*p,N=m*_,O=m*g,I=s.x,z=s.y,B=s.z;return l[0]=(1-(T+x))*I,l[1]=(M+O)*I,l[2]=(E-N)*I,l[3]=0,l[4]=(M-O)*z,l[5]=(1-(v+x))*z,l[6]=(S+w)*z,l[7]=0,l[8]=(E+N)*B,l[9]=(S-w)*B,l[10]=(1-(v+T))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Ts.set(l[0],l[1],l[2]).length();const f=Ts.set(l[4],l[5],l[6]).length(),h=Ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,_=1/f,g=1/h;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,i.setFromRotationMatrix(Ai),s.x=c,s.y=f,s.z=h,this}makePerspective(e,i,s,l,c,f,h=Hi,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(s-l),v=(i+e)/(i-e),M=(s+l)/(s-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===Hi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===uu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=Hi,m=!1){const p=this.elements,_=2/(i-e),g=2/(s-l),v=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===Hi)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===uu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ts=new re,Ai=new nn,dE=new re(0,0,0),hE=new re(1,1,1),er=new re,Oc=new re,ti=new re,O_=new nn,P_=new fl;class ba{constructor(e=0,i=0,s=0,l=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return O_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return P_.setFromEuler(this),this.setFromQuaternion(P_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class fx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pE=0;const F_=new re,As=new fl,da=new nn,Pc=new re,Wo=new re,mE=new re,gE=new fl,B_=new re(1,0,0),I_=new re(0,1,0),z_=new re(0,0,1),H_={type:"added"},_E={type:"removed"},Rs={type:"childadded",child:null},jd={type:"childremoved",child:null};class zn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new re,i=new ba,s=new fl,l=new re(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new gt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(B_,e)}rotateY(e){return this.rotateOnAxis(I_,e)}rotateZ(e){return this.rotateOnAxis(z_,e)}translateOnAxis(e,i){return F_.copy(e).applyQuaternion(this.quaternion),this.position.add(F_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(B_,e)}translateY(e){return this.translateOnAxis(I_,e)}translateZ(e){return this.translateOnAxis(z_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Pc.copy(e):Pc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Wo,Pc,this.up):da.lookAt(Pc,Wo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),As.setFromRotationMatrix(da),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(H_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(_E),jd.child=e,this.dispatchEvent(jd),jd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(H_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,mE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,gE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),v=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}zn.DEFAULT_UP=new re(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new re,ha=new re,qd=new re,pa=new re,Cs=new re,ws=new re,G_=new re,Yd=new re,Zd=new re,Kd=new re,Qd=new sn,Jd=new sn,$d=new sn;class wi{constructor(e=new re,i=new re,s=new re){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ri.subVectors(l,i),ha.subVectors(s,i),qd.subVectors(e,i);const f=Ri.dot(Ri),h=Ri.dot(ha),m=Ri.dot(qd),p=ha.dot(ha),_=ha.dot(qd),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,M=(p*m-h*_)*v,E=(f*_-h*m)*v;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(f,pa.y),m.addScaledVector(h,pa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Qd.setScalar(0),Jd.setScalar(0),$d.setScalar(0),Qd.fromBufferAttribute(e,i),Jd.fromBufferAttribute(e,s),$d.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Qd,c.x),f.addScaledVector(Jd,c.y),f.addScaledVector($d,c.z),f}static isFrontFacing(e,i,s,l){return Ri.subVectors(s,i),ha.subVectors(e,i),Ri.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;Cs.subVectors(l,s),ws.subVectors(c,s),Yd.subVectors(e,s);const m=Cs.dot(Yd),p=ws.dot(Yd);if(m<=0&&p<=0)return i.copy(s);Zd.subVectors(e,l);const _=Cs.dot(Zd),g=ws.dot(Zd);if(_>=0&&g<=_)return i.copy(l);const v=m*g-_*p;if(v<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Cs,f);Kd.subVectors(e,c);const M=Cs.dot(Kd),E=ws.dot(Kd);if(E>=0&&M<=E)return i.copy(c);const T=M*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(ws,h);const S=_*E-M*g;if(S<=0&&g-_>=0&&M-E>=0)return G_.subVectors(c,l),h=(g-_)/(g-_+(M-E)),i.copy(l).addScaledVector(G_,h);const x=1/(S+T+v);return f=T*x,h=v*x,i.copy(s).addScaledVector(Cs,f).addScaledVector(ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function eh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Ot{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=s,At.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=At.workingColorSpace){if(e=aE(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=eh(f,c,e+1/3),this.g=eh(f,c,e),this.b=eh(f,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const s=dx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return At.workingToColorSpace(Ln.copy(this),e),Math.round(Et(Ln.r*255,0,255))*65536+Math.round(Et(Ln.g*255,0,255))*256+Math.round(Et(Ln.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=_<=.5?g/(f+h):g/(2-f-h),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=mi){At.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,s=Ln.g,l=Ln.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+i,tr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(tr),e.getHSL(Fc);const s=Fd(tr.h,Fc.h,i),l=Fd(tr.s,Fc.s,i),c=Fd(tr.l,Fc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ot;Ot.NAMES=dx;let vE=0;class Xs extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=Os,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(s.blending=this.blending),this.side!==rr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==mh&&(s.blendSrc=this.blendSrc),this.blendDst!==gh&&(s.blendDst=this.blendDst),this.blendEquation!==Ur&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hx extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new re,Bc=new Xt;let xE=0;class Bn{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=R_,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Bc.fromBufferAttribute(this,i),Bc.applyMatrix3(e),this.setXY(i,Bc.x,Bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Vo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R_&&(e.usage=this.usage),e}}class px extends Bn{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class mx extends Bn{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ni extends Bn{constructor(e,i,s){super(new Float32Array(e),i,s)}}let yE=0;const pi=new nn,th=new zn,Ds=new re,ni=new dl,jo=new dl,vn=new re;class ii extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cx(e)?mx:px)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new gt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,s){return pi.makeTranslation(e,i,s),this.applyMatrix4(pi),this}scale(e,i,s){return pi.makeScale(e,i,s),this.applyMatrix4(pi),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ni(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];jo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ni.min,jo.min),ni.expandByPoint(vn),vn.addVectors(ni.max,jo.max),ni.expandByPoint(vn)):(ni.expandByPoint(jo.min),ni.expandByPoint(jo.max))}ni.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)vn.fromBufferAttribute(h,p),m&&(Ds.fromBufferAttribute(e,p),vn.add(Ds)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<s.count;q++)h[q]=new re,m[q]=new re;const p=new re,_=new re,g=new re,v=new Xt,M=new Xt,E=new Xt,T=new re,S=new re;function x(q,C,D){p.fromBufferAttribute(s,q),_.fromBufferAttribute(s,C),g.fromBufferAttribute(s,D),v.fromBufferAttribute(c,q),M.fromBufferAttribute(c,C),E.fromBufferAttribute(c,D),_.sub(p),g.sub(p),M.sub(v),E.sub(v);const k=1/(M.x*E.y-E.x*M.y);isFinite(k)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(k),S.copy(g).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(k),h[q].add(T),h[C].add(T),h[D].add(T),m[q].add(S),m[C].add(S),m[D].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let q=0,C=w.length;q<C;++q){const D=w[q],k=D.start,se=D.count;for(let oe=k,me=k+se;oe<me;oe+=3)x(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const N=new re,O=new re,I=new re,z=new re;function B(q){I.fromBufferAttribute(l,q),z.copy(I);const C=h[q];N.copy(C),N.sub(I.multiplyScalar(I.dot(C))).normalize(),O.crossVectors(z,C);const k=O.dot(m[q])<0?-1:1;f.setXYZW(q,N.x,N.y,N.z,k)}for(let q=0,C=w.length;q<C;++q){const D=w[q],k=D.start,se=D.count;for(let oe=k,me=k+se;oe<me;oe+=3)B(e.getX(oe+0)),B(e.getX(oe+1)),B(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Bn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new re,c=new re,f=new re,h=new re,m=new re,p=new re,_=new re,g=new re;if(e)for(let v=0,M=e.count;v<M;v+=3){const E=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),h.add(_),m.add(_),p.add(_),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,g=h.normalized,v=new p.constructor(m.length*_);let M=0,E=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*_;for(let x=0;x<_;x++)v[E++]=p[M++]}return new Bn(v,_,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,g=p.length;_<g;_++){const v=p[_],M=e(v,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,v=p.length;g<v;g++){const M=p[g];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let v=0,M=g.length;v<M;v++)_.push(g[v].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new nn,Ar=new Ap,Ic=new hl,k_=new re,zc=new re,Hc=new re,Gc=new re,nh=new re,Vc=new re,X_=new re,kc=new re;class Ea extends zn{constructor(e=new ii,i=new hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],g=c[m];_!==0&&(nh.fromBufferAttribute(g,e),f?Vc.addScaledVector(nh,_):Vc.addScaledVector(nh.sub(i),_))}i.add(Vc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(c),Ar.copy(e.ray).recast(e.near),!(Ic.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Ic,k_)===null||Ar.origin.distanceToSquared(k_)>(e.far-e.near)**2))&&(V_.copy(c).invert(),Ar.copy(e.ray).applyMatrix4(V_),!(s.boundingBox!==null&&Ar.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ar)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const S=v[E],x=f[S.materialIndex],w=Math.max(S.start,M.start),N=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let O=w,I=N;O<I;O+=3){const z=h.getX(O),B=h.getX(O+1),q=h.getX(O+2);l=Xc(this,x,e,s,p,_,g,z,B,q),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let S=E,x=T;S<x;S+=3){const w=h.getX(S),N=h.getX(S+1),O=h.getX(S+2);l=Xc(this,f,e,s,p,_,g,w,N,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const S=v[E],x=f[S.materialIndex],w=Math.max(S.start,M.start),N=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let O=w,I=N;O<I;O+=3){const z=O,B=O+1,q=O+2;l=Xc(this,x,e,s,p,_,g,z,B,q),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let S=E,x=T;S<x;S+=3){const w=S,N=S+1,O=S+2;l=Xc(this,f,e,s,p,_,g,w,N,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function SE(r,e,i,s,l,c,f,h){let m;if(e.side===qn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===rr,h),m===null)return null;kc.copy(h),kc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(kc);return p<i.near||p>i.far?null:{distance:p,point:kc.clone(),object:r}}function Xc(r,e,i,s,l,c,f,h,m,p){r.getVertexPosition(h,zc),r.getVertexPosition(m,Hc),r.getVertexPosition(p,Gc);const _=SE(r,e,i,s,zc,Hc,Gc,X_);if(_){const g=new re;wi.getBarycoord(X_,zc,Hc,Gc,g),l&&(_.uv=wi.getInterpolatedAttribute(l,h,m,p,g,new Xt)),c&&(_.uv1=wi.getInterpolatedAttribute(c,h,m,p,g,new Xt)),f&&(_.normal=wi.getInterpolatedAttribute(f,h,m,p,g,new re),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new re,materialIndex:0};wi.getNormal(zc,Hc,Gc,v.normal),_.face=v,_.barycoord=g}return _}class pl extends ii{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],g=[];let v=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ni(p,3)),this.setAttribute("normal",new Ni(_,3)),this.setAttribute("uv",new Ni(g,2));function E(T,S,x,w,N,O,I,z,B,q,C){const D=O/B,k=I/q,se=O/2,oe=I/2,me=z/2,ue=B+1,F=q+1;let G=0,te=0;const be=new re;for(let ye=0;ye<F;ye++){const L=ye*k-oe;for(let $=0;$<ue;$++){const _e=$*D-se;be[T]=_e*w,be[S]=L*N,be[x]=me,p.push(be.x,be.y,be.z),be[T]=0,be[S]=0,be[x]=z>0?1:-1,_.push(be.x,be.y,be.z),g.push($/B),g.push(1-ye/q),G+=1}}for(let ye=0;ye<q;ye++)for(let L=0;L<B;L++){const $=v+L+ue*ye,_e=v+L+ue*(ye+1),Re=v+(L+1)+ue*(ye+1),Ge=v+(L+1)+ue*ye;m.push($,_e,Ge),m.push(_e,Re,Ge),te+=6}h.addGroup(M,te,C),M+=te,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Fn(r){const e={};for(let i=0;i<r.length;i++){const s=Hs(r[i]);for(const l in s)e[l]=s[l]}return e}function ME(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function gx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const bE={clone:Hs,merge:Fn};var EE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EE,this.fragmentShader=TE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=ME(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class _x extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new re,W_=new Xt,j_=new Xt;class Ci extends _x{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=sp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sp*2*Math.atan(Math.tan(Pd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,i){return this.getViewBounds(e,W_,j_),i.subVectors(j_,W_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Pd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ns=-90,Us=1;class AE extends zn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ci(Ns,Us,e,i);l.layers=this.layers,this.add(l);const c=new Ci(Ns,Us,e,i);c.layers=this.layers,this.add(c);const f=new Ci(Ns,Us,e,i);f.layers=this.layers,this.add(f);const h=new Ci(Ns,Us,e,i);h.layers=this.layers,this.add(h);const m=new Ci(Ns,Us,e,i);m.layers=this.layers,this.add(m);const p=new Ci(Ns,Us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===uu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(g,v,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class vx extends In{constructor(e=[],i=Fr,s,l,c,f,h,m,p,_){super(e,i,s,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xx extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new vx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new pl(5,5,5),c=new _i({name:"CubemapFromEquirect",uniforms:Hs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:va});c.uniforms.tEquirect.value=i;const f=new Ea(l,c),h=i.minFilter;return i.minFilter===Or&&(i.minFilter=On),new AE(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class Wc extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RE={type:"move"};class ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,s),x=this._getHandJoint(p,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(RE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Wc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class CE extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wE extends In{constructor(e=null,i=1,s=1,l,c,f,h,m,p=wn,_=wn,g,v){super(null,f,h,m,p,_,l,c,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ah=new re,DE=new re,NE=new gt;class Dr{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=ah.subVectors(s,i).cross(DE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(ah),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||NE.getNormalMatrix(e),l=this.coplanarPoint(ah).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new hl,UE=new Xt(.5,.5),jc=new re;class yx{constructor(e=new Dr,i=new Dr,s=new Dr,l=new Dr,c=new Dr,f=new Dr){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Hi,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],g=c[5],v=c[6],M=c[7],E=c[8],T=c[9],S=c[10],x=c[11],w=c[12],N=c[13],O=c[14],I=c[15];if(l[0].setComponents(p-f,M-_,x-E,I-w).normalize(),l[1].setComponents(p+f,M+_,x+E,I+w).normalize(),l[2].setComponents(p+h,M+g,x+T,I+N).normalize(),l[3].setComponents(p-h,M-g,x-T,I-N).normalize(),s)l[4].setComponents(m,v,S,O).normalize(),l[5].setComponents(p-m,M-v,x-S,I-O).normalize();else if(l[4].setComponents(p-m,M-v,x-S,I-O).normalize(),i===Hi)l[5].setComponents(p+m,M+v,x+S,I+O).normalize();else if(i===uu)l[5].setComponents(m,v,S,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const i=UE.distanceTo(e.center);return Rr.radius=.7071067811865476+i,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(jc.x=l.normal.x>0?e.max.x:e.min.x,jc.y=l.normal.y>0?e.max.y:e.min.y,jc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class LE extends Xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new re,hu=new re,q_=new nn,qo=new Ap,qc=new hl,rh=new re,Y_=new re;class OE extends zn{constructor(e=new ii,i=new LE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)du.fromBufferAttribute(i,l-1),hu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=du.distanceTo(hu);e.setAttribute("lineDistance",new Ni(s,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,e.ray.intersectsSphere(qc)===!1)return;q_.copy(l).invert(),qo.copy(e.ray).applyMatrix4(q_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=s.index,v=s.attributes.position;if(_!==null){const M=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let T=M,S=E-1;T<S;T+=p){const x=_.getX(T),w=_.getX(T+1),N=Yc(this,e,qo,m,x,w,T);N&&i.push(N)}if(this.isLineLoop){const T=_.getX(E-1),S=_.getX(M),x=Yc(this,e,qo,m,T,S,E-1);x&&i.push(x)}}else{const M=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=M,S=E-1;T<S;T+=p){const x=Yc(this,e,qo,m,T,T+1,T);x&&i.push(x)}if(this.isLineLoop){const T=Yc(this,e,qo,m,E-1,M,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Yc(r,e,i,s,l,c,f){const h=r.geometry.attributes.position;if(du.fromBufferAttribute(h,l),hu.fromBufferAttribute(h,c),i.distanceSqToSegment(du,hu,rh,Y_)>s)return;rh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(rh);if(!(p<e.near||p>e.far))return{distance:p,point:Y_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Z_=new re,K_=new re;class PE extends OE{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Z_.fromBufferAttribute(i,l),K_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Z_.distanceTo(K_);e.setAttribute("lineDistance",new Ni(s,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class FE extends Xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Q_=new nn,op=new Ap,Zc=new hl,Kc=new re;class BE extends zn{constructor(e=new ii,i=new FE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Zc.copy(s.boundingSphere),Zc.applyMatrix4(l),Zc.radius+=c,e.ray.intersectsSphere(Zc)===!1)return;Q_.copy(l).invert(),op.copy(e.ray).applyMatrix4(Q_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,g=s.attributes.position;if(p!==null){const v=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let E=v,T=M;E<T;E++){const S=p.getX(E);Kc.fromBufferAttribute(g,S),J_(Kc,S,m,l,e,i,this)}}else{const v=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let E=v,T=M;E<T;E++)Kc.fromBufferAttribute(g,E),J_(Kc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function J_(r,e,i,s,l,c,f){const h=op.distanceSqToPoint(r);if(h<i){const m=new re;op.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class rl extends In{constructor(e,i,s=Xi,l,c,f,h=wn,m=wn,p,_=Ma,g=1){if(_!==Ma&&_!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,c,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class IE extends rl{constructor(e,i=Xi,s=Fr,l,c,f=wn,h=wn,m,p=Ma){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,s,l,c,f,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sx extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _u extends ii{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,g=e/h,v=i/m,M=[],E=[],T=[],S=[];for(let x=0;x<_;x++){const w=x*v-f;for(let N=0;N<p;N++){const O=N*g-c;E.push(O,-w,0),T.push(0,0,1),S.push(N/h),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let w=0;w<h;w++){const N=w+p*x,O=w+p*(x+1),I=w+1+p*(x+1),z=w+1+p*x;M.push(N,O,z),M.push(O,I,z)}this.setIndex(M),this.setAttribute("position",new Ni(E,3)),this.setAttribute("normal",new Ni(T,3)),this.setAttribute("uv",new Ni(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.width,e.height,e.widthSegments,e.heightSegments)}}class zE extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class HE extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GE extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rp extends _x{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class VE extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function $_(r,e,i,s){const l=kE(s);switch(i){case sx:return r*e;case lx:return r*e/l.components*l.byteLength;case yp:return r*e/l.components*l.byteLength;case Is:return r*e*2/l.components*l.byteLength;case Sp:return r*e*2/l.components*l.byteLength;case ox:return r*e*3/l.components*l.byteLength;case Di:return r*e*4/l.components*l.byteLength;case Mp:return r*e*4/l.components*l.byteLength;case iu:case au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ru:case su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wh:case Nh:return Math.max(r,16)*Math.max(e,8)/4;case Ch:case Dh:return Math.max(r,8)*Math.max(e,8)/2;case Uh:case Lh:case Ph:case Fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Oh:case Bh:case Ih:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case $h:case ep:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case np:case ip:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ap:case rp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kE(r){switch(r){case gi:case nx:return{byteLength:1,components:1};case nl:case ix:case Sa:return{byteLength:2,components:1};case vp:case xp:return{byteLength:2,components:4};case Xi:case _p:case zi:return{byteLength:4,components:1};case ax:case rx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);function Mx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function XE(r){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const _=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,_);else{g.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<g.length;M++){const E=g[v],T=g[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,g[v]=T)}g.length=v+1;for(let M=0,E=g.length;M<E;M++){const T=g[M];r.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var WE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
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
#endif`,qE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QE=`#ifdef USE_AOMAP
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
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$E=`#ifdef USE_BATCHING
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
#endif`,e1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a1=`#ifdef USE_IRIDESCENCE
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
#endif`,r1=`#ifdef USE_BUMPMAP
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
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,p1=`#define PI 3.141592653589793
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
} // validated`,m1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,g1=`vec3 transformedNormal = objectNormal;
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
#endif`,_1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S1="gl_FragColor = linearToOutputTexel( gl_FragColor );",M1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b1=`#ifdef USE_ENVMAP
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
#endif`,E1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
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
#endif`,A1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
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
#endif`,C1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U1=`#ifdef USE_GRADIENTMAP
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
}`,L1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F1=`uniform bool receiveShadow;
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
#endif`,B1=`#ifdef USE_ENVMAP
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
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V1=`PhysicalMaterial material;
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
#endif`,k1=`uniform sampler2D dfgLUT;
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
}`,X1=`
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
#endif`,W1=`#if defined( RE_IndirectDiffuse )
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
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eT=`#if defined( USE_POINTS_UV )
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
#endif`,tT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sT=`#ifdef USE_MORPHTARGETS
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
#endif`,oT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hT=`#ifdef USE_NORMALMAP
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
#endif`,pT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ST=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ET=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wT=`float getShadowMask() {
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
}`,DT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NT=`#ifdef USE_SKINNING
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
#endif`,UT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LT=`#ifdef USE_SKINNING
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
#endif`,OT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IT=`#ifdef USE_TRANSMISSION
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
#endif`,zT=`#ifdef USE_TRANSMISSION
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
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WT=`uniform sampler2D t2D;
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
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`#include <common>
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
}`,QT=`#if DEPTH_PACKING == 3200
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
}`,JT=`#define DISTANCE
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
}`,$T=`#define DISTANCE
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
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`uniform float scale;
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
}`,iA=`uniform vec3 diffuse;
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
}`,aA=`#include <common>
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#define LAMBERT
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
}`,oA=`#define LAMBERT
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
}`,lA=`#define MATCAP
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
}`,cA=`#define MATCAP
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
}`,uA=`#define NORMAL
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
}`,fA=`#define NORMAL
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
}`,dA=`#define PHONG
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
}`,hA=`#define PHONG
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
}`,pA=`#define STANDARD
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
}`,mA=`#define STANDARD
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
}`,gA=`#define TOON
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
}`,_A=`#define TOON
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
}`,vA=`uniform float size;
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
}`,xA=`uniform vec3 diffuse;
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
}`,yA=`#include <common>
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
}`,SA=`uniform vec3 color;
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
}`,MA=`uniform float rotation;
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
}`,bA=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:WE,alphahash_pars_fragment:jE,alphamap_fragment:qE,alphamap_pars_fragment:YE,alphatest_fragment:ZE,alphatest_pars_fragment:KE,aomap_fragment:QE,aomap_pars_fragment:JE,batching_pars_vertex:$E,batching_vertex:e1,begin_vertex:t1,beginnormal_vertex:n1,bsdfs:i1,iridescence_fragment:a1,bumpmap_pars_fragment:r1,clipping_planes_fragment:s1,clipping_planes_pars_fragment:o1,clipping_planes_pars_vertex:l1,clipping_planes_vertex:c1,color_fragment:u1,color_pars_fragment:f1,color_pars_vertex:d1,color_vertex:h1,common:p1,cube_uv_reflection_fragment:m1,defaultnormal_vertex:g1,displacementmap_pars_vertex:_1,displacementmap_vertex:v1,emissivemap_fragment:x1,emissivemap_pars_fragment:y1,colorspace_fragment:S1,colorspace_pars_fragment:M1,envmap_fragment:b1,envmap_common_pars_fragment:E1,envmap_pars_fragment:T1,envmap_pars_vertex:A1,envmap_physical_pars_fragment:B1,envmap_vertex:R1,fog_vertex:C1,fog_pars_vertex:w1,fog_fragment:D1,fog_pars_fragment:N1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:L1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:P1,lights_pars_begin:F1,lights_toon_fragment:I1,lights_toon_pars_fragment:z1,lights_phong_fragment:H1,lights_phong_pars_fragment:G1,lights_physical_fragment:V1,lights_physical_pars_fragment:k1,lights_fragment_begin:X1,lights_fragment_maps:W1,lights_fragment_end:j1,logdepthbuf_fragment:q1,logdepthbuf_pars_fragment:Y1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:K1,map_fragment:Q1,map_pars_fragment:J1,map_particle_fragment:$1,map_particle_pars_fragment:eT,metalnessmap_fragment:tT,metalnessmap_pars_fragment:nT,morphinstance_vertex:iT,morphcolor_vertex:aT,morphnormal_vertex:rT,morphtarget_pars_vertex:sT,morphtarget_vertex:oT,normal_fragment_begin:lT,normal_fragment_maps:cT,normal_pars_fragment:uT,normal_pars_vertex:fT,normal_vertex:dT,normalmap_pars_fragment:hT,clearcoat_normal_fragment_begin:pT,clearcoat_normal_fragment_maps:mT,clearcoat_pars_fragment:gT,iridescence_pars_fragment:_T,opaque_fragment:vT,packing:xT,premultiplied_alpha_fragment:yT,project_vertex:ST,dithering_fragment:MT,dithering_pars_fragment:bT,roughnessmap_fragment:ET,roughnessmap_pars_fragment:TT,shadowmap_pars_fragment:AT,shadowmap_pars_vertex:RT,shadowmap_vertex:CT,shadowmask_pars_fragment:wT,skinbase_vertex:DT,skinning_pars_vertex:NT,skinning_vertex:UT,skinnormal_vertex:LT,specularmap_fragment:OT,specularmap_pars_fragment:PT,tonemapping_fragment:FT,tonemapping_pars_fragment:BT,transmission_fragment:IT,transmission_pars_fragment:zT,uv_pars_fragment:HT,uv_pars_vertex:GT,uv_vertex:VT,worldpos_vertex:kT,background_vert:XT,background_frag:WT,backgroundCube_vert:jT,backgroundCube_frag:qT,cube_vert:YT,cube_frag:ZT,depth_vert:KT,depth_frag:QT,distance_vert:JT,distance_frag:$T,equirect_vert:eA,equirect_frag:tA,linedashed_vert:nA,linedashed_frag:iA,meshbasic_vert:aA,meshbasic_frag:rA,meshlambert_vert:sA,meshlambert_frag:oA,meshmatcap_vert:lA,meshmatcap_frag:cA,meshnormal_vert:uA,meshnormal_frag:fA,meshphong_vert:dA,meshphong_frag:hA,meshphysical_vert:pA,meshphysical_frag:mA,meshtoon_vert:gA,meshtoon_frag:_A,points_vert:vA,points_frag:xA,shadow_vert:yA,shadow_frag:SA,sprite_vert:MA,sprite_frag:bA},Ie={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ii={basic:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ot(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Fn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Fn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ot(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Fn([Ie.points,Ie.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Fn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Fn([Ie.common,Ie.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Fn([Ie.sprite,Ie.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Fn([Ie.common,Ie.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Fn([Ie.lights,Ie.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ii.physical={uniforms:Fn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Qc={r:0,b:0,g:0},Cr=new ba,EA=new nn;function TA(r,e,i,s,l,c,f){const h=new Ot(0);let m=c===!0?0:1,p,_,g=null,v=0,M=null;function E(N){let O=N.isScene===!0?N.background:null;return O&&O.isTexture&&(O=(N.backgroundBlurriness>0?i:e).get(O)),O}function T(N){let O=!1;const I=E(N);I===null?x(h,m):I&&I.isColor&&(x(I,1),O=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(N,O){const I=E(O);I&&(I.isCubeTexture||I.mapping===gu)?(_===void 0&&(_=new Ea(new pl(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Hs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,B,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Cr.copy(O.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(EA.makeRotationFromEuler(Cr)),_.material.toneMapped=At.getTransfer(I.colorSpace)!==Ht,(g!==I||v!==I.version||M!==r.toneMapping)&&(_.material.needsUpdate=!0,g=I,v=I.version,M=r.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Ea(new _u(2,2),new _i({name:"BackgroundMaterial",uniforms:Hs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=At.getTransfer(I.colorSpace)!==Ht,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||v!==I.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,g=I,v=I.version,M=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,O){N.getRGB(Qc,gx(r)),s.buffers.color.setClear(Qc.r,Qc.g,Qc.b,O,f)}function w(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,O=1){h.set(N),m=O,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(h,m)},render:T,addToRenderList:S,dispose:w}}function AA(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function h(D,k,se,oe,me){let ue=!1;const F=g(oe,se,k);c!==F&&(c=F,p(c.object)),ue=M(D,oe,se,me),ue&&E(D,oe,se,me),me!==null&&e.update(me,r.ELEMENT_ARRAY_BUFFER),(ue||f)&&(f=!1,O(D,k,se,oe),me!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function _(D){return r.deleteVertexArray(D)}function g(D,k,se){const oe=se.wireframe===!0;let me=s[D.id];me===void 0&&(me={},s[D.id]=me);let ue=me[k.id];ue===void 0&&(ue={},me[k.id]=ue);let F=ue[oe];return F===void 0&&(F=v(m()),ue[oe]=F),F}function v(D){const k=[],se=[],oe=[];for(let me=0;me<i;me++)k[me]=0,se[me]=0,oe[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:oe,object:D,attributes:{},index:null}}function M(D,k,se,oe){const me=c.attributes,ue=k.attributes;let F=0;const G=se.getAttributes();for(const te in G)if(G[te].location>=0){const ye=me[te];let L=ue[te];if(L===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),ye===void 0||ye.attribute!==L||L&&ye.data!==L.data)return!0;F++}return c.attributesNum!==F||c.index!==oe}function E(D,k,se,oe){const me={},ue=k.attributes;let F=0;const G=se.getAttributes();for(const te in G)if(G[te].location>=0){let ye=ue[te];ye===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor));const L={};L.attribute=ye,ye&&ye.data&&(L.data=ye.data),me[te]=L,F++}c.attributes=me,c.attributesNum=F,c.index=oe}function T(){const D=c.newAttributes;for(let k=0,se=D.length;k<se;k++)D[k]=0}function S(D){x(D,0)}function x(D,k){const se=c.newAttributes,oe=c.enabledAttributes,me=c.attributeDivisors;se[D]=1,oe[D]===0&&(r.enableVertexAttribArray(D),oe[D]=1),me[D]!==k&&(r.vertexAttribDivisor(D,k),me[D]=k)}function w(){const D=c.newAttributes,k=c.enabledAttributes;for(let se=0,oe=k.length;se<oe;se++)k[se]!==D[se]&&(r.disableVertexAttribArray(se),k[se]=0)}function N(D,k,se,oe,me,ue,F){F===!0?r.vertexAttribIPointer(D,k,se,me,ue):r.vertexAttribPointer(D,k,se,oe,me,ue)}function O(D,k,se,oe){T();const me=oe.attributes,ue=se.getAttributes(),F=k.defaultAttributeValues;for(const G in ue){const te=ue[G];if(te.location>=0){let be=me[G];if(be===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),be!==void 0){const ye=be.normalized,L=be.itemSize,$=e.get(be);if($===void 0)continue;const _e=$.buffer,Re=$.type,Ge=$.bytesPerElement,ne=Re===r.INT||Re===r.UNSIGNED_INT||be.gpuType===_p;if(be.isInterleavedBufferAttribute){const he=be.data,Le=he.stride,Me=be.offset;if(he.isInstancedInterleavedBuffer){for(let we=0;we<te.locationSize;we++)x(te.location+we,he.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let we=0;we<te.locationSize;we++)S(te.location+we);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let we=0;we<te.locationSize;we++)N(te.location+we,L/te.locationSize,Re,ye,Le*Ge,(Me+L/te.locationSize*we)*Ge,ne)}else{if(be.isInstancedBufferAttribute){for(let he=0;he<te.locationSize;he++)x(te.location+he,be.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let he=0;he<te.locationSize;he++)S(te.location+he);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let he=0;he<te.locationSize;he++)N(te.location+he,L/te.locationSize,Re,ye,L*Ge,L/te.locationSize*he*Ge,ne)}}else if(F!==void 0){const ye=F[G];if(ye!==void 0)switch(ye.length){case 2:r.vertexAttrib2fv(te.location,ye);break;case 3:r.vertexAttrib3fv(te.location,ye);break;case 4:r.vertexAttrib4fv(te.location,ye);break;default:r.vertexAttrib1fv(te.location,ye)}}}}w()}function I(){q();for(const D in s){const k=s[D];for(const se in k){const oe=k[se];for(const me in oe)_(oe[me].object),delete oe[me];delete k[se]}delete s[D]}}function z(D){if(s[D.id]===void 0)return;const k=s[D.id];for(const se in k){const oe=k[se];for(const me in oe)_(oe[me].object),delete oe[me];delete k[se]}delete s[D.id]}function B(D){for(const k in s){const se=s[k];if(se[D.id]===void 0)continue;const oe=se[D.id];for(const me in oe)_(oe[me].object),delete oe[me];delete se[D.id]}}function q(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:S,disableUnusedAttributes:w}}function RA(r,e,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function h(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=_[E];i.update(M,s,1)}function m(p,_,g,v){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],_[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,v,0,g);let E=0;for(let T=0;T<g;T++)E+=_[T]*v[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function CA(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Di&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const q=B===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==gi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==zi&&!q)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ut("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),O=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:O,maxSamples:I,samples:z}}function wA(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Dr,h=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const M=g.length!==0||v||s!==0||l;return l=v,s=g.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,M){const E=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,x=r.get(g);if(!l||E===null||E.length===0||c&&!S)c?_(null):p();else{const w=c?0:s,N=w*4;let O=x.clippingState||null;m.value=O,O=_(E,v,N,M);for(let I=0;I!==N;++I)O[I]=i[I];x.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,v,M,E){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=m.value,E!==!0||S===null){const x=M+T*4,w=v.matrixWorldInverse;h.getNormalMatrix(w),(S===null||S.length<x)&&(S=new Float32Array(x));for(let N=0,O=M;N!==T;++N,O+=4)f.copy(g[N]).applyMatrix4(w,h),f.normal.toArray(S,O),S[O+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function DA(r){let e=new WeakMap;function i(f,h){return h===Eh?f.mapping=Fr:h===Th&&(f.mapping=Bs),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Eh||h===Th)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new xx(m.height);return p.fromEquirectangularTexture(r,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ar=4,ev=[.125,.215,.35,.446,.526,.582],Lr=20,NA=256,Yo=new Rp,tv=new Ot;let sh=null,oh=0,lh=0,ch=!1;const UA=new re;class nv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=UA}=c;sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,oh,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Fr||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Sa,format:Di,colorSpace:zs,depthBuffer:!1},l=iv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LA(c)),this._blurMaterial=PA(c,e,i),this._ggxMaterial=OA(c,e,i)}return l}_compileMaterial(e){const i=new Ea(new ii,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,s,l,c){const m=new Ci(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,M=g.toneMapping;g.getClearColor(tv),g.toneMapping=Gi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ea(new pl,new hx({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let x=!1;const w=e.background;w?w.isColor&&(S.color.copy(w),e.background=null,x=!0):(S.color.copy(tv),x=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):O===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const I=this._cubeSize;Ls(l,O*I,N>2?I:0,I,I),g.setRenderTarget(l),x&&g.render(T,m),g.render(e,m)}g.toneMapping=M,g.autoClear=v,e.background=w}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Fr||e.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Yo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),v=0+p*1.25,M=g*v,{_lodMax:E}=this,T=this._sizeLods[s],S=3*T*(s>E-ar?s-E+ar:0),x=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Ls(c,S,x,3*T,2*T),l.setRenderTarget(c),l.render(h,Yo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Ls(e,S,x,3*T,2*T),l.setRenderTarget(e),l.render(h,Yo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const v=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Lr-1),T=c/E,S=isFinite(c)?1+Math.floor(_*T):Lr;S>Lr&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Lr}`);const x=[];let w=0;for(let B=0;B<Lr;++B){const q=B/T,C=Math.exp(-q*q/2);x.push(C),B===0?w+=C:B<S&&(w+=2*C)}for(let B=0;B<x.length;B++)x[B]=x[B]/w;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-s;const O=this._sizeLods[l],I=3*O*(l>N-ar?l-N+ar:0),z=4*(this._cubeSize-O);Ls(i,I,z,3*O,2*O),m.setRenderTarget(i),m.render(g,Yo)}}function LA(r){const e=[],i=[],s=[];let l=r;const c=r-ar+1+ev.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-ar?m=ev[f-r+ar-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,E=6,T=3,S=2,x=1,w=new Float32Array(T*E*M),N=new Float32Array(S*E*M),O=new Float32Array(x*E*M);for(let z=0;z<M;z++){const B=z%3*2/3-1,q=z>2?0:-1,C=[B,q,0,B+2/3,q,0,B+2/3,q+1,0,B,q,0,B+2/3,q+1,0,B,q+1,0];w.set(C,T*E*z),N.set(v,S*E*z);const D=[z,z,z,z,z,z];O.set(D,x*E*z)}const I=new ii;I.setAttribute("position",new Bn(w,T)),I.setAttribute("uv",new Bn(N,S)),I.setAttribute("faceIndex",new Bn(O,x)),s.push(new Ea(I,null)),l>ar&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function iv(r,e,i){const s=new Vi(r,e,i);return s.texture.mapping=gu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ls(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function OA(r,e,i){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function PA(r,e,i){const s=new Float32Array(Lr),l=new re(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:vu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function av(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function rv(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

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
	`}function FA(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Eh||m===Th,_=m===Fr||m===Bs;if(p||_){let g=e.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new nv(r)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new nv(r)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function BA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&al("WebGLRenderer: "+s+" extension not supported."),l}}}function IA(r,e,i,s){const l={},c=new WeakMap;function f(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const M=c.get(v);M&&(e.remove(M),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER)}function p(g){const v=[],M=g.index,E=g.attributes.position;let T=0;if(M!==null){const w=M.array;T=M.version;for(let N=0,O=w.length;N<O;N+=3){const I=w[N+0],z=w[N+1],B=w[N+2];v.push(I,z,z,B,B,I)}}else if(E!==void 0){const w=E.array;T=E.version;for(let N=0,O=w.length/3-1;N<O;N+=3){const I=N+0,z=N+1,B=N+2;v.push(I,z,z,B,B,I)}}else return;const S=new(cx(v)?mx:px)(v,1);S.version=T;const x=c.get(g);x&&e.remove(x),c.set(g,S)}function _(g){const v=c.get(g);if(v){const M=g.index;M!==null&&v.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function zA(r,e,i){let s;function l(v){s=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,M){r.drawElements(s,M,c,v*f),i.update(M,s,1)}function p(v,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,v*f,E),i.update(M,s,E))}function _(v,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=M[x];i.update(S,s,1)}function g(v,M,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)p(v[x]/f,M[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,v,0,T,0,E);let x=0;for(let w=0;w<E;w++)x+=M[w]*T[w];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function HA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Dt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function GA(r,e,i){const s=new WeakMap,l=new sn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let v=s.get(h);if(v===void 0||v.count!==g){let D=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var M=D;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let O=0;E===!0&&(O=1),T===!0&&(O=2),S===!0&&(O=3);let I=h.attributes.position.count*O,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*z*4*g),q=new ux(B,I,z,g);q.type=zi,q.needsUpdate=!0;const C=O*4;for(let k=0;k<g;k++){const se=x[k],oe=w[k],me=N[k],ue=I*z*4*k;for(let F=0;F<se.count;F++){const G=F*C;E===!0&&(l.fromBufferAttribute(se,F),B[ue+G+0]=l.x,B[ue+G+1]=l.y,B[ue+G+2]=l.z,B[ue+G+3]=0),T===!0&&(l.fromBufferAttribute(oe,F),B[ue+G+4]=l.x,B[ue+G+5]=l.y,B[ue+G+6]=l.z,B[ue+G+7]=0),S===!0&&(l.fromBufferAttribute(me,F),B[ue+G+8]=l.x,B[ue+G+9]=l.y,B[ue+G+10]=l.z,B[ue+G+11]=me.itemSize===4?l.w:1)}}v={count:g,texture:q,size:new Xt(I,z)},s.set(h,v),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function VA(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const kA={[Yv]:"LINEAR_TONE_MAPPING",[Zv]:"REINHARD_TONE_MAPPING",[Kv]:"CINEON_TONE_MAPPING",[Qv]:"ACES_FILMIC_TONE_MAPPING",[$v]:"AGX_TONE_MAPPING",[ex]:"NEUTRAL_TONE_MAPPING",[Jv]:"CUSTOM_TONE_MAPPING"};function XA(r,e,i,s,l){const c=new Vi(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Vi(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),h=new ii;h.setAttribute("position",new Ni([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ni([0,2,0,0,2,0],2));const m=new zE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ea(h,m),_=new Rp(-1,1,1,-1,0,1);let g=null,v=null,M=!1,E,T=null,S=[],x=!1;this.setSize=function(w,N){c.setSize(w,N),f.setSize(w,N);for(let O=0;O<S.length;O++){const I=S[O];I.setSize&&I.setSize(w,N)}},this.setEffects=function(w){S=w,x=S.length>0&&S[0].isRenderPass===!0;const N=c.width,O=c.height;for(let I=0;I<S.length;I++){const z=S[I];z.setSize&&z.setSize(N,O)}},this.begin=function(w,N){if(M||w.toneMapping===Gi&&S.length===0)return!1;if(T=N,N!==null){const O=N.width,I=N.height;(c.width!==O||c.height!==I)&&this.setSize(O,I)}return x===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=Gi,!0},this.hasRenderPass=function(){return x},this.end=function(w,N){w.toneMapping=E,M=!0;let O=c,I=f;for(let z=0;z<S.length;z++){const B=S[z];if(B.enabled!==!1&&(B.render(w,I,O,N),B.needsSwap!==!1)){const q=O;O=I,I=q}}if(g!==w.outputColorSpace||v!==w.toneMapping){g=w.outputColorSpace,v=w.toneMapping,m.defines={},At.getTransfer(g)===Ht&&(m.defines.SRGB_TRANSFER="");const z=kA[v];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,w.setRenderTarget(T),w.render(p,_),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const bx=new In,lp=new rl(1,1),Ex=new ux,Tx=new uE,Ax=new vx,sv=[],ov=[],lv=new Float32Array(16),cv=new Float32Array(9),uv=new Float32Array(4);function Ws(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=sv[l];if(c===void 0&&(c=new Float32Array(l),sv[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function mn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function gn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function xu(r,e){let i=ov[e];i===void 0&&(i=new Int32Array(e),ov[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function WA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function jA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2fv(this.addr,e),gn(i,e)}}function qA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;r.uniform3fv(this.addr,e),gn(i,e)}}function YA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4fv(this.addr,e),gn(i,e)}}function ZA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;uv.set(s),r.uniformMatrix2fv(this.addr,!1,uv),gn(i,s)}}function KA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;cv.set(s),r.uniformMatrix3fv(this.addr,!1,cv),gn(i,s)}}function QA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;lv.set(s),r.uniformMatrix4fv(this.addr,!1,lv),gn(i,s)}}function JA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function $A(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2iv(this.addr,e),gn(i,e)}}function eR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3iv(this.addr,e),gn(i,e)}}function tR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4iv(this.addr,e),gn(i,e)}}function nR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function iR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2uiv(this.addr,e),gn(i,e)}}function aR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3uiv(this.addr,e),gn(i,e)}}function rR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4uiv(this.addr,e),gn(i,e)}}function sR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(lp.compareFunction=i.isReversedDepthBuffer()?Ep:bp,c=lp):c=bx,i.setTexture2D(e||c,l)}function oR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Tx,l)}function lR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Ax,l)}function cR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Ex,l)}function uR(r){switch(r){case 5126:return WA;case 35664:return jA;case 35665:return qA;case 35666:return YA;case 35674:return ZA;case 35675:return KA;case 35676:return QA;case 5124:case 35670:return JA;case 35667:case 35671:return $A;case 35668:case 35672:return eR;case 35669:case 35673:return tR;case 5125:return nR;case 36294:return iR;case 36295:return aR;case 36296:return rR;case 35678:case 36198:case 36298:case 36306:case 35682:return sR;case 35679:case 36299:case 36307:return oR;case 35680:case 36300:case 36308:case 36293:return lR;case 36289:case 36303:case 36311:case 36292:return cR}}function fR(r,e){r.uniform1fv(this.addr,e)}function dR(r,e){const i=Ws(e,this.size,2);r.uniform2fv(this.addr,i)}function hR(r,e){const i=Ws(e,this.size,3);r.uniform3fv(this.addr,i)}function pR(r,e){const i=Ws(e,this.size,4);r.uniform4fv(this.addr,i)}function mR(r,e){const i=Ws(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function gR(r,e){const i=Ws(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function _R(r,e){const i=Ws(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function vR(r,e){r.uniform1iv(this.addr,e)}function xR(r,e){r.uniform2iv(this.addr,e)}function yR(r,e){r.uniform3iv(this.addr,e)}function SR(r,e){r.uniform4iv(this.addr,e)}function MR(r,e){r.uniform1uiv(this.addr,e)}function bR(r,e){r.uniform2uiv(this.addr,e)}function ER(r,e){r.uniform3uiv(this.addr,e)}function TR(r,e){r.uniform4uiv(this.addr,e)}function AR(r,e,i){const s=this.cache,l=e.length,c=xu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=lp:f=bx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function RR(r,e,i){const s=this.cache,l=e.length,c=xu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Tx,c[f])}function CR(r,e,i){const s=this.cache,l=e.length,c=xu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Ax,c[f])}function wR(r,e,i){const s=this.cache,l=e.length,c=xu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Ex,c[f])}function DR(r){switch(r){case 5126:return fR;case 35664:return dR;case 35665:return hR;case 35666:return pR;case 35674:return mR;case 35675:return gR;case 35676:return _R;case 5124:case 35670:return vR;case 35667:case 35671:return xR;case 35668:case 35672:return yR;case 35669:case 35673:return SR;case 5125:return MR;case 36294:return bR;case 36295:return ER;case 36296:return TR;case 35678:case 36198:case 36298:case 36306:case 35682:return AR;case 35679:case 36299:case 36307:return RR;case 35680:case 36300:case 36308:case 36293:return CR;case 36289:case 36303:case 36311:case 36292:return wR}}class NR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=uR(i.type)}}class UR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=DR(i.type)}}class LR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function fv(r,e){r.seq.push(e),r.map[e.id]=e}function OR(r,e,i){const s=r.name,l=s.length;for(uh.lastIndex=0;;){const c=uh.exec(s),f=uh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){fv(i,p===void 0?new NR(h,r,e):new UR(h,r,e));break}else{let g=i.map[h];g===void 0&&(g=new LR(h),fv(i,g)),i=g}}}class ou{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);OR(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function dv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const PR=37297;let FR=0;function BR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const hv=new gt;function IR(r){At._getMatrix(hv,At.workingColorSpace,r);const e=`mat3( ${hv.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(r)){case cu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function pv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+BR(r.getShaderSource(e),h)}else return c}function zR(r,e){const i=IR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const HR={[Yv]:"Linear",[Zv]:"Reinhard",[Kv]:"Cineon",[Qv]:"ACESFilmic",[$v]:"AgX",[ex]:"Neutral",[Jv]:"Custom"};function GR(r,e){const i=HR[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Jc=new re;function VR(){At.getLuminanceCoefficients(Jc);const r=Jc.x.toFixed(4),e=Jc.y.toFixed(4),i=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function XR(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function WR(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function Jo(r){return r!==""}function mv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jR=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(r){return r.replace(jR,YR)}const qR=new Map;function YR(r,e){let i=_t[e];if(i===void 0){const s=qR.get(e);if(s!==void 0)i=_t[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return cp(i)}const ZR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(r){return r.replace(ZR,KR)}function KR(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function vv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const QR={[nu]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function JR(r){return QR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $R={[Fr]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[gu]:"ENVMAP_TYPE_CUBE_UV"};function e2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":$R[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const t2={[Bs]:"ENVMAP_MODE_REFRACTION"};function n2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":t2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i2={[qv]:"ENVMAP_BLENDING_MULTIPLY",[Xb]:"ENVMAP_BLENDING_MIX",[Wb]:"ENVMAP_BLENDING_ADD"};function a2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":i2[r.combine]||"ENVMAP_BLENDING_NONE"}function r2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function s2(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=JR(i),p=e2(i),_=n2(i),g=a2(i),v=r2(i),M=kR(i),E=XR(c),T=l.createProgram();let S,x,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),x.length>0&&(x+=`
`)):(S=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),x=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?_t.tonemapping_pars_fragment:"",i.toneMapping!==Gi?GR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,zR("linearToOutputTexel",i.outputColorSpace),VR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),f=cp(f),f=mv(f,i),f=gv(f,i),h=cp(h),h=mv(h,i),h=gv(h,i),f=_v(f),h=_v(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===C_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===C_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=w+S+f,O=w+x+h,I=dv(l,l.VERTEX_SHADER,N),z=dv(l,l.FRAGMENT_SHADER,O);l.attachShader(T,I),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(k){if(r.debug.checkShaderErrors){const se=l.getProgramInfoLog(T)||"",oe=l.getShaderInfoLog(I)||"",me=l.getShaderInfoLog(z)||"",ue=se.trim(),F=oe.trim(),G=me.trim();let te=!0,be=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,I,z);else{const ye=pv(l,I,"vertex"),L=pv(l,z,"fragment");Dt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ue+`
`+ye+`
`+L)}else ue!==""?ut("WebGLProgram: Program Info Log:",ue):(F===""||G==="")&&(be=!1);be&&(k.diagnostics={runnable:te,programLog:ue,vertexShader:{log:F,prefix:S},fragmentShader:{log:G,prefix:x}})}l.deleteShader(I),l.deleteShader(z),q=new ou(l,T),C=WR(l,T)}let q;this.getUniforms=function(){return q===void 0&&B(this),q};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,PR)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=FR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=z,this}let o2=0;class l2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new c2(e),i.set(e,s)),s}}class c2{constructor(e){this.id=o2++,this.code=e,this.usedTimes=0}}function u2(r,e,i,s,l,c,f){const h=new fx,m=new l2,p=new Set,_=[],g=new Map,v=l.logarithmicDepthBuffer;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,D,k,se,oe){const me=se.fog,ue=oe.geometry,F=C.isMeshStandardMaterial?se.environment:null,G=(C.isMeshStandardMaterial?i:e).get(C.envMap||F),te=G&&G.mapping===gu?G.image.height:null,be=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&ut("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const ye=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,L=ye!==void 0?ye.length:0;let $=0;ue.morphAttributes.position!==void 0&&($=1),ue.morphAttributes.normal!==void 0&&($=2),ue.morphAttributes.color!==void 0&&($=3);let _e,Re,Ge,ne;if(be){const Tt=Ii[be];_e=Tt.vertexShader,Re=Tt.fragmentShader}else _e=C.vertexShader,Re=C.fragmentShader,m.update(C),Ge=m.getVertexShaderID(C),ne=m.getFragmentShaderID(C);const he=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),Me=oe.isInstancedMesh===!0,we=oe.isBatchedMesh===!0,Je=!!C.map,Rt=!!C.matcap,ot=!!G,nt=!!C.aoMap,vt=!!C.lightMap,lt=!!C.bumpMap,Kt=!!C.normalMap,V=!!C.displacementMap,Wt=!!C.emissiveMap,Ze=!!C.metalnessMap,De=!!C.roughnessMap,We=C.anisotropy>0,U=C.clearcoat>0,b=C.dispersion>0,W=C.iridescence>0,de=C.sheen>0,ve=C.transmission>0,ce=We&&!!C.anisotropyMap,Xe=U&&!!C.clearcoatMap,Ue=U&&!!C.clearcoatNormalMap,je=U&&!!C.clearcoatRoughnessMap,at=W&&!!C.iridescenceMap,Ee=W&&!!C.iridescenceThicknessMap,Ae=de&&!!C.sheenColorMap,Ve=de&&!!C.sheenRoughnessMap,ze=!!C.specularMap,Oe=!!C.specularColorMap,pt=!!C.specularIntensityMap,j=ve&&!!C.transmissionMap,Fe=ve&&!!C.thicknessMap,Ce=!!C.gradientMap,He=!!C.alphaMap,Te=C.alphaTest>0,Se=!!C.alphaHash,Ne=!!C.extensions;let ct=Gi;C.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ct=r.toneMapping);const Ft={shaderID:be,shaderType:C.type,shaderName:C.name,vertexShader:_e,fragmentShader:Re,defines:C.defines,customVertexShaderID:Ge,customFragmentShaderID:ne,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:we,batchingColor:we&&oe._colorsTexture!==null,instancing:Me,instancingColor:Me&&oe.instanceColor!==null,instancingMorph:Me&&oe.morphTexture!==null,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:zs,alphaToCoverage:!!C.alphaToCoverage,map:Je,matcap:Rt,envMap:ot,envMapMode:ot&&G.mapping,envMapCubeUVHeight:te,aoMap:nt,lightMap:vt,bumpMap:lt,normalMap:Kt,displacementMap:V,emissiveMap:Wt,normalMapObjectSpace:Kt&&C.normalMapType===Zb,normalMapTangentSpace:Kt&&C.normalMapType===Yb,metalnessMap:Ze,roughnessMap:De,anisotropy:We,anisotropyMap:ce,clearcoat:U,clearcoatMap:Xe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:je,dispersion:b,iridescence:W,iridescenceMap:at,iridescenceThicknessMap:Ee,sheen:de,sheenColorMap:Ae,sheenRoughnessMap:Ve,specularMap:ze,specularColorMap:Oe,specularIntensityMap:pt,transmission:ve,transmissionMap:j,thicknessMap:Fe,gradientMap:Ce,opaque:C.transparent===!1&&C.blending===Os&&C.alphaToCoverage===!1,alphaMap:He,alphaTest:Te,alphaHash:Se,combine:C.combine,mapUv:Je&&T(C.map.channel),aoMapUv:nt&&T(C.aoMap.channel),lightMapUv:vt&&T(C.lightMap.channel),bumpMapUv:lt&&T(C.bumpMap.channel),normalMapUv:Kt&&T(C.normalMap.channel),displacementMapUv:V&&T(C.displacementMap.channel),emissiveMapUv:Wt&&T(C.emissiveMap.channel),metalnessMapUv:Ze&&T(C.metalnessMap.channel),roughnessMapUv:De&&T(C.roughnessMap.channel),anisotropyMapUv:ce&&T(C.anisotropyMap.channel),clearcoatMapUv:Xe&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&T(C.sheenRoughnessMap.channel),specularMapUv:ze&&T(C.specularMap.channel),specularColorMapUv:Oe&&T(C.specularColorMap.channel),specularIntensityMapUv:pt&&T(C.specularIntensityMap.channel),transmissionMapUv:j&&T(C.transmissionMap.channel),thicknessMapUv:Fe&&T(C.thicknessMap.channel),alphaMapUv:He&&T(C.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Kt||We),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!ue.attributes.uv&&(Je||He),fog:!!me,useFog:C.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Le,skinning:oe.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:$,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:Je&&C.map.isVideoTexture===!0&&At.getTransfer(C.map.colorSpace)===Ht,decodeVideoTextureEmissive:Wt&&C.emissiveMap.isVideoTexture===!0&&At.getTransfer(C.emissiveMap.colorSpace)===Ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ma,flipSided:C.side===qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ne&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&C.extensions.multiDraw===!0||we)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ft.vertexUv1s=p.has(1),Ft.vertexUv2s=p.has(2),Ft.vertexUv3s=p.has(3),p.clear(),Ft}function x(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)D.push(k),D.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(w(D,C),N(D,C),D.push(r.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function w(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function N(C,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),C.push(h.mask)}function O(C){const D=E[C.type];let k;if(D){const se=Ii[D];k=bE.clone(se.uniforms)}else k=C.uniforms;return k}function I(C,D){let k=g.get(D);return k!==void 0?++k.usedTimes:(k=new s2(r,D,C,c),_.push(k),g.set(D,k)),k}function z(C){if(--C.usedTimes===0){const D=_.indexOf(C);_[D]=_[_.length-1],_.pop(),g.delete(C.cacheKey),C.destroy()}}function B(C){m.remove(C)}function q(){m.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:O,acquireProgram:I,releaseProgram:z,releaseShaderCache:B,programs:_,dispose:q}}function f2(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function d2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function xv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function yv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g,v,M,E,T,S){let x=r[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:M,groupOrder:E,renderOrder:g.renderOrder,z:T,group:S},r[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=M,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=T,x.group=S),e++,x}function h(g,v,M,E,T,S){const x=f(g,v,M,E,T,S);M.transmission>0?s.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(g,v,M,E,T,S){const x=f(g,v,M,E,T,S);M.transmission>0?s.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,v){i.length>1&&i.sort(g||d2),s.length>1&&s.sort(v||xv),l.length>1&&l.sort(v||xv)}function _(){for(let g=e,v=r.length;g<v;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function h2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new yv,r.set(s,[f])):l>=c.length?(f=new yv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function p2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Ot};break;case"SpotLight":i={position:new re,direction:new re,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":i={color:new Ot,position:new re,halfWidth:new re,halfHeight:new re};break}return r[e.id]=i,i}}}function m2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let g2=0;function _2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function v2(r){const e=new p2,i=m2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new re);const l=new re,c=new nn,f=new nn;function h(p){let _=0,g=0,v=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,E=0,T=0,S=0,x=0,w=0,N=0,O=0,I=0,z=0,B=0;p.sort(_2);for(let C=0,D=p.length;C<D;C++){const k=p[C],se=k.color,oe=k.intensity,me=k.distance;let ue=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Is?ue=k.shadow.map.texture:ue=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=se.r*oe,g+=se.g*oe,v+=se.b*oe;else if(k.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(k.sh.coefficients[F],oe);B++}else if(k.isDirectionalLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,s.directionalShadow[M]=te,s.directionalShadowMap[M]=ue,s.directionalShadowMatrix[M]=k.shadow.matrix,w++}s.directional[M]=F,M++}else if(k.isSpotLight){const F=e.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(se).multiplyScalar(oe),F.distance=me,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,s.spot[T]=F;const G=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,G.updateMatrices(k),k.castShadow&&z++),s.spotLightMatrix[T]=G.matrix,k.castShadow){const te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,s.spotShadow[T]=te,s.spotShadowMap[T]=ue,O++}T++}else if(k.isRectAreaLight){const F=e.get(k);F.color.copy(se).multiplyScalar(oe),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=F,S++}else if(k.isPointLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const G=k.shadow,te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,te.shadowCameraNear=G.camera.near,te.shadowCameraFar=G.camera.far,s.pointShadow[E]=te,s.pointShadowMap[E]=ue,s.pointShadowMatrix[E]=k.shadow.matrix,N++}s.point[E]=F,E++}else if(k.isHemisphereLight){const F=e.get(k);F.skyColor.copy(k.color).multiplyScalar(oe),F.groundColor.copy(k.groundColor).multiplyScalar(oe),s.hemi[x]=F,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=v;const q=s.hash;(q.directionalLength!==M||q.pointLength!==E||q.spotLength!==T||q.rectAreaLength!==S||q.hemiLength!==x||q.numDirectionalShadows!==w||q.numPointShadows!==N||q.numSpotShadows!==O||q.numSpotMaps!==I||q.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=S,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=O+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=B,q.directionalLength=M,q.pointLength=E,q.spotLength=T,q.rectAreaLength=S,q.hemiLength=x,q.numDirectionalShadows=w,q.numPointShadows=N,q.numSpotShadows=O,q.numSpotMaps=I,q.numLightProbes=B,s.version=g2++)}function m(p,_){let g=0,v=0,M=0,E=0,T=0;const S=_.matrixWorldInverse;for(let x=0,w=p.length;x<w;x++){const N=p[x];if(N.isDirectionalLight){const O=s.directional[g];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),g++}else if(N.isSpotLight){const O=s.spot[M];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),M++}else if(N.isRectAreaLight){const O=s.rectArea[E];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(S),f.identity(),c.copy(N.matrixWorld),c.premultiply(S),f.extractRotation(c),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const O=s.point[v];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(S),v++}else if(N.isHemisphereLight){const O=s.hemi[T];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:s}}function Sv(r){const e=new v2(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function x2(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new Sv(r),e.set(l,[h])):c>=f.length?(h=new Sv(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S2=`uniform sampler2D shadow_pass;
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
}`,M2=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],b2=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],Mv=new nn,Zo=new re,fh=new re;function E2(r,e,i){let s=new yx;const l=new Xt,c=new Xt,f=new sn,h=new HE,m=new GE,p={},_=i.maxTextureSize,g={[rr]:qn,[qn]:rr,[ma]:ma},v=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:y2,fragmentShader:S2}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new ii;E.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ea(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let x=this.type;this.render=function(z,B,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;z.type===Tb&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=nu);const C=r.getRenderTarget(),D=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),se=r.state;se.setBlending(va),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const oe=x!==this.type;oe&&B.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(ue=>ue.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,ue=z.length;me<ue;me++){const F=z[me],G=F.shadow;if(G===void 0){ut("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const te=G.getFrameExtents();if(l.multiply(te),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/te.x),l.x=c.x*te.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/te.y),l.y=c.y*te.y,G.mapSize.y=c.y)),G.map===null||oe===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Qo){if(F.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Vi(l.x,l.y,{format:Is,type:Sa,minFilter:On,magFilter:On,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new rl(l.x,l.y,zi),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Ma,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn}else{F.isPointLight?(G.map=new xx(l.x),G.map.depthTexture=new IE(l.x,Xi)):(G.map=new Vi(l.x,l.y),G.map.depthTexture=new rl(l.x,l.y,Xi)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Ma;const ye=r.state.buffers.depth.getReversed();this.type===nu?(G.map.depthTexture.compareFunction=ye?Ep:bp,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn)}G.camera.updateProjectionMatrix()}const be=G.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<be;ye++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,ye),r.clear();else{ye===0&&(r.setRenderTarget(G.map),r.clear());const L=G.getViewport(ye);f.set(c.x*L.x,c.y*L.y,c.x*L.z,c.y*L.w),se.viewport(f)}if(F.isPointLight){const L=G.camera,$=G.matrix,_e=F.distance||L.far;_e!==L.far&&(L.far=_e,L.updateProjectionMatrix()),Zo.setFromMatrixPosition(F.matrixWorld),L.position.copy(Zo),fh.copy(L.position),fh.add(M2[ye]),L.up.copy(b2[ye]),L.lookAt(fh),L.updateMatrixWorld(),$.makeTranslation(-Zo.x,-Zo.y,-Zo.z),Mv.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Mv,L.coordinateSystem,L.reversedDepth)}else G.updateMatrices(F);s=G.getFrustum(),O(B,q,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===Qo&&w(G,q),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(C,D,k)};function w(z,B){const q=e.update(T);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Vi(l.x,l.y,{format:Is,type:Sa})),v.uniforms.shadow_pass.value=z.map.depthTexture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(B,null,q,v,T,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(B,null,q,M,T,null)}function N(z,B,q,C){let D=null;const k=q.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)D=k;else if(D=q.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const se=D.uuid,oe=B.uuid;let me=p[se];me===void 0&&(me={},p[se]=me);let ue=me[oe];ue===void 0&&(ue=D.clone(),me[oe]=ue,B.addEventListener("dispose",I)),D=ue}if(D.visible=B.visible,D.wireframe=B.wireframe,C===Qo?D.side=B.shadowSide!==null?B.shadowSide:B.side:D.side=B.shadowSide!==null?B.shadowSide:g[B.side],D.alphaMap=B.alphaMap,D.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,D.map=B.map,D.clipShadows=B.clipShadows,D.clippingPlanes=B.clippingPlanes,D.clipIntersection=B.clipIntersection,D.displacementMap=B.displacementMap,D.displacementScale=B.displacementScale,D.displacementBias=B.displacementBias,D.wireframeLinewidth=B.wireframeLinewidth,D.linewidth=B.linewidth,q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const se=r.properties.get(D);se.light=q}return D}function O(z,B,q,C,D){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===Qo)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,z.matrixWorld);const oe=e.update(z),me=z.material;if(Array.isArray(me)){const ue=oe.groups;for(let F=0,G=ue.length;F<G;F++){const te=ue[F],be=me[te.materialIndex];if(be&&be.visible){const ye=N(z,be,C,D);z.onBeforeShadow(r,z,B,q,oe,ye,te),r.renderBufferDirect(q,null,oe,ye,z,te),z.onAfterShadow(r,z,B,q,oe,ye,te)}}}else if(me.visible){const ue=N(z,me,C,D);z.onBeforeShadow(r,z,B,q,oe,ue,null),r.renderBufferDirect(q,null,oe,ue,z,null),z.onAfterShadow(r,z,B,q,oe,ue,null)}}const se=z.children;for(let oe=0,me=se.length;oe<me;oe++)O(se[oe],B,q,C,D)}function I(z){z.target.removeEventListener("dispose",I);for(const q in p){const C=p[q],D=z.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const T2={[_h]:vh,[xh]:Mh,[yh]:bh,[Fs]:Sh,[vh]:_h,[Mh]:xh,[bh]:yh,[Sh]:Fs};function A2(r,e){function i(){let j=!1;const Fe=new sn;let Ce=null;const He=new sn(0,0,0,0);return{setMask:function(Te){Ce!==Te&&!j&&(r.colorMask(Te,Te,Te,Te),Ce=Te)},setLocked:function(Te){j=Te},setClear:function(Te,Se,Ne,ct,Ft){Ft===!0&&(Te*=ct,Se*=ct,Ne*=ct),Fe.set(Te,Se,Ne,ct),He.equals(Fe)===!1&&(r.clearColor(Te,Se,Ne,ct),He.copy(Fe))},reset:function(){j=!1,Ce=null,He.set(-1,0,0,0)}}}function s(){let j=!1,Fe=!1,Ce=null,He=null,Te=null;return{setReversed:function(Se){if(Fe!==Se){const Ne=e.get("EXT_clip_control");Se?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),Fe=Se;const ct=Te;Te=null,this.setClear(ct)}},getReversed:function(){return Fe},setTest:function(Se){Se?he(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(Se){Ce!==Se&&!j&&(r.depthMask(Se),Ce=Se)},setFunc:function(Se){if(Fe&&(Se=T2[Se]),He!==Se){switch(Se){case _h:r.depthFunc(r.NEVER);break;case vh:r.depthFunc(r.ALWAYS);break;case xh:r.depthFunc(r.LESS);break;case Fs:r.depthFunc(r.LEQUAL);break;case yh:r.depthFunc(r.EQUAL);break;case Sh:r.depthFunc(r.GEQUAL);break;case Mh:r.depthFunc(r.GREATER);break;case bh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}He=Se}},setLocked:function(Se){j=Se},setClear:function(Se){Te!==Se&&(Fe&&(Se=1-Se),r.clearDepth(Se),Te=Se)},reset:function(){j=!1,Ce=null,He=null,Te=null,Fe=!1}}}function l(){let j=!1,Fe=null,Ce=null,He=null,Te=null,Se=null,Ne=null,ct=null,Ft=null;return{setTest:function(Tt){j||(Tt?he(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(Tt){Fe!==Tt&&!j&&(r.stencilMask(Tt),Fe=Tt)},setFunc:function(Tt,Dn,xi){(Ce!==Tt||He!==Dn||Te!==xi)&&(r.stencilFunc(Tt,Dn,xi),Ce=Tt,He=Dn,Te=xi)},setOp:function(Tt,Dn,xi){(Se!==Tt||Ne!==Dn||ct!==xi)&&(r.stencilOp(Tt,Dn,xi),Se=Tt,Ne=Dn,ct=xi)},setLocked:function(Tt){j=Tt},setClear:function(Tt){Ft!==Tt&&(r.clearStencil(Tt),Ft=Tt)},reset:function(){j=!1,Fe=null,Ce=null,He=null,Te=null,Se=null,Ne=null,ct=null,Ft=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,M=[],E=null,T=!1,S=null,x=null,w=null,N=null,O=null,I=null,z=null,B=new Ot(0,0,0),q=0,C=!1,D=null,k=null,se=null,oe=null,me=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(te)[1]),F=G>=1):te.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),F=G>=2);let be=null,ye={};const L=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),_e=new sn().fromArray(L),Re=new sn().fromArray($);function Ge(j,Fe,Ce,He){const Te=new Uint8Array(4),Se=r.createTexture();r.bindTexture(j,Se),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ne=0;Ne<Ce;Ne++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Fe,0,r.RGBA,1,1,He,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(Fe+Ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return Se}const ne={};ne[r.TEXTURE_2D]=Ge(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=Ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=Ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=Ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),he(r.DEPTH_TEST),f.setFunc(Fs),lt(!1),Kt(M_),he(r.CULL_FACE),nt(va);function he(j){_[j]!==!0&&(r.enable(j),_[j]=!0)}function Le(j){_[j]!==!1&&(r.disable(j),_[j]=!1)}function Me(j,Fe){return g[j]!==Fe?(r.bindFramebuffer(j,Fe),g[j]=Fe,j===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Fe),j===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Fe),!0):!1}function we(j,Fe){let Ce=M,He=!1;if(j){Ce=v.get(Fe),Ce===void 0&&(Ce=[],v.set(Fe,Ce));const Te=j.textures;if(Ce.length!==Te.length||Ce[0]!==r.COLOR_ATTACHMENT0){for(let Se=0,Ne=Te.length;Se<Ne;Se++)Ce[Se]=r.COLOR_ATTACHMENT0+Se;Ce.length=Te.length,He=!0}}else Ce[0]!==r.BACK&&(Ce[0]=r.BACK,He=!0);He&&r.drawBuffers(Ce)}function Je(j){return E!==j?(r.useProgram(j),E=j,!0):!1}const Rt={[Ur]:r.FUNC_ADD,[Rb]:r.FUNC_SUBTRACT,[Cb]:r.FUNC_REVERSE_SUBTRACT};Rt[wb]=r.MIN,Rt[Db]=r.MAX;const ot={[Nb]:r.ZERO,[Ub]:r.ONE,[Lb]:r.SRC_COLOR,[mh]:r.SRC_ALPHA,[zb]:r.SRC_ALPHA_SATURATE,[Bb]:r.DST_COLOR,[Pb]:r.DST_ALPHA,[Ob]:r.ONE_MINUS_SRC_COLOR,[gh]:r.ONE_MINUS_SRC_ALPHA,[Ib]:r.ONE_MINUS_DST_COLOR,[Fb]:r.ONE_MINUS_DST_ALPHA,[Hb]:r.CONSTANT_COLOR,[Gb]:r.ONE_MINUS_CONSTANT_COLOR,[Vb]:r.CONSTANT_ALPHA,[kb]:r.ONE_MINUS_CONSTANT_ALPHA};function nt(j,Fe,Ce,He,Te,Se,Ne,ct,Ft,Tt){if(j===va){T===!0&&(Le(r.BLEND),T=!1);return}if(T===!1&&(he(r.BLEND),T=!0),j!==Ab){if(j!==S||Tt!==C){if((x!==Ur||O!==Ur)&&(r.blendEquation(r.FUNC_ADD),x=Ur,O=Ur),Tt)switch(j){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case b_:r.blendFunc(r.ONE,r.ONE);break;case E_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case T_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Dt("WebGLState: Invalid blending: ",j);break}else switch(j){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case b_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case E_:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case T_:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",j);break}w=null,N=null,I=null,z=null,B.set(0,0,0),q=0,S=j,C=Tt}return}Te=Te||Fe,Se=Se||Ce,Ne=Ne||He,(Fe!==x||Te!==O)&&(r.blendEquationSeparate(Rt[Fe],Rt[Te]),x=Fe,O=Te),(Ce!==w||He!==N||Se!==I||Ne!==z)&&(r.blendFuncSeparate(ot[Ce],ot[He],ot[Se],ot[Ne]),w=Ce,N=He,I=Se,z=Ne),(ct.equals(B)===!1||Ft!==q)&&(r.blendColor(ct.r,ct.g,ct.b,Ft),B.copy(ct),q=Ft),S=j,C=!1}function vt(j,Fe){j.side===ma?Le(r.CULL_FACE):he(r.CULL_FACE);let Ce=j.side===qn;Fe&&(Ce=!Ce),lt(Ce),j.blending===Os&&j.transparent===!1?nt(va):nt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const He=j.stencilWrite;h.setTest(He),He&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Wt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(j){D!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),D=j)}function Kt(j){j!==bb?(he(r.CULL_FACE),j!==k&&(j===M_?r.cullFace(r.BACK):j===Eb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),k=j}function V(j){j!==se&&(F&&r.lineWidth(j),se=j)}function Wt(j,Fe,Ce){j?(he(r.POLYGON_OFFSET_FILL),(oe!==Fe||me!==Ce)&&(r.polygonOffset(Fe,Ce),oe=Fe,me=Ce)):Le(r.POLYGON_OFFSET_FILL)}function Ze(j){j?he(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function De(j){j===void 0&&(j=r.TEXTURE0+ue-1),be!==j&&(r.activeTexture(j),be=j)}function We(j,Fe,Ce){Ce===void 0&&(be===null?Ce=r.TEXTURE0+ue-1:Ce=be);let He=ye[Ce];He===void 0&&(He={type:void 0,texture:void 0},ye[Ce]=He),(He.type!==j||He.texture!==Fe)&&(be!==Ce&&(r.activeTexture(Ce),be=Ce),r.bindTexture(j,Fe||ne[j]),He.type=j,He.texture=Fe)}function U(){const j=ye[be];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(j){Dt("WebGLState:",j)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(j){Dt("WebGLState:",j)}}function de(){try{r.texSubImage2D(...arguments)}catch(j){Dt("WebGLState:",j)}}function ve(){try{r.texSubImage3D(...arguments)}catch(j){Dt("WebGLState:",j)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(j){Dt("WebGLState:",j)}}function Xe(){try{r.compressedTexSubImage3D(...arguments)}catch(j){Dt("WebGLState:",j)}}function Ue(){try{r.texStorage2D(...arguments)}catch(j){Dt("WebGLState:",j)}}function je(){try{r.texStorage3D(...arguments)}catch(j){Dt("WebGLState:",j)}}function at(){try{r.texImage2D(...arguments)}catch(j){Dt("WebGLState:",j)}}function Ee(){try{r.texImage3D(...arguments)}catch(j){Dt("WebGLState:",j)}}function Ae(j){_e.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),_e.copy(j))}function Ve(j){Re.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Re.copy(j))}function ze(j,Fe){let Ce=p.get(Fe);Ce===void 0&&(Ce=new WeakMap,p.set(Fe,Ce));let He=Ce.get(j);He===void 0&&(He=r.getUniformBlockIndex(Fe,j.name),Ce.set(j,He))}function Oe(j,Fe){const He=p.get(Fe).get(j);m.get(Fe)!==He&&(r.uniformBlockBinding(Fe,He,j.__bindingPointIndex),m.set(Fe,He))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},be=null,ye={},g={},v=new WeakMap,M=[],E=null,T=!1,S=null,x=null,w=null,N=null,O=null,I=null,z=null,B=new Ot(0,0,0),q=0,C=!1,D=null,k=null,se=null,oe=null,me=null,_e.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:he,disable:Le,bindFramebuffer:Me,drawBuffers:we,useProgram:Je,setBlending:nt,setMaterial:vt,setFlipSided:lt,setCullFace:Kt,setLineWidth:V,setPolygonOffset:Wt,setScissorTest:Ze,activeTexture:De,bindTexture:We,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:at,texImage3D:Ee,updateUBOMapping:ze,uniformBlockBinding:Oe,texStorage2D:Ue,texStorage3D:je,texSubImage2D:de,texSubImage3D:ve,compressedTexSubImage2D:ce,compressedTexSubImage3D:Xe,scissor:Ae,viewport:Ve,reset:pt}}function R2(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xt,_=new WeakMap;let g;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,b){return M?new OffscreenCanvas(U,b):fu("canvas")}function T(U,b,W){let de=1;const ve=We(U);if((ve.width>W||ve.height>W)&&(de=W/Math.max(ve.width,ve.height)),de<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ce=Math.floor(de*ve.width),Xe=Math.floor(de*ve.height);g===void 0&&(g=E(ce,Xe));const Ue=b?E(ce,Xe):g;return Ue.width=ce,Ue.height=Xe,Ue.getContext("2d").drawImage(U,0,0,ce,Xe),ut("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ce+"x"+Xe+")."),Ue}else return"data"in U&&ut("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),U;return U}function S(U){return U.generateMipmaps}function x(U){r.generateMipmap(U)}function w(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(U,b,W,de,ve=!1){if(U!==null){if(r[U]!==void 0)return r[U];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ce=b;if(b===r.RED&&(W===r.FLOAT&&(ce=r.R32F),W===r.HALF_FLOAT&&(ce=r.R16F),W===r.UNSIGNED_BYTE&&(ce=r.R8)),b===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.R8UI),W===r.UNSIGNED_SHORT&&(ce=r.R16UI),W===r.UNSIGNED_INT&&(ce=r.R32UI),W===r.BYTE&&(ce=r.R8I),W===r.SHORT&&(ce=r.R16I),W===r.INT&&(ce=r.R32I)),b===r.RG&&(W===r.FLOAT&&(ce=r.RG32F),W===r.HALF_FLOAT&&(ce=r.RG16F),W===r.UNSIGNED_BYTE&&(ce=r.RG8)),b===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.RG8UI),W===r.UNSIGNED_SHORT&&(ce=r.RG16UI),W===r.UNSIGNED_INT&&(ce=r.RG32UI),W===r.BYTE&&(ce=r.RG8I),W===r.SHORT&&(ce=r.RG16I),W===r.INT&&(ce=r.RG32I)),b===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),W===r.UNSIGNED_INT&&(ce=r.RGB32UI),W===r.BYTE&&(ce=r.RGB8I),W===r.SHORT&&(ce=r.RGB16I),W===r.INT&&(ce=r.RGB32I)),b===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),W===r.UNSIGNED_INT&&(ce=r.RGBA32UI),W===r.BYTE&&(ce=r.RGBA8I),W===r.SHORT&&(ce=r.RGBA16I),W===r.INT&&(ce=r.RGBA32I)),b===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),b===r.RGBA){const Xe=ve?cu:At.getTransfer(de);W===r.FLOAT&&(ce=r.RGBA32F),W===r.HALF_FLOAT&&(ce=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ce=Xe===Ht?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function O(U,b){let W;return U?b===null||b===Xi||b===il?W=r.DEPTH24_STENCIL8:b===zi?W=r.DEPTH32F_STENCIL8:b===nl&&(W=r.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===il?W=r.DEPTH_COMPONENT24:b===zi?W=r.DEPTH_COMPONENT32F:b===nl&&(W=r.DEPTH_COMPONENT16),W}function I(U,b){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==wn&&U.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function z(U){const b=U.target;b.removeEventListener("dispose",z),q(b),b.isVideoTexture&&_.delete(b)}function B(U){const b=U.target;b.removeEventListener("dispose",B),D(b)}function q(U){const b=s.get(U);if(b.__webglInit===void 0)return;const W=U.source,de=v.get(W);if(de){const ve=de[b.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(U),Object.keys(de).length===0&&v.delete(W)}s.remove(U)}function C(U){const b=s.get(U);r.deleteTexture(b.__webglTexture);const W=U.source,de=v.get(W);delete de[b.__cacheKey],f.memory.textures--}function D(U){const b=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(b.__webglFramebuffer[de]))for(let ve=0;ve<b.__webglFramebuffer[de].length;ve++)r.deleteFramebuffer(b.__webglFramebuffer[de][ve]);else r.deleteFramebuffer(b.__webglFramebuffer[de]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[de])}else{if(Array.isArray(b.__webglFramebuffer))for(let de=0;de<b.__webglFramebuffer.length;de++)r.deleteFramebuffer(b.__webglFramebuffer[de]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let de=0;de<b.__webglColorRenderbuffer.length;de++)b.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[de]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=U.textures;for(let de=0,ve=W.length;de<ve;de++){const ce=s.get(W[de]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),f.memory.textures--),s.remove(W[de])}s.remove(U)}let k=0;function se(){k=0}function oe(){const U=k;return U>=l.maxTextures&&ut("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),k+=1,U}function me(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ue(U,b){const W=s.get(U);if(U.isVideoTexture&&Ze(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&W.__version!==U.version){const de=U.image;if(de===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,U,b);return}}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+b)}function F(U,b){const W=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){ne(W,U,b);return}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+b)}function G(U,b){const W=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){ne(W,U,b);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+b)}function te(U,b){const W=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&W.__version!==U.version){he(W,U,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+b)}const be={[Ah]:r.REPEAT,[ga]:r.CLAMP_TO_EDGE,[Rh]:r.MIRRORED_REPEAT},ye={[wn]:r.NEAREST,[jb]:r.NEAREST_MIPMAP_NEAREST,[Cc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[Od]:r.LINEAR_MIPMAP_NEAREST,[Or]:r.LINEAR_MIPMAP_LINEAR},L={[Kb]:r.NEVER,[tE]:r.ALWAYS,[Qb]:r.LESS,[bp]:r.LEQUAL,[Jb]:r.EQUAL,[Ep]:r.GEQUAL,[$b]:r.GREATER,[eE]:r.NOTEQUAL};function $(U,b){if(b.type===zi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===Od||b.magFilter===Cc||b.magFilter===Or||b.minFilter===On||b.minFilter===Od||b.minFilter===Cc||b.minFilter===Or)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,be[b.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,be[b.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,be[b.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,ye[b.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wn||b.minFilter!==Cc&&b.minFilter!==Or||b.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function _e(U,b){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",z));const de=b.source;let ve=v.get(de);ve===void 0&&(ve={},v.set(de,ve));const ce=me(b);if(ce!==U.__cacheKey){ve[ce]===void 0&&(ve[ce]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,W=!0),ve[ce].usedTimes++;const Xe=ve[U.__cacheKey];Xe!==void 0&&(ve[U.__cacheKey].usedTimes--,Xe.usedTimes===0&&C(b)),U.__cacheKey=ce,U.__webglTexture=ve[ce].texture}return W}function Re(U,b,W){return Math.floor(Math.floor(U/W)/b)}function Ge(U,b,W,de){const ce=U.updateRanges;if(ce.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,W,de,b.data);else{ce.sort((Ee,Ae)=>Ee.start-Ae.start);let Xe=0;for(let Ee=1;Ee<ce.length;Ee++){const Ae=ce[Xe],Ve=ce[Ee],ze=Ae.start+Ae.count,Oe=Re(Ve.start,b.width,4),pt=Re(Ae.start,b.width,4);Ve.start<=ze+1&&Oe===pt&&Re(Ve.start+Ve.count-1,b.width,4)===Oe?Ae.count=Math.max(Ae.count,Ve.start+Ve.count-Ae.start):(++Xe,ce[Xe]=Ve)}ce.length=Xe+1;const Ue=r.getParameter(r.UNPACK_ROW_LENGTH),je=r.getParameter(r.UNPACK_SKIP_PIXELS),at=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,Ae=ce.length;Ee<Ae;Ee++){const Ve=ce[Ee],ze=Math.floor(Ve.start/4),Oe=Math.ceil(Ve.count/4),pt=ze%b.width,j=Math.floor(ze/b.width),Fe=Oe,Ce=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),i.texSubImage2D(r.TEXTURE_2D,0,pt,j,Fe,Ce,W,de,b.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,je),r.pixelStorei(r.UNPACK_SKIP_ROWS,at)}}function ne(U,b,W){let de=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(de=r.TEXTURE_3D);const ve=_e(U,b),ce=b.source;i.bindTexture(de,U.__webglTexture,r.TEXTURE0+W);const Xe=s.get(ce);if(ce.version!==Xe.__version||ve===!0){i.activeTexture(r.TEXTURE0+W);const Ue=At.getPrimaries(At.workingColorSpace),je=b.colorSpace===ir?null:At.getPrimaries(b.colorSpace),at=b.colorSpace===ir||Ue===je?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Ee=T(b.image,!1,l.maxTextureSize);Ee=De(b,Ee);const Ae=c.convert(b.format,b.colorSpace),Ve=c.convert(b.type);let ze=N(b.internalFormat,Ae,Ve,b.colorSpace,b.isVideoTexture);$(de,b);let Oe;const pt=b.mipmaps,j=b.isVideoTexture!==!0,Fe=Xe.__version===void 0||ve===!0,Ce=ce.dataReady,He=I(b,Ee);if(b.isDepthTexture)ze=O(b.format===Pr,b.type),Fe&&(j?i.texStorage2D(r.TEXTURE_2D,1,ze,Ee.width,Ee.height):i.texImage2D(r.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Ae,Ve,null));else if(b.isDataTexture)if(pt.length>0){j&&Fe&&i.texStorage2D(r.TEXTURE_2D,He,ze,pt[0].width,pt[0].height);for(let Te=0,Se=pt.length;Te<Se;Te++)Oe=pt[Te],j?Ce&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,Ae,Ve,Oe.data):i.texImage2D(r.TEXTURE_2D,Te,ze,Oe.width,Oe.height,0,Ae,Ve,Oe.data);b.generateMipmaps=!1}else j?(Fe&&i.texStorage2D(r.TEXTURE_2D,He,ze,Ee.width,Ee.height),Ce&&Ge(b,Ee,Ae,Ve)):i.texImage2D(r.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Ae,Ve,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&Fe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,He,ze,pt[0].width,pt[0].height,Ee.depth);for(let Te=0,Se=pt.length;Te<Se;Te++)if(Oe=pt[Te],b.format!==Di)if(Ae!==null)if(j){if(Ce)if(b.layerUpdates.size>0){const Ne=$_(Oe.width,Oe.height,b.format,b.type);for(const ct of b.layerUpdates){const Ft=Oe.data.subarray(ct*Ne/Oe.data.BYTES_PER_ELEMENT,(ct+1)*Ne/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,ct,Oe.width,Oe.height,1,Ae,Ft)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Oe.width,Oe.height,Ee.depth,Ae,Oe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,ze,Oe.width,Oe.height,Ee.depth,0,Oe.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ce&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Oe.width,Oe.height,Ee.depth,Ae,Ve,Oe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,ze,Oe.width,Oe.height,Ee.depth,0,Ae,Ve,Oe.data)}else{j&&Fe&&i.texStorage2D(r.TEXTURE_2D,He,ze,pt[0].width,pt[0].height);for(let Te=0,Se=pt.length;Te<Se;Te++)Oe=pt[Te],b.format!==Di?Ae!==null?j?Ce&&i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,Ae,Oe.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,ze,Oe.width,Oe.height,0,Oe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ce&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,Ae,Ve,Oe.data):i.texImage2D(r.TEXTURE_2D,Te,ze,Oe.width,Oe.height,0,Ae,Ve,Oe.data)}else if(b.isDataArrayTexture)if(j){if(Fe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,He,ze,Ee.width,Ee.height,Ee.depth),Ce)if(b.layerUpdates.size>0){const Te=$_(Ee.width,Ee.height,b.format,b.type);for(const Se of b.layerUpdates){const Ne=Ee.data.subarray(Se*Te/Ee.data.BYTES_PER_ELEMENT,(Se+1)*Te/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Se,Ee.width,Ee.height,1,Ae,Ve,Ne)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Ve,Ee.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,Ee.width,Ee.height,Ee.depth,0,Ae,Ve,Ee.data);else if(b.isData3DTexture)j?(Fe&&i.texStorage3D(r.TEXTURE_3D,He,ze,Ee.width,Ee.height,Ee.depth),Ce&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Ve,Ee.data)):i.texImage3D(r.TEXTURE_3D,0,ze,Ee.width,Ee.height,Ee.depth,0,Ae,Ve,Ee.data);else if(b.isFramebufferTexture){if(Fe)if(j)i.texStorage2D(r.TEXTURE_2D,He,ze,Ee.width,Ee.height);else{let Te=Ee.width,Se=Ee.height;for(let Ne=0;Ne<He;Ne++)i.texImage2D(r.TEXTURE_2D,Ne,ze,Te,Se,0,Ae,Ve,null),Te>>=1,Se>>=1}}else if(pt.length>0){if(j&&Fe){const Te=We(pt[0]);i.texStorage2D(r.TEXTURE_2D,He,ze,Te.width,Te.height)}for(let Te=0,Se=pt.length;Te<Se;Te++)Oe=pt[Te],j?Ce&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ae,Ve,Oe):i.texImage2D(r.TEXTURE_2D,Te,ze,Ae,Ve,Oe);b.generateMipmaps=!1}else if(j){if(Fe){const Te=We(Ee);i.texStorage2D(r.TEXTURE_2D,He,ze,Te.width,Te.height)}Ce&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Ve,Ee)}else i.texImage2D(r.TEXTURE_2D,0,ze,Ae,Ve,Ee);S(b)&&x(de),Xe.__version=ce.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function he(U,b,W){if(b.image.length!==6)return;const de=_e(U,b),ve=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+W);const ce=s.get(ve);if(ve.version!==ce.__version||de===!0){i.activeTexture(r.TEXTURE0+W);const Xe=At.getPrimaries(At.workingColorSpace),Ue=b.colorSpace===ir?null:At.getPrimaries(b.colorSpace),je=b.colorSpace===ir||Xe===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const at=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let Se=0;Se<6;Se++)!at&&!Ee?Ae[Se]=T(b.image[Se],!0,l.maxCubemapSize):Ae[Se]=Ee?b.image[Se].image:b.image[Se],Ae[Se]=De(b,Ae[Se]);const Ve=Ae[0],ze=c.convert(b.format,b.colorSpace),Oe=c.convert(b.type),pt=N(b.internalFormat,ze,Oe,b.colorSpace),j=b.isVideoTexture!==!0,Fe=ce.__version===void 0||de===!0,Ce=ve.dataReady;let He=I(b,Ve);$(r.TEXTURE_CUBE_MAP,b);let Te;if(at){j&&Fe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,He,pt,Ve.width,Ve.height);for(let Se=0;Se<6;Se++){Te=Ae[Se].mipmaps;for(let Ne=0;Ne<Te.length;Ne++){const ct=Te[Ne];b.format!==Di?ze!==null?j?Ce&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,0,0,ct.width,ct.height,ze,ct.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,pt,ct.width,ct.height,0,ct.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,0,0,ct.width,ct.height,ze,Oe,ct.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne,pt,ct.width,ct.height,0,ze,Oe,ct.data)}}}else{if(Te=b.mipmaps,j&&Fe){Te.length>0&&He++;const Se=We(Ae[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,He,pt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ee){j?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ae[Se].width,Ae[Se].height,ze,Oe,Ae[Se].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pt,Ae[Se].width,Ae[Se].height,0,ze,Oe,Ae[Se].data);for(let Ne=0;Ne<Te.length;Ne++){const Ft=Te[Ne].image[Se].image;j?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,0,0,Ft.width,Ft.height,ze,Oe,Ft.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,pt,Ft.width,Ft.height,0,ze,Oe,Ft.data)}}else{j?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ze,Oe,Ae[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pt,ze,Oe,Ae[Se]);for(let Ne=0;Ne<Te.length;Ne++){const ct=Te[Ne];j?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,0,0,ze,Oe,ct.image[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne+1,pt,ze,Oe,ct.image[Se])}}}S(b)&&x(r.TEXTURE_CUBE_MAP),ce.__version=ve.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Le(U,b,W,de,ve,ce){const Xe=c.convert(W.format,W.colorSpace),Ue=c.convert(W.type),je=N(W.internalFormat,Xe,Ue,W.colorSpace),at=s.get(b),Ee=s.get(W);if(Ee.__renderTarget=b,!at.__hasExternalTextures){const Ae=Math.max(1,b.width>>ce),Ve=Math.max(1,b.height>>ce);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?i.texImage3D(ve,ce,je,Ae,Ve,b.depth,0,Xe,Ue,null):i.texImage2D(ve,ce,je,Ae,Ve,0,Xe,Ue,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),Wt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ve,Ee.__webglTexture,0,V(b)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ve,Ee.__webglTexture,ce),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(U,b,W){if(r.bindRenderbuffer(r.RENDERBUFFER,U),b.depthBuffer){const de=b.depthTexture,ve=de&&de.isDepthTexture?de.type:null,ce=O(b.stencilBuffer,ve),Xe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Wt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),ce,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),ce,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ce,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,U)}else{const de=b.textures;for(let ve=0;ve<de.length;ve++){const ce=de[ve],Xe=c.convert(ce.format,ce.colorSpace),Ue=c.convert(ce.type),je=N(ce.internalFormat,Xe,Ue,ce.colorSpace);Wt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),je,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),je,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,je,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(U,b,W){const de=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=s.get(b.depthTexture);if(ve.__renderTarget=b,(!ve.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),ve.__webglTexture===void 0){ve.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),$(r.TEXTURE_CUBE_MAP,b.depthTexture);const at=c.convert(b.depthTexture.format),Ee=c.convert(b.depthTexture.type);let Ae;b.depthTexture.format===Ma?Ae=r.DEPTH_COMPONENT24:b.depthTexture.format===Pr&&(Ae=r.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Ae,b.width,b.height,0,at,Ee,null)}}else ue(b.depthTexture,0);const ce=ve.__webglTexture,Xe=V(b),Ue=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,je=b.depthTexture.format===Pr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ma)Wt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,je,Ue,ce,0,Xe):r.framebufferTexture2D(r.FRAMEBUFFER,je,Ue,ce,0);else if(b.depthTexture.format===Pr)Wt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,je,Ue,ce,0,Xe):r.framebufferTexture2D(r.FRAMEBUFFER,je,Ue,ce,0);else throw new Error("Unknown depthTexture format")}function Je(U){const b=s.get(U),W=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const de=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),de){const ve=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,de.removeEventListener("dispose",ve)};de.addEventListener("dispose",ve),b.__depthDisposeCallback=ve}b.__boundDepthTexture=de}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let de=0;de<6;de++)we(b.__webglFramebuffer[de],U,de);else{const de=U.texture.mipmaps;de&&de.length>0?we(b.__webglFramebuffer[0],U,0):we(b.__webglFramebuffer,U,0)}else if(W){b.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[de]),b.__webglDepthbuffer[de]===void 0)b.__webglDepthbuffer[de]=r.createRenderbuffer(),Me(b.__webglDepthbuffer[de],U,!1);else{const ve=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ce)}}else{const de=U.texture.mipmaps;if(de&&de.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Me(b.__webglDepthbuffer,U,!1);else{const ve=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ce)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(U,b,W){const de=s.get(U);b!==void 0&&Le(de.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Je(U)}function ot(U){const b=U.texture,W=s.get(U),de=s.get(b);U.addEventListener("dispose",B);const ve=U.textures,ce=U.isWebGLCubeRenderTarget===!0,Xe=ve.length>1;if(Xe||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=b.version,f.memory.textures++),ce){W.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Ue]=[];for(let je=0;je<b.mipmaps.length;je++)W.__webglFramebuffer[Ue][je]=r.createFramebuffer()}else W.__webglFramebuffer[Ue]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)W.__webglFramebuffer[Ue]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Ue=0,je=ve.length;Ue<je;Ue++){const at=s.get(ve[Ue]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),f.memory.textures++)}if(U.samples>0&&Wt(U)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ue=0;Ue<ve.length;Ue++){const je=ve[Ue];W.__webglColorRenderbuffer[Ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Ue]);const at=c.convert(je.format,je.colorSpace),Ee=c.convert(je.type),Ae=N(je.internalFormat,at,Ee,je.colorSpace,U.isXRRenderTarget===!0),Ve=V(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,Ae,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,W.__webglColorRenderbuffer[Ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Me(W.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){i.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),$(r.TEXTURE_CUBE_MAP,b);for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let je=0;je<b.mipmaps.length;je++)Le(W.__webglFramebuffer[Ue][je],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,je);else Le(W.__webglFramebuffer[Ue],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(b)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xe){for(let Ue=0,je=ve.length;Ue<je;Ue++){const at=ve[Ue],Ee=s.get(at);let Ae=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Ee.__webglTexture),$(Ae,at),Le(W.__webglFramebuffer,U,at,r.COLOR_ATTACHMENT0+Ue,Ae,0),S(at)&&x(Ae)}i.unbindTexture()}else{let Ue=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ue,de.__webglTexture),$(Ue,b),b.mipmaps&&b.mipmaps.length>0)for(let je=0;je<b.mipmaps.length;je++)Le(W.__webglFramebuffer[je],U,b,r.COLOR_ATTACHMENT0,Ue,je);else Le(W.__webglFramebuffer,U,b,r.COLOR_ATTACHMENT0,Ue,0);S(b)&&x(Ue),i.unbindTexture()}U.depthBuffer&&Je(U)}function nt(U){const b=U.textures;for(let W=0,de=b.length;W<de;W++){const ve=b[W];if(S(ve)){const ce=w(U),Xe=s.get(ve).__webglTexture;i.bindTexture(ce,Xe),x(ce),i.unbindTexture()}}}const vt=[],lt=[];function Kt(U){if(U.samples>0){if(Wt(U)===!1){const b=U.textures,W=U.width,de=U.height;let ve=r.COLOR_BUFFER_BIT;const ce=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=s.get(U),Ue=b.length>1;if(Ue)for(let at=0;at<b.length;at++)i.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const je=U.texture.mipmaps;je&&je.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let at=0;at<b.length;at++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[at]);const Ee=s.get(b[at]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,W,de,0,0,W,de,ve,r.NEAREST),m===!0&&(vt.length=0,lt.length=0,vt.push(r.COLOR_ATTACHMENT0+at),U.depthBuffer&&U.resolveDepthBuffer===!1&&(vt.push(ce),lt.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,vt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ue)for(let at=0;at<b.length;at++){i.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[at]);const Ee=s.get(b[at]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,Ee,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function V(U){return Math.min(l.maxSamples,U.samples)}function Wt(U){const b=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ze(U){const b=f.render.frame;_.get(U)!==b&&(_.set(U,b),U.update())}function De(U,b){const W=U.colorSpace,de=U.format,ve=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==zs&&W!==ir&&(At.getTransfer(W)===Ht?(de!==Di||ve!==gi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",W)),b}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=se,this.setTexture2D=ue,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=te,this.rebindTextures=Rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function C2(r,e){function i(s,l=ir){let c;const f=At.getTransfer(l);if(s===gi)return r.UNSIGNED_BYTE;if(s===vp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===xp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ax)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===rx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===nx)return r.BYTE;if(s===ix)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===_p)return r.INT;if(s===Xi)return r.UNSIGNED_INT;if(s===zi)return r.FLOAT;if(s===Sa)return r.HALF_FLOAT;if(s===sx)return r.ALPHA;if(s===ox)return r.RGB;if(s===Di)return r.RGBA;if(s===Ma)return r.DEPTH_COMPONENT;if(s===Pr)return r.DEPTH_STENCIL;if(s===lx)return r.RED;if(s===yp)return r.RED_INTEGER;if(s===Is)return r.RG;if(s===Sp)return r.RG_INTEGER;if(s===Mp)return r.RGBA_INTEGER;if(s===iu||s===au||s===ru||s===su)if(f===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ru)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ch||s===wh||s===Dh||s===Nh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uh||s===Lh||s===Oh||s===Ph||s===Fh||s===Bh||s===Ih)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Uh||s===Lh)return f===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Oh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ph)return c.COMPRESSED_R11_EAC;if(s===Fh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Bh)return c.COMPRESSED_RG11_EAC;if(s===Ih)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===zh||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===jh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===zh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$h||s===ep||s===tp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===$h)return f===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ep)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===tp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===np||s===ip||s===ap||s===rp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===np)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ip)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ap)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const w2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D2=`
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

}`;class N2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Sx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new _i({vertexShader:w2,fragmentShader:D2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ea(new _u(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U2 extends ks{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,g=null,v=null,M=null,E=null;const T=typeof XRWebGLBinding<"u",S=new N2,x={},w=i.getContextAttributes();let N=null,O=null;const I=[],z=[],B=new Xt;let q=null;const C=new Ci;C.viewport=new sn;const D=new Ci;D.viewport=new sn;const k=[C,D],se=new VE;let oe=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=I[ne];return he===void 0&&(he=new ih,I[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=I[ne];return he===void 0&&(he=new ih,I[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=I[ne];return he===void 0&&(he=new ih,I[ne]=he),he.getHandSpace()};function ue(ne){const he=z.indexOf(ne.inputSource);if(he===-1)return;const Le=I[he];Le!==void 0&&(Le.update(ne.inputSource,ne.frame,p||f),Le.dispatchEvent({type:ne.type,data:ne.inputSource}))}function F(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",G);for(let ne=0;ne<I.length;ne++){const he=z[ne];he!==null&&(z[ne]=null,I[ne].disconnect(he))}oe=null,me=null,S.reset();for(const ne in x)delete x[ne];e.setRenderTarget(N),M=null,v=null,g=null,l=null,O=null,Ge.stop(),s.isPresenting=!1,e.setPixelRatio(q),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",F),l.addEventListener("inputsourceschange",G),w.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Me=null,we=null;w.depth&&(we=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Le=w.stencil?Pr:Ma,Me=w.stencil?il:Xi);const Je={colorFormat:i.RGBA8,depthFormat:we,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Je),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),O=new Vi(v.textureWidth,v.textureHeight,{format:Di,type:gi,depthTexture:new rl(v.textureWidth,v.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Le={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Le),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Di,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ge.setContext(l),Ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(ne){for(let he=0;he<ne.removed.length;he++){const Le=ne.removed[he],Me=z.indexOf(Le);Me>=0&&(z[Me]=null,I[Me].disconnect(Le))}for(let he=0;he<ne.added.length;he++){const Le=ne.added[he];let Me=z.indexOf(Le);if(Me===-1){for(let Je=0;Je<I.length;Je++)if(Je>=z.length){z.push(Le),Me=Je;break}else if(z[Je]===null){z[Je]=Le,Me=Je;break}if(Me===-1)break}const we=I[Me];we&&we.connect(Le)}}const te=new re,be=new re;function ye(ne,he,Le){te.setFromMatrixPosition(he.matrixWorld),be.setFromMatrixPosition(Le.matrixWorld);const Me=te.distanceTo(be),we=he.projectionMatrix.elements,Je=Le.projectionMatrix.elements,Rt=we[14]/(we[10]-1),ot=we[14]/(we[10]+1),nt=(we[9]+1)/we[5],vt=(we[9]-1)/we[5],lt=(we[8]-1)/we[0],Kt=(Je[8]+1)/Je[0],V=Rt*lt,Wt=Rt*Kt,Ze=Me/(-lt+Kt),De=Ze*-lt;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(De),ne.translateZ(Ze),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),we[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const We=Rt+Ze,U=ot+Ze,b=V-De,W=Wt+(Me-De),de=nt*ot/U*We,ve=vt*ot/U*We;ne.projectionMatrix.makePerspective(b,W,de,ve,We,U),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function L(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let he=ne.near,Le=ne.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(Le=S.depthFar)),se.near=D.near=C.near=he,se.far=D.far=C.far=Le,(oe!==se.near||me!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),oe=se.near,me=se.far),se.layers.mask=ne.layers.mask|6,C.layers.mask=se.layers.mask&3,D.layers.mask=se.layers.mask&5;const Me=ne.parent,we=se.cameras;L(se,Me);for(let Je=0;Je<we.length;Je++)L(we[Je],Me);we.length===2?ye(se,C,D):se.projectionMatrix.copy(C.projectionMatrix),$(ne,se,Me)};function $(ne,he,Le){Le===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(Le.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=sp*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(ne){m=ne,v!==null&&(v.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(se)},this.getCameraTexture=function(ne){return x[ne]};let _e=null;function Re(ne,he){if(_=he.getViewerPose(p||f),E=he,_!==null){const Le=_.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Me=!1;Le.length!==se.cameras.length&&(se.cameras.length=0,Me=!0);for(let ot=0;ot<Le.length;ot++){const nt=Le[ot];let vt=null;if(M!==null)vt=M.getViewport(nt);else{const Kt=g.getViewSubImage(v,nt);vt=Kt.viewport,ot===0&&(e.setRenderTargetTextures(O,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(O))}let lt=k[ot];lt===void 0&&(lt=new Ci,lt.layers.enable(ot),lt.viewport=new sn,k[ot]=lt),lt.matrix.fromArray(nt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(nt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(vt.x,vt.y,vt.width,vt.height),ot===0&&(se.matrix.copy(lt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Me===!0&&se.cameras.push(lt)}const we=l.enabledFeatures;if(we&&we.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const ot=g.getDepthInformation(Le[0]);ot&&ot.isValid&&ot.texture&&S.init(ot,l.renderState)}if(we&&we.includes("camera-access")&&T){e.state.unbindTexture(),g=s.getBinding();for(let ot=0;ot<Le.length;ot++){const nt=Le[ot].camera;if(nt){let vt=x[nt];vt||(vt=new Sx,x[nt]=vt);const lt=g.getCameraImage(nt);vt.sourceTexture=lt}}}}for(let Le=0;Le<I.length;Le++){const Me=z[Le],we=I[Le];Me!==null&&we!==void 0&&we.update(Me,he,p||f)}_e&&_e(ne,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const Ge=new Mx;Ge.setAnimationLoop(Re),this.setAnimationLoop=function(ne){_e=ne},this.dispose=function(){}}}const wr=new ba,L2=new nn;function O2(r,e){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,gx(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,w,N,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),g(S,x)):x.isMeshPhongMaterial?(c(S,x),_(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&M(S,x,O)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),T(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(f(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?m(S,x,w,N):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===qn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===qn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const w=e.get(x),N=w.envMap,O=w.envMapRotation;N&&(S.envMap.value=N,wr.copy(O),wr.x*=-1,wr.y*=-1,wr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),S.envMapRotation.value.setFromMatrix4(L2.makeRotationFromEuler(wr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,w,N){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*w,S.scale.value=N*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,w){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===qn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const w=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function P2(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,N){const O=N.program;s.uniformBlockBinding(w,O)}function p(w,N){let O=l[w.id];O===void 0&&(E(w),O=_(w),l[w.id]=O,w.addEventListener("dispose",S));const I=N.program;s.updateUBOMapping(w,I);const z=e.render.frame;c[w.id]!==z&&(v(w),c[w.id]=z)}function _(w){const N=g();w.__bindingPointIndex=N;const O=r.createBuffer(),I=w.__size,z=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,O),r.bufferData(r.UNIFORM_BUFFER,I,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,O),O}function g(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const N=l[w.id],O=w.uniforms,I=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let z=0,B=O.length;z<B;z++){const q=Array.isArray(O[z])?O[z]:[O[z]];for(let C=0,D=q.length;C<D;C++){const k=q[C];if(M(k,z,C,I)===!0){const se=k.__offset,oe=Array.isArray(k.value)?k.value:[k.value];let me=0;for(let ue=0;ue<oe.length;ue++){const F=oe[ue],G=T(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,se+me,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,me),me+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,se,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,N,O,I){const z=w.value,B=N+"_"+O;if(I[B]===void 0)return typeof z=="number"||typeof z=="boolean"?I[B]=z:I[B]=z.clone(),!0;{const q=I[B];if(typeof z=="number"||typeof z=="boolean"){if(q!==z)return I[B]=z,!0}else if(q.equals(z)===!1)return q.copy(z),!0}return!1}function E(w){const N=w.uniforms;let O=0;const I=16;for(let B=0,q=N.length;B<q;B++){const C=Array.isArray(N[B])?N[B]:[N[B]];for(let D=0,k=C.length;D<k;D++){const se=C[D],oe=Array.isArray(se.value)?se.value:[se.value];for(let me=0,ue=oe.length;me<ue;me++){const F=oe[me],G=T(F),te=O%I,be=te%G.boundary,ye=te+be;O+=be,ye!==0&&I-ye<G.storage&&(O+=I-ye),se.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=O,O+=G.storage}}}const z=O%I;return z>0&&(O+=I-z),w.__size=O,w.__cache={},this}function T(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",w),N}function S(w){const N=w.target;N.removeEventListener("dispose",S);const O=f.indexOf(N.__bindingPointIndex);f.splice(O,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:p,dispose:x}}const F2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function B2(){return Bi===null&&(Bi=new wE(F2,16,16,Is,Sa),Bi.name="DFG_LUT",Bi.minFilter=On,Bi.magFilter=On,Bi.wrapS=ga,Bi.wrapT=ga,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class I2{constructor(e={}){const{canvas:i=nE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:M=gi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const T=M,S=new Set([Mp,Sp,yp]),x=new Set([gi,Xi,nl,il,vp,xp]),w=new Uint32Array(4),N=new Int32Array(4);let O=null,I=null;const z=[],B=[];let q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1;this._outputColorSpace=mi;let k=0,se=0,oe=null,me=-1,ue=null;const F=new sn,G=new sn;let te=null;const be=new Ot(0);let ye=0,L=i.width,$=i.height,_e=1,Re=null,Ge=null;const ne=new sn(0,0,L,$),he=new sn(0,0,L,$);let Le=!1;const Me=new yx;let we=!1,Je=!1;const Rt=new nn,ot=new re,nt=new sn,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Kt(){return oe===null?_e:1}let V=s;function Wt(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gp}`),i.addEventListener("webglcontextlost",ct,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),V===null){const Y="webgl2";if(V=Wt(Y,R),V===null)throw Wt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Dt("WebGLRenderer: "+R.message),R}let Ze,De,We,U,b,W,de,ve,ce,Xe,Ue,je,at,Ee,Ae,Ve,ze,Oe,pt,j,Fe,Ce,He,Te;function Se(){Ze=new BA(V),Ze.init(),Ce=new C2(V,Ze),De=new CA(V,Ze,e,Ce),We=new A2(V,Ze),De.reversedDepthBuffer&&v&&We.buffers.depth.setReversed(!0),U=new HA(V),b=new f2,W=new R2(V,Ze,We,b,De,Ce,U),de=new DA(C),ve=new FA(C),ce=new XE(V),He=new AA(V,ce),Xe=new IA(V,ce,U,He),Ue=new VA(V,Xe,ce,U),pt=new GA(V,De,W),Ve=new wA(b),je=new u2(C,de,ve,Ze,De,He,Ve),at=new O2(C,b),Ee=new h2,Ae=new x2(Ze),Oe=new TA(C,de,ve,We,Ue,E,m),ze=new E2(C,Ue,De),Te=new P2(V,U,De,We),j=new RA(V,Ze,U),Fe=new zA(V,Ze,U),U.programs=je.programs,C.capabilities=De,C.extensions=Ze,C.properties=b,C.renderLists=Ee,C.shadowMap=ze,C.state=We,C.info=U}Se(),T!==gi&&(q=new XA(T,i.width,i.height,l,c));const Ne=new U2(C,V);this.xr=Ne,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Ze.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ze.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(L,$,!1))},this.getSize=function(R){return R.set(L,$)},this.setSize=function(R,Y,le=!0){if(Ne.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,$=Y,i.width=Math.floor(R*_e),i.height=Math.floor(Y*_e),le===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),q!==null&&q.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(L*_e,$*_e).floor()},this.setDrawingBufferSize=function(R,Y,le){L=R,$=Y,_e=le,i.width=Math.floor(R*le),i.height=Math.floor(Y*le),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(T===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(ne)},this.setViewport=function(R,Y,le,ie){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,Y,le,ie),We.viewport(F.copy(ne).multiplyScalar(_e).round())},this.getScissor=function(R){return R.copy(he)},this.setScissor=function(R,Y,le,ie){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,Y,le,ie),We.scissor(G.copy(he).multiplyScalar(_e).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(R){We.setScissorTest(Le=R)},this.setOpaqueSort=function(R){Re=R},this.setTransparentSort=function(R){Ge=R},this.getClearColor=function(R){return R.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,le=!0){let ie=0;if(R){let Q=!1;if(oe!==null){const Pe=oe.texture.format;Q=S.has(Pe)}if(Q){const Pe=oe.texture.type,ke=x.has(Pe),Be=Oe.getClearColor(),qe=Oe.getClearAlpha(),Ke=Be.r,it=Be.g,Qe=Be.b;ke?(w[0]=Ke,w[1]=it,w[2]=Qe,w[3]=qe,V.clearBufferuiv(V.COLOR,0,w)):(N[0]=Ke,N[1]=it,N[2]=Qe,N[3]=qe,V.clearBufferiv(V.COLOR,0,N))}else ie|=V.COLOR_BUFFER_BIT}Y&&(ie|=V.DEPTH_BUFFER_BIT),le&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ct,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Oe.dispose(),Ee.dispose(),Ae.dispose(),b.dispose(),de.dispose(),ve.dispose(),Ue.dispose(),He.dispose(),Te.dispose(),je.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",zr),Ne.removeEventListener("sessionend",Ys),Ui.stop()};function ct(R){R.preventDefault(),D_("WebGLRenderer: Context Lost."),D=!0}function Ft(){D_("WebGLRenderer: Context Restored."),D=!1;const R=U.autoReset,Y=ze.enabled,le=ze.autoUpdate,ie=ze.needsUpdate,Q=ze.type;Se(),U.autoReset=R,ze.enabled=Y,ze.autoUpdate=le,ze.needsUpdate=ie,ze.type=Q}function Tt(R){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Dn(R){const Y=R.target;Y.removeEventListener("dispose",Dn),xi(Y)}function xi(R){gl(R),b.remove(R)}function gl(R){const Y=b.get(R).programs;Y!==void 0&&(Y.forEach(function(le){je.releaseProgram(le)}),R.isShaderMaterial&&je.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,le,ie,Q,Pe){Y===null&&(Y=vt);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,Be=sr(R,Y,le,ie,Q);We.setMaterial(ie,ke);let qe=le.index,Ke=1;if(ie.wireframe===!0){if(qe=Xe.getWireframeAttribute(le),qe===void 0)return;Ke=2}const it=le.drawRange,Qe=le.attributes.position;let rt=it.start*Ke,Nt=(it.start+it.count)*Ke;Pe!==null&&(rt=Math.max(rt,Pe.start*Ke),Nt=Math.min(Nt,(Pe.start+Pe.count)*Ke)),qe!==null?(rt=Math.max(rt,0),Nt=Math.min(Nt,qe.count)):Qe!=null&&(rt=Math.max(rt,0),Nt=Math.min(Nt,Qe.count));const Qt=Nt-rt;if(Qt<0||Qt===1/0)return;He.setup(Q,ie,Be,le,qe);let qt,Pt=j;if(qe!==null&&(qt=ce.get(qe),Pt=Fe,Pt.setIndex(qt)),Q.isMesh)ie.wireframe===!0?(We.setLineWidth(ie.wireframeLinewidth*Kt()),Pt.setMode(V.LINES)):Pt.setMode(V.TRIANGLES);else if(Q.isLine){let et=ie.linewidth;et===void 0&&(et=1),We.setLineWidth(et*Kt()),Q.isLineSegments?Pt.setMode(V.LINES):Q.isLineLoop?Pt.setMode(V.LINE_LOOP):Pt.setMode(V.LINE_STRIP)}else Q.isPoints?Pt.setMode(V.POINTS):Q.isSprite&&Pt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)al("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const et=Q._multiDrawStarts,Ut=Q._multiDrawCounts,ft=Q._multiDrawCount,yn=qe?ce.get(qe).bytesPerElement:1,ji=b.get(ie).currentProgram.getUniforms();for(let Sn=0;Sn<ft;Sn++)ji.setValue(V,"_gl_DrawID",Sn),Pt.render(et[Sn]/yn,Ut[Sn])}else if(Q.isInstancedMesh)Pt.renderInstances(rt,Qt,Q.count);else if(le.isInstancedBufferGeometry){const et=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ut=Math.min(le.instanceCount,et);Pt.renderInstances(rt,Qt,Ut)}else Pt.render(rt,Qt)};function js(R,Y,le){R.transparent===!0&&R.side===ma&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,Gr(R,Y,le),R.side=rr,R.needsUpdate=!0,Gr(R,Y,le),R.side=ma):Gr(R,Y,le)}this.compile=function(R,Y,le=null){le===null&&(le=R),I=Ae.get(le),I.init(Y),B.push(I),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),R!==le&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),I.setupLights();const ie=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Pe=Q.material;if(Pe)if(Array.isArray(Pe))for(let ke=0;ke<Pe.length;ke++){const Be=Pe[ke];js(Be,le,Q),ie.add(Be)}else js(Pe,le,Q),ie.add(Pe)}),I=B.pop(),ie},this.compileAsync=function(R,Y,le=null){const ie=this.compile(R,Y,le);return new Promise(Q=>{function Pe(){if(ie.forEach(function(ke){b.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){Q(R);return}setTimeout(Pe,10)}Ze.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Ir=null;function qs(R){Ir&&Ir(R)}function zr(){Ui.stop()}function Ys(){Ui.start()}const Ui=new Mx;Ui.setAnimationLoop(qs),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(R){Ir=R,Ne.setAnimationLoop(R),R===null?Ui.stop():Ui.start()},Ne.addEventListener("sessionstart",zr),Ne.addEventListener("sessionend",Ys),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const le=Ne.enabled===!0&&Ne.isPresenting===!0,ie=q!==null&&(oe===null||le)&&q.begin(C,oe);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(Y),Y=Ne.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,oe),I=Ae.get(R,B.length),I.init(Y),B.push(I),Rt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Me.setFromProjectionMatrix(Rt,Hi,Y.reversedDepth),Je=this.localClippingEnabled,we=Ve.init(this.clippingPlanes,Je),O=Ee.get(R,z.length),O.init(),z.push(O),Ne.enabled===!0&&Ne.isPresenting===!0){const ke=C.xr.getDepthSensingMesh();ke!==null&&ai(ke,Y,-1/0,C.sortObjects)}ai(R,Y,0,C.sortObjects),O.finish(),C.sortObjects===!0&&O.sort(Re,Ge),lt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,lt&&Oe.addToRenderList(O,R),this.info.render.frame++,we===!0&&Ve.beginShadows();const Q=I.state.shadowsArray;if(ze.render(Q,R,Y),we===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&q.hasRenderPass())===!1){const ke=O.opaque,Be=O.transmissive;if(I.setupLights(),Y.isArrayCamera){const qe=Y.cameras;if(Be.length>0)for(let Ke=0,it=qe.length;Ke<it;Ke++){const Qe=qe[Ke];xn(ke,Be,R,Qe)}lt&&Oe.render(R);for(let Ke=0,it=qe.length;Ke<it;Ke++){const Qe=qe[Ke];on(O,R,Qe,Qe.viewport)}}else Be.length>0&&xn(ke,Be,R,Y),lt&&Oe.render(R),on(O,R,Y)}oe!==null&&se===0&&(W.updateMultisampleRenderTarget(oe),W.updateRenderTargetMipmap(oe)),ie&&q.end(C),R.isScene===!0&&R.onAfterRender(C,R,Y),He.resetDefaultState(),me=-1,ue=null,B.pop(),B.length>0?(I=B[B.length-1],we===!0&&Ve.setGlobalState(C.clippingPlanes,I.state.camera)):I=null,z.pop(),z.length>0?O=z[z.length-1]:O=null};function ai(R,Y,le,ie){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Me.intersectsSprite(R)){ie&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Rt);const ke=Ue.update(R),Be=R.material;Be.visible&&O.push(R,ke,Be,le,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Me.intersectsObject(R))){const ke=Ue.update(R),Be=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),nt.copy(ke.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(Rt)),Array.isArray(Be)){const qe=ke.groups;for(let Ke=0,it=qe.length;Ke<it;Ke++){const Qe=qe[Ke],rt=Be[Qe.materialIndex];rt&&rt.visible&&O.push(R,ke,rt,le,nt.z,Qe)}}else Be.visible&&O.push(R,ke,Be,le,nt.z,null)}}const Pe=R.children;for(let ke=0,Be=Pe.length;ke<Be;ke++)ai(Pe[ke],Y,le,ie)}function on(R,Y,le,ie){const{opaque:Q,transmissive:Pe,transparent:ke}=R;I.setupLightsView(le),we===!0&&Ve.setGlobalState(C.clippingPlanes,le),ie&&We.viewport(F.copy(ie)),Q.length>0&&yi(Q,Y,le),Pe.length>0&&yi(Pe,Y,le),ke.length>0&&yi(ke,Y,le),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function xn(R,Y,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ie.id]===void 0){const rt=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ie.id]=new Vi(1,1,{generateMipmaps:!0,type:rt?Sa:gi,minFilter:Or,samples:De.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Pe=I.state.transmissionRenderTarget[ie.id],ke=ie.viewport||F;Pe.setSize(ke.z*C.transmissionResolutionScale,ke.w*C.transmissionResolutionScale);const Be=C.getRenderTarget(),qe=C.getActiveCubeFace(),Ke=C.getActiveMipmapLevel();C.setRenderTarget(Pe),C.getClearColor(be),ye=C.getClearAlpha(),ye<1&&C.setClearColor(16777215,.5),C.clear(),lt&&Oe.render(le);const it=C.toneMapping;C.toneMapping=Gi;const Qe=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),I.setupLightsView(ie),we===!0&&Ve.setGlobalState(C.clippingPlanes,ie),yi(R,le,ie),W.updateMultisampleRenderTarget(Pe),W.updateRenderTargetMipmap(Pe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Nt=0,Qt=Y.length;Nt<Qt;Nt++){const qt=Y[Nt],{object:Pt,geometry:et,material:Ut,group:ft}=qt;if(Ut.side===ma&&Pt.layers.test(ie.layers)){const yn=Ut.side;Ut.side=qn,Ut.needsUpdate=!0,Hr(Pt,le,ie,et,Ut,ft),Ut.side=yn,Ut.needsUpdate=!0,rt=!0}}rt===!0&&(W.updateMultisampleRenderTarget(Pe),W.updateRenderTargetMipmap(Pe))}C.setRenderTarget(Be,qe,Ke),C.setClearColor(be,ye),Qe!==void 0&&(ie.viewport=Qe),C.toneMapping=it}function yi(R,Y,le){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Pe=R.length;Q<Pe;Q++){const ke=R[Q],{object:Be,geometry:qe,group:Ke}=ke;let it=ke.material;it.allowOverride===!0&&ie!==null&&(it=ie),Be.layers.test(le.layers)&&Hr(Be,Y,le,qe,it,Ke)}}function Hr(R,Y,le,ie,Q,Pe){R.onBeforeRender(C,Y,le,ie,Q,Pe),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(C,Y,le,ie,R,Pe),Q.transparent===!0&&Q.side===ma&&Q.forceSinglePass===!1?(Q.side=qn,Q.needsUpdate=!0,C.renderBufferDirect(le,Y,ie,Q,R,Pe),Q.side=rr,Q.needsUpdate=!0,C.renderBufferDirect(le,Y,ie,Q,R,Pe),Q.side=ma):C.renderBufferDirect(le,Y,ie,Q,R,Pe),R.onAfterRender(C,Y,le,ie,Q,Pe)}function Gr(R,Y,le){Y.isScene!==!0&&(Y=vt);const ie=b.get(R),Q=I.state.lights,Pe=I.state.shadowsArray,ke=Q.state.version,Be=je.getParameters(R,Q.state,Pe,Y,le),qe=je.getProgramCacheKey(Be);let Ke=ie.programs;ie.environment=R.isMeshStandardMaterial?Y.environment:null,ie.fog=Y.fog,ie.envMap=(R.isMeshStandardMaterial?ve:de).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",Dn),Ke=new Map,ie.programs=Ke);let it=Ke.get(qe);if(it!==void 0){if(ie.currentProgram===it&&ie.lightsStateVersion===ke)return Zs(R,Be),it}else Be.uniforms=je.getUniforms(R),R.onBeforeCompile(Be,C),it=je.acquireProgram(Be,qe),Ke.set(qe,it),ie.uniforms=Be.uniforms;const Qe=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=Ve.uniform),Zs(R,Be),ie.needsLights=Ta(R),ie.lightsStateVersion=ke,ie.needsLights&&(Qe.ambientLightColor.value=Q.state.ambient,Qe.lightProbe.value=Q.state.probe,Qe.directionalLights.value=Q.state.directional,Qe.directionalLightShadows.value=Q.state.directionalShadow,Qe.spotLights.value=Q.state.spot,Qe.spotLightShadows.value=Q.state.spotShadow,Qe.rectAreaLights.value=Q.state.rectArea,Qe.ltc_1.value=Q.state.rectAreaLTC1,Qe.ltc_2.value=Q.state.rectAreaLTC2,Qe.pointLights.value=Q.state.point,Qe.pointLightShadows.value=Q.state.pointShadow,Qe.hemisphereLights.value=Q.state.hemi,Qe.directionalShadowMap.value=Q.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qe.spotShadowMap.value=Q.state.spotShadowMap,Qe.spotLightMatrix.value=Q.state.spotLightMatrix,Qe.spotLightMap.value=Q.state.spotLightMap,Qe.pointShadowMap.value=Q.state.pointShadowMap,Qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),ie.currentProgram=it,ie.uniformsList=null,it}function _l(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=ou.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Zs(R,Y){const le=b.get(R);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function sr(R,Y,le,ie,Q){Y.isScene!==!0&&(Y=vt),W.resetTextureUnits();const Pe=Y.fog,ke=ie.isMeshStandardMaterial?Y.environment:null,Be=oe===null?C.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:zs,qe=(ie.isMeshStandardMaterial?ve:de).get(ie.envMap||ke),Ke=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,it=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Qe=!!le.morphAttributes.position,rt=!!le.morphAttributes.normal,Nt=!!le.morphAttributes.color;let Qt=Gi;ie.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Qt=C.toneMapping);const qt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Pt=qt!==void 0?qt.length:0,et=b.get(ie),Ut=I.state.lights;if(we===!0&&(Je===!0||R!==ue)){const bn=R===ue&&ie.id===me;Ve.setState(ie,R,bn)}let ft=!1;ie.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ut.state.version||et.outputColorSpace!==Be||Q.isBatchedMesh&&et.batching===!1||!Q.isBatchedMesh&&et.batching===!0||Q.isBatchedMesh&&et.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&et.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&et.instancing===!1||!Q.isInstancedMesh&&et.instancing===!0||Q.isSkinnedMesh&&et.skinning===!1||!Q.isSkinnedMesh&&et.skinning===!0||Q.isInstancedMesh&&et.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&et.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&et.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&et.instancingMorph===!1&&Q.morphTexture!==null||et.envMap!==qe||ie.fog===!0&&et.fog!==Pe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ve.numPlanes||et.numIntersection!==Ve.numIntersection)||et.vertexAlphas!==Ke||et.vertexTangents!==it||et.morphTargets!==Qe||et.morphNormals!==rt||et.morphColors!==Nt||et.toneMapping!==Qt||et.morphTargetsCount!==Pt)&&(ft=!0):(ft=!0,et.__version=ie.version);let yn=et.currentProgram;ft===!0&&(yn=Gr(ie,Y,Q));let ji=!1,Sn=!1,ri=!1;const Bt=yn.getUniforms(),Mn=et.uniforms;if(We.useProgram(yn.program)&&(ji=!0,Sn=!0,ri=!0),ie.id!==me&&(me=ie.id,Sn=!0),ji||ue!==R){We.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(V,"projectionMatrix",R.projectionMatrix),Bt.setValue(V,"viewMatrix",R.matrixWorldInverse);const En=Bt.map.cameraPosition;En!==void 0&&En.setValue(V,ot.setFromMatrixPosition(R.matrixWorld)),De.logarithmicDepthBuffer&&Bt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Bt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ue!==R&&(ue=R,Sn=!0,ri=!0)}if(et.needsLights&&(Ut.state.directionalShadowMap.length>0&&Bt.setValue(V,"directionalShadowMap",Ut.state.directionalShadowMap,W),Ut.state.spotShadowMap.length>0&&Bt.setValue(V,"spotShadowMap",Ut.state.spotShadowMap,W),Ut.state.pointShadowMap.length>0&&Bt.setValue(V,"pointShadowMap",Ut.state.pointShadowMap,W)),Q.isSkinnedMesh){Bt.setOptional(V,Q,"bindMatrix"),Bt.setOptional(V,Q,"bindMatrixInverse");const bn=Q.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Bt.setValue(V,"boneTexture",bn.boneTexture,W))}Q.isBatchedMesh&&(Bt.setOptional(V,Q,"batchingTexture"),Bt.setValue(V,"batchingTexture",Q._matricesTexture,W),Bt.setOptional(V,Q,"batchingIdTexture"),Bt.setValue(V,"batchingIdTexture",Q._indirectTexture,W),Bt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Bt.setValue(V,"batchingColorTexture",Q._colorsTexture,W));const hn=le.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&pt.update(Q,le,yn),(Sn||et.receiveShadow!==Q.receiveShadow)&&(et.receiveShadow=Q.receiveShadow,Bt.setValue(V,"receiveShadow",Q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Mn.envMap.value=qe,Mn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&Y.environment!==null&&(Mn.envMapIntensity.value=Y.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=B2()),Sn&&(Bt.setValue(V,"toneMappingExposure",C.toneMappingExposure),et.needsLights&&Ks(Mn,ri),Pe&&ie.fog===!0&&at.refreshFogUniforms(Mn,Pe),at.refreshMaterialUniforms(Mn,ie,_e,$,I.state.transmissionRenderTarget[R.id]),ou.upload(V,_l(et),Mn,W)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(ou.upload(V,_l(et),Mn,W),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Bt.setValue(V,"center",Q.center),Bt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Bt.setValue(V,"normalMatrix",Q.normalMatrix),Bt.setValue(V,"modelMatrix",Q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const bn=ie.uniformsGroups;for(let En=0,Vr=bn.length;En<Vr;En++){const Si=bn[En];Te.update(Si,yn),Te.bind(Si,yn)}}return yn}function Ks(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Ta(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(R,Y,le){const ie=b.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=Y,b.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const le=b.get(R);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const Aa=V.createFramebuffer();this.setRenderTarget=function(R,Y=0,le=0){oe=R,k=Y,se=le;let ie=null,Q=!1,Pe=!1;if(R){const Be=b.get(R);if(Be.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(V.FRAMEBUFFER,Be.__webglFramebuffer),F.copy(R.viewport),G.copy(R.scissor),te=R.scissorTest,We.viewport(F),We.scissor(G),We.setScissorTest(te),me=-1;return}else if(Be.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Be.__hasExternalTextures)W.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const it=R.depthTexture;if(Be.__boundDepthTexture!==it){if(it!==null&&b.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);const Ke=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[Y])?ie=Ke[Y][le]:ie=Ke[Y],Q=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?ie=b.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?ie=Ke[le]:ie=Ke,F.copy(R.viewport),G.copy(R.scissor),te=R.scissorTest}else F.copy(ne).multiplyScalar(_e).floor(),G.copy(he).multiplyScalar(_e).floor(),te=Le;if(le!==0&&(ie=Aa),We.bindFramebuffer(V.FRAMEBUFFER,ie)&&We.drawBuffers(R,ie),We.viewport(F),We.scissor(G),We.setScissorTest(te),Q){const Be=b.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Be.__webglTexture,le)}else if(Pe){const Be=Y;for(let qe=0;qe<R.textures.length;qe++){const Ke=b.get(R.textures[qe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+qe,Ke.__webglTexture,le,Be)}}else if(R!==null&&le!==0){const Be=b.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Be.__webglTexture,le)}me=-1},this.readRenderTargetPixels=function(R,Y,le,ie,Q,Pe,ke,Be=0){if(!(R&&R.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe){We.bindFramebuffer(V.FRAMEBUFFER,qe);try{const Ke=R.textures[Be],it=Ke.format,Qe=Ke.type;if(!De.textureFormatReadable(it)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Qe)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ie&&le>=0&&le<=R.height-Q&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Be),V.readPixels(Y,le,ie,Q,Ce.convert(it),Ce.convert(Qe),Pe))}finally{const Ke=oe!==null?b.get(oe).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(R,Y,le,ie,Q,Pe,ke,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe)if(Y>=0&&Y<=R.width-ie&&le>=0&&le<=R.height-Q){We.bindFramebuffer(V.FRAMEBUFFER,qe);const Ke=R.textures[Be],it=Ke.format,Qe=Ke.type;if(!De.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,rt),V.bufferData(V.PIXEL_PACK_BUFFER,Pe.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Be),V.readPixels(Y,le,ie,Q,Ce.convert(it),Ce.convert(Qe),0);const Nt=oe!==null?b.get(oe).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,Nt);const Qt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await iE(V,Qt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,rt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pe),V.deleteBuffer(rt),V.deleteSync(Qt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,le=0){const ie=Math.pow(2,-le),Q=Math.floor(R.image.width*ie),Pe=Math.floor(R.image.height*ie),ke=Y!==null?Y.x:0,Be=Y!==null?Y.y:0;W.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,ke,Be,Q,Pe),We.unbindTexture()};const or=V.createFramebuffer(),Ra=V.createFramebuffer();this.copyTextureToTexture=function(R,Y,le=null,ie=null,Q=0,Pe=null){Pe===null&&(Q!==0?(al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=Q,Q=0):Pe=0);let ke,Be,qe,Ke,it,Qe,rt,Nt,Qt;const qt=R.isCompressedTexture?R.mipmaps[Pe]:R.image;if(le!==null)ke=le.max.x-le.min.x,Be=le.max.y-le.min.y,qe=le.isBox3?le.max.z-le.min.z:1,Ke=le.min.x,it=le.min.y,Qe=le.isBox3?le.min.z:0;else{const hn=Math.pow(2,-Q);ke=Math.floor(qt.width*hn),Be=Math.floor(qt.height*hn),R.isDataArrayTexture?qe=qt.depth:R.isData3DTexture?qe=Math.floor(qt.depth*hn):qe=1,Ke=0,it=0,Qe=0}ie!==null?(rt=ie.x,Nt=ie.y,Qt=ie.z):(rt=0,Nt=0,Qt=0);const Pt=Ce.convert(Y.format),et=Ce.convert(Y.type);let Ut;Y.isData3DTexture?(W.setTexture3D(Y,0),Ut=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Ut=V.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Ut=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const ft=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ji=V.getParameter(V.UNPACK_SKIP_PIXELS),Sn=V.getParameter(V.UNPACK_SKIP_ROWS),ri=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ke),V.pixelStorei(V.UNPACK_SKIP_ROWS,it),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qe);const Bt=R.isDataArrayTexture||R.isData3DTexture,Mn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const hn=b.get(R),bn=b.get(Y),En=b.get(hn.__renderTarget),Vr=b.get(bn.__renderTarget);We.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let Si=0;Si<qe;Si++)Bt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(R).__webglTexture,Q,Qe+Si),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,Pe,Qt+Si)),V.blitFramebuffer(Ke,it,ke,Be,rt,Nt,ke,Be,V.DEPTH_BUFFER_BIT,V.NEAREST);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||b.has(R)){const hn=b.get(R),bn=b.get(Y);We.bindFramebuffer(V.READ_FRAMEBUFFER,or),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ra);for(let En=0;En<qe;En++)Bt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,Q,Qe+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,Q),Mn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,Pe,Qt+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,Pe),Q!==0?V.blitFramebuffer(Ke,it,ke,Be,rt,Nt,ke,Be,V.COLOR_BUFFER_BIT,V.NEAREST):Mn?V.copyTexSubImage3D(Ut,Pe,rt,Nt,Qt+En,Ke,it,ke,Be):V.copyTexSubImage2D(Ut,Pe,rt,Nt,Ke,it,ke,Be);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ut,Pe,rt,Nt,Qt,ke,Be,qe,Pt,et,qt.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Ut,Pe,rt,Nt,Qt,ke,Be,qe,Pt,qt.data):V.texSubImage3D(Ut,Pe,rt,Nt,Qt,ke,Be,qe,Pt,et,qt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pe,rt,Nt,ke,Be,Pt,et,qt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pe,rt,Nt,qt.width,qt.height,Pt,qt.data):V.texSubImage2D(V.TEXTURE_2D,Pe,rt,Nt,ke,Be,Pt,et,qt);V.pixelStorei(V.UNPACK_ROW_LENGTH,ft),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ji),V.pixelStorei(V.UNPACK_SKIP_ROWS,Sn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ri),Pe===0&&Y.generateMipmaps&&V.generateMipmap(Ut),We.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){k=0,se=0,oe=null,We.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}const z2=`
  attribute float alpha;
  attribute float aSize;
  varying float vAlpha;
  void main() {
    vAlpha = alpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize;
    gl_Position = projectionMatrix * mvPosition;
  }
`,H2=`
  varying float vAlpha;
  uniform vec3 uColor;
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float softEdge = 1.0 - smoothstep(0.25, 0.5, dist);
    gl_FragColor = vec4(uColor, vAlpha * softEdge);
  }
`,G2=`
  attribute float alpha;
  varying float vAlpha;
  void main() {
    vAlpha = alpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,V2=`
  varying float vAlpha;
  uniform vec3 uColor;
  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
  }
`;function k2(r,e){const i=16*Math.pow(Math.sin(r),3),s=13*Math.cos(r)-5*Math.cos(2*r)-2*Math.cos(3*r)-Math.cos(4*r);return{x:i*e,y:s*e}}function bv(r,e){const i=[];for(let s=0;s<r;s++){const l=s/r*Math.PI*2,c=(Math.random()-.5)*e*.6,f=(Math.random()-.5)*e*.6,h=k2(l,e);i.push({x:h.x+c,y:h.y+f})}return i}function X2(r){return r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2}function W2(r,e,i){const s=new Map;for(let l=0;l<r.length;l++){const c=r[l],f=Math.floor((c.x+i)/e)*1e4+Math.floor((c.y+i)/e);s.has(f)||s.set(f,[]),s.get(f).push(l)}return s}function j2(r,e,i){const s=[];for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const f=r.get((e+l)*1e4+(i+c));if(f)for(let h=0;h<f.length;h++)s.push(f[h])}return s}function q2(r,e={}){const{particleCount:i=90,connectionDistance:s=120,color:l=13935988,heartMode:c="heart",alphaMultiplier:f=1,connectionAlphaMultiplier:h=1}=e;let m=window.innerWidth,p=window.innerHeight,_=m/2,g=p/2,v=null;const M=130,E=M*M,T=250,S=.2,x=10,w=3,N=4,O=2.5,I=x+w+N+O;let z=c==="heart";const B={x:0,y:0,active:!1},q={active:!1,startTime:0,duration:1.5},C=window.matchMedia("(prefers-reduced-motion: reduce)").matches,D=new I2({canvas:r,alpha:!0,antialias:!1,powerPreference:"low-power"});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(m,p);const k=new Rp(-_,_,g,-g,.1,100);k.position.z=10;const se=new CE,oe=new Ot(l),me=Math.min(m,p)*.028;let ue=z?bv(i,me):null;const F=[];for(let Me=0;Me<i;Me++)F.push({x:(Math.random()-.5)*m,y:(Math.random()-.5)*p,homeX:(Math.random()-.5)*m,homeY:(Math.random()-.5)*p,heartX:ue?ue[Me].x:0,heartY:ue?ue[Me].y:0,snapX:0,snapY:0,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,baseAlpha:(.2+Math.random()*.4)*f,size:(2+Math.random()*2.5)*Math.min(window.devicePixelRatio,2),phase:Math.random()*Math.PI*2});const G=new Float32Array(i*3),te=new Float32Array(i),be=new Float32Array(i);for(let Me=0;Me<i;Me++)G[Me*3]=F[Me].x,G[Me*3+1]=F[Me].y,G[Me*3+2]=0,te[Me]=F[Me].baseAlpha,be[Me]=F[Me].size;const ye=new ii;ye.setAttribute("position",new Bn(G,3)),ye.setAttribute("alpha",new Bn(te,1)),ye.setAttribute("aSize",new Bn(be,1));const L=new _i({uniforms:{uColor:{value:oe}},vertexShader:z2,fragmentShader:H2,transparent:!0,depthWrite:!1});se.add(new BE(ye,L));const $=new Float32Array(T*6),_e=new Float32Array(T*2),Re=new ii;Re.setAttribute("position",new Bn($,3)),Re.setAttribute("alpha",new Bn(_e,1)),Re.setDrawRange(0,0);const Ge=new _i({uniforms:{uColor:{value:oe}},vertexShader:G2,fragmentShader:V2,transparent:!0,depthWrite:!1});se.add(new PE(Re,Ge));const ne=s*s;let he="drift";function Le(Me){v=requestAnimationFrame(Le);const we=Me*.001;let Je="drift",Rt=0;if(z){const Ze=we%I;Ze<x?(Je="drift",Rt=Ze/x):Ze<x+w?(Je="gather",Rt=(Ze-x)/w):Ze<x+w+N?(Je="hold",Rt=(Ze-x-w)/N):(Je="scatter",Rt=(Ze-x-w-N)/O)}if(Je!==he){for(let Ze=0;Ze<i;Ze++){const De=F[Ze];De.snapX=De.x,De.snapY=De.y,Je==="scatter"&&(De.homeX=(Math.random()-.5)*m,De.homeY=(Math.random()-.5)*p)}he=Je}const ot=X2(Math.min(Rt,1));for(let Ze=0;Ze<i;Ze++){const De=F[Ze];if(Je==="drift")De.x+=De.vx,De.y+=De.vy,De.x>_+30&&(De.x=-_-30),De.x<-_-30&&(De.x=_+30),De.y>g+30&&(De.y=-g-30),De.y<-g-30&&(De.y=g+30);else if(Je==="gather")De.x=De.snapX+(De.heartX-De.snapX)*ot,De.y=De.snapY+(De.heartY-De.snapY)*ot;else if(Je==="hold"){const W=1+Math.sin(we*2)*.03;De.x=De.heartX*W,De.y=De.heartY*W}else Je==="scatter"&&(De.x=De.snapX+(De.homeX-De.snapX)*ot,De.y=De.snapY+(De.homeY-De.snapY)*ot);if(B.active){const W=De.x-B.x,de=De.y-B.y,ve=W*W+de*de;if(ve<E&&ve>1){const ce=Math.sqrt(ve),Xe=(1-ce/M)*.9;De.x+=W/ce*Xe,De.y+=de/ce*Xe}}const We=Math.sin(we*.5+De.phase)*.12;let U=0;Je==="gather"&&(U=ot*.15),Je==="hold"&&(U=.15),Je==="scatter"&&(U=(1-ot)*.15);let b=0;if(q.active){const W=we-q.startTime;if(W>q.duration)q.active=!1;else{const de=W/q.duration;b=(1-de)*.5*Math.sin(de*Math.PI)}}G[Ze*3]=De.x,G[Ze*3+1]=De.y,te[Ze]=Math.max(.05,De.baseAlpha+We+U+b)}let nt=s,vt=ne,lt=S*h;if(Je==="gather"?(nt+=ot*60,vt=nt*nt,lt+=ot*.1):Je==="hold"?(nt+=60,vt=nt*nt,lt+=.1):Je==="scatter"&&(nt+=(1-ot)*60,vt=nt*nt,lt+=(1-ot)*.1),q.active){const Ze=(we-q.startTime)/q.duration,De=(1-Ze)*Math.sin(Ze*Math.PI);nt+=De*80,vt=nt*nt,lt+=De*.2}const Kt=W2(F,nt,_);let V=0;const Wt=new Set;for(let Ze=0;Ze<i&&V<T;Ze++){const De=F[Ze],We=Math.floor((De.x+_)/nt),U=Math.floor((De.y+_)/nt),b=j2(Kt,We,U);for(let W=0;W<b.length&&V<T;W++){const de=b[W];if(de<=Ze)continue;const ve=Ze*i+de;if(Wt.has(ve))continue;Wt.add(ve);const ce=F[de],Xe=De.x-ce.x,Ue=De.y-ce.y,je=Xe*Xe+Ue*Ue;if(je<vt){const at=Math.sqrt(je),Ee=(1-at/nt)*lt,Ae=V*6;$[Ae]=De.x,$[Ae+1]=De.y,$[Ae+2]=0,$[Ae+3]=ce.x,$[Ae+4]=ce.y,$[Ae+5]=0,_e[V*2]=Ee,_e[V*2+1]=Ee,V++}}}Re.setDrawRange(0,V*2),ye.attributes.position.needsUpdate=!0,ye.attributes.alpha.needsUpdate=!0,Re.attributes.position.needsUpdate=!0,Re.attributes.alpha.needsUpdate=!0,D.render(se,k)}if(C){if(ue)for(let Me=0;Me<i;Me++)G[Me*3]=ue[Me].x,G[Me*3+1]=ue[Me].y,te[Me]=F[Me].baseAlpha+.15;ye.attributes.position.needsUpdate=!0,ye.attributes.alpha.needsUpdate=!0,D.render(se,k)}else v=requestAnimationFrame(Le);return{destroy(){v!==null&&cancelAnimationFrame(v),ye.dispose(),L.dispose(),Re.dispose(),Ge.dispose(),D.dispose()},resize(Me,we){m=Me,p=we,_=Me/2,g=we/2,D.setSize(Me,we),k.left=-_,k.right=_,k.top=g,k.bottom=-g,k.updateProjectionMatrix()},setMouse(Me,we,Je){B.x=Me-_,B.y=-(we-g),B.active=Je},burst(){q.active=!0,q.startTime=performance.now()*.001;for(let Me=0;Me<i;Me++){const we=F[Me],Je=we.x,Rt=we.y,ot=Math.sqrt(Je*Je+Rt*Rt)||1;we.vx+=Je/ot*1.2,we.vy+=Rt/ot*1.2}},setHeartMode(Me){if(z=Me==="heart",z&&!ue){ue=bv(i,me);for(let we=0;we<i;we++)F[we].heartX=ue[we].x,F[we].heartY=ue[we].y}}}}function Y2(){try{const r=document.createElement("canvas");return!!(r.getContext("webgl")||r.getContext("experimental-webgl"))}catch{return!1}}const ml=K.forwardRef(function({mode:e="heart",intensity:i=.6,color:s=13935988,className:l="",fixed:c=!1},f){const h=K.useRef(null),m=K.useRef(null),[p]=K.useState(()=>Y2());if(K.useImperativeHandle(f,()=>({burst:()=>m.current?.burst(),setHeartMode:g=>m.current?.setHeartMode(g)})),K.useEffect(()=>{if(!p)return;const g=h.current;if(!g)return;const v=window.innerWidth<768,E=Math.round((v?35:70)*(.4+i*.8)),S=Math.round((v?80:110)*(.7+i*.5));let x="heart";(e==="drift"||e==="ambient")&&(x="none");try{m.current=q2(g,{particleCount:E,connectionDistance:S,color:s,heartMode:x,alphaMultiplier:e==="ambient"?.4:.6+i*.4,connectionAlphaMultiplier:e==="ambient"?.3:.5+i*.5})}catch(q){console.warn("ParticleField: scene creation failed",q)}let w=null;const N=()=>{clearTimeout(w),w=setTimeout(()=>{m.current?.resize(window.innerWidth,window.innerHeight)},200)};window.addEventListener("resize",N);const O=q=>m.current?.setMouse(q.clientX,q.clientY,!0),I=()=>m.current?.setMouse(0,0,!1),z=q=>{const C=q.touches[0];C&&m.current?.setMouse(C.clientX,C.clientY,!0)},B=()=>m.current?.setMouse(0,0,!1);return window.addEventListener("mousemove",O),document.addEventListener("mouseleave",I),window.addEventListener("touchmove",z,{passive:!0}),window.addEventListener("touchend",B),()=>{clearTimeout(w),m.current?.destroy(),m.current=null,window.removeEventListener("resize",N),window.removeEventListener("mousemove",O),document.removeEventListener("mouseleave",I),window.removeEventListener("touchmove",z),window.removeEventListener("touchend",B)}},[p,e,i,s]),!p)return null;const _=c?"fixed":"absolute";return P.jsx("canvas",{ref:h,className:`${_} inset-0 w-full h-full pointer-events-none ${l}`,style:{zIndex:1},"aria-hidden":"true"})});function Z2(){const r=ll();return P.jsxs("section",{className:"min-h-screen flex items-center justify-center relative overflow-hidden px-6",children:[P.jsx(ml,{mode:"heart",intensity:.7}),P.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(212,165,116,0.07) 0%, transparent 60%)"}}),P.jsx("div",{className:"absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(212,165,116,0.04) 0%, transparent 70%)",animationDelay:"2s"}}),P.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(ellipse at 50% 0%, rgba(212,165,116,0.03) 0%, transparent 50%)"}}),P.jsxs("div",{className:"max-w-[680px] text-center relative z-10",children:[P.jsx("p",{className:"font-body text-[11px] uppercase tracking-[0.2em] text-accent-primary/50 mb-6 opacity-0 animate-fade-in",style:{animationDelay:"0.1s",animationFillMode:"forwards"},children:"A valentine's day experience"}),P.jsx("h1",{className:"font-display text-[clamp(36px,6vw,60px)] leading-[1.08] font-medium tracking-[-0.02em] text-text-primary opacity-0 animate-fade-up",style:{animationFillMode:"forwards",animationDelay:"0.2s"},children:"Turn your memories into something they can see."}),P.jsx("p",{className:"font-body font-normal text-[clamp(16px,2.5vw,20px)] text-text-secondary mt-6 max-w-[480px] mx-auto leading-relaxed opacity-0 animate-fade-up",style:{animationDelay:"0.5s",animationFillMode:"forwards"},children:"Talk about the person you love. We'll turn it into a visual story you can share."}),P.jsx("div",{className:"mt-12 opacity-0 animate-fade-up",style:{animationDelay:"0.7s",animationFillMode:"forwards"},children:P.jsx(tl,{onClick:()=>r("/create"),children:"Start Your Memory Map"})}),P.jsx("p",{className:"font-body text-[11px] text-text-tertiary/40 mt-4 opacity-0 animate-fade-in",style:{animationDelay:"1s",animationFillMode:"forwards"},children:"No account needed. Free to create."})]}),P.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in",style:{animationDelay:"1.5s",animationFillMode:"forwards"},children:P.jsx("div",{className:"animate-gentle-bounce",children:P.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-text-tertiary/40",children:P.jsx("path",{d:"M6 9l6 6 6-6"})})})})]})}function yu(r={}){const e=K.useRef(null),[i,s]=K.useState(!1);return K.useEffect(()=>{const l=e.current;if(!l)return;const c=new IntersectionObserver(([f])=>{f.isIntersecting&&(s(!0),c.unobserve(l))},{threshold:r.threshold||.1,rootMargin:r.rootMargin||"0px 0px -40px 0px"});return c.observe(l),()=>c.disconnect()},[r.threshold,r.rootMargin]),[e,i]}function Nr({children:r,className:e="",delay:i=0,direction:s="up"}){const[l,c]=yu(),f={up:"translate-y-5",left:"-translate-x-[30px]",right:"translate-x-[30px]",none:""};return P.jsx("div",{ref:l,className:`transition-all duration-600 ease-out ${c?"opacity-100 translate-y-0 translate-x-0":`opacity-0 ${f[s]}`} ${e}`,style:{transitionDelay:`${i}s`},children:r})}const K2=[{number:"1",label:"Share your memories",description:"Talk or type about moments that matter"},{number:"2",label:"Watch it take shape",description:"Each memory becomes a point on your timeline"},{number:"3",label:"Send it as a gift",description:"Share a link they'll actually want to keep"}];function Q2(){return P.jsx("section",{className:"py-[120px] px-6",children:P.jsx("div",{className:"max-w-[900px] mx-auto",children:P.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative",children:[P.jsx("div",{className:"hidden md:block absolute top-[32px] left-[16.6%] right-[16.6%] h-px bg-accent-primary/20"}),K2.map((r,e)=>P.jsx(Nr,{delay:e*.15,children:P.jsxs("div",{className:"text-center",children:[P.jsx("span",{className:"font-accent italic text-[48px] text-accent-primary/60 leading-none",children:r.number}),P.jsx("h3",{className:"font-body text-sm uppercase tracking-[0.1em] text-text-primary mt-4 mb-2",children:r.label}),P.jsx("p",{className:"font-body text-base text-text-secondary",children:r.description})]})},r.number))]})})})}function J2(){return P.jsxs("main",{children:[P.jsx(Z2,{}),P.jsx(Q2,{})]})}const $2=[{id:"partner",label:"My Partner",sub:"romantic love"},{id:"friend",label:"My Best Friend",sub:"the one who gets it"},{id:"parent",label:"My Parent",sub:"who shaped me"},{id:"sibling",label:"My Sibling",sub:"built-in best friend"},{id:"grandparent",label:"My Grandparent",sub:"living history"},{id:"other",label:"Someone Special",sub:"in my own words"}];function eC({onComplete:r}){const[e,i]=K.useState(""),[s,l]=K.useState(null),[c,f]=K.useState(0),h=p=>{p.preventDefault(),e.trim()&&f(1)},m=p=>{l(p),f(2),setTimeout(()=>{r({name:e.trim(),type:p.id,typeLabel:p.label})},600)};return P.jsxs("section",{className:"min-h-screen flex items-center justify-center relative overflow-hidden px-6",children:[P.jsx(ml,{mode:"ambient",intensity:.4}),P.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)"}}),P.jsxs("div",{className:`text-center max-w-[560px] relative z-10 transition-all duration-700 ease-out ${c===2?"opacity-0 translate-y-[-20px]":"opacity-100"}`,children:[c===0&&P.jsxs("form",{onSubmit:h,className:"animate-fade-up",style:{animationFillMode:"forwards"},children:[P.jsx("p",{className:"font-accent text-[clamp(24px,4vw,32px)] font-light text-text-primary leading-[1.3] mb-10",children:"Who is this Memory Map for?"}),P.jsxs("div",{className:"relative max-w-[400px] mx-auto",children:[P.jsx("input",{type:"text",value:e,onChange:p=>i(p.target.value),placeholder:"Their first name",autoFocus:!0,className:"w-full bg-transparent border-0 border-b-2 border-accent-primary/20 focus:border-accent-primary/60 text-center font-display text-[clamp(28px,5vw,40px)] font-medium text-text-primary placeholder:text-text-tertiary/30 focus:outline-none pb-3 transition-all duration-300"}),P.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-primary transition-all duration-500",style:{width:e?"100%":"0%"}})]}),P.jsxs("button",{type:"submit",disabled:!e.trim(),className:`mt-10 font-body text-sm tracking-wide transition-all duration-500 cursor-pointer ${e.trim()?"text-accent-primary opacity-100 translate-y-0":"text-text-tertiary/30 opacity-0 translate-y-2 pointer-events-none"}`,children:["Continue",P.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"inline-block ml-2",children:P.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c>=1&&c<2&&P.jsxs("div",{className:"animate-fade-up",style:{animationFillMode:"forwards"},children:[P.jsxs("p",{className:"font-accent text-[clamp(20px,3.5vw,28px)] font-light text-text-primary leading-[1.3] mb-3",children:[P.jsx("span",{className:"text-accent-primary",children:e.trim()})," is..."]}),P.jsx("p",{className:"font-body text-sm text-text-tertiary/60 mb-10",children:"This helps us understand the tone of your memories"}),P.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[480px] mx-auto",children:$2.map(p=>P.jsxs("button",{onClick:()=>m(p),className:"group glass-card rounded-lg px-4 py-5 text-center cursor-pointer transition-all duration-300 hover:border-accent-primary/30 hover:bg-bg-elevated/60 active:scale-[0.97]",children:[P.jsx("span",{className:"font-body text-sm font-medium text-text-primary block",children:p.label}),P.jsx("span",{className:"font-body text-[10px] text-text-tertiary/50 mt-1 block",children:p.sub})]},p.id))})]}),c===2&&s&&P.jsx("div",{className:"animate-fade-in",children:P.jsxs("p",{className:"font-accent text-[clamp(22px,4vw,30px)] font-light text-text-primary",children:["A Memory Map for ",P.jsx("span",{className:"text-accent-primary",children:e.trim()})]})})]})]})}function tC({prompt:r,onSubmit:e,isProcessing:i,memoryIndex:s}){const[l,c]=K.useState(""),[f,h]=K.useState(!1),m=K.useRef(null);K.useEffect(()=>{const g=setTimeout(()=>h(!0),100);return()=>clearTimeout(g)},[]),K.useEffect(()=>{if(f){const g=setTimeout(()=>m.current?.focus(),900);return()=>clearTimeout(g)}},[f]),K.useEffect(()=>{const g=m.current;g&&(g.style.height="auto",g.style.height=Math.min(g.scrollHeight,200)+"px")},[l]);const p=()=>{const g=l.trim();!g||i||e(g)},_=g=>{g.key==="Enter"&&(g.metaKey||g.ctrlKey)&&(g.preventDefault(),p())};return P.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:[P.jsx("p",{className:`font-accent text-[clamp(22px,4vw,32px)] font-light text-text-primary text-center
          max-w-[600px] leading-[1.4] transition-all duration-1000 ease-out
          ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:r}),P.jsxs("div",{className:`mt-10 w-full max-w-[560px] transition-all duration-1000 ease-out
          ${f?"opacity-100 translate-y-0 delay-300":"opacity-0 translate-y-4"}`,children:[P.jsx("textarea",{ref:m,value:l,onChange:g=>c(g.target.value),onKeyDown:_,disabled:i,placeholder:"Speak or type your memory...",rows:2,className:`w-full bg-transparent text-center font-body text-lg text-text-primary
            placeholder:font-accent placeholder:italic placeholder:text-text-tertiary/40
            resize-none pb-4 transition-colors duration-500`,style:{border:"none",borderBottom:"1px solid rgba(212, 165, 116, 0.15)",outline:"none",boxShadow:"none"},onFocus:g=>{g.target.style.borderBottomColor="rgba(212, 165, 116, 0.4)",g.target.style.outline="none"},onBlur:g=>{g.target.style.borderBottomColor="rgba(212, 165, 116, 0.15)"}}),P.jsx("div",{className:"flex justify-center mt-4",children:P.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-accent-primary/60 animate-breathe"})}),P.jsx("div",{className:`mt-6 flex justify-center transition-all duration-500
            ${l.trim()?"opacity-100 translate-y-0":"opacity-0 translate-y-2 pointer-events-none"}`,children:P.jsxs("button",{onClick:p,disabled:!l.trim()||i,className:`font-body text-sm text-accent-primary hover:text-accent-secondary
              transition-colors cursor-pointer flex items-center gap-2`,children:["Save this memory",P.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:P.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})}),P.jsx("p",{className:`mt-4 text-center font-body text-[11px] text-text-tertiary/30
            transition-all duration-500
            ${f?"opacity-100 delay-700":"opacity-0"}`,children:"Speak naturally with Wispr Flow, or type"})]}),s>0&&P.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2",children:P.jsxs("div",{className:"flex items-center gap-2",children:[Array.from({length:s}).map((g,v)=>P.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-accent-primary/40"},v)),P.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-accent-primary animate-breathe"})]})})]})}function nC({memory:r,onContinue:e}){const[i,s]=K.useState(0);K.useEffect(()=>{const c=setTimeout(()=>s(1),100);return()=>clearTimeout(c)},[]);const l=()=>{s(2),setTimeout(()=>e(),600)};return r.loading?P.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:P.jsxs("div",{className:"text-center",children:[P.jsx("div",{className:"w-2 h-2 rounded-full bg-accent-primary animate-breathe mx-auto mb-4"}),P.jsx("p",{className:"font-accent text-lg text-text-tertiary italic animate-fade-in",children:"Understanding your memory..."})]})}):P.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:P.jsxs("div",{className:`max-w-[480px] w-full glass-card rounded-xl p-8 transition-all duration-700 ease-out
          ${i===0?"opacity-0 translate-y-6 scale-95":""}
          ${i===1?"opacity-100 translate-y-0 scale-100":""}
          ${i===2?"opacity-0 -translate-y-6 scale-95":""}`,children:[P.jsx("h3",{className:"font-display text-2xl font-medium text-text-primary mb-2",children:r.title}),r.date_hint&&P.jsx("p",{className:"font-body text-[11px] uppercase tracking-[0.1em] text-text-tertiary mb-4",children:r.date_hint}),P.jsxs("p",{className:"font-accent text-lg text-text-secondary leading-relaxed mb-5",children:["“",r.excerpt,"”"]}),P.jsxs("div",{className:"flex items-center gap-2 flex-wrap mb-6",children:[r.emotion&&P.jsx("span",{className:`font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/80
              border border-accent-primary/20 rounded-full px-3 py-1`,children:r.emotion}),r.location?.place_name&&P.jsxs("span",{className:"font-body text-[11px] text-text-tertiary flex items-center gap-1",children:[P.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[P.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),P.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),r.location.place_name]}),r.theme_tags?.map(c=>P.jsx("span",{className:"font-body text-[10px] text-text-tertiary/60 border border-border-subtle rounded-full px-2 py-0.5",children:c},c))]}),P.jsxs("button",{onClick:l,className:`font-body text-sm text-accent-primary hover:text-accent-secondary
            transition-colors cursor-pointer flex items-center gap-2 mx-auto`,children:["Continue",P.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:P.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})})}function iC({memoryCount:r,recipientName:e,onAddMore:i}){const s=ll(),[l,c]=K.useState(!1);return K.useEffect(()=>{const f=setTimeout(()=>c(!0),300);return()=>clearTimeout(f)},[]),P.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:P.jsxs("div",{className:`text-center max-w-[500px] transition-all duration-1000 ease-out
          ${l?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:[P.jsxs("p",{className:"font-accent text-[clamp(22px,4vw,30px)] font-light text-text-primary leading-[1.4] mb-3",children:["Your map of ",P.jsx("span",{className:"text-accent-primary",children:e})," is taking shape."]}),P.jsxs("p",{className:"font-body text-sm text-text-tertiary mb-10",children:[r," ",r===1?"memory":"memories"," captured"]}),P.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[P.jsx(tl,{onClick:()=>s("/preview"),children:"See Your Memory Map"}),P.jsx("button",{onClick:i,className:`font-body text-sm text-accent-primary hover:text-accent-secondary
              transition-colors cursor-pointer`,children:"Add another memory"})]})]})})}const Rx="/api";async function aC(r,e){const i=await fetch(`${Rx}/process-memory`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:r,context:e||null})});if(!i.ok)throw new Error(`API error: ${i.status}`);return i.json()}async function rC(r,e){const i=await fetch(`${Rx}/relationship-summary`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({memories:r,context:e||null})});if(!i.ok)throw new Error(`API error: ${i.status}`);return i.json()}function sC({addMemory:r,updateMemory:e,memories:i,setRelationshipSummary:s,relationshipContext:l}){return{submitMemory:K.useCallback(f=>{const h=Date.now().toString();return r({id:h,rawText:f,loading:!0,title:null,date_hint:null,location:null,emotion:null,excerpt:null,theme_tags:[]}),aC(f,l).then(p=>{if(e(h,{...p,loading:!1,rawText:f}),i.length+1>=3){const g=[...i.map(v=>v.rawText||v.excerpt),f];rC(g,l).then(v=>s(v)).catch(v=>console.error("Summary generation failed:",v))}}).catch(p=>{console.error("Memory processing failed:",p),e(h,{loading:!1,title:"A moment remembered",excerpt:f,emotion:"nostalgia",theme_tags:["personal"]})}),h},[r,e,i,s,l])}}const $c={first:[r=>`What's a moment with ${r} that still makes you smile?`,r=>`Tell me about the first time you met ${r}.`,r=>`What's a memory with ${r} you never want to forget?`],second:[r=>`What's something ${r} does that you absolutely love?`,r=>`Tell me about a time ${r} completely surprised you.`,r=>`Is there a place that always reminds you of ${r}?`],third:[r=>`What would you want ${r} to know they mean to you?`,r=>`What's the funniest thing that's happened between you and ${r}?`,r=>`Tell me about a quiet moment with ${r} that meant everything.`],continuing:[r=>`Is there another moment with ${r} on your mind?`,r=>`What else comes to heart when you think of ${r}?`,r=>"Take your time... any other memory you'd like to capture?"]};function dh(r,e){const i=r===0?$c.first:r===1?$c.second:r===2?$c.third:$c.continuing,s=Math.floor(Math.random()*i.length);return i[s](e)}function oC({memories:r,addMemory:e,updateMemory:i,deleteMemory:s,relationshipContext:l,setRelationshipContext:c,relationshipSummary:f,setRelationshipSummary:h}){const[m,p]=K.useState("prompting"),[_,g]=K.useState(""),[v,M]=K.useState(null),[E,T]=K.useState(0),S=K.useRef(null),{submitMemory:x}=sC({addMemory:e,updateMemory:i,memories:r,setRelationshipSummary:h,relationshipContext:l});K.useEffect(()=>{l&&!_&&g(dh(r.length,l.name))},[l]);const w=r.find(z=>z.id===v);K.useEffect(()=>{m==="processing"&&w&&!w.loading&&p("revealing")},[m,w?.loading]);const N=K.useCallback(z=>{S.current?.burst();const B=x(z);M(B),p("processing")},[x]),O=K.useCallback(()=>{r.length>=3?(S.current?.setHeartMode("heart"),p("complete")):(g(dh(r.length,l.name)),T(z=>z+1),p("prompting"))},[r.length,l]),I=K.useCallback(()=>{S.current?.setHeartMode("none"),g(dh(r.length,l.name)),T(z=>z+1),p("prompting")},[r.length,l]);return l?P.jsxs("main",{className:"min-h-screen bg-bg-primary relative overflow-hidden",children:[P.jsx(ml,{ref:S,mode:m==="complete"?"heart":"drift",intensity:m==="processing"?.8:m==="complete"?.7:.5,fixed:!0}),P.jsx("div",{className:`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
          rounded-full pointer-events-none animate-glow-pulse`,style:{background:"radial-gradient(circle, rgba(212,165,116,0.05) 0%, transparent 60%)"}}),m==="prompting"&&P.jsx(tC,{prompt:_,onSubmit:N,isProcessing:!1,memoryIndex:r.length},E),m==="processing"&&w?.loading&&P.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 relative z-10",children:P.jsxs("div",{className:"text-center",children:[P.jsx("div",{className:"w-2 h-2 rounded-full bg-accent-primary animate-breathe mx-auto mb-4"}),P.jsx("p",{className:"font-accent text-lg text-text-tertiary italic animate-fade-in",children:"Understanding your memory..."})]})}),(m==="revealing"||m==="processing"&&w&&!w.loading)&&w&&P.jsx(nC,{memory:w,onContinue:O}),m==="complete"&&P.jsx(iC,{memoryCount:r.length,recipientName:l.name,onAddMore:I})]}):P.jsx("main",{className:"min-h-screen bg-bg-primary",children:P.jsx(eC,{onComplete:c})})}function lC({lines:r=3}){return P.jsx("div",{className:"space-y-3",children:Array.from({length:r}).map((e,i)=>P.jsx("div",{className:"h-4 rounded animate-shimmer",style:{width:i===r-1?"60%":i===0?"80%":"100%"}},i))})}function cC({memory:r,index:e,onDelete:i}){const[s,l]=K.useState(!1),c=e%2===0;return r.loading?P.jsxs("div",{className:`w-full md:w-[calc(50%-40px)] glass-card rounded-lg p-6 animate-card-enter ${c?"md:mr-auto":"md:ml-auto"}`,style:{animationFillMode:"forwards",opacity:0},children:[P.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[P.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-accent-primary animate-breathe"}),P.jsx("span",{className:"font-body text-[11px] text-text-tertiary italic",children:"Understanding your memory..."})]}),P.jsx(lC,{lines:4})]}):P.jsxs("div",{className:`relative w-full md:w-[calc(50%-40px)] glass-card rounded-lg p-6 animate-card-enter ${c?"md:mr-auto":"md:ml-auto"}`,style:{animationFillMode:"forwards",opacity:0,animationDelay:"0.1s"},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[i&&P.jsx("button",{onClick:()=>i(r.id),className:`absolute top-4 right-4 text-text-tertiary hover:text-text-primary transition-all duration-200 cursor-pointer ${s?"opacity-100 scale-100":"opacity-0 scale-90"}`,"aria-label":"Delete memory",children:P.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:P.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),P.jsx("h3",{className:"font-display text-xl font-medium text-text-primary mb-1 pr-6",children:r.title}),r.date_hint&&P.jsx("p",{className:"font-body text-[11px] uppercase tracking-[0.1em] text-text-tertiary mb-3",children:r.date_hint}),P.jsxs("p",{className:"font-accent text-[17px] text-text-secondary leading-relaxed mb-4",children:["“",r.excerpt,"”"]}),P.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[r.emotion&&P.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/80 border border-accent-primary/20 rounded-full px-3 py-1",children:r.emotion}),r.location?.place_name&&P.jsxs("span",{className:"font-body text-[11px] text-text-tertiary flex items-center gap-1",children:[P.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"shrink-0",children:[P.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),P.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),r.location.place_name]}),r.theme_tags?.map(f=>P.jsx("span",{className:"font-body text-[10px] text-text-tertiary/60 bg-bg-elevated/50 rounded-full px-2.5 py-0.5",children:f},f))]})]})}function uC({memories:r,onDelete:e}){return r.length===0?P.jsxs("div",{className:"py-16 text-center",children:[P.jsx("div",{className:"w-px h-24 bg-accent-primary/10 mx-auto mb-6",style:{borderLeft:"1px dashed rgba(212,165,116,0.2)"}}),P.jsx("p",{className:"font-body text-sm text-text-tertiary max-w-[360px] mx-auto leading-relaxed",children:"Start with any memory. The first time you met. Last Tuesday. The thing they always say. There's no wrong place to begin."})]}):P.jsxs("div",{className:"relative py-8",role:"region","aria-label":"Memory timeline",children:[P.jsx("div",{className:"hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-timeline-line -translate-x-1/2"}),P.jsx("ol",{className:"space-y-8 md:space-y-12 list-none p-0 m-0",children:r.map((i,s)=>P.jsxs("li",{className:"relative",children:[P.jsx("div",{className:"hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-2 h-2 rounded-full bg-accent-primary animate-node-pulse"}),P.jsx(cC,{memory:i,index:s,onDelete:e})]},i.id))})]})}const fC="modulepreload",dC=function(r){return"/"+r},Ev={},$o=function(e,i,s){let l=Promise.resolve();if(i&&i.length>0){let p=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};var f=p;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=h?.nonce||h?.getAttribute("nonce");l=p(i.map(_=>{if(_=dC(_),_ in Ev)return;Ev[_]=!0;const g=_.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${v}`))return;const M=document.createElement("link");if(M.rel=g?"stylesheet":fC,g||(M.as="script"),M.crossOrigin="",M.href=_,m&&M.setAttribute("nonce",m),document.head.appendChild(M),g)return new Promise((E,T)=>{M.addEventListener("load",E),M.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return l.then(h=>{for(const m of h||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})};function hC({memories:r}){const e=K.useRef(null),i=K.useRef(null),[s,l]=K.useState(!1),c=r.filter(f=>f.location?.coordinates&&!f.loading);return K.useEffect(()=>!e.current||i.current?void 0:((async()=>{const h=(await $o(async()=>{const{default:p}=await import("./mapbox-gl-yvUAwFkg.js").then(_=>_.m);return{default:p}},[])).default;await $o(()=>Promise.resolve({}),__vite__mapDeps([0]));try{const _=await(await fetch("/api/config")).json();h.accessToken=_.mapboxToken||""}catch{h.accessToken=""}if(!h.accessToken){console.warn("Mapbox token not set. Map will not render.");return}const m=new h.Map({container:e.current,style:"mapbox://styles/mapbox/dark-v11",center:[-98.5,39.8],zoom:3,attributionControl:!1,logoPosition:"bottom-left"});m.on("load",()=>{l(!0)}),i.current=m})(),()=>{i.current&&(i.current.remove(),i.current=null)}),[]),K.useEffect(()=>{if(!i.current||!s)return;const f=i.current;if(document.querySelectorAll(".memory-marker").forEach(p=>p.remove()),c.length===0)return;(async()=>{const p=(await $o(async()=>{const{default:g}=await import("./mapbox-gl-yvUAwFkg.js").then(v=>v.m);return{default:g}},[])).default,_=new p.LngLatBounds;if(c.forEach((g,v)=>{const[M,E]=g.location.coordinates,T=[E,M];_.extend(T);const S=document.createElement("div");S.className="memory-marker",S.style.cssText=`
          width: 12px;
          height: 12px;
          background: #D4A574;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(212,165,116,0.5);
          animation: marker-drop 0.5s ease-out forwards;
          animation-delay: ${v*.3}s;
          opacity: 0;
        `;const x=new p.Popup({offset:15,closeButton:!1,className:"memory-popup"}).setHTML(`<div style="font-family: Satoshi, sans-serif; font-size: 11px; color: #E8C9A0; background: #111; padding: 6px 10px; border-radius: 4px;">
            ${g.location.place_name}
          </div>`);new p.Marker({element:S}).setLngLat(T).setPopup(x).addTo(f)}),c.length>1)f.fitBounds(_,{padding:60,maxZoom:12});else{const[g,v]=c[0].location.coordinates;f.flyTo({center:[v,g],zoom:10})}})()},[c,s]),P.jsxs("div",{className:"relative h-full min-h-[300px] rounded-lg overflow-hidden border border-border-subtle",children:[P.jsx("div",{ref:e,className:"w-full h-full"}),c.length===0&&P.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-bg-secondary/80 pointer-events-none",children:P.jsx("p",{className:"font-body text-sm text-text-tertiary text-center px-6",children:"Memories with places will appear here"})})]})}function pC(r,e,i,s){const l={m:r.map(h=>({t:h.title,e:h.excerpt,d:h.date_hint,em:h.emotion,l:h.location,tags:h.theme_tags})),s:e?{e:e.relationship_essence,t:e.timeline_title,th:e.dominant_themes,c:e.color_mood}:null,n:i||null,r:s?{name:s.name,type:s.type}:null},c=JSON.stringify(l);return btoa(unescape(encodeURIComponent(c)))}function mC(r){try{const e=decodeURIComponent(escape(atob(r))),i=JSON.parse(e),s=i.m.map((f,h)=>({id:`shared-${h}`,title:f.t,excerpt:f.e,date_hint:f.d,emotion:f.em,location:f.l,theme_tags:f.tags||[]})),l=i.s?{relationship_essence:i.s.e,timeline_title:i.s.t,dominant_themes:i.s.th,color_mood:i.s.c}:null,c=i.r||null;return{memories:s,summary:l,personalNote:i.n,relationshipContext:c}}catch(e){return console.error("Failed to decode share data:",e),null}}function gC(r,e,i,s){const l=pC(r,e,i,s);return`${window.location.origin}/shared/${l}`}function _C({memories:r,summary:e,personalNote:i,relationshipContext:s}){const[l,c]=K.useState(""),[f,h]=K.useState(!1),[m,p]=K.useState(!1),_=()=>{p(!0),setTimeout(()=>{const E=gC(r,e,i,s);c(E),p(!1)},600)},g=async()=>{try{await navigator.clipboard.writeText(l),h(!0),setTimeout(()=>h(!1),2e3)}catch{const E=document.createElement("input");E.value=l,document.body.appendChild(E),E.select(),document.execCommand("copy"),document.body.removeChild(E),h(!0),setTimeout(()=>h(!1),2e3)}},v=()=>{const E=encodeURIComponent("I made a Memory Map for someone I care about. Check it out:");window.open(`https://twitter.com/intent/tweet?text=${E}&url=${encodeURIComponent(l)}`,"_blank")},M=()=>{window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(l)}`,"_blank")};return P.jsxs("div",{className:"text-center py-12",children:[P.jsx("h3",{className:"font-body text-base uppercase tracking-[0.1em] text-text-secondary mb-8",children:"Share This Memory Map"}),l?P.jsxs("div",{className:"space-y-4 animate-fade-up",style:{animationFillMode:"forwards"},children:[P.jsxs("div",{className:"flex items-center gap-2 max-w-[500px] mx-auto",children:[P.jsx("input",{type:"text",readOnly:!0,value:l,className:"flex-1 bg-bg-secondary border border-border-subtle rounded px-4 py-3 font-body text-sm text-text-secondary truncate"}),P.jsx(tl,{variant:"secondary",onClick:g,children:f?P.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:P.jsx("path",{d:"M20 6L9 17l-5-5"})}):"Copy"})]}),P.jsxs("div",{className:"flex items-center justify-center gap-4 pt-2",children:[P.jsx("button",{onClick:v,className:"text-text-tertiary hover:text-accent-primary transition-colors cursor-pointer","aria-label":"Share on X",children:P.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:P.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),P.jsx("button",{onClick:M,className:"text-text-tertiary hover:text-accent-primary transition-colors cursor-pointer","aria-label":"Share on LinkedIn",children:P.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:P.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})})]})]}):P.jsx(tl,{onClick:_,disabled:m,children:m?P.jsxs("span",{className:"flex items-center gap-2",children:[P.jsx("svg",{className:"w-4 h-4 animate-spin",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:P.jsx("path",{d:"M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.49-8.49l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83"})}),"Creating your link..."]}):"Generate Share Link"})]})}function vC({memories:r,relationshipContext:e,relationshipSummary:i,personalNote:s,setPersonalNote:l}){const c=ll();if(r.length===0)return P.jsx("main",{className:"min-h-screen bg-bg-primary flex items-center justify-center px-6",children:P.jsxs("div",{className:"text-center",children:[P.jsx("p",{className:"font-accent text-xl text-text-secondary mb-6",children:"No memories yet. Start by sharing some moments."}),P.jsx(tl,{onClick:()=>c("/create"),children:"Create Memories"})]})});const f=r.some(h=>h.location?.coordinates);return P.jsxs("main",{className:"min-h-screen bg-bg-primary relative overflow-hidden",children:[P.jsx(ml,{mode:"heart",intensity:.5,fixed:!0}),P.jsxs("div",{className:"max-w-[900px] mx-auto px-6 py-[80px] relative z-10",children:[P.jsxs("button",{onClick:()=>c("/create"),className:"font-body text-sm text-text-tertiary hover:text-accent-primary transition-colors mb-12 flex items-center gap-2 cursor-pointer",children:[P.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:P.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to editing"]}),P.jsx(Nr,{children:P.jsxs("div",{className:"text-center mb-16",children:[i?.timeline_title?P.jsx("h1",{className:"font-display text-[40px] font-medium text-text-primary mb-4",children:i.timeline_title}):P.jsx("h1",{className:"font-display text-[40px] font-medium text-text-primary mb-4",children:"Your Memory Map"}),i?.relationship_essence&&P.jsx("p",{className:"font-accent italic text-xl text-text-secondary max-w-[600px] mx-auto",children:i.relationship_essence})]})}),P.jsx(Nr,{delay:.2,children:P.jsx("p",{className:"text-center font-body text-sm text-text-tertiary mb-12",children:"This is your Memory Map. Every point is a real moment, in your own words. Send it to the person who was there."})}),P.jsx(Nr,{delay:.3,children:P.jsx(uC,{memories:r})}),f&&P.jsx(Nr,{delay:.2,children:P.jsx("div",{className:"mt-16 h-[400px] w-[80%] mx-auto",children:P.jsx(hC,{memories:r})})}),i?.dominant_themes&&P.jsx(Nr,{delay:.2,children:P.jsx("div",{className:"flex items-center justify-center gap-3 mt-8 flex-wrap",children:i.dominant_themes.map(h=>P.jsx("span",{className:"font-body text-xs uppercase tracking-[0.06em] text-accent-primary/70 border border-accent-primary/20 rounded-full px-4 py-1.5",children:h},h))})}),P.jsx(Nr,{delay:.1,children:P.jsxs("div",{className:"mt-16 max-w-[500px] mx-auto",children:[P.jsx("label",{className:"font-body text-sm text-text-tertiary block mb-2",children:"Add a personal note (optional)"}),P.jsx("textarea",{value:s,onChange:h=>l(h.target.value),placeholder:"A message that appears when they open your Memory Map...",rows:3,className:"w-full bg-bg-secondary border border-border-subtle rounded-lg p-4 font-body text-sm text-text-primary placeholder:text-text-tertiary/50 focus:outline-none focus:border-accent-primary/50 transition-colors resize-none"})]})}),P.jsx(_C,{memories:r,summary:i,personalNote:s,relationshipContext:e})]})]})}function xC({memory:r,index:e,total:i}){const[s,l]=yu({threshold:.25}),[c,f]=K.useState(!1),[h,m]=K.useState(!1);K.useEffect(()=>{if(l){const g=setTimeout(()=>f(!0),400),v=setTimeout(()=>m(!0),1e3);return()=>{clearTimeout(g),clearTimeout(v)}}},[l]);const p={joy:{color:"rgba(212, 165, 116, 0.05)",glow:"rgba(212, 165, 116, 0.03)"},nostalgia:{color:"rgba(180, 160, 200, 0.04)",glow:"rgba(180, 160, 200, 0.02)"},gratitude:{color:"rgba(160, 200, 170, 0.04)",glow:"rgba(160, 200, 170, 0.02)"},love:{color:"rgba(200, 140, 140, 0.04)",glow:"rgba(200, 140, 140, 0.02)"},humor:{color:"rgba(212, 190, 116, 0.04)",glow:"rgba(212, 190, 116, 0.02)"},bittersweet:{color:"rgba(170, 155, 190, 0.04)",glow:"rgba(170, 155, 190, 0.02)"},adventure:{color:"rgba(116, 175, 212, 0.04)",glow:"rgba(116, 175, 212, 0.02)"},comfort:{color:"rgba(212, 185, 140, 0.04)",glow:"rgba(212, 185, 140, 0.02)"}},_=p[r.emotion]||p.joy;return P.jsxs("section",{ref:s,className:"min-h-[85vh] flex items-center justify-center px-6 py-24 relative overflow-hidden",style:{backgroundColor:_.color},children:[P.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none",style:{background:`radial-gradient(circle, ${_.glow} 0%, transparent 70%)`,opacity:l?1:0,transition:"opacity 1.5s ease-out"}}),P.jsxs("div",{className:"max-w-[580px] text-center relative z-10",children:[P.jsxs("span",{className:`font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary/30 block mb-8 transition-all duration-500 ${l?"opacity-100":"opacity-0"}`,children:[e+1," / ",i]}),P.jsx("h2",{className:`font-display text-[clamp(28px,5vw,42px)] font-medium text-text-primary leading-[1.15] transition-all duration-800 ease-out ${l?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:r.title}),P.jsx("div",{className:`w-8 h-px bg-accent-primary/30 mx-auto mt-6 mb-8 transition-all duration-600 ${c?"opacity-100 w-8":"opacity-0 w-0"}`}),P.jsxs("p",{className:`font-accent text-[clamp(18px,2.5vw,22px)] text-text-secondary leading-[1.7] transition-all duration-800 ease-out ${c?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:["“",r.excerpt,"”"]}),P.jsxs("div",{className:`mt-10 space-y-2 transition-all duration-600 ease-out ${h?"opacity-100":"opacity-0"}`,children:[r.date_hint&&P.jsx("p",{className:"font-body text-[12px] uppercase tracking-[0.1em] text-text-tertiary/60",children:r.date_hint}),r.location?.place_name&&P.jsxs("p",{className:"font-body text-[12px] text-text-tertiary/50 flex items-center justify-center gap-1.5",children:[P.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"shrink-0",children:[P.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),P.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),r.location.place_name]}),P.jsxs("div",{className:"flex items-center justify-center gap-2 mt-4 flex-wrap",children:[r.emotion&&P.jsx("span",{className:"font-body text-[9px] uppercase tracking-[0.1em] text-accent-primary/50 border border-accent-primary/15 rounded-full px-3 py-0.5",children:r.emotion}),r.theme_tags?.map(g=>P.jsx("span",{className:"font-body text-[9px] text-text-tertiary/30 bg-bg-elevated/30 rounded-full px-2.5 py-0.5",children:g},g))]})]})]}),P.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-accent-primary/15 to-transparent"})]})}function yC({memories:r}){const[e,i]=yu({threshold:.2}),s=K.useRef(null),l=K.useRef(null),[c,f]=K.useState(!1),h=r.filter(m=>m.location?.coordinates);return K.useEffect(()=>!i||!s.current||l.current?void 0:((async()=>{const p=(await $o(async()=>{const{default:g}=await import("./mapbox-gl-yvUAwFkg.js").then(v=>v.m);return{default:g}},[])).default;await $o(()=>Promise.resolve({}),__vite__mapDeps([0]));try{const v=await(await fetch("/api/config")).json();p.accessToken=v.mapboxToken||""}catch{p.accessToken=""}if(!p.accessToken)return;const _=new p.Map({container:s.current,style:"mapbox://styles/mapbox/dark-v11",center:[-98.5,39.8],zoom:3,attributionControl:!1,interactive:!0});_.on("load",()=>{if(f(!0),h.length===0)return;const g=new p.LngLatBounds;if(h.forEach((v,M)=>{const[E,T]=v.location.coordinates,S=[T,E];g.extend(S),setTimeout(()=>{const x=document.createElement("div");x.style.cssText=`
              width: 12px;
              height: 12px;
              background: #D4A574;
              border-radius: 50%;
              box-shadow: 0 0 12px rgba(212,165,116,0.5);
              animation: marker-drop 0.5s ease-out forwards;
            `,new p.Marker({element:x}).setLngLat(S).addTo(_)},M*300)}),h.length>1)_.fitBounds(g,{padding:80,maxZoom:12});else{const[v,M]=h[0].location.coordinates;_.flyTo({center:[M,v],zoom:10})}}),l.current=_})(),()=>{l.current&&(l.current.remove(),l.current=null)}),[i,h]),h.length===0?null:P.jsx("section",{ref:e,className:"min-h-[70vh] flex items-center justify-center px-6 py-20",children:P.jsx("div",{className:`w-full max-w-[900px] h-[500px] rounded-lg overflow-hidden border border-border-subtle transition-all duration-1000 ${i?"opacity-100 scale-100":"opacity-0 scale-95"}`,children:P.jsx("div",{ref:s,className:"w-full h-full"})})})}function SC({summary:r}){const[e,i]=yu({threshold:.3}),s=ll();return P.jsxs("section",{ref:e,className:"min-h-[70vh] flex items-center justify-center px-6 py-24 relative overflow-hidden",children:[P.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(212,165,116,0.05) 0%, transparent 70%)",opacity:i?1:0,transition:"opacity 2s ease-out"}}),P.jsxs("div",{className:"text-center max-w-[500px] relative z-10",children:[r?.relationship_essence&&P.jsxs("p",{className:`font-accent italic text-[clamp(20px,3vw,26px)] text-text-secondary leading-[1.6] transition-all duration-1200 ease-out ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:["“",r.relationship_essence,"”"]}),r?.dominant_themes&&P.jsx("div",{className:`flex items-center justify-center gap-3 mt-8 flex-wrap transition-all duration-700 ${i?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.4s"},children:r.dominant_themes.map(l=>P.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.08em] text-accent-primary/50 border border-accent-primary/15 rounded-full px-4 py-1",children:l},l))}),P.jsx("div",{className:`w-12 h-px bg-accent-primary/20 mx-auto my-10 transition-all duration-800 ${i?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.6s"}}),P.jsxs("div",{className:`space-y-5 transition-all duration-700 ease-out ${i?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.8s"},children:[P.jsx("p",{className:"font-body text-[11px] uppercase tracking-[0.15em] text-text-tertiary/40",children:"Made with The Memory Map"}),P.jsx("button",{onClick:()=>s("/"),className:"font-body text-sm text-accent-primary/80 hover:text-accent-secondary transition-all duration-300 cursor-pointer border border-accent-primary/20 rounded-full px-6 py-2 hover:border-accent-primary/40 hover:shadow-[0_0_16px_rgba(212,165,116,0.1)]",children:"Create Your Own Memory Map"})]})]})]})}function MC(){const{data:r}=EM(),[e,i]=K.useState(0),s=K.useMemo(()=>r?mC(r):null,[r]);if(K.useEffect(()=>{const p=setTimeout(()=>i(1),400),_=setTimeout(()=>i(2),2200),g=setTimeout(()=>i(3),3500);return()=>{clearTimeout(p),clearTimeout(_),clearTimeout(g)}},[]),!s)return P.jsx("main",{className:"min-h-screen bg-bg-primary flex items-center justify-center",children:P.jsx("p",{className:"font-accent text-xl text-text-secondary",children:"This memory map couldn't be found."})});const{memories:l,summary:c,personalNote:f,relationshipContext:h}=s,m=h?.name;return P.jsxs("main",{className:"min-h-screen bg-bg-primary relative",children:[P.jsx(ml,{mode:"heart",intensity:.8,fixed:!0}),P.jsxs("section",{className:"min-h-screen flex items-center justify-center relative px-6 overflow-hidden",children:[P.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse",style:{background:"radial-gradient(circle, rgba(212,165,116,0.06) 0%, transparent 60%)"}}),P.jsx("div",{className:`absolute top-[30%] left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-accent-primary/30 to-transparent transition-all duration-1500 ease-out ${e>=1?"h-16 opacity-100":"h-0 opacity-0"}`}),P.jsxs("div",{className:"text-center max-w-[500px] relative z-10",children:[P.jsx("p",{className:`font-accent text-[clamp(26px,5vw,32px)] font-light text-text-primary leading-[1.3] transition-all duration-[1500ms] ease-out ${e>=1?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:m?P.jsxs(P.Fragment,{children:["Someone made this for you, ",P.jsx("span",{className:"text-accent-primary",children:m}),"."]}):"Someone made this for you."}),P.jsx("p",{className:`font-accent text-base text-text-tertiary/60 mt-4 transition-all duration-1000 ease-out ${e>=1?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.8s"},children:"These are their memories of the two of you, in their own words."}),f&&P.jsxs("p",{className:`font-accent italic text-lg text-text-secondary mt-10 leading-relaxed transition-all duration-800 ease-out ${e>=2?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:["“",f,"”"]}),c?.timeline_title&&P.jsx("p",{className:`font-display text-lg text-accent-primary/60 mt-8 tracking-wide transition-all duration-700 ${e>=2?"opacity-100":"opacity-0"}`,style:{transitionDelay:"0.4s"},children:c.timeline_title})]}),P.jsx("div",{className:`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${e>=3?"opacity-100":"opacity-0"}`,children:P.jsxs("div",{className:"flex flex-col items-center gap-2",children:[P.jsx("span",{className:"font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/40",children:"Scroll to begin"}),P.jsx("div",{className:"animate-gentle-bounce",children:P.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"text-text-tertiary/40",children:P.jsx("path",{d:"M6 9l6 6 6-6"})})})]})})]}),P.jsx("div",{className:"flex items-center justify-center py-8",children:P.jsx("div",{className:"w-px h-16 bg-gradient-to-b from-transparent via-accent-primary/20 to-transparent"})}),l.map((p,_)=>P.jsx(xC,{memory:p,index:_,total:l.length},p.id)),P.jsx(yC,{memories:l}),P.jsx(SC,{summary:c})]})}function bC(){const[r,e]=K.useState(()=>yb()),[i,s]=K.useState(()=>Mb()),[l,c]=K.useState(null),[f,h]=K.useState("");K.useEffect(()=>{const g=r.filter(v=>!v.loading);g.length>0&&xb(g)},[r]),K.useEffect(()=>{i&&Sb(i)},[i]);const m=K.useCallback(g=>{e(v=>[...v,{...g,id:g.id||Date.now().toString()}])},[]),p=K.useCallback((g,v)=>{e(M=>M.map(E=>E.id===g?{...E,...v}:E))},[]),_=K.useCallback(g=>{e(v=>v.filter(M=>M.id!==g))},[]);return P.jsx("div",{className:"min-h-screen bg-bg-primary",children:P.jsxs(zM,{children:[P.jsx(Ko,{path:"/",element:P.jsx(J2,{})}),P.jsx(Ko,{path:"/create",element:P.jsx(oC,{memories:r,addMemory:m,updateMemory:p,deleteMemory:_,relationshipContext:i,setRelationshipContext:s,relationshipSummary:l,setRelationshipSummary:c})}),P.jsx(Ko,{path:"/preview",element:P.jsx(vC,{memories:r,relationshipContext:i,relationshipSummary:l,personalNote:f,setPersonalNote:h})}),P.jsx(Ko,{path:"/shared/:data",element:P.jsx(MC,{})})]})})}GS.createRoot(document.getElementById("root")).render(P.jsx(K.StrictMode,{children:P.jsx(cb,{children:P.jsx(bC,{})})}));

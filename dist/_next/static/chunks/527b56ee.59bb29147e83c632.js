"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[507],{8893:function(e,w,C){C.r(w),C.d(w,{default:function(){return Ms}});var R=C(5887);C(553);var _=(0,R.d)((e,w)=>{w.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}}),U=(0,R.d)((e,w)=>{var C=Object.prototype.hasOwnProperty,R=Object.prototype.toString,_=Object.defineProperty,U=Object.getOwnPropertyDescriptor,o=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===R.call(e)},a=function(e){if(!e||"[object Object]"!==R.call(e))return!1;var w,_=C.call(e,"constructor"),U=e.constructor&&e.constructor.prototype&&C.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!_&&!U)return!1;for(w in e);return void 0===w||C.call(e,w)},s=function(e,w){_&&"__proto__"===w.name?_(e,w.name,{enumerable:!0,configurable:!0,value:w.newValue,writable:!0}):e[w.name]=w.newValue},f=function(e,w){if("__proto__"===w){if(!C.call(e,w))return;if(U)return U(e,w).value}return e[w]};w.exports=function c(){var e,w,C,R,_,U,Q=arguments[0],K=1,Y=arguments.length,X=!1;for("boolean"==typeof Q&&(X=Q,Q=arguments[1]||{},K=2),(null==Q||"object"!=typeof Q&&"function"!=typeof Q)&&(Q={});K<Y;++K)if(e=arguments[K],null!=e)for(w in e)C=f(Q,w),Q!==(R=f(e,w))&&(X&&R&&(a(R)||(_=o(R)))?(_?(_=!1,U=C&&o(C)?C:[]):U=C&&a(C)?C:{},s(Q,{name:w,newValue:c(X,U,R)})):void 0!==R&&s(Q,{name:w,newValue:R}));return Q}}),Q=(0,R.d)((e,w)=>{w.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}),K=(0,R.d)((e,w)=>{var C=Q();function r(){}function l(){}l.resetWarningCache=r,w.exports=function(){function i(e,w,R,_,U,Q){if(Q!==C){var K=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw K.name="Invariant Violation",K}}function o(){return i}i.isRequired=i;var e={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:l,resetWarningCache:r};return e.PropTypes=e,e}}),Y=(0,R.d)((e,w)=>{w.exports=K()()}),X=(0,R.d)(e=>{var w,C=Symbol.for("react.element"),R=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),Y=Symbol.for("react.context"),X=Symbol.for("react.server_context"),G=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),eo=Symbol.for("react.lazy"),ec=Symbol.for("react.offscreen");function x(e){if("object"==typeof e&&null!==e){var w=e.$$typeof;switch(w){case C:switch(e=e.type){case _:case Q:case U:case J:case ee:return e;default:switch(e=e&&e.$$typeof){case X:case Y:case G:case eo:case et:case K:return e;default:return w}}case R:return w}}}w=Symbol.for("react.module.reference"),e.ContextConsumer=Y,e.ContextProvider=K,e.Element=C,e.ForwardRef=G,e.Fragment=_,e.Lazy=eo,e.Memo=et,e.Portal=R,e.Profiler=Q,e.StrictMode=U,e.Suspense=J,e.SuspenseList=ee,e.isAsyncMode=function(){return!1},e.isConcurrentMode=function(){return!1},e.isContextConsumer=function(e){return x(e)===Y},e.isContextProvider=function(e){return x(e)===K},e.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===C},e.isForwardRef=function(e){return x(e)===G},e.isFragment=function(e){return x(e)===_},e.isLazy=function(e){return x(e)===eo},e.isMemo=function(e){return x(e)===et},e.isPortal=function(e){return x(e)===R},e.isProfiler=function(e){return x(e)===Q},e.isStrictMode=function(e){return x(e)===U},e.isSuspense=function(e){return x(e)===J},e.isSuspenseList=function(e){return x(e)===ee},e.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===_||e===Q||e===U||e===J||e===ee||e===ec||"object"==typeof e&&null!==e&&(e.$$typeof===eo||e.$$typeof===et||e.$$typeof===K||e.$$typeof===Y||e.$$typeof===G||e.$$typeof===w||void 0!==e.getModuleId)},e.typeOf=x}),G=(0,R.d)((e,w)=>{w.exports=X()}),J=(0,R.d)((e,w)=>{var C=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,R=/\n/g,_=/^\s*/,U=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Q=/^:\s*/,K=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Y=/^[;\s]*/,X=/^\s+|\s+$/g,G=`
`;function x(e){return e?e.replace(X,""):""}w.exports=function(e,w){if("string"!=typeof e)throw TypeError("First argument must be a string");if(!e)return[];w=w||{};var X=1,J=1;function z(e){var w=e.match(R);w&&(X+=w.length);var C=e.lastIndexOf(G);J=~C?e.length-C:J+e.length}function b(){var e={line:X,column:J};return function(w){return w.position=new A(e),N(_),w}}function A(e){this.start=e,this.end={line:X,column:J},this.source=w.source}function j(C){var R=Error(w.source+":"+X+":"+J+": "+C);if(R.reason=C,R.filename=w.source,R.line=X,R.column=J,R.source=e,!w.silent)throw R}function N(w){var C=w.exec(e);if(C){var R=C[0];return z(R),e=e.slice(R.length),C}}function D(e){var w;for(e=e||[];w=T();)!1!==w&&e.push(w);return e}function T(){var w=b();if(!("/"!=e.charAt(0)||"*"!=e.charAt(1))){for(var C=2;""!=e.charAt(C)&&("*"!=e.charAt(C)||"/"!=e.charAt(C+1));)++C;if(C+=2,""===e.charAt(C-1))return j("End of comment missing");var R=e.slice(2,C-2);return J+=2,z(R),e=e.slice(C),J+=2,w({type:"comment",comment:R})}}function $(){var e=b(),w=N(U);if(w){if(T(),!N(Q))return j("property missing ':'");var R=N(K),_=e({type:"declaration",property:x(w[0].replace(C,"")),value:R?x(R[0].replace(C,"")):""});return N(Y),_}}function W(){var e,w=[];for(D(w);e=$();)!1!==e&&(w.push(e),D(w));return w}return A.prototype.content=e,N(_),W()}}),ee=(0,R.d)((e,w)=>{var C=J();function r(e,w){var R=null;if(!e||"string"!=typeof e)return R;for(var _,U,Q,K=C(e),Y="function"==typeof w,X=0,G=K.length;X<G;X++)U=(_=K[X]).property,Q=_.value,Y?w(U,Q,_):Q&&(R||(R={}),R[U]=Q);return R}w.exports=r,w.exports.default=r}),et=(0,R.f)((0,R.k)(),1),eo=["http","https","mailto","tel"];function Xr(e){let w=(e||"").trim(),C=w.charAt(0);if("#"===C||"/"===C)return w;let R=w.indexOf(":");if(-1===R)return w;let _=-1;for(;++_<eo.length;){let e=eo[_];if(R===e.length&&w.slice(0,e.length).toLowerCase()===e)return w}return -1!==(_=w.indexOf("?"))&&R>_||-1!==(_=w.indexOf("#"))&&R>_?w:"javascript:void(0)"}var ec=(0,R.f)((0,R.j)(),1),ef=(0,R.f)(_(),1);function $e(e){return e&&"object"==typeof e?"position"in e||"type"in e?Jt(e.position):"start"in e||"end"in e?Jt(e):"line"in e||"column"in e?xt(e):"":""}function xt(e){return Zt(e&&e.line)+":"+Zt(e&&e.column)}function Jt(e){return xt(e&&e.start)+"-"+xt(e&&e.end)}function Zt(e){return e&&"number"==typeof e?e:1}var ep=class extends Error{constructor(e,w,C){let R=[null,null],_={start:{line:null,column:null},end:{line:null,column:null}};if(super(),"string"==typeof w&&(C=w,w=void 0),"string"==typeof C){let e=C.indexOf(":");-1===e?R[1]=C:(R[0]=C.slice(0,e),R[1]=C.slice(e+1))}w&&("type"in w||"position"in w?w.position&&(_=w.position):"start"in w||"end"in w?_=w:("line"in w||"column"in w)&&(_.start=w)),this.name=$e(w)||"1:1",this.message="object"==typeof e?e.message:e,this.stack="","object"==typeof e&&e.stack&&(this.stack=e.stack),this.reason=this.message,this.fatal,this.line=_.start.line,this.column=_.start.column,this.position=_,this.source=R[0],this.ruleId=R[1],this.file,this.actual,this.expected,this.url,this.note}};ep.prototype.file="",ep.prototype.name="",ep.prototype.reason="",ep.prototype.message="",ep.prototype.stack="",ep.prototype.fatal=null,ep.prototype.column=null,ep.prototype.line=null,ep.prototype.source=null,ep.prototype.ruleId=null,ep.prototype.position=null;var ed={basename:Zr,dirname:Gr,extname:ei,join:ti,sep:"/"};function Zr(e,w){if(void 0!==w&&"string"!=typeof w)throw TypeError('"ext" argument must be a string');We(e);let C=0,R=-1,_=e.length,U;if(void 0===w||0===w.length||w.length>e.length){for(;_--;)if(47===e.charCodeAt(_)){if(U){C=_+1;break}}else R<0&&(U=!0,R=_+1);return R<0?"":e.slice(C,R)}if(w===e)return"";let Q=-1,K=w.length-1;for(;_--;)if(47===e.charCodeAt(_)){if(U){C=_+1;break}}else Q<0&&(U=!0,Q=_+1),K>-1&&(e.charCodeAt(_)===w.charCodeAt(K--)?K<0&&(R=_):(K=-1,R=Q));return C===R?R=Q:R<0&&(R=e.length),e.slice(C,R)}function Gr(e){if(We(e),0===e.length)return".";let w=-1,C=e.length,R;for(;--C;)if(47===e.charCodeAt(C)){if(R){w=C;break}}else R||(R=!0);return w<0?47===e.charCodeAt(0)?"/":".":1===w&&47===e.charCodeAt(0)?"//":e.slice(0,w)}function ei(e){We(e);let w=e.length,C=-1,R=0,_=-1,U=0,Q;for(;w--;){let K=e.charCodeAt(w);if(47===K){if(Q){R=w+1;break}continue}C<0&&(Q=!0,C=w+1),46===K?_<0?_=w:1!==U&&(U=1):_>-1&&(U=-1)}return _<0||C<0||0===U||1===U&&_===C-1&&_===R+1?"":e.slice(_,C)}function ti(...e){let w=-1,C;for(;++w<e.length;)We(e[w]),e[w]&&(C=void 0===C?e[w]:C+"/"+e[w]);return void 0===C?".":ni(C)}function ni(e){We(e);let w=47===e.charCodeAt(0),C=ri(e,!w);return 0!==C.length||w||(C="."),C.length>0&&47===e.charCodeAt(e.length-1)&&(C+="/"),w?"/"+C:C}function ri(e,w){let C="",R=0,_=-1,U=0,Q=-1,K,Y;for(;++Q<=e.length;){if(Q<e.length)K=e.charCodeAt(Q);else{if(47===K)break;K=47}if(47===K){if(!(_===Q-1||1===U)){if(_!==Q-1&&2===U){if(C.length<2||2!==R||46!==C.charCodeAt(C.length-1)||46!==C.charCodeAt(C.length-2)){if(C.length>2){if((Y=C.lastIndexOf("/"))!==C.length-1){Y<0?(C="",R=0):R=(C=C.slice(0,Y)).length-1-C.lastIndexOf("/"),_=Q,U=0;continue}}else if(C.length>0){C="",R=0,_=Q,U=0;continue}}w&&(C=C.length>0?C+"/..":"..",R=2)}else C.length>0?C+="/"+e.slice(_+1,Q):C=e.slice(_+1,Q),R=Q-_-1}_=Q,U=0}else 46===K&&U>-1?U++:U=-1}return C}function We(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}var eh={cwd:li};function li(){return"/"}function vt(e){return null!==e&&"object"==typeof e&&e.href&&e.origin}function oi(e){if("string"==typeof e)e=new URL(e);else if(!vt(e)){let w=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw w.code="ERR_INVALID_ARG_TYPE",w}if("file:"!==e.protocol){let e=TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return ai(e)}function ai(e){if(""!==e.hostname){let e=TypeError('File URL host must be "localhost" or empty on darwin');throw e.code="ERR_INVALID_FILE_URL_HOST",e}let w=e.pathname,C=-1;for(;++C<w.length;)if(37===w.charCodeAt(C)&&50===w.charCodeAt(C+1)){let e=w.charCodeAt(C+2);if(70===e||102===e){let e=TypeError("File URL path must not include encoded / characters");throw e.code="ERR_INVALID_FILE_URL_PATH",e}}return decodeURIComponent(w)}var eg=["history","path","basename","stem","extname","dirname"],em=class{constructor(e){let w,C;w=e?"string"==typeof e||ui(e)?{value:e}:vt(e)?{path:e}:e:{},this.data={},this.messages=[],this.history=[],this.cwd=eh.cwd(),this.value,this.stored,this.result,this.map;let R=-1;for(;++R<eg.length;){let e=eg[R];e in w&&void 0!==w[e]&&null!==w[e]&&(this[e]="history"===e?[...w[e]]:w[e])}for(C in w)eg.includes(C)||(this[C]=w[C])}get path(){return this.history[this.history.length-1]}set path(e){vt(e)&&(e=oi(e)),ft(e,"path"),this.path!==e&&this.history.push(e)}get dirname(){return"string"==typeof this.path?ed.dirname(this.path):void 0}set dirname(e){Gt(this.basename,"dirname"),this.path=ed.join(e||"",this.basename)}get basename(){return"string"==typeof this.path?ed.basename(this.path):void 0}set basename(e){ft(e,"basename"),ct(e,"basename"),this.path=ed.join(this.dirname||"",e)}get extname(){return"string"==typeof this.path?ed.extname(this.path):void 0}set extname(e){if(ct(e,"extname"),Gt(this.dirname,"extname"),e){if(46!==e.charCodeAt(0))throw Error("`extname` must start with `.`");if(e.includes(".",1))throw Error("`extname` cannot contain multiple dots")}this.path=ed.join(this.dirname,this.stem+(e||""))}get stem(){return"string"==typeof this.path?ed.basename(this.path,this.extname):void 0}set stem(e){ft(e,"stem"),ct(e,"stem"),this.path=ed.join(this.dirname||"",e+(this.extname||""))}toString(e){return(this.value||"").toString(e||void 0)}message(e,w,C){let R=new ep(e,w,C);return this.path&&(R.name=this.path+":"+R.name,R.file=this.path),R.fatal=!1,this.messages.push(R),R}info(e,w,C){let R=this.message(e,w,C);return R.fatal=null,R}fail(e,w,C){let R=this.message(e,w,C);throw R.fatal=!0,R}};function ct(e,w){if(e&&e.includes(ed.sep))throw Error("`"+w+"` cannot be a path: did not expect `"+ed.sep+"`")}function ft(e,w){if(!e)throw Error("`"+w+"` cannot be empty")}function Gt(e,w){if(!e)throw Error("Setting `"+w+"` requires `path` to be set too")}function ui(e){return(0,ef.default)(e)}function en(e){if(e)throw e}var ey=(0,R.f)(_(),1),eb=(0,R.f)(U(),1);function wt(e){if("object"!=typeof e||null===e)return!1;let w=Object.getPrototypeOf(e);return(null===w||w===Object.prototype||null===Object.getPrototypeOf(w))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ci(){let e=[],w={run:n,use:r};return w;function n(...w){let C=-1,R=w.pop();if("function"!=typeof R)throw TypeError("Expected function as last argument, not "+R);function a(_,...U){let Q=e[++C],K=-1;if(_){R(_);return}for(;++K<w.length;)(null===U[K]||void 0===U[K])&&(U[K]=w[K]);w=U,Q?fi(Q,a)(...U):R(null,...U)}a(null,...w)}function r(C){if("function"!=typeof C)throw TypeError("Expected `middelware` to be a function, not "+C);return e.push(C),w}}function fi(e,w){let C;return r;function r(...w){let R=e.length>w.length,_;R&&w.push(l);try{_=e.apply(this,w)}catch(e){if(R&&C)throw e;return l(e)}R||(_ instanceof Promise?_.then(i,l):_ instanceof Error?l(_):i(_))}function l(e,...R){C||(C=!0,w(e,...R))}function i(e){l(null,e)}}var ek=Dn().freeze(),ex={}.hasOwnProperty;function Dn(){let e=ci(),w=[],C={},R,_=-1;return i.data=o,i.Parser=void 0,i.Compiler=void 0,i.freeze=a,i.attachers=w,i.use=s,i.parse=f,i.stringify=c,i.run=u,i.runSync=h,i.process=p,i.processSync=y,i;function i(){let e=Dn(),R=-1;for(;++R<w.length;)e.use(...w[R]);return e.data((0,eb.default)(!0,{},C)),e}function o(e,w){return"string"==typeof e?2==arguments.length?(ht("data",R),C[e]=w,i):ex.call(C,e)&&C[e]||null:e?(ht("data",R),C=e,i):C}function a(){if(R)return i;for(;++_<w.length;){let[C,...R]=w[_];if(!1===R[0])continue;!0===R[0]&&(R[0]=void 0);let U=C.call(i,...R);"function"==typeof U&&e.use(U)}return R=!0,_=Number.POSITIVE_INFINITY,i}function s(e,..._){let U;if(ht("use",R),null!=e){if("function"==typeof e)z(e,..._);else if("object"==typeof e)Array.isArray(e)?O(e):S(e);else throw TypeError("Expected usable value, not `"+e+"`")}return U&&(C.settings=Object.assign(C.settings||{},U)),i;function F(e){if("function"==typeof e)z(e);else if("object"==typeof e){if(Array.isArray(e)){let[w,...C]=e;z(w,...C)}else S(e)}else throw TypeError("Expected usable value, not `"+e+"`")}function S(e){O(e.plugins),e.settings&&(U=Object.assign(U||{},e.settings))}function O(e){let w=-1;if(null!=e){if(Array.isArray(e))for(;++w<e.length;)F(e[w]);else throw TypeError("Expected a list of plugins, not `"+e+"`")}}function z(e,C){let R=-1,_;for(;++R<w.length;)if(w[R][0]===e){_=w[R];break}_?(wt(_[1])&&wt(C)&&(C=(0,eb.default)(!0,_[1],C)),_[1]=C):w.push([...arguments])}}function f(e){i.freeze();let w=He(e),C=i.Parser;return pt("parse",C),nn(C,"parse")?new C(String(w),w).parse():C(String(w),w)}function c(e,w){i.freeze();let C=He(w),R=i.Compiler;return dt("stringify",R),rn(e),nn(R,"compile")?new R(e,C).compile():R(e,C)}function u(w,C,R){if(rn(w),i.freeze(),R||"function"!=typeof C||(R=C,C=void 0),!R)return new Promise(F);function F(_,U){e.run(w,He(C),z);function z(e,C,Q){C=C||w,e?U(e):_?_(C):R(null,C,Q)}}F(null,R)}function h(e,w){let C,R;return i.run(e,w,S),ln("runSync","run",R),C;function S(e,w){en(e),C=w,R=!0}}function p(e,w){if(i.freeze(),pt("process",i.Parser),dt("process",i.Compiler),!w)return new Promise(d);function d(C,R){let _=He(e);function z(e,_){e||!_?R(e):C?C(_):w(null,_)}i.run(i.parse(_),_,(e,w,C)=>{if(!e&&w&&C){let R=i.stringify(w,C);null==R||(gi(R)?C.value=R:C.result=R),z(e,C)}else z(e)})}d(null,w)}function y(e){let w;i.freeze(),pt("processSync",i.Parser),dt("processSync",i.Compiler);let C=He(e);return i.process(C,F),ln("processSync","process",w),C;function F(e){w=!0,en(e)}}}function nn(e,w){return"function"==typeof e&&e.prototype&&(di(e.prototype)||w in e.prototype)}function di(e){let w;for(w in e)if(ex.call(e,w))return!0;return!1}function pt(e,w){if("function"!=typeof w)throw TypeError("Cannot `"+e+"` without `Parser`")}function dt(e,w){if("function"!=typeof w)throw TypeError("Cannot `"+e+"` without `Compiler`")}function ht(e,w){if(w)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function rn(e){if(!wt(e)||"string"!=typeof e.type)throw TypeError("Expected node, got `"+e+"`")}function ln(e,w,C){if(!C)throw Error("`"+e+"` finished async. Use `"+w+"` instead")}function He(e){return hi(e)?e:new em(e)}function hi(e){return!!(e&&"object"==typeof e&&"message"in e&&"messages"in e)}function gi(e){return"string"==typeof e||(0,ey.default)(e)}var ev={};function yi(e,w){let C=w||ev;return On(e,"boolean"!=typeof C.includeImageAlt||C.includeImageAlt,"boolean"!=typeof C.includeHtml||C.includeHtml)}function On(e,w,C){if(bi(e)){if("value"in e)return"html"!==e.type||C?e.value:"";if(w&&"alt"in e&&e.alt)return e.alt;if("children"in e)return on(e.children,w,C)}return Array.isArray(e)?on(e,w,C):""}function on(e,w,C){let R=[],_=-1;for(;++_<e.length;)R[_]=On(e[_],w,C);return R.join("")}function bi(e){return!!(e&&"object"==typeof e)}function ne(e,w,C,R){let _=e.length,U=0,Q;if(w=w<0?-w>_?0:_+w:w>_?_:w,C=C>0?C:0,R.length<1e4)(Q=Array.from(R)).unshift(w,C),e.splice(...Q);else for(C&&e.splice(w,C);U<R.length;)(Q=R.slice(U,U+1e4)).unshift(w,0),e.splice(...Q),U+=1e4,w+=1e4}function oe(e,w){return e.length>0?(ne(e,e.length,0,w),e):w}var ew={}.hasOwnProperty;function At(e){let w={},C=-1;for(;++C<e.length;)ki(w,e[C]);return w}function ki(e,w){let C;for(C in w){let R=(ew.call(e,C)?e[C]:void 0)||(e[C]={}),_=w[C],U;if(_)for(U in _){ew.call(R,U)||(R[U]=[]);let e=_[U];xi(R[U],Array.isArray(e)?e:e?[e]:[])}}}function xi(e,w){let C=-1,R=[];for(;++C<w.length;)("after"===w[C].add?e:R).push(w[C]);ne(e,0,0,R)}var eS=Fe(/[A-Za-z]/),eC=Fe(/[\dA-Za-z]/),eF=Fe(/[#-'*+\--9=?A-Z^-~]/);function Ve(e){return null!==e&&(e<32||127===e)}var eA=Fe(/\d/),eE=Fe(/[\dA-Fa-f]/),eD=Fe(/[!-/:-@[-`{-~]/);function I(e){return null!==e&&e<-2}function V(e){return null!==e&&(e<0||32===e)}function B(e){return -2===e||-1===e||32===e}var eT=Fe(/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/),eI=Fe(/\s/);function Fe(e){return t;function t(w){return null!==w&&e.test(String.fromCharCode(w))}}function H(e,w,C,R){let _=R?R-1:Number.POSITIVE_INFINITY,U=0;return o;function o(R){return B(R)?(e.enter(C),a(R)):w(R)}function a(R){return B(R)&&U++<_?(e.consume(R),a):(e.exit(C),w(R))}}var eO={tokenize:Ei};function Ei(e){let w=e.attempt(this.parser.constructs.contentInitial,r,l),C;return w;function r(C){if(null===C){e.consume(C);return}return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),H(e,w,"linePrefix")}function l(w){return e.enter("paragraph"),i(w)}function i(w){let R=e.enter("chunkText",{contentType:"text",previous:C});return C&&(C.next=R),C=R,o(w)}function o(w){if(null===w){e.exit("chunkText"),e.exit("paragraph"),e.consume(w);return}return I(w)?(e.consume(w),e.exit("chunkText"),i):(e.consume(w),o)}}var ez={tokenize:Di},eP={tokenize:Oi};function Di(e){let w=this,C=[],R=0,_,U,Q;return a;function a(_){if(R<C.length){let U=C[R];return w.containerState=U[1],e.attempt(U[0].continuation,s,f)(_)}return f(_)}function s(e){if(R++,w.containerState._closeFlow){w.containerState._closeFlow=void 0,_&&F();let C=w.events.length,U=C,Q;for(;U--;)if("exit"===w.events[U][0]&&"chunkFlow"===w.events[U][1].type){Q=w.events[U][1].end;break}d(R);let K=C;for(;K<w.events.length;)w.events[K][1].end=Object.assign({},Q),K++;return ne(w.events,U+1,0,w.events.slice(C)),w.events.length=K,f(e)}return a(e)}function f(U){if(R===C.length){if(!_)return h(U);if(_.currentConstruct&&_.currentConstruct.concrete)return y(U);w.interrupt=!!(_.currentConstruct&&!_._gfmTableDynamicInterruptHack)}return w.containerState={},e.check(eP,c,u)(U)}function c(e){return _&&F(),d(R),h(e)}function u(e){return w.parser.lazy[w.now().line]=R!==C.length,Q=w.now().offset,y(e)}function h(C){return w.containerState={},e.attempt(eP,p,y)(C)}function p(e){return R++,C.push([w.currentConstruct,w.containerState]),h(e)}function y(C){if(null===C){_&&F(),d(0),e.consume(C);return}return _=_||w.parser.flow(w.now()),e.enter("chunkFlow",{contentType:"flow",previous:U,_tokenizer:_}),k(C)}function k(C){if(null===C){x(e.exit("chunkFlow"),!0),d(0),e.consume(C);return}return I(C)?(e.consume(C),x(e.exit("chunkFlow")),R=0,w.interrupt=void 0,a):(e.consume(C),k)}function x(e,C){let K=w.sliceStream(e);if(C&&K.push(null),e.previous=U,U&&(U.next=e),U=e,_.defineSkip(e.start),_.write(K),w.parser.lazy[e.start.line]){let e=_.events.length;for(;e--;)if(_.events[e][1].start.offset<Q&&(!_.events[e][1].end||_.events[e][1].end.offset>Q))return;let C=w.events.length,U=C,K,Y;for(;U--;)if("exit"===w.events[U][0]&&"chunkFlow"===w.events[U][1].type){if(K){Y=w.events[U][1].end;break}K=!0}for(d(R),e=C;e<w.events.length;)w.events[e][1].end=Object.assign({},Y),e++;ne(w.events,U+1,0,w.events.slice(C)),w.events.length=e}}function d(R){let _=C.length;for(;_-- >R;){let R=C[_];w.containerState=R[1],R[0].exit.call(w,e)}C.length=R}function F(){_.write([null]),U=void 0,_=void 0,w.containerState._closeFlow=void 0}}function Oi(e,w,C){return H(e,e.attempt(this.parser.constructs.document,w,C),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ue(e){return null===e||V(e)||eI(e)?1:eT(e)?2:void 0}function Ke(e,w,C){let R=[],_=-1;for(;++_<e.length;){let U=e[_].resolveAll;U&&!R.includes(U)&&(w=U(w,C),R.push(U))}return w}var eL={name:"attention",tokenize:Li,resolveAll:Ti};function Ti(e,w){let C=-1,R,_,U,Q,K,Y,X,G;for(;++C<e.length;)if("enter"===e[C][0]&&"attentionSequence"===e[C][1].type&&e[C][1]._close){for(R=C;R--;)if("exit"===e[R][0]&&"attentionSequence"===e[R][1].type&&e[R][1]._open&&w.sliceSerialize(e[R][1]).charCodeAt(0)===w.sliceSerialize(e[C][1]).charCodeAt(0)){if((e[R][1]._close||e[C][1]._open)&&(e[C][1].end.offset-e[C][1].start.offset)%3&&!((e[R][1].end.offset-e[R][1].start.offset+e[C][1].end.offset-e[C][1].start.offset)%3))continue;Y=e[R][1].end.offset-e[R][1].start.offset>1&&e[C][1].end.offset-e[C][1].start.offset>1?2:1;let J=Object.assign({},e[R][1].end),ee=Object.assign({},e[C][1].start);sn(J,-Y),sn(ee,Y),Q={type:Y>1?"strongSequence":"emphasisSequence",start:J,end:Object.assign({},e[R][1].end)},K={type:Y>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[C][1].start),end:ee},U={type:Y>1?"strongText":"emphasisText",start:Object.assign({},e[R][1].end),end:Object.assign({},e[C][1].start)},_={type:Y>1?"strong":"emphasis",start:Object.assign({},Q.start),end:Object.assign({},K.end)},e[R][1].end=Object.assign({},Q.start),e[C][1].start=Object.assign({},K.end),X=[],e[R][1].end.offset-e[R][1].start.offset&&(X=oe(X,[["enter",e[R][1],w],["exit",e[R][1],w]])),X=oe(X,[["enter",_,w],["enter",Q,w],["exit",Q,w],["enter",U,w]]),X=oe(X,Ke(w.parser.constructs.insideSpan.null,e.slice(R+1,C),w)),X=oe(X,[["exit",U,w],["enter",K,w],["exit",K,w],["exit",_,w]]),e[C][1].end.offset-e[C][1].start.offset?(G=2,X=oe(X,[["enter",e[C][1],w],["exit",e[C][1],w]])):G=0,ne(e,R-1,C-R+3,X),C=R+X.length-G-2;break}}for(C=-1;++C<e.length;)"attentionSequence"===e[C][1].type&&(e[C][1].type="data");return e}function Li(e,w){let C=this.parser.constructs.attentionMarkers.null,R=this.previous,_=Ue(R),U;return o;function o(w){return U=w,e.enter("attentionSequence"),a(w)}function a(Q){if(Q===U)return e.consume(Q),a;let K=e.exit("attentionSequence"),Y=Ue(Q),X=!Y||2===Y&&_||C.includes(Q),G=!_||2===_&&Y||C.includes(R);return K._open=!!(42===U?X:X&&(_||!G)),K._close=!!(42===U?G:G&&(Y||!X)),w(Q)}}function sn(e,w){e.column+=w,e.offset+=w,e._bufferIndex+=w}function Ii(e,w,C){let R=0;return l;function l(w){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(w),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(w){return eS(w)?(e.consume(w),o):f(w)}function o(e){return 43===e||45===e||46===e||eC(e)?(R=1,a(e)):f(e)}function a(w){return 58===w?(e.consume(w),R=0,s):(43===w||45===w||46===w||eC(w))&&R++<32?(e.consume(w),a):(R=0,f(w))}function s(R){return 62===R?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(R),e.exit("autolinkMarker"),e.exit("autolink"),w):null===R||32===R||60===R||Ve(R)?C(R):(e.consume(R),s)}function f(w){return 64===w?(e.consume(w),c):eF(w)?(e.consume(w),f):C(w)}function c(e){return eC(e)?u(e):C(e)}function u(C){return 46===C?(e.consume(C),R=0,c):62===C?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(C),e.exit("autolinkMarker"),e.exit("autolink"),w):h(C)}function h(w){if((45===w||eC(w))&&R++<63){let C=45===w?h:u;return e.consume(w),C}return C(w)}}var eM={tokenize:zi,partial:!0};function zi(e,w,C){return r;function r(w){return B(w)?H(e,l,"linePrefix")(w):l(w)}function l(e){return null===e||I(e)?w(e):C(e)}}var ej={name:"blockQuote",tokenize:Mi,continuation:{tokenize:ji},exit:Ri};function Mi(e,w,C){let R=this;return l;function l(w){if(62===w){let C=R.containerState;return C.open||(e.enter("blockQuote",{_container:!0}),C.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(w),e.exit("blockQuoteMarker"),i}return C(w)}function i(C){return B(C)?(e.enter("blockQuotePrefixWhitespace"),e.consume(C),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),w):(e.exit("blockQuotePrefix"),w(C))}}function ji(e,w,C){let R=this;return l;function l(w){return B(w)?H(e,i,"linePrefix",R.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):i(w)}function i(R){return e.attempt(ej,w,C)(R)}}function Ri(e){e.exit("blockQuote")}var eR={name:"characterEscape",tokenize:_i};function _i(e,w,C){return r;function r(w){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(w),e.exit("escapeMarker"),l}function l(R){return eD(R)?(e.enter("characterEscapeValue"),e.consume(R),e.exit("characterEscapeValue"),e.exit("characterEscape"),w):C(R)}}var eB=document.createElement("i");function Dt(e){let w="&"+e+";";eB.innerHTML=w;let C=eB.textContent;return(59!==C.charCodeAt(C.length-1)||"semi"===e)&&C!==w&&C}var eN={name:"characterReference",tokenize:Bi};function Bi(e,w,C){let R=this,_=0,U,Q;return a;function a(w){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(w),e.exit("characterReferenceMarker"),s}function s(w){return 35===w?(e.enter("characterReferenceMarkerNumeric"),e.consume(w),e.exit("characterReferenceMarkerNumeric"),f):(e.enter("characterReferenceValue"),U=31,Q=eC,c(w))}function f(w){return 88===w||120===w?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(w),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),U=6,Q=eE,c):(e.enter("characterReferenceValue"),U=7,Q=eA,c(w))}function c(K){if(59===K&&_){let _=e.exit("characterReferenceValue");return Q!==eC||Dt(R.sliceSerialize(_))?(e.enter("characterReferenceMarker"),e.consume(K),e.exit("characterReferenceMarker"),e.exit("characterReference"),w):C(K)}return Q(K)&&_++<U?(e.consume(K),c):C(K)}}var eH={tokenize:Hi,partial:!0},e_={name:"codeFenced",tokenize:Ni,concrete:!0};function Ni(e,w,C){let R=this,_={tokenize:z,partial:!0},U=0,Q=0,K;return s;function s(e){return f(e)}function f(w){let C=R.events[R.events.length-1];return U=C&&"linePrefix"===C[1].type?C[2].sliceSerialize(C[1],!0).length:0,K=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(w)}function c(w){return w===K?(Q++,e.consume(w),c):Q<3?C(w):(e.exit("codeFencedFenceSequence"),B(w)?H(e,u,"whitespace")(w):u(w))}function u(C){return null===C||I(C)?(e.exit("codeFencedFence"),R.interrupt?w(C):e.check(eH,k,O)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(C))}function h(w){return null===w||I(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),u(w)):B(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),H(e,p,"whitespace")(w)):96===w&&w===K?C(w):(e.consume(w),h)}function p(w){return null===w||I(w)?u(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(w))}function y(w){return null===w||I(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),u(w)):96===w&&w===K?C(w):(e.consume(w),y)}function k(w){return e.attempt(_,O,x)(w)}function x(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),d}function d(w){return U>0&&B(w)?H(e,F,"linePrefix",U+1)(w):F(w)}function F(w){return null===w||I(w)?e.check(eH,k,O)(w):(e.enter("codeFlowValue"),S(w))}function S(w){return null===w||I(w)?(e.exit("codeFlowValue"),F(w)):(e.consume(w),S)}function O(C){return e.exit("codeFenced"),w(C)}function z(e,w,C){let _=0;return v;function v(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),D}function D(w){return e.enter("codeFencedFence"),B(w)?H(e,T,"linePrefix",R.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):T(w)}function T(w){return w===K?(e.enter("codeFencedFenceSequence"),$(w)):C(w)}function $(w){return w===K?(_++,e.consume(w),$):_>=Q?(e.exit("codeFencedFenceSequence"),B(w)?H(e,W,"whitespace")(w):W(w)):C(w)}function W(R){return null===R||I(R)?(e.exit("codeFencedFence"),w(R)):C(R)}}}function Hi(e,w,C){let R=this;return l;function l(w){return null===w?C(w):(e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),i)}function i(e){return R.parser.lazy[R.now().line]?C(e):w(e)}}var eV={name:"codeIndented",tokenize:qi},eU={tokenize:Vi,partial:!0};function qi(e,w,C){let R=this;return l;function l(w){return e.enter("codeIndented"),H(e,i,"linePrefix",5)(w)}function i(e){let w=R.events[R.events.length-1];return w&&"linePrefix"===w[1].type&&w[2].sliceSerialize(w[1],!0).length>=4?o(e):C(e)}function o(w){return null===w?s(w):I(w)?e.attempt(eU,o,s)(w):(e.enter("codeFlowValue"),a(w))}function a(w){return null===w||I(w)?(e.exit("codeFlowValue"),o(w)):(e.consume(w),a)}function s(C){return e.exit("codeIndented"),w(C)}}function Vi(e,w,C){let R=this;return l;function l(w){return R.parser.lazy[R.now().line]?C(w):I(w)?(e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),l):H(e,i,"linePrefix",5)(w)}function i(e){let _=R.events[R.events.length-1];return _&&"linePrefix"===_[1].type&&_[2].sliceSerialize(_[1],!0).length>=4?w(e):I(e)?l(e):C(e)}}function Wi(e){let w=e.length-4,C=3,R,_;if(("lineEnding"===e[3][1].type||"space"===e[C][1].type)&&("lineEnding"===e[w][1].type||"space"===e[w][1].type)){for(R=C;++R<w;)if("codeTextData"===e[R][1].type){e[C][1].type="codeTextPadding",e[w][1].type="codeTextPadding",C+=2,w-=2;break}}for(R=C-1,w++;++R<=w;)void 0===_?R!==w&&"lineEnding"!==e[R][1].type&&(_=R):(R===w||"lineEnding"===e[R][1].type)&&(e[_][1].type="codeTextData",R!==_+2&&(e[_][1].end=e[R-1][1].end,e.splice(_+2,R-_-2),w-=R-_-2,R=_+2),_=void 0);return e}function Qi(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type}function Ki(e,w,C){let R=0,_,U;return o;function o(w){return e.enter("codeText"),e.enter("codeTextSequence"),a(w)}function a(w){return 96===w?(e.consume(w),R++,a):(e.exit("codeTextSequence"),s(w))}function s(w){return null===w?C(w):32===w?(e.enter("space"),e.consume(w),e.exit("space"),s):96===w?(U=e.enter("codeTextSequence"),_=0,c(w)):I(w)?(e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),s):(e.enter("codeTextData"),f(w))}function f(w){return null===w||32===w||96===w||I(w)?(e.exit("codeTextData"),s(w)):(e.consume(w),f)}function c(C){return 96===C?(e.consume(C),_++,c):_===R?(e.exit("codeTextSequence"),e.exit("codeText"),w(C)):(U.type="codeTextData",f(C))}}function In(e){let w={},C=-1,R,_,U,Q,K,Y,X;for(;++C<e.length;){for(;(C in w);)C=w[C];if(R=e[C],C&&"chunkFlow"===R[1].type&&"listItemPrefix"===e[C-1][1].type&&((U=0)<(Y=R[1]._tokenizer.events).length&&"lineEndingBlank"===Y[U][1].type&&(U+=2),U<Y.length&&"content"===Y[U][1].type))for(;++U<Y.length&&"content"!==Y[U][1].type;)"chunkText"===Y[U][1].type&&(Y[U][1]._isInFirstContentOfListItem=!0,U++);if("enter"===R[0])R[1].contentType&&(Object.assign(w,Yi(e,C)),C=w[C],X=!0);else if(R[1]._container){for(U=C,_=void 0;U--&&("lineEnding"===(Q=e[U])[1].type||"lineEndingBlank"===Q[1].type);)"enter"===Q[0]&&(_&&(e[_][1].type="lineEndingBlank"),Q[1].type="lineEnding",_=U);_&&(R[1].end=Object.assign({},e[_][1].start),(K=e.slice(_,C)).unshift(R),ne(e,_,C-_+1,K))}}return!X}function Yi(e,w){let C=e[w][1],R=e[w][2],_=w-1,U=[],Q=C._tokenizer||R.parser[C.contentType](C.start),K=Q.events,Y=[],X={},G,J,ee=-1,et=C,eo=0,ec=0,ef=[0];for(;et;){for(;e[++_][1]!==et;);U.push(_),et._tokenizer||(G=R.sliceStream(et),et.next||G.push(null),J&&Q.defineSkip(et.start),et._isInFirstContentOfListItem&&(Q._gfmTasklistFirstContentOfListItem=!0),Q.write(G),et._isInFirstContentOfListItem&&(Q._gfmTasklistFirstContentOfListItem=void 0)),J=et,et=et.next}for(et=C;++ee<K.length;)"exit"===K[ee][0]&&"enter"===K[ee-1][0]&&K[ee][1].type===K[ee-1][1].type&&K[ee][1].start.line!==K[ee][1].end.line&&(ec=ee+1,ef.push(ec),et._tokenizer=void 0,et.previous=void 0,et=et.next);for(Q.events=[],et?(et._tokenizer=void 0,et.previous=void 0):ef.pop(),ee=ef.length;ee--;){let w=K.slice(ef[ee],ef[ee+1]),C=U.pop();Y.unshift([C,C+w.length-1]),ne(e,C,2,w)}for(ee=-1;++ee<Y.length;)X[eo+Y[ee][0]]=eo+Y[ee][1],eo+=Y[ee][1]-Y[ee][0]-1;return X}var eq={tokenize:Gi,resolve:Zi},e$={tokenize:el,partial:!0};function Zi(e){return In(e),e}function Gi(e,w){let C;return r;function r(w){return e.enter("content"),C=e.enter("chunkContent",{contentType:"content"}),l(w)}function l(w){return null===w?i(w):I(w)?e.check(e$,o,i)(w):(e.consume(w),l)}function i(C){return e.exit("chunkContent"),e.exit("content"),w(C)}function o(w){return e.consume(w),e.exit("chunkContent"),C.next=e.enter("chunkContent",{contentType:"content",previous:C}),C=C.next,l}}function el(e,w,C){let R=this;return l;function l(w){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),H(e,i,"linePrefix")}function i(_){if(null===_||I(_))return C(_);let U=R.events[R.events.length-1];return!R.parser.constructs.disable.null.includes("codeIndented")&&U&&"linePrefix"===U[1].type&&U[2].sliceSerialize(U[1],!0).length>=4?w(_):e.interrupt(R.parser.constructs.flow,C,w)(_)}}function zn(e,w,C,R,_,U,Q,K,Y){let X=Y||Number.POSITIVE_INFINITY,G=0;return u;function u(w){return 60===w?(e.enter(R),e.enter(_),e.enter(U),e.consume(w),e.exit(U),h):null===w||32===w||41===w||Ve(w)?C(w):(e.enter(R),e.enter(Q),e.enter(K),e.enter("chunkString",{contentType:"string"}),k(w))}function h(C){return 62===C?(e.enter(U),e.consume(C),e.exit(U),e.exit(_),e.exit(R),w):(e.enter(K),e.enter("chunkString",{contentType:"string"}),p(C))}function p(w){return 62===w?(e.exit("chunkString"),e.exit(K),h(w)):null===w||60===w||I(w)?C(w):(e.consume(w),92===w?y:p)}function y(w){return 60===w||62===w||92===w?(e.consume(w),p):p(w)}function k(_){return!G&&(null===_||41===_||V(_))?(e.exit("chunkString"),e.exit(K),e.exit(Q),e.exit(R),w(_)):G<X&&40===_?(e.consume(_),G++,k):41===_?(e.consume(_),G--,k):null===_||32===_||40===_||Ve(_)?C(_):(e.consume(_),92===_?x:k)}function x(w){return 40===w||41===w||92===w?(e.consume(w),k):k(w)}}function Mn(e,w,C,R,_,U){let Q=this,K=0,Y;return f;function f(w){return e.enter(R),e.enter(_),e.consume(w),e.exit(_),e.enter(U),c}function c(X){return K>999||null===X||91===X||93===X&&!Y||94===X&&!K&&"_hiddenFootnoteSupport"in Q.parser.constructs?C(X):93===X?(e.exit(U),e.enter(_),e.consume(X),e.exit(_),e.exit(R),w):I(X)?(e.enter("lineEnding"),e.consume(X),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),u(X))}function u(w){return null===w||91===w||93===w||I(w)||K++>999?(e.exit("chunkString"),c(w)):(e.consume(w),Y||(Y=!B(w)),92===w?h:u)}function h(w){return 91===w||92===w||93===w?(e.consume(w),K++,u):u(w)}}function jn(e,w,C,R,_,U){let Q;return a;function a(w){return 34===w||39===w||40===w?(e.enter(R),e.enter(_),e.consume(w),e.exit(_),Q=40===w?41:w,s):C(w)}function s(C){return C===Q?(e.enter(_),e.consume(C),e.exit(_),e.exit(R),w):(e.enter(U),f(C))}function f(w){return w===Q?(e.exit(U),s(Q)):null===w?C(w):I(w)?(e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),H(e,f,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(w))}function c(w){return w===Q||null===w||I(w)?(e.exit("chunkString"),f(w)):(e.consume(w),92===w?u:c)}function u(w){return w===Q||92===w?(e.consume(w),c):c(w)}}function qe(e,w){let C;return r;function r(R){return I(R)?(e.enter("lineEnding"),e.consume(R),e.exit("lineEnding"),C=!0,r):B(R)?H(e,r,C?"linePrefix":"lineSuffix")(R):w(R)}}function ae(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var eW={tokenize:il,partial:!0};function rl(e,w,C){let R=this,_;return i;function i(w){return e.enter("definition"),o(w)}function o(w){return Mn.call(R,e,a,C,"definitionLabel","definitionLabelMarker","definitionLabelString")(w)}function a(w){return _=ae(R.sliceSerialize(R.events[R.events.length-1][1]).slice(1,-1)),58===w?(e.enter("definitionMarker"),e.consume(w),e.exit("definitionMarker"),s):C(w)}function s(w){return V(w)?qe(e,f)(w):f(w)}function f(w){return zn(e,c,C,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(w)}function c(w){return e.attempt(eW,u,u)(w)}function u(w){return B(w)?H(e,h,"whitespace")(w):h(w)}function h(U){return null===U||I(U)?(e.exit("definition"),R.parser.defined.push(_),w(U)):C(U)}}function il(e,w,C){return r;function r(w){return V(w)?qe(e,l)(w):C(w)}function l(w){return jn(e,i,C,"definitionTitle","definitionTitleMarker","definitionTitleString")(w)}function i(w){return B(w)?H(e,o,"whitespace")(w):o(w)}function o(e){return null===e||I(e)?w(e):C(e)}}function ol(e,w,C){return r;function r(w){return e.enter("hardBreakEscape"),e.consume(w),l}function l(R){return I(R)?(e.exit("hardBreakEscape"),w(R)):C(R)}}function ul(e,w){let C=e.length-2,R=3,_,U;return"whitespace"===e[3][1].type&&(R+=2),C-2>R&&"whitespace"===e[C][1].type&&(C-=2),"atxHeadingSequence"===e[C][1].type&&(R===C-1||C-4>R&&"whitespace"===e[C-2][1].type)&&(C-=R+1===C?2:4),C>R&&(_={type:"atxHeadingText",start:e[R][1].start,end:e[C][1].end},U={type:"chunkText",start:e[R][1].start,end:e[C][1].end,contentType:"text"},ne(e,R,C-R+1,[["enter",_,w],["enter",U,w],["exit",U,w],["exit",_,w]])),e}function sl(e,w,C){let R=0;return l;function l(w){return e.enter("atxHeading"),i(w)}function i(w){return e.enter("atxHeadingSequence"),o(w)}function o(w){return 35===w&&R++<6?(e.consume(w),o):null===w||V(w)?(e.exit("atxHeadingSequence"),a(w)):C(w)}function a(C){return 35===C?(e.enter("atxHeadingSequence"),s(C)):null===C||I(C)?(e.exit("atxHeading"),w(C)):B(C)?H(e,a,"whitespace")(C):(e.enter("atxHeadingText"),f(C))}function s(w){return 35===w?(e.consume(w),s):(e.exit("atxHeadingSequence"),a(w))}function f(w){return null===w||35===w||V(w)?(e.exit("atxHeadingText"),a(w)):(e.consume(w),f)}}var eQ=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],eK=["pre","script","style","textarea"],eY={tokenize:yl,partial:!0},eZ={tokenize:ml,partial:!0};function hl(e){let w=e.length;for(;w--&&!("enter"===e[w][0]&&"htmlFlow"===e[w][1].type););return w>1&&"linePrefix"===e[w-2][1].type&&(e[w][1].start=e[w-2][1].start,e[w+1][1].start=e[w-2][1].start,e.splice(w-2,2)),e}function gl(e,w,C){let R=this,_,U,Q,K,Y;return f;function f(e){return c(e)}function c(w){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(w),u}function u(K){return 33===K?(e.consume(K),h):47===K?(e.consume(K),U=!0,k):63===K?(e.consume(K),_=3,R.interrupt?w:g):eS(K)?(e.consume(K),Q=String.fromCharCode(K),x):C(K)}function h(U){return 45===U?(e.consume(U),_=2,p):91===U?(e.consume(U),_=5,K=0,y):eS(U)?(e.consume(U),_=4,R.interrupt?w:g):C(U)}function p(_){return 45===_?(e.consume(_),R.interrupt?w:g):C(_)}function y(_){let U="CDATA[";return _===U.charCodeAt(K++)?(e.consume(_),K===U.length?R.interrupt?w:T:y):C(_)}function k(w){return eS(w)?(e.consume(w),Q=String.fromCharCode(w),x):C(w)}function x(K){if(null===K||47===K||62===K||V(K)){let Y=47===K,X=Q.toLowerCase();return!Y&&!U&&eK.includes(X)?(_=1,R.interrupt?w(K):T(K)):eQ.includes(Q.toLowerCase())?(_=6,Y?(e.consume(K),d):R.interrupt?w(K):T(K)):(_=7,R.interrupt&&!R.parser.lazy[R.now().line]?C(K):U?F(K):S(K))}return 45===K||eC(K)?(e.consume(K),Q+=String.fromCharCode(K),x):C(K)}function d(_){return 62===_?(e.consume(_),R.interrupt?w:T):C(_)}function F(w){return B(w)?(e.consume(w),F):v(w)}function S(w){return 47===w?(e.consume(w),v):58===w||95===w||eS(w)?(e.consume(w),O):B(w)?(e.consume(w),S):v(w)}function O(w){return 45===w||46===w||58===w||95===w||eC(w)?(e.consume(w),O):z(w)}function z(w){return 61===w?(e.consume(w),b):B(w)?(e.consume(w),z):S(w)}function b(w){return null===w||60===w||61===w||62===w||96===w?C(w):34===w||39===w?(e.consume(w),Y=w,A):B(w)?(e.consume(w),b):j(w)}function A(w){return w===Y?(e.consume(w),Y=null,N):null===w||I(w)?C(w):(e.consume(w),A)}function j(w){return null===w||34===w||39===w||47===w||60===w||61===w||62===w||96===w||V(w)?z(w):(e.consume(w),j)}function N(e){return 47===e||62===e||B(e)?S(e):C(e)}function v(w){return 62===w?(e.consume(w),D):C(w)}function D(w){return null===w||I(w)?T(w):B(w)?(e.consume(w),D):C(w)}function T(w){return 45===w&&2===_?(e.consume(w),P):60===w&&1===_?(e.consume(w),q):62===w&&4===_?(e.consume(w),ce):63===w&&3===_?(e.consume(w),g):93===w&&5===_?(e.consume(w),ye):I(w)&&(6===_||7===_)?(e.exit("htmlFlowData"),e.check(eY,be,$)(w)):null===w||I(w)?(e.exit("htmlFlowData"),$(w)):(e.consume(w),T)}function $(w){return e.check(eZ,W,be)(w)}function W(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),L}function L(w){return null===w||I(w)?$(w):(e.enter("htmlFlowData"),T(w))}function P(w){return 45===w?(e.consume(w),g):T(w)}function q(w){return 47===w?(e.consume(w),Q="",re):T(w)}function re(w){if(62===w){let C=Q.toLowerCase();return eK.includes(C)?(e.consume(w),ce):T(w)}return eS(w)&&Q.length<8?(e.consume(w),Q+=String.fromCharCode(w),re):T(w)}function ye(w){return 93===w?(e.consume(w),g):T(w)}function g(w){return 62===w?(e.consume(w),ce):45===w&&2===_?(e.consume(w),g):T(w)}function ce(w){return null===w||I(w)?(e.exit("htmlFlowData"),be(w)):(e.consume(w),ce)}function be(C){return e.exit("htmlFlow"),w(C)}}function ml(e,w,C){let R=this;return l;function l(w){return I(w)?(e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),i):C(w)}function i(e){return R.parser.lazy[R.now().line]?C(e):w(e)}}function yl(e,w,C){return r;function r(R){return e.enter("lineEnding"),e.consume(R),e.exit("lineEnding"),e.attempt(eM,w,C)}}function kl(e,w,C){let R=this,_,U,Q;return a;function a(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),s}function s(w){return 33===w?(e.consume(w),f):47===w?(e.consume(w),z):63===w?(e.consume(w),S):eS(w)?(e.consume(w),j):C(w)}function f(w){return 45===w?(e.consume(w),c):91===w?(e.consume(w),U=0,y):eS(w)?(e.consume(w),F):C(w)}function c(w){return 45===w?(e.consume(w),p):C(w)}function u(w){return null===w?C(w):45===w?(e.consume(w),h):I(w)?(Q=u,q(w)):(e.consume(w),u)}function h(w){return 45===w?(e.consume(w),p):u(w)}function p(e){return 62===e?P(e):45===e?h(e):u(e)}function y(w){let R="CDATA[";return w===R.charCodeAt(U++)?(e.consume(w),U===R.length?k:y):C(w)}function k(w){return null===w?C(w):93===w?(e.consume(w),x):I(w)?(Q=k,q(w)):(e.consume(w),k)}function x(w){return 93===w?(e.consume(w),d):k(w)}function d(w){return 62===w?P(w):93===w?(e.consume(w),d):k(w)}function F(w){return null===w||62===w?P(w):I(w)?(Q=F,q(w)):(e.consume(w),F)}function S(w){return null===w?C(w):63===w?(e.consume(w),O):I(w)?(Q=S,q(w)):(e.consume(w),S)}function O(e){return 62===e?P(e):S(e)}function z(w){return eS(w)?(e.consume(w),b):C(w)}function b(w){return 45===w||eC(w)?(e.consume(w),b):A(w)}function A(w){return I(w)?(Q=A,q(w)):B(w)?(e.consume(w),A):P(w)}function j(w){return 45===w||eC(w)?(e.consume(w),j):47===w||62===w||V(w)?N(w):C(w)}function N(w){return 47===w?(e.consume(w),P):58===w||95===w||eS(w)?(e.consume(w),v):I(w)?(Q=N,q(w)):B(w)?(e.consume(w),N):P(w)}function v(w){return 45===w||46===w||58===w||95===w||eC(w)?(e.consume(w),v):D(w)}function D(w){return 61===w?(e.consume(w),T):I(w)?(Q=D,q(w)):B(w)?(e.consume(w),D):N(w)}function T(w){return null===w||60===w||61===w||62===w||96===w?C(w):34===w||39===w?(e.consume(w),_=w,$):I(w)?(Q=T,q(w)):B(w)?(e.consume(w),T):(e.consume(w),W)}function $(w){return w===_?(e.consume(w),_=void 0,L):null===w?C(w):I(w)?(Q=$,q(w)):(e.consume(w),$)}function W(w){return null===w||34===w||39===w||60===w||61===w||96===w?C(w):47===w||62===w||V(w)?N(w):(e.consume(w),W)}function L(e){return 47===e||62===e||V(e)?N(e):C(e)}function P(R){return 62===R?(e.consume(R),e.exit("htmlTextData"),e.exit("htmlText"),w):C(R)}function q(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),re}function re(w){return B(w)?H(e,ye,"linePrefix",R.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):ye(w)}function ye(w){return e.enter("htmlTextData"),Q(w)}}var eX={name:"labelEnd",tokenize:Fl,resolveTo:Cl,resolveAll:Sl},eG={tokenize:El},eJ={tokenize:Al},e1={tokenize:Dl};function Sl(e){let w=-1;for(;++w<e.length;){let C=e[w][1];("labelImage"===C.type||"labelLink"===C.type||"labelEnd"===C.type)&&(e.splice(w+1,"labelImage"===C.type?4:2),C.type="data",w++)}return e}function Cl(e,w){let C=e.length,R=0,_,U,Q,K;for(;C--;)if(_=e[C][1],U){if("link"===_.type||"labelLink"===_.type&&_._inactive)break;"enter"===e[C][0]&&"labelLink"===_.type&&(_._inactive=!0)}else if(Q){if("enter"===e[C][0]&&("labelImage"===_.type||"labelLink"===_.type)&&!_._balanced&&(U=C,"labelLink"!==_.type)){R=2;break}}else"labelEnd"===_.type&&(Q=C);let Y={type:"labelLink"===e[U][1].type?"link":"image",start:Object.assign({},e[U][1].start),end:Object.assign({},e[e.length-1][1].end)},X={type:"label",start:Object.assign({},e[U][1].start),end:Object.assign({},e[Q][1].end)},G={type:"labelText",start:Object.assign({},e[U+R+2][1].end),end:Object.assign({},e[Q-2][1].start)};return K=oe(K=[["enter",Y,w],["enter",X,w]],e.slice(U+1,U+R+3)),K=oe(K,[["enter",G,w]]),K=oe(K,Ke(w.parser.constructs.insideSpan.null,e.slice(U+R+4,Q-3),w)),K=oe(K,[["exit",G,w],e[Q-2],e[Q-1],["exit",X,w]]),K=oe(K,e.slice(Q+1)),K=oe(K,[["exit",Y,w]]),ne(e,U,e.length,K),e}function Fl(e,w,C){let R=this,_=R.events.length,U,Q;for(;_--;)if(("labelImage"===R.events[_][1].type||"labelLink"===R.events[_][1].type)&&!R.events[_][1]._balanced){U=R.events[_][1];break}return a;function a(w){return U?U._inactive?u(w):(Q=R.parser.defined.includes(ae(R.sliceSerialize({start:U.end,end:R.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(w),e.exit("labelMarker"),e.exit("labelEnd"),s):C(w)}function s(w){return 40===w?e.attempt(eG,c,Q?c:u)(w):91===w?e.attempt(eJ,c,Q?f:u)(w):Q?c(w):u(w)}function f(w){return e.attempt(e1,c,u)(w)}function c(e){return w(e)}function u(e){return U._balanced=!0,C(e)}}function El(e,w,C){return r;function r(w){return e.enter("resource"),e.enter("resourceMarker"),e.consume(w),e.exit("resourceMarker"),l}function l(w){return V(w)?qe(e,i)(w):i(w)}function i(w){return 41===w?c(w):zn(e,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(w)}function o(w){return V(w)?qe(e,s)(w):c(w)}function a(e){return C(e)}function s(w){return 34===w||39===w||40===w?jn(e,f,C,"resourceTitle","resourceTitleMarker","resourceTitleString")(w):c(w)}function f(w){return V(w)?qe(e,c)(w):c(w)}function c(R){return 41===R?(e.enter("resourceMarker"),e.consume(R),e.exit("resourceMarker"),e.exit("resource"),w):C(R)}}function Al(e,w,C){let R=this;return l;function l(w){return Mn.call(R,e,i,o,"reference","referenceMarker","referenceString")(w)}function i(e){return R.parser.defined.includes(ae(R.sliceSerialize(R.events[R.events.length-1][1]).slice(1,-1)))?w(e):C(e)}function o(e){return C(e)}}function Dl(e,w,C){return r;function r(w){return e.enter("reference"),e.enter("referenceMarker"),e.consume(w),e.exit("referenceMarker"),l}function l(R){return 93===R?(e.enter("referenceMarker"),e.consume(R),e.exit("referenceMarker"),e.exit("reference"),w):C(R)}}var e0={name:"labelStartImage",tokenize:Tl,resolveAll:eX.resolveAll};function Tl(e,w,C){let R=this;return l;function l(w){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(w),e.exit("labelImageMarker"),i}function i(w){return 91===w?(e.enter("labelMarker"),e.consume(w),e.exit("labelMarker"),e.exit("labelImage"),o):C(w)}function o(e){return 94===e&&"_hiddenFootnoteSupport"in R.parser.constructs?C(e):w(e)}}var e2={name:"labelStartLink",tokenize:Pl,resolveAll:eX.resolveAll};function Pl(e,w,C){let R=this;return l;function l(w){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(w),e.exit("labelMarker"),e.exit("labelLink"),i}function i(e){return 94===e&&"_hiddenFootnoteSupport"in R.parser.constructs?C(e):w(e)}}var e5={name:"lineEnding",tokenize:Il};function Il(e,w){return n;function n(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),H(e,w,"linePrefix")}}var e4={name:"thematicBreak",tokenize:zl};function zl(e,w,C){let R=0,_;return i;function i(w){return e.enter("thematicBreak"),o(w)}function o(e){return _=e,a(e)}function a(U){return U===_?(e.enter("thematicBreakSequence"),s(U)):R>=3&&(null===U||I(U))?(e.exit("thematicBreak"),w(U)):C(U)}function s(w){return w===_?(e.consume(w),R++,s):(e.exit("thematicBreakSequence"),B(w)?H(e,a,"whitespace")(w):a(w))}}var e3={name:"list",tokenize:Rl,continuation:{tokenize:_l},exit:Nl},e6={tokenize:Hl,partial:!0},e9={tokenize:Bl,partial:!0};function Rl(e,w,C){let R=this,_=R.events[R.events.length-1],U=_&&"linePrefix"===_[1].type?_[2].sliceSerialize(_[1],!0).length:0,Q=0;return a;function a(w){let _=R.containerState.type||(42===w||43===w||45===w?"listUnordered":"listOrdered");if("listUnordered"===_?!R.containerState.marker||w===R.containerState.marker:eA(w)){if(R.containerState.type||(R.containerState.type=_,e.enter(_,{_container:!0})),"listUnordered"===_)return e.enter("listItemPrefix"),42===w||45===w?e.check(e4,C,f)(w):f(w);if(!R.interrupt||49===w)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(w)}return C(w)}function s(w){return eA(w)&&++Q<10?(e.consume(w),s):(!R.interrupt||Q<2)&&(R.containerState.marker?w===R.containerState.marker:41===w||46===w)?(e.exit("listItemValue"),f(w)):C(w)}function f(w){return e.enter("listItemMarker"),e.consume(w),e.exit("listItemMarker"),R.containerState.marker=R.containerState.marker||w,e.check(eM,R.interrupt?C:c,e.attempt(e6,h,u))}function c(e){return R.containerState.initialBlankLine=!0,U++,h(e)}function u(w){return B(w)?(e.enter("listItemPrefixWhitespace"),e.consume(w),e.exit("listItemPrefixWhitespace"),h):C(w)}function h(C){return R.containerState.size=U+R.sliceSerialize(e.exit("listItemPrefix"),!0).length,w(C)}}function _l(e,w,C){let R=this;return R.containerState._closeFlow=void 0,e.check(eM,l,i);function l(C){return R.containerState.furtherBlankLines=R.containerState.furtherBlankLines||R.containerState.initialBlankLine,H(e,w,"listItemIndent",R.containerState.size+1)(C)}function i(C){return R.containerState.furtherBlankLines||!B(C)?(R.containerState.furtherBlankLines=void 0,R.containerState.initialBlankLine=void 0,o(C)):(R.containerState.furtherBlankLines=void 0,R.containerState.initialBlankLine=void 0,e.attempt(e9,w,o)(C))}function o(_){return R.containerState._closeFlow=!0,R.interrupt=void 0,H(e,e.attempt(e3,w,C),"linePrefix",R.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_)}}function Bl(e,w,C){let R=this;return H(e,l,"listItemIndent",R.containerState.size+1);function l(e){let _=R.events[R.events.length-1];return _&&"listItemIndent"===_[1].type&&_[2].sliceSerialize(_[1],!0).length===R.containerState.size?w(e):C(e)}}function Nl(e){e.exit(this.containerState.type)}function Hl(e,w,C){let R=this;return H(e,l,"listItemPrefixWhitespace",R.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function l(e){let _=R.events[R.events.length-1];return!B(e)&&_&&"listItemPrefixWhitespace"===_[1].type?w(e):C(e)}}var e7={name:"setextUnderline",tokenize:ql,resolveTo:$l};function $l(e,w){let C=e.length,R,_,U;for(;C--;)if("enter"===e[C][0]){if("content"===e[C][1].type){R=C;break}"paragraph"===e[C][1].type&&(_=C)}else"content"===e[C][1].type&&e.splice(C,1),U||"definition"!==e[C][1].type||(U=C);let Q={type:"setextHeading",start:Object.assign({},e[_][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[_][1].type="setextHeadingText",U?(e.splice(_,0,["enter",Q,w]),e.splice(U+1,0,["exit",e[R][1],w]),e[R][1].end=Object.assign({},e[U][1].end)):e[R][1]=Q,e.push(["exit",Q,w]),e}function ql(e,w,C){let R=this,_;return i;function i(w){let U=R.events.length,Q;for(;U--;)if("lineEnding"!==R.events[U][1].type&&"linePrefix"!==R.events[U][1].type&&"content"!==R.events[U][1].type){Q="paragraph"===R.events[U][1].type;break}return!R.parser.lazy[R.now().line]&&(R.interrupt||Q)?(e.enter("setextHeadingLine"),_=w,o(w)):C(w)}function o(w){return e.enter("setextHeadingLineSequence"),a(w)}function a(w){return w===_?(e.consume(w),a):(e.exit("setextHeadingLineSequence"),B(w)?H(e,s,"lineSuffix")(w):s(w))}function s(R){return null===R||I(R)?(e.exit("setextHeadingLine"),w(R)):C(R)}}var e8={tokenize:Ul};function Ul(e){let w=this,C=e.attempt(eM,r,e.attempt(this.parser.constructs.flowInitial,l,H(e,e.attempt(this.parser.constructs.flow,l,e.attempt(eq,l)),"linePrefix")));return C;function r(R){if(null===R){e.consume(R);return}return e.enter("lineEndingBlank"),e.consume(R),e.exit("lineEndingBlank"),w.currentConstruct=void 0,C}function l(R){if(null===R){e.consume(R);return}return e.enter("lineEnding"),e.consume(R),e.exit("lineEnding"),w.currentConstruct=void 0,C}}var te={resolveAll:_n()},tn=Rn("string"),tr=Rn("text");function Rn(e){return{tokenize:t,resolveAll:_n("text"===e?Yl:void 0)};function t(w){let C=this,R=this.parser.constructs[e],_=w.attempt(R,o,a);return o;function o(e){return f(e)?_(e):a(e)}function a(e){if(null===e){w.consume(e);return}return w.enter("data"),w.consume(e),s}function s(e){return f(e)?(w.exit("data"),_(e)):(w.consume(e),s)}function f(e){if(null===e)return!0;let w=R[e],_=-1;if(w)for(;++_<w.length;){let e=w[_];if(!e.previous||e.previous.call(C,C.previous))return!0}return!1}}}function _n(e){return t;function t(w,C){let R=-1,_;for(;++R<=w.length;)void 0===_?w[R]&&"data"===w[R][1].type&&(_=R,R++):w[R]&&"data"===w[R][1].type||(R!==_+2&&(w[_][1].end=w[R-1][1].end,w.splice(_+2,R-_-2),R=_+2),_=void 0);return e?e(w,C):w}}function Yl(e,w){let C=0;for(;++C<=e.length;)if((C===e.length||"lineEnding"===e[C][1].type)&&"data"===e[C-1][1].type){let R=e[C-1][1],_=w.sliceStream(R),U=_.length,Q=-1,K=0,Y;for(;U--;){let e=_[U];if("string"==typeof e){for(Q=e.length;32===e.charCodeAt(Q-1);)K++,Q--;if(Q)break;Q=-1}else if(-2===e)Y=!0,K++;else if(-1!==e){U++;break}}if(K){let _={type:C===e.length||Y||K<2?"lineSuffix":"hardBreakTrailing",start:{line:R.end.line,column:R.end.column-K,offset:R.end.offset-K,_index:R.start._index+U,_bufferIndex:U?Q:R.start._bufferIndex+Q},end:Object.assign({},R.end)};R.end=Object.assign({},_.start),R.start.offset===R.end.offset?Object.assign(R,_):(e.splice(C,0,["enter",_,w],["exit",_,w]),C+=2)}C++}return e}function Xl(e,w,C){let R=Object.assign(C?Object.assign({},C):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1}),_={},U=[],Q=[],K=[],Y={consume:F,enter:S,exit:O,attempt:A(z),check:A(b),interrupt:A(b,{interrupt:!0})},X={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:p,sliceSerialize:h,now:y,defineSkip:k,write:u},G=w.tokenize.call(X,Y);return w.resolveAll&&U.push(w),X;function u(e){return Q=oe(Q,e),x(),null!==Q[Q.length-1]?[]:(j(w,0),X.events=Ke(U,X.events,X),X.events)}function h(e,w){return Zl(p(e),w)}function p(e){return Jl(Q,e)}function y(){let{line:e,column:w,offset:C,_index:_,_bufferIndex:U}=R;return{line:e,column:w,offset:C,_index:_,_bufferIndex:U}}function k(e){_[e.line]=e.column,v()}function x(){let e;for(;R._index<Q.length;){var w;let C=Q[R._index];if("string"==typeof C)for(e=R._index,R._bufferIndex<0&&(R._bufferIndex=0);R._index===e&&R._bufferIndex<C.length;)w=C.charCodeAt(R._bufferIndex),G=G(w);else G=G(C)}}function F(e){I(e)?(R.line++,R.column=1,R.offset+=-3===e?2:1,v()):-1!==e&&(R.column++,R.offset++),R._bufferIndex<0?R._index++:(R._bufferIndex++,R._bufferIndex===Q[R._index].length&&(R._bufferIndex=-1,R._index++)),X.previous=e}function S(e,w){let C=w||{};return C.type=e,C.start=y(),X.events.push(["enter",C,X]),K.push(C),C}function O(e){let w=K.pop();return w.end=y(),X.events.push(["exit",w,X]),w}function z(e,w){j(e,w.from)}function b(e,w){w.restore()}function A(e,w){return $;function $(C,R,_){let U,Q,K,G;return Array.isArray(C)?be(C):"tokenize"in C?be([C]):ce(C);function ce(e){return Te;function Te(w){let C=null!==w&&e[w],R=null!==w&&e.null;return be([...Array.isArray(C)?C:C?[C]:[],...Array.isArray(R)?R:R?[R]:[]])(w)}}function be(e){return U=e,Q=0,0===e.length?_:m(e[Q])}function m(e){return Te;function Te(C){return G=N(),K=e,e.partial||(X.currentConstruct=e),e.name&&X.parser.constructs.disable.null.includes(e.name)?Oe():e.tokenize.call(w?Object.assign(Object.create(X),w):X,Y,fe,Oe)(C)}}function fe(w){return e(K,G),R}function Oe(e){return G.restore(),++Q<U.length?m(U[Q]):_}}}function j(e,w){e.resolveAll&&!U.includes(e)&&U.push(e),e.resolve&&ne(X.events,w,X.events.length-w,e.resolve(X.events.slice(w),X)),e.resolveTo&&(X.events=e.resolveTo(X.events,X))}function N(){let e=y(),w=X.previous,C=X.currentConstruct,_=X.events.length,U=Array.from(K);return{restore:P,from:_};function P(){R=e,X.previous=w,X.currentConstruct=C,X.events.length=_,K=U,v()}}function v(){R.line in _&&R.column<2&&(R.column=_[R.line],R.offset+=_[R.line]-1)}}function Jl(e,w){let C=w.start._index,R=w.start._bufferIndex,_=w.end._index,U=w.end._bufferIndex,Q;if(C===_)Q=[e[C].slice(R,U)];else{if(Q=e.slice(C,_),R>-1){let e=Q[0];"string"==typeof e?Q[0]=e.slice(R):Q.shift()}U>0&&Q.push(e[_].slice(0,U))}return Q}function Zl(e,w){let C=-1,R=[],_;for(;++C<e.length;){let U=e[C],Q;if("string"==typeof U)Q=U;else switch(U){case -5:Q="\r";break;case -4:Q=`
`;break;case -3:Q=`\r
`;break;case -2:Q=w?" ":"	";break;case -1:if(!w&&_)continue;Q=" ";break;default:Q=String.fromCharCode(U)}_=-2===U,R.push(Q)}return R.join("")}var to={};(0,R.e)(to,{attentionMarkers:()=>tm,contentInitial:()=>tc,disable:()=>ty,document:()=>tl,flow:()=>tp,flowInitial:()=>tf,insideSpan:()=>tg,string:()=>td,text:()=>th});var tl={42:e3,43:e3,45:e3,48:e3,49:e3,50:e3,51:e3,52:e3,53:e3,54:e3,55:e3,56:e3,57:e3,62:ej},tc={91:{name:"definition",tokenize:rl}},tf={[-2]:eV,[-1]:eV,32:eV},tp={35:{name:"headingAtx",tokenize:sl,resolve:ul},42:e4,45:[e7,e4],60:{name:"htmlFlow",tokenize:gl,resolveTo:hl,concrete:!0},61:e7,95:e4,96:e_,126:e_},td={38:eN,92:eR},th={[-5]:e5,[-4]:e5,[-3]:e5,33:e0,38:eN,42:eL,60:[{name:"autolink",tokenize:Ii},{name:"htmlText",tokenize:kl}],91:e2,92:[{name:"hardBreakEscape",tokenize:ol},eR],93:eX,95:eL,96:{name:"codeText",tokenize:Ki,resolve:Wi,previous:Qi}},tg={null:[eL,te]},tm={null:[42,95]},ty={null:[]};function uo(e){let w={defined:[],lazy:{},constructs:At([to,...(e||{}).extensions||[]]),content:r(eO),document:r(ez),flow:r(e8),string:r(tn),text:r(tr)};return w;function r(e){return i;function i(C){return Xl(w,e,C)}}}var tb=/[\0\t\n\r]/g;function so(){let e=1,w="",C=!0,R;return l;function l(_,U,Q){let K=[],Y,X,G,J,ee;for(_=w+_.toString(U),G=0,w="",C&&(65279===_.charCodeAt(0)&&G++,C=void 0);G<_.length;){if(tb.lastIndex=G,J=(Y=tb.exec(_))&&void 0!==Y.index?Y.index:_.length,ee=_.charCodeAt(J),!Y){w=_.slice(G);break}if(10===ee&&G===J&&R)K.push(-3),R=void 0;else switch(R&&(K.push(-5),R=void 0),G<J&&(K.push(_.slice(G,J)),e+=J-G),ee){case 0:K.push(65533),e++;break;case 9:for(X=4*Math.ceil(e/4),K.push(-2);e++<X;)K.push(-1);break;case 10:K.push(-4),e=1;break;default:R=!0,e=1}G=J+1}return Q&&(R&&K.push(-5),w&&K.push(w),K.push(null)),K}}function co(e){for(;!In(e););return e}function Nn(e,w){let C=Number.parseInt(e,w);return C<9||11===C||C>13&&C<32||C>126&&C<160||C>55295&&C<57344||C>64975&&C<65008||(65535&C)==65535||(65535&C)==65534||C>1114111?"�":String.fromCharCode(C)}var tk=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Tt(e){return e.replace(tk,po)}function po(e,w,C){if(w)return w;if(35===C.charCodeAt(0)){let e=C.charCodeAt(1),w=120===e||88===e;return Nn(C.slice(w?2:1),w?16:10)}return Dt(C)||e}var tx={}.hasOwnProperty;function go(e){let w={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(Qt),autolinkProtocol:D,autolinkEmail:D,atxHeading:a(Vt),blockQuote:a(lt),characterEscape:D,characterReference:D,codeFenced:a(qt),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:a(qt,s),codeText:a(Pr,s),codeTextData:D,data:D,codeFlowValue:D,definition:a(Ir),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:a(zr),hardBreakEscape:a(Ut),hardBreakTrailing:a(Ut),htmlFlow:a(Wt,s),htmlFlowData:D,htmlText:a(Wt,s),htmlTextData:D,image:a(Mr),label:s,link:a(Qt),listItem:a(jr),listItemValue:y,listOrdered:a(Kt,p),listUnordered:a(Kt),paragraph:a(Rr),reference:Oe,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:a(Vt),strong:a(_r),thematicBreak:a(Nr)},exit:{atxHeading:c(),atxHeadingSequence:A,autolink:c(),autolinkEmail:Pe,autolinkProtocol:Le,blockQuote:c(),characterEscapeValue:T,characterReferenceMarkerHexadecimal:Te,characterReferenceMarkerNumeric:Te,characterReferenceValue:we,codeFenced:c(F),codeFencedFence:d,codeFencedFenceInfo:k,codeFencedFenceMeta:x,codeFlowValue:T,codeIndented:c(S),codeText:c(q),codeTextData:T,data:T,definition:c(),definitionDestinationString:b,definitionLabelString:O,definitionTitleString:z,emphasis:c(),hardBreakEscape:c(W),hardBreakTrailing:c(W),htmlFlow:c(L),htmlFlowData:T,htmlText:c(P),htmlTextData:T,image:c(ye),label:ce,labelText:g,lineEnding:$,link:c(re),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:Z,resourceDestinationString:be,resourceTitleString:m,resource:fe,setextHeading:c(v),setextHeadingLineSequence:N,setextHeadingText:j,strong:c(),thematicBreak:c()}};$n(w,(e||{}).mdastExtensions||[]);let C={};return r;function r(e){let C={type:"root",children:[]},R={stack:[C],tokenStack:[],config:w,enter:f,exit:u,buffer:s,resume:h,setData:i,getData:o},_=[],U=-1;for(;++U<e.length;)("listOrdered"===e[U][1].type||"listUnordered"===e[U][1].type)&&("enter"===e[U][0]?_.push(U):U=l(e,_.pop(),U));for(U=-1;++U<e.length;){let C=w[e[U][0]];tx.call(C,e[U][1].type)&&C[e[U][1].type].call(Object.assign({sliceSerialize:e[U][2].sliceSerialize},R),e[U][1])}if(R.tokenStack.length>0){let e=R.tokenStack[R.tokenStack.length-1];(e[1]||mn).call(R,void 0,e[0])}for(C.position={start:Se(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:Se(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},U=-1;++U<w.transforms.length;)C=w.transforms[U](C)||C;return C}function l(e,w,C){let R=w-1,_=-1,U=!1,Q,K,Y,X;for(;++R<=C;){let w=e[R];if("listUnordered"===w[1].type||"listOrdered"===w[1].type||"blockQuote"===w[1].type?("enter"===w[0]?_++:_--,X=void 0):"lineEndingBlank"===w[1].type?"enter"===w[0]&&(!Q||X||_||Y||(Y=R),X=void 0):"linePrefix"===w[1].type||"listItemValue"===w[1].type||"listItemMarker"===w[1].type||"listItemPrefix"===w[1].type||"listItemPrefixWhitespace"===w[1].type||(X=void 0),!_&&"enter"===w[0]&&"listItemPrefix"===w[1].type||-1===_&&"exit"===w[0]&&("listUnordered"===w[1].type||"listOrdered"===w[1].type)){if(Q){let _=R;for(K=void 0;_--;){let w=e[_];if("lineEnding"===w[1].type||"lineEndingBlank"===w[1].type){if("exit"===w[0])continue;K&&(e[K][1].type="lineEndingBlank",U=!0),w[1].type="lineEnding",K=_}else if(!("linePrefix"===w[1].type||"blockQuotePrefix"===w[1].type||"blockQuotePrefixWhitespace"===w[1].type||"blockQuoteMarker"===w[1].type||"listItemIndent"===w[1].type))break}Y&&(!K||Y<K)&&(Q._spread=!0),Q.end=Object.assign({},K?e[K][1].start:w[1].end),e.splice(K||R,0,["exit",Q,w[2]]),R++,C++}"listItemPrefix"===w[1].type&&(Q={type:"listItem",_spread:!1,start:Object.assign({},w[1].start),end:void 0},e.splice(R,0,["enter",Q,w[2]]),R++,C++,Y=void 0,X=!0)}}return e[w][1]._spread=U,C}function i(e,w){C[e]=w}function o(e){return C[e]}function a(e,w){return M;function M(C){f.call(this,e(C),C),w&&w.call(this,C)}}function s(){this.stack.push({type:"fragment",children:[]})}function f(e,w,C){return this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([w,C]),e.position={start:Se(w.start)},e}function c(e){return E;function E(w){e&&e.call(this,w),u.call(this,w)}}function u(e,w){let C=this.stack.pop(),R=this.tokenStack.pop();if(R)R[0].type!==e.type&&(w?w.call(this,e,R[0]):(R[1]||mn).call(this,e,R[0]));else throw Error("Cannot close `"+e.type+"` ("+$e({start:e.start,end:e.end})+"): it’s not open");return C.position.end=Se(e.end),C}function h(){return yi(this.stack.pop())}function p(){C.expectingFirstListItemValue=!0}function y(e){C.expectingFirstListItemValue&&(this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),C.expectingFirstListItemValue=void 0)}function k(){let e=this.resume();this.stack[this.stack.length-1].lang=e}function x(){let e=this.resume();this.stack[this.stack.length-1].meta=e}function d(){C.flowCodeInside||(this.buffer(),C.flowCodeInside=!0)}function F(){let e=this.resume();this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),C.flowCodeInside=void 0}function S(){let e=this.resume();this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,"")}function O(e){let w=this.resume(),C=this.stack[this.stack.length-1];C.label=w,C.identifier=ae(this.sliceSerialize(e)).toLowerCase()}function z(){let e=this.resume();this.stack[this.stack.length-1].title=e}function b(){let e=this.resume();this.stack[this.stack.length-1].url=e}function A(e){let w=this.stack[this.stack.length-1];if(!w.depth){let C=this.sliceSerialize(e).length;w.depth=C}}function j(){C.setextHeadingSlurpLineEnding=!0}function N(e){this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).charCodeAt(0)?1:2}function v(){C.setextHeadingSlurpLineEnding=void 0}function D(e){let w=this.stack[this.stack.length-1],C=w.children[w.children.length-1];C&&"text"===C.type||((C=Br()).position={start:Se(e.start)},w.children.push(C)),this.stack.push(C)}function T(e){let w=this.stack.pop();w.value+=this.sliceSerialize(e),w.position.end=Se(e.end)}function $(e){let R=this.stack[this.stack.length-1];if(C.atHardBreak){R.children[R.children.length-1].position.end=Se(e.end),C.atHardBreak=void 0;return}!C.setextHeadingSlurpLineEnding&&w.canContainEols.includes(R.type)&&(D.call(this,e),T.call(this,e))}function W(){C.atHardBreak=!0}function L(){let e=this.resume();this.stack[this.stack.length-1].value=e}function P(){let e=this.resume();this.stack[this.stack.length-1].value=e}function q(){let e=this.resume();this.stack[this.stack.length-1].value=e}function re(){let e=this.stack[this.stack.length-1];if(C.inReference){let w=C.referenceType||"shortcut";e.type+="Reference",e.referenceType=w,delete e.url,delete e.title}else delete e.identifier,delete e.label;C.referenceType=void 0}function ye(){let e=this.stack[this.stack.length-1];if(C.inReference){let w=C.referenceType||"shortcut";e.type+="Reference",e.referenceType=w,delete e.url,delete e.title}else delete e.identifier,delete e.label;C.referenceType=void 0}function g(e){let w=this.sliceSerialize(e),C=this.stack[this.stack.length-2];C.label=Tt(w),C.identifier=ae(w).toLowerCase()}function ce(){let e=this.stack[this.stack.length-1],w=this.resume(),R=this.stack[this.stack.length-1];if(C.inReference=!0,"link"===R.type){let w=e.children;R.children=w}else R.alt=w}function be(){let e=this.resume();this.stack[this.stack.length-1].url=e}function m(){let e=this.resume();this.stack[this.stack.length-1].title=e}function fe(){C.inReference=void 0}function Oe(){C.referenceType="collapsed"}function Z(e){let w=this.resume(),R=this.stack[this.stack.length-1];R.label=w,R.identifier=ae(this.sliceSerialize(e)).toLowerCase(),C.referenceType="full"}function Te(e){var w;w=e.type,C.characterReferenceType=w}function we(e){let w=this.sliceSerialize(e),R=C.characterReferenceType,_;R?(_=Nn(w,"characterReferenceMarkerNumeric"===R?10:16),C.characterReferenceType=void 0):_=Dt(w);let U=this.stack.pop();U.value+=_,U.position.end=Se(e.end)}function Le(e){T.call(this,e),this.stack[this.stack.length-1].url=this.sliceSerialize(e)}function Pe(e){T.call(this,e),this.stack[this.stack.length-1].url="mailto:"+this.sliceSerialize(e)}function lt(){return{type:"blockquote",children:[]}}function qt(){return{type:"code",lang:null,meta:null,value:""}}function Pr(){return{type:"inlineCode",value:""}}function Ir(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function zr(){return{type:"emphasis",children:[]}}function Vt(){return{type:"heading",depth:void 0,children:[]}}function Ut(){return{type:"break"}}function Wt(){return{type:"html",value:""}}function Mr(){return{type:"image",title:null,url:"",alt:null}}function Qt(){return{type:"link",title:null,url:"",children:[]}}function Kt(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,spread:e._spread,children:[]}}function jr(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}function Rr(){return{type:"paragraph",children:[]}}function _r(){return{type:"strong",children:[]}}function Br(){return{type:"text",value:""}}function Nr(){return{type:"thematicBreak"}}}function Se(e){return{line:e.line,column:e.column,offset:e.offset}}function $n(e,w){let C=-1;for(;++C<w.length;){let R=w[C];Array.isArray(R)?$n(e,R):mo(e,R)}}function mo(e,w){let C;for(C in w)if(tx.call(w,C)){if("canContainEols"===C){let R=w[C];R&&e[C].push(...R)}else if("transforms"===C){let R=w[C];R&&e[C].push(...R)}else if("enter"===C||"exit"===C){let R=w[C];R&&Object.assign(e[C],R)}}}function mn(e,w){throw e?Error("Cannot close `"+e.type+"` ("+$e({start:e.start,end:e.end})+"): a different token (`"+w.type+"`, "+$e({start:w.start,end:w.end})+") is open"):Error("Cannot close document, a token (`"+w.type+"`, "+$e({start:w.start,end:w.end})+") is still open")}function yo(e){Object.assign(this,{Parser:w=>{var C,R;return"string"!=typeof(C=Object.assign({},this.data("settings"),e,{extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))&&(R=C,C=void 0),go(R)(co(uo(R).document().write(so()(w,C,!0))))}})}function bo(e,w){let C={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(w),!0)};return e.patch(w,C),e.applyData(w,C)}function ko(e,w){let C={type:"element",tagName:"br",properties:{},children:[]};return e.patch(w,C),[e.applyData(w,C),{type:"text",value:`
`}]}function xo(e,w){let C=w.value?w.value+`
`:"",R=w.lang?w.lang.match(/^[^ \t]+(?=[ \t]|$)/):null,_={};R&&(_.className=["language-"+R]);let U={type:"element",tagName:"code",properties:_,children:[{type:"text",value:C}]};return w.meta&&(U.data={meta:w.meta}),e.patch(w,U),U={type:"element",tagName:"pre",properties:{},children:[U=e.applyData(w,U)]},e.patch(w,U),U}function vo(e,w){let C={type:"element",tagName:"del",properties:{},children:e.all(w)};return e.patch(w,C),e.applyData(w,C)}function wo(e,w){let C={type:"element",tagName:"em",properties:{},children:e.all(w)};return e.patch(w,C),e.applyData(w,C)}function Me(e){let w=[],C=-1,R=0,_=0;for(;++C<e.length;){let U=e.charCodeAt(C),Q="";if(37===U&&eC(e.charCodeAt(C+1))&&eC(e.charCodeAt(C+2)))_=2;else if(U<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(U))||(Q=String.fromCharCode(U));else if(U>55295&&U<57344){let w=e.charCodeAt(C+1);U<56320&&w>56319&&w<57344?(Q=String.fromCharCode(U,w),_=1):Q="�"}else Q=String.fromCharCode(U);Q&&(w.push(e.slice(R,C),encodeURIComponent(Q)),R=C+_+1,Q=""),_&&(C+=_,_=0)}return w.join("")+e.slice(R)}function qn(e,w){let C=String(w.identifier).toUpperCase(),R=Me(C.toLowerCase()),_=e.footnoteOrder.indexOf(C),U;-1===_?(e.footnoteOrder.push(C),e.footnoteCounts[C]=1,U=e.footnoteOrder.length):(e.footnoteCounts[C]++,U=_+1);let Q=e.footnoteCounts[C],K={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fn-"+R,id:e.clobberPrefix+"fnref-"+R+(Q>1?"-"+Q:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(U)}]};e.patch(w,K);let Y={type:"element",tagName:"sup",properties:{},children:[K]};return e.patch(w,Y),e.applyData(w,Y)}function So(e,w){let C=e.footnoteById,R=1;for(;(R in C);)R++;let _=String(R);return C[_]={type:"footnoteDefinition",identifier:_,children:[{type:"paragraph",children:w.children}],position:w.position},qn(e,{type:"footnoteReference",identifier:_,position:w.position})}function Co(e,w){let C={type:"element",tagName:"h"+w.depth,properties:{},children:e.all(w)};return e.patch(w,C),e.applyData(w,C)}function Fo(e,w){if(e.dangerous){let C={type:"raw",value:w.value};return e.patch(w,C),e.applyData(w,C)}return null}function Vn(e,w){let C=w.referenceType,R="]";if("collapsed"===C?R+="[]":"full"===C&&(R+="["+(w.label||w.identifier)+"]"),"imageReference"===w.type)return{type:"text",value:"!["+w.alt+R};let _=e.all(w),U=_[0];U&&"text"===U.type?U.value="["+U.value:_.unshift({type:"text",value:"["});let Q=_[_.length-1];return Q&&"text"===Q.type?Q.value+=R:_.push({type:"text",value:R}),_}function Eo(e,w){let C=e.definition(w.identifier);if(!C)return Vn(e,w);let R={src:Me(C.url||""),alt:w.alt};null!==C.title&&void 0!==C.title&&(R.title=C.title);let _={type:"element",tagName:"img",properties:R,children:[]};return e.patch(w,_),e.applyData(w,_)}function Ao(e,w){let C={src:Me(w.url)};null!==w.alt&&void 0!==w.alt&&(C.alt=w.alt),null!==w.title&&void 0!==w.title&&(C.title=w.title);let R={type:"element",tagName:"img",properties:C,children:[]};return e.patch(w,R),e.applyData(w,R)}function Do(e,w){let C={type:"text",value:w.value.replace(/\r?\n|\r/g," ")};e.patch(w,C);let R={type:"element",tagName:"code",properties:{},children:[C]};return e.patch(w,R),e.applyData(w,R)}function Oo(e,w){let C=e.definition(w.identifier);if(!C)return Vn(e,w);let R={href:Me(C.url||"")};null!==C.title&&void 0!==C.title&&(R.title=C.title);let _={type:"element",tagName:"a",properties:R,children:e.all(w)};return e.patch(w,_),e.applyData(w,_)}function To(e,w){let C={href:Me(w.url)};null!==w.title&&void 0!==w.title&&(C.title=w.title);let R={type:"element",tagName:"a",properties:C,children:e.all(w)};return e.patch(w,R),e.applyData(w,R)}function Lo(e,w,C){let R=e.all(w),_=C?Po(C):Un(w),U={},Q=[];if("boolean"==typeof w.checked){let e=R[0],C;e&&"element"===e.type&&"p"===e.tagName?C=e:(C={type:"element",tagName:"p",properties:{},children:[]},R.unshift(C)),C.children.length>0&&C.children.unshift({type:"text",value:" "}),C.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:w.checked,disabled:!0},children:[]}),U.className=["task-list-item"]}let K=-1;for(;++K<R.length;){let e=R[K];(_||0!==K||"element"!==e.type||"p"!==e.tagName)&&Q.push({type:"text",value:`
`}),"element"!==e.type||"p"!==e.tagName||_?Q.push(e):Q.push(...e.children)}let Y=R[R.length-1];Y&&(_||"element"!==Y.type||"p"!==Y.tagName)&&Q.push({type:"text",value:`
`});let X={type:"element",tagName:"li",properties:U,children:Q};return e.patch(w,X),e.applyData(w,X)}function Po(e){let w=!1;if("list"===e.type){w=e.spread||!1;let C=e.children,R=-1;for(;!w&&++R<C.length;)w=Un(C[R])}return w}function Un(e){let w=e.spread;return null==w?e.children.length>1:w}function Io(e,w){let C={},R=e.all(w),_=-1;for("number"==typeof w.start&&1!==w.start&&(C.start=w.start);++_<R.length;){let e=R[_];if("element"===e.type&&"li"===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes("task-list-item")){C.className=["contains-task-list"];break}}let U={type:"element",tagName:w.ordered?"ol":"ul",properties:C,children:e.wrap(R,!0)};return e.patch(w,U),e.applyData(w,U)}function zo(e,w){let C={type:"element",tagName:"p",properties:{},children:e.all(w)};return e.patch(w,C),e.applyData(w,C)}function Mo(e,w){let C={type:"root",children:e.wrap(e.all(w))};return e.patch(w,C),e.applyData(w,C)}function jo(e,w){let C={type:"element",tagName:"strong",properties:{},children:e.all(w)};return e.patch(w,C),e.applyData(w,C)}var tv=Wn("start"),tw=Wn("end");function Ro(e){return{start:tv(e),end:tw(e)}}function Wn(e){return t;function t(w){let C=w&&w.position&&w.position[e]||{};return{line:C.line||null,column:C.column||null,offset:C.offset>-1?C.offset:null}}}function Ho(e){let w=String(e),C=/\r?\n|\r/g,R=C.exec(w),_=0,U=[];for(;R;)U.push(yn(w.slice(_,R.index),_>0,!0),R[0]),_=R.index+R[0].length,R=C.exec(w);return U.push(yn(w.slice(_),_>0,!1)),U.join("")}function yn(e,w,C){let R=0,_=e.length;if(w){let w=e.codePointAt(R);for(;9===w||32===w;)R++,w=e.codePointAt(R)}if(C){let w=e.codePointAt(_-1);for(;9===w||32===w;)_--,w=e.codePointAt(_-1)}return _>R?e.slice(R,_):""}var tS={blockquote:bo,break:ko,code:xo,delete:vo,emphasis:wo,footnoteReference:qn,footnote:So,heading:Co,html:Fo,imageReference:Eo,image:Ao,inlineCode:Do,linkReference:Oo,link:To,listItem:Lo,list:Io,paragraph:zo,root:Mo,strong:jo,table:function(e,w){let C=e.all(w),R=C.shift(),_=[];if(R){let C={type:"element",tagName:"thead",properties:{},children:e.wrap([R],!0)};e.patch(w.children[0],C),_.push(C)}if(C.length>0){let R={type:"element",tagName:"tbody",properties:{},children:e.wrap(C,!0)},U=tv(w.children[1]),Q=tw(w.children[w.children.length-1]);U.line&&Q.line&&(R.position={start:U,end:Q}),_.push(R)}let U={type:"element",tagName:"table",properties:{},children:e.wrap(_,!0)};return e.patch(w,U),e.applyData(w,U)},tableCell:function(e,w){let C={type:"element",tagName:"td",properties:{},children:e.all(w)};return e.patch(w,C),e.applyData(w,C)},tableRow:function(e,w,C){let R=C?C.children:void 0,_=(R?R.indexOf(w):1)===0?"th":"td",U=C&&"table"===C.type?C.align:void 0,Q=U?U.length:w.children.length,K=-1,Y=[];for(;++K<Q;){let C=w.children[K],R={},Q=U?U[K]:void 0;Q&&(R.align=Q);let X={type:"element",tagName:_,properties:R,children:[]};C&&(X.children=e.all(C),e.patch(C,X),X=e.applyData(w,X)),Y.push(X)}let X={type:"element",tagName:"tr",properties:{},children:e.wrap(Y,!0)};return e.patch(w,X),e.applyData(w,X)},text:function(e,w){let C={type:"text",value:Ho(String(w.value))};return e.patch(w,C),e.applyData(w,C)},thematicBreak:function(e,w){let C={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(w,C),e.applyData(w,C)},toml:Xe,yaml:Xe,definition:Xe,footnoteDefinition:Xe};function Xe(){return null}var tt=function(e){if(null==e)return Ko;if("string"==typeof e)return Qo(e);if("object"==typeof e)return Array.isArray(e)?Uo(e):Wo(e);if("function"==typeof e)return nt(e);throw Error("Expected function, string, or object as test")};function Uo(e){let w=[],C=-1;for(;++C<e.length;)w[C]=tt(e[C]);return nt(r);function r(...e){let C=-1;for(;++C<w.length;)if(w[C].call(this,...e))return!0;return!1}}function Wo(e){return nt(t);function t(w){let C;for(C in e)if(w[C]!==e[C])return!1;return!0}}function Qo(e){return nt(t);function t(w){return w&&w.type===e}}function nt(e){return t;function t(w,...C){return!!(w&&"object"==typeof w&&"type"in w&&e.call(this,w,...C))}}function Ko(){return!0}var It=function(e,w,C,R){"function"==typeof w&&"function"!=typeof C&&(R=C,C=w,w=null);let _=tt(w),U=R?-1:1;function o(e,Q,K){let Y=e&&"object"==typeof e?e:{};if("string"==typeof Y.type){let w="string"==typeof Y.tagName?Y.tagName:"string"==typeof Y.name?Y.name:void 0;Object.defineProperty(u,"name",{value:"node ("+e.type+(w?"<"+w+">":"")+")"})}return u;function u(){let Y=[],X,G,J;if((!w||_(e,Q,K[K.length-1]||null))&&!1===(Y=Jo(C(e,K)))[0])return Y;if(e.children&&"skip"!==Y[0])for(G=(R?e.children.length:-1)+U,J=K.concat(e);G>-1&&G<e.children.length;){if(!1===(X=o(e.children[G],G,J)())[0])return X;G="number"==typeof X[1]?X[1]:G+U}return Y}}o(e,void 0,[])()};function Jo(e){return Array.isArray(e)?e:"number"==typeof e?[!0,e]:[e]}var zt=function(e,w,C,R){"function"==typeof w&&"function"!=typeof C&&(R=C,C=w,w=null),It(e,w,l,R);function l(e,w){let R=w[w.length-1];return C(e,R?R.children.indexOf(e):null,R)}};function Zo(e){return!e||!e.position||!e.position.start||!e.position.start.line||!e.position.start.column||!e.position.end||!e.position.end.line||!e.position.end.column}var tC={}.hasOwnProperty;function Go(e){let w=Object.create(null);if(!e||!e.type)throw Error("mdast-util-definitions expected node");return zt(e,"definition",e=>{let C=xn(e.identifier);C&&!tC.call(w,C)&&(w[C]=e)}),n;function n(e){let C=xn(e);return C&&tC.call(w,C)?w[C]:null}}function xn(e){return String(e||"").toUpperCase()}var tF={}.hasOwnProperty;function ea(e,w){let C=w||{},_=C.allowDangerousHtml||!1,U={};return o.dangerous=_,o.clobberPrefix=void 0===C.clobberPrefix||null===C.clobberPrefix?"user-content-":C.clobberPrefix,o.footnoteLabel=C.footnoteLabel||"Footnotes",o.footnoteLabelTagName=C.footnoteLabelTagName||"h2",o.footnoteLabelProperties=C.footnoteLabelProperties||{className:["sr-only"]},o.footnoteBackLabel=C.footnoteBackLabel||"Back to content",o.unknownHandler=C.unknownHandler,o.passThrough=C.passThrough,o.handlers=(0,R.a)((0,R.a)({},tS),C.handlers),o.definition=Go(e),o.footnoteById=U,o.footnoteOrder=[],o.footnoteCounts={},o.patch=ta,o.applyData=na,o.one=a,o.all=s,o.wrap=ia,o.augment=i,zt(e,"footnoteDefinition",e=>{let w=String(e.identifier).toUpperCase();tF.call(U,w)||(U[w]=e)}),o;function i(e,w){if(e&&"data"in e&&e.data){let C=e.data;C.hName&&("element"!==w.type&&(w={type:"element",tagName:"",properties:{},children:[]}),w.tagName=C.hName),"element"===w.type&&C.hProperties&&(w.properties=(0,R.a)((0,R.a)({},w.properties),C.hProperties)),"children"in w&&w.children&&C.hChildren&&(w.children=C.hChildren)}if(e){let C="type"in e?e:{position:e};Zo(C)||(w.position={start:tv(C),end:tw(C)})}return w}function o(e,w,C,R){return Array.isArray(C)&&(R=C,C={}),i(e,{type:"element",tagName:w,properties:C||{},children:R||[]})}function a(e,w){return Qn(o,e,w)}function s(e){return Mt(o,e)}}function ta(e,w){e.position&&(w.position=Ro(e))}function na(e,w){let C=w;if(e&&e.data){let w=e.data.hName,_=e.data.hChildren,U=e.data.hProperties;"string"==typeof w&&("element"===C.type?C.tagName=w:C={type:"element",tagName:w,properties:{},children:[]}),"element"===C.type&&U&&(C.properties=(0,R.a)((0,R.a)({},C.properties),U)),"children"in C&&C.children&&null!=_&&(C.children=_)}return C}function Qn(e,w,C){let _=w&&w.type;if(!_)throw Error("Expected node, got `"+w+"`");return tF.call(e.handlers,_)?e.handlers[_](e,w,C):e.passThrough&&e.passThrough.includes(_)?"children"in w?(0,R.b)((0,R.a)({},w),{children:Mt(e,w)}):w:e.unknownHandler?e.unknownHandler(e,w,C):ra(e,w)}function Mt(e,w){let C=[];if("children"in w){let R=w.children,_=-1;for(;++_<R.length;){let U=Qn(e,R[_],w);if(U){if(_&&"break"===R[_-1].type&&(Array.isArray(U)||"text"!==U.type||(U.value=U.value.replace(/^\s+/,"")),!Array.isArray(U)&&"element"===U.type)){let e=U.children[0];e&&"text"===e.type&&(e.value=e.value.replace(/^\s+/,""))}Array.isArray(U)?C.push(...U):C.push(U)}}}return C}function ra(e,w){let C=w.data||{},R="value"in w&&!(tF.call(C,"hProperties")||tF.call(C,"hChildren"))?{type:"text",value:w.value}:{type:"element",tagName:"div",properties:{},children:Mt(e,w)};return e.patch(w,R),e.applyData(w,R)}function ia(e,w){let C=[],R=-1;for(w&&C.push({type:"text",value:`
`});++R<e.length;)R&&C.push({type:"text",value:`
`}),C.push(e[R]);return w&&e.length>0&&C.push({type:"text",value:`
`}),C}function la(e){let w=[],C=-1;for(;++C<e.footnoteOrder.length;){let R=e.footnoteById[e.footnoteOrder[C]];if(!R)continue;let _=e.all(R),U=String(R.identifier).toUpperCase(),Q=Me(U.toLowerCase()),K=0,Y=[];for(;++K<=e.footnoteCounts[U];){let w={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fnref-"+Q+(K>1?"-"+K:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:e.footnoteBackLabel},children:[{type:"text",value:"↩"}]};K>1&&w.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(K)}]}),Y.length>0&&Y.push({type:"text",value:" "}),Y.push(w)}let X=_[_.length-1];if(X&&"element"===X.type&&"p"===X.tagName){let e=X.children[X.children.length-1];e&&"text"===e.type?e.value+=" ":X.children.push({type:"text",value:" "}),X.children.push(...Y)}else _.push(...Y);let G={type:"element",tagName:"li",properties:{id:e.clobberPrefix+"fn-"+Q},children:e.wrap(_,!0)};e.patch(R,G),w.push(G)}if(0!==w.length)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:e.footnoteLabelTagName,properties:(0,R.b)((0,R.a)({},JSON.parse(JSON.stringify(e.footnoteLabelProperties))),{id:"footnote-label"}),children:[{type:"text",value:e.footnoteLabel}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(w,!0)},{type:"text",value:`
`}]}}function Kn(e,w){let C=ea(e,w),R=C.one(e,null),_=la(C);return _&&R.children.push({type:"text",value:`
`},_),Array.isArray(R)?{type:"root",children:R}:R}var aa=function(e,w){return e&&"run"in e?ua(e,w):sa(e||w)};function ua(e,w){return(C,R,_)=>{e.run(Kn(C,w),R,e=>{_(e)})}}function sa(e){return w=>Kn(w,e)}var tA=(0,R.f)(Y(),1),tE=class{constructor(e,w,C){this.property=e,this.normal=w,C&&(this.space=C)}};function Yn(e,w){let C={},R={},_=-1;for(;++_<e.length;)Object.assign(C,e[_].property),Object.assign(R,e[_].normal);return new tE(C,R,w)}function Ft(e){return e.toLowerCase()}tE.prototype.property={},tE.prototype.normal={},tE.prototype.space=null;var tD=class{constructor(e,w){this.property=e,this.attribute=w}};tD.prototype.space=null,tD.prototype.boolean=!1,tD.prototype.booleanish=!1,tD.prototype.overloadedBoolean=!1,tD.prototype.number=!1,tD.prototype.commaSeparated=!1,tD.prototype.spaceSeparated=!1,tD.prototype.commaOrSpaceSeparated=!1,tD.prototype.mustUseProperty=!1,tD.prototype.defined=!1;var tT={};(0,R.e)(tT,{boolean:()=>tO,booleanish:()=>tz,commaOrSpaceSeparated:()=>tR,commaSeparated:()=>tj,number:()=>tL,overloadedBoolean:()=>tP,spaceSeparated:()=>tM});var tI=0,tO=Ae(),tz=Ae(),tP=Ae(),tL=Ae(),tM=Ae(),tj=Ae(),tR=Ae();function Ae(){return 2**++tI}var tB=Object.keys(tT),tN=class extends tD{constructor(e,w,C,R){var _,U;let Q=-1;if(super(e,w),R&&(this.space=R),"number"==typeof C)for(;++Q<tB.length;){let e=tB[Q];_=tB[Q],(U=(C&tT[e])===tT[e])&&(this[_]=U)}}};tN.prototype.defined=!0;var tH={}.hasOwnProperty;function je(e){let w={},C={},R;for(R in e.properties)if(tH.call(e.properties,R)){let _=e.properties[R],U=new tN(R,e.transform(e.attributes||{},R),_,e.space);e.mustUseProperty&&e.mustUseProperty.includes(R)&&(U.mustUseProperty=!0),w[R]=U,C[Ft(R)]=R,C[Ft(U.attribute)]=R}return new tE(w,C,e.space)}var t_=je({space:"xlink",transform:(e,w)=>"xlink:"+w.slice(5).toLowerCase(),properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),tV=je({space:"xml",transform:(e,w)=>"xml:"+w.slice(3).toLowerCase(),properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Gn(e,w){return w in e?e[w]:w}function er(e,w){return Gn(e,w.toLowerCase())}var tU=je({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:er,properties:{xmlns:null,xmlnsXLink:null}}),tq=je({transform:(e,w)=>"role"===w?w:"aria-"+w.slice(4).toLowerCase(),properties:{ariaActiveDescendant:null,ariaAtomic:tz,ariaAutoComplete:null,ariaBusy:tz,ariaChecked:tz,ariaColCount:tL,ariaColIndex:tL,ariaColSpan:tL,ariaControls:tM,ariaCurrent:null,ariaDescribedBy:tM,ariaDetails:null,ariaDisabled:tz,ariaDropEffect:tM,ariaErrorMessage:null,ariaExpanded:tz,ariaFlowTo:tM,ariaGrabbed:tz,ariaHasPopup:null,ariaHidden:tz,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:tM,ariaLevel:tL,ariaLive:null,ariaModal:tz,ariaMultiLine:tz,ariaMultiSelectable:tz,ariaOrientation:null,ariaOwns:tM,ariaPlaceholder:null,ariaPosInSet:tL,ariaPressed:tz,ariaReadOnly:tz,ariaRelevant:null,ariaRequired:tz,ariaRoleDescription:tM,ariaRowCount:tL,ariaRowIndex:tL,ariaRowSpan:tL,ariaSelected:tz,ariaSetSize:tL,ariaSort:null,ariaValueMax:tL,ariaValueMin:tL,ariaValueNow:tL,ariaValueText:null,role:null}}),t$=je({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:er,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:tj,acceptCharset:tM,accessKey:tM,action:null,allow:null,allowFullScreen:tO,allowPaymentRequest:tO,allowUserMedia:tO,alt:null,as:null,async:tO,autoCapitalize:null,autoComplete:tM,autoFocus:tO,autoPlay:tO,capture:tO,charSet:null,checked:tO,cite:null,className:tM,cols:tL,colSpan:null,content:null,contentEditable:tz,controls:tO,controlsList:tM,coords:tL|tj,crossOrigin:null,data:null,dateTime:null,decoding:null,default:tO,defer:tO,dir:null,dirName:null,disabled:tO,download:tP,draggable:tz,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:tO,formTarget:null,headers:tM,height:tL,hidden:tO,high:tL,href:null,hrefLang:null,htmlFor:tM,httpEquiv:tM,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:tO,itemId:null,itemProp:tM,itemRef:tM,itemScope:tO,itemType:tM,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:tO,low:tL,manifest:null,max:null,maxLength:tL,media:null,method:null,min:null,minLength:tL,multiple:tO,muted:tO,name:null,nonce:null,noModule:tO,noValidate:tO,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:tO,optimum:tL,pattern:null,ping:tM,placeholder:null,playsInline:tO,poster:null,preload:null,readOnly:tO,referrerPolicy:null,rel:tM,required:tO,reversed:tO,rows:tL,rowSpan:tL,sandbox:tM,scope:null,scoped:tO,seamless:tO,selected:tO,shape:null,size:tL,sizes:null,slot:null,span:tL,spellCheck:tz,src:null,srcDoc:null,srcLang:null,srcSet:null,start:tL,step:null,style:null,tabIndex:tL,target:null,title:null,translate:null,type:null,typeMustMatch:tO,useMap:null,value:tz,width:tL,wrap:null,align:null,aLink:null,archive:tM,axis:null,background:null,bgColor:null,border:tL,borderColor:null,bottomMargin:tL,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:tO,declare:tO,event:null,face:null,frame:null,frameBorder:null,hSpace:tL,leftMargin:tL,link:null,longDesc:null,lowSrc:null,marginHeight:tL,marginWidth:tL,noResize:tO,noHref:tO,noShade:tO,noWrap:tO,object:null,profile:null,prompt:null,rev:null,rightMargin:tL,rules:null,scheme:null,scrolling:tz,standby:null,summary:null,text:null,topMargin:tL,valueType:null,version:null,vAlign:null,vLink:null,vSpace:tL,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:tO,disableRemotePlayback:tO,prefix:null,property:null,results:tL,security:null,unselectable:null}}),tW=je({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Gn,properties:{about:tR,accentHeight:tL,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:tL,amplitude:tL,arabicForm:null,ascent:tL,attributeName:null,attributeType:null,azimuth:tL,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:tL,by:null,calcMode:null,capHeight:tL,className:tM,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:tL,diffuseConstant:tL,direction:null,display:null,dur:null,divisor:tL,dominantBaseline:null,download:tO,dx:null,dy:null,edgeMode:null,editable:null,elevation:tL,enableBackground:null,end:null,event:null,exponent:tL,externalResourcesRequired:null,fill:null,fillOpacity:tL,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:tj,g2:tj,glyphName:tj,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:tL,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:tL,horizOriginX:tL,horizOriginY:tL,id:null,ideographic:tL,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:tL,k:tL,k1:tL,k2:tL,k3:tL,k4:tL,kernelMatrix:tR,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:tL,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:tL,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:tL,overlineThickness:tL,paintOrder:null,panose1:null,path:null,pathLength:tL,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:tM,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:tL,pointsAtY:tL,pointsAtZ:tL,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:tR,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:tR,rev:tR,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:tR,requiredFeatures:tR,requiredFonts:tR,requiredFormats:tR,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:tL,specularExponent:tL,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:tL,strikethroughThickness:tL,string:null,stroke:null,strokeDashArray:tR,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:tL,strokeOpacity:tL,strokeWidth:null,style:null,surfaceScale:tL,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:tR,tabIndex:tL,tableValues:null,target:null,targetX:tL,targetY:tL,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:tR,to:null,transform:null,u1:null,u2:null,underlinePosition:tL,underlineThickness:tL,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:tL,values:null,vAlphabetic:tL,vMathematical:tL,vectorEffect:null,vHanging:tL,vIdeographic:tL,version:null,vertAdvY:tL,vertOriginX:tL,vertOriginY:tL,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:tL,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),tQ=/^data[-\w.:]+$/i,tK=/-[a-z]/g,tY=/[A-Z]/g;function ma(e,w){let C=Ft(w),R=w,_=tD;if(C in e.normal)return e.property[e.normal[C]];if(C.length>4&&"data"===C.slice(0,4)&&tQ.test(w)){if("-"===w.charAt(4)){let e=w.slice(5).replace(tK,ba);R="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=w.slice(4);if(!tK.test(e)){let C=e.replace(tY,ya);"-"!==C.charAt(0)&&(C="-"+C),w="data"+C}}_=tN}return new _(R,w)}function ya(e){return"-"+e.toLowerCase()}function ba(e){return e.charAt(1).toUpperCase()}var tZ={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},tX=Yn([tV,t_,tU,tq,t$],"html"),tG=Yn([tV,t_,tU,tq,tW],"svg");function va(e){if(e.allowedElements&&e.disallowedElements)throw TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return w=>{zt(w,"element",(w,C,R)=>{let _;if(e.allowedElements?_=!e.allowedElements.includes(w.tagName):e.disallowedElements&&(_=e.disallowedElements.includes(w.tagName)),!_&&e.allowElement&&"number"==typeof C&&(_=!e.allowElement(w,C,R)),_&&"number"==typeof C)return e.unwrapDisallowed&&w.children?R.children.splice(C,1,...w.children):R.children.splice(C,1),C})}}var tJ=(0,R.f)((0,R.j)(),1),t1=(0,R.f)(G(),1);function Sa(e){let w=e&&"object"==typeof e&&"text"===e.type?e.value||"":e;return"string"==typeof w&&""===w.replace(/[ \t\n\f\r]/g,"")}function Ca(e){return e.join(" ").trim()}function Fa(e,w){let C=w||{};return(""===e[e.length-1]?[...e,""]:e).join((C.padRight?" ":"")+","+(!1===C.padLeft?"":" ")).trim()}var t0=(0,R.f)(ee(),1).default,t2={}.hasOwnProperty,t5=new Set(["table","thead","tbody","tfoot","tr"]);function rr(e,w){let C=[],R=-1,_;for(;++R<w.children.length;)"element"===(_=w.children[R]).type?C.push(Oa(e,_,R,w)):"text"===_.type?"element"===w.type&&t5.has(w.tagName)&&Sa(_)||C.push(_.value):"raw"!==_.type||e.options.skipHtml||C.push(_.value);return C}function Oa(e,w,C,R){let _=e.options,U=void 0===_.transformLinkUri?Xr:_.transformLinkUri,Q=e.schema,K=w.tagName,Y={},X=Q,G;if("html"===Q.space&&"svg"===K&&(X=tG,e.schema=X),w.properties)for(G in w.properties)t2.call(w.properties,G)&&La(Y,G,w.properties[G],e);("ol"===K||"ul"===K)&&e.listDepth++;let J=rr(e,w);("ol"===K||"ul"===K)&&e.listDepth--,e.schema=Q;let ee=w.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},et=_.components&&t2.call(_.components,K)?_.components[K]:K,eo="string"==typeof et||et===tJ.default.Fragment;if(!t1.default.isValidElementType(et))throw TypeError(`Component for name \`${K}\` not defined or is not renderable`);if(Y.key=C,"a"===K&&_.linkTarget&&(Y.target="function"==typeof _.linkTarget?_.linkTarget(String(Y.href||""),w.children,"string"==typeof Y.title?Y.title:null):_.linkTarget),"a"===K&&U&&(Y.href=U(String(Y.href||""),w.children,"string"==typeof Y.title?Y.title:null)),eo||"code"!==K||"element"!==R.type||"pre"===R.tagName||(Y.inline=!0),eo||"h1"!==K&&"h2"!==K&&"h3"!==K&&"h4"!==K&&"h5"!==K&&"h6"!==K||(Y.level=Number.parseInt(K.charAt(1),10)),"img"===K&&_.transformImageUri&&(Y.src=_.transformImageUri(String(Y.src||""),String(Y.alt||""),"string"==typeof Y.title?Y.title:null)),!eo&&"li"===K&&"element"===R.type){let e=Ta(w);Y.checked=e&&e.properties?!!e.properties.checked:null,Y.index=kt(R,w),Y.ordered="ol"===R.tagName}return eo||"ol"!==K&&"ul"!==K||(Y.ordered="ol"===K,Y.depth=e.listDepth),("td"===K||"th"===K)&&(Y.align&&(Y.style||(Y.style={}),Y.style.textAlign=Y.align,delete Y.align),eo||(Y.isHeader="th"===K)),eo||"tr"!==K||"element"!==R.type||(Y.isHeader="thead"===R.tagName),_.sourcePos&&(Y["data-sourcepos"]=za(ee)),!eo&&_.rawSourcePos&&(Y.sourcePosition=w.position),!eo&&_.includeElementIndex&&(Y.index=kt(R,w),Y.siblingCount=kt(R)),eo||(Y.node=w),J.length>0?tJ.default.createElement(et,Y,J):tJ.default.createElement(et,Y)}function Ta(e){let w=-1;for(;++w<e.children.length;){let C=e.children[w];if("element"===C.type&&"input"===C.tagName)return C}return null}function kt(e,w){let C=-1,R=0;for(;++C<e.children.length&&e.children[C]!==w;)"element"===e.children[C].type&&R++;return R}function La(e,w,C,R){let _=ma(R.schema,w),U=C;null==U||U!=U||(Array.isArray(U)&&(U=_.commaSeparated?Fa(U):Ca(U)),"style"===_.property&&"string"==typeof U&&(U=Pa(U)),_.space&&_.property?e[t2.call(tZ,_.property)?tZ[_.property]:_.property]=U:_.attribute&&(e[_.attribute]=U))}function Pa(e){let w={};try{t0(e,n)}catch(e){}return w;function n(e,C){w[("-ms-"===e.slice(0,4)?`ms-${e.slice(4)}`:e).replace(/-([a-z])/g,Ia)]=C}}function Ia(e,w){return w.toUpperCase()}function za(e){return[e.start.line,":",e.start.column,"-",e.end.line,":",e.end.column].map(String).join("")}var t4={}.hasOwnProperty,t3={plugins:{to:"remarkPlugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function ir(e){for(let w in t3)if(t4.call(t3,w)&&t4.call(e,w)){let e=t3[w];console.warn(`[react-markdown] Warning: please ${e.to?`use \`${e.to}\` instead of`:"remove"} \`${w}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${e.id}> for more info)`),delete t3[w]}let w=ek().use(yo).use(e.remarkPlugins||[]).use(aa,(0,R.b)((0,R.a)({},e.remarkRehypeOptions),{allowDangerousHtml:!0})).use(e.rehypePlugins||[]).use(va,e),C=new em;"string"==typeof e.children?C.value=e.children:void 0!==e.children&&null!==e.children&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);let _=w.runSync(w.parse(C),C);if("root"!==_.type)throw TypeError("Expected a `root` node");let U=ec.default.createElement(ec.default.Fragment,{},rr({options:e,schema:tX,listDepth:0},_));return e.className&&(U=ec.default.createElement("div",{className:e.className},U)),U}ir.propTypes={children:tA.default.string,className:tA.default.string,allowElement:tA.default.func,allowedElements:tA.default.arrayOf(tA.default.string),disallowedElements:tA.default.arrayOf(tA.default.string),unwrapDisallowed:tA.default.bool,remarkPlugins:tA.default.arrayOf(tA.default.oneOfType([tA.default.object,tA.default.func,tA.default.arrayOf(tA.default.oneOfType([tA.default.bool,tA.default.string,tA.default.object,tA.default.func,tA.default.arrayOf(tA.default.any)]))])),rehypePlugins:tA.default.arrayOf(tA.default.oneOfType([tA.default.object,tA.default.func,tA.default.arrayOf(tA.default.oneOfType([tA.default.bool,tA.default.string,tA.default.object,tA.default.func,tA.default.arrayOf(tA.default.any)]))])),sourcePos:tA.default.bool,rawSourcePos:tA.default.bool,skipHtml:tA.default.bool,includeElementIndex:tA.default.bool,transformLinkUri:tA.default.oneOfType([tA.default.func,tA.default.bool]),linkTarget:tA.default.oneOfType([tA.default.func,tA.default.string]),transformImageUri:tA.default.func,components:tA.default.object};for(var t6=`
  color-scheme: light;
  --color-prettylights-syntax-comment: #6e7781;
  --color-prettylights-syntax-constant: #0550ae;
  --color-prettylights-syntax-entity: #8250df;
  --color-prettylights-syntax-storage-modifier-import: #24292f;
  --color-prettylights-syntax-entity-tag: #116329;
  --color-prettylights-syntax-keyword: #cf222e;
  --color-prettylights-syntax-string: #0a3069;
  --color-prettylights-syntax-variable: #953800;
  --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
  --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
  --color-prettylights-syntax-invalid-illegal-bg: #82071e;
  --color-prettylights-syntax-carriage-return-text: #f6f8fa;
  --color-prettylights-syntax-carriage-return-bg: #cf222e;
  --color-prettylights-syntax-string-regexp: #116329;
  --color-prettylights-syntax-markup-list: #3b2300;
  --color-prettylights-syntax-markup-heading: #0550ae;
  --color-prettylights-syntax-markup-italic: #24292f;
  --color-prettylights-syntax-markup-bold: #24292f;
  --color-prettylights-syntax-markup-deleted-text: #82071e;
  --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
  --color-prettylights-syntax-markup-inserted-text: #116329;
  --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
  --color-prettylights-syntax-markup-changed-text: #953800;
  --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
  --color-prettylights-syntax-markup-ignored-text: #eaeef2;
  --color-prettylights-syntax-markup-ignored-bg: #0550ae;
  --color-prettylights-syntax-meta-diff-range: #8250df;
  --color-prettylights-syntax-brackethighlighter-angle: #57606a;
  --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
  --color-prettylights-syntax-constant-other-reference-link: #0a3069;
  --color-fg-default: #24292f;
  --color-fg-muted: #57606a;
  --color-fg-subtle: #6e7781;
  --color-canvas-default: #ffffff;
  --color-canvas-subtle: #f6f8fa;
  --color-border-default: #d0d7de;
  --color-border-muted: hsla(210, 18%, 87%, 1);
  --color-neutral-muted: rgba(175, 184, 193, 0.2);
  --color-accent-fg: #0969da;
  --color-accent-emphasis: #0969da;
  --color-attention-subtle: #fff8c5;
  --color-danger-fg: #cf222e;
`,t9=(0,et.default)(ir)`
  ${t6}
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: var(--color-fg-default);
  background-color: var(--color-canvas-default);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;

  .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
  }
  h1:hover .anchor .octicon-link:before,
  h2:hover .anchor .octicon-link:before,
  h3:hover .anchor .octicon-link:before,
  h4:hover .anchor .octicon-link:before,
  h5:hover .anchor .octicon-link:before,
  h6:hover .anchor .octicon-link:before {
    width: 16px;
    height: 16px;
    content: ' ';
    display: inline-block;
    background-color: currentColor;
    -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
    mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  }

  details,
  figcaption,
  figure {
    display: block;
  }

  summary {
    display: list-item;
  }

  [hidden] {
    display: none !important;
  }

  a {
    background-color: transparent;
    color: var(--color-accent-fg);
    text-decoration: none;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: var(--base-text-weight-semibold, 600);
  }

  dfn {
    font-style: italic;
  }

  h1 {
    margin: 0.67em 0;
    font-weight: var(--base-text-weight-semibold, 600);
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid var(--color-border-muted);
  }

  mark {
    background-color: var(--color-attention-subtle);
    color: var(--color-fg-default);
  }

  small {
    font-size: 90%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
    max-width: 100%;
    box-sizing: content-box;
    background-color: var(--color-canvas-default);
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    border-bottom: 1px solid var(--color-border-muted);
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: var(--color-border-default);
    border: 0;
  }

  input {
    font: inherit;
    margin: 0;
    overflow: visible;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  ::placeholder {
    color: var(--color-fg-subtle);
    opacity: 1;
  }

  hr::before {
    display: table;
    content: '';
  }

  hr::after {
    display: table;
    clear: both;
    content: '';
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  td,
  th {
    padding: 0;
  }

  details summary {
    cursor: pointer;
  }

  details:not([open]) > *:not(summary) {
    display: none !important;
  }

  a:focus,
  [role='button']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none;
  }

  a:focus:not(:focus-visible),
  [role='button']:focus:not(:focus-visible),
  input[type='radio']:focus:not(:focus-visible),
  input[type='checkbox']:focus:not(:focus-visible) {
    outline: solid 1px transparent;
  }

  a:focus-visible,
  [role='button']:focus-visible,
  input[type='radio']:focus-visible,
  input[type='checkbox']:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none;
  }

  a:not([class]):focus,
  a:not([class]):focus-visible,
  input[type='radio']:focus,
  input[type='radio']:focus-visible,
  input[type='checkbox']:focus,
  input[type='checkbox']:focus-visible {
    outline-offset: 0;
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    line-height: 10px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: var(--color-canvas-subtle);
    border: solid 1px var(--color-neutral-muted);
    border-bottom-color: var(--color-neutral-muted);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 var(--color-neutral-muted);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: var(--base-text-weight-semibold, 600);
    line-height: 1.25;
  }

  h2 {
    font-weight: var(--base-text-weight-semibold, 600);
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid var(--color-border-muted);
  }

  h3 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 1.25em;
  }

  h4 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 1em;
  }

  h5 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 0.875em;
  }

  h6 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 0.85em;
    color: var(--color-fg-muted);
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  blockquote {
    margin: 0;
    padding: 0 1em;
    color: var(--color-fg-muted);
    border-left: 0.25em solid var(--color-border-default);
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }

  dd {
    margin-left: 0;
  }

  tt,
  code,
  samp {
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 12px;
  }

  pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 12px;
    word-wrap: normal;
  }

  .octicon {
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    fill: currentColor;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  .markdown-body::before {
    display: table;
    content: '';
  }

  .markdown-body::after {
    display: table;
    clear: both;
    content: '';
  }

  .markdown-body > *:first-child {
    margin-top: 0 !important;
  }

  .markdown-body > *:last-child {
    margin-bottom: 0 !important;
  }

  a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .absent {
    color: var(--color-danger-fg);
  }

  .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
  }

  .anchor:focus {
    outline: none;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: 16px;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  h1 .octicon-link,
  h2 .octicon-link,
  h3 .octicon-link,
  h4 .octicon-link,
  h5 .octicon-link,
  h6 .octicon-link {
    color: var(--color-fg-default);
    vertical-align: middle;
    visibility: hidden;
  }

  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    text-decoration: none;
  }

  h1:hover .anchor .octicon-link,
  h2:hover .anchor .octicon-link,
  h3:hover .anchor .octicon-link,
  h4:hover .anchor .octicon-link,
  h5:hover .anchor .octicon-link,
  h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  h1 tt,
  h1 code,
  h2 tt,
  h2 code,
  h3 tt,
  h3 code,
  h4 tt,
  h4 code,
  h5 tt,
  h5 code,
  h6 tt,
  h6 code {
    padding: 0 0.2em;
    font-size: inherit;
  }

  summary h1,
  summary h2,
  summary h3,
  summary h4,
  summary h5,
  summary h6 {
    display: inline-block;
  }

  summary h1 .anchor,
  summary h2 .anchor,
  summary h3 .anchor,
  summary h4 .anchor,
  summary h5 .anchor,
  summary h6 .anchor {
    margin-left: -40px;
  }

  summary h1,
  summary h2 {
    padding-bottom: 0;
    border-bottom: 0;
  }

  ul.no-list,
  ol.no-list {
    padding: 0;
    list-style-type: none;
  }

  ol[type='a'] {
    list-style-type: lower-alpha;
  }

  ol[type='A'] {
    list-style-type: upper-alpha;
  }

  ol[type='i'] {
    list-style-type: lower-roman;
  }

  ol[type='I'] {
    list-style-type: upper-roman;
  }

  ol[type='1'] {
    list-style-type: decimal;
  }

  div > ol:not([type]) {
    list-style-type: decimal;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  dl {
    padding: 0;
  }

  dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: var(--base-text-weight-semibold, 600);
  }

  dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  table th {
    font-weight: var(--base-text-weight-semibold, 600);
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid var(--color-border-default);
  }

  table tr {
    background-color: var(--color-canvas-default);
    border-top: 1px solid var(--color-border-muted);
  }

  table tr:nth-child(2n) {
    background-color: var(--color-canvas-subtle);
  }

  table img {
    background-color: transparent;
  }

  img[align='right'] {
    padding-left: 20px;
  }

  img[align='left'] {
    padding-right: 20px;
  }

  .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent;
  }

  span.frame {
    display: block;
    overflow: hidden;
  }

  span.frame > span {
    display: block;
    float: left;
    width: auto;
    padding: 7px;
    margin: 13px 0 0;
    overflow: hidden;
    border: 1px solid var(--color-border-default);
  }

  span.frame span img {
    display: block;
    float: left;
  }

  span.frame span span {
    display: block;
    padding: 5px 0 0;
    clear: both;
    color: var(--color-fg-default);
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    margin: 13px 0 0;
    overflow: hidden;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    float: left;
    margin-right: 13px;
    overflow: hidden;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    float: right;
    margin-left: 13px;
    overflow: hidden;
  }

  span.float-right > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: right;
  }

  code,
  tt {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: var(--color-neutral-muted);
    border-radius: 6px;
  }

  code br,
  tt br {
    display: none;
  }

  del code {
    text-decoration: inherit;
  }

  samp {
    font-size: 85%;
  }

  pre code {
    font-size: 100%;
  }

  pre > code {
    padding: 0;
    margin: 0;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .highlight {
    margin-bottom: 16px;
  }

  .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .highlight pre,
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: var(--color-canvas-subtle);
    border-radius: 6px;
  }

  pre code,
  pre tt {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .csv-data td,
  .csv-data th {
    padding: 5px;
    overflow: hidden;
    font-size: 12px;
    line-height: 1;
    text-align: left;
    white-space: nowrap;
  }

  .csv-data .blob-num {
    padding: 10px 8px 9px;
    text-align: right;
    background: var(--color-canvas-default);
    border: 0;
  }

  .csv-data tr {
    border-top: 0;
  }

  .csv-data th {
    font-weight: var(--base-text-weight-semibold, 600);
    background: var(--color-canvas-subtle);
    border-top: 0;
  }

  [data-footnote-ref]::before {
    content: '[';
  }

  [data-footnote-ref]::after {
    content: ']';
  }

  .footnotes {
    font-size: 12px;
    color: var(--color-fg-muted);
    border-top: 1px solid var(--color-border-default);
  }

  .footnotes ol {
    padding-left: 16px;
  }

  .footnotes ol ul {
    display: inline-block;
    padding-left: 16px;
    margin-top: 16px;
  }

  .footnotes li {
    position: relative;
  }

  .footnotes li:target::before {
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -24px;
    pointer-events: none;
    content: '';
    border: 2px solid var(--color-accent-emphasis);
    border-radius: 6px;
  }

  .footnotes li:target {
    color: var(--color-fg-default);
  }

  .footnotes .data-footnote-backref g-emoji {
    font-family: monospace;
  }

  .pl-c {
    color: var(--color-prettylights-syntax-comment);
  }

  .pl-c1,
  .pl-s .pl-v {
    color: var(--color-prettylights-syntax-constant);
  }

  .pl-e,
  .pl-en {
    color: var(--color-prettylights-syntax-entity);
  }

  .pl-smi,
  .pl-s .pl-s1 {
    color: var(--color-prettylights-syntax-storage-modifier-import);
  }

  .pl-ent {
    color: var(--color-prettylights-syntax-entity-tag);
  }

  .pl-k {
    color: var(--color-prettylights-syntax-keyword);
  }

  .pl-s,
  .pl-pds,
  .pl-s .pl-pse .pl-s1,
  .pl-sr,
  .pl-sr .pl-cce,
  .pl-sr .pl-sre,
  .pl-sr .pl-sra {
    color: var(--color-prettylights-syntax-string);
  }

  .pl-v,
  .pl-smw {
    color: var(--color-prettylights-syntax-variable);
  }

  .pl-bu {
    color: var(--color-prettylights-syntax-brackethighlighter-unmatched);
  }

  .pl-ii {
    color: var(--color-prettylights-syntax-invalid-illegal-text);
    background-color: var(--color-prettylights-syntax-invalid-illegal-bg);
  }

  .pl-c2 {
    color: var(--color-prettylights-syntax-carriage-return-text);
    background-color: var(--color-prettylights-syntax-carriage-return-bg);
  }

  .pl-sr .pl-cce {
    font-weight: bold;
    color: var(--color-prettylights-syntax-string-regexp);
  }

  .pl-ml {
    color: var(--color-prettylights-syntax-markup-list);
  }

  .pl-mh,
  .pl-mh .pl-en,
  .pl-ms {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-heading);
  }

  .pl-mi {
    font-style: italic;
    color: var(--color-prettylights-syntax-markup-italic);
  }

  .pl-mb {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-bold);
  }

  .pl-md {
    color: var(--color-prettylights-syntax-markup-deleted-text);
    background-color: var(--color-prettylights-syntax-markup-deleted-bg);
  }

  .pl-mi1 {
    color: var(--color-prettylights-syntax-markup-inserted-text);
    background-color: var(--color-prettylights-syntax-markup-inserted-bg);
  }

  .pl-mc {
    color: var(--color-prettylights-syntax-markup-changed-text);
    background-color: var(--color-prettylights-syntax-markup-changed-bg);
  }

  .pl-mi2 {
    color: var(--color-prettylights-syntax-markup-ignored-text);
    background-color: var(--color-prettylights-syntax-markup-ignored-bg);
  }

  .pl-mdr {
    font-weight: bold;
    color: var(--color-prettylights-syntax-meta-diff-range);
  }

  .pl-ba {
    color: var(--color-prettylights-syntax-brackethighlighter-angle);
  }

  .pl-sg {
    color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
  }

  .pl-corl {
    text-decoration: underline;
    color: var(--color-prettylights-syntax-constant-other-reference-link);
  }

  g-emoji {
    display: inline-block;
    min-width: 1ch;
    font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1em;
    font-style: normal !important;
    font-weight: var(--base-text-weight-normal, 400);
    line-height: 1;
    vertical-align: -0.075em;
  }

  g-emoji img {
    width: 1em;
    height: 1em;
  }

  .task-list-item {
    list-style-type: none;
  }

  .task-list-item label {
    font-weight: var(--base-text-weight-normal, 400);
  }

  .task-list-item.enabled label {
    cursor: pointer;
  }

  .task-list-item + .task-list-item {
    margin-top: 4px;
  }

  .task-list-item .handle {
    display: none;
  }

  .task-list-item-checkbox {
    margin: 0 0.2em 0.25em -1.4em;
    vertical-align: middle;
  }

  .contains-task-list:dir(rtl) .task-list-item-checkbox {
    margin: 0 -1.6em 0.25em 0.2em;
  }

  .contains-task-list {
    position: relative;
  }

  .contains-task-list:hover .task-list-item-convert-container,
  .contains-task-list:focus-within .task-list-item-convert-container {
    display: block;
    width: auto;
    height: 24px;
    overflow: visible;
    clip: auto;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(50%);
  }
`,t7={tokenize:qa,partial:!0},t8={tokenize:Va,partial:!0},nr={tokenize:Ua,partial:!0},no={tokenize:Wa,partial:!0},nl={tokenize:Qa,partial:!0},nc={tokenize:Ha,previous:xr},nf={tokenize:$a,previous:vr},np={tokenize:Na,previous:wr},nd={},nh={text:nd},ng=48;ng<123;)nd[ng]=np,58==++ng?ng=65:91===ng&&(ng=97);function Na(e,w,C){let R=this,_,U;return o;function o(w){return!Ht(w)||!wr.call(R,R.previous)||$t(R.events)?C(w):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(w))}function a(w){return Ht(w)?(e.consume(w),a):64===w?(e.consume(w),s):C(w)}function s(w){return 46===w?e.check(nl,c,f)(w):45===w||95===w||eC(w)?(U=!0,e.consume(w),s):c(w)}function f(w){return e.consume(w),_=!0,s}function c(Q){return U&&_&&eS(R.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),w(Q)):C(Q)}}function Ha(e,w,C){let R=this;return l;function l(w){return 87!==w&&119!==w||!xr.call(R,R.previous)||$t(R.events)?C(w):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(t7,e.attempt(t8,e.attempt(nr,i),C),C)(w))}function i(C){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),w(C)}}function $a(e,w,C){let R=this,_="",U=!1;return o;function o(w){return(72===w||104===w)&&vr.call(R,R.previous)&&!$t(R.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),_+=String.fromCodePoint(w),e.consume(w),a):C(w)}function a(w){if(eS(w)&&_.length<5)return _+=String.fromCodePoint(w),e.consume(w),a;if(58===w){let C=_.toLowerCase();if("http"===C||"https"===C)return e.consume(w),s}return C(w)}function s(w){return 47===w?(e.consume(w),U?f:(U=!0,s)):C(w)}function f(w){return null===w||Ve(w)||V(w)||eI(w)||eT(w)?C(w):e.attempt(t8,e.attempt(nr,c),C)(w)}function c(C){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),w(C)}}function qa(e,w,C){let R=0;return l;function l(w){return(87===w||119===w)&&R<3?(R++,e.consume(w),l):46===w&&3===R?(e.consume(w),i):C(w)}function i(e){return null===e?C(e):w(e)}}function Va(e,w,C){let R,_,U;return o;function o(w){return 46===w||95===w?e.check(no,s,a)(w):null===w||V(w)||eI(w)||45!==w&&eT(w)?s(w):(U=!0,e.consume(w),o)}function a(w){return 95===w?R=!0:(_=R,R=void 0),e.consume(w),o}function s(e){return _||R||!U?C(e):w(e)}}function Ua(e,w){let C=0,R=0;return l;function l(_){return 40===_?(C++,e.consume(_),l):41===_&&R<C?i(_):33===_||34===_||38===_||39===_||41===_||42===_||44===_||46===_||58===_||59===_||60===_||63===_||93===_||95===_||126===_?e.check(no,w,i)(_):null===_||V(_)||eI(_)?w(_):(e.consume(_),l)}function i(w){return 41===w&&R++,e.consume(w),l}}function Wa(e,w,C){return r;function r(R){return 33===R||34===R||39===R||41===R||42===R||44===R||46===R||58===R||59===R||63===R||95===R||126===R?(e.consume(R),r):38===R?(e.consume(R),i):93===R?(e.consume(R),l):60===R||null===R||V(R)||eI(R)?w(R):C(R)}function l(e){return null===e||40===e||91===e||V(e)||eI(e)?w(e):r(e)}function i(e){return eS(e)?o(e):C(e)}function o(w){return 59===w?(e.consume(w),r):eS(w)?(e.consume(w),o):C(w)}}function Qa(e,w,C){return r;function r(w){return e.consume(w),l}function l(e){return eC(e)?C(e):w(e)}}function xr(e){return null===e||40===e||42===e||95===e||91===e||93===e||126===e||V(e)}function vr(e){return!eS(e)}function wr(e){return!(47===e||Ht(e))}function Ht(e){return 43===e||45===e||46===e||95===e||eC(e)}function $t(e){let w=e.length,C=!1;for(;w--;){let R=e[w][1];if(("labelLink"===R.type||"labelImage"===R.type)&&!R._balanced){C=!0;break}if(R._gfmAutolinkLiteralWalkedInto){C=!1;break}}return e.length>0&&!C&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),C}nd[43]=np,nd[45]=np,nd[46]=np,nd[95]=np,nd[72]=[np,nf],nd[104]=[np,nf],nd[87]=[np,nc],nd[119]=[np,nc];var nm={tokenize:nu,partial:!0};function Ya(){return{document:{91:{tokenize:Ga,continuation:{tokenize:eu},exit:tu}},text:{91:{tokenize:Za},93:{add:"after",tokenize:Xa,resolveTo:Ja}}}}function Xa(e,w,C){let R=this,_=R.events.length,U=R.parser.gfmFootnotes||(R.parser.gfmFootnotes=[]),Q;for(;_--;){let e=R.events[_][1];if("labelImage"===e.type){Q=e;break}if("gfmFootnoteCall"===e.type||"labelLink"===e.type||"label"===e.type||"image"===e.type||"link"===e.type)break}return a;function a(_){if(!Q||!Q._balanced)return C(_);let K=ae(R.sliceSerialize({start:Q.end,end:R.now()}));return 94===K.codePointAt(0)&&U.includes(K.slice(1))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(_),e.exit("gfmFootnoteCallLabelMarker"),w(_)):C(_)}}function Ja(e,w){let C=e.length;for(;C--;)if("labelImage"===e[C][1].type&&"enter"===e[C][0]){e[C][1];break}e[C+1][1].type="data",e[C+3][1].type="gfmFootnoteCallLabelMarker";let R={type:"gfmFootnoteCall",start:Object.assign({},e[C+3][1].start),end:Object.assign({},e[e.length-1][1].end)},_={type:"gfmFootnoteCallMarker",start:Object.assign({},e[C+3][1].end),end:Object.assign({},e[C+3][1].end)};_.end.column++,_.end.offset++,_.end._bufferIndex++;let U={type:"gfmFootnoteCallString",start:Object.assign({},_.end),end:Object.assign({},e[e.length-1][1].start)},Q={type:"chunkString",contentType:"string",start:Object.assign({},U.start),end:Object.assign({},U.end)},K=[e[C+1],e[C+2],["enter",R,w],e[C+3],e[C+4],["enter",_,w],["exit",_,w],["enter",U,w],["enter",Q,w],["exit",Q,w],["exit",U,w],e[e.length-2],e[e.length-1],["exit",R,w]];return e.splice(C,e.length-C+1,...K),e}function Za(e,w,C){let R=this,_=R.parser.gfmFootnotes||(R.parser.gfmFootnotes=[]),U=0,Q;return a;function a(w){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(w),e.exit("gfmFootnoteCallLabelMarker"),s}function s(w){return 94!==w?C(w):(e.enter("gfmFootnoteCallMarker"),e.consume(w),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",f)}function f(K){if(U>999||93===K&&!Q||null===K||91===K||V(K))return C(K);if(93===K){e.exit("chunkString");let U=e.exit("gfmFootnoteCallString");return _.includes(ae(R.sliceSerialize(U)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(K),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),w):C(K)}return V(K)||(Q=!0),U++,e.consume(K),92===K?c:f}function c(w){return 91===w||92===w||93===w?(e.consume(w),U++,f):f(w)}}function Ga(e,w,C){let R=this,_=R.parser.gfmFootnotes||(R.parser.gfmFootnotes=[]),U,Q=0,K;return s;function s(w){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(w),e.exit("gfmFootnoteDefinitionLabelMarker"),f}function f(w){return 94===w?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(w),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",c):C(w)}function c(w){if(Q>999||93===w&&!K||null===w||91===w||V(w))return C(w);if(93===w){e.exit("chunkString");let C=e.exit("gfmFootnoteDefinitionLabelString");return U=ae(R.sliceSerialize(C)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(w),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return V(w)||(K=!0),Q++,e.consume(w),92===w?u:c}function u(w){return 91===w||92===w||93===w?(e.consume(w),Q++,c):c(w)}function h(w){return 58===w?(e.enter("definitionMarker"),e.consume(w),e.exit("definitionMarker"),_.includes(U)||_.push(U),H(e,p,"gfmFootnoteDefinitionWhitespace")):C(w)}function p(e){return w(e)}}function eu(e,w,C){return e.check(eM,w,e.attempt(nm,w,C))}function tu(e){e.exit("gfmFootnoteDefinition")}function nu(e,w,C){let R=this;return H(e,l,"gfmFootnoteDefinitionIndent",5);function l(e){let _=R.events[R.events.length-1];return _&&"gfmFootnoteDefinitionIndent"===_[1].type&&4===_[2].sliceSerialize(_[1],!0).length?w(e):C(e)}}function ru(e){let w=(e||{}).singleTilde,C={tokenize:l,resolveAll:r};return null==w&&(w=!0),{text:{126:C},insideSpan:{null:[C]},attentionMarkers:{null:[126]}};function r(e,w){let C=-1;for(;++C<e.length;)if("enter"===e[C][0]&&"strikethroughSequenceTemporary"===e[C][1].type&&e[C][1]._close){let R=C;for(;R--;)if("exit"===e[R][0]&&"strikethroughSequenceTemporary"===e[R][1].type&&e[R][1]._open&&e[C][1].end.offset-e[C][1].start.offset==e[R][1].end.offset-e[R][1].start.offset){e[C][1].type="strikethroughSequence",e[R][1].type="strikethroughSequence";let _={type:"strikethrough",start:Object.assign({},e[R][1].start),end:Object.assign({},e[C][1].end)},U={type:"strikethroughText",start:Object.assign({},e[R][1].end),end:Object.assign({},e[C][1].start)},Q=[["enter",_,w],["enter",e[R][1],w],["exit",e[R][1],w],["enter",U,w]],K=w.parser.constructs.insideSpan.null;K&&ne(Q,Q.length,0,Ke(K,e.slice(R+1,C),w)),ne(Q,Q.length,0,[["exit",U,w],["enter",e[C][1],w],["exit",e[C][1],w],["exit",_,w]]),ne(e,R-1,C-R+3,Q),C=R+Q.length-2;break}}for(C=-1;++C<e.length;)"strikethroughSequenceTemporary"===e[C][1].type&&(e[C][1].type="data");return e}function l(e,C,R){let _=this.previous,U=this.events,Q=0;return u;function u(w){return 126===_&&"characterEscape"!==U[U.length-1][1].type?R(w):(e.enter("strikethroughSequenceTemporary"),h(w))}function h(U){let K=Ue(_);if(126===U)return Q>1?R(U):(e.consume(U),Q++,h);if(Q<2&&!w)return R(U);let Y=e.exit("strikethroughSequenceTemporary"),X=Ue(U);return Y._open=!X||2===X&&!!K,Y._close=!K||2===K&&!!X,C(U)}}}var ny=class{constructor(){this.map=[]}add(e,w,C){lu(this,e,w,C)}consume(e){if(this.map.sort((e,w)=>e[0]-w[0]),0===this.map.length)return;let w=this.map.length,C=[];for(;w>0;)w-=1,C.push(e.slice(this.map[w][0]+this.map[w][1])),C.push(this.map[w][2]),e.length=this.map[w][0];C.push([...e]),e.length=0;let R=C.pop();for(;R;)e.push(...R),R=C.pop();this.map.length=0}};function lu(e,w,C,R){let _=0;if(!(0===C&&0===R.length)){for(;_<e.map.length;){if(e.map[_][0]===w){e.map[_][1]+=C,e.map[_][2].push(...R);return}_+=1}e.map.push([w,C,R])}}function ou(e,w){let C=!1,R=[];for(;w<e.length;){let _=e[w];if(C){if("enter"===_[0])"tableContent"===_[1].type&&R.push("tableDelimiterMarker"===e[w+1][1].type?"left":"none");else if("tableContent"===_[1].type){if("tableDelimiterMarker"===e[w-1][1].type){let e=R.length-1;R[e]="left"===R[e]?"center":"right"}}else if("tableDelimiterRow"===_[1].type)break}else"enter"===_[0]&&"tableDelimiterRow"===_[1].type&&(C=!0);w+=1}return R}var nb={flow:{null:{tokenize:uu,resolveAll:su}}};function uu(e,w,C){let R=this,_=0,U=0,Q;return a;function a(e){let w=R.events.length-1;for(;w>-1;){let e=R.events[w][1].type;if("lineEnding"===e||"linePrefix"===e)w--;else break}let _=w>-1?R.events[w][1].type:null,U="tableHead"===_||"tableRow"===_?b:s;return U===b&&R.parser.lazy[R.now().line]?C(e):U(e)}function s(w){return e.enter("tableHead"),e.enter("tableRow"),f(w)}function f(e){return 124===e||(Q=!0,U+=1),c(e)}function c(w){return null===w?C(w):I(w)?U>1?(U=0,R.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),p):C(w):B(w)?H(e,c,"whitespace")(w):(U+=1,Q&&(Q=!1,_+=1),124===w?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),Q=!0,c):(e.enter("data"),u(w)))}function u(w){return null===w||124===w||V(w)?(e.exit("data"),c(w)):(e.consume(w),92===w?h:u)}function h(w){return 92===w||124===w?(e.consume(w),u):u(w)}function p(w){return R.interrupt=!1,R.parser.lazy[R.now().line]?C(w):(e.enter("tableDelimiterRow"),Q=!1,B(w)?H(e,y,"linePrefix",R.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):y(w))}function y(w){return 45===w||58===w?x(w):124===w?(Q=!0,e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),k):C(w)}function k(w){return B(w)?H(e,x,"whitespace")(w):x(w)}function x(w){return 58===w?(U+=1,Q=!0,e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),d):45===w?(U+=1,d(w)):null===w||I(w)?O(w):C(w)}function d(w){return 45===w?(e.enter("tableDelimiterFiller"),F(w)):C(w)}function F(w){return 45===w?(e.consume(w),F):58===w?(Q=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(w))}function S(w){return B(w)?H(e,O,"whitespace")(w):O(w)}function O(R){return 124===R?y(R):(null===R||I(R))&&Q&&_===U?(e.exit("tableDelimiterRow"),e.exit("tableHead"),w(R)):C(R)}function b(w){return e.enter("tableRow"),A(w)}function A(C){return 124===C?(e.enter("tableCellDivider"),e.consume(C),e.exit("tableCellDivider"),A):null===C||I(C)?(e.exit("tableRow"),w(C)):B(C)?H(e,A,"whitespace")(C):(e.enter("data"),j(C))}function j(w){return null===w||124===w||V(w)?(e.exit("data"),A(w)):(e.consume(w),92===w?N:j)}function N(w){return 92===w||124===w?(e.consume(w),j):j(w)}}function su(e,w){let C=-1,R=!0,_=0,U=[0,0,0,0],Q=[0,0,0,0],K=!1,Y=0,X,G,J,ee=new ny;for(;++C<e.length;){let et=e[C],eo=et[1];"enter"===et[0]?"tableHead"===eo.type?(K=!1,0!==Y&&(or(ee,w,Y,X,G),G=void 0,Y=0),X={type:"table",start:Object.assign({},eo.start),end:Object.assign({},eo.end)},ee.add(C,0,[["enter",X,w]])):"tableRow"===eo.type||"tableDelimiterRow"===eo.type?(R=!0,J=void 0,U=[0,0,0,0],Q=[0,C+1,0,0],K&&(K=!1,G={type:"tableBody",start:Object.assign({},eo.start),end:Object.assign({},eo.end)},ee.add(C,0,[["enter",G,w]])),_="tableDelimiterRow"===eo.type?2:G?3:1):_&&("data"===eo.type||"tableDelimiterMarker"===eo.type||"tableDelimiterFiller"===eo.type)?(R=!1,0===Q[2]&&(0!==U[1]&&(Q[0]=Q[1],J=rt(ee,w,U,_,void 0,J),U=[0,0,0,0]),Q[2]=C)):"tableCellDivider"===eo.type&&(R?R=!1:(0!==U[1]&&(Q[0]=Q[1],J=rt(ee,w,U,_,void 0,J)),Q=[(U=Q)[1],C,0,0])):"tableHead"===eo.type?(K=!0,Y=C):"tableRow"===eo.type||"tableDelimiterRow"===eo.type?(Y=C,0!==U[1]?(Q[0]=Q[1],J=rt(ee,w,U,_,C,J)):0!==Q[1]&&(J=rt(ee,w,Q,_,C,J)),_=0):_&&("data"===eo.type||"tableDelimiterMarker"===eo.type||"tableDelimiterFiller"===eo.type)&&(Q[3]=C)}for(0!==Y&&or(ee,w,Y,X,G),ee.consume(w.events),C=-1;++C<w.events.length;){let e=w.events[C];"enter"===e[0]&&"table"===e[1].type&&(e[1]._align=ou(w.events,C))}return e}function rt(e,w,C,R,_,U){0!==C[0]&&(U.end=Object.assign({},Re(w.events,C[0])),e.add(C[0],0,[["exit",U,w]]));let Q=Re(w.events,C[1]);if(U={type:1===R?"tableHeader":2===R?"tableDelimiter":"tableData",start:Object.assign({},Q),end:Object.assign({},Q)},e.add(C[1],0,[["enter",U,w]]),0!==C[2]){let _=Re(w.events,C[2]),U=Re(w.events,C[3]),Q={type:"tableContent",start:Object.assign({},_),end:Object.assign({},U)};if(e.add(C[2],0,[["enter",Q,w]]),2!==R){let R=w.events[C[2]],_=w.events[C[3]];if(R[1].end=Object.assign({},_[1].end),R[1].type="chunkText",R[1].contentType="text",C[3]>C[2]+1){let w=C[2]+1,R=C[3]-C[2]-1;e.add(w,R,[])}}e.add(C[3]+1,0,[["exit",Q,w]])}return void 0!==_&&(U.end=Object.assign({},Re(w.events,_)),e.add(_,0,[["exit",U,w]]),U=void 0),U}function or(e,w,C,R,_){let U=[],Q=Re(w.events,C);_&&(_.end=Object.assign({},Q),U.push(["exit",_,w])),R.end=Object.assign({},Q),U.push(["exit",R,w]),e.add(C+1,0,U)}function Re(e,w){let C=e[w],R="enter"===C[0]?"start":"end";return C[1][R]}var nk={text:{91:{tokenize:pu}}};function pu(e,w,C){let R=this;return l;function l(w){return null===R.previous&&R._gfmTasklistFirstContentOfListItem?(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(w),e.exit("taskListCheckMarker"),i):C(w)}function i(w){return V(w)?(e.enter("taskListCheckValueUnchecked"),e.consume(w),e.exit("taskListCheckValueUnchecked"),o):88===w||120===w?(e.enter("taskListCheckValueChecked"),e.consume(w),e.exit("taskListCheckValueChecked"),o):C(w)}function o(w){return 93===w?(e.enter("taskListCheckMarker"),e.consume(w),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):C(w)}function a(R){return I(R)?w(R):B(R)?e.check({tokenize:du},w,C)(R):C(R)}}function du(e,w,C){return H(e,r,"whitespace");function r(e){return null===e?C(e):w(e)}}function hu(e){return At([nh,Ya(),ru(e),nb,nk])}function ar(e,w){let C=String(e);if("string"!=typeof w)throw TypeError("Expected character");let R=0,_=C.indexOf(w);for(;-1!==_;)R++,_=C.indexOf(w,_+w.length);return R}function gu(e){if("string"!=typeof e)throw TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var nx={}.hasOwnProperty,yu=function(e,w,C,R){let _,U;"string"==typeof w||w instanceof RegExp?(U=[[w,C]],_=R):(U=w,_=C),_||(_={});let Q=tt(_.ignore||[]),K=bu(U),Y=-1;for(;++Y<K.length;)It(e,"text",f);return e;function f(e,w){let C=-1,R;for(;++C<w.length;){let e=w[C];if(Q(e,R?R.children.indexOf(e):void 0,R))return;R=e}if(R)return c(e,w)}function c(e,w){let C=w[w.length-1],R=K[Y][0],_=K[Y][1],U=0,Q=C.children.indexOf(e),X=!1,G=[];R.lastIndex=0;let J=R.exec(e.value);for(;J;){let C=J.index,Q={index:J.index,input:J.input,stack:[...w,e]},K=_(...J,Q);if("string"==typeof K&&(K=K.length>0?{type:"text",value:K}:void 0),!1!==K&&(U!==C&&G.push({type:"text",value:e.value.slice(U,C)}),Array.isArray(K)?G.push(...K):K&&G.push(K),U=C+J[0].length,X=!0),!R.global)break;J=R.exec(e.value)}return X?(U<e.value.length&&G.push({type:"text",value:e.value.slice(U)}),C.children.splice(Q,1,...G)):G=[e],Q+G.length}};function bu(e){let w=[];if("object"!=typeof e)throw TypeError("Expected array or object as schema");if(Array.isArray(e)){let C=-1;for(;++C<e.length;)w.push([ur(e[C][0]),sr(e[C][1])])}else{let C;for(C in e)nx.call(e,C)&&w.push([ur(C),sr(e[C])])}return w}function ur(e){return"string"==typeof e?RegExp(gu(e),"g"):e}function sr(e){return"function"==typeof e?e:()=>e}var nv="phrasing",nw=["autolink","link","image","label"],nS={transforms:[Eu],enter:{literalAutolink:vu,literalAutolinkEmail:Bt,literalAutolinkHttp:Bt,literalAutolinkWww:Bt},exit:{literalAutolink:Fu,literalAutolinkEmail:Cu,literalAutolinkHttp:wu,literalAutolinkWww:Su}},nC={unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:nv,notInConstruct:nw},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:nv,notInConstruct:nw},{character:":",before:"[ps]",after:"\\/",inConstruct:nv,notInConstruct:nw}]};function vu(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Bt(e){this.config.enter.autolinkProtocol.call(this,e)}function wu(e){this.config.exit.autolinkProtocol.call(this,e)}function Su(e){this.config.exit.data.call(this,e),this.stack[this.stack.length-1].url="http://"+this.sliceSerialize(e)}function Cu(e){this.config.exit.autolinkEmail.call(this,e)}function Fu(e){this.exit(e)}function Eu(e){yu(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Au],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,Du]],{ignore:["link","linkReference"]})}function Au(e,w,C,R,_){let U="";if(!Sr(_)||(/^w/i.test(w)&&(C=w+C,w="",U="http://"),!Ou(C)))return!1;let Q=Tu(C+R);if(!Q[0])return!1;let K={type:"link",title:null,url:U+w+Q[0],children:[{type:"text",value:w+Q[0]}]};return Q[1]?[K,{type:"text",value:Q[1]}]:K}function Du(e,w,C,R){return!(!Sr(R,!0)||/[-\d_]$/.test(C))&&{type:"link",title:null,url:"mailto:"+w+"@"+C,children:[{type:"text",value:w+"@"+C}]}}function Ou(e){let w=e.split(".");return!(w.length<2||w[w.length-1]&&(/_/.test(w[w.length-1])||!/[a-zA-Z\d]/.test(w[w.length-1]))||w[w.length-2]&&(/_/.test(w[w.length-2])||!/[a-zA-Z\d]/.test(w[w.length-2])))}function Tu(e){let w=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!w)return[e,void 0];e=e.slice(0,w.index);let C=w[0],R=C.indexOf(")"),_=ar(e,"("),U=ar(e,")");for(;-1!==R&&_>U;)e+=C.slice(0,R+1),R=(C=C.slice(R+1)).indexOf(")"),U++;return[e,C]}function Sr(e,w){let C=e.input.charCodeAt(e.index-1);return(0===e.index||eI(C)||eT(C))&&(!w||47!==C)}function Cr(e){return e.label||!e.identifier?e.label||"":Tt(e.identifier)}function Lu(e,w,C){let _=w.indexStack,U=e.children||[],Q=w.createTracker(C),K=[],Y=-1;for(_.push(-1);++Y<U.length;){let C=U[Y];_[_.length-1]=Y,K.push(Q.move(w.handle(C,e,w,(0,R.a)({before:`
`,after:`
`},Q.current())))),"list"!==C.type&&(w.bulletLastUsed=void 0),Y<U.length-1&&K.push(Q.move(Pu(C,U[Y+1],e,w)))}return _.pop(),K.join("")}function Pu(e,w,C,R){let _=R.join.length;for(;_--;){let U=R.join[_](e,w,C,R);if(!0===U||1===U)break;if("number"==typeof U)return`
`.repeat(1+U);if(!1===U)return`

<!---->

`}return`

`}var nF=/\r?\n|\r/g;function zu(e,w){let C=[],R=0,_=0,U;for(;U=nF.exec(e);)o(e.slice(R,U.index)),C.push(U[0]),R=U.index+U[0].length,_++;return o(e.slice(R)),C.join("");function o(e){C.push(w(e,_,!e))}}function Fr(e){if(!e._compiled){let w=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=RegExp((w?"("+w+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function Mu(e,w){return cr(e,w.inConstruct,!0)&&!cr(e,w.notInConstruct,!1)}function cr(e,w,C){if("string"==typeof w&&(w=[w]),!w||0===w.length)return C;let R=-1;for(;++R<w.length;)if(e.includes(w[R]))return!0;return!1}function Er(e,w,C){let R=(C.before||"")+(w||"")+(C.after||""),_=[],U=[],Q={},K=-1;for(;++K<e.unsafe.length;){let w=e.unsafe[K];if(!Mu(e.stack,w))continue;let C=Fr(w),U;for(;U=C.exec(R);){let e="before"in w||!!w.atBreak,C="after"in w,R=U.index+(e?U[1].length:0);_.includes(R)?(Q[R].before&&!e&&(Q[R].before=!1),Q[R].after&&!C&&(Q[R].after=!1)):(_.push(R),Q[R]={before:e,after:C})}}_.sort(ju);let Y=C.before?C.before.length:0,X=R.length-(C.after?C.after.length:0);for(K=-1;++K<_.length;){let e=_[K];e<Y||e>=X||e+1<X&&_[K+1]===e+1&&Q[e].after&&!Q[e+1].before&&!Q[e+1].after||_[K-1]===e-1&&Q[e].before&&!Q[e-1].before&&!Q[e-1].after||(Y!==e&&U.push(fr(R.slice(Y,e),"\\")),Y=e,!/[!-/:-@[-`{-~]/.test(R.charAt(e))||C.encode&&C.encode.includes(R.charAt(e))?(U.push("&#x"+R.charCodeAt(e).toString(16).toUpperCase()+";"),Y++):U.push("\\"))}return U.push(fr(R.slice(Y,X),C.after)),U.join("")}function ju(e,w){return e-w}function fr(e,w){let C=/\\(?=[!-/:-@[-`{-~])/g,R=[],_=[],U=e+w,Q=-1,K=0,Y;for(;Y=C.exec(U);)R.push(Y.index);for(;++Q<R.length;)K!==R[Q]&&_.push(e.slice(K,R[Q])),_.push("\\"),K=R[Q];return _.push(e.slice(K)),_.join("")}function it(e){let w=e||{},C=w.now||{},R=w.lineShift||0,_=C.line||1,U=C.column||1;return{move:s,current:o,shift:a};function o(){return{now:{line:_,column:U},lineShift:R}}function a(e){R+=e}function s(e){let w=e||"",C=w.split(/\r?\n|\r/g),Q=C[C.length-1];return _+=C.length-1,U=1===C.length?U+Q.length:1+Q.length+R,w}}function Ru(){return{enter:{gfmFootnoteDefinition:Bu,gfmFootnoteDefinitionLabelString:Nu,gfmFootnoteCall:qu,gfmFootnoteCallString:Vu},exit:{gfmFootnoteDefinition:$u,gfmFootnoteDefinitionLabelString:Hu,gfmFootnoteCall:Wu,gfmFootnoteCallString:Uu}}}function _u(){return{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:Ku,footnoteReference:Ar}}}function Bu(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function Nu(){this.buffer()}function Hu(e){let w=this.resume(),C=this.stack[this.stack.length-1];C.label=w,C.identifier=ae(this.sliceSerialize(e)).toLowerCase()}function $u(e){this.exit(e)}function qu(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Vu(){this.buffer()}function Uu(e){let w=this.resume(),C=this.stack[this.stack.length-1];C.label=w,C.identifier=ae(this.sliceSerialize(e)).toLowerCase()}function Wu(e){this.exit(e)}function Ar(e,w,C,_){let U=it(_),Q=U.move("[^"),K=C.enter("footnoteReference"),Y=C.enter("reference");return Q+=U.move(Er(C,Cr(e),(0,R.b)((0,R.a)({},U.current()),{before:Q,after:"]"}))),Y(),K(),Q+=U.move("]")}function Qu(){return"["}function Ku(e,w,C,_){let U=it(_),Q=U.move("[^"),K=C.enter("footnoteDefinition"),Y=C.enter("label");return Q+=U.move(Er(C,Cr(e),(0,R.b)((0,R.a)({},U.current()),{before:Q,after:"]"}))),Y(),Q+=U.move("]:"+(e.children&&e.children.length>0?" ":"")),U.shift(4),Q+=U.move(zu(Lu(e,C,U.current()),Yu)),K(),Q}function Yu(e,w,C){return 0===w?e:(C?"":"    ")+e}function Dr(e,w,C){let _=w.indexStack,U=e.children||[],Q=[],K=-1,Y=C.before;_.push(-1);let X=w.createTracker(C);for(;++K<U.length;){let G=U[K],J;if(_[_.length-1]=K,K+1<U.length){let C=w.handle.handlers[U[K+1].type];C&&C.peek&&(C=C.peek),J=C?C(U[K+1],e,w,(0,R.a)({before:"",after:""},X.current())).charAt(0):""}else J=C.after;Q.length>0&&("\r"===Y||Y===`
`)&&"html"===G.type&&(Q[Q.length-1]=Q[Q.length-1].replace(/(\r?\n|\r)$/," "),Y=" ",(X=w.createTracker(C)).move(Q.join(""))),Q.push(X.move(w.handle(G,e,w,(0,R.b)((0,R.a)({},X.current()),{before:Y,after:J})))),Y=Q[Q.length-1].slice(-1)}return _.pop(),Q.join("")}Ar.peek=Qu,Or.peek=ts;var nA={canContainEols:["delete"],enter:{strikethrough:Gu},exit:{strikethrough:es}},nE={unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"]}],handlers:{delete:Or}};function Gu(e){this.enter({type:"delete",children:[]},e)}function es(e){this.exit(e)}function Or(e,w,C,_){let U=it(_),Q=C.enter("strikethrough"),K=U.move("~~");return K+=Dr(e,C,(0,R.b)((0,R.a)({},U.current()),{before:K,after:"~"}))+U.move("~~"),Q(),K}function ts(){return"~"}function Tr(e,w,C){let R=e.value||"",_="`",U=-1;for(;RegExp("(^|[^`])"+_+"([^`]|$)").test(R);)_+="`";for(/[^ \r\n]/.test(R)&&(/^[ \r\n]/.test(R)&&/[ \r\n]$/.test(R)||/^`|`$/.test(R))&&(R=" "+R+" ");++U<C.unsafe.length;){let e=C.unsafe[U],w=Fr(e),_;if(e.atBreak)for(;_=w.exec(R);){let e=_.index;10===R.charCodeAt(e)&&13===R.charCodeAt(e-1)&&e--,R=R.slice(0,e)+" "+R.slice(_.index+1)}}return _+R+_}function ns(){return"`"}function rs(e,w={}){let C=(w.align||[]).concat(),R=w.stringLength||ls,_=[],U=[],Q=[],K=[],Y=0,X=-1;for(;++X<e.length;){let C=[],_=[],G=-1;for(e[X].length>Y&&(Y=e[X].length);++G<e[X].length;){let U=is(e[X][G]);if(!1!==w.alignDelimiters){let e=R(U);_[G]=e,(void 0===K[G]||e>K[G])&&(K[G]=e)}C.push(U)}U[X]=C,Q[X]=_}let G=-1;if("object"==typeof C&&"length"in C)for(;++G<Y;)_[G]=pr(C[G]);else{let e=pr(C);for(;++G<Y;)_[G]=e}G=-1;let J=[],ee=[];for(;++G<Y;){let e=_[G],C="",R="";99===e?(C=":",R=":"):108===e?C=":":114===e&&(R=":");let U=!1===w.alignDelimiters?1:Math.max(1,K[G]-C.length-R.length),Q=C+"-".repeat(U)+R;!1!==w.alignDelimiters&&((U=C.length+U+R.length)>K[G]&&(K[G]=U),ee[G]=U),J[G]=Q}U.splice(1,0,J),Q.splice(1,0,ee),X=-1;let et=[];for(;++X<U.length;){let e=U[X],C=Q[X];G=-1;let R=[];for(;++G<Y;){let U=e[G]||"",Q="",X="";if(!1!==w.alignDelimiters){let e=K[G]-(C[G]||0),w=_[G];114===w?Q=" ".repeat(e):99===w?e%2?(Q=" ".repeat(e/2+.5),X=" ".repeat(e/2-.5)):X=Q=" ".repeat(e/2):X=" ".repeat(e)}!1===w.delimiterStart||G||R.push("|"),!1!==w.padding&&!(!1===w.alignDelimiters&&""===U)&&(!1!==w.delimiterStart||G)&&R.push(" "),!1!==w.alignDelimiters&&R.push(Q),R.push(U),!1!==w.alignDelimiters&&R.push(X),!1!==w.padding&&R.push(" "),(!1!==w.delimiterEnd||G!==Y-1)&&R.push("|")}et.push(!1===w.delimiterEnd?R.join("").replace(/ +$/,""):R.join(""))}return et.join(`
`)}function is(e){return null==e?"":String(e)}function ls(e){return e.length}function pr(e){let w="string"==typeof e?e.codePointAt(0):0;return 67===w||99===w?99:76===w||108===w?108:82===w||114===w?114:0}Tr.peek=ns;var nD={enter:{table:as,tableData:dr,tableHeader:dr,tableRow:ss},exit:{codeText:cs,table:us,tableData:Nt,tableHeader:Nt,tableRow:Nt}};function as(e){let w=e._align;this.enter({type:"table",align:w.map(e=>"none"===e?null:e),children:[]},e),this.setData("inTable",!0)}function us(e){this.exit(e),this.setData("inTable")}function ss(e){this.enter({type:"tableRow",children:[]},e)}function Nt(e){this.exit(e)}function dr(e){this.enter({type:"tableCell",children:[]},e)}function cs(e){let w=this.resume();this.getData("inTable")&&(w=w.replace(/\\([\\|])/g,fs)),this.stack[this.stack.length-1].value=w,this.exit(e)}function fs(e,w){return"|"===w?w:e}function ps(e){let w=e||{},C=w.tableCellPadding,_=w.tablePipeAlign,U=w.stringLength,Q=C?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:o,tableRow:a,tableCell:s,inlineCode:h}};function o(e,w,C,R){return f(c(e,C,R),e.align)}function a(e,w,C,R){let _=f([u(e,C,R)]);return _.slice(0,_.indexOf(`
`))}function s(e,w,C,_){let U=C.enter("tableCell"),K=C.enter("phrasing"),Y=Dr(e,C,(0,R.b)((0,R.a)({},_),{before:Q,after:Q}));return K(),U(),Y}function f(e,w){return rs(e,{align:w,alignDelimiters:_,padding:C,stringLength:U})}function c(e,w,C){let R=e.children,_=-1,U=[],Q=w.enter("table");for(;++_<R.length;)U[_]=u(R[_],w,C);return Q(),U}function u(e,w,C){let R=e.children,_=-1,U=[],Q=w.enter("tableRow");for(;++_<R.length;)U[_]=s(R[_],e,w,C);return Q(),U}function h(e,w,C){let R=Tr(e,w,C);return C.stack.includes("tableCell")&&(R=R.replace(/\|/g,"\\$&")),R}}function ds(e){let w=e.options.bullet||"*";if("*"!==w&&"+"!==w&&"-"!==w)throw Error("Cannot serialize items with `"+w+"` for `options.bullet`, expected `*`, `+`, or `-`");return w}function hs(e){let w=e.options.listItemIndent||"tab";if(1===w||"1"===w)return"one";if("tab"!==w&&"one"!==w&&"mixed"!==w)throw Error("Cannot serialize items with `"+w+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return w}function gs(e,w,C,R){let _=hs(C),U=C.bulletCurrent||ds(C);w&&"list"===w.type&&w.ordered&&(U=("number"==typeof w.start&&w.start>-1?w.start:1)+(!1===C.options.incrementListMarker?0:w.children.indexOf(e))+U);let Q=U.length+1;("tab"===_||"mixed"===_&&(w&&"list"===w.type&&w.spread||e.spread))&&(Q=4*Math.ceil(Q/4));let K=C.createTracker(R);K.move(U+" ".repeat(Q-U.length)),K.shift(Q);let Y=C.enter("listItem"),X=C.indentLines(C.containerFlow(e,K.current()),c);return Y(),X;function c(e,w,C){return w?(C?"":" ".repeat(Q))+e:(C?U:U+" ".repeat(Q-U.length))+e}}var nT={exit:{taskListCheckValueChecked:hr,taskListCheckValueUnchecked:hr,paragraph:bs}},nI={unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:ks}};function hr(e){this.stack[this.stack.length-2].checked="taskListCheckValueChecked"===e.type}function bs(e){let w=this.stack[this.stack.length-2];if(w&&"listItem"===w.type&&"boolean"==typeof w.checked){let e=this.stack[this.stack.length-1],C=e.children[0];if(C&&"text"===C.type){let R=w.children,_=-1,U;for(;++_<R.length;){let e=R[_];if("paragraph"===e.type){U=e;break}}U===e&&(C.value=C.value.slice(1),0===C.value.length?e.children.shift():e.position&&C.position&&"number"==typeof C.position.start.offset&&(C.position.start.column++,C.position.start.offset++,e.position.start=Object.assign({},C.position.start)))}}this.exit(e)}function ks(e,w,C,_){let U=e.children[0],Q="boolean"==typeof e.checked&&U&&"paragraph"===U.type,K="["+(e.checked?"x":" ")+"] ",Y=it(_);Q&&Y.move(K);let X=gs(e,w,C,(0,R.a)((0,R.a)({},_),Y.current()));return Q&&(X=X.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,f)),X;function f(e){return e+K}}function xs(){return[nS,Ru(),nA,nD,nT]}function vs(e){return{extensions:[nC,_u(),nE,ps(e),nI]}}function ws(e={}){let w=this.data();function n(e,C){(w[e]?w[e]:w[e]=[]).push(C)}n("micromarkExtensions",hu(e)),n("fromMarkdownExtensions",xs()),n("toMarkdownExtensions",vs(e))}var nO=(0,R.f)((0,R.j)(),1);function Ss(e){return nO.default.createElement("a",{href:e.href,target:"_blank",rel:"noreferrer"},e.children)}function Ms({source:e}){return nO.default.createElement(t9,{components:{a:Ss},rehypePlugins:[ws]},e)}/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/}}]);
//# sourceMappingURL=527b56ee.59bb29147e83c632.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"28Mp":function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(M){c=function(t,e,r){return t[e]=r}}function u(t,e,r,i){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),s=new j(i||[]);return n(a,"_invoke",{value:_(t,r,s)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(M){return{type:"throw",arg:M}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};c(v,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(L([])));m&&m!==e&&r.call(m,o)&&(v=m);var y=d.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var i;n(this,"_invoke",{value:function(n,o){function a(){return new e((function(i,a){!function n(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}(n,o,i,a)}))}return i=i?i.then(a,a):a()}})}function _(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return x()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var i=l(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:x}}function x(){return{value:void 0,done:!0}}return p.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=c(d,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new b(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(y),c(y,s,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}(t.exports);try{regeneratorRuntime=n}catch(i){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},wUDg:function(t,e,r){"use strict";r.r(e);var n=r("dI71"),i=r("q1tI"),o=r.n(i),a=r("lxDd"),s=r("o0o1"),c=r.n(s),u=(r("28Mp"),r("HaE+")),l=r("zLVn"),h=r("rePB"),f=r("SOuN"),p=r("0mpS"),d=r("udoT"),v=r("uJc0"),g=r("kh/P");function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(h.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function w(t,e,r,n){if(r){if(r.userData._googleMap===t)return r;_(r)}var i={click:null,dblclick:null,mousemove:null,mouseout:null},o=new d.a(y(y({},n),{},{useDevicePixels:!!n.interleaved||n.useDevicePixels,style:n.interleaved?null:{pointerEvents:"none"},parent:b(e,n.style),initialViewState:{longitude:0,latitude:0,zoom:1},controller:!1})),a=function(e){i[e]=t.addListener(e,(function(t){return function(t,e,r){var n={type:e,offsetCenter:j(r,t),srcEvent:r};switch(e){case"click":n.tapCount=1,t._onPointerDown(n),t._onEvent(n);break;case"dblclick":n.type="click",n.tapCount=2,t._onEvent(n);break;case"mousemove":n.type="pointermove",t._onPointerMove(n);break;case"mouseout":n.type="pointerleave",t._onPointerMove(n);break;default:return}}(o,e,t)}))};for(var s in i)a(s);return o.userData._googleMap=t,o.userData._eventListeners=i,o}function b(t,e){var r,n,i=document.createElement("div");(i.style.position="absolute",Object.assign(i.style,e),"getPanes"in t)?null===(r=t.getPanes())||void 0===r||r.overlayLayer.appendChild(i):null===(n=t.getMap())||void 0===n||n.getDiv().appendChild(i);return i}function _(t){var e=t.userData._eventListeners;for(var r in e)e[r]&&e[r].remove();t.finalize()}function k(t,e){var r=O(t),n=r.width,i=r.height,o=e.getCameraParams(),a=o.center,s=o.heading,c=o.tilt,u=o.zoom,l=i?n/i:1,h=(new g.a).perspective({fovy:25*Math.PI/180,aspect:l,near:.75,far:3e14});return{width:n,height:i,viewState:{altitude:.5*h[5],bearing:s,latitude:a.lat(),longitude:a.lng(),pitch:c,projectionMatrix:h,repeat:!0,zoom:u-1}}}function O(t){var e=t.getDiv().firstChild;return{width:e.offsetWidth,height:e.offsetHeight}}function P(t,e,r){var n=new google.maps.Point(e,r),i=t.fromContainerPixelToLatLng(n);return[i.lng(),i.lat()]}function j(t,e){if(t.pixel)return t.pixel;var r=e.getViewports()[0].project([t.latLng.lng(),t.latLng.lat()]);return{x:r[0],y:r[1]}}function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){Object(h.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var M=function(){return!1},E={depthMask:!0,depthTest:!0,blend:!0,blendFunc:[p.a.SRC_ALPHA,p.a.ONE_MINUS_SRC_ALPHA,p.a.ONE,p.a.ONE_MINUS_SRC_ALPHA],blendEquation:p.a.FUNC_ADD};function A(){}var I={interleaved:!0},T=function(){function t(t){this.props={},this._map=null,this._deck=null,this._overlay=null,this.setProps(x(x({},I),t))}var e=t.prototype;return e.setMap=function(t){var e=this;if(t!==this._map){var r;if(this._map)null===(r=this._overlay)||void 0===r||r.setMap(null),this._map=null;if(t){this._map=t;var n=google.maps.RenderingType.UNINITIALIZED;t.getRenderingType()!==n?this._createOverlay(t):t.addListener("renderingtype_changed",(function(){e._createOverlay(t)}))}}},e.setProps=function(t){if(Object.assign(this.props,t),this._deck){if(t.style){var e=this._deck.canvas.parentElement.style;Object.assign(e,t.style),t.style=null}this._deck.setProps(t)}},e.pickObject=function(t){return this._deck&&this._deck.pickObject(t)},e.pickMultipleObjects=function(t){return this._deck&&this._deck.pickMultipleObjects(t)},e.pickObjects=function(t){return this._deck&&this._deck.pickObjects(t)},e.finalize=function(){this.setMap(null),this._deck&&(_(this._deck),this._deck=null)},e._createOverlay=function(t){var e=this.props.interleaved,r=google.maps.RenderingType,n=r.VECTOR,i=r.UNINITIALIZED,o=t.getRenderingType();if(o!==i){var a=new(o===n&&google.maps.WebGLOverlayView?google.maps.WebGLOverlayView:google.maps.OverlayView);a instanceof google.maps.WebGLOverlayView?(e?(a.onAdd=A,a.onContextRestored=this._onContextRestored.bind(this),a.onDraw=this._onDrawVectorInterleaved.bind(this)):(a.onAdd=this._onAdd.bind(this),a.onContextRestored=A,a.onDraw=this._onDrawVectorOverlay.bind(this)),a.onContextLost=this._onContextLost.bind(this)):(a.onAdd=this._onAdd.bind(this),a.draw=this._onDrawRaster.bind(this)),a.onRemove=this._onRemove.bind(this),this._overlay=a,this._overlay.setMap(t)}},e._onAdd=function(){this._deck=w(this._map,this._overlay,this._deck,this.props)},e._onContextRestored=function(t){var e=this,r=t.gl;if(this._map&&this._overlay){var n=w(this._map,this._overlay,this._deck,x({gl:r,_customRender:function(){e._overlay&&e._overlay.requestRedraw()}},this.props));this._deck=n;var i=n.animationLoop;i._renderFrame=function(){var t=r.getParameter(r.ARRAY_BUFFER_BINDING);Object(f.o)(r,{},(function(){i.onRender()})),r.bindBuffer(r.ARRAY_BUFFER,t)}}},e._onContextLost=function(){this._deck&&(_(this._deck),this._deck=null)},e._onRemove=function(){var t;null===(t=this._deck)||void 0===t||t.setProps({layerFilter:M})},e._onDrawRaster=function(){if(this._deck&&this._map){var t=this._deck,e=function(t,e){var r=O(t),n=r.width,i=r.height,o=e.getProjection(),a=t.getBounds();if(!a)return{width:n,height:i,left:0,top:0};var s=a.getNorthEast(),c=a.getSouthWest(),u=o.fromLatLngToDivPixel(s),l=o.fromLatLngToDivPixel(c),h=P(o,n/2,i/2),f=new google.maps.LatLng(0,h[0]),p=o.fromLatLngToContainerPixel(f),d=o.fromLatLngToDivPixel(f);if(!(u&&l&&d&&p))return{width:n,height:i,left:0,top:0};var g=Math.round(d.x-p.x),m=d.y-p.y,y=P(o,n/2,0),w=P(o,n/2,i),b=h[1],_=h[0];if(Math.abs(b)>85.05113){b=b>0?85.05113:-85.05113;var k=new google.maps.LatLng(b,_);m+=o.fromLatLngToContainerPixel(k).y-i/2}m=Math.round(m);var j=180*new v.a(y).sub(w).verticalAngle()/Math.PI;j<0&&(j+=360);var L,x=t.getHeading()||0,M=t.getZoom()-1;if(0===j)L=i?(l.y-u.y)/i:1;else if(j===x){var E=new v.a([u.x,u.y]).sub([l.x,l.y]).len(),A=new v.a([n,-i]).len();L=A?E/A:1}return{width:n,height:i,left:g,top:m,zoom:M+=Math.log2(L||1),bearing:j,pitch:t.getTilt(),latitude:b,longitude:_}}(this._map,this._overlay),r=e.width,n=e.height,i=e.left,o=e.top,a=Object(l.a)(e,["width","height","left","top"]),s=t.canvas.parentElement.style;s.left=i+"px",s.top=o+"px";t.setProps({width:r,height:n,viewState:x({altitude:1e4,repeat:!0},a)}),t.redraw()}},e._onDrawVectorInterleaved=function(t){var e=t.gl,r=t.transformer;if(this._deck&&this._map){var n=this._deck;if(n.setProps(x(x({},k(this._map,r)),{},{width:null,height:null})),n.isInitialized){var i=Object(f.f)(e,p.a.FRAMEBUFFER_BINDING);n.setProps({_framebuffer:i}),n.needsRedraw({clearRedrawFlags:!0}),Object(f.n)(e,{viewport:[0,0,e.canvas.width,e.canvas.height],scissor:[0,0,e.canvas.width,e.canvas.height],stencilFunc:[e.ALWAYS,0,255,e.ALWAYS,0,255]}),Object(f.o)(e,E,(function(){n._drawLayers("google-vector",{clearCanvas:!1})}))}}},e._onDrawVectorOverlay=function(t){var e=t.transformer;if(this._deck&&this._map){var r=this._deck;r.setProps(x({},k(this._map,e))),r.redraw()}},t}(),D=r("NtMm"),R=r("+TqB"),S={centimeters:637100880,centimetres:637100880,degrees:6371008.8/111325,feet:20902260.511392,inches:6371008.8*39.37,kilometers:6371.0088,kilometres:6371.0088,meters:6371008.8,metres:6371008.8,miles:3958.761333810546,millimeters:6371008800,millimetres:6371008800,nauticalmiles:6371008.8/1852,radians:1,yards:6371008.8*1.0936};function C(t,e){void 0===e&&(e="kilometers");var r=S[e];if(!r)throw new Error(e+" units is invalid");return t/r}function N(t){return 180*(t%(2*Math.PI))/Math.PI}function F(t){return t%360*Math.PI/180}function G(t,e,r){if(void 0===e&&(e="kilometers"),void 0===r&&(r="kilometers"),!(t>=0))throw new Error("length must be a positive number");return function(t,e){void 0===e&&(e="kilometers");var r=S[e];if(!r)throw new Error(e+" units is invalid");return t*r}(C(t,e),r)}function V(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}var z=function(t,e,r){void 0===r&&(r={});var n=V(t),i=V(e);return i[0]+=i[0]-n[0]>180?-360:n[0]-i[0]>180?360:0,G(function(t,e,r){var n=r=void 0===r?6371008.8:Number(r),i=t[1]*Math.PI/180,o=e[1]*Math.PI/180,a=o-i,s=Math.abs(e[0]-t[0])*Math.PI/180;s>Math.PI&&(s-=2*Math.PI);var c=Math.log(Math.tan(o/2+Math.PI/4)/Math.tan(i/2+Math.PI/4)),u=Math.abs(c)>1e-11?a/c:Math.cos(i);return Math.sqrt(a*a+u*u*s*s)*n}(n,i),"meters",r.units)};function B(t,e){var r=F(t[1]),n=F(e[1]),i=F(e[0]-t[0]);i>Math.PI&&(i-=2*Math.PI),i<-Math.PI&&(i+=2*Math.PI);var o=Math.log(Math.tan(n/2+Math.PI/4)/Math.tan(r/2+Math.PI/4));return(N(Math.atan2(i,o))+360)%360}var U=function(t,e,r){var n;return void 0===r&&(r={}),(n=r.final?B(V(e),V(t)):B(V(t),V(e)))>180?-(360-n):n};function Y(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return W(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var q=function(){function t(t){var e=t.waypoints,r=t.speed,n=void 0===r?10:r,i=t.turnSpeed,o=void 0===i?45:i,a=t.loop,s=void 0!==a&&a;this.keyframes=[],this.speed=n,this.turnSpeed=o,this.loop=s,this.totalTime=0;for(var c,u=Y(e);!(c=u()).done;){var l=c.value;this._moveTo(l)}s&&e.length>2&&(this._moveTo(e[0]),this._turnTo(this.keyframes[0].heading))}var e=t.prototype;return e._moveTo=function(t){if(0!==this.keyframes.length){var e=this.keyframes[this.keyframes.length-1],r=1e3*z(e.point,t,{units:"kilometers"}),n=U(e.point,t);if(!(r<.1)){void 0===e.heading?e.heading=n:this._turnTo(n);var i=r/this.speed;this.keyframes.push({point:t,heading:n,time:this.totalTime+=i})}}else this.keyframes.push({point:t,time:0})},e._turnTo=function(t){var e=this.keyframes[this.keyframes.length-1],r=Math.abs(H(e.heading,t));if(r>0){var n=r/this.turnSpeed;this.keyframes.push({point:e.point,heading:t,time:this.totalTime+=n})}},e.getFrame=function(t){t=this.loop?t%this.totalTime:Math.min(t,this.totalTime);var e=this.keyframes.findIndex((function(e){return e.time>=t})),r=this.keyframes[e-1],n=this.keyframes[e],i=(t-r.time)/(n.time-r.time);return{point:[r.point[0]*(1-i)+n.point[0]*i,r.point[1]*(1-i)+n.point[1]*i],heading:r.heading+H(r.heading,n.heading)*i}},t}();function H(t,e){var r=e-t;return r<-180&&(r+=360),r>180&&(r-=360),r}var J="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYL6uaMX0fvMBNVTYDSnfOjoXEDn9vapY&v=beta",Z="https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/google-3d/trips.json";function X(t){return"undefined"!=typeof google?Promise.resolve():new Promise((function(e){var r=document.createElement("script");r.type="text/javascript",r.src=t,r.onload=e,document.head.appendChild(r)}))}function $(){return($=Object(u.a)(c.a.mark((function t(e,r){var n,i,o,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===r&&(r={tracking:!0,showPaths:!0}),t.next=3,X(J);case 3:return t.next=5,fetch(Z);case 5:return n=t.sent,t.next=8,n.json();case 8:return i=t.sent,o=new google.maps.Map(e,{center:{lng:-95.36403,lat:29.756433},zoom:19,heading:0,tilt:45,isFractionalZoomEnabled:!0,mapId:"6f988384540e17a4",mapTypeControlOptions:{mapTypeIds:["roadmap","terrain"]},streetViewControl:!1}),(a=new T({})).setMap(o),s=K(o,a,i,r),t.abrupt("return",{update:function(t){return Object.assign(r,t)},remove:function(){s(),a.finalize()}});case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function K(t,e,r,n){var i=r.map((function(t){return new q({waypoints:t,loop:!0})})),o=0,a=null;return function r(){o+=.02;var s=i.map((function(t){return t.getFrame(o)}));n.tracking&&t.moveCamera({center:{lat:s[0].point[1],lng:s[0].point[0]},heading:s[0].heading});var c=[n.showPaths&&new R.a({id:"trip-lines",data:i,getPath:function(t){return t.keyframes.map((function(t){return t.point}))},getColor:function(t){return[128*Math.random(),255*Math.random(),255]},jointRounded:!0,opacity:.5,getWidth:.5}),new D.a({id:"truck",data:s,scenegraph:"https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/google-3d/truck.gltf",sizeScale:2,getPosition:function(t){return t.point},getTranslation:[0,0,1],getOrientation:function(t){return[0,180-t.heading,90]},_lighting:"pbr"})];e.setProps({layers:c}),a=requestAnimationFrame(r)}(),function(){return cancelAnimationFrame(a)}}var Q=r("CtqP"),tt=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this)._containerRef=Object(i.createRef)(),e}Object(n.a)(e,t),e.renderInfo=function(t){return o.a.createElement("div",null,o.a.createElement("p",null,"Interleaving 3D layers with Google Maps"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://sketchfab.com/3d-models/low-poly-truck-98826ebd44e2492298ac925461509216"},"Low Poly Truck")," ","model by ",o.a.createElement("a",{href:"https://sketchfab.com/Arifido._"},"Arifido._")," licensed under"," ",o.a.createElement("a",{href:"http://creativecommons.org/licenses/by/4.0/"},"CC-BY-4.0")))};var r=e.prototype;return r.componentDidMount=function(){var t=this,e=this.props.params;(function(t,e){return $.apply(this,arguments)})(this._containerRef.current,{tracking:e.tracking.value,showPaths:e.paths.value}).then((function(e){return t._view=e}))},r.componentWillUnmount=function(){this._view&&this._view.remove()},r.render=function(){var t=this.props.params;return this._view&&this._view.update({tracking:t.tracking.value,showPaths:t.paths.value}),o.a.createElement("div",{ref:this._containerRef,style:{width:"100%",height:"100%"}})},e}(i.Component);tt.title="Animated Truck Routes",tt.code=a.b+"/examples/website/google-3d",tt.parameters={tracking:{displayName:"Camera tracking",type:"checkbox",value:!0},paths:{displayName:"Show paths",type:"checkbox",value:!1}};e.default=Object(Q.a)(tt)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{214:function(e,t,n){__NEXT_REGISTER_PAGE("/about",function(){return e.exports=n(215),{page:e.exports.default}})},215:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var r=n(0),o=n.n(r),u=(n(80),n(51),n(52),n(25));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=n.n(u)()(function(){return n.e(17).then(n.bind(null,112))},{loadableGenerated:{webpack:function(){return[112]},modules:["../components/hello1"]}}),p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,i(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d,null))}}])&&f(n.prototype,r),u&&f(n,u),t}()},221:function(e,t,n){"use strict";var r=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.noSSR=c,t.default=function(e,t){var n=l.default,r={loading:function(e){e.error,e.isLoading;return f.default.createElement(d,null)}};"function"==typeof e.then?r.loader=function(){return e}:"function"==typeof e?r.loader=e:"object"===(0,a.default)(e)&&(r=(0,u.default)({},r,e));r=(0,u.default)({},r,t),e.render&&(r.render=function(t,n){return e.render(n,t)});if(e.modules){n=l.default.Map;var i={},p=e.modules();(0,o.default)(p).forEach(function(e){var t=p[e];"function"!=typeof t.then?i[e]=t:i[e]=function(){return t.then(function(e){return e.default||e})}}),r.loader=i}r.loadableGenerated&&delete(r=(0,u.default)({},r,r.loadableGenerated)).loadableGenerated;if("boolean"==typeof r.ssr){if(!r.ssr)return delete r.ssr,c(n,r);delete r.ssr}return n(r)};var o=r(n(68)),u=r(n(33)),a=r(n(40)),f=r(n(0)),l=r(n(111)),i="undefined"==typeof window;function c(e,t){return delete t.webpack,delete t.modules,i?function(){return f.default.createElement(t.loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}:e(t)}function d(){return f.default.createElement("p",null,"loading...")}},25:function(e,t,n){e.exports=n(221)},80:function(e,t,n){e.exports=n(39)}},[[214,1,17]]]);
// ==UserScript==
// @name            Fuck FuckAdBlock
// @author          Mechazawa
// @namespace       Mechazawa
// @description     Acts like FuckAdBlock.js but always says that no adblock was detected.
// @license         WTFPl
// @version         5
// @include         *
// @run-at          document-start
// @updateURL       https://raw.githubusercontent.com/Mechazawa/FuckFuckAdblock/master/FuckFuckAdBlock.user.js
// @grant           none
// ==/UserScript==
function e(a){a&&this.j(a);var b=this;g.addEventListener("load",function(){setTimeout(function(){!0===b.a.f&&b.check(!1)},1)},!1);b=this;this.debug={set:function(a){f=!!a;return b},get:function(){return f}}}var f=!1;e.prototype={j:function(a,b){if(void 0!==b){var c=a;a={};a[c]=b}for(option in a)this.a[option]=a[option];return this},a:{f:!0,i:!0},b:{c:[]},check:function(){this.h(!1);return!0},g:function(){this.b.c=[]},h:function(a){if(!1===a){a=this.b.c;for(var b=0;b<a.length;b+=
1)if(a[b]instanceof Function)a[b]();!0===this.a.i&&this.g()}return this}};var c=new e,d;for(d in c)Object.defineProperty(c,d,{value:c[d],configurable:!1})

// ==UserScript==
// @name            Fuck FuckAdBlock
// @author          Mechazawa
// @namespace       Mechazawa
// @description     Acts like FuckAdBlock.js but always says that no adblock was detected.
// @license         WTFPl
// @version         7
// @include         *
// @run-at          document-start
// @updateURL       https://raw.githubusercontent.com/Mechazawa/FuckFuckAdblock/master/FuckFuckAdBlock.user.js
// @grant           none
// ==/UserScript==


(function(window) {
    var debug = false;

    var FuckAdBlock = function(options) {
        if(options !== undefined)
            this.setOption(options);

        var self = this;
        window.addEventListener('load', function() {
            setTimeout(function() {
                if(self._options.checkOnLoad === true)
                    self.check(false);
            }, 1);
        }, false);

        // hotfix
        this.debug = {
            set: function(x){ debug = !!x; return self;},
            get: function(){ return debug; }
        };
    };

    FuckAdBlock.prototype = {
        setOption : function(options, value) {
            if(value !== undefined) {
                var key = options;
                options = {};
                options[key] = value;
            }

            for(var option in options)
                this._options[option] = options[option];

            return this;
        },

        _options : {
            checkOnLoad:    true,
            resetOnEnd:     true,
        },

        _var : {
            triggers: []
        },

        check : function(ignore) {
            this.emitEvent(false);
            return true;
        },

        clearEvent : function() {
            this._var.triggers = [];
        },

        emitEvent : function(detected) {
            if(detected === false) {
                var fns = this._var.triggers;
                for (var i = 0; i < fns.length; i += 1) {
                    if (fns[i] instanceof Function) { fns[i](); }
                }
                if(this._options.resetOnEnd === true)
                    this.clearEvent();
            }
            return this;
        },

        on : function(detected, fn) {
            if(detected === false)
                this._var.triggers.push(fn);
            return this;
        },

        onDetected : function(fn) {
            return this;
        },

        onNotDetected : function(fn) {
            return this.on(false, fn);
        }
    };

    var fuck = new FuckAdBlock();
    for (var field in fuck) {
        Object.defineProperty(fuck, field, {value: fuck[field], configurable: false});
    }
    Object.defineProperties(window, {fuckAdBlock : { value: fuck, enumerable: true, writable: false }});
    Object.defineProperties(window, {blockAdBlock : { value: fuck, enumerable: true, writable: false }});
    Object.defineProperties(window, {sniffAdBlock : { value: fuck, enumerable: true, writable: false }});
    Object.defineProperties(window, {duckAdBlock : { value: fuck, enumerable: true, writable: false }}); 
    Object.defineProperties(window, {FuckFuckFuckAdBlock : { value: fuck, enumerable: true, writable: false }});
})(window);

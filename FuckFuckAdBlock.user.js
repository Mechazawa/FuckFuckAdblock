// ==UserScript==
// @name            Fuck FuckAdBlock
// @author          Mechazawa
// @namespace       Mechazawa
// @description     Acts like FuckAdBlock.js but always says that no adblock was detected.
// @license         WTFPl
// @version         1
// @include         *
// @run-at          document-start
// @updateURL       https://raw.githubusercontent.com/Mechazawa/FuckFuckAdblock/master/FuckFuckAdBlock.user.js
// @grant none
// ==/UserScript==


(function(window) {
    var FuckAdBlock = function(options) {
        if(options !== undefined) 
            this.setOption(options)

        var self = this;
        window.addEventListener('load', function(){
            setTimeout(function(){
                if(self._options.checkOnLoad === true) {
                    self.check(false);
                }
            }, 1);
        }, false);
    }

    FuckAdBlock.prototype.setOption = function(options, value) {
        if(value !== undefined) {
            var key = options;
            options = {};
            options[key] = value;
        }
        for(option in options)
            this._options[option] = options[option];
        return this;
    };

    FuckAdBlock.prototype._options = {
        checkOnLoad:    true,
        resetOnEnd:     true,
    };

    FuckAdBlock.prototype._var = {
        event:  {
            notDetected: []
        }   
    };

    FuckAdBlock.prototype.check = function(ignore) {
        this.emitEvent(false);
        return true;
    }

    FuckAdBlock.prototype.clearEvent = function() {
        this._var.event.notDetected = [];
    };

    FuckAdBlock.prototype.emitEvent = function(detected) {
        if(detected === false) {
            var fns = this._var.event.notDetected;
            for(i in fns)
                fns[i]();

            if(this._options.resetOnEnd === true)
                this.clearEvent();
        }
        return this;
    }
    var addTrigger = function(detected, fn) {
        if(detected === false)
            this._var.event.notDetected.push(fn);
        return this;
    };
    FuckAdBlock.prototype.on = addTrigger;
    FuckAdBlock.prototype.add = addTrigger; // I saw a site using .add for some reason. It's not defined in the official script but better safe then sorry.

    FuckAdBlock.prototype.onDetected = function(fn) {
        return this;
    };

    FuckAdBlock.prototype.onNotDetected = function(fn) {
        return this.on(false, fn);
    };

    window.fuckAdBlock = new FuckAdBlock();
})(window);

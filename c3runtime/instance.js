"use strict";

{
    globalThis.C3.Plugins.Massive_Cube_MathJS.Instance = class MathJSInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();
            if (properties) { }

            this.mathjs = window["math"];

            this.matheval = function (str) {
                return this.mathjs["eval"](str.toString());
            }

            this.mathrnd = function (num, dgt) {
                return this.mathjs["round"](num, dgt);
            }

            this.mathder = function (st1, st2) {
                return this.mathjs["derivative"](st1, st2);
            }

            this.mathformat = function (val, type) {
                var obji = {};
                obji["fraction"] = type.toString();

                return this.mathjs["format"](val, obji);
            }

            this.mtFrac = function (frac) {
                return this.mathjs["fraction"](frac);
            }
        }

        _release() { super._release(); }
        _saveToJson() { return {}; }
        _loadFromJson(o) { }
    };
}
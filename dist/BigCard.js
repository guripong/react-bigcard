"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
require("./BigCard.css");
var BigCard = (0, react_2.forwardRef)(function (_a, ref) {
    var title = _a.title, style = _a.style, hide = _a.hide, props = __rest(_a, ["title", "style", "hide"]);
    var _b = (0, react_2.useState)(function () { return hide || false; }), hidden = _b[0], setHidden = _b[1];
    return (react_1.default.createElement("div", { className: "BigCard", ref: ref },
        react_1.default.createElement("div", { className: "defaultStyle", style: __assign({}, style) },
            react_1.default.createElement("div", { className: "hidecontents", onClick: function () {
                    setHidden(!hidden);
                } },
                react_1.default.createElement("svg", { className: "arrow", style: { transform: hidden ? "rotate(180deg)" : "" }, version: "1.1", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "currentColor", viewBox: "0 0 284.929 284.929", xmlSpace: "preserve" },
                    react_1.default.createElement("g", null,
                        react_1.default.createElement("path", { d: "M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441\r\n                            L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082\r\n                            c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647\r\n                            c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" })))),
            title && react_1.default.createElement("div", { className: "titleWrap" }, title()),
            react_1.default.createElement("div", { className: "childrenWrap", style: { display: hidden ? "none" : "block" } }, props.children))));
});
exports.default = BigCard;

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var sha512_1 = require("crypto-js/sha512");
var react_in_viewport_1 = require("react-in-viewport");
var CircularProgressSkill_module_css_1 = require("./CircularProgressSkill.module.css");
require("aos/dist/aos.css");
var CircularProgressSkill = function (_a) {
    var skillName = _a.skillName, percentage = _a.percentage, imp = _a.imp;
    var ref = react_1.useRef();
    var inViewport = react_in_viewport_1.useInViewport(ref, {}, { disconnectOnLeave: false }, {}).inViewport;
    var hashedItem = sha512_1["default"](skillName);
    var strokeColor = "#";
    for (var index = 0; index < 6; index++) {
        var element = hashedItem.words[index];
        var newIndex = Math.abs(element % 16);
        strokeColor = strokeColor.concat(newIndex.toString(16));
    }
    var containerClassName = [CircularProgressSkill_module_css_1["default"].circularProgressSkillsElement];
    if (imp) {
        containerClassName.push(CircularProgressSkill_module_css_1["default"].circularProgressSkillsElementImportant);
    }
    return (react_1["default"].createElement("div", { className: containerClassName.join(" "), ref: ref, "data-aos": "fade-up" },
        react_1["default"].createElement("h2", null, skillName),
        react_1["default"].createElement("div", { className: CircularProgressSkill_module_css_1["default"].singleChart },
            react_1["default"].createElement("svg", { viewBox: "0 0 36 36", className: [CircularProgressSkill_module_css_1["default"].circularChart].join(" "), style: { stroke: strokeColor } },
                react_1["default"].createElement("path", { className: CircularProgressSkill_module_css_1["default"].circleBg, d: "M18 2.0845\r\n            a 15.9155 15.9155 0 0 1 0 31.831\r\n            a 15.9155 15.9155 0 0 1 0 -31.831" }),
                react_1["default"].createElement("path", { className: [
                        CircularProgressSkill_module_css_1["default"].circle,
                        inViewport ? CircularProgressSkill_module_css_1["default"].animateProgress : "",
                    ].join(" "), "stroke-dasharray": percentage + ",100", d: "M18 2.0845\r\n            a 15.9155 15.9155 0 0 1 0 31.831\r\n            a 15.9155 15.9155 0 0 1 0 -31.831" }),
                react_1["default"].createElement("text", { x: "18", y: "20.35", className: CircularProgressSkill_module_css_1["default"].percentage, style: { fill: strokeColor } },
                    percentage,
                    "%")))));
};
exports["default"] = CircularProgressSkill;

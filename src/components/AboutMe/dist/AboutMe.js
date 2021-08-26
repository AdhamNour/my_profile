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
exports.__esModule = true;
var react_1 = require("react");
var PieceOfPersonalInfromation_1 = require("./PieceOfPersonalInformation/PieceOfPersonalInfromation");
var AboutMe_module_css_1 = require("./AboutMe.module.css");
var aos_1 = require("aos");
require("aos/dist/aos.css");
var AboutMe = function () {
    react_1.useEffect(function () {
        aos_1["default"].init({ duration: 2000 });
    });
    var myPersonalInformation = [
        { title: "Full Name", detail: "Adham Nour El-Waffaa" },
        // { title: "Phone Number", detail: "+20 1100 998 730" },
        // { title: "Email", detail: "adhamnourelwaffaa@gmail.com" },
        { title: "Website", detail: "https://anprofile.herokuapp.com/" },
    ];
    var myPersonalInformationUI = myPersonalInformation.map(function (pieceofPersonalInformation, index) { return (react_1["default"].createElement(PieceOfPersonalInfromation_1["default"], __assign({}, pieceofPersonalInformation, { key: index }))); });
    return (react_1["default"].createElement("div", { className: AboutMe_module_css_1["default"].AboutMeContainer, id: "AboutMe" },
        react_1["default"].createElement("h1", { "data-aos": "fade-zoom-in" }, "About Me"),
        react_1["default"].createElement("div", { className: AboutMe_module_css_1["default"].Details },
            react_1["default"].createElement("div", { "data-aos": "fade-left", className: AboutMe_module_css_1["default"].PersonalInformation }, myPersonalInformationUI),
            react_1["default"].createElement("div", { "data-aos": "fade-right", className: AboutMe_module_css_1["default"].BriefIntroduction },
                react_1["default"].createElement("h2", null, "Hello There!"),
                react_1["default"].createElement("p", null, "My Name is Adham Nour El-Waffaa,Graduated from Faculty of Engineering Ain Shams University, Computers and Systems Department, Experienced in Mobile development using both Flutter and React Native Frameworks, and Frontend Development using HTML5, CSS3, JavaScript in addition to React as a framework")))));
};
exports["default"] = AboutMe;

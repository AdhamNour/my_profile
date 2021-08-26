"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Skills_module_css_1 = require("./Skills.module.css");
var aos_1 = require("aos");
require("aos/dist/aos.css");
var CircularPorgressSkill_1 = require("./CircularProgressSkill/CircularPorgressSkill");
var axiosInstance_1 = require("../../utils/axiosInstance");
var Skills = function () {
    react_1.useEffect(function () {
        aos_1["default"].init({ duration: 500 });
    }, []);
    react_1.useEffect(function () {
        axiosInstance_1["default"].get("/skills").then(function (res) { return console.log(res.data.skills); });
    }, []);
    var skills = [
        { skillName: "HTML5", precentage: 90, imp: "true" },
        { skillName: "CSS3", precentage: 90, imp: "true" },
        { skillName: "Javascript/Typescript", precentage: 90, imp: "true" },
        { skillName: "Flutter", precentage: 95, imp: "true" },
        { skillName: "React", precentage: 95, imp: "true" },
        { skillName: "React Native", precentage: 95, imp: "true" },
        { skillName: "MySQL/SQLite", precentage: 95, imp: "true" },
        { skillName: "SCSS", precentage: 90, imp: "true" },
        { skillName: "Python", precentage: 70 },
        { skillName: "C++", precentage: 75 },
        { skillName: "Native Android", precentage: 75 },
        { skillName: "Java", precentage: 80 },
        { skillName: "NodeJS", precentage: 80 },
        { skillName: "Unity", precentage: 65 },
    ];
    var SkillsUI = skills.map(function (skill, index) { return (react_1["default"].createElement(CircularPorgressSkill_1["default"], { skillName: skill.skillName, percentage: skill.precentage, imp: skill.imp, key: index })); });
    return (react_1["default"].createElement("div", { className: Skills_module_css_1["default"].skillsContainer, id: "Skills", "data-aos": "fade-zoom-in" },
        react_1["default"].createElement("h1", null, "My Skills"),
        react_1["default"].createElement("div", { className: Skills_module_css_1["default"].circularProgressSkillsContainer }, SkillsUI)));
};
exports["default"] = Skills;

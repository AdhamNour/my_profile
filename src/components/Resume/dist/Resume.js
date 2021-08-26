"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lab_1 = require("@material-ui/lab");
var TimelineOppositeContent_1 = require("@material-ui/lab/TimelineOppositeContent");
var core_1 = require("@material-ui/core");
var fc_1 = require("react-icons/fc");
var fa_1 = require("react-icons/fa");
var si_1 = require("react-icons/si");
var aos_1 = require("aos");
require("aos/dist/aos.css");
var Resume_module_css_1 = require("./Resume.module.css");
var Resume = function () {
    var myEducation = [
        {
            title: "Graduated from High School",
            date: "2016",
            Description: "Graduated from Mostafa Kamel High School with result of 95%",
            icon: (react_1["default"].createElement(core_1.Icon, { fontSize: "large" },
                react_1["default"].createElement(fc_1.FcGraduationCap, null)))
        },
        {
            title: "Faculty of Engineering, Ain Shams University",
            date: "2016",
            Description: "Applied and Accepted in Faculty of Engineering, Ain Shams University",
            icon: (react_1["default"].createElement(core_1.Icon, { fontSize: "medium", color: "action" },
                react_1["default"].createElement(fa_1.FaUniversity, null)))
        },
        {
            title: (react_1["default"].createElement("a", { href: "https://coursera.org/share/d35ee1021741f6ea702eeeec57ff63fc", target: "_blank", rel: "noreferrer" }, "Software Design and Architecture")),
            date: "Jul20,2020",
            Description: (react_1["default"].createElement("p", null,
                "Finished Software Design and Architecture Specification in Coursera, this specialization inculdes",
                react_1["default"].createElement("ol", { className: Resume_module_css_1["default"].specializationCourses },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "https://coursera.org/share/1ee5e0c630f81b145f89f933f75e61a5", target: "_blank", rel: "noreferrer" }, "Object-Oriented Design")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "https://coursera.org/share/e94f9587919813ed5a33ee90a5dc1e6c", target: "_blank", rel: "noreferrer" }, "Design Patterns")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "https://coursera.org/share/5fb87ec4add07ef86a3064d3369a04e0", target: "_blank", rel: "noreferrer" }, "Software Architecture")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "https://coursera.org/share/478ed65d8df8371f88b262f0185fc57c", target: "_blank", rel: "noreferrer" }, "Service Oriented Architecture"))))),
            icon: (react_1["default"].createElement(core_1.Icon, { fontSize: "large", color: "action" },
                react_1["default"].createElement(si_1.SiCoursera, null)))
        },
        {
            title: (react_1["default"].createElement("a", { href: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/", target: "_blank", rel: "noreferrer" }, "Flutter & Dart - The Complete Guide")),
            date: "2020",
            Description: (react_1["default"].createElement("p", null, "Studied the Flutter Course that is designed by Maximilian Schwarzm\u00FCller and built many applications")),
            icon: (react_1["default"].createElement(core_1.Icon, { fontSize: "large", color: "action" },
                react_1["default"].createElement(si_1.SiUdemy, null)))
        },
        {
            title: (react_1["default"].createElement("a", { href: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/", target: "_blank", rel: "noreferrer" }, "React Native - The Practical Guide [2021 Edition]")),
            date: "2021",
            Description: (react_1["default"].createElement("p", null, "Studied the React Native Course that is designed by Maximilian Schwarzm\u00FCller and built many applications")),
            icon: (react_1["default"].createElement(core_1.Icon, { fontSize: "large", color: "action" },
                react_1["default"].createElement(si_1.SiUdemy, null)))
        },
        {
            title: (react_1["default"].createElement("a", { href: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/", target: "_blank", rel: "noreferrer" }, "React - The Complete Guide (incl Hooks, React Router, Redux)")),
            date: "2021",
            Description: (react_1["default"].createElement("p", null, "Studied the React Course that is designed by Maximilian Schwarzm\u00FCller and built many applications")),
            icon: (react_1["default"].createElement(core_1.Icon, { fontSize: "large", color: "action" },
                react_1["default"].createElement(si_1.SiUdemy, null)))
        },
        {
            title: (react_1["default"].createElement("a", { href: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/", target: "_blank", rel: "noreferrer" }, "Modern HTML & CSS From The Beginning (Including Sass)")),
            date: "2021",
            Description: (react_1["default"].createElement("p", null, "Studied the HTML Course that is designed by Brad Traversy and built many applications")),
            icon: (react_1["default"].createElement(core_1.Icon, { fontSize: "large", color: "action" },
                react_1["default"].createElement(si_1.SiUdemy, null)))
        },
        {
            title: "Graduated from Faculty of Engineering, Ain Shams University",
            date: "2021",
            Description: (react_1["default"].createElement("p", null,
                "Graduated from Faculty of Engineering, Ain Shams University Computers and Systems Department with result of General Grade",
                " ",
                react_1["default"].createElement("span", null, "Very Good"),
                ", Project Grade ",
                react_1["default"].createElement("span", null, "Excellent"))),
            icon: (react_1["default"].createElement(core_1.Icon, { fontSize: "large" },
                react_1["default"].createElement(fc_1.FcGraduationCap, null)))
        },
    ];
    var myEducationUI = [];
    for (var index = 0; index < myEducation.length; index++) {
        var element = myEducation[index];
        var Connector = null;
        Connector = react_1["default"].createElement(lab_1.TimelineConnector, null);
        if (index === myEducation.length - 1) {
            Connector = null;
        }
        var elementUI = (react_1["default"].createElement(lab_1.TimelineItem, { key: index, "data-aos": "fade-up" },
            react_1["default"].createElement(TimelineOppositeContent_1["default"], null, element.date),
            react_1["default"].createElement(lab_1.TimelineSeparator, null,
                react_1["default"].createElement(lab_1.TimelineDot, null, element.icon),
                Connector),
            react_1["default"].createElement(lab_1.TimelineContent, null,
                react_1["default"].createElement(core_1.Paper, { elevation: 3, className: Resume_module_css_1["default"].paper },
                    react_1["default"].createElement(core_1.Typography, { variant: "h6", component: "h1" }, element.title),
                    react_1["default"].createElement(core_1.Typography, null, element.Description)))));
        myEducationUI.push(elementUI);
    }
    react_1.useEffect(function () {
        aos_1["default"].init({ duration: 2000 });
    }, []);
    return (react_1["default"].createElement("div", { id: "Education", className: Resume_module_css_1["default"].ResumeContainer },
        react_1["default"].createElement("h1", { "data-aos": "fade-zoom-in" }, "My Education"),
        react_1["default"].createElement(lab_1.Timeline, { align: window.screen.width > 450 ? "alternate" : "left" }, myEducationUI)));
};
exports["default"] = Resume;

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ProjectItem_module_css_1 = require("./ProjectItem.module.css");
var ai_1 = require("react-icons/ai");
require("aos/dist/aos.css");
var phone_jpg_1 = require("../../../assets/images/phone.jpg");
var ProjectItem = function (_a) {
    var _b, _c, _d, _e, _f;
    var project = _a.project;
    var _g = react_1.useState({
        display: "block"
    }), imageState = _g[0], setImageState = _g[1];
    var isHovering = react_1.useRef(false);
    return (react_1["default"].createElement("div", { className: [
            ProjectItem_module_css_1["default"].ProjectItemContainer,
            project.imp ? ProjectItem_module_css_1["default"].ProjectItemContainerImportant : "",
        ].join(" "), "data-aos": "fade-up" },
        react_1["default"].createElement("div", { className: ProjectItem_module_css_1["default"].ProjectItemContainerInner, onMouseEnter: function (e) {
                isHovering.current = true;
                setTimeout(function () {
                    if (isHovering.current)
                        setImageState({ display: "none" });
                }, 500);
            }, onMouseLeave: function (e) {
                isHovering.current = false;
                setImageState({ display: "block" });
            } },
            react_1["default"].createElement("div", { className: ProjectItem_module_css_1["default"].ProjectItemContainerInnerFront, style: { backgroundColor: "rgba(255,255,255,0.3)" } },
                react_1["default"].createElement("img", { src: project.pic ? project.pic : phone_jpg_1["default"], alt: "", style: imageState }),
                react_1["default"].createElement("h1", null, project.title),
                react_1["default"].createElement("h3", null, project.type)),
            react_1["default"].createElement("div", { className: ProjectItem_module_css_1["default"].ProjectItemContainerInnerBack },
                react_1["default"].createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column" } },
                    react_1["default"].createElement("h2", null, project.title),
                    react_1["default"].createElement("h5", null, project.type),
                    react_1["default"].createElement("ul", null, (_b = project.description) === null || _b === void 0 ? void 0 : _b.map(function (d, i) {
                        return react_1["default"].createElement("li", { key: i }, d);
                    }))),
                react_1["default"].createElement("div", { className: ProjectItem_module_css_1["default"].AccessContianer },
                    ((_c = project.links) === null || _c === void 0 ? void 0 : _c.github) ? (react_1["default"].createElement("a", { className: ProjectItem_module_css_1["default"].github, href: project.links.github, target: "_blank", rel: "noreferrer" },
                        react_1["default"].createElement(ai_1.AiFillGithub, { fontSize: "40" }))) : null,
                    ((_d = project.links) === null || _d === void 0 ? void 0 : _d.youtube) ? (react_1["default"].createElement("a", { className: ProjectItem_module_css_1["default"].youtube, href: project.links.youtube, target: "_blank", rel: "noreferrer" },
                        react_1["default"].createElement(ai_1.AiFillYoutube, { fontSize: "40" }))) : null,
                    ((_e = project.links) === null || _e === void 0 ? void 0 : _e.download) ? (react_1["default"].createElement("a", { className: ProjectItem_module_css_1["default"].download, href: project.links.download, target: "_blank", rel: "noreferrer" },
                        react_1["default"].createElement(ai_1.AiOutlineDownload, { fontSize: "40" }))) : null,
                    ((_f = project.links) === null || _f === void 0 ? void 0 : _f.visit) ? (react_1["default"].createElement("a", { className: ProjectItem_module_css_1["default"].visit, href: project.links.visit, target: "_blank", rel: "noreferrer" },
                        react_1["default"].createElement(ai_1.AiOutlineRight, { fontSize: "40" }))) : null)))));
};
exports["default"] = ProjectItem;

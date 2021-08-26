"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var axiosInstance = axios_1["default"].create({ baseURL: "http://localhost:3500/api" });
exports["default"] = axiosInstance;

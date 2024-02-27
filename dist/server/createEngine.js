"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEngine = void 0;
var react_1 = __importDefault(require("react"));
var server_1 = __importDefault(require("react-dom/server"));
var createEngine = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.doctype, doctype = _c === void 0 ? '<!doctype html>' : _c;
    return function (path, options, callback) {
        try {
            var Component = require(path).default;
            var markUp = server_1.default.renderToStaticMarkup(react_1.default.createElement(Component, options));
            return callback(null, doctype + markUp);
        }
        catch (error) {
            return callback(error, '');
        }
    };
};
exports.createEngine = createEngine;

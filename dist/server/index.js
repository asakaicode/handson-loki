"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var createEngine_1 = require("./createEngine");
var logger_1 = __importDefault(require("../src/utils/logger"));
process.on('unhandledRejection', function (reason, p) {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});
void (function () {
    var app = (0, express_1.default)();
    // set app
    var isTsNodeDev = Object.keys(require.cache).some(function (key) {
        return key.includes('ts-node-dev');
    });
    var ext = isTsNodeDev ? 'tsx' : 'js';
    var splitPath = __dirname.split('/');
    splitPath.pop();
    var pathOfPages = splitPath.join('/') + '/pages';
    app.set('views', pathOfPages);
    app.set('view engine', ext);
    app.engine(ext, (0, createEngine_1.createEngine)());
    app.get('/', function (_, res) {
        res.render('index');
    });
    app.get('/hello', function (_, res) {
        logger_1.default.info('Hello from curl!!');
        res.send('Hello World');
    });
    app.listen(3021, function () {
        console.log('> Ready on http://localhost:3021');
    });
})();

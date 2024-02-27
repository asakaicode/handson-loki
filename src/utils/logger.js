"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var winston_loki_1 = __importDefault(require("winston-loki"));
var options = {
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    format: winston_1.format.combine(winston_1.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }), winston_1.format.errors({ stack: true }), winston_1.format.splat(), winston_1.format.json()),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston_loki_1.default({
            host: 'http://localhost:3100'
        })
    ]
};
var logger = (0, winston_1.createLogger)(options);
exports.default = logger;

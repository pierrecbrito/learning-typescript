"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
const variable_js_1 = require("./variable.js");
console.log(variable_js_1.x); // 10

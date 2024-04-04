"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEnvFile = void 0;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
function parseEnvFile() {
    var filePath = path.resolve(process.cwd(), '.env');
    var data = fs.readFileSync(filePath, 'utf8');
    var env = {};
    var currentSection = null;
    data.split('\n').forEach(function (line) {
        if (line.startsWith('##')) {
            var sectionHeader = line.substring(2).trim();
            // Check if the section header is a valid section
            if (sectionHeader) {
                currentSection = sectionHeader;
                // Initialize the section in env if it doesn't exist.
                env[currentSection] = env[currentSection] || {};
            }
        }
        else {
            var trimmedLine = line.trim();
            if (trimmedLine && currentSection) {
                var _a = trimmedLine.split('='), key = _a[0], value = _a[1];
                if (key && value) {
                    // Add the key-value pair to the current section in env.
                    env[currentSection][key.trim()] = value.trim();
                }
            }
        }
    });
    return env;
}
exports.parseEnvFile = parseEnvFile;

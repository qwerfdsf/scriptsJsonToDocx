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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Api = void 0;
var common_1 = require("@nestjs/common");
var axios_1 = require("axios");
/**
 * Класс Api для создания Axios экземпляра для доступа к микро сервисам.
 */
var Api = /** @class */ (function () {
    function Api(baseURL) {
        this.serviceResponse = function (response) {
            var responseData = __assign({}, response.data);
            var message = responseData.message;
            delete responseData.message;
            return __assign({ message: message }, responseData);
        };
        this.instance = axios_1["default"].create({
            baseURL: baseURL,
            timeout: 15000,
            responseType: 'json'
        });
    }
    Api.prototype.get = function (url, config) {
        var _a;
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.instance.get(url, config)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, this.serviceResponse(response)];
                    case 2:
                        e_1 = _b.sent();
                        throw new common_1.HttpException(__assign({}, (_a = e_1 === null || e_1 === void 0 ? void 0 : e_1.response) === null || _a === void 0 ? void 0 : _a.data), e_1.response.status);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.post = function (url, data, config) {
        var _a;
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.instance.post(url, data, config)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, this.serviceResponse(response)];
                    case 2:
                        e_2 = _b.sent();
                        throw new common_1.HttpException(__assign({}, (_a = e_2 === null || e_2 === void 0 ? void 0 : e_2.response) === null || _a === void 0 ? void 0 : _a.data), e_2.response.status);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype["delete"] = function (url, config) {
        var _a;
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.instance["delete"](url, config)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, this.serviceResponse(response)];
                    case 2:
                        e_3 = _b.sent();
                        throw new common_1.HttpException(__assign({}, (_a = e_3 === null || e_3 === void 0 ? void 0 : e_3.response) === null || _a === void 0 ? void 0 : _a.data), e_3.response.status);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.patch = function (url, data, config) {
        var _a;
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response, e_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.instance.patch(url, data, config)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, this.serviceResponse(response)];
                    case 2:
                        e_4 = _b.sent();
                        throw new common_1.HttpException(__assign({}, (_a = e_4 === null || e_4 === void 0 ? void 0 : e_4.response) === null || _a === void 0 ? void 0 : _a.data), e_4.response.status);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.put = function (url, data, config) {
        var _a;
        if (data === void 0) { data = {}; }
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response, e_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.instance.put(url, data, config)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, this.serviceResponse(response)];
                    case 2:
                        e_5 = _b.sent();
                        throw new common_1.HttpException(__assign({}, (_a = e_5 === null || e_5 === void 0 ? void 0 : e_5.response) === null || _a === void 0 ? void 0 : _a.data), e_5.response.status);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Api;
}());
exports.Api = Api;

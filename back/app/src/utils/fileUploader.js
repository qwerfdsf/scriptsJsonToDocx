"use strict";
exports.__esModule = true;
exports.editFileName = exports.imageFileFilter = void 0;
var path_1 = require("path");
// Разрешить только изображения
var imageFileFilter = function (req, file, callback) {
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
var editFileName = function (req, file, callback) {
    var fileExtName = (0, path_1.extname)(file.originalname);
    callback(null, 'Test.json');
};
exports.editFileName = editFileName;

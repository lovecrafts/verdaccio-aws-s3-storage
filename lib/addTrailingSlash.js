"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = path => {
  return path != null ? path.endsWith('/') ? path : `${path}/` : '';
};

exports.default = _default;
//# sourceMappingURL=addTrailingSlash.js.map
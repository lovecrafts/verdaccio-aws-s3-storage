"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = configValue => {
  const envValue = process.env[configValue];
  return envValue || configValue;
};

exports.default = _default;
//# sourceMappingURL=setConfigValue.js.map
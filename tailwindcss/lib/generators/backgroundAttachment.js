'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _defineClasses2.default)({
    'bg-fixed': { 'background-attachment': 'fixed' },
    'bg-local': { 'background-attachment': 'local' },
    'bg-scroll': { 'background-attachment': 'scroll' }
  });
};

var _defineClasses = require('../util/defineClasses');

var _defineClasses2 = _interopRequireDefault(_defineClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
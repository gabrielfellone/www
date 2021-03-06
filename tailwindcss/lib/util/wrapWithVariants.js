'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapWithVariants;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _cloneNodes = require('./cloneNodes');

var _cloneNodes2 = _interopRequireDefault(_cloneNodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapWithVariants(rules, variants) {
  return _postcss2.default.atRule({
    name: 'variants',
    params: variants.join(', ')
  }).append((0, _cloneNodes2.default)(_lodash2.default.isArray(rules) ? rules : [rules]));
}
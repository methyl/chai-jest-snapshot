"use strict";

var _buildMatchSnapshot = require("./buildMatchSnapshot");

var _buildMatchSnapshot2 = _interopRequireDefault(_buildMatchSnapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (chai, utils) {
  chai.Assertion.addMethod("matchSnapshot", (0, _buildMatchSnapshot2.default)(utils));
};
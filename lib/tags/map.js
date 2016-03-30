/**
 * @file rule for the <map> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'map',

    getCategories: function (element) {
        return ['flow content', 'phrasing content', 'palpable content'];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - phrasing content
        return result;
    },

    validateContent: function (element, result) {
        // transparent
        var rule = element.parentElement && util.getRule(element.parentElement);
        if (rule) {
            result = rule.validateContent(element, result);
        }

        return result;
    }
};

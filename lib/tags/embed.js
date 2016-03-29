/**
 * @file rule for the <embed> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'embed',

    getCategories: function (element) {
        return ['flow content', 'phrasing content', 'embedded content', 'interactive content', 'palpable content'];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - embedded content
        return result;
    },

    validateContent: function (element, result) {
        var children = element.children;
        // empty
        if (element.childNodes.length) {
            result.push({expect: 'empty'});
        }

        return result;
    }
};

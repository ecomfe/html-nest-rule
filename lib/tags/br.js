/**
 * @file rule for the <br> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'br',

    getCategories: function (element) {
        return ['flow content', 'phrasing content'];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - phrasing content
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

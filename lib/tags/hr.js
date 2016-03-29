/**
 * @file rule for the <hr> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'hr',

    getCategories: function (element) {
        return ['flow content'];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - flow content
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

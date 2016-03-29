/**
 * @file rule for the <img> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'img',

    getCategories: function (element) {
        var categories = ['flow content', 'phrasing content', 'embedded content', 'form-associated element', 'palpable content'];

        // if the element has a usemap attribute: interactive content
        if (element.hasAttribute('usemap')) {
            categories.push('interactive content');
        }

        return categories;
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

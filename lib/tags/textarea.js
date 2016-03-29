/**
 * @file rule for the <textarea> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'textarea',

    getCategories: function (element) {
        return ['flow content', 'phrasing content', 'interactive content', 'listed, labelable, submittable, resettable, and reassociateable form-associated element', 'palpable content'];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - phrasing content
        return result;
    },

    validateContent: function (element, result) {
        var children = element.children;

        // text
        if (children.length) {
            result.push({expect: 'text'});
        }

        return result;
    }
};
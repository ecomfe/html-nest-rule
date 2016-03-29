/**
 * @file rule for the <input> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'input',

    getCategories: function (element) {
        var categories = ['flow content', 'phrasing content'];

        // if the type attribute is in the hidden state: listed, submittable, resettable, and reassociateable form-associated element
        if (element.getAttribute('type') === 'hidden') {
            categories.push('listed, submittable, resettable, and reassociateable form-associated element');
        }
        // if the type attribute is not in the hidden state: interactive content
        // if the type attribute is not in the hidden state: listed, labelable, submittable, resettable, and reassociateable form-associated element
        // if the type attribute is not in the hidden state: palpable content
        else {
            categories.push('interactive content');
            categories.push('listed, labelable, submittable, resettable, and reassociateable form-associated element');
            categories.push('palpable content');
        }

        return categories;
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

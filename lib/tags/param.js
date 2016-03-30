/**
 * @file rule for the <param> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'param',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element, result) {
        // context: raw - as a child of an object element, before any flow content
        if (element.parentElement) {
            // as a child of an object element
            if (util.isNotTag('object', element.parentElement)) {
                result.push({
                    expect: 'as a child of an object element',
                    got: element.parentElement.tagName.toLowerCase(),
                    target: element
                });
            }

            // before any flow content
            for (var prev = element; prev = prev.previousElementSibling;) {
                if (util.isCategory('flow content', prev)) {
                    result.push({
                        expect: 'before any flow content',
                        target: element
                    });
                }
            }
        }

        return result;
    },

    validateContent: function (element, result) {
        // empty
        if (element.childNodes.length) {
            result.push({expect: 'empty'});
        }

        return result;
    }
};

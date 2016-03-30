/**
 * @file rule for the <track> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');
var define = require('../define');

module.exports = {

    tagName: 'track',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element, result) {
        // context: raw - as a child of a media element, before any flow content
        if (element.parentElement) {
            // as a child of an media element
            if (define.isNot('media element', element.parentElement)) {
                result.push({
                    expect: 'as a child of an media element',
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

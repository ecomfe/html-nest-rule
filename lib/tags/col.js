/**
 * @file rule for the <col> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'col',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element, result) {
        // context: raw - as a child of a colgroup element that doesn't have a span attribute
        if (
            element.parentElement
            && (
                util.isNotTag('colgroup', element.parentElement)
                || element.parentElement.hasAttribute('span')
            )
        ) {
            result.push({
                expect: 'as a child of a colgroup element that doesn\'t have a span attribute',
                got: element.parentElement.tagName.toLowerCase(),
                target: element
            });
        }

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

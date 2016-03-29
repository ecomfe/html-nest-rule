/**
 * @file rule for the <figcaption> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'figcaption',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element, result) {
        // context: raw - as the first or last child of a figure element
        if (element.parentElement) {
            if (util.isNotTag('figure', element.parentElement)) {
                result.push({
                    expect: 'as the first or last child of a figure element',
                    got: element.parentElement.tagName.toLowerCase(),
                    target: element
                });
            }

            if (
                element !== element.parentElement.firstElementChild
                && element !== element.parentElement.lastElementChild
            ) {
                result.push({
                    expect: 'as the first or last child of a figure element',
                    target: element
                });
            }
        }

        return result;
    },

    validateContent: function (element, result) {
        var children = element.children;

        // is flow content
        result = result.concat(util.validateCategory('flow content', children));

        return result;
    }
};
/**
 * @file rule for the <address> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'address',

    getCategories: function (element) {
        return ['flow content', 'palpable content'];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - flow content
        return result;
    },

    validateContent: function (element, result) {
        var children = element.children;

        // content: raw - flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants

        // flow content
        result = result.concat(util.validateCategory('flow content', children));

        // but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants
        util.walkDescendants(element, function (descendant) {
            // no heading content descendants, no sectioning content descendants
            var categories = util.getCategories(descendant);
            if (
                categories.indexOf('heading content') >= 0
                || categories.indexOf('sectioning content') >= 0
            ) {
                result.push({
                    expect: 'with no heading content descendants, no sectioning content descendants',
                    got: util.nodeCategoriesInfo(descendant),
                    target: descendant
                });
            }

            // no header, footer, or address element descendants
            if (util.isTag('header|footer|address', descendant)) {
                result.push({
                    expect: 'with no header, footer, or address element descendants',
                    got: util.nodeInfo(descendant),
                    target: descendant
                });
            }
        });

        return result;
    }
};

/**
 * @file rule for the <a> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'a',

    getCategories: function (element) {
        return ['flow content', 'phrasing content', 'interactive content', 'palpable content'];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - phrasing content
        return result;
    },

    validateContent: function (element, result) {
        var children = element.children;

        // content: raw - transparent, but there must be no interactive content descendant

        // transparent
        var rule = element.parentElement && util.getRule(element.parentElement);
        if (rule) {
            result = rule.validateContent(element, result);
        }

        // but there must be no interactive content descendant
        util.walkDescendants(element, function (descendant) {
            if (util.isCategory('interactive content', descendant)) {
                result.push({
                    expect: 'no interactive content descendant',
                    got: util.nodeInfo(descendant),
                    target: element
                });
            }
        });

        return result;
    }
};

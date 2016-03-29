/**
 * @file rule for the <ruby> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'ruby',

    getCategories: function (element) {
        return ['flow content', 'phrasing content', 'palpable content'];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - phrasing content
        return result;
    },

    validateContent: function (element, result) {
        var children = element.children;
        // TODO: content: raw - see prose
        return result;
    }
};

/**
 * @file rule for the <iframe> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'iframe',

    getCategories: function (element) {
        return ['flow content', 'phrasing content', 'embedded content', 'interactive content', 'palpable content'];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - embedded content
        return result;
    },

    validateContent: function (element, result) {
        var children = element.children;
        // TODO: content: raw - text that conforms to the requirements given in the prose
        return result;
    }
};

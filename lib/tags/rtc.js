/**
 * @file rule for the <rtc> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'rtc',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element, result) {
        // TODO: context: raw - as a child of a ruby element
        return result;
    },

    validateContent: function (element, result) {
        var children = element.children;
        // TODO: content: raw - phrasing content or rt elements
        return result;
    }
};

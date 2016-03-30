/**
 * @file rule for the <math> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'math',

    getCategories: function (element) {
        return ['embedded content', 'phrasing content', 'flow content'];
    },

    validateContext: function (element, result) {
        return result;
    },

    validateContent: function (element, result) {
        return result;
    }
};

/**
 * @file rule for the <hr> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'hr',

    getCategories: function (element) {
        return ['flow content'];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - flow content
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

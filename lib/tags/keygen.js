/**
 * @file rule for the <keygen> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'keygen',

    getCategories: function (element) {
        return [
            'flow content', 'phrasing content', 'interactive content',
            'listed, labelable, submittable, resettable, and reassociateable form-associated element',
            'palpable content'
        ];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - phrasing content
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

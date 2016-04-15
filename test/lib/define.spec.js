/**
 * @file test for spec-define
 * @author nighca<nighca@live.cn>
 */

var emmet = require('emmet');
var parse = require('htmlcs/lib/parse');
var define = require('../../lib/define');

var getFirstTag = function (domExpression) {
    return domExpression.match(/^[\w\-]+/)[0];
};

var getElement = function (domExpression, query) {
    var htmlCode = emmet.expandAbbreviation(domExpression, {html: 'xhtml'});
    var document = parse(htmlCode);
    return document.querySelector(query || getFirstTag(domExpression));
};

describe('define for inter-element whitespace', function () {
    var name = 'inter-element whitespace';
    var match = define.is(name);
    var dismatch = define.isNot(name);

    it('should match correctly', function () {

        expect(match(undefined)).toBe(true);

        [
            'span',
            'span{\u0020}',
            'span{\u0009}',
            'span{\u000a}',
            'span{\u000c}',
            'span{\u000d}',
            'span{\u0020\u0009}',
            'span{\u0020\u0009\u000a\u000c\u000d}'
        ].forEach(function (testcase) {
            expect(match(getElement(testcase).childNodes[0])).toBe(true);
        });

        [
            'span{hello!}',
            'span{hello!\u0020}'
        ].forEach(function (testcase) {
            expect(dismatch(getElement(testcase).childNodes[0])).toBe(true);
        });

        [
            'span',
            'p',
            'div'
        ].forEach(function (testcase) {
            expect(dismatch(getElement(testcase))).toBe(true);
        });
    });
});

describe('define for media element', function () {
    var name = 'media element';
    var match = define.is(name);
    var dismatch = define.isNot(name);

    it('should match correctly', function () {
        [
            'audio',
            'audio[controls]',
            'video',
            'video[controls]'
        ].forEach(function (testcase) {
            expect(match(getElement(testcase))).toBe(true);
        });

        expect(dismatch(undefined)).toBe(true);

        [
            'span',
            'p',
            'div'
        ].forEach(function (testcase) {
            expect(dismatch(getElement(testcase))).toBe(true);
        });
    });
});

describe('unfound define', function () {
    var name = 'some unfound define';
    var dismatch = define.isNot(name);

    it('should never match', function () {
        [
            'span',
            'span{hello!}'
        ].forEach(function (testcase) {
            expect(dismatch(getElement(testcase).childNodes[0])).toBe(true);
        });

        [
            'span',
            'p',
            'div'
        ].forEach(function (testcase) {
            expect(dismatch(getElement(testcase))).toBe(true);
        });
    });
});

var fs = require('fs')
var path = require('path')

var abs = function (p) {
	return path.join(__dirname, p)
}

var content = fs.readFileSync(abs('index.js'), 'utf-8')
var pattern = /rules\.(\w+) \= (\{[\s\S]+?\n\}\;)/g

content.replace(pattern, function (matched, tagName, expr) {
	console.log(tagName)
	var cnt = [
			'/**',
			' * @file rule for the <' + tagName + '> element',
			' * @author nighca<nighca@live.cn>',
			' */',
			'',
			'var util = require(\'../util\');',
			'',
			'module.exports = {',
			'',
			'    tagName: \'' + tagName + '\',',
			'',
			expr
				.slice(2)
				.replace(/nestUtil/g, 'util')
				.replace(/\n    \}\,/g, '\n    },\n'),
			''
		].join('\n');
	fs.writeFileSync(abs('tags/' + tagName + '.js'), cnt);
	return ''
})

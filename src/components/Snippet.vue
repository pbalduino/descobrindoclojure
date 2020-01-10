<template>
<div v-highlight>
<pre :class="className"><code><slot /></code></pre>
</div>
</template>

<style>
@import url('/css/window.css');
@import url('/css/one-light.css');

pre[class*="language-"].line-numbers {
	position: relative;
	padding-left: 3.8em;
	counter-reset: linenumber;
}

pre[class*="language-"].line-numbers > code {
	position: relative;
	white-space: inherit;
}

.line-numbers .line-numbers-rows {
	position: absolute;
	pointer-events: none;
	top: 0;
	font-size: 100%;
	left: -3.8em;
	width: 3em; /* works for line-numbers below 1000 lines */
	letter-spacing: -1px;
	border-right: 1px solid #999;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.line-numbers-rows > span {
	pointer-events: none;
	display: block;
	counter-increment: linenumber;
}

.line-numbers-rows > span:before {
	content: counter(linenumber);
	color: #999;
	display: block;
	padding-right: 0.8em;
	text-align: right;
}
</style>

<script>
import Prism from 'prism-es6';
import 'prism-es6/components/prism-markup-templating'
import 'prism-es6/components/prism-java'
import 'prism-es6/components/prism-ruby'
import 'prism-es6/components/prism-clojure'

(function () {

	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	/**
	 * Plugin name which is used as a class name for <pre> which is activating the plugin
	 * @type {String}
	 */
	var PLUGIN_NAME = 'line-numbers';

	/**
	 * Regular expression used for determining line breaks
	 * @type {RegExp}
	 */
	var NEW_LINE_EXP = /\n(?!$)/g;

	/**
	 * Resizes line numbers spans according to height of line of code
	 * @param {Element} element <pre> element
	 */
	var _resizeElement = function (element) {
		var codeStyles = getStyles(element);
		var whiteSpace = codeStyles['white-space'];

		if (whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line') {
			var codeElement = element.querySelector('code');
			var lineNumbersWrapper = element.querySelector('.line-numbers-rows');
			var lineNumberSizer = element.querySelector('.line-numbers-sizer');
			var codeLines = codeElement.textContent.split(NEW_LINE_EXP);

			if (!lineNumberSizer) {
				lineNumberSizer = document.createElement('span');
				lineNumberSizer.className = 'line-numbers-sizer';

				codeElement.appendChild(lineNumberSizer);
			}

			lineNumberSizer.style.display = 'block';

			codeLines.forEach(function (line, lineNumber) {
				lineNumberSizer.textContent = line || '\n';
				var lineSize = lineNumberSizer.getBoundingClientRect().height;
				lineNumbersWrapper.children[lineNumber].style.height = lineSize + 'px';
			});

			lineNumberSizer.textContent = '';
			lineNumberSizer.style.display = 'none';
		}
	};

	/**
	 * Returns style declarations for the element
	 * @param {Element} element
	 */
	var getStyles = function (element) {
		if (!element) {
			return null;
		}

		return window.getComputedStyle ? getComputedStyle(element) : (element.currentStyle || null);
	};

	window.addEventListener('resize', function () {
		Array.prototype.forEach.call(document.querySelectorAll('pre.' + PLUGIN_NAME), _resizeElement);
	});

	Prism.hooks.add('complete', function (env) {
		if (!env.code) {
			return;
		}

		var code = env.element;
		var pre = code.parentNode;

		// works only for <code> wrapped inside <pre> (not inline)
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		// Abort if line numbers already exists
		if (code.querySelector('.line-numbers-rows')) {
			return;
		}

		var addLineNumbers = false;
		var lineNumbersRegex = /(?:^|\s)line-numbers(?:\s|$)/;

		for (var element = code; element; element = element.parentNode) {
			if (lineNumbersRegex.test(element.className)) {
				addLineNumbers = true;
				break;
			}
		}

		// only add line numbers if <code> or one of its ancestors has the `line-numbers` class
		if (!addLineNumbers) {
			return;
		}

		// Remove the class 'line-numbers' from the <code>
		code.className = code.className.replace(lineNumbersRegex, ' ');
		// Add the class 'line-numbers' to the <pre>
		if (!lineNumbersRegex.test(pre.className)) {
			pre.className += ' line-numbers';
		}

		var match = env.code.match(NEW_LINE_EXP);
		var linesNum = match ? match.length + 1 : 1;
		var lineNumbersWrapper;

		var lines = new Array(linesNum + 1).join('<span></span>');

		lineNumbersWrapper = document.createElement('span');
		lineNumbersWrapper.setAttribute('aria-hidden', 'true');
		lineNumbersWrapper.className = 'line-numbers-rows';
		lineNumbersWrapper.innerHTML = lines;

		if (pre.hasAttribute('data-start')) {
			pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
		}

		env.element.appendChild(lineNumbersWrapper);

		_resizeElement(pre);

		Prism.hooks.run('line-numbers', env);
	});

	Prism.hooks.add('line-numbers', function (env) {
		env.plugins = env.plugins || {};
		env.plugins.lineNumbers = true;
	});

	/**
	 * Global exports
	 */
	Prism.plugins.lineNumbers = {
		/**
		 * Get node for provided line number
		 * @param {Element} element pre element
		 * @param {Number} number line number
		 * @return {Element|undefined}
		 */
		getLine: function (element, number) {
			if (element.tagName !== 'PRE' || !element.classList.contains(PLUGIN_NAME)) {
				return;
			}

			var lineNumberRows = element.querySelector('.line-numbers-rows');
			var lineNumberStart = parseInt(element.getAttribute('data-start'), 10) || 1;
			var lineNumberEnd = lineNumberStart + (lineNumberRows.children.length - 1);

			if (number < lineNumberStart) {
				number = lineNumberStart;
			}
			if (number > lineNumberEnd) {
				number = lineNumberEnd;
			}

			var lineIndex = number - lineNumberStart;

			return lineNumberRows.children[lineIndex];
		}
	};

}());

export default {
  props: {
		language: String
	},
  directives: {
    class: {}
  },
	computed: {
		className: function() {
			return `language-${this.language}`
		}
	},
  created: function() {
		// eslint-disable-next-line
		// console.log("Language: ", this.language, this.className)
  }

}
</script>

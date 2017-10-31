/*
* @Author: eleven
* @Date:   2017-10-31 00:13:23
* @Last Modified by:   eleven
* @Last Modified time: 2017-10-31 16:51:04
*/

import pathToRegexp from 'path-to-regexp';

function pathPattern(pattern) {
	let keys = [];
	let re = pathToRegexp(pattern, keys);
	return {
		keys,
		re
	}
}

export default {
	pathPattern,
}
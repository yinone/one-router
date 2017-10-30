/*
* @Author: eleven
* @Date:   2017-10-31 00:13:23
* @Last Modified by:   eleven
* @Last Modified time: 2017-10-31 00:13:56
*/

import pathToRegexp from 'path-to-regexp';

function params(pattern, pathname) {
	let keys = [];
	let re = pathToRegexp(pattern, keys);
	return re.exec(pathname);
}
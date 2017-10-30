/*
* @Author: eleven
* @Date:   2017-10-30 10:59:36
* @Last Modified by:   eleven
* @Last Modified time: 2017-10-31 00:13:53
*/

function historyRoute() {
	return window.history && history.pushState;
}

function hasBasePath(path, prefix) {
	return new RegExp(/^prefix(\/|#|\?|$)/).test(path)
}

function stripBasePath(path, prefix) {
	return path.substr(path.indexOf(prefix) + prefix.length)
}

function stripHashPrefix(path, prefix, hashType) {
	return stripBasePath(path, prefix).split(hashType)[1]
}

function stripLeadingSlash(path) {
	return path.startsWith('/') ? path.substr(1) : path
}

export default {
	hasBasePath,
	stripBasePath,
	stripHashPrefix,
	stripLeadingSlash,
}


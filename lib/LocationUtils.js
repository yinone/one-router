/*
* @Author: eleven
* @Date:   2017-10-30 10:59:36
* @Last Modified by:   eleven
* @Last Modified time: 2017-10-31 17:54:20
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

function querytourl(search) {
	if( search === null || typeof search !== 'object' ) return false;
	let urlstring = '?';
	Object.keys(search).forEach( key => {
		urlstring += key + '=' + search[key] + '&'
	})
	return urlstring.endsWith('&') ? urlstring.slice( 0, urlstring.length -1 ) : urlstring;
}

export default {
	querytourl,
	historyRoute,
	hasBasePath,
	stripBasePath,
	stripHashPrefix,
	stripLeadingSlash,
}


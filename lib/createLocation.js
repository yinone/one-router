/*
* @Author: eleven
* @Date:   2017-10-31 11:39:01
* @Last Modified by:   eleven
* @Last Modified time: 2017-10-31 23:32:08
*/

/*
	@params {Object} location - 构造路由对象
	{
		path: 'pattern',
		exact: true | false,
		alias: '',
		params: {},
		query: {},
		redirect: ''
		handler(route) {
			route 当前路由对象
		}
	}
 */

import invariant from 'invariant';
import { pathToRegexp } from './matchPath';
import { querytourl } from './LocationUtils';

function createLocation(location) {

	invariant(
		typeof location === 'object' && location.path, 
		`location.path required, but get ${location.path}`
	)

	const { path, alias, params, query, handler } = location;
	let toPath = pathToRegexp.compile(location.path);

	let search = querytourl(query)
	let pathname = toPath(params)

	return {
		alias,
		pathname,
		search,
		query,
		params
	}
}
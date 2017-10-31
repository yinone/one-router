/*
* @Author: eleven
* @Date:   2017-10-31 11:39:01
* @Last Modified by:   eleven
* @Last Modified time: 2017-10-31 17:20:35
*/

/*
	@params {Object} location - 构造路由对象
	{
		path: 'pattern',
		exact: true | false,
		params: {},
		query: {},
		redirect: ''
		handler(route) {
			route 当前路由对象
		}
	}
 */

import { pathPattern } from './matchPath';
import invariant from 'invariant';

function createLocation(location) {

	invariant(
		typeof location === 'object' && location.path, 
		`location.path required, but get ${location.path}`
	)

	
	return {
		pathname,
		search,
		state,
		key
	}
}
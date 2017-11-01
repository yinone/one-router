/*
* @Author: eleven
* @Date:   2017-10-31 16:12:18
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-01 19:59:41
*/

function addEvent(type, listener) {
	window.addEventListener(type, listener, false)
}

function removeEvent(type, listener) {
	window.removeEventListener(type, listener, false)
}

export default {
	addEvent,
	removeEvent
}

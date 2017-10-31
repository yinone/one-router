/*
* @Author: eleven
* @Date:   2017-10-31 16:12:18
* @Last Modified by:   eleven
* @Last Modified time: 2017-10-31 16:24:57
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

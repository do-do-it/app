// 默认帧
const DEFAULT_INTERVAL = 1000 / 60;
/**
 * raf
 */
const requestAnimationFrame = (function () {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
			//所有都不支持，用setTimeout兼容
		function (callback) {
			return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL)); // make interval as precise as possible.
		};
})();

/**
 * cancel raf
 */
const cancelAnimationFrame = (function () {
	return window.cancelAnimationFrame ||
		window.webkitCancelAnimationFrame ||
		window.mozCancelAnimationFrame ||
		window.oCancelAnimationFrame ||
		function (id) {
			window.clearTimeout(id);
		};
})();

export default function frameSync() {
	let id = null
	let events = []

	function run() {
		events.forEach(event => event())
		events = []
		id && cancelAnimationFrame(id)
		id = requestAnimationFrame(run)
	}
	run()

	function add(event) {
		events.push(event)
	}
	return {
		add
	}
}
"use strict";
/**
 * Distributed with u2 and compatible with most configurations.
 */
const stocku2t = "/sw.js";

/**
 * List of hostnames that are allowed to run serviceworkers on http://
 */
const u2tAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global util
 * Used in 404.html and index.html
 */
async function registeru2t() {
	if (!navigator.serviceWorker) {
		if (
			location.protocol !== "https:" &&
			!u2tAllowedHostnames.includes(location.hostname)
		)
			throw new Error("Service workers cannot be registered without https.");

		throw new Error("Your browser doesn't support service workers.");
	}

	await navigator.serviceWorker.register(stocku2t);
}


// This file overwrites the stock UV config.js

self.__uv$config = {
	prefix: "/uv/service/",
	encodeUrl: u2.codec.xor.encode,
	decodeUrl: u2.codec.xor.decode,
	handler: "uv.handler.js",
	client: "uv.client.js",
	bundle: "uv.bundle.js",
	config: "uv.config.js",
	sw: "uv.sw.js",
};

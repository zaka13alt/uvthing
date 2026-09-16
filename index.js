
"use strict";

const form = document.getElementById("uv-form");
const address = document.getElementById("uv-address");
const searchEngine = document.getElementById("uv-search-engine");
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");
const connection = new W1I41.W1I41Connection("/bmuxworker.js");

async function openW1I41(url) {
    try {
        await registerSW();

        const wispUrl =
            (location.protocol === "https:" ? "wss" : "ws") +
            "://" +
            location.host +
            "/wisp/";

        await connection.setTransport("/epox.mjs", [
            { wisp: wispUrl },
        ]);

        const frame = document.getElementById("u22-frame");

        frame.style.display = "block";
        frame.style.position = "fixed";
        frame.style.left = "0";
        frame.style.top = "0";
        frame.style.width = "100%";
        frame.style.height = "100%";
        frame.style.border = "0";
        frame.style.zIndex = "999999";
        frame.style.background = "#fff";

        document.documentElement.style.height = "100%";
        document.body.style.height = "100%";
        document.body.style.margin = "0";

        frame.src = __u22$config.prefix + __u22$config.encodeUrl(url);
    } catch (err) {
        error.textContent = "Failed to load W1I41.";
        errorCode.textContent = err.toString();
        console.error(err);
    }
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const url = search(address.value, searchEngine.value);
    await openW1I41(url);
});

window.addEventListener("load", () => {
    setTimeout(() => {
        openW1I41("https://google.com");
    }, 5000);
});

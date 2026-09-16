"use strict";

const form = document.getElementById("u22-form");
const address = document.getElementById("u22-address");
const searchEngine = document.getElementById("u22-search-engine");
const error = document.getElementById("u22-error");
const errorCode = document.getElementById("u22-error-code");
const connection = new W1I41.W1I41Connection("/bmuxworker.js");

async function openW1I41(url) {
    try {
        await registeru2t();

        const wispUrl = "wss://api.zaka13.com/wisp/";

        await connection.setTransport("/epox.mjs", [
            { wisp: wispUrl }
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
        errorCode.textContent = String(err);
        console.error(err);
    }
}

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const url = search(address.value, searchEngine.value);
    await openW1I41(url);
});

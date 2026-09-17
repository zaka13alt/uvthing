"use strict";

const form = document.getElementById("u22-form");
const address = document.getElementById("u22-address");
const searchEngine = document.getElementById("u22-search-engine");
const error = document.getElementById("u22-error");
const errorCode = document.getElementById("u22-error-code");
const connection = new W1I41.W1I41Connection("/bmuxworker.js");

let _wispUrl = "wss://api.zaka13.com/wisp/";

async function openW1I41(url) {
    try {
        await registeru2t();

        await connection.setTransport("/epox.mjs", [
            { wisp: _wispUrl }
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

/* ---- query parameter handling ---- */
(function () {
    const params = new URLSearchParams(location.search);
    let action = null, goUrl = null, w1Url = null;

    if (params.has("refresh")) action = "refresh";
    else if (params.has("back")) action = "back";
    else if (params.has("forward")) action = "forward";

    if (params.has("go")) {
        try { goUrl = atob(params.get("go")); } catch (e) {}
    }
    if (params.has("w1")) {
        try { w1Url = atob(params.get("w1")); } catch (e) {}
    }

    if (!action && !goUrl && !w1Url) return;

    // Override the hardcoded wisp URL if one was supplied.
    if (w1Url) {
        _wispUrl = w1Url;
    }

    function fire() {
        if (goUrl) {
            openW1I41(goUrl);
        } else if (action === "refresh") {
            try { document.getElementById("u22-frame").contentWindow.location.reload(); } catch (e) {}
        } else if (action === "back") {
            try { document.getElementById("u22-frame").contentWindow.history.back(); } catch (e) {}
        } else if (action === "forward") {
            try { document.getElementById("u22-frame").contentWindow.history.forward(); } catch (e) {}
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", fire, { once: true });
    } else {
        fire();
    }
})();
/* ---- end query parameter handling ---- */

!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc");function a(n,o){new Promise((function(e,t){var i=Math.random()>.3;setTimeout((function(){i?e({position:n,delay:o}):t({position:n,delay:o})}),o)})).then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.warning("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget,o=n.delay,t=n.step,i=n.amount,r=0;r<i.value;r+=1){var u=r+1,c=Number(o.value)+Number(t.value)*r;setTimeout(a(u,c),c)}}))}();
//# sourceMappingURL=03-promises.b6dac34d.js.map
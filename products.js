(function () {
  var box = document.getElementById("products");
  function esc(s) { var d = document.createElement("div"); d.textContent = s == null ? "" : String(s); return d.innerHTML; }
  function empty() { box.innerHTML = '<p class="empty">New products coming soon.</p>'; }
  fetch("products.json", { cache: "no-store" })
    .then(function (r) { return r.json(); })
    .then(function (list) {
      if (!Array.isArray(list) || list.length === 0) return empty();
      box.innerHTML = list.map(function (p) {
        return '<div class="card"><h3>' + esc(p.name) + '</h3><p>' + esc(p.description) +
          '</p><p class="price">' + esc(p.price) + '</p><a class="btn" href="' + esc(p.buy_link) +
          '" rel="noopener">Buy</a></div>';
      }).join("");
    })
    .catch(empty);
})();

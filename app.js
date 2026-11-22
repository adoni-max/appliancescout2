(() => {
  const stores = Array.isArray(window.APPLIANCE_SCOUT_STORES) ? window.APPLIANCE_SCOUT_STORES : [];
  const grid = document.getElementById("store-grid");
  const search = document.getElementById("search-input");
  const city = document.getElementById("city-filter");
  const category = document.getElementById("category-filter");
  const count = document.getElementById("result-count");
  const summary = document.getElementById("results-summary");
  const empty = document.getElementById("empty-state");
  const dialog = document.getElementById("store-dialog");
  const dialogContent = document.getElementById("dialog-content");
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const mapsUrl = s => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(s.address);
  const uniqueCities = [...new Set(stores.map(s => s.city))].sort();
  uniqueCities.forEach(c => {
    const option = document.createElement("option");
    option.value = c; option.textContent = c;
    city.appendChild(option);
  });
  document.getElementById("hero-count").textContent = stores.length;
  document.getElementById("year").textContent = new Date().getFullYear();

  function card(s) {
    const tags = s.offerings.slice(0,2).map(x => `<span class="mini-tag">${esc(x)}</span>`).join("");
    return `<article class="store-card">
      <div class="card-top"><div class="store-symbol" aria-hidden="true">A+</div><span class="verified-tag">Source listed</span></div>
      <h3>${esc(s.name)}</h3><div class="branch-name">${esc(s.branch)} · ${esc(s.area)}</div>
      <div class="store-address"><span aria-hidden="true">⌖</span>${esc(s.address)}</div>
      <div class="tag-row">${tags}</div>
      <div class="card-bottom"><span class="source-note">Retailer source linked</span><div class="card-actions"><button class="details-button" data-id="${esc(s.id)}" type="button">View details ↗</button></div></div>
    </article>`;
  }
  function render() {
    const q = search.value.trim().toLowerCase();
    const selectedCity = city.value;
    const selectedCategory = category.value;
    const filtered = stores.filter(s => {
      const haystack = [s.name,s.branch,s.address,s.city,s.area,s.phone,...s.categories,...s.offerings].join(" ").toLowerCase();
      return (!q || haystack.includes(q)) && (!selectedCity || s.city === selectedCity) && (!selectedCategory || s.categories.includes(selectedCategory));
    });
    grid.innerHTML = filtered.map(card).join("");
    count.textContent = filtered.length;
    summary.textContent = filtered.length === stores.length ? "Showing all retailer locations" : `Showing ${filtered.length} of ${stores.length} retailer locations`;
    empty.hidden = filtered.length !== 0;
    grid.hidden = filtered.length === 0;
  }
  function openDetails(id) {
    const s = stores.find(x => x.id === id);
    if (!s) return;
    dialogContent.innerHTML = `<div class="dialog-body">
      <span class="verified-tag">Retailer source linked · call to confirm</span>
      <h2>${esc(s.name)}</h2><div class="branch-name">${esc(s.branch)} · ${esc(s.area)}</div>
      <div class="dialog-row"><b>Address</b><span>${esc(s.address)}</span></div>
      <div class="dialog-row"><b>Phone</b><span>${esc(s.phone || "Not listed")}</span></div>
      <div class="dialog-row"><b>Offerings</b><span>${s.offerings.map(esc).join(", ")}</span></div>
      <div class="dialog-row"><b>Appliance types</b><span>${s.categories.map(esc).join(", ")}</span></div>
      <div class="dialog-row"><b>Source</b><span>${esc(s.evidence)}</span></div>
      <div class="dialog-row"><b>Retailer source</b><span><a href="${esc(s.source)}" target="_blank" rel="noopener noreferrer">${esc(s.sourceLabel)} ↗</a></span></div>
      <p class="disclaimer-small">${esc(s.notes)} ApplianceScout is an independent directory and does not guarantee inventory, prices, business hours, warranties, or retailer performance. Information should be reconfirmed directly with the store.</p>
      <div class="dialog-actions"><a href="tel:${esc(s.phone.replace(/[^+\d]/g,""))}">Call store</a><a class="secondary" href="${esc(mapsUrl(s))}" target="_blank" rel="noopener noreferrer">Directions ↗</a><a class="secondary" href="${esc(s.source)}" target="_blank" rel="noopener noreferrer">Official source ↗</a></div>
    </div>`;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open","");
  }
  grid.addEventListener("click", e => {
    const button = e.target.closest("[data-id]");
    if (button) openDetails(button.dataset.id);
  });
  document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
  [search,city,category].forEach(el => el.addEventListener(el === search ? "input" : "change", render));
  function reset() { search.value=""; city.value=""; category.value=""; render(); }
  document.getElementById("clear-filters").addEventListener("click", reset);
  document.getElementById("empty-reset").addEventListener("click", reset);
  document.addEventListener("keydown", e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); search.focus(); }
  });
  render();
})();
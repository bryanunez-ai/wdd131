const sites = [
    { name: "Chichén Itzá", region: "Yucatán" },
    { name: "Uxmal", region: "Yucatán" },
    { name: "Palenque", region: "Chiapas" },
    { name: "Tulum", region: "Quintana Roo" },
    { name: "Calakmul", region: "Campeche" }
];

const siteSelect = document.getElementById("site");

function populateSites(select, list) {
    const optionsHTML = list
        .map(site => `<option value="${site.name}">${site.name}</option>`)
        .join("");
    select.insertAdjacentHTML("beforeend", optionsHTML);
}

populateSites(siteSelect, sites);

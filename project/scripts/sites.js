// SITE OBJECTS ARRAY
const sites = [
    {
        name: "Chichén Itzá",
        region: "Yucatán",
        image: "images/chichen-itza.webp",
        description: "One of the New Seven Wonders of the World and the political and religious epicenter of the Yucatán Peninsula, famous for the Temple of Kukulkáan.",
        alt: "Temple of Kukulkáan in Chichén Itzá"
    },
    {
        name: "Uxmal",
        region: "Yucatán",
        image: "images/uxmal.webp",
        description: "A masterpiece of Puuc-style architecture, known for the elegant Pyramid of the Magician and its intricate stone latticework.",
        alt: "Pyramid of the Magician in Uxmal"
    },
    {
        name: "Palenque",
        region: "Chiapas",
        image: "images/palenque.webp",
        description: "Tucked deep within the rainforests of Chiapas, Palenque is celebrated for its refined architecture and the Tomb of Pakal the Great.",
        alt: "The governor's palace in Palenque"
    },
    {
        name: "Tulum",
        region: "Quintana Roo",
        image: "images/tulum.webp",
        description: "A walled port city perched on a cliff over the Caribbean Sea, Tulum was one of the last cities built and inhabited by the Maya.",
        alt: "Aerial view of Tulum and the beach"
    },
    {
        name: "Calakmul",
        region: "Campeche",
        image: "images/calakmul.webp",
        description: "Hidden in the Calakmul Biosphere Reserve, this was one of the most powerful Maya capitals, rivaling Tikal for control of the lowlands.",
        alt: "Great Pyramid of Calakmul surrounded by jungle"
    }
];

// GET REGIONS AND ADD THEM TO FILTER IN DOM


function displayRegionOptions () {
    const regions = [...new Set(sites.map(site => site.region))];

    const regionFilter = document.getElementById("region-filter");

    const optionsHTML = regions.map(region =>
        `<option value="${region}">${region}</option>`
    ).join("");

    regionFilter.insertAdjacentHTML("beforeend", optionsHTML);
}

displayRegionOptions();

// ADD SITE CARDS TO DOM
function displaySites(list) {
    const container = document.getElementById("sites-container");
    const cardsHTML = list.map(site =>
        `<div class="index-section-grid-item">
            <img src="${site.image}" alt="${site.alt}" loading="lazy">
            <h3>${site.name}</h3>
            <p>${site.description}</p>
        </div>`
    ).join("");

    container.innerHTML = cardsHTML;
}

displaySites(sites);

// FILTER SITE CARDS BY REGION
function filterCardsByReg() {
    const regionFilter = document.getElementById("region-filter");

    regionFilter.addEventListener("change", () => {
        const selected = regionFilter.value;

        if (selected === "all") {
            displaySites(sites);
        } else {
            const filteredSites = sites.filter(site => site.region === selected);

            displaySites(filteredSites);
        }
    });
}

filterCardsByReg();
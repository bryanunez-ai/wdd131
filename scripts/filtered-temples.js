document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Tijuana México",
    location: "Tijuana, Baja California, Mexico",
    dedicated: "2015, December, 13",
    area: 33367,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
  },

  {
    templeName: "San Luis Potosí Mexico",
    location: "San Luis Potosí, San Luis Potosí, Mexico",
    dedicated: "2026, November, 1",
    area: 9300,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-luis-potosi-mexico-temple/san-luis-potosi-mexico-temple-65618.jpg"
  },

  {
    templeName: "Puebla Mexico",
    location: "Puebla, Puebla, Mexico",
    dedicated: "2024, May, 19",
    area: 9730,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46342.jpg"
  },

];

// Display temple cards
function displayTemples(templesArray) {
  const mainContainer = document.querySelector("main");
  const h1 = mainContainer.querySelector("h1");

  mainContainer.querySelectorAll("figure").forEach(fig => fig.remove());

  templesArray.forEach(temple => {
    const figure = document.createElement("figure");
    figure.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <p><strong>${temple.templeName}</strong></p>
        <p>${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;
    mainContainer.appendChild(figure);
  });
}

// Extract year from dedicated string
function getYear(dedicatedString) {
  return parseInt(dedicatedString.split(",")[0]);
}

// Filter functions
function filterOld(templesArray) {
  return templesArray.filter(temple => getYear(temple.dedicated) < 1900);
}

function filterNew(templesArray) {
  return templesArray.filter(temple => getYear(temple.dedicated) > 2000);
}

function filterLarge(templesArray) {
  return templesArray.filter(temple => temple.area > 90000);
}

function filterSmall(templesArray) {
  return templesArray.filter(temple => temple.area < 10000);
}

// Update h1 and display temples
function renderTemples(templesArray, title) {
  document.querySelector("main h1").textContent = title;
  displayTemples(templesArray);
}

// Nav event listeners
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const text = e.target.textContent;

    if (text === "Home") renderTemples(temples, "Home");
    else if (text === "Old") renderTemples(filterOld(temples), "Old Temples");
    else if (text === "New") renderTemples(filterNew(temples), "New Temples");
    else if (text === "Large") renderTemples(filterLarge(temples), "Large Temples");
    else if (text === "Small") renderTemples(filterSmall(temples), "Small Temples");
  });
});

displayTemples(temples);

// Get Current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Get las modified Date
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = 'Last Modified: ' + lastModifiedDate;
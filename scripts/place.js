// ===== Footer: current year and last modified date =====
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// ===== Weather: static values (matching the HTML) =====
const temperature = 10; // °C
const windSpeed = 5;    // km/h

// Returns the wind chill factor (metric: °C and km/h) in one line
function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16).toFixed(1);
}

// Only calculate when conditions apply: temp <= 10 °C AND wind > 4.8 km/h
const windChillCell = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillCell.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillCell.textContent = "N/A";
}

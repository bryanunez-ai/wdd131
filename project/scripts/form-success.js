const params = new URLSearchParams(window.location.search);
const name = params.get("fullname");
const site = params.get("site");
const visitDate = params.get("visitdate");
const interests = params.getAll("interests");
const comments = params.get("comments");

const confirmMessage = document.getElementById("confirm-message");

if (name) {
    confirmMessage.textContent = `Thank you, ${name}! Your plan to visit ${site} has been received.`;
} else {
    confirmMessage.textContent = "Thank you! Your visit plan has been received.";
}

const details = [
    { label: "Site", value: site },
    { label: "Visit Date", value: visitDate },
    { label: "Interests", value: interests.length ? interests.join(", ") : "None selected" },
    { label: "Comments", value: comments ? comments : "None" }
];

const detailsList = document.getElementById("plan-details");
detailsList.innerHTML = details
    .map(detail => `<li><strong>${detail.label}:</strong> ${detail.value}</li>`)
    .join("");

let planCount = Number(localStorage.getItem("planCount")) || 0;
planCount++;
localStorage.setItem("planCount", planCount);
document.getElementById("plan-count").textContent = planCount;

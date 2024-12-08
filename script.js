// Using an object to store modal states
const modals = {};

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

openEls.forEach((el) => {
  const modalId = el.dataset.open;
  modals[modalId] = false;
});

// Use a while loop to attach event listeners to open buttons
let i = 0;
while (i < openEls.length) {
  openEls[i].addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    modals[modalId] = true; // Update the modal state to open
  });
  i++;
}

// Use a do-while loop to attach event listeners to close buttons
let j = 0;
do {
  closeEls[j].addEventListener("click", function () {
    const modalId = this.closest(".modal").id;
    document.getElementById(modalId).classList.remove(isVisible);
    modals[modalId] = false; // Update the modal state to closed
  });
  j++;
} while (j < closeEls.length);

// Click event to close modals if user clicks outside of modal
document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    const modal = document.querySelector(".modal.is-visible");
    modal.classList.remove(isVisible);
    modals[modal.id] = false;
  }
});

// Close modals on ESC key press
document.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    const modal = document.querySelector(".modal.is-visible");
    modal.classList.remove(isVisible);
    modals[modal.id] = false;
  }
});

// Bring Joy to Tondo and CAMANAVA’s Urban Poor Communities
function calculateDonation(amountPerIndividual, numIndividuals, element) {
  // Hide all previously shown amounts and explanations
  const allDonationRows = document.querySelectorAll("tr");

  allDonationRows.forEach((row) => {
    const donationAmount = row.querySelector(".donation-amount");
    const donationExplanation = row.querySelector(".donation-explanation");
    if (donationAmount) donationAmount.style.display = "none";
    if (donationExplanation) donationExplanation.style.display = "none";
  });

  // Show the selected row's amount and explanation
  const parentTd = element.closest("td").nextElementSibling.nextElementSibling;
  const donationAmount = parentTd.querySelector(".donation-amount");
  const donationExplanation = parentTd.querySelector(".donation-explanation");

  const totalAmount = amountPerIndividual * numIndividuals;

  // Update and show the explanation text
  donationExplanation.textContent = `Calculated as: ₱${amountPerIndividual} per individual × ${numIndividuals} individuals = ₱${totalAmount.toLocaleString()}`;
  donationAmount.style.display = "inline";
  donationExplanation.style.display = "block";
}

// Function to calculate orphan donation amount and show explanation
function calculateOrphanDonation(
  amountPerDay,
  numberOfDays,
  numberOfOrphans,
  radioButton
) {
  // Hide all previous donations and explanations
  const allRows = document.querySelectorAll("tr");
  allRows.forEach((row) => {
    const donationAmount = row.querySelector(".donation-amount");
    const donationExplanation = row.querySelector(".donation-explanation");
    if (donationAmount) donationAmount.style.display = "none";
    if (donationExplanation) donationExplanation.style.display = "none";
  });

  // Calculate total donation
  const totalOrphanAmount = amountPerDay * numberOfDays * numberOfOrphans;
  const totalAmount = totalOrphanAmount + 1000; // Adding Christmas Gift

  const parentRow = radioButton.closest("tr");
  const donationAmountElement = parentRow.querySelector(".donation-amount");
  const donationExplanationElement = parentRow.querySelector(
    ".donation-explanation"
  );

  // Show the donation amount and explanation
  donationAmountElement.textContent = `₱${totalAmount.toLocaleString()}`;
  donationAmountElement.dataset.amount = totalAmount;
  donationAmountElement.style.display = "inline";

  donationExplanationElement.textContent = `Calculated as: P${amountPerDay} per day × ${numberOfDays} days × ${numberOfOrphans} orphans + P1,000 (Christmas Gift) = ₱${totalAmount.toLocaleString()}`;
  donationExplanationElement.style.display = "inline";

  console.log(`Total Donation for ${numberOfOrphans} orphans: ₱${totalAmount}`);
}

// Immerse Yourself in Aeta Culture and Give Back
function calculateDays(days, amountPerDay, element) {
  // Hide all previously shown amounts and explanations
  const allDonationRows = document.querySelectorAll("tr");

  allDonationRows.forEach((row) => {
    const donationAmount = row.querySelector(".donation-amount");
    const donationExplanation = row.querySelector(".donation-explanation");
    if (donationAmount) donationAmount.style.display = "none";
    if (donationExplanation) donationExplanation.style.display = "none";
  });

  // Show the selected row's amount and explanation
  const parentTd = element.closest("td").nextElementSibling.nextElementSibling;
  const donationAmount = parentTd.querySelector(".donation-amount");
  const donationExplanation = parentTd.querySelector(".donation-explanation");

  const totalAmount = days * amountPerDay;

  // Update and show the explanation text
  donationExplanation.textContent = `Calculated as: ₱${amountPerDay} per day × ${days} days = ₱${totalAmount.toLocaleString()}`;
  donationAmount.style.display = "inline";
  donationExplanation.style.display = "block";
}

// UKAY-UKAY for a Cause or Anonymous Gift-Giving page

function calculateTotalCost() {
  const costs = [
    document.getElementById("clothingCost"),
    document.getElementById("footwearCost"),
    document.getElementById("bagsCost"),
    document.getElementById("outerwearCost"),
    document.getElementById("vintageCost"),
    document.getElementById("sportswearCost"),
    document.getElementById("toysCost"),
    document.getElementById("newItemsCost"),
  ];

  let total = 0;

  costs.forEach((costField) => {
    if (costField.value) {
      total += parseFloat(costField.value) || 0;
    }
  });

  document.getElementById("total").value = total.toFixed(2);
}

window.onload = () => {
  const costFields = document.querySelectorAll('input[type="number"]');
  costFields.forEach((field) => {
    field.addEventListener("input", calculateTotalCost);
  });
};

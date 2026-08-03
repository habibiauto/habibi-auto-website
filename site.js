
const SITE_CONFIG = {
  // Add the published booking-app URL here when it is ready.
  appUrl: "",
  email: "Contact@habibiauto.ca"
};

const appButtons = document.querySelectorAll("[data-app-link]");
appButtons.forEach((button) => {
  if (SITE_CONFIG.appUrl) {
    button.href = SITE_CONFIG.appUrl;
    button.textContent = "Open booking app";
    button.removeAttribute("aria-disabled");
  } else {
    button.href = "#contact";
    button.textContent = "App launching soon";
    button.setAttribute("aria-disabled", "true");
  }
});

const form = document.querySelector("#service-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Habibi Auto service request - ${data.get("vehicle") || "Vehicle"}`);
    const body = encodeURIComponent([
      `Name: ${data.get("name") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Vehicle: ${data.get("vehicle") || ""}`,
      `Service: ${data.get("service") || ""}`,
      `Location: ${data.get("location") || ""}`,
      "",
      "Details:",
      `${data.get("message") || ""}`
    ].join("\n"));
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  });
}

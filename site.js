const SITE_CONFIG = {
  // Add the published booking-app URL here when it is ready.
  appUrl: "",
  formEndpoint: "https://formsubmit.co/ajax/Contact@habibiauto.ca"
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
  const submitButton = form.querySelector('button[type="submit"]');
  const statusMessage = document.querySelector("#form-status");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(form);

    // Simple spam trap. Real customers never see this field.
    if (data.get("_honey")) {
      form.reset();
      statusMessage.textContent = "Thank you. Your request has been received.";
      return;
    }

    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Sending…";
    statusMessage.textContent = "Sending your service request…";

    const payload = {
      name: data.get("name") || "",
      phone: data.get("phone") || "",
      email: data.get("email") || "",
      _replyto: data.get("email") || "",
      vehicle: data.get("vehicle") || "",
      service: data.get("service") || "",
      location: data.get("location") || "",
      message: data.get("message") || "",
      _subject: `New Habibi Auto service request – ${data.get("vehicle") || "Vehicle"}`,
      _template: "table"
    };

    try {
      const response = await fetch(SITE_CONFIG.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "The request could not be sent.");
      }

      form.reset();
      statusMessage.textContent =
        "Thank you. Your service request was sent successfully. Habibi Auto will contact you to confirm the details.";
    } catch (error) {
      console.error("Form submission failed:", error);
      statusMessage.textContent =
        "We could not send the request. Please call or text 289-214-1944, or try again in a moment.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}

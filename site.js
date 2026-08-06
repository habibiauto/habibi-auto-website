const SITE_CONFIG = {
  // Add the published booking-app URL here when it is ready.
  appUrl: ""
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

// Function to check if the site is in maintenance mode
function checkMaintenanceMode() {
  // Skip checking maintenance mode if we're already on the offline page
  if (window.location.pathname === '/Offline.html') {
    return; // Do nothing on the offline page
  }

  // Fetch the maintenance mode setting from the server
  fetch('/Assets/maintenance.json')
    .then(response => response.json())
    .then(data => {
      if (data.maintenanceMode === true) {
        // Redirect to the offline page
        window.location.replace('/Offline.html');
      } else if (data.maintenanceMode === false && window.location.pathname === '/Offline.html') {
        // Redirect back to index.html if maintenance mode is disabled
        window.location.replace('/index.html');
      }
    })
    .catch(() => {
      // Handle case where maintenance.json is not available
      console.log('Could not fetch maintenance.json, assuming not in maintenance mode.');
    });
}

// URLs to redirect during maintenance
const urlsToRedirect = [
  '/index.html',
  '/Games.html',
  '/Newswire.html',
  '/FAQ.html',
  '/Contact.html',
  '/About.html',
  '/Terms of Use.html',
  '/Privacy Policy.html',
  '/PrisonBreak Life.html',
  '/Murder Mystery X.html',
  '/FREE ADMIN.html',
  '/', // Default root URL
];

// Check the current URL and redirect if necessary
if (urlsToRedirect.includes(window.location.pathname)) {
  fetch('/Assets/maintenance.json')
    .then(response => response.json())
    .then(data => {
      if (data.maintenanceMode === true) {
        window.location.replace('/Offline.html');
      }
    })
    .catch(() => {
      console.log('Could not fetch maintenance.json.');
    });
}

// Protect the offline page
if (window.location.pathname === '/Offline.html') {
  // Prevent navigating away
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, null, window.location.href);
  };

  // Ensure the page stays on /Offline.html
  setInterval(() => {
    if (window.location.pathname !== '/Offline.html') {
      window.location.replace('/Offline.html');
    }
  }, 1000);
}

// Polling mechanism to check maintenance mode every 30 seconds
setInterval(() => {
  checkMaintenanceMode();
}, 30000); // Poll every 30 seconds

// Initial check for maintenance mode
if (window.location.pathname !== '/Offline.html') {
  window.onload = checkMaintenanceMode;
}

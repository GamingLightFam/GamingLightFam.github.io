// Function to check if the site is in maintenance mode
function checkMaintenanceMode() {
  // Fetch the maintenance mode setting from the server
  fetch('/Assets/maintenance.json')
    .then(response => response.json())
    .then(data => {
      if (data.maintenanceMode === true) {
        // Redirect to the offline page if maintenance mode is enabled
        sessionStorage.setItem('redirectedToOffline', 'true');
        if (window.location.pathname !== '/Offline.html') {
          window.location.replace('/Offline.html');
        }
      } else {
        // Maintenance mode is false; allow normal navigation
        sessionStorage.removeItem('redirectedToOffline'); // Clear session flag

        // Redirect away from Offline.html if users are still there
        if (window.location.pathname === '/Offline.html') {
          window.location.replace('/index.html');
        }
      }
    })
    .catch(() => {
      console.log('Could not fetch maintenance.json, assuming normal mode.');
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

// Run the maintenance mode check on load
if (urlsToRedirect.includes(window.location.pathname)) {
  window.onload = checkMaintenanceMode;
}

// Protect the offline page
if (window.location.pathname === '/Offline.html') {
  // Prevent navigating away if in maintenance mode
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, null, window.location.href);
  };

  // Ensure the page stays on /Offline.html only if maintenance mode is true
  setInterval(() => {
    fetch('/Assets/maintenance.json')
      .then(response => response.json())
      .then(data => {
        if (!data.maintenanceMode) {
          // If maintenance mode is false, redirect to index.html
          window.location.replace('/index.html');
        }
      })
      .catch(() => {
        console.log('Could not fetch maintenance.json.');
      });
  }, 1000);
}

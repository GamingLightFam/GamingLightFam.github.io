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
        // Redirect to the offline page if maintenance mode is enabled
        sessionStorage.setItem('redirectedToOffline', 'true');
        window.location.replace('/Offline.html');
      } else {
        // Redirect to index.html if maintenance mode is disabled and not already there
        if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
          window.location.replace('/index.html');
        }
      }
    })
    .catch(() => {
      console.log('Could not fetch maintenance.json, assuming normal mode.');
    });
}

// Check the current URL and redirect if necessary
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

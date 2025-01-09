// Function to handle maintenance mode logic
function handleMaintenanceMode() {
  // Fetch the maintenance mode setting from the server
  fetch('/Assets/maintenance.json')
    .then(response => response.json())
    .then(data => {
      if (data.maintenanceMode === true) {
        // Maintenance mode is enabled
        sessionStorage.setItem('redirectedToOffline', 'true');
        
        if (window.location.pathname !== '/Offline.html') {
          window.location.replace('/Offline.html'); // Redirect to Offline.html
        }
      } else {
        // Maintenance mode is disabled
        sessionStorage.removeItem('redirectedToOffline'); // Clear session flag

        if (window.location.pathname === '/Offline.html') {
          window.location.replace('/index.html'); // Redirect to index.html
        }
      }
    })
    .catch(() => {
      console.log('Could not fetch maintenance.json, assuming normal mode.');
    });
}

// URLs to manage during maintenance
const monitoredUrls = [
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

// Run the maintenance mode handler on page load
if (monitoredUrls.includes(window.location.pathname)) {
  handleMaintenanceMode();
}

// Protect the Offline.html page
if (window.location.pathname === '/Offline.html') {
  // Prevent navigating away if in maintenance mode
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, null, window.location.href);
  };

  // Ensure users stay on Offline.html if maintenance mode is true
  setInterval(() => {
    fetch('/Assets/maintenance.json')
      .then(response => response.json())
      .then(data => {
        if (!data.maintenanceMode) {
          // If maintenance mode is disabled, redirect to index.html
          window.location.replace('/index.html');
        }
      })
      .catch(() => {
        console.log('Could not fetch maintenance.json.');
      });
  }, 1000);
}

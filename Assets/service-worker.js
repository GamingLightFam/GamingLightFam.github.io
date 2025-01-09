// Function to check if the site is in maintenance mode
function checkMaintenanceMode() {
    // Skip checking maintenance mode if we're already on the offline page
    if (window.location.pathname === '/Offline.html') {
      return; // Do nothing on the offline page
    }
  
    // Check if we've already redirected to the offline page
    if (sessionStorage.getItem('redirectedToOffline') === 'true') {
      return; // Prevent redundant redirects
    }
  
    // Fetch the maintenance mode setting from the server
    fetch('/Assets/maintenance.json')
      .then(response => response.json())
      .then(data => {
        if (data.maintenanceMode === true) {
          // Check if the user is the owner (via query parameter or localStorage)
          const urlParams = new URLSearchParams(window.location.search);
          const isOwner = urlParams.has('owner') || localStorage.getItem('isOwner') === 'true';
  
          if (isOwner) {
            console.log('Owner access granted during maintenance mode.');
            localStorage.setItem('isOwner', 'true'); // Persist owner access
            return; // Allow the owner to view the website
          }
  
          // Mark that we have redirected to the offline page for this session
          sessionStorage.setItem('redirectedToOffline', 'true');
  
          // Redirect to the offline page
          window.location.replace('/Offline.html');
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
          // Check if the user is the owner
          const urlParams = new URLSearchParams(window.location.search);
          const isOwner = urlParams.has('owner') || localStorage.getItem('isOwner') === 'true';
  
          if (isOwner) {
            console.log('Owner access granted during maintenance mode.');
            localStorage.setItem('isOwner', 'true'); // Persist owner access
            return; // Allow the owner to view the website
          }
  
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
  
  // Check maintenance mode on load for other pages
  if (window.location.pathname !== '/Offline.html') {
    window.onload = checkMaintenanceMode;
  }
  

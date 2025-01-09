// Function to create a clickable Roblox game button
function createGameButton(gameName, placeId) {
  const container = document.getElementById("game-container");

  // Create the button element
  const button = document.createElement("a");
  button.href = `https://www.roblox.com/games/start?launchData=utm1%253A0%252C0%252Cweb-link%252Chome-bottom-play-button%252C%253B&placeId=${placeId}`;
  button.target = "_blank"; // Opens the link in a new tab
  button.className = "play-btn"; // You can style this class to make it look like a button
  button.textContent = `Play ${gameName} on Roblox`;

  // Add styles to make the button clickable and visually interactive
  button.style.display = "inline-block";
  button.style.padding = "15px 30px";
  button.style.color = "white";
  button.style.fontSize = "16px";
  button.style.fontWeight = "bold";
  button.style.textAlign = "center";
  button.style.borderRadius = "5px";
  button.style.textDecoration = "none";
  button.style.transition = "background-color 0.3s ease"; // Smooth transition for hover

  // Add the button to the container
  container.appendChild(button);
}

// Create the button for a specific Roblox game
createGameButton("FREE ADMIN", "17016853613");

// Single game data
const game = {
  name: "FREE ADMIN",
  description: "Welcome to Free Admin! You have cool Admin Powers which allow you to do awesome Admin Commands. This game does allow powerful admin commands but the biggest rule is to have fun!",
  image: "https://tr.rbxcdn.com/180DAY-efa0ba1d97691a2df300b0133e756d4e/768/432/Image/Png/noFilter",
  roles: [
    "⭐ Play with Admin Commands!",
    "😎💬 Chat and Play with Others!",
  ],
  specifications: {
      developer: "GamingLightFam Studios",
      platform: "Roblox",
      device: "Desktop Windows PC | Mobile (IOS & Android)",
      releaseDate: "April 5, 2024",
      voiceChat: "Not Supported",
      camera: "Supported",
      serverSize: "50",
      maturity: "Suitable for everyone",
      genre: "Roleplay & Avatar Sim",
      subgenre: "Morph Roleplay"
  },
};

// Function to display the game details
function displayGameDetails() {
  // Populate game details
  document.getElementById('game-title').textContent = game.name;
  document.getElementById('game-description').textContent = game.description;
  document.getElementById('game-image').src = game.image;

  // Display roles if they exist
  const rolesList = document.getElementById('game-info-list');
  rolesList.innerHTML = ''; // Clear previous roles
  if (game.roles.length > 0) {
      game.roles.forEach(role => {
          const li = document.createElement('li');
          li.textContent = role;
          rolesList.appendChild(li);
      });
  } else {
      const noRolesMessage = document.createElement('li');
      noRolesMessage.textContent = "No roles available for this game.";
      rolesList.appendChild(noRolesMessage);
  }

  // Display game specifications in the Specifications Section
  const specsList = document.getElementById('game-specs-list');
  specsList.innerHTML = ''; // Clear previous specs
  for (const [key, value] of Object.entries(game.specifications)) {
      const li = document.createElement('li');
      li.innerHTML = `<div><strong>${key}:</strong> ${value}</div>`;
      specsList.appendChild(li);
  }
}

// On page load, display the game details
window.onload = displayGameDetails;

 const siteOnline = false;

    function isAdmin() {
      const params = new URLSearchParams(window.location.search);
      return params.get("admin") === "1";
    }

    const allowedPCUsersOffline = ["Erick Denis David"];

    function isAllowedPCUserOffline() {
      const params = new URLSearchParams(window.location.search);
      const user = params.get("user");
      if (!user) return true;
      return allowedPCUsersOffline.some(
        (allowed) => allowed.toLowerCase() === user.toLowerCase()
      );
    }

    const gamesData = [
      {
        name: "Murder Mystery X",
        image:
          "https://tr.rbxcdn.com/180DAY-5f107eed99a7bee5926fa6f650390972/768/432/Image/Webp/noFilter",
        description:
          "Can you solve the mystery and survive each round? <br><br> INNOCENTS: You are the eyes and ears. Run, hide, and use your wits to uncover the Murderer’s identity before it’s too late. Trust no one, everyone could be the killer. <br><br> SHERIFF: You are the protector. Work with the Innocents and use your weapon to eliminate the Murderer. Your aim is their only hope for survival, but you must be careful; you can’t afford to miss. <br><br> MURDERER: You are the danger lurking in the shadows. Your mission is clear: eliminate everyone. Use your stealth and deception to outwit the Innocents and avoid the Sheriff’s watchful eye. Trust no one, and leave no witnesses.",
        screenshots: [
          "https://tr.rbxcdn.com/180DAY-5f107eed99a7bee5926fa6f650390972/768/432/Image/Png/noFilter",
        ],
        genre: "Mystery, Survival",
        subgenre: "1 vs All",
        players: "Up to 12 players",
        developer: "GamingLightFam Studios",
        releaseDate: "2024-07-26",
        placeId: "18657827455",
        roles: ["Innocent", "Sheriff", "Murderer"],
        specifications: {
          Genre: "Mystery, Survival",
          Subgenre: "1 vs All",
          Players: "Up to 12 players",
          Developer: "GamingLightFam Studios",
          "Release Date": "2024-07-26",
        },
        maturity: "Moderate, Blood (Unrealistic/Light), Violence (Moderate/Repeated)",
      },
      {
        name: "PrisonBreak Life",
        image:
          "https://tr.rbxcdn.com/180DAY-6b238cce37260ba55a59430d2ad095d0/150/150/Image/Webp/noFilter",
        description:
          "PrisonBreak Life is a prison game where you can orchestrate stopping criminals before they get away! Team up with friends for even more fun. What role will you play? <br> <br> Live as a prisoner and escape, or become a guard and defend the prison!",
        screenshots: [
          "https://tr.rbxcdn.com/180DAY-bc2d6c2cb59007f9b93587fa1e7a9851/768/432/Image/Webp/noFilter",
          "https://tr.rbxcdn.com/180DAY-60d14d68fb371ba9c29736e998ac632e/768/432/Image/Png/noFilter",
        ],
        genre: "Action, Roleplay",
        subgenre: "Open World Action",
        avatar_type: "R6",
        players: "Up to 25 players",
        developer: "GamingLightFam Studios",
        releaseDate: "2022-12-17",
        placeId: "11839697811",
        roles: ["Guard", "Inmates", "Criminals"],
        specifications: {
          Genre: "Action, Roleplay",
          Subgenre: "Open World Action",
          Players: "Up to 25 players",
          Developer: "GamingLightFam Studios",
          "Release Date": "2022-12-17",
        },
        maturity: "Minimal Violence (Mild/Occasional)",
      },
    ];

    const comingSoonGames = [];

    const navbarHTML = `
      <nav class="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 shadow-md sticky top-0 z-50">
        <div class="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          <a class="flex items-center" href="?page=home" data-page="home" aria-label="GamingLightFam Home">
            <img alt="GamingLightFam Logo, stylized letters GLF in neon purple and blue" class="h-12 w-12" height="48" src="https://static.wixstatic.com/media/66c613_d9d004d838ee40fbbed3521a104129e2~mv2.png" width="48"/>
            <span class="ml-3 text-indigo-300 font-extrabold text-xl md:text-2xl tracking-wide font-orbitron select-none">GamingLightFam</span>
          </a>
          <button aria-expanded="false" aria-label="Toggle menu" class="md:hidden flex flex-col space-y-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-400" id="menu-toggle">
            <span class="block w-7 h-0.5 bg-indigo-300"></span>
            <span class="block w-7 h-0.5 bg-indigo-300"></span>
            <span class="block w-7 h-0.5 bg-indigo-300"></span>
          </button>
          <ul class="hidden md:flex space-x-8 text-indigo-200 font-semibold text-lg" id="nav-links" role="menubar">
            <li role="none"><a role="menuitem" class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=home" data-page="home" tabindex="0">Home</a></li>
            <li role="none"><a role="menuitem" class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=games" data-page="games" tabindex="0">Games</a></li>
            <li role="none"><a role="menuitem" class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=newswire" data-page="newswire" tabindex="0">Newswire</a></li>
          </ul>
        </div>
        <ul class="md:hidden hidden flex-col space-y-4 bg-indigo-900 bg-opacity-90 px-6 py-6 text-indigo-200 font-semibold text-lg" id="mobile-nav-links" role="menu" aria-label="Mobile navigation">
          <li role="none"><a role="menuitem" class="block hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=home" data-page="home" tabindex="0">Home</a></li>
          <li role="none"><a role="menuitem" class="block hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=games" data-page="games" tabindex="0">Games</a></li>
          <li role="none"><a role="menuitem" class="block hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=newswire" data-page="newswire" tabindex="0">Newswire</a></li>
        </ul>
      </nav>
    `;

    const footerHTML = `
      <footer class="bg-indigo-900 text-indigo-200 mt-auto">
        <div class="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-indigo-300">Company</h3>
            <nav class="flex flex-col space-y-2" aria-label="Company links">
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=about" data-page="about" tabindex="0">About us</a>
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=contact" data-page="contact" tabindex="0">Contact</a>
            </nav>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4 text-indigo-300">Games</h3>
            <nav class="flex flex-col space-y-2" aria-label="Games links">
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=games" data-page="games" tabindex="0">Games</a>
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=newswire" data-page="newswire" tabindex="0">Newswire</a>
            </nav>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4 text-indigo-300">Support</h3>
            <nav class="flex flex-col space-y-2" aria-label="Support links">
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=faq" data-page="faq" tabindex="0">FAQ</a>
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=terms" data-page="terms" tabindex="0">Terms of Use</a>
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=privacy" data-page="privacy" tabindex="0">Privacy Policy</a>
            </nav>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4 text-indigo-300">Follow Us</h3>
            <div class="flex space-x-4" aria-label="Social media links">
              <a aria-label="YouTube" href="https://www.youtube.com/@gaminglightfam" rel="noopener noreferrer" target="_blank" tabindex="0">
                <img alt="YouTube logo in red and white" class="h-8 w-8" height="32" src="https://storage.googleapis.com/a1aa/image/16d916f2-a585-4f08-129a-3836e865500b.jpg" width="32"/>
              </a>
              <a aria-label="Facebook" href="https://www.facebook.com/gaminglightfam" rel="noopener noreferrer" target="_blank" tabindex="0">
                <img alt="Facebook logo in blue and white" class="h-8 w-8" height="32" src="https://storage.googleapis.com/a1aa/image/6ba5b5a6-3ecd-483b-87a0-2197ab46dac2.jpg" width="32"/>
              </a>
              <a aria-label="Discord" href="https://discord.gg/VmpFpYB2AT" rel="noopener noreferrer" target="_blank" tabindex="0">
                <img alt="Discord logo in purple and white" class="h-8 w-8" height="32" src="https://storage.googleapis.com/a1aa/image/ecf32053-a00f-4300-4e59-e6f414180702.jpg" width="32"/>
              </a>
              <a aria-label="Roblox" href="https://www.roblox.com/communities/33387843/GamingLightFam-Studios" rel="noopener noreferrer" target="_blank" tabindex="0">
                <img alt="Roblox logo in red and white" class="h-8 w-8" height="32" src="https://storage.googleapis.com/a1aa/image/2bfe394c-af82-439f-e744-d670815f1440.jpg" width="32"/>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-indigo-700 text-center py-4 text-sm text-indigo-400 select-none">
          © 2024 GamingLightFam Inc. All Rights Reserved.
        </div>
      </footer>
    `;

    function renderPrivacy() {
      return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <div class="terms-container">
          <section class="terms-content prose max-w-full">
            <h1>Privacy Policy</h1>
            <p>At GamingLightFam, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our games and services.</p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>Personal information you provide when contacting us or joining our community (e.g., name, email address).</li>
              <li>Usage data related to your interaction with our games on Roblox, including gameplay statistics and preferences.</li>
              <li>Technical data such as IP addresses, device information, and browser type.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul>
              <li>Provide and improve our games and services.</li>
              <li>Communicate with you about updates, events, and support.</li>
              <li>Ensure security and prevent fraud or abuse.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2>3. Data Sharing and Disclosure</h2>
            <p>We do not sell or rent your personal information. We may share data with:</p>
            <ul>
              <li>Roblox Corporation as necessary to operate our games.</li>
              <li>Service providers who assist us in delivering our services.</li>
              <li>Law enforcement or regulatory authorities when required by law.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.</p>

            <h2>5. Your Choices</h2>
            <p>You can choose not to provide certain information, but this may limit your ability to use some features. You may also contact us to update or delete your personal data.</p>

            <h2>6. Children's Privacy</h2>
            <p>Our games are intended for users aged 13 and older. We do not knowingly collect personal information from children under 13 without parental consent.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us through our Roblox profile or at <a href="?page=contact" tabindex="0" class="underline text-indigo-300 hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400">contact us</a>.</p>
          </section>
        </div>
      </main>
      `;
    }

    function renderGames() {
      let html = `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <h2 class="text-3xl font-bold mb-8 text-left text-indigo-400 font-orbitron select-none">Our Games</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 games">
      `;
      gamesData.forEach((game) => {
        const desc = game.description && game.description.trim() !== "" ? game.description : "No description available";
        html += `
          <article class="bg-indigo-800 rounded-lg shadow-lg overflow-hidden flex flex-col relative focus-within:ring-4 focus-within:ring-indigo-500 focus-within:outline-none" tabindex="0" aria-label="Game card for ${game.name}">
            <a href="?page=details&game=${encodeURIComponent(
              game.name
            )}" data-page="details" class="block focus:outline-none focus:ring-0" tabindex="-1">
              <div class="game-image-container relative">
                <img src="${game.image}" alt="Cover image of the game ${game.name} showing a thematic scene" loading="lazy" class="w-full h-48 object-cover rounded-b-lg" />
              </div>
              <div class="p-4 flex-grow flex flex-col">
                <h3 class="text-xl font-semibold mb-2 text-indigo-200">${game.name}</h3>
                <p class="text-indigo-300 flex-grow break-words">${
                  desc.length > 100
                    ? desc.slice(0, 100) + "..."
                    : desc
                }</p>
                <div class="mt-4 text-indigo-400 font-semibold">${game.genre}</div>
              </div>
            </a>
          </article>
        `;
      });
      html += `</div></main>`;
      return html;
    }

    function renderGameDetails(game) {
      if (!game) {
        return `<main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl text-center text-indigo-300 font-orbitron select-none"><p>Game not found.</p></main>`;
      }

      let rolesHTML = game.roles.map((role) => `<li>${role}</li>`).join("");
      let specsHTML = Object.entries(game.specifications)
        .filter(([key]) => key !== "Developer") // exclude Developer here, will show separately
        .map(
          ([key, val]) =>
            `<div class="flex flex-col">
              <span class="font-semibold text-indigo-300">${key}</span>
              <span>${val}</span>
            </div>`
        )
        .join("");

      const desc = game.description && game.description.trim() !== "" ? game.description : "No description available";

      return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <article class="bg-indigo-800 rounded-lg shadow-lg p-6 flex flex-col gap-8">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/2 relative flex-shrink-0">
              <img id="main-screenshot" src="${game.screenshots[0]}" alt="Main screenshot of the game ${game.name} showing gameplay or environment" class="rounded-lg w-full object-cover max-h-[400px]" />
            </div>
            <div class="md:w-1/2 text-indigo-200 flex flex-col justify-between">
              <h2 class="text-4xl font-extrabold mb-1 text-indigo-300 font-orbitron select-text">${game.name}</h2>
              <div class="text-indigo-400 font-semibold mb-4 select-text">Developer: ${game.developer}</div>
              <div class="maturity-label-details" aria-label="Maturity rating">${game.maturity}</div>
              <div class="btn-group flex space-x-4">
                <a href="https://www.roblox.com/games/start?launchData=utm1%253A0%252C0%252Cweb-link%252Chome-bottom-play-button%252C%253B&placeId=${game.placeId}" target="_blank" rel="noopener noreferrer" class="play-btn" aria-label="Play ${game.name} on Roblox" tabindex="0">
                  <i class="fas fa-play mr-2"></i> Play
                </a>
                <a href="?page=games" data-page="games" class="btn-back" aria-label="Back to Games" tabindex="0">
                  <i class="fas fa-arrow-left"></i>
                </a>
              </div>
            </div>
          </div>
          <section class="text-indigo-200 prose max-w-full" aria-label="Game description" tabindex="0">
            <h3 class="text-2xl font-bold mb-4 text-indigo-300 select-none">Description</h3>
            ${desc}
          </section>
          <section class="text-indigo-200 max-w-full" aria-label="Game specifications" tabindex="0">
            <h3 class="text-2xl font-bold mb-4 text-indigo-300 select-none">Specifications</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-indigo-300">
              ${specsHTML}
              <div class="flex flex-col">
                <span class="font-semibold text-indigo-300">Roles</span>
                <ul class="list-disc list-inside text-indigo-200 m-0 p-0">
                  ${rolesHTML}
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>
      `;
    }

    function renderNewswire() {
      return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-7xl text-indigo-200 font-orbitron">
        <h2 class="text-3xl font-bold mb-8 text-left text-indigo-400 select-none">Latest Blog</h2>
        <div id="news-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full mx-auto">
          <p class="text-center text-indigo-300 col-span-full select-none">Loading news posts...</p>
        </div>
      </main>
      `;
    }

    function renderFAQ() {
      return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <h2 class="text-3xl font-bold mb-8 text-center text-indigo-400 font-orbitron select-none">Frequently Asked Questions</h2>
        <section class="space-y-4">
          <div>
            <button class="faq-question w-full text-left bg-indigo-800 rounded-md px-4 py-3 font-semibold text-indigo-300 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-400" aria-expanded="false" aria-controls="faq1" id="faq1-btn" tabindex="0">
              What platforms are your games available on?
              <span class="icon"><i class="fas fa-chevron-down"></i></span>
            </button>
            <div class="faq-answer max-h-0 overflow-hidden transition-max-height duration-300 text-indigo-200 px-4 mt-2" id="faq1" role="region" aria-labelledby="faq1-btn" tabindex="0">
              <p>Our games are primarily available on Roblox, accessible on PC, mobile, and Xbox platforms.</p>
            </div>
          </div>
          <div>
            <button class="faq-question w-full text-left bg-indigo-800 rounded-md px-4 py-3 font-semibold text-indigo-300 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-400" aria-expanded="false" aria-controls="faq2" id="faq2-btn" tabindex="0">
              How can I report bugs or issues?
              <span class="icon"><i class="fas fa-chevron-down"></i></span>
            </button>
            <div class="faq-answer max-h-0 overflow-hidden transition-max-height duration-300 text-indigo-200 px-4 mt-2" id="faq2" role="region" aria-labelledby="faq2-btn" tabindex="0">
              <p>You can report bugs by contacting us through our Roblox profile or via the Contact page on our website.</p>
            </div>
          </div>
          <div>
            <button class="faq-question w-full text-left bg-indigo-800 rounded-md px-4 py-3 font-semibold text-indigo-300 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-400" aria-expanded="false" aria-controls="faq3" id="faq3-btn" tabindex="0">
              Do you have plans for new games?
              <span class="icon"><i class="fas fa-chevron-down"></i></span>
            </button>
            <div class="faq-answer max-h-0 overflow-hidden transition-max-height duration-300 text-indigo-200 px-4 mt-2" id="faq3" role="region" aria-labelledby="faq3-btn" tabindex="0">
              <p>Yes! We are constantly working on new projects and updates. Stay tuned to our Newswire for announcements.</p>
            </div>
          </div>
        </section>
      </main>
      `;
    }

    function renderTerms() {
      return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <div class="terms-container prose max-w-full">
          <section class="terms-content">
            <h1>Terms of Use</h1>
            <p>Welcome to GamingLightFam. By accessing our games and services, you agree to comply with the following terms and conditions.</p>
            <h2>1. Use of Services</h2>
            <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others.</p>
            <h2>2. Intellectual Property</h2>
            <p>All content, including games, images, and text, are owned by GamingLightFam or its licensors.</p>
            <h2>3. User Conduct</h2>
            <p>Users must not engage in cheating, hacking, or any behavior that disrupts the community.</p>
            <h2>4. Limitation of Liability</h2>
            <p>GamingLightFam is not liable for any damages arising from the use of our services.</p>
            <h2>5. Changes to Terms</h2>
            <p>We may update these terms at any time. Continued use constitutes acceptance of changes.</p>
            <h2>6. Contact</h2>
            <p>For questions, please contact us through our Roblox profile or the Contact page.</p>
          </section>
        </div>
      </main>
      `;
    }

    function renderContact() {
      return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-lg">
        <section class="contact-form" aria-label="Contact form">
          <h1 class="text-3xl font-bold mb-6 text-indigo-400 font-orbitron text-center select-none">Contact Us</h1>
          <form id="contactForm" novalidate class="flex flex-col gap-4">
            <label for="name" class="font-semibold text-indigo-300 select-none">Name</label>
            <input type="text" id="name" name="name" required aria-required="true" placeholder="Your full name" class="rounded-md p-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <label for="email" class="font-semibold text-indigo-300 select-none">Email</label>
            <input type="email" id="email" name="email" required aria-required="true" placeholder="you@example.com" class="rounded-md p-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <label for="subject" class="font-semibold text-indigo-300 select-none">Subject</label>
            <input type="text" id="subject" name="subject" required aria-required="true" placeholder="Subject of your message" class="rounded-md p-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <label for="message" class="font-semibold text-indigo-300 select-none">Message</label>
            <textarea id="message" name="message" rows="5" required aria-required="true" placeholder="Write your message here" class="rounded-md p-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-y"></textarea>
            <button type="submit" aria-label="Send message" class="play-btn w-full text-center">Send Message</button>
          </form>
          <p id="formMessage" class="mt-4 text-center text-indigo-300 hidden" role="alert"></p>
        </section>
      </main>
      `;
    }

    function renderAbout() {
      return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl prose prose-indigo">
        <section class="about-container prose max-w-full">
          <h1 class="select-none">About GamingLightFam</h1>
          <p>GamingLightFam, a leading metaverse game developer and publisher, creates immersive connected experiences that bring gaming communities together with globally recognized brands. The company is shaping the future of pop culture franchises, all born within the metaverse.</p>
          <p>Our mission is to deliver dynamic, immersive experiences to our vibrant community while shaping the next generation of gaming and entertainment franchises born in the metaverse.</p>
        </section>
      </main>
      `;
    }

    function renderHome() {
      const featuredGames = gamesData.slice(0, 3);
      let featuredGamesHTML = "";
      featuredGames.forEach((game) => {
        const desc = game.description && game.description.trim() !== "" ? game.description : "No description available";
        featuredGamesHTML += `
          <article class="home-game-card bg-indigo-800 rounded-lg shadow-lg overflow-hidden flex flex-col relative focus-within:ring-4 focus-within:ring-indigo-500 focus-within:outline-none" tabindex="0" aria-label="Featured game ${game.name}">
            <img src="${game.image}" alt="Cover image of the game ${game.name} showing a thematic scene" loading="lazy" class="w-full h-40 sm:h-48 object-cover rounded-t-lg" />
            <div class="home-game-card-content p-4 flex flex-col flex-grow">
              <h3 class="text-xl font-semibold mb-2 text-indigo-200 select-text">${game.name}</h3>
              <p class="flex-grow text-indigo-300 break-words">${
                desc.length > 100
                  ? desc.slice(0, 100) + "..."
                  : desc
              }</p>
              <div class="home-game-genre mt-3 font-semibold text-indigo-400 select-text">${game.genre}</div>
            </div>
          </article>
        `;
      });

      let comingSoonHTML = "";
      if (comingSoonGames.length === 0) {
        comingSoonHTML = `<p class="text-center text-indigo-300 col-span-full mt-4 mb-4 font-orbitron text-lg select-none">There's nothing here just yet stay tuned.</p>`;
      } else {
        comingSoonGames.forEach((game) => {
          const desc = game.description && game.description.trim() !== "" ? game.description : "No description available";
          comingSoonHTML += `
            <article class="home-game-card bg-indigo-800 rounded-lg shadow-lg overflow-hidden flex flex-col relative focus-within:ring-4 focus-within:ring-indigo-500 focus-within:outline-none" tabindex="0" aria-label="Coming soon game ${game.name}">
              <img src="${game.image}" alt="Coming soon cover image for the game ${game.name} showing thematic artwork" loading="lazy" class="w-full h-40 sm:h-48 object-cover rounded-t-lg" />
              <div class="coming-soon-label" aria-label="Coming soon label">Coming Soon</div>
              <div class="home-game-card-content p-4 flex flex-col flex-grow">
                <h3 class="text-xl font-semibold mb-2 text-indigo-200 select-text">${game.name}</h3>
                <p class="flex-grow text-indigo-300 break-words">${
                  desc.length > 100
                    ? desc.slice(0, 100) + "..."
                    : desc
                }</p>
                <div class="home-game-genre mt-3 font-semibold text-indigo-400 select-text">${game.genre}</div>
              </div>
            </article>
          `;
        });
      }

      return `
      <section class="full-width-banner max-w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-center text-e0e7ff p-12 rounded-md shadow-lg font-orbitron mx-4 sm:mx-auto max-w-7xl select-none" role="banner" aria-label="Main promotional banner">
        <div>
          <h1 class="text-4xl sm:text-5xl font-extrabold mb-4">Unleashing the potential of metaverse gaming</h1>
          <p class="text-lg max-w-3xl mx-auto mb-8">Metaverse unleashing the potential. Committed to creating breakthrough experiences and original content, GamingLightFam strives to achieve entertainment excellence.</p>
        </div>
      </section>
      <section class="whats-up-container max-w-7xl mx-auto bg-indigo-800 rounded-md shadow-lg p-6 mt-10 flex flex-col md:flex-row gap-6 text-indigo-200" aria-label="What's Up With Us Facebook feed and description">
        <div class="whats-up-text flex-1 text-lg leading-relaxed select-text">
          <h2 class="text-3xl font-bold mb-4 text-indigo-400 font-orbitron select-none">What's Up With Us?</h2>
          <p>Stay connected with GamingLightFam Studios through our Facebook page. Get the latest updates, community events, and behind-the-scenes content. Join the conversation and be part of our growing community!</p>
        </div>
        <div class="whats-up-iframe-wrapper flex-1 flex justify-center">
          <iframe allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen scrolling="no" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGamingLightFam&amp;tabs=timeline&amp;width=400&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" title="Facebook timeline feed of GamingLightFam Studios" class="rounded-md shadow-lg w-full max-w-md h-[500px] border-0"></iframe>
        </div>
      </section>
      <h2 class="home-section-title text-center text-indigo-400 font-orbitron mt-16 mb-8 select-none">Featured Games</h2>
      <section class="home-games-grid max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        ${featuredGamesHTML}
      </section>
      <div class="text-center mt-8 mb-16">
        <a href="?page=games" data-page="games" class="cta-btn inline-block px-6 py-3 rounded-md font-bold text-indigo-900 bg-indigo-200 hover:bg-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-400" tabindex="0" aria-label="Explore all games">
          Explore Our Games
        </a>
      </div>
      <h2 class="home-section-title text-center text-indigo-400 font-orbitron mt-8 mb-8 select-none">Coming Soon</h2>
      <section class="home-games-grid max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        ${comingSoonHTML}
      </section>
      `;
    }

    async function fetchPosts(blogId, apiKey) {
      const newsContainer = document.getElementById("news-container");
      if (!newsContainer) return;
      try {
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=6`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        if (!data.items || data.items.length === 0) {
          newsContainer.innerHTML = `<p class="text-center text-indigo-300 col-span-full select-none">No news posts available at the moment.</p>`;
          return;
        }
        let postsHTML = "";
        data.items.forEach((post) => {
          let imgSrc =
            "https://placehold.co/600x300/png?text=GamingLightFam+News&font=Orbitron";
          const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/i);
          if (imgMatch && imgMatch[1]) {
            imgSrc = imgMatch[1];
          }
          const publishedDate = new Date(post.published).toLocaleDateString(
            undefined,
            { year: "numeric", month: "long", day: "numeric" }
          );
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = post.content;
          const textContent = tempDiv.textContent || tempDiv.innerText || "";
          const snippet =
            textContent.length > 150
              ? textContent.slice(0, 150) + "..."
              : textContent;

          postsHTML += `
            <article tabindex="0" class="post bg-indigo-800 rounded-lg shadow-md p-4 flex flex-col text-center text-indigo-200 focus:outline-none focus:ring-4 focus:ring-indigo-500">
              <img src="${imgSrc}" alt="News post titled '${post.title}' image" loading="lazy" class="rounded-md mb-4 object-cover w-full h-40 sm:h-48" />
              <h3 class="font-semibold text-lg mb-1">${post.title}</h3>
              <time datetime="${post.published}" class="text-indigo-400 text-sm mb-3 block">${publishedDate}</time>
              <p class="flex-grow mb-4 break-words">${snippet}</p>
              <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="read-more text-indigo-300 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" tabindex="0">Read More</a>
            </article>
          `;
        });
        newsContainer.innerHTML = postsHTML;
      } catch (error) {
        newsContainer.innerHTML = `<p class="text-center text-red-500 col-span-full select-none">Failed to load news posts. Please try again later.</p>`;
        console.error("Error fetching news posts:", error);
      }
    }

    const pages = {
      home: renderHome(),
      games: renderGames(),
      newswire: renderNewswire(),
      faq: renderFAQ(),
      terms: renderTerms(),
      privacy: renderPrivacy(),
      contact: renderContact(),
      about: renderAbout(),
    };

    function renderApp() {
      const app = document.getElementById("app");
      if (!siteOnline && !isAdmin() && !isAllowedPCUserOffline()) {
        app.innerHTML = `<main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl"></main>`;
      } else {
        app.innerHTML = `
          ${navbarHTML}
          <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-7xl"></main>
          ${footerHTML}
        `;
      }
    }

    function loadPage(page, gameName) {
      const mainContent = document.getElementById("main-content");
      if (!mainContent) return;

      if (!siteOnline && !isAdmin() && !isAllowedPCUserOffline()) {
        mainContent.innerHTML = renderOfflinePage();
        document.title = "Offline ・ GamingLightFam";
        return;
      }

      if (page === "details") {
        const gameIndex = gamesData.findIndex((g) => g.name === gameName);
        const game = gamesData[gameIndex];
        mainContent.innerHTML = renderGameDetails(game);
        document.title = game ? game.name + " ・ GamingLightFam" : "GamingLightFam";
      } else if (pages[page]) {
        if (typeof pages[page] === "function") {
          mainContent.innerHTML = pages[page]();
        } else {
          mainContent.innerHTML = pages[page];
        }
        document.title =
          page.charAt(0).toUpperCase() + page.slice(1) + " ・ GamingLightFam";
        if (page === "faq") {
          setupFAQToggle();
        } else if (page === "newswire") {
          fetchPosts(blogId, apiKey);
        } else if (page === "contact") {
          setupContactForm();
        }
      } else {
        mainContent.innerHTML = `<p class="text-center text-indigo-300 text-xl mt-20 font-orbitron select-none">Page not found.</p>`;
        document.title = "Page Not Found ・GamingLightFam";
      }
    }

    function renderOfflinePage() {
      return `
      <section class="offline-container min-h-screen text-indigo-200 flex flex-col justify-center items-center p-6 text-center font-orbitron select-none">
        <div class="flex flex-col items-center justify-center max-w-xs w-full">
          <img src="https://static.wixstatic.com/media/66c613_d9d004d838ee40fbbed3521a104129e2~mv2.png" alt="Illustration of a computer screen with maintenance tools and a caution sign" class="w-full h-auto rounded-md" />
          <h1 class="text-4xl font-extrabold mb-4 text-indigo-400">We'll be back soon!</h1>
          <p class="text-lg max-w-md mb-6 text-indigo-300">Our website is currently undergoing scheduled maintenance. We apologize for the inconvenience and appreciate your patience. Please check back later.</p>
          <p class="status-link text-indigo-400 text-ig">Please visit our <a href="https://games-status.instatus.com/" target="_blank" rel="noopener noreferrer" class="underline hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded">Status Page</a> for more information</p>
        </div>
      </section>
      `;
    }

    function handleNavClick(e) {
      if (e.target.matches("a[data-page]")) {
        e.preventDefault();
        const page = e.target.getAttribute("data-page");
        history.pushState({ page }, "", `?page=${page}`);
        loadPage(page);
        closeMobileMenu();
      } else if (e.target.closest("a[data-page]")) {
        e.preventDefault();
        const link = e.target.closest("a[data-page]");
        const page = link.getAttribute("data-page");
        history.pushState({ page }, "", `?page=${page}`);
        loadPage(page);
        closeMobileMenu();
      }
    }

    function handleGameLinkClick(e) {
      const link = e.target.closest("a");
      if (!link) return;
      const url = new URL(link.href);
      const params = new URLSearchParams(url.search);
      if (params.get("page") === "details" && params.has("game")) {
        e.preventDefault();
        const gameName = params.get("game");
        history.pushState(
          { page: "details", game: gameName },
          "",
          `?page=details&game=${encodeURIComponent(gameName)}`
        );
        loadPage("details", gameName);
        closeMobileMenu();
      }
    }

    function setupMenuToggle() {
      const menuToggle = document.getElementById("menu-toggle");
      const mobileNavLinks = document.getElementById("mobile-nav-links");
      if (!menuToggle || !mobileNavLinks) return;
      menuToggle.addEventListener("click", () => {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
        menuToggle.setAttribute("aria-expanded", !expanded);
        mobileNavLinks.classList.toggle("hidden");
      });
    }
    function closeMobileMenu() {
      const mobileNavLinks = document.getElementById("mobile-nav-links");
      const menuToggle = document.getElementById("menu-toggle");
      if (mobileNavLinks && !mobileNavLinks.classList.contains("hidden")) {
        mobileNavLinks.classList.add("hidden");
        menuToggle.setAttribute("aria-expanded", false);
      }
    }

    function setupFAQToggle() {
      const faqQuestions = document.querySelectorAll(".faq-question");
      faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
          const answer = question.nextElementSibling;
          const expanded = question.getAttribute("aria-expanded") === "true";
          if (expanded) {
            question.setAttribute("aria-expanded", "false");
            answer.style.maxHeight = null;
            answer.classList.remove("open");
          } else {
            question.setAttribute("aria-expanded", "true");
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.classList.add("open");
          }
        });
        question.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            question.click();
          }
        });
      });
    }

    function setupContactForm() {
      const form = document.getElementById("contactForm");
      const messageEl = document.getElementById("formMessage");
      if (!form || !messageEl) return;

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        messageEl.classList.add("hidden");
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !subject || !message) {
          messageEl.textContent = "Please fill in all fields.";
          messageEl.classList.remove("hidden");
          return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          messageEl.textContent = "Please enter a valid email address.";
          messageEl.classList.remove("hidden");
          return;
        }

        messageEl.textContent = "Sending message...";
        messageEl.classList.remove("hidden");

        setTimeout(() => {
          messageEl.textContent = "Thank you for contacting us! We will get back to you soon.";
          form.reset();
        }, 1500);
      });
    }

    function initialLoad() {
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get("page") || "home";
      const gameName = urlParams.get("game");
      loadPage(page, gameName);
    }

    window.addEventListener("popstate", (event) => {
      const state = event.state || {};
      const page = state.page || "home";
      const gameName = state.game;
      loadPage(page, gameName);
    });

    document.addEventListener("DOMContentLoaded", () => {
      renderApp();
      setupMenuToggle();
      if(siteOnline || isAdmin() || isAllowedPCUserOffline()) {
        document.getElementById("nav-links").addEventListener("click", handleNavClick);
        document.getElementById("mobile-nav-links").addEventListener("click", handleNavClick);
      }
      document.getElementById("main-content").addEventListener("click", handleGameLinkClick);
      initialLoad();
    });

    const blogId = "4949966112793315828";
    const apiKey = "AIzaSyBvtm9bhsL9wjJAB893yxuEX3CSS8fF24g";

// ============================================================================
// JAVASCRIPT BOM (BROWSER OBJECT MODEL): COMPLETE MASTER GUIDE (TOPIC #12)
// ============================================================================
// DEFINITION: While the DOM lets JavaScript control the *web page content* 
// (HTML/CSS), the BOM (Browser Object Model) lets JavaScript talk directly to 
// the *web browser itself*—controlling browser tabs, URLs, back/forward history,
// screen dimensions, timers, and popup dialogs.
//
// NOTE: The root object of the BOM is 'window'. All global browser APIs live 
// inside 'window' (e.g., window.alert() is the same as calling alert()).


// ============================================================================
// 1. THE 'window' OBJECT (THE GLOBAL ROOT)
// ============================================================================
// DEFINITION: Represents the open browser tab/window. Every global function and
// 'var' variable automatically attaches to 'window'.

console.log("Inner Viewport Width:", window.innerWidth);   // Width inside scrollbars (px)
console.log("Inner Viewport Height:", window.innerHeight); // Height inside scrollbars (px)
console.log("Outer Browser Width:", window.outerWidth);    // Total browser window width

// Opening & Closing Tabs/Popups (Note: browsers block popups unless triggered by a click)
// const newTab = window.open("https://example.com", "_blank");
// newTab.close(); // Closes the tab opened by script


// ============================================================================
// 2. BROWSER POPUP DIALOGS (alert, confirm, prompt)
// ============================================================================
// WARNING: These methods pause ("block") all JavaScript execution until the user
// clicks a button. Avoid in modern UIs (use custom HTML modals instead).

// A. alert() — Displays a message with an OK button (returns undefined)
// alert("Welcome to the site!");

// B. confirm() — Displays OK / Cancel buttons (returns true or false)
// const isSure = confirm("Are you sure you want to delete this item?");
// console.log("User confirmed:", isSure);

// C. prompt() — Asks user for text input (returns string, or null if cancelled)
// const userName = prompt("Enter your name:", "Guest");
// console.log("Entered name:", userName);


// ============================================================================
// 3. TIMERS (setTimeout & setInterval)
// ============================================================================
// DEFINITION: Schedule code to run after a delay or repeatedly at intervals.
// (Measured in milliseconds: 1000ms = 1 second).

// A. setTimeout() — Runs ONCE after the specified delay
const timeoutId = setTimeout(() => {
  console.log("setTimeout: Executed after 2 seconds!");
}, 2000);

// Cancel a scheduled timeout before it runs:
// clearTimeout(timeoutId);

// B. setInterval() — Runs REPEATEDLY every X milliseconds
let seconds = 0;
const intervalId = setInterval(() => {
  seconds++;
  console.log(`setInterval tick: ${seconds}s`);

  if (seconds === 3) {
    clearInterval(intervalId); // CRITICAL: Always stop intervals when done!
    console.log("Interval stopped.");
  }
}, 1000);


// ============================================================================
// 4. 'window.location' (READING & CHANGING THE CURRENT URL)
// ============================================================================
// DEFINITION: Inspects the current web address or redirects the user to a new page.

console.log("Full URL:", location.href);         // e.g., "https://example.com:8080/shop?id=5#top"
console.log("Domain/Host:", location.hostname);  // e.g., "example.com"
console.log("Path:", location.pathname);         // e.g., "/shop"
console.log("Query String:", location.search);   // e.g., "?id=5"
console.log("Hash:", location.hash);             // e.g., "#top"
console.log("Protocol:", location.protocol);     // e.g., "https:"

// Pro-Tip: Reading URL query parameters cleanly (?id=5&sort=asc)
const params = new URLSearchParams(location.search);
console.log("Query 'id':", params.get("id"));

// Navigation & Reloading (Uncomment to test in browser):
// location.href = "https://google.com"; // Redirects to new URL (saves in history)
// location.assign("https://google.com"); // Same as setting location.href
// location.replace("https://google.com"); // Redirects WITHOUT saving current page in Back button
// location.reload();                    // Refreshes the current page


// ============================================================================
// 5. 'window.history' (BACK, FORWARD & SPA ROUTING)
// ============================================================================
// DEFINITION: Controls the browser tab's session history stack.

console.log("Pages in session history:", history.length);

// Move through browser history (same as clicking browser Back/Forward arrows):
// history.back();    // Go back 1 page
// history.forward(); // Go forward 1 page
// history.go(-2);    // Go back 2 pages

// Modern Single-Page App (SPA) URL update without reloading the page:
// history.pushState({ page: 2 }, "", "/page-2");


// ============================================================================
// 6. 'window.navigator' (BROWSER, OS, NETWORK & DEVICE INFO)
// ============================================================================
// DEFINITION: Provides information about the user's browser, language, online
// status, and device capabilities.

console.log("Browser Language:", navigator.language);     // e.g., "en-US"
console.log("Is Online?:", navigator.onLine);           // true (connected) or false (offline)
console.log("Cookies Enabled?:", navigator.cookieEnabled); // true / false
console.log("User Agent:", navigator.userAgent);        // Browser & OS string

// Modern Navigator APIs (Clipboard & Geolocation):
// navigator.clipboard.writeText("Copied text!"); // Copies text to system clipboard


// ============================================================================
// 7. 'window.screen' (USER'S PHYSICAL MONITOR / DISPLAY)
// ============================================================================
// DEFINITION: Gives dimensions of the user's actual physical screen (not just
// the browser window).

console.log("Total Screen Width:", screen.width);           // e.g., 1920
console.log("Total Screen Height:", screen.height);         // e.g., 1080
console.log("Available Width (minus taskbar):", screen.availWidth);
console.log("Color Depth:", screen.colorDepth);             // e.g., 24-bit


// ============================================================================
// 8. WEB STORAGE API (localStorage & sessionStorage)
// ============================================================================
// DEFINITION: Stores key-value string data right inside the user's browser.
// - localStorage:   Persists forever (even after closing the browser/restarting).
// - sessionStorage: Cleared automatically as soon as the browser tab is closed.

// Save data (Must convert objects/arrays to strings using JSON.stringify)
localStorage.setItem("theme", "dark");
localStorage.setItem("user", JSON.stringify({ name: "Ali", role: "Admin" }));

// Read data (Convert JSON strings back into objects using JSON.parse)
const savedTheme = localStorage.getItem("theme");
const savedUser  = JSON.parse(localStorage.getItem("user"));
console.log("Stored Theme:", savedTheme, "| User:", savedUser);

// Delete data
localStorage.removeItem("theme"); // Removes single key
// localStorage.clear();          // Wipes all localStorage for this site


// ============================================================================
// QUICK BOM CHEAT SHEET
// ============================================================================
// - Viewport size:      window.innerWidth, window.innerHeight
// - Popups:             alert(), confirm(), prompt()
// - Timers:             setTimeout() / clearTimeout(), setInterval() / clearInterval()
// - URL & Redirects:    location.href, location.pathname, location.search, location.reload()
// - Browser Back/Fwd:   history.back(), history.forward(), history.go(-1)
// - Device / Network:   navigator.onLine, navigator.language, navigator.clipboard
// - Physical Monitor:   screen.width, screen.height
// - Browser Storage:    localStorage.setItem() / getItem() / removeItem()
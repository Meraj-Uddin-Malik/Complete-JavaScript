// ============================================================================
// JAVASCRIPT DOM (DOCUMENT OBJECT MODEL): COMPLETE MASTER GUIDE (TOPIC #11)
// ============================================================================
// DEFINITION: When a web page loads, the browser converts your HTML into a live
// tree of JavaScript objects called the DOM ("document"). Using JavaScript, you
// can select, read, modify, create, delete, and listen to events on any HTML element.
//
// NOTE: Because the DOM belongs to the browser, run these examples in a browser
// console or linked <script> tag inside an HTML file (not Node.js).


// ============================================================================
// 1. SELECTING ELEMENTS FROM THE DOM
// ============================================================================

// A. Modern Universal Selectors (Recommended — uses standard CSS selectors)
const mainHeading = document.querySelector("#title");        // Selects 1st match by ID
const firstCard   = document.querySelector(".card");         // Selects 1st match by Class
const allButtons  = document.querySelectorAll("button.btn"); // Returns a NodeList of ALL matches

// B. Classic Fast Selectors (Still widely used)
const headerById    = document.getElementById("header");          // Fast ID lookup (no '#' needed)
const itemsByClass  = document.getElementsByClassName("item");    // Returns a live HTMLCollection
const tagsByName    = document.getElementsByTagName("p");         // Selects all <p> tags

// TIP: querySelectorAll() returns a static NodeList (supports .forEach() directly).
// HTMLCollection does NOT support .forEach() unless converted with Array.from().
allButtons.forEach((btn) => console.log("Button found:", btn.textContent));


// ============================================================================
// 2. READING & CHANGING CONTENT (textContent vs. innerHTML)
// ============================================================================

const box = document.querySelector("#message-box");

// A. textContent (Safest & Fastest — plain text only)
box.textContent = "Welcome back, Ali!";

// B. innerText (Respects CSS visibility — ignores hidden elements)
console.log("Visible text:", box.innerText);

// C. innerHTML (Parses & renders HTML tags inside the element)
// SECURITY WARNING: Never put untrusted user input into innerHTML (prevents XSS attacks!).
box.innerHTML = "<strong>Welcome back</strong>, <em>Ali!</em>";


// ============================================================================
// 3. MODIFYING ATTRIBUTES & INLINE STYLES
// ============================================================================

const profileImg = document.querySelector("#avatar");

// A. Attributes (src, href, alt, disabled, data-*)
profileImg.setAttribute("src", "new-photo.png");     // Set or update attribute
console.log("Image src:", profileImg.getAttribute("src")); // Read attribute
profileImg.removeAttribute("title");                 // Remove attribute

// Data attributes (data-user-id="42") are accessed via .dataset:
// console.log(profileImg.dataset.userId); // "42"

// B. Inline Styles (CSS properties use camelCase in JS: background-color -> backgroundColor)
box.style.backgroundColor = "#1e293b";
box.style.color = "white";
box.style.padding = "12px";


// ============================================================================
// 4. MANAGING CSS CLASSES (classList — BEST PRACTICE FOR STYLING)
// ============================================================================
// DEFINITION: Instead of cluttering JS with inline styles, toggle CSS classes.

const modal = document.querySelector("#modal");

modal.classList.add("active");       // Adds class 'active'
modal.classList.remove("hidden");    // Removes class 'hidden'
modal.classList.toggle("dark-mode"); // Adds if missing, removes if already present
console.log("Is active?", modal.classList.contains("active")); // true or false


// ============================================================================
// 5. CREATING, INSERTING & REMOVING ELEMENTS DYNAMICALLY
// ============================================================================

const taskList = document.querySelector("#task-list");

// Step 1: Create a brand-new element in memory
const newItem = document.createElement("li");
newItem.textContent = "Master JavaScript DOM";
newItem.classList.add("task-item");

// Step 2: Insert it into the live page
taskList.append(newItem);        // Adds to the END of taskList
// taskList.prepend(newItem);    // Adds to the START of taskList
// taskList.before(newItem);     // Inserts BEFORE taskList itself
// taskList.after(newItem);      // Inserts AFTER taskList itself

// Step 3: Removing an element
// newItem.remove();             // Modern, clean way to delete an element from DOM


// ============================================================================
// 6. TRAVERSING THE DOM TREE (MOVING BETWEEN RELATIVES)
// ============================================================================

const activeItem = document.querySelector(".task-item");

// Moving UP to parents
console.log("Parent:", activeItem.parentElement);
console.log("Closest wrapper:", activeItem.closest(".container")); // Finds nearest matching ancestor

// Moving DOWN to children
console.log("All children:", taskList.children);
console.log("First child:", taskList.firstElementChild);
console.log("Last child:", taskList.lastElementChild);

// Moving SIDEWAYS to siblings
console.log("Next sibling:", activeItem.nextElementSibling);
console.log("Previous sibling:", activeItem.previousElementSibling);


// ============================================================================
// 7. DOM EVENTS & EVENT LISTENERS (INTERACTIVITY)
// ============================================================================
// DEFINITION: Events are actions triggered by the user or browser (clicks, typing,
// form submissions, scrolling). addEventListener() lets you react to them.

const submitBtn = document.querySelector("#submit-btn");

// A. Basic Click Event (The 'event' or 'e' object holds details about what happened)
submitBtn.addEventListener("click", function(event) {
  console.log("Clicked element:", event.target);
});

// B. Form Submit Event & preventDefault()
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // CRITICAL: Stops the browser from reloading the page!
  const emailValue = document.querySelector("#email-input").value;
  console.log("Form submitted with:", emailValue);
});

// C. Common Event Types:
// - Mouse:    "click", "dblclick", "mouseenter", "mouseleave"
// - Keyboard: "keydown", "keyup" (check e.key for which key was pressed)
// - Form:     "submit", "input" (fires on every keystroke), "change", "focus", "blur"
// - Window:   "DOMContentLoaded" (HTML parsed), "scroll", "resize"


// ============================================================================
// 8. EVENT BUBBLING & EVENT DELEGATION (PRO PATTERN)
// ============================================================================
// DEFINITION:
// - Event Bubbling: When you click a child element (like a button inside a <div>),
//   the event bubbles UP through its parent, grandparent, all the way to <body>.
// - Event Delegation: Instead of attaching 100 listeners to 100 list items, attach
//   ONE listener to their parent and check 'e.target' to see which child was clicked!

taskList.addEventListener("click", (e) => {
  // Check if the clicked element (or its parent) has the 'delete-btn' class
  if (e.target.matches(".delete-btn")) {
    e.target.closest("li").remove(); // Deletes only that specific list item!
    console.log("Task deleted via Event Delegation!");
  }
});


// ============================================================================
// QUICK DOM CHEAT SHEET
// ============================================================================
// - Select 1 / Many:       document.querySelector(".cls"), document.querySelectorAll(".cls")
// - Change Text / HTML:    el.textContent = "...", el.innerHTML = "..."
// - Edit Classes:          el.classList.add(), .remove(), .toggle(), .contains()
// - Create & Add:          const div = document.createElement("div"); parent.append(div);
// - Delete Element:        el.remove()
// - Listen to Events:      el.addEventListener("click", (e) => { ... })
// - Stop Form Reload:      e.preventDefault()
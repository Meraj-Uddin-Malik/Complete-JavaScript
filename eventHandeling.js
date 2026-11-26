// ============================================================================
// JAVASCRIPT EVENT HANDLING: COMPLETE MASTER GUIDE (TOPIC #13)
// ============================================================================
// DEFINITION: Events are signals fired by the browser when a user interacts 
// with a page (clicks, typing, scrolling, submitting forms) or when the browser
// finishes a task (page loaded, image failed, network offline).
// Event Handling is the process of listening for those signals and running code.
//
// NOTE: Run these examples inside a browser environment (linked to an HTML file).


// ============================================================================
// 1. THE 3 WAYS TO ATTACH AN EVENT LISTENER
// ============================================================================

const btn = document.querySelector("#action-btn");

// Method A: Inline HTML Attribute (LEGACY — Avoid in modern apps)
// <button onclick="alert('Clicked!')">Click Me</button>

// Method B: DOM Property (LIMITATION: Overwrites previous handlers if set twice)
// btn.onclick = () => console.log("First handler");
// btn.onclick = () => console.log("Second handler (overwrote the first!)");

// Method C: addEventListener() (MODERN GOLD STANDARD)
// DEFINITION: Attaches an event handler without overwriting existing ones, and
// gives full control over capturing, bubbling, and cleanup.
function handleClick() {
  console.log("Button clicked via addEventListener!");
}

btn.addEventListener("click", handleClick);
btn.addEventListener("click", () => console.log("Multiple listeners work cleanly!"));

// Removing an Event Listener (CRITICAL: Must pass the exact same named function!)
// btn.removeEventListener("click", handleClick);


// ============================================================================
// 2. THE EVENT OBJECT ('event' or 'e')
// ============================================================================
// DEFINITION: Whenever an event fires, JavaScript automatically passes an 
// Event Object into your callback containing details about what just happened.

btn.addEventListener("click", (e) => {
  console.log("Event Type:", e.type);             // e.g., "click"
  console.log("Exact Element Clicked:", e.target); // Element that triggered the event
  console.log("Listener Owner:", e.currentTarget); // Element addEventListener is attached to
  console.log("Mouse Coordinates:", e.clientX, e.clientY);
});


// ============================================================================
// 3. PREVENTING DEFAULT BROWSER BEHAVIOR (e.preventDefault())
// ============================================================================
// DEFINITION: Stops the browser from running its built-in default action
// (such as reloading the page on form submit, or opening a link on <a> click).

const signupForm = document.querySelector("#signup-form");

signupForm?.addEventListener("submit", (e) => {
  e.preventDefault(); // Stops page refresh!
  console.log("Form handled by JavaScript without reloading.");
});

// Block right-click context menu on a protected element:
// document.addEventListener("contextmenu", (e) => e.preventDefault());


// ============================================================================
// 4. MOST COMMON BROWSER EVENTS BY CATEGORY
// ============================================================================

// A. Mouse Events
// - "click"      : Single left click
// - "dblclick"   : Double click
// - "mouseenter" : Mouse enters element (does NOT bubble — best for hover logic)
// - "mouseleave" : Mouse leaves element (does NOT bubble)
// - "mouseover"  : Mouse enters element OR any of its children (bubbles)

// B. Keyboard Events
document.addEventListener("keydown", (e) => {
  // e.key = actual character ("a", "Enter", "Escape", "ArrowUp")
  // e.code = physical key location ("KeyA", "Space")
  if (e.key === "Escape") {
    console.log("Escape pressed — closing modal!");
  }
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault(); // Overrides browser's default Ctrl+S "Save Page" dialog!
    console.log("Custom Ctrl+S save triggered!");
  }
});

// C. Form & Input Events
const searchInput = document.querySelector("#search-input");

// - "input"  : Fires IMMEDIATELY on every single keystroke, paste, or clear
searchInput?.addEventListener("input", (e) => {
  console.log("Live typing value:", e.target.value);
});

// - "change" : Fires only AFTER the user finishes editing and leaves the field (blur)
// - "focus"  : Input becomes active (clicked/tabbed into)
// - "blur"   : Input loses focus (great for showing validation errors)

// D. Document & Window Lifecycle Events
window.addEventListener("DOMContentLoaded", () => {
  console.log("HTML fully parsed and DOM tree is ready!");
});

window.addEventListener("online",  () => console.log("Internet connection restored!"));
window.addEventListener("offline", () => console.log("You are offline!"));


// ============================================================================
// 5. EVENT PROPAGATION: CAPTURING, TARGET & BUBBLING
// ============================================================================
// DEFINITION: When you click a button inside a <div> inside <body>, the event
// travels through 3 phases:
//   Phase 1 (Capturing): Travels DOWN from window -> document -> body -> parent
//   Phase 2 (Target):    Reaches the exact clicked element
//   Phase 3 (Bubbling):  Bubbles UP from child -> parent -> body -> document (DEFAULT)

const parentBox = document.querySelector("#parent-box");
const childBtn  = document.querySelector("#child-btn");

// Default (Bubbling phase — runs AFTER childBtn)
parentBox?.addEventListener("click", () => {
  console.log("2. Parent Box (Bubbling Phase)");
});

// Passing '{ capture: true }' runs during Phase 1 (BEFORE childBtn!)
parentBox?.addEventListener("click", () => {
  console.log("0. Parent Box (Capturing Phase)");
}, { capture: true });

childBtn?.addEventListener("click", (e) => {
  console.log("1. Child Button (Target Phase)");
  // e.stopPropagation(); // Stops the event from bubbling up to parentBox!
});


// ============================================================================
// 6. EVENT DELEGATION (SCALABLE PERFORMANCE PATTERN)
// ============================================================================
// DEFINITION: Instead of attaching separate event listeners to 500 list items
// (which wastes memory and breaks for newly added items), attach ONE listener
// to their common parent and check 'e.target' (or 'e.target.closest()').

const todoList = document.querySelector("#todo-list");

todoList?.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");
  if (!deleteBtn) return; // Ignore clicks elsewhere inside the list

  const listItem = deleteBtn.closest("li");
  listItem.remove();
  console.log("Deleted item efficiently via Event Delegation!");
});


// ============================================================================
// 7. ADVANCED OPTIONS & CUSTOM EVENTS
// ============================================================================

// A. One-Time Listener ('{ once: true }')
// Automatically removes itself after firing once!
btn?.addEventListener("click", () => {
  console.log("This listener runs ONCE and auto-deletes itself.");
}, { once: true });

// B. Passive Listener ('{ passive: true }')
// Tells the browser you will NEVER call preventDefault(), making mobile scrolling smooth.
window.addEventListener("scroll", () => {
  // Smooth scroll tracking
}, { passive: true });

// C. Creating & Dispatching Custom Events
const orderCompleted = new CustomEvent("orderSuccess", {
  detail: { orderId: 9021, total: 4500 }
});

document.addEventListener("orderSuccess", (e) => {
  console.log(`Custom Event Fired! Order #${e.detail.orderId} = Rs.${e.detail.total}`);
});

document.dispatchEvent(orderCompleted); // Manually triggers the custom event!


// ============================================================================
// QUICK EVENT HANDLING CHEAT SHEET
// ============================================================================
// - Attach / Remove:       el.addEventListener("click", fn), el.removeEventListener("click", fn)
// - Stop Page Reload:      e.preventDefault()
// - Stop Bubbling Up:      e.stopPropagation()
// - Clicked vs Owner:      e.target (actual clicked) vs e.currentTarget (listener element)
// - Run Only Once:         el.addEventListener("click", fn, { once: true })
// - Event Delegation:      Attach 1 listener on parent -> check e.target.closest(".btn")
// - Custom Events:         new CustomEvent("name", { detail: {...} }) + el.dispatchEvent()
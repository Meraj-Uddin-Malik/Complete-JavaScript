let element = document.getElementById("Begen");
let first = element.getAttribute("class");
console.log(first);
let second = element.getAttribute("id");
console.log(second);
let third = element.getAttribute("style");
// element.setAttribute("hidden", "true");

element.removeAttribute("id");
console.log(third);
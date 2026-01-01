let a = document.getElementsByTagName("div")[0];
a.innerHTML = a.innerHTML + "<h1>This is heading</h1><p>This is paragraph</p>";

let b = document.createElement("div");
b.innerHTML = "<h1>This is New Element</h1><p>This is new paragraph</p>";
document.body.appendChild(b);
b.prepend("This is prepended text.");
b.insertAdjacentHTML("afterend", "<h2>This is inserted using insertAdjacentHTML</h2>");
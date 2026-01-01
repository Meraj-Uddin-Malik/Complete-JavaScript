let variable = document.body.firstChild.nodeName;
console.log(variable); // #text

let x = document.getElementsByTagName("span")[0].innerHTML;
console.log(x); // Hy I am a Span

let y = document.getElementsByTagName("span")[0].outerHTML; // outerHTML gives the whole element including the tags
let first = document.getElementById("first");

console.log(y); // <span>Hy I am a Span</span>
console.log(first.innerHTML); // Hy I am a Span
console.log(first.outerHTML); // <span>Hy I am a Span</span>
console.log(document.body.firstChild.nodeValue); // hello

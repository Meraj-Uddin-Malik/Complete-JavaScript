let variable = document.body.firstChild.nodeName;
console.log(variable); // #text

let x = document.getElementsByTagName("span")[0].innerHTML; 
console.log(x); // Hy I am a Span

let y = document.getElementsByTagName("span")[0].outerHTML; 
console.log(y); // <span>Hy I am a Span</span>
console.log(first.innerHTML);
console.log(first.outerHTML);
console.log(document.body.firstChild.nodeValue)
let id1 = document.getElementById("id1");
if (id1) {
  console.log(id1)

  console.log(id1.matches(".class"))
  console.log(id1.matches(".box"))
} else {
  console.log("Element with id 'id1' not found")
}
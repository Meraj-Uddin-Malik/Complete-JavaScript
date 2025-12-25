let t = document.body.firstElementChild.firstElementChild; // Access the table element
console.log(t) // Entire table element
console.log(t.row); // First row of the table
console.log(t.tHead); // Header of the table
console.log(t.tBodies); // Collection of all body sections
console.log(t.tFoot); // Footer of the table
console.log(t.caption); // Caption of the table
console.log(t.rows); // All rows
console.log(t.rows[0]); // First row
console.log(t.rows[0].cells); // Cells of first row
console.log(t.rows[0].cells[0]); // First cell of first row
console.log(t.rows[1].cells[1]); // Second cell of second row
console.log(t.rows[2].cells[2]); // Third cell of third row
console.log(t.tBodies[0].rows[1].cells[1]); // Second cell of second row in the first tbody
console.log(t.tHead.rows[0].cells[2]); // Third cell of the header row
console.log(t.tFoot.rows[0].cells[0]); // First cell of the footer row

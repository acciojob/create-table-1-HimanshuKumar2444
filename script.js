function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");

  // Insert a new row at index 0 (top of the table)
  const newRow = table.insertRow(0);

  // Insert first cell and set text
  const cell1 = newRow.insertCell(0);
  cell1.textContent = "New Cell1";

  // Insert second cell and set text
  const cell2 = newRow.insertCell(1);
  cell2.textContent = "New Cell2";
  
}

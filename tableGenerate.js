
//Generate table

function generateTable() {

    const tableContainer = document.getElementById('tableContainer');
    const errorContainer = document.getElementById("errorContainer");
    tableContainer.innerHTML = '';
    errorContainer.innerHTML = '';

// Get rows and columns values
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);

//Validate rows and columns
    if (isNaN(rows) || isNaN(cols)) {
    errorContainer.textContent = "please enter the input fields*";
        return;
    }
    else if(rows < 2 || rows > 20 || cols < 2 || cols > 20){
    errorContainer.textContent = "Minimum row/col value is 2 and Maximum rows/cols value is 20";
    return;
}
    
 
   // Create table element using js
    const table = document.createElement('table');

 // Create table headers
    const headerRow = table.insertRow();
    for (let j = 1; j <= cols; j++) {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = `Data ${j}`;
    }

    // Create rows and cells
    for (let i = 1; i <= rows; i++) {
        const row = table.insertRow();
        for (let j = 1; j <= cols; j++) {
            const cell = row.insertCell();
            cell.textContent = `${i}`;
        }

   // Add delete button to last cell of each row
        const deleteCell = row.insertCell();
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.onclick = function() {
         table.deleteRow(row.rowIndex);
        };
        deleteCell.appendChild(deleteButton);
    }
 // Append table to container
    tableContainer.appendChild(table);
}


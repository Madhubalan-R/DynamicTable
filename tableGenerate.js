function preventArithmeticInput(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');
}

document.getElementById('rows').addEventListener('input', preventArithmeticInput);
document.getElementById('cols').addEventListener('input', preventArithmeticInput);

function generateTable() {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    const errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = '';
  
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);

    if (isNaN(rows) || isNaN(cols)) {
        errorContainer.textContent = "Please enter valid input fields*";
        return;
    } else if (rows < 2 || rows > 20 || cols < 2 || cols > 20) {
        errorContainer.textContent = "Minimum row/col value is 2 and Maximum rows/cols value is 20";
        return;
    }

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    for (let j = 1; j <= cols; j++) {
        const headerCell = document.createElement('th');
        headerCell.textContent = `Data ${j}`;
        headerRow.appendChild(headerCell);
    }
    const blankHeaderCell = document.createElement('th');
    headerRow.appendChild(blankHeaderCell);

    table.appendChild(headerRow);

    for (let i = 1; i <= rows; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= cols; j++) {
            const cell = document.createElement('td');
            cell.textContent = `${i}`;
            row.appendChild(cell);
        }

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.onclick = function() {
            table.deleteRow(row.rowIndex);
        };
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        table.appendChild(row);
    }
    tableContainer.appendChild(table);
}
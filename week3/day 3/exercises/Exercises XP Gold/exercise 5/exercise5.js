let table = document.body.firstElementChild;
// console.log(table);

for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
}

function addRow(product) {
    var table = document.getElementById("productsTable"); // Get the table element
    var tbody = document.getElementById("productsTableBody"); // Get the table body element
    var row = tbody.insertRow(); // Insert a new row at the end of the table

    // Add cells to the row
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();

    // Set the cell values
    cell1.innerHTML = tbody.rows.length; // Set the "#" column value to the new row index
    cell2.innerHTML = product.product_id;
    cell3.innerHTML = product.name;
    cell4.innerHTML = product.description;
    cell5.innerHTML = product.price;
    cell6.innerHTML = product.category_id;
    cell7.innerHTML = `<div class="dropdown">
    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
<i class="bx bx-dots-vertical-rounded"></i>
</button>
    <div class="dropdown-menu">
        <a class="dropdown-item updateProduct" data-id=${product.product_id} href="http://localhost:5000/edit_product/${product.product_id}"><i class="bx bx-edit-alt me-1"></i> Edit</a
>
                            <a
                            data-id=${product.product_id}
                            
                            onClick="handleClick(${product.product_id})"
                                   class="dropdown-item deleteProduct"
                                   href="javascript:void(0);"
                                   >Delete</a
                                 >
</div>
</div>`; // Add the action buttons


}






axios.get('http://localhost:5000/api/v1/products')
    .then(response => {
        const data = response.data;
        data.forEach(item => {
            addRow(item)
        });
    })
    .catch(error => console.log(error));






function handleClick(product_id) {
    const productId = product_id;
    console.log(productId);
    // // Remove the row from the table
    try {
        const deleteResponse = axios.delete(`http://localhost:5000/api/v1/products/${productId}`)
        console.log(deleteResponse);
        location.reload()

        console.log(productId);

    } catch (error) {
        console.log(error);
    }

}

function logout() {
    axios.get('http://localhost:5000/logout')
        .then(response => {

            // handle successful logout
            console.log(response.data);
        })
        .catch(error => {
            // handle error
            console.log(error);
        });
}
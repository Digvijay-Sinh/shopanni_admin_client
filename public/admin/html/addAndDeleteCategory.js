function addRow(category) {
    var table = document.getElementById("categoriesTable"); // Get the table element
    var tbody = document.getElementById("categoriesTableBody"); // Get the table body element
    var row = tbody.insertRow(); // Insert a new row at the end of the table

    // Add cells to the row
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    // var cell5 = row.insertCell();
    // var cell6 = row.insertCell();
    // var cell7 = row.insertCell();

    // Set the cell values
    cell1.innerHTML = tbody.rows.length; // Set the "#" column value to the new row index
    // cell2.innerHTML = category.category_id;
    cell2.innerHTML = category.name;
    cell3.innerHTML = category.description;
    // cell5.innerHTML = category.price;
    // cell6.innerHTML = category.category_id;
    //     cell4.innerHTML = `<div class="dropdown">
    //     <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
    // <i class="bx bx-dots-vertical-rounded"></i>
    // </button>
    //     <div class="dropdown-menu">
    //         <a class="updatecategory" class="dropdown-item" data-id=${category.category_id} href="viewSinglecategory.html?id=${category.category_id}"><i class="bx bx-edit-alt me-1"></i> Edit</a
    // >
    //                             <a
    //                             data-id=${category.category_id}
    //                             class="deletecategory"
    // onClick="handleClick(${category.category_id})"
    //                                    class="dropdown-item"
    //                                    href="javascript:void(0);"
    //                                    >Delete</a
    //                                  >
    // </div>
    // </div>`; // Add the action buttons
    cell4.innerHTML = `<div class="dropdown">
    <button
      type="button"
      class="btn p-0 dropdown-toggle hide-arrow"
      data-bs-toggle="dropdown"
    >
      <i class="bx bx-dots-vertical-rounded"></i>
    </button>

    <div class="dropdown-menu">
      <a class="dropdown-item" href="http://localhost:5000/edit_category/${category.category_id}"
        ><i class="bx bx-edit-alt me-1"></i> Edit</a
      >
      <a class="dropdown-item" onClick="handleClick(${category.category_id})"
 href="javascript:void(0);"
        ><i class="bx bx-trash me-1"></i> Delete</a
      >
    </div>
  </div>`

}


function logout() {
    axios.get('/logout')
        .then(response => {

            // handle successful logout
            console.log(response.data);
        })
        .catch(error => {
            // handle error
            console.log(error);
        });
}


axios.get('http://localhost:5000/api/v1/categories')
    .then(response => {
        const data = response.data;
        data.forEach(item => {
            addRow(item)
        });
    })
    .catch(error => console.log(error));






function handleClick(category_id) {
    const categoryId = category_id;
    console.log(categoryId);
    // // Remove the row from the table
    try {
        const deleteResponse = axios.delete(`http://localhost:5000/api/v1/categories/${categoryId}`)
        console.log(deleteResponse);
        location.reload()

        console.log(categoryId);

    } catch (error) {
        console.log(error);
    }

}
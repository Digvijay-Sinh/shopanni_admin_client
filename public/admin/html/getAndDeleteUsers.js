function addRow(user) {
    var table = document.getElementById("usersTable"); // Get the table element
    var tbody = document.getElementById("usersTableBody"); // Get the table body element
    var row = tbody.insertRow(); // Insert a new row at the end of the table

    // Add cells to the row
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    var cell9 = row.insertCell();
    var cell10 = row.insertCell();

    // Set the cell values
    cell1.innerHTML = tbody.rows.length; // Set the "#" column value to the new row index
    cell4.innerHTML = user.email;
    // cell2.innerHTML = user.password;
    cell2.innerHTML = user.first_name;
    cell3.innerHTML = user.last_name;
    cell5.innerHTML = user.contactno;
    cell6.innerHTML = user.address;
    cell7.innerHTML = user.city;
    cell8.innerHTML = user.state;
    cell9.innerHTML = user.postal_code;
    // cell10.innerHTML = user.user_id;
    //     cell4.innerHTML = `<div class="dropdown">
    //     <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
    // <i class="bx bx-dots-vertical-rounded"></i>
    // </button>
    //     <div class="dropdown-menu">
    //         <a class="updateuser" class="dropdown-item" data-id=${user.user_id} href="viewSingleuser.html?id=${user.user_id}"><i class="bx bx-edit-alt me-1"></i> Edit</a
    // >
    //                             <a
    //                             data-id=${user.user_id}
    //                             class="deleteuser"
    // onClick="handleClick(${user.user_id})"
    //                                    class="dropdown-item"
    //                                    href="javascript:void(0);"
    //                                    >Delete</a
    //                                  >
    // </div>
    // </div>`; // Add the action buttons
    cell10.innerHTML = `<div class="dropdown">
    <button
      type="button"
      class="btn p-0 dropdown-toggle hide-arrow"
      data-bs-toggle="dropdown"
    >
      <i class="bx bx-dots-vertical-rounded"></i>
    </button>

    <div class="dropdown-menu">
     
      <a class="dropdown-item" onClick="handleClick(${user.user_id})"
 href="javascript:void(0);"
        ><i class="bx bx-trash me-1"></i> Delete</a
      >
    </div>
  </div>`

}






axios.get('http://localhost:5000/api/v1/users')
    .then(response => {
        const data = response.data;
        data.forEach(item => {
            addRow(item)
        });
    })
    .catch(error => console.log(error));






function handleClick(user_id) {
    const userId = user_id;
    console.log(userId);
    // // Remove the row from the table
    try {
        const deleteResponse = axios.delete(`http://localhost:5000/api/v1/users/${userId}`)
        console.log(deleteResponse);
        location.reload()

        console.log(userId);

    } catch (error) {
        console.log(error);
    }

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
function addRow(review) {
    var table = document.getElementById("reviewsTable"); // Get the table element
    var tbody = document.getElementById("reviewsTableBody"); // Get the table body element
    var row = tbody.insertRow(); // Insert a new row at the end of the table

    // Add cells to the row
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    // var cell7 = row.insertCell();
    // var cell8 = row.insertCell();
    // var cell9 = row.insertCell();
    // var cell10 = row.insertCell();

    // Set the cell values
    cell1.innerHTML = tbody.rows.length; // Set the "#" column value to the new row index
    cell2.innerHTML = review.user_id;
    // cell2.innerHTML = review.password;
    cell3.innerHTML = review.rating;
    cell4.innerHTML = review.product_id;
    cell5.innerHTML = review.comment;
    // cell6.innerHTML = review.address;
    // cell7.innerHTML = review.city;
    // cell8.innerHTML = review.state;
    // cell9.innerHTML = review.postal_code;
    // cell10.innerHTML = review.review_id;
    //     cell4.innerHTML = `<div class="dropdown">
    //     <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
    // <i class="bx bx-dots-vertical-rounded"></i>
    // </button>
    //     <div class="dropdown-menu">
    //         <a class="updatereview" class="dropdown-item" data-id=${review.review_id} href="viewSinglereview.html?id=${review.review_id}"><i class="bx bx-edit-alt me-1"></i> Edit</a
    // >
    //                             <a
    //                             data-id=${review.review_id}
    //                             class="deletereview"
    // onClick="handleClick(${review.review_id})"
    //                                    class="dropdown-item"
    //                                    href="javascript:void(0);"
    //                                    >Delete</a
    //                                  >
    // </div>
    // </div>`; // Add the action buttons
    cell6.innerHTML = `<div class="dropdown">
    <button
      type="button"
      class="btn p-0 dropdown-toggle hide-arrow"
      data-bs-toggle="dropdown"
    >
      <i class="bx bx-dots-vertical-rounded"></i>
    </button>

    <div class="dropdown-menu">
     
      <a class="dropdown-item" onClick="handleClick(${review.review_id})"
 href="javascript:void(0);"
        ><i class="bx bx-trash me-1"></i> Delete</a
      >
    </div>
  </div>`

}






axios.get('http://localhost:5000/api/v1/reviews')
    .then(response => {
        const data = response.data;
        data.forEach(item => {
            addRow(item)
        });
    })
    .catch(error => console.log(error));






function handleClick(review_id) {
    const reviewId = review_id;
    console.log(reviewId);
    // // Remove the row from the table
    try {
        const deleteResponse = axios.delete(`http://localhost:5000/api/v1/reviews/${reviewId}`)
        console.log(deleteResponse);
        location.reload()

        console.log(reviewId);

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
axios.get('http://localhost:5000/totalSales')
    .then(function(response) {
        const sum = response.data;
        console.log(sum);
        const sumResultElement = document.getElementById('sales');
        sumResultElement.innerHTML = sum;
    })
    .catch(function(error) {
        console.error(error);
    });

function addRow(order) {
    var table = document.getElementById("ordersTable"); // Get the table element
    var tbody = document.getElementById("ordersTableBody"); // Get the table body element
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

    // Set the cell values
    cell1.innerHTML = tbody.rows.length; // Set the "#" column value to the new row index
    cell2.innerHTML = order.order_id;
    cell3.innerHTML = order.user_id;
    cell4.innerHTML = order.product_id;
    console.log(order.product_id);
    cell5.innerHTML = order.total_amount;
    cell6.innerHTML = order.payment_status;
    // console.log(order.expiration_date);
    const dateObj = new Date(order.date_ordered);

    // Convert to local timezone and format as string in 'yyyy-mm-dd hh:mm:ss' format
    const localDatetimeStr = dateObj.toLocaleString('en-US', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(',', '');
    cell7.innerHTML = localDatetimeStr;

    cell8.innerHTML = `<div class="dropdown">
    <button
      type="button"
      class="btn p-0 dropdown-toggle hide-arrow"
      data-bs-toggle="dropdown"
    >
      <i class="bx bx-dots-vertical-rounded"></i>
    </button>

    <div class="dropdown-menu">
      <a class="dropdown-item" href="viewSingleOrders.html?id=${order.order_id}"
        ><i class="bx bx-edit-alt me-1"></i> Edit</a
      >
      <a class="dropdown-item" onClick="handleClick(${order.order_id})"
 href="javascript:void(0);"
        ><i class="bx bx-trash me-1"></i> Delete</a
      >
    </div>
  </div>`

}






axios.get('http://localhost:5000/api/v1/orders')
    .then(response => {
        const data = response.data;
        data.forEach(item => {
            addRow(item)
        });
    })
    .catch(error => console.log(error));






function handleClick(order_id) {
    const orderId = order_id;
    console.log(orderId);
    // // Remove the row from the table
    try {
        const deleteResponse = axios.delete(`http://localhost:5000/api/v1/orders/${orderId}`)
        console.log(deleteResponse);
        location.reload()

        console.log(orderId);

    } catch (error) {
        console.log(error);
    }

}

function logout() {
    axios.post('/logout')
        .then(response => {
            // handle successful logout
            console.log(response.data);
        })
        .catch(error => {
            // handle error
            console.log(error);
        });
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
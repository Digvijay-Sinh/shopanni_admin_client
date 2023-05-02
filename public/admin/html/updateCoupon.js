console.log("Coupon Id:" + couponId)
    // Get the coupon data from the server using Axios
axios.get(`http://localhost:5000/api/v1/coupons/${couponId}`)
    .then(response => {
        // Pre-fill the input fields with the coupon data
        const coupon = response.data[0];
        console.log(coupon);
        document.getElementById('couponCodeForm').value = coupon.code;
        document.getElementById('couponDiscountForm').value = coupon.discount;
        // const dateObj = new Date(coupon.expiration_date);

        // // Convert to string in 'yyyy-mm-ddThh:mm' format
        // const localDatetimeStr = dateObj.toISOString().slice(0, -1);
        // const dbDatetimeStr = '2023-07-07 19:33:00'; // datetime string from the database
        // const dbDatetime = moment.tz(dbDatetimeStr, 'YYYY-MM-DD HH:mm:ss', 'UTC'); // convert to a moment object in UTC timezone
        // const localDatetime = dbDatetime.clone().tz('Asia/Kolkata');
        const utcDatetime = new Date(coupon.expiration_date); // create a Date object in UTC timezone
        const localDatetime = new Date(utcDatetime.getTime() + (330 * 60 * 1000));

        document.getElementById('couponExpirationDateForm').value = localDatetime.toISOString().slice(0, -1);

        // Create a new Date object from the ISO string
        // var date = new Date(coupon.expiration_date);

        // // Convert the date to a string in the required format
        // var dateString = date.toISOString();

        // // Set the value of the input field to the formatted date string
        // document.getElementById("couponExpirationDateForm").value = dateString.slice(0, -1);
        // document.getElementById('couponExpirationDateForm').value = coupon.expiration_date;
    })
    .catch(error => {
        console.error(error);
    });



const form = document.getElementById('updateCouponForm');
const couponCodeForm = document.getElementById('couponCodeForm');
const couponDiscountForm = document.getElementById('couponDiscountForm');
const couponExpirationDateForm = document.getElementById('couponExpirationDateForm') + 'Z';
console.log(couponExpirationDateForm.value);


form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(form);

    const code = formData.get('code');
    const discount = formData.get('discount');
    const expiration_date = formData.get('expiration_date');

    // Send the PUT request using Axios
    axios.put(`http://localhost:5000/api/v1/coupons/${couponId}`, {
            code,
            discount,
            expiration_date
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
});

// get the form and input fields

// const couponId = new URLSearchParams(window.location.search).get('id');

// const updateCouponForm = document.getElementById('updateCouponForm');
// const couponCodeForm = document.getElementById('couponCodeForm');
// const couponDiscountForm = document.getElementById('couponDiscountForm');
// const couponExpirationDateForm = document.getElementById('couponExpirationDateForm');

// // make a GET request to fetch data
// axios.get(`http://localhost:5000/api/v1/coupons/${couponId}`) // replace '1' with the coupon ID you want to edit
//     .then(response => {
//         const coupon = response.data[0];

//         // fill the input fields with the data
//         couponCodeForm.value = coupon.code;
//         couponDiscountForm.value = coupon.discount;
//         couponExpirationDateForm.value = coupon.expiration_date;
//     })
//     .catch(error => {
//         console.error(error);
//     });

// // listen for form submission
// updateCouponForm.addEventListener('submit', event => {
//     event.preventDefault();

//     // get the updated data from the form
//     const code = couponCodeForm.value;
//     const discount = couponDiscountForm.value;
//     const expiration_date = couponExpirationDateForm.value;

//     // make a POST request to update the data
//     axios.post(`http://localhost:5000/api/v1/coupons/${couponId}`, {
//             code,
//             discount,
//             expiration_date
//         })
//         .then(response => {
//             console.log(response);
//             alert('Coupon updated successfully!');
//         })
//         .catch(error => {
//             console.log(error);
//             alert('Error updating coupon.');
//         });
// });

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
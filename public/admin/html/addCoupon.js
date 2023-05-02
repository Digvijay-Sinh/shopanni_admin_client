const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent form from submitting

    const formData = new FormData(form);

    const code = formData.get('code');
    const discount = formData.get('discount');
    const expiration_date = formData.get('expiration_date') + 'Z';
    // var date = new Date(expiration_date);
    // console.log(expiration_date);
    // console.log(date);
    // // Convert the date to a string in the required format
    // var dateString = date.toISOString();
    // console.log(dateString);
    // // Set the value of the input field to the formatted date string
    // const coupon_id = formData.get('coupon_id');
    // const image_url = "/abc.jpg"
    const data = {
        code,
        discount,
        expiration_date
        // ,
        // price,
        // coupon_id,
        // image_url
    };
    console.log(data);

    axios.post('http://localhost:5000/api/v1/coupons/', data)
        .then(response => {
            console.log(response.data);
            location.reload()
        })
        .catch(error => {
            console.error(error);
        });
});

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
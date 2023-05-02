function checkout() {

    console.log("checkout function reached");
    // add checkout
    const form = document.getElementById('checkoutForm');
    console.log(form); // check the value of form


    const formData = new FormData(form);

    const name = formData.get('name');
    const address = formData.get('address');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const landmark = formData.get('landmark');
    const state = formData.get('state');
    const district = formData.get('district');
    const total = 234

    // const price = formData.get('price');
    // const category_id = formData.get('category_id');
    // const image_url = "/abc.jpg"
    const data = {
        name,
        address,
        phone,
        email,
        landmark,
        state,
        district,
        total

        // ,
        // price,
        // category_id,
        // image_url
    };
    console.log(data);

    axios.post('http://localhost:5000/checkout', data)
        .then(response => {
            console.log(response.data);
            // location.reload()
        })
        .catch(error => {
            console.error(error);
        });



}


// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('checkoutForm');
//     const button = document.getElementById('checkoutButton');

//     button.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevents the default form submission behavior
//         console.log("checkout function reached");

//         const formData = new FormData();

//         formData.append('name', form.querySelector('input[name="name"]').value);
//         formData.append('address', form.querySelector('input[name="address"]').value);
//         formData.append('phone', form.querySelector('input[name="phone"]').value);
//         formData.append('email', form.querySelector('input[name="email"]').value);
//         formData.append('landmark', form.querySelector('input[name="landmark"]').value);
//         formData.append('state', form.querySelector('input[name="state"]').value);
//         formData.append('district', form.querySelector('input[name="district"]').value);



//         axios.post('http://localhost:5000/checkout', formData)
//             .then(response => {
//                 console.log(response.data);
//                 // location.reload()
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     });
// });
// const urlParams = new URLSearchParams(window.location.search);
// console.log(window.location.search);
// const productId = urlParams.get('id');
console.log('Product ID:', productId);

// Get the product data from the server using Axios
axios.get(`http://localhost:5000/api/v1/products/${productId}`)
    .then(response => {
        // Pre-fill the input fields with the product data
        const product = response.data[0];
        console.log(product);
        document.getElementById('productNameForm').value = product.name;
        document.getElementById('productDescriptionForm').value = product.description;
        document.getElementById('dropdownCategory').value = product.category_id;
        document.getElementById('productPriceForm').value = product.price;
    })
    .catch(error => {
        console.error(error);
    });



const form = document.getElementById('updateProductForm');
const productNameForm = document.getElementById('productNameForm');
const productDescriptionForm = document.getElementById('productDescriptionForm');
const dropdownCategory = document.getElementById('dropdownCategory');
const productPriceForm = document.getElementById('productPriceForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("clicked");
    // Get the form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const description = formData.get('description');
    const category_id = formData.get('category_id');
    const price = formData.get('price');

    // Send the PUT request using Axios
    axios.put(`http://localhost:5000/api/v1/products/${productId}`, {
            name,
            description,
            category_id,
            price,
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
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
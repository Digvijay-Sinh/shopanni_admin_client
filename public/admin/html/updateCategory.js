console.log('Category ID:', categoryId);

// Get the category data from the server using Axios
axios.get(`http://localhost:5000/api/v1/categories/${categoryId}`)
    .then(response => {
        // Pre-fill the input fields with the category data
        const category = response.data[0];
        console.log(category);
        document.getElementById('categoryNameForm').value = category.name;
        document.getElementById('categoryDescriptionForm').value = category.description;
    })
    .catch(error => {
        console.error(error);
    });



const form = document.getElementById('updateCategoryForm');
const categoryNameForm = document.getElementById('categoryNameForm');
const categoryDescriptionForm = document.getElementById('categoryDescriptionForm');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const description = formData.get('description');

    // Send the PUT request using Axios
    axios.put(`http://localhost:5000/api/v1/categories/${categoryId}`, {
            name,
            description
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
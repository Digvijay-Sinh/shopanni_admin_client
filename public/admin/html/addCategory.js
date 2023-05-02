const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent form from submitting

    const formData = new FormData(form);

    const name = formData.get('name');
    const description = formData.get('description');
    // const price = formData.get('price');
    // const category_id = formData.get('category_id');
    // const image_url = "/abc.jpg"
    const data = {
        name,
        description
        // ,
        // price,
        // category_id,
        // image_url
    };
    console.log(data);

    axios.post('http://localhost:5000/api/v1/categories/', data)
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
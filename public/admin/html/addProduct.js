const form = document.querySelector('#productForm');
// import { v4 as uuidv4 } from 'uuid';

// let myuuid = uuidv4();

const id = Date.now()

const addImagesButton = document.getElementById('addImages');

// Add an onclick event listener
addImagesButton.addEventListener('click', function() {
    console.log(id);
    // Call the addImage function when the button is clicked
    addImage()
});

function addImage() {
    // event.preventDefault();
    const form = document.getElementById('addImageForm');
    const formData = new FormData();

    const files = document.querySelector('[name="image"]').files;
    // console.log(files);

    // Append each file to the FormData object
    for (let i = 0; i < files.length; i++) {
        // console.log(i);
        formData.append(`images`, files[i]);
        // console.log(files[i]);
    }
    formData.append('productId', id);

    // for (let index = 0; index < files.length; index++) {
    //     const element = formData.get(`images[${index}]`);
    //     console.log(element);

    // }

    // const data = formData.get('images')
    // const pid = formData.get('productId')
    // console.log(pid);

    // console.log(formData.productId);
    // console.log(formData);
    // Send the FormData object to the server using Axios
    axios.post('http://localhost:5000/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        console.log(response.data);

    }).catch(error => {
        console.error(error);
    });
}
// Get all the files from the file input field// Get all the files from the file input field

// console.out('Your UUID is: ' + myuuid);

form.addEventListener('submit', (event) => {

    event.preventDefault(); // prevent form from submitting
    console.log(id);
    const formData = new FormData(form);
    const product_id = id;
    const name = formData.get('name');
    const description = formData.get('description');
    const price = formData.get('price');
    const category_id = formData.get('category_id');
    const image_url = "";
    const data = {
        product_id,
        name,
        description,
        price,
        category_id,
        image_url
    };
    console.log(data);

    axios.post('http://localhost:5000/api/v1/products/', data)
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
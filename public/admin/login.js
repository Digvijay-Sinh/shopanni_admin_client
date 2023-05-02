const form = document.querySelector('form');

// Attach an event listener to the form submit event
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form data
    const formData = new FormData(form);

    const username = formData.get('username');
    const password = formData.get('password');
    // Make an axios post request to login
    axios.post('http://localhost:5000/login', {
            username,
            password
        })
        .then((response) => {
            // Handle the success response
            console.log(response.data);
            window.location.href = '/index'
        })
        .catch((error) => {
            // Handle the error response
            console.log(error);
        });
});
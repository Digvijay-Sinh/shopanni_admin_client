function homeget() {
    axios.get('http://localhost:5000/home')
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.error(error);
        });


}
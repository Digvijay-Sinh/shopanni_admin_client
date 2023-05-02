    // axios.get('/cart') // Replace '123' with the actual user ID
    //     .then(response => {
    //         const cartItems = response.data;
    //         const cartList = $('#cart-list');
    //         var i = 0;
    //         cartItems.forEach(item => {
    //             console.log("Cart reached")
    //             console.log(item.product_id);
    //             axios.get(`http://localhost:5000/api/v1/products/${item.product_id}`)
    //                 .then(response => {
    //                     // Pre-fill the input fields with the product data
    //                     const product = response.data[0];
    //                     console.log(product);

    //                     axios.get(`http://localhost:5000/images/${item.product_id}`)
    //                         .then(response => {
    //                             const imageData = response.data;

    //                             const imageName = imageData.image_url1;
    //                             console.log(imageName);
    //                             // Get the table body element
    //                             var tableBody = document.querySelector('#cartTable tbody');

    //                             // Create a new table row element
    //                             var newRow = document.createElement('tr');
    //                             newRow.classList.add('table_row');

    //                             // Create the table cells for the new row
    //                             var cell1 = document.createElement('td');
    //                             cell1.classList.add('column-1');
    //                             cell1.innerHTML = `<div class="how-itemcart1"><img src="images/${imageName}" alt="IMG" /></div>`;

    //                             var cell2 = document.createElement('td');
    //                             cell2.classList.add('column-2');
    //                             cell2.textContent = `${product.name}`;

    //                             var cell3 = document.createElement('td');
    //                             cell3.classList.add('column-3');
    //                             cell3.textContent = `${product.price}`;


    //                             var cell4 = document.createElement('td');
    //                             cell4.classList.add('column-4');

    //                             var numWrap = document.createElement('div');
    //                             numWrap.classList.add('wrap-num-product', 'flex-w', 'm-l-auto', 'm-r-0');

    //                             // Create the plus and minus buttons
    //                             var minusButton = document.createElement('div');
    //                             minusButton.classList.add('btn-num-product-down', 'cl8', 'hov-btn3', 'trans-04', 'flex-c-m');
    //                             minusButton.innerHTML = '<i class="fs-16 zmdi zmdi-minus"></i>';

    //                             var input = document.createElement('input');
    //                             input.classList.add('mtext-104', 'cl3', 'txt-center', 'num-product');
    //                             input.type = 'number';
    //                             input.name = 'num-product1';
    //                             input.value = 1;

    //                             var plusButton = document.createElement('div');
    //                             plusButton.classList.add('btn-num-product-up', 'cl8', 'hov-btn3', 'trans-04', 'flex-c-m');
    //                             plusButton.innerHTML = '<i class="fs-16 zmdi zmdi-plus"></i>';

    //                             // Add event listeners to the plus and minus buttons
    //                             minusButton.addEventListener('click', function() {
    //                                 var input = this.parentNode.querySelector('.num-product');
    //                                 var currentValue = parseInt(input.value);
    //                                 if (currentValue > 1) {
    //                                     input.value = currentValue - 1;
    //                                 }
    //                             });

    //                             plusButton.addEventListener('click', function() {
    //                                 var input = this.parentNode.querySelector('.num-product');
    //                                 input.value = parseInt(input.value) + 1;
    //                             });

    //                             // Add the plus and minus buttons to the cell
    //                             numWrap.appendChild(minusButton);
    //                             numWrap.appendChild(input);
    //                             numWrap.appendChild(plusButton);
    //                             cell4.appendChild(numWrap);


    //                             var cell5 = document.createElement('td');
    //                             cell5.classList.add('column-5');
    //                             cell5.textContent = '$ 36.00';

    //                             // Add the table cells to the new row
    // newRow.appendChild(cell1);
    // newRow.appendChild(cell2);
    // newRow.appendChild(cell3);
    // newRow.appendChild(cell4);
    // newRow.appendChild(cell5);

    // // Add the new row to the table body
    // tableBody.appendChild(newRow);

    //                         })
    //                         .catch(error => console.log(error));
    //                 })
    //                 .catch(error => console.log(error));

    //         });
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });



    async function getCartItems() {
        try {
            var amount = 0;

            const response = await axios.get('/cart');
            const cartItems = response.data;
            const cartList = $('#cart-list');
            var i = 0;
            for (const item of cartItems) {
                console.log("Cart reached")
                console.log(item.product_id);
                const responseProduct = await axios.get(`http://localhost:5000/api/v1/products/${item.product_id}`);
                const product = responseProduct.data[0];

                console.log(product);
                const responseImage = await axios.get(`http://localhost:5000/images/${item.product_id}`);
                const imageData = responseImage.data;
                const imageName = imageData.image_url1;
                console.log(imageName);

                // Get the table body element
                var tableBody = document.querySelector('#cartTable tbody');

                // Create a new table row element
                var newRow = document.createElement('tr');
                newRow.classList.add('table_row');

                // Create the table cells for the new row
                var cell1 = document.createElement('td');
                cell1.classList.add('column-1');
                cell1.innerHTML = `<div class="how-itemcart1"><img src="images/${imageName}" alt="IMG" /></div>`;

                var cell2 = document.createElement('td');
                cell2.classList.add('column-2');
                cell2.textContent = `${product.name}`;

                var cell3 = document.createElement('td');
                cell3.classList.add('column-3');
                cell3.textContent = `${product.price}`;

                var cell4 = document.createElement('td');
                cell4.classList.add('column-4');

                var numWrap = document.createElement('div');
                numWrap.classList.add('wrap-num-product', 'flex-w', 'm-l-auto', 'm-r-0');

                // Create the plus and minus buttons
                var minusButton = document.createElement('div');
                minusButton.classList.add('btn-num-product-down', 'cl8', 'hov-btn3', 'trans-04', 'flex-c-m');
                minusButton.innerHTML = '<i class="fs-16 zmdi zmdi-minus"></i>';

                var input = document.createElement('input');
                input.classList.add('mtext-104', 'cl3', 'txt-center', 'num-product');
                input.type = 'number';
                input.name = 'num-product1';
                input.value = item.quantity;

                var plusButton = document.createElement('div');
                plusButton.classList.add('btn-num-product-up', 'cl8', 'hov-btn3', 'trans-04', 'flex-c-m');
                plusButton.innerHTML = '<i class="fs-16 zmdi zmdi-plus"></i>';

                // Add event listeners to the plus and minus buttons
                minusButton.addEventListener('click', function() {
                    var input = this.parentNode.querySelector('.num-product');
                    var currentValue = parseInt(input.value);
                    if (currentValue > 0) {
                        input.value = currentValue - 1;
                        updateCartItem()
                        amount = amount - (parseInt(product.price));

                        var span = document.querySelector('#totalAmount');
                        span.innerHTML = `₹ ${amount}`
                    }


                });

                plusButton.addEventListener('click', function() {
                    var input = this.parentNode.querySelector('.num-product');
                    input.value = parseInt(input.value) + 1;
                    updateCartItem()
                    amount = amount + (parseInt(product.price));

                    var span = document.querySelector('#totalAmount');
                    span.innerHTML = `₹ ${amount}`
                });

                async function updateCartItem() {
                    try {
                        const session = await axios.get('/session');
                        const userId = session.data.userId;
                        const response = await axios.put('/cart', {
                            product_id: item.product_id,
                            user_id: userId,
                            colour: item.colour,
                            product_size_id: item.product_size_id,
                            quantity: input.value
                        });

                        console.log(response.data);
                    } catch (error) {
                        console.error(error);
                    }
                }

                // Add the plus and minus buttons to the cell
                numWrap.appendChild(minusButton);
                numWrap.appendChild(input);
                numWrap.appendChild(plusButton);
                cell4.appendChild(numWrap);

                var cell5 = document.createElement('td');
                cell5.classList.add('column-5');
                cell5.textContent = ' 36.00';

                // Add the table cells to the new row
                newRow.appendChild(cell1);
                newRow.appendChild(cell2);
                newRow.appendChild(cell3);
                newRow.appendChild(cell4);
                newRow.appendChild(cell5);

                // Add the new row to the table body
                tableBody.appendChild(newRow);
                amount = amount + (parseInt(product.price) * parseInt(item.quantity));
                // console.log(totalAmount);
                var span = document.querySelector('#totalAmount');
                span.innerHTML = `₹ ${amount}`


            }
        } catch {
            console.log("Some exception occured")
        }
    }

    getCartItems()



    function updateCart() {
        // Get the update button element
        const updateBtn = document.querySelector('#update-cart-btn');

        // Add an event listener to the update button
        updateBtn.addEventListener('click', async function() {
            try {
                // Get all the rows in the cart table
                const cartRows = document.querySelectorAll('#cartTable tbody tr');

                // Create an array to store the updated cart data
                const updatedCart = [];

                // Loop through all the rows in the cart table
                for (const row of cartRows) {
                    // Get the product ID, name, and quantity from the row
                    const productId = row.querySelector('.column-1 img').getAttribute('src').split('/').pop().split('.')[0];
                    const name = row.querySelector('.column-2').textContent.trim();
                    const quantity = row.querySelector('.num-product').value;

                    // Create an object to represent the updated cart item
                    const updatedCartItem = {
                        product_id: productId,
                        name: name,
                        quantity: quantity
                    };

                    // Add the updated cart item to the array
                    updatedCart.push(updatedCartItem);
                }

                // Send an Axios POST request to the server with the updated cart data
                const response = await axios.post('/updateCart', { cart: updatedCart });

                // Log the response from the server
                console.log(response.data);
            } catch {
                console.log("Some exception occurred");
            }
        });

    }



    // function checkout() {
    //     console.log("checkout function reached");
    //     // add checkout
    //     const form = document.getElementById('checkoutForm');
    //     console.log(form); // check the value of form


    //     const formData = new FormData(form);

    //     const name = formData.get('name');
    //     const address = formData.get('address');
    //     const phone = formData.get('phone');
    //     const email = formData.get('email');
    //     const landmark = formData.get('landmark');
    //     const state = formData.get('state');
    //     const district = formData.get('district');

    //     // const price = formData.get('price');
    //     // const category_id = formData.get('category_id');
    //     // const image_url = "/abc.jpg"
    //     const data = {
    //         name,
    //         address,
    //         phone,
    //         email,
    //         landmark,
    //         state,
    //         district,

    //         // ,
    //         // price,
    //         // category_id,
    //         // image_url
    //     };
    //     console.log(data);

    //     axios.post('http://localhost:5000/checkout', data)
    //         .then(response => {
    //             console.log(response.data);
    //             // location.reload()
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });


    // }




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
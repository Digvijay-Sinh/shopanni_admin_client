// // // function setContainerHeight() {
// // //     var container = document.getElementById("productContainer");
// // //     container.style.height = "auto";
// // //     // container.style.height = container.scrollHeight + "px";
// // // }

// // window.addEventListener('load', function() {

// //     axios.get('http://localhost:5000/api/v1/products')
// //         .then(response => {
// //             const data = response.data;
// //             const productContainer = document.getElementById("productContainer");


// //             data.forEach(item => {
// //                 const newProductItem = document.
// //                 createElement("div");
// //                 newProductItem.className = 'col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women';

// //                 console.log(item);
// // axios.get(`http://localhost:5000/images/${item.product_id}`)
// //     .then(response => {
// //         const imageData = response.data;

// //         const imageName = imageData.image_url1; // store the name from the response data
// //                         console.log(imageData);
// //                         newProductItem.innerHTML = `
// // 					<!-- Block2 -->
// // 					<div class="block2">
// // 						<div class="block2-pic hov-img0">
// // 							<img src="images/${imageName}" alt="IMG-PRODUCT">

// // 							<a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
// // 								Quick View
// // 							</a>
// // 						</div>

// // 						<div class="block2-txt flex-w flex-t p-t-14">
// // 							<div class="block2-txt-child1 flex-col-l ">
// // 								<a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
// // 									${item.name}
// // 								</a>

// // 								<span class="stext-105 cl3">
// // 									${item.price}
// // 								</span>
// // 							</div>

// // 							<div class="block2-txt-child2 flex-r p-t-3">
// // 								<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
// // 									<img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON">
// // 									<img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON">
// // 								</a>
// // 							</div>
// // 						</div>
// // 					</div>
// // 				`
// //                         console.log("product adding reached");
// //                         productContainer.appendChild(newProductItem);
// //                         // setContainerHeight();
// //                     })
// //                     .catch(error => console.log(error));

// //             });
// //             var link = document.createElement("link");
// //             link.rel = "stylesheet";
// //             link.type = "text/css";
// //             link.href = "vendor/bootstrap/css/bootstrap.min.css";
// //             document.getElementsByTagName("head")[0].appendChild(link);

// // })
// // .catch(error => console.log(error));
// // });

// // // window.addEventListener("resize", setContainerHeight);


axios.get('http://localhost:5000/api/v1/products')
    .then(response => {
        const data = response.data;
        data.forEach(item => {
            const productGrid = document.getElementById('productContainer');



            const newProductItem = document.createElement('div');
            newProductItem.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'p-b-35', 'isotope-item', 'women');

            axios.get(`http://localhost:5000/images/${item.product_id}`)
                .then(response => {
                    const imageData = response.data;

                    const imageName = imageData.image_url1;
                    console.log(imageName);

                    newProductItem.innerHTML = `
					<div class="block2">
						<div class="block2-pic hov-img0">
							<img src="images/${imageName}" alt="IMG-PRODUCT">

							<a href="http://localhost:5000/productView/${item.product_id}" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
								Quick View
							</a>
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									${item.name}
								</a>

								<span class="stext-105 cl3">
									$16.64
								</span>
							</div>

							<div class="block2-txt-child2 flex-r p-t-3">
								<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON">
									<img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON">
								</a>
							</div>
						</div>
					</div>
				`
                    console.log("product adding reached");
                    productGrid.appendChild(newProductItem);
                })
                .catch(error => console.log(error));

        });
    })
    .catch(error => console.log(error));
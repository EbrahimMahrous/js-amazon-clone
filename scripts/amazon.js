
/*
    MAin idea of JavaScript
       1. Save the data [data = information [Information about our products]]
       How ==> Create array contains all objects


       2. Generate the Html dynamic
       How ==> loop this array and through for each this "products اسم الاري" we can create "productsHTMl += `` متغير هخزن جواه كود اتشتيمل اللي بيمثل المنتج الاول والثاني وهكذا",
               take each object and save it in parameters "product بارميتر جوه فانكشن" and then run the functions.


               A. combine this Html together               // To combine all html togher we will create a varible called "productsHTML" contians all objects added.
               B. put Html on the web page using the DOM   // document.querySelector(".js-products-grid").innerHTML = productsHTML;




       3. Make it interactive
*/

// Create array "products اسم الاري" contains all objects [Save the data]
// data/products.js    دا ملف يحتوي ع اري تشمل كل الاوبجكت



// A. combine this Html together
// To combine all html togher we will create a varible called "productsHTML" contians all objects added.
let productsHTML = '';


// الهدف من اللوب دا اني باخود كل اوبجكت عندي من الليست واخزنه داخل البراميتر بروديكت وبعدين بشغل الفانكش وهكذا 
products.forEach( (product) => {
    productsHTML += `
                <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src="${product.image}">
                </div>
                <div class="product-name limit-text-to-2-lines">
                ${product.name}           
                </div>
                <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="images/ratings/rating-${product.rating.stars * 10 }.png">
                    <div class="product-rating-count link-primary">
                    ${product.rating.count}
                    </div>
                </div>
                <div class="product-price">
                    $${(product.priceCents / 100).toFixed(2)} 
                </div>
                <div class="product-quantity-container">
                    <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>
                <div class="product-spacer"></div>
                <div class="added-to-cart">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>
                <button class="add-to-cart-button button-primary js-add-to-cart"
                data-product-id="${product.id}">
                    Add to Cart
                </button>
                </div>
    `;
}); 

// B. put Html on the web page using the DOM    
document.querySelector(".js-products-grid").innerHTML = productsHTML;

// Note
// How do we know which product to add to cart? 
// Data Attribute is just another Html attribute allows us to attach any information to an element.
// syntax for a data attribute contains name and it's value.    ex:  data-product-name="${product.name}"                 kebab-case طريقة الكتابة اللي بتحتوي ع داش

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", ()=>{
        const productId = button.dataset.productId;


        let matchingItem;

        cart.forEach((item) => {
            if(productId === item.productId){
                matchingItem = item;
            }
        })

        if (matchingItem){
            matchingItem.quantity += 1
        } else{
            cart.push({
            productId: productId,
            quantity: 1
        })
        }

        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity
        })

        document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;


        console.log(cart) 
    })
})

// quantity  عشان تكون شاطر لازم تكتب انت عايز تعمل اي الاول وبعدين تكتب كووود هو دا اصح شئ
// 1. check if the product is already in the cart.
// 2. if it is in the cart, increase the quantity
// 3. if it's not in the cart, add it to the cart





// 
// 1. calculate the quantity.    loop throght cart
// 2. put the quantuty on the page.

/*
    MAin idea of JavaScript
       1. Save the data [data = information [Information about our products]]
       2. Generate the Html
       3. Make it interactive
*/

// Create array contains many objects [Save the data]

const products =[{
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090
  },

  {
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127
    }
  },

  {
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
  }];

// Generate the html dynamic   [ We can loop this array and through for each this products we can create html ]. 

// take each object and save it in parameters "product" and then run the functions 

// الهدف من اللوب دا اني باخود كل اوبجكت عندي من الليست واخزنه داخل البراميتر بروديكت وبعدين بشغل الفانكش وهكذا 

// 1. combine this Html together
// To combine all html togher we will create a varible called   -- productsHTML --       
let productsHTML = '';




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
                <button class="add-to-cart-button button-primary">
                    Add to Cart
                </button>
                </div>
    `;
}); 


// 2. put Html on the web page using the DOM    
document.querySelector(".js-products-grid").innerHTML = productsHTML;

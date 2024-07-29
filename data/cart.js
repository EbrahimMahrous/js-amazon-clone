export let cart ;

loadFromStorage()

export function loadFromStorage(){
    cart = JSON.parse(localStorage.getItem('cart'));

    if(!cart){
        cart = [{
        // Normalizing the data.
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
    },{
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
    }]
    }
}


export function addToCart(productId){
    let matchingItem;
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    })
    if (matchingItem){
        matchingItem.quantity += 1;
    } else{
        cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
    })
    }
    saveToStorage()
}



// localStorage
function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}


export function removeFromCart(productId){

    // STEPS
    // 1. Create a new array.
    // 2. Loop throught the cart.
    // 3. Add each product to new array, except for this product.

    const newCart = []
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem)
        }
    })

    cart = newCart;
    saveToStorage()
}


// 1. Update deliveryOptionId in the cart.
// 2. Update the page.

// I need to know:
// 1. Product  
// 2. Delivery Option.


// Steps:
// 1. loop through the cart and find the product.
// 2. Update the deliveryOptionId of the product.
export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    })

    matchingItem.deliveryOptionId = deliveryOptionId

    saveToStorage()
}
export let cart = [{
    // Normalizing the data.
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
},{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];


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
        quantity: 1
    })
    }
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

}
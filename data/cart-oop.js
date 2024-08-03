
// Procedural Programming ==> Procedure = a set of step-by-step instructions = a function


// Object-Oriented Programming(OOP) ==> Another style of programming (another way we write our code).
// OOP ==> tries to represent the real world.



// Use PascalCase for things that generate objects.
// PascalCase = start every word with a captital.

// Create a function that generate objects.
function Cart(localStorageKey){
    // Object-Oriented Programming(OOP) = organizing our code into objects.
    const cart = {
        cartItems: undefined,
        loadFromStorage(){
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
            if(!this.cartItems){
                this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            },{
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }]
            }
        },
        saveToStorage(){
        localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems))
        },
        addToCart(productId){
            let matchingItem;
            this.cartItems.forEach((cartItem) => {
                if(productId === cartItem.productId){
                    matchingItem = cartItem;
                }
            })
            if (matchingItem){
                matchingItem.quantity += 1;
            } else{
                this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
            })
            }
            this.saveToStorage()
        },
        removeFromCart(productId){
            const newCart = []
            this.cartItems.forEach((cartItem) => {
                if(cartItem.productId !== productId){
                    newCart.push(cartItem)
                }
            })
            this.cartItems = newCart;
            this.saveToStorage()
        },
        updateDeliveryOption(productId, deliveryOptionId){
            let matchingItem;
            this.cartItems.forEach((cartItem) => {
                if(productId === cartItem.productId){
                    matchingItem = cartItem;
                }
            })
            matchingItem.deliveryOptionId = deliveryOptionId
            thissaveToStorage()
        }
        
    }
    return cart;
}
// We're copy-pasting a lot of code.
// Using a function to create multiple objects.
const cart = Cart('cart-oop')
const businesscart = Cart('cart-business')


cart.loadFromStorage()
businesscart.loadFromStorage()


console.log(cart)
console.log(businesscart)


// An even better way to generate objects.
// Class = object generator.









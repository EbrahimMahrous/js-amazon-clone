// An even better way to generate objects.
// Class = object generator.

// Use PascalCase for things that generate objects.
class Cart {

    // Public property.
    cartItems;
    // Private properties and methods.
    // Private = it can only be accessed inside the class.
    #localStorageKey;

    constructor(localStorageKey){
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    // Private methods
    #loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

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
    };
    saveToStorage(){
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems))
    };
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
    };
    removeFromCart(productId){
        const newCart = []
        this.cartItems.forEach((cartItem) => {
            if(cartItem.productId !== productId){
                newCart.push(cartItem)
            }
        })
        this.cartItems = newCart;
        this.saveToStorage()
    };
    updateDeliveryOption(productId, deliveryOptionId){
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        })
        matchingItem.deliveryOptionId = deliveryOptionId
        this.saveToStorage()
    };
}

const cart = new Cart('cart-oop')
const businessCart = new Cart('cart-business')

// SyntaxError: Private field '#localStorageKey' must be declared in an enclosing class
// field = property.
// cart.#localStorageKey = 'this';

console.log(cart)
console.log(businessCart)
console.log(businessCart instanceof Cart)


// An even better way to generate objects.
// Class = object generator.


// Object-Oriented Programming(OOP) = organizing our code into objects (tries to represent the real world).
// Class = help us generate theses objects.
// Class = object generator.

// Benefits of Classes
// A class looks like the object that it generates.
// Classes have extra features for Object-Oriented Programming 
    // 1. Constructor = lets us run setup code and lets us put this setup code inside the class.

// More details about constructor:
// 1. Has to be named 'constructor'.
// 2. Should not return anything.


// class = better way to generate objects in OOP.

// Private methods

import { addToCart, cart, loadFromStorage } from "../../data/cart.js";


// Test Coverage = How much of the code is being tested(Try to maximize test coverage).

describe('test suite: addToCart', ()=>{
    it('adds an existing product to the cart', () =>{
        // spyOn() records every time a method is used.
        spyOn(localStorage, 'setItem')
        // Mocks
        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }])
        })
        loadFromStorage()
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
        expect(cart.length).toEqual(1)
        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
        expect(cart[0].quantity).toEqual(2)
    })
    it('adds a new product to the cart', () =>{
        // spyOn() records every time a method is used.
        spyOn(localStorage, 'setItem')
        // Mocks
        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([])
        })
        loadFromStorage()

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
        expect(cart.length).toEqual(1)
        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
        expect(cart[0].quantity).toEqual(1)
    })
})

// Flaky Test = test that sometimes passes and sometimes fails.

// Mocks = lets us replace a method with a fake version
// A mock only lasts for 1 test.


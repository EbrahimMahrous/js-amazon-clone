import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage, cart } from "../../data/cart.js";


// Two things to test:
// 1. How the page looks.
// 2. How the page behaves.
describe('Test suite: renderOrderSummary', ()=> {

    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'
    // Hooks in Jasmine
    // beforeEach() = runs code before each test
    // afterEach()  = runs code after each test
    // beforeAll()  = runs code before all tests
    // afterAll()   = runs code after all tests


    // Hooks = lets us run some code for each test.
    // beforeEach Hook
    beforeEach(()=> {
        spyOn(localStorage, 'setItem')
        document.querySelector('.js-test-container').innerHTML = `
        
        <div class ='js-order-summary'></div>
        <div class ='js-payment-summary'></div>
        

        `

        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([{
                // Normalizing the data.
                productId: productId1,
                quantity: 2,
                deliveryOptionId: '1'
            },{
                productId: productId2,
                quantity: 1,
                deliveryOptionId: '2'
            }])
        })
        loadFromStorage()

        renderOrderSummary()
    })


    it('display the cart', ()=> {
        // In our tests, where dose the cart get displayed?


        expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(2)

        expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity: 2')
        expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 1')

        document.querySelector('.js-test-container').innerHTML = ''
    })

    it('removes a product', () => {

        document.querySelector(`.js-delete-link-${productId1}`).click()

        expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1)
        expect(document.querySelector(`.js-cart-item-container-${productId1}`)).toEqual(null) 

        expect(document.querySelector(`.js-cart-item-container-${productId2}`)).not.toEqual(null) 

        // Is the cart updated?

        expect(cart.length).toEqual(1)
        expect(cart[0].productId).toContain(productId2)

        // Integration Test = test many units/pieces of code working

        document.querySelector('.js-test-container').innerHTML = ''


    })
});


// process
// 1. Make changes to code. 
// 2. Re-run the tests.


// In this lesson:
// 1. Manual and automated tests.
// 2. Test cases and test suites.
// 3. Testing Framework = helps us write tests easier.
// 4. Mock and spy on methods.
// 5. Test web pages using integration tests.
// 6. Hooks.

// 14-In this lesson:
// 1. Modules = better way to organize our code.
// 2. Created the checkout page.
// 3. Html link elements and radio selectors.
// 4. Made the delete link interactive.
// 5. Saved the cart in localStorage.


import { cart, removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
// Dayjs + javaScript Modules.
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
// Best Practice:
// When we need something complicated,
// Try to find an external library first.
// Before writing the code ourselves.
import { deliveryOptions, getDeliveryOption } from '../../data/deliveryOptions.js'
import { renderPaymentSummary } from "./paymentSummary.js";


// const today = dayjs();
// const deliveryDate = today.add(7, 'days')
// console.log(deliveryDate.format('dddd, MMMM D'))

export function renderOrderSummary(){

    let cartSummaryHTML = ''


    cart.forEach((cartItem) => {
        const productId = cartItem.productId

        const matchingProduct = getProduct(productId)

        const deliveryOptionId = cartItem.deliveryOptionId

        const deliveryOption = getDeliveryOption(deliveryOptionId)

        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
        const dataString = deliveryDate.format('dddd, MMMM D')


        cartSummaryHTML +=
        `
            <div class="cart-item-container
             js-cart-item-container
            js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
                Delivery date: ${dataString}
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${matchingProduct.image}">

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchingProduct.name}
                </div>
                <div class="product-price">
                    ${matchingProduct.getPrice()}
                </div>
                <div class="product-quantity js-product-quantity-${matchingProduct.id}">
                    <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                    Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${matchingProduct.id}" data-product-id = "${matchingProduct.id}">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>

                ${deliveryOptionsHTML(matchingProduct, cartItem)}

                    </div>
                </div>
            </div>

        `
    })

    function deliveryOptionsHTML(matchingProduct, cartItem){
        let html = ''
        // steps:
        // 1. loop through deliveryOption.
        // 2. For each option, generate some HTML.
        // 3. Combine the HTML together.
        deliveryOptions.forEach((deliveryOption) => {
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
            const dataString = deliveryDate.format('dddd, MMMM D')

            const priceString = deliveryOption.priceCents === 0 ? 'FREE Shipping' : `$${formatCurrency(deliveryOption.priceCents)}`


            const isChecked = deliveryOption.id === cartItem.deliveryOptionId

            html +=
            `
            <div class="delivery-option js-delivery-option" data-product-id = '${matchingProduct.id}' data-delivery-option-id = '${deliveryOption.id}'>
                <input type="radio" 
                ${isChecked ? 'Checked' : ''}
                class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                <div>

                    <div class="delivery-option-date">
                    ${dataString}
                    </div>

                    <div class="delivery-option-price">
                        ${priceString}
                    </div>

                </div>
            </div>
            `
        })
        return html

    }

    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML

    document.querySelectorAll('.js-delete-link').forEach((link)=>{
        link.addEventListener('click', () => {
            // 1. Remove the product from the cart.
            // 2. Update the Html
            const productId = link.dataset.productId;
            removeFromCart(productId)


            // Steps
            // 1. Use the DOM to get the element to remove.
            // 2. Use .remove() methods.

            // How do we know which element to get?
            const containeer = document.querySelector(`
                .js-cart-item-container-${productId}
            `)
            containeer.remove()


            renderPaymentSummary()
        })
    })

    document.querySelectorAll('.js-delivery-option').forEach((element)=>{
        element.addEventListener('click', ()=>{
            const {productId, deliveryOptionId} = element.dataset
            updateDeliveryOption(productId, deliveryOptionId)
            // A function can call / re-run itself = recursion.
            renderOrderSummary()
            renderPaymentSummary()
        })
    })
}
// 1. update the data + Regenerate all the HTML = MVC (Model - View - Controller).
// MVC ==> makes sure the page always matches the data and MVC is a design pattern.
// Split our code into 3 parts 
// 1. Model = saves and manages the data. ex: data
// 2. View = takes the data and displays it on the page. ex: checkout.js
// 3. Controller = runs some code when we interact with the page. ex: addEventListener
// renderOrderSummary()


// External Libraries = code that is outside of our project.

// Why we use external libraries 
// - let us share code.
// - save time.
// - avoid duplicating work.

// To get these dates:
// 1. Get today's date.
// 2. Do calculations (add 7 days, ...).
// 3. Display the data in easy-to-read format.

// DayJS external library.


// Minification انك بتضغط الكود عشان يحمل بشكل اسرع

// External Libraries + JavaScript Modules.

// ESM Version:
// A version that works with javascript modules.
// ESM = EcmaScript Module
// ( EcmaScript = javaScript )





// problem: we need to update the page one-by-one






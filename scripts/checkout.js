// 14-In this lesson:
// 1. Modules = better way to organize our code.
// 2. Created the checkout page.
// 3. Html link elements and radio selectors.
// 4. Made the delete link interactive.
// 5. Saved the cart in localStorage.


import { cart, removeFromCart, updateDeliveryOption } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
// Dayjs + javaScript Modules.
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
// Best Practice:
// When we need something complicated,
// Try to find an external library first.
// Before writing the code ourselves.
import { deliveryOptions } from '../data/deliveryOptions.js'


// const today = dayjs();
// const deliveryDate = today.add(7, 'days')
// console.log(deliveryDate.format('dddd, MMMM D'))


let cartSummaryHTML = ''


cart.forEach((cartItem) => {
    const productId = cartItem.productId
    let matchingProduct;
    products.forEach((product)=>{
        if(product.id === productId){
            matchingProduct = product
        }
    })

    const deliveryOptionId = cartItem.deliveryOptionId

    let deliveryOption;
    deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionId){
            deliveryOption = option
        }
    })

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
    const dataString = deliveryDate.format('dddd, MMMM D')


    cartSummaryHTML +=
    `
        <div class="cart-item-container 
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
                $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label">${cart.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-link" data-product-id = "${matchingProduct.id}">
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
        `).remove()
        console.log(containeer)
    })
})

document.querySelectorAll('.js-delivery-option').forEach((element)=>{
    element.addEventListener('click', ()=>{
        const {productId, deliveryOptionId} = element.dataset
        updateDeliveryOption(productId, deliveryOptionId)
    })
})

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












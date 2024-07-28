

export function formatCurrency(priceCents){
    return (Math.round(priceCents) / 100).toFixed(2)
}


// Default Export:
// - another way of exporting.
// - we can use it when we only want to export 1 thing.




// Each file can only have 1 default.

export default formatCurrency;
// import removeFromCart from "../data/cart.js";
// help us delete {}



// it's up to you which version of export you want to use.
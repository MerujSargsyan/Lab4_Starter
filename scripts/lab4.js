/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    if (add) {
        if(typeof num1 !== 'number' || typeof num2 !== 'number') {
            return false;
        }

        let result = num1 + num2;

        return result;
    }
    else {
        return false;
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    if(!Array.isArray(prices) || typeof discount !== 'number') {
        return false;
    }

    const length = prices.length;

    if(length === 0) {
        return false;
    }

    const discounted = []

    for(let i = 0; i < length; i++) {
        let discountedPrice = parseFloat(prices[i]) * (1 - parseFloat(discount));
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};
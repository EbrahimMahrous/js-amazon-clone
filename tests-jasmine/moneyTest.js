import formatCurrency from "../scripts/utils/money.js";



// console.log('test suite: formatCurrency');
// console.log('converts cents into dollars');
// to create test suite in jasmine we use function describe()

describe('test suite: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95')
    })

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00')
    })
    
    it('rounds up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01')
    })

})


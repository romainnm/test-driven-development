const calculator = require('../code/calculator');

test('addition', ()=> {
    expect(calculator.add(1, 2)).toBe(3)
});
test('substraction', ()=> {
    expect(calculator.substract(2, 1)).toBe(1)
});
test('divide', ()=> {
    expect(calculator.divide(4, 2)).toBe(2)
});
test('multiply', ()=> {
    expect(calculator.multiply(2, 3)).toBe(6)
});
const isEven = require('../src/isEven');

test('Deve retornar "true" para números pares', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(6)).toBe(true);

});
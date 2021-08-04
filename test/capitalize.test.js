const capitalize = require('../code/capitalize');

test('capitalize the first letter of a string', ()=> {
    expect(capitalize('hello')).toBe('Hello')
});
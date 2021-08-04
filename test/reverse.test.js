const reverse = require('../code/reverse');

test('reverse string', ()=> {
    expect(reverse('hello')).toBe('olleh')
});
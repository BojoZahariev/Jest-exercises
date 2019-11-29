//capitalize(string) takes a string and returns that string with the first character capitalized.

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

test('hello to equal Hello', () => {
expect(capitalize('hello')).toBe('Hello')
});

//reverseString(string) takes a string and returns it reversed

const reverseString = (string) => { 
return string.split('').reverse().join('');
};

test('hello to become olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

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


//A calculator object that contains the basic operations: add, subtract, divide, and multiply.

var calculator = {
  first: 3,
  second : 2,
  
  add : function() {
    return this.first + this.second;
  },

  subtract : function() {
    return this.first - this.second;
  },

  divide : function() {
    return this.first / this.second;
  },

  multiply : function() {
    return this.first * this.second;
  },

};

test('calculator', () => {
  expect(calculator.add()).toEqual(5);
  expect(calculator.subtract()).toEqual(1);
  expect(calculator.divide()).toBeCloseTo(1.5);
  expect(calculator.multiply()).toEqual(6);
});


//Caesar Cipher

//check if letter is uppercase
function isUpperCase(str) {
  return str === str.toUpperCase();
}

//decipher the string
let caesar = (str, key) => {
  let decipher = '';

  //decipher each letter
  for (let i = 0; i < str.length; i++) {
    //if letter is uppercase then add uppercase letters
    if (isUpperCase(str[i])) {
      decipher += String.fromCharCode(((str.charCodeAt(i) + key - 65) % 26) + 65);
    } else {
      //else add lowercase letters
      decipher += String.fromCharCode(((str.charCodeAt(i) + key - 97) % 26) + 97);
    }
  }

  return decipher;
};

test('caesar', () => {
  expect(caesar('Hello', 2)).toBe('Jgnnq');
});

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

function caesar(text, key) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let fullAlphabet = alphabet + alphabet + alphabet;

  key = key % alphabet.length;
  var cipherFinish = '';

  for (i = 0; i < text.length; i++) {
    var letter = text[i];
    var upper = letter == letter.toUpperCase();
    letter = letter.toLowerCase();

    var index = alphabet.indexOf(letter);
    if (index == -1) {
      cipherFinish += letter;
    } else {
      index = index + key + alphabet.length;
      var nextLetter = fullAlphabet[index];
      if (upper) {
        nextLetter = nextLetter.toUpperCase();
      }
      cipherFinish += nextLetter;
    }
  }

  return cipherFinish;
}

test('caesar', () => {
  expect(caesar('Hello!', 2)).toBe('Jgnnq!');
  expect(caesar('Jgnnq', -2)).toBe('Hello');
  expect(caesar('Zena', 30)).toBe('Dire');
  expect(caesar('Dire', -30)).toBe('Zena');
  expect(caesar('See me', 3)).toBe('Vhh ph');
  expect(caesar('Vhh ph', -3)).toBe('See me');
});

// Create an object with all of the roman numerals needed
const romanNumeralKey = {
  M: 1000,
  CM: 900,
  DCCC: 800,
  DCC: 700,
  DC: 600,
  D: 500,
  CD: 400,
  CCC: 300,
  CC: 200,
  C: 100,
  XC: 90,
  LXXX: 80,
  LXX: 70,
  LX: 60,
  L: 50,
  XL: 40,
  XXX: 30,
  XX: 20,
  X: 10,
  IX: 9,
  VIII: 8,
  VII: 7,
  VI: 6,
  V: 5,
  IV: 4,
  III: 3,
  II: 2,
  I: 1,
}

// Declare function to convert a number to a roman numeral
const convertToRoman = num => {
  // Check if num param is a number if not return null
  if (typeof num !== 'number') return null

  // Declare romanNumeral as an empty string for use later
  let romanNumeral = ''

  // Declare i equal to num param to use in loops so we don't alter the param itself
  let i = num

  // Convert romanNumeralKey object to an array so we can use the forEach method and loop through the array
  Object.keys(romanNumeralKey).forEach(x => {
    // For each key in our array check if i is greater then or equal to the value of that key
    while (i >= romanNumeralKey[x]) {
      // While i is greater or equal to that keys value append that key to our romanNumeral string
      romanNumeral += x
      // Then subtract that keys value from our i variable and continue looping if i is greater or equal to the value of the key
      i -= romanNumeralKey[x]
    }
  })
  // return our final romanNumeral string
  return romanNumeral.toUpperCase()
}

convertToRoman(3999)

function convertToRoman(num) {
  let romanNums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let str = '';

  for (let z of Object.keys(romanNums)) {
    let m = Math.floor(num / romanNums[z]);
    num -= m * romanNums[i];
    str += z.repeat(m)
  }
  return str;
}

console.log(convertToRoman(2));

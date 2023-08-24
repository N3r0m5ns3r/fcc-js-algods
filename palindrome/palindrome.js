function palindrome(str) {
  let re = /[\W_]/g;
  let lowerStr = str.toLowerCase().replace(re, '');
  let strRev = lowerStr.split('').reverse().join('');
  if (strRev === lowerStr) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome());

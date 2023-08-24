//solution below is format agnostic

//function telephoneCheck(str) {
//  let ctCode = 1;
//  if (str.match(/\d/g).length === 10) {
//    return true
//  }
//  if (ctCode !== 1) {
//    return false;
//  }
//}
// solution below is format strict
let re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck("555-555-5555");

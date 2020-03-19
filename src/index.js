module.exports = function reverse (n) {
  let theString = n.toString();
  let theArray = theString.split("");
  let theFilter = theArray.filter( item => !(item == "-"));
  let res = theFilter.reverse().join("");
  

  return res;

}

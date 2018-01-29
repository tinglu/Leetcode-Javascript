// Write a function that takes a string as input and returns the string reversed.
//
// Example:
// Given s = "hello", return "olleh".

/**
 * @param {string} s
 * @return {string}
 */
var reverseString1 = function (s) {
  if (s) {
    var newS = [];
    for (var i = s.length - 1; i >= 0; i--) {
      newS.push(s.charAt(i));
    }
    return newS.join('');
  } else {
    return '';
  }
};

var reverseString2 = function (s) {
  var l = s.length;
  if (l < 2) {
    return s;
  }
  var sArray = s.split('');
  var midIndex = Math.floor(l / 2) - 1;
  for (var i = 0; i <= midIndex; i++) {
    var j = l - i - 1;
    var tmp = sArray[i];
    sArray[i] = sArray[j];
    sArray[j] = tmp;
  }
  return sArray.join('');
};

var reverseString = function (s) {
  if (s.length < 2)
    return s;
  var halfIndex = Math.ceil(s.length / 2);
  return reverseString(s.substr(halfIndex)) +
    reverseString(s.substr(0, halfIndex));
};
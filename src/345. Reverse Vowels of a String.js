/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var arr = s.split('');
    var left = 0;
    var right = s.length - 1;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var tmp = '';
    for (var i = left; i < right; i++) {
        if (vowels.indexOf(arr[i].toLowerCase()) > -1) {
            for (var j = right; j > left; j--) {
                if (vowels.indexOf(arr[j].toLowerCase()) > -1) {
                    tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                    left = i + 1;
                    right = j - 1;
                    break;
                }
            }
        }
    }
    return arr.join('');
};
// console.log(reverseVowels('leetcode'));

module.exports = function reverse (n) {
    const number = Math.abs(n);
    const arrStr = number.toString().split('').reverse();
    let str = '';
    for (let i = 0; i < arrStr.length; i++) {
        str = str + arrStr[i];

    }
  return str
}

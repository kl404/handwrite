function formatNumber(num) {
  let str = num.toString();
  let [integer, decimal] = str.split(".");

  let result = "";
  for (let i = integer.length - 1, count = 0; i >= 0; i--) {
    count++;
    result = integer[i] + result;
    if (count % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }

  return decimal ? result + "." + decimal : result;
}

console.log(formatNumber(1234567)); // "1,234,567"
console.log(formatNumber(1234.567)); // "1,234.567"

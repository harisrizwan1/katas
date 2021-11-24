const calculateChange = function(total, cash) {
  let result = {};
  let change = cash - total;
  if (change >= 2000) {
    result.twentyDollar = Math.floor(change / 2000);
    change -= result.twentyDollar * 2000;
  }
  if (change >= 1000) {
    result.tenDollar = Math.floor(change / 1000);
    change -= result.tenDollar * 1000;
  }
  if (change >= 500) {
    result.fiveDollar = Math.floor(change / 500);
    change -= result.fiveDollar * 500;
  }
  if (change >= 200) {
    result.twoDollar = Math.floor(change / 200);
    change -= result.twoDollar * 200;
  }
  if (change >= 100) {
    result.oneDollar = Math.floor(change / 100);
    change -= result.oneDollar * 100;
  }
  if (change >= 25) {
    result.quarter = Math.floor(change / 25);
    change -= result.quarter * 25;
  }
  if (change >= 10) {
    result.dime = Math.floor(change / 10);
    change -= result.dime * 10;
  }
  if (change >= 5) {
    result.nickel = Math.floor(change / 5);
    change -= result.nickel * 5;
  }
  if (change >= 1) {
    result.penny = Math.floor(change / 1);
    change -= result.penny * 1;
  }
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
module.exports = function reverse(n) {
  let nn = Math.abs(n);
  let res = 0;

  while (nn > 0) {
    res = res * 10 + (nn % 10);
    nn = Math.floor(nn / 10);
  }

  return res;
};

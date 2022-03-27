let qpow = function (a, n) {
  if (n == 0) return 1;
  else if (n % 2 == 1) return qpow(a, n - 1) * a;
  else {
    let temp = qpow(a, n / 2);
    return temp * temp;
  }
};

function getObj() {
  const symbol = Symbol("test");
  const obj = {};
  obj[symbol] = "test";
  return obj;
}

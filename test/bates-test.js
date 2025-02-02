var tape = require("tape"),
    seedrandom = require("seedrandom"),
    d3 = Object.assign({}, require("../"), require("d3-array")),
    skewness = require("./skewness"),
    kurtosis = require("./kurtosis");

require("./inDelta");

tape("d3.randomBates(n) returns random numbers with a mean of one-half", function(test) {
  var randomBates = d3.randomBates.source(seedrandom("f330fbece4c1c99f"));
  test.inDelta(d3.mean(d3.range(10000).map(randomBates(1))), 0.5, 0.05);
  test.inDelta(d3.mean(d3.range(10000).map(randomBates(10))), 0.5, 0.05);
  test.end();
});

tape("d3.randomBates(n) returns random numbers with a variance of 1 / (12 * n)", function(test) {
  var randomBates = d3.randomBates.source(seedrandom("c4af5ee918417093"));
  test.inDelta(d3.variance(d3.range(10000).map(randomBates(1))), 1 / 12, 0.05);
  test.inDelta(d3.variance(d3.range(10000).map(randomBates(10))), 1 / 120, 0.05);
  test.end();
});

tape("d3.randomBates(n) returns random numbers with a skewness of 0", function(test) {
  var randomBates = d3.randomBates.source(seedrandom("bb0bb470f346ff65"));
  test.inDelta(skewness(d3.range(10000).map(randomBates(1))), 0, 0.05);
  test.inDelta(skewness(d3.range(10000).map(randomBates(10))), 0, 0.05);
  test.end();
});

tape("d3.randomBates(n) returns random numbers with a kurtosis of -6 / (5 * n)", function(test) {
  var randomBates = d3.randomBates.source(seedrandom("3c21f0c8f5a8332c"));
  test.inDelta(kurtosis(d3.range(10000).map(randomBates(1))), -6 / 5, 0.05);
  test.inDelta(kurtosis(d3.range(10000).map(randomBates(10))), -6 / 50, 0.05);
  test.end();
});

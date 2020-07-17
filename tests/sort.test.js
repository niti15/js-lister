const { sort } = require("../src/sort");

const input = [1, 2, 4, 7, 16, 3];
const result = [1, 3, 7, 2, 4, 16];

//just added one sample test case due to time being

test("sort", () => {
  expect(sort(input)).toEqual(result);
});

test("sort", () => {
  expect(sort([8, 100, 99, 67, 56, 12, 33])).toEqual([
    33,
    67,
    99,
    8,
    12,
    56,
    100,
  ]);
});

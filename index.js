"use strict";

const obj = {
  Math: 80,
  English: 90,
  Science: 60,
  Society: 50,
};

Object.keys(obj).forEach((key) => {
  const value = obj[key];
  console.log(`${key}は${value}点です。`);
});

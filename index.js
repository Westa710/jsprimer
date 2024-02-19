"use strict";

// const obj = {
//   Math: 80,
//   English: 90,
//   Science: 60,
//   Society: 50,
// };

// Object.keys(obj).forEach((key) => {
//   const value = obj[key];
//   console.log(`${key}は${value}点です。`);
// });

/* RegExp */
// const str = "ABC124EFG";
// const searchPattern = /\d{3}/;
// console.log(str.search(searchPattern));

// const BooleanWrapper = new Boolean(true);
// console.log(typeof BooleanWrapper);

// const regularBoolean = true;
// console.log("type of regularBoolean is " + typeof regularBoolean);

function delay() {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random();
    console.log(isSuccess);
    if (isSuccess >= 0.5) {
      const randomTime = Math.random() * 1000;
      setTimeout(() => {
        resolve(randomTime);
      }, randomTime);
    } else {
      reject(new Error("Failed"));
    }
  });
}

let spendTime;

delay()
  .then((time) => {
    spendTime = time;
    console.log(`${spendTime}ミリ秒待ちました。成功`);
  })
  .catch((error) => {
    console.log("失敗");
    console.error(error.message);
  });

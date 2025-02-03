const sleep = (millis) => new Promise(resolve => setTimeout(resolve, millis));

let millis = 100;
let t = Date.now();

sleep(millis).then(() => {
    console.log(Date.now() - t);
});

let millis2 = 200;

sleep(millis2).then(() => {
    console.log(Date.now() - t);
});

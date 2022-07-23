// import makeMeAPromise from './index.js'

// const data = {
//     car: 'BMW',
//     color: 'red',
//     year: '2018',
//     price: '$1,000,000'
// }

// console.log(makeMeAPromise(data));
// console.log(makeMeAPromise(data, 'reject'));

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

p.then((message) => {
    console.log('This is the in the then ' + message);
}).catch((message) => {
    console.log('This is the in the catch ' + message);
});



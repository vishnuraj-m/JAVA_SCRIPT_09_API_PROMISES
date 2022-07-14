import getData from './index.js'

const response = getData();

console.log(response)

const firstTask = (data) => {
    console.log(data)
    return {
        ...data,
        color: 'pink'
    };
}
const secondTask = (data) => {
    console.log(data);
    console.log(data.color);
}

response
    .then(firstTask)
    .then(secondTask)

// console.log(response)

// setTimeout(() => {
//     console.log(response)
// })
// setTimeout(() => {
//     console.log(response)
// })
// setTimeout(() => {
//     console.log(response)
// })




// import makeMeAPromise from './index.js'

// const data = {
//     car: 'BMW',
//     color: 'red',
//     year: '2018',
//     price: '$1,000,000'
// }

// console.log(makeMeAPromise(data));
// console.log(makeMeAPromise(data, 'reject'));

// const response = fetch('https://jsonplaceholder.typicode.com/todos');
// console.log(response)

// setTimeout(() => {
//     console.log(response)
// }, 3000)
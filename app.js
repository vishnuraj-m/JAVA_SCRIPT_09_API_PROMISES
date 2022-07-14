import getData from './index.js'

const response = getData();

console.log(response)

const doThis = (data) => {
    console.log(`do something with this data`, data)
}

response.then(doThis)

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
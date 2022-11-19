//const datefns = require('date-fns');

//console.log(datefns.format(new Date(), "MM/dd/yyyy"));

//console.log("Hello World");

//let firstName = "Kanjanachai"
//let age = 22

//let info = `
//    My name is ${firstName}
//    My age is ${age}
//`
//console.log(info)

const user = {
    name: "Kanjanachai",
    salary: 40000,
    address:{
        province: "bangkok",
        postcode: 10250
    }
}

//console.log(user.address.postcode)

const showData = () => `${user.name}`
//console.log(showData())

const showData2 = () => {
    let inf = 'My name is '
    return `${inf} ${user.name}`
}

//console.log(showData2())

const sumNumber = (a, b) => a + b;

//console.log(sumNumber(8, 4))

const {name, salary, address: { postcode }} = user

console.log(name)
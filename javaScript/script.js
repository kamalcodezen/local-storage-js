

const addNumberToLs = () => {
    const number = Math.ceil(Math.random() * 100);
    localStorage.setItem("number", number);
    console.log(number)

}
const getNumberToLs = () => {
    const number = localStorage.getItem("number");
    console.log("number", number)

}

const setObjectItem = () => {
    const customer = { name: "kamal", age: 20 }
    const customerJson = JSON.stringify(customer)
    localStorage.setItem("customer", customerJson)

}

const getObjectItem = () => {

    const customerJson = localStorage.getItem("customer")
    const customer = JSON.parse(customerJson)
    console.log( customer.name)

}
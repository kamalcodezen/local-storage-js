

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
    console.log(customer.name)

}


const mainAllProduct = () => {
    const productEl = document.getElementById("product");
    const quantityEl = document.getElementById("quantity");

    const product = productEl.value;
    const quantity = quantityEl.value;

    displayProduct(product, quantity);
    addToProduct(product, quantity);

    productEl.value = "";
    quantityEl.value = "";
}



const getCart = () => {
    const cart = {};
    return cart;
}

const addToProduct = (product, quantity) => {
    let cart = getCart();
    cart[product] = quantity;
    console.log("cart", cart)

}


const displayProduct = (product, quantity) => {

    const li = document.createElement("li")
    li.innerText = `${product} : ${quantity}`

    // get div and append
    const productList = document.getElementById("product-list");
    productList.append(li)

}
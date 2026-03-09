

const addNumberToLs = () => {
    const number = Math.ceil(Math.random() * 100);
    localStorage.setItem("number", number);
    console.log(number)

}
const getNumberToLs= () => {
    const number = localStorage.getItem("number");
    console.log("number", number)

}
// getItem()
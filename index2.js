const total = 100;// количество товара на складе
const ordered = 50;// единиц товара в заказe
console.log(total);
console.log(ordered);

let message = "Введите количество товара";
let enteredData = +prompt(message);
console.log("enteredData: ", enteredData);
if (enteredData > total) {
    alert(`На складе недостаточно товара`);
} else if (enteredData <= 0){
    alert("Введите пожалуйста натуральное число");
}
else {
     alert(`Заказ оформлен, с Вами свяжется менеджер`);
}
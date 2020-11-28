let credits = 23588 ;
const pricePerDroid = 3000;
const numberDroids = +prompt("Введите кол-во дроидов, которые Вы хотите заказать");
console.log(typeof numberDroids);
if(numberDroids == 0){
    alert("Отменено пользователем");
} else {
    let Totalvalue = pricePerDroid * numberDroids;
    if(Totalvalue > credits) {
        alert("Недостаточно средств на счету");
    } else {
        credits = credits - Totalvalue;
        alert("Вы купили "  +numberDroids+  "дроидов, на вашем счету осталось"  +credits+  "кредитов");
    }
}
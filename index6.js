let total = 0;
let input = +prompt("Введите подходящее число");
while (input) {
  input = +prompt("Введите другое число");
  total = total + input;
  console.log(total);
}

alert(total);

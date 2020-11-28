const ADMIN_PASSWORD = "jqueryismyjam";
let message;

message = prompt("Enter the password");

const adminEnter = function () {
  if (message === null) {
    alert("Отменено пользователем!");
  } else if (message === "") {
    alert("Please enter the password");
  } else if (message === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
  } else if (message !== ADMIN_PASSWORD) {
    alert("Доступ запрещен, неверный пароль!");
  }
  alert(message);
};
adminEnter();

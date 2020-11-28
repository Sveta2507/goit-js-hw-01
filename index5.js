let enteredData = prompt("Type the country you live in to arrange delivery");
enteredData = enteredData.toUpperCase();

switch(enteredData) {
    case "CHINA":
    alert(`Delivery into China will cost 100 credits`);
    break;
    case "CHILI":
    alert(`Delivery into Chili will cost 250 credits`);
    break;
    case "AUSTRALIA":
    alert("Delivery into Australia will cost 170 credits");
    break;
    case "INDIA":
    alert("Delivery into India will cost 80 credits");
    break;
    case "JAMAICA":
    alert("Delivery into Jamaica will cost 120 credits");
    break;
    default:
        alert(`Delivery is unable in your country`);
        break;
}
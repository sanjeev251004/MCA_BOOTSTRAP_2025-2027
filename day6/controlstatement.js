let gender = prompt("Enter your Gender (Male/Female)")

if (gender.toLowerCase() === "male" || gender.toLowerCase()=== "female") {
    let age = prompt("Enter your age:");

    if ((gender.toLowerCase() === "male" && age >= 30) || (gender.toLowerCase() === "female" && age >= 25)) {
        alert("Eligible for insurance");
    } else {
        alert("Not eligible for insurance");
    }
}
 else {
    alert("Invalid input");
}

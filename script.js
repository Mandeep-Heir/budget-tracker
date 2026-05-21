let expenses = [];
let total = 0;

let savedExpenses = localStorage.getItem("expenses");

if (savedExpenses) {
    expenses = JSON.parse(savedExpenses);
}

let savedTotal = localStorage.getItem("total");

if (savedTotal) {
    total = Number(savedTotal);
}

displayExpenses();

document.getElementById("total").textContent = total;
document.getElementById("count").textContent = expenses.length;

function AddExpense() {

    let expense = document.getElementById("expense").value;

    let amount = document.getElementById("amount").value;

    if (expense === "" || amount === "") {
        alert("Please enter both expense and amount.");
        return;
    }

    if (isNaN(amount) || Number(amount) <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    let expenseObject = {
        name: expense,
        amount: amount
    };

    expenses.push(expenseObject);

    total = total + Number(amount);

    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("total", total);

    document.getElementById("total").textContent = total;

    document.getElementById("count").textContent = expenses.length;

    displayExpenses();

    document.getElementById("expense").value = "";

    document.getElementById("amount").value = "";

}

function DeleteExpense(index) {

    expenses.splice(index, 1);

    total = 0;

    for (let i = 0; i < expenses.length; i++) {

        total = total + Number(expenses[i].amount);

    }

    localStorage.setItem("expenses", JSON.stringify(expenses));

    localStorage.setItem("total", total);

    document.getElementById("total").textContent = total;

    document.getElementById("count").textContent = expenses.length;

    displayExpenses();

}

function displayExpenses() {

    let list = document.getElementById("expenseList");

    list.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {

        list.innerHTML += "<li>"
            + expenses[i].name
            + " - $"
            + expenses[i].amount
            + " <button onclick='DeleteExpense(" + i + ")'>Delete</button>"
            + "</li>";

    }

}
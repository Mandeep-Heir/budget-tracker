const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const addButton = document.querySelector("button");
const expenseList = document.getElementById("expenseList");
addButton.addEventListener("click", function() {
    const name = expenseNameInput.value;
    const amount = expenseAmountInput.value;

    console.log(name);
    console.log(amount);
});
let expenses = [];

function AddExpense(){
    let expense = document.getElementById("expense").value;
    let amount = document.getElementById("amount").value;
    let expenseObject={
      name: expense,
      amount: amount
    };
   // alert(expense);
// document.getElementById("output").textContent =  expense;
  //  document.getElementById("expense").value = "";  
    expenses.push(expenseObject);
    console.log(expenses);
  //  document.getElementById("expenseList").innerHTML =  expense;
  let list = document.getElementById("expenseList");
  list.innerHTML="";
  for(let i = 0 ; i < expenses.length; i++){
    list.innerHTML += "<li>" 
        + expenses[i].name 
        + " - $" 
        + expenses[i].amount 
        + "</li>";
  }

}

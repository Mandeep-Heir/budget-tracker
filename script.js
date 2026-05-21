let expenses = [];
let total = 0;

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
    total = total + Number(amount);
    // document.getElementById("total").textContent = total;
    console.log(expenses);
    document.getElementById("total").textContent = total;
  //  document.getElementById("expenseList").innerHTML =  expense;
  let list = document.getElementById("expenseList");
  list.innerHTML="";
  for(let i = 0 ; i < expenses.length; i++){
   list.innerHTML += "<li>" 
    + expenses[i].name 
    + " - $" 
    + expenses[i].amount
    + " <button>Delete</button>"
    + "</li>";
  }

  document.getElementById("expense").value = "";
  document.getElementById("amount").value = "";
  //document.getElementById("total").textContent = total;
}

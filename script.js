let expenses = [];

function AddExpense(){
    let expense = document.getElementById("expense").value;
   // alert(expense);
// document.getElementById("output").textContent =  expense;
  //  document.getElementById("expense").value = "";  
    expenses.push(expense);
    console.log(expenses);

}

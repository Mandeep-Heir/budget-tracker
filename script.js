let expenses = [];

function AddExpense(){
    let expense = document.getElementById("expense").value;
   // alert(expense);
// document.getElementById("output").textContent =  expense;
  //  document.getElementById("expense").value = "";  
    expenses.push(expense);
    console.log(expenses);
  //  document.getElementById("expenseList").innerHTML =  expense;
  let list = document.getElementById("expenseList");
  list.innerHTML="";
  for(let i = 0 ; i < expenses.length; i++){
    list.innerHTML+="<li>"  + expenses[i] +"</li>";
  }

}

let expenses = [];
let total = 0;

function AddExpense(){
    let expense = document.getElementById("expense").value;
    let amount = document.getElementById("amount").value;
    if(expense === "" || amount === ""){
        alert("Please enter both expense and amount.");
        return;
    }
    if (isNaN(amount) || Number(amount) <= 0){
        alert("Please enter a valid amount.");
        return;
    }
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
    document.getElementById("count").textContent = expenses.length;
  //  document.getElementById("expenseList").innerHTML =  expense;
  let list = document.getElementById("expenseList");
  list.innerHTML="";
  for(let i = 0 ; i < expenses.length; i++){
   list.innerHTML += "<li>" 
    + expenses[i].name 
    + " - $" 
    + expenses[i].amount
    + " <button onclick='DeleteExpense(" + i + ")'>Delete</button>"
    + "</li>";
  }

  document.getElementById("expense").value = "";
  document.getElementById("amount").value = "";
  //document.getElementById("total").textContent = total;
//   function DeleteExpense(index){
//     alert(index);
// }

}
  function DeleteExpense(index){
  total = total - Number(expenses[index].amount);
  document.getElementById("total").textContent = total;
   expenses.splice(index,1);
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
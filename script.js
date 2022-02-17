let totalIncome = document.getElementById("income");
let foodExpenses = document.getElementById("foodExpenses");
let rentExpenses = document.getElementById("rentExpenses");
let totalExpenses = document.getElementById("expensesOutput");
let clothesExpenses = document.getElementById("clothesExpenses");
// console.log(foodExpenses);
function calculation() {
  const expensesTotal =
    parseFloat(foodExpenses.value) +
    parseFloat(rentExpenses.value) +
    parseFloat(clothesExpenses.value);
  totalExpenses.value = expensesTotal;
  const balance = parseFloat(totalIncome.value) - expensesTotal;
}

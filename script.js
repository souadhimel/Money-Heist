// income
let totalIncome = document.getElementById("income");

// expense
let foodExpenses = document.getElementById("foodExpenses");
let rentExpenses = document.getElementById("rentExpenses");
let clothesExpenses = document.getElementById("clothesExpenses");
let totalExpenses = document.getElementById("expensesOutput");

let balanceAmount = document.getElementById("balance");

// saving
let savingRate = document.getElementById("saving_input");
let savingAmount = document.getElementById("saving_amount");
let remainingBalance = document.getElementById("remaining_balance");

function calculation() {
  const expensesTotal =
    parseFloat(foodExpenses.value) +
    parseFloat(rentExpenses.value) +
    parseFloat(clothesExpenses.value);
  totalExpenses.value = expensesTotal;
  const balanceOutcome = parseFloat(totalIncome.value) - expensesTotal;
  balance.value = balanceOutcome;
}
function saving() {
  let saving =
    (parseFloat(totalIncome.value) / 100) * parseFloat(savingRate.value);
  savingAmount.value = saving;
  let remaining = balanceAmount.value - saving;
  remainingBalance.value = remaining;
}

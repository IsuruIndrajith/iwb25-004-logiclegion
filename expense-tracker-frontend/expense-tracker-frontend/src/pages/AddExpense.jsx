import ExpenseForm from "../components/ExpenseForm";

export default function AddExpense() {
  const handleAdd = async (expense) => {
    await fetch("/expenseTracker/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    });
    alert("Expense added ✅. Go to Dashboard/Expenses to refresh data.");
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm onAdd={handleAdd} />
    </div>
  );
}


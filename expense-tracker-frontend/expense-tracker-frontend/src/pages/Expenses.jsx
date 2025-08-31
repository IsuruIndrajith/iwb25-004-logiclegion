import { useEffect, useState } from "react";
import ExpenseList from "../components/ExpenseList";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("/expenseTracker/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>🧾 All Expenses</h2>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

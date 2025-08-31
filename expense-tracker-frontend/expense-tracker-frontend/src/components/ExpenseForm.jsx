import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!category || !amount || !date) return alert("All fields are required");
    onAdd({ category, amount: parseFloat(amount), date });
    setCategory("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: 20 }}>
      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        placeholder="Amount"
        type="number"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

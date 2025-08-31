export default function ExpenseList({ expenses }) {
  if (expenses.length === 0) return <p>No expenses recorded yet.</p>;

  return (
    <table border="1" cellPadding="8" style={{ marginTop: 10 }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.category}</td>
            <td>{e.amount}</td>
            <td>{e.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}



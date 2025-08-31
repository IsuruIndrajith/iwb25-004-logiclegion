import { useEffect, useState } from "react";

export default function Dashboard() {
  const [summary, setSummary] = useState({});

  const fetchSummary = async () => {
    const res = await fetch("/expenseTracker/summary");
    const data = await res.json();
    setSummary(data);
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  return (
    <div>
      <h2>📊 Dashboard</h2>
      {Object.keys(summary).length === 0 ? (
        <p>No data yet.</p>
      ) : (
        <ul>
          {Object.entries(summary).map(([cat, total]) => (
            <li key={cat}>
              {cat}: {total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

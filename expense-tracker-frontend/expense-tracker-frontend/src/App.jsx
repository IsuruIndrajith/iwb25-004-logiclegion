import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import Expenses from "./pages/Expenses";

export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: "Arial" }}>
      <nav style={{ marginBottom: 12 }}>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/add">Add Expense</Link> |{" "}
        <Link to="/expenses">All Expenses</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </div>
  );
}

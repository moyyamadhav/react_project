import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    setExpenses([
      ...expenses,
      { id: Date.now(), title, amount: Number(amount) },
    ]);
    setTitle("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div>
      <h2>Expense Tracker</h2>

      <form onSubmit={addExpense}>
        <input
          placeholder="Expense name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {expenses.map((item) => (
          <li key={item.id}>
            {item.title} - ₹{item.amount}
            <button onClick={() => deleteExpense(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Total: ₹{total}</h3>
    </div>
  );
}
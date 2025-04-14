import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...form,
      id: Date.now(),
    };
    onAddExpense(newExpense);
    setForm({ name: '', description: '', category: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Expense name" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
      <select name="category" value={form.category} onChange={handleChange} required>
        <option value="">Select category</option>
        <option value="food">Food</option>
        <option value="utilities">Utilities</option>
        <option value="personal">Personal</option>
        <option value="growth">Growth</option>
      </select>
      <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" required />
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;

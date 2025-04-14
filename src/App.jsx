import React, { useState } from 'react';
import ExpenseForm from './Components/ExpenseForm';
import SearchBar from './Components/SearchBar';
import ExpenseTable from './Components/ExpenseTable';
import './App.css';


function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Light Mummfu",
      description: "Wednesday's Lunch",
      category: "food",
      amount: 100,
      date: "2025-04-08"
    },
    {
      id: 2,
      name: "NYC taxes",
      description: "power taxes",
      category: "utilities",
      amount: 2000,
      date: "2025-04-05"
    },
    {
      id: 3,
      name: "Buy shoes",
      description: "Add to my shoe collection",
      category: "personal",
      amount: 3000,
      date: "2025-04-06"
    },
    {
      id: 4,
      name: "Buy book",
      description: "Add to my book collection",
      category: "growth",
      amount: 10000,
      date: "2025-04-07"
    }
  ]);

  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState(null);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const filteredExpenses = expenses.filter(exp =>
    exp.name.toLowerCase().includes(search.toLowerCase()) ||
    exp.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleSort = (field) => {
    const sorted = [...filteredExpenses].sort((a, b) =>
      a[field].toString().localeCompare(b[field].toString())
    );
    setExpenses(sorted);
    setSortField(field);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <SearchBar search={search} onSearch={setSearch} />
      <div className="main">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseTable
          expenses={filteredExpenses}
          onDelete={handleDelete}
          onSort={handleSort}
          sortField={sortField}
        />
      </div>
    </div>
  );
}

export default App;

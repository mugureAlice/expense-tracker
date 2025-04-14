import React from 'react';

const ExpenseTable = ({ expenses, onDelete, onSort, sortField }) => {
  const renderSortIndicator = (field) => {
    return sortField === field ? '' : '';
  };

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th onClick={() => onSort('name')}>Expense {renderSortIndicator('name')}</th>
          <th onClick={() => onSort('description')}>Description {renderSortIndicator('description')}</th>
          <th onClick={() => onSort('category')}>Category {renderSortIndicator('category')}</th>
          <th>Amount</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
            <td>
              <button onClick={() => onDelete(expense.id)}>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;

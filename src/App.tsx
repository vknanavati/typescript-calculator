import { useState } from 'react';
import { Container } from '@mui/material';
import { BudgetCard } from './components/BudgetCard';
import { AddExpenseForm } from './components/AddExpenseForm';
import {HandleAddExpense, HandleCloseExpense, HandleSaveExpense, Expense } from './types';

function App() {

  const [expenseDescription, setExpenseDescription] = useState("")
  const [expenseAmount, setExpenseAmount] = useState("")

  const [expenses, setExpenses] = useState<Expense[]>([])

  const [isOpenDialog, setIsOpenDialog] = useState(false)

  const handleAddExpense: HandleAddExpense = () => {
    setIsOpenDialog(true);
  }

  const handleCloseExpense: HandleCloseExpense = () => {
    setIsOpenDialog(false)
  }

  const handleSaveExpense: HandleSaveExpense = () => {

    if (expenseDescription && expenseAmount) {
      setExpenses((prevExpenses)=> [
        ...prevExpenses,
        {description: expenseDescription, amount: expenseAmount}
      ])
    }

    setExpenseAmount("")
    setExpenseDescription("")
    setIsOpenDialog(false)
  }

  return (
    <Container sx={{mt: 5}}>
      <BudgetCard
        item={expenseDescription}
        amount={expenseAmount}
        onAddExpense={handleAddExpense}
        expenses={expenses}
      />
      <AddExpenseForm
        open={isOpenDialog}
        onCloseExpense={handleCloseExpense}
        setExpenseDescription={setExpenseDescription}
        setExpenseAmount={setExpenseAmount}
        onSaveExpense={handleSaveExpense}
      />
   </Container>
  );
}

export default App;

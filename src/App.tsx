import { useState } from 'react';
import { Container } from '@mui/material';
import { CreateBudget } from './components/CreateBudget';
import { BudgetCard } from './components/BudgetCard';
import { AddExpenseForm } from './components/AddExpenseForm';
import { HandleAddExpense, HandleCloseExpense } from './types';

function App() {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [total, setTotal] = useState("")

  const [isOpenDialog, setIsOpenDialog] = useState(false)

  const handleAddExpense: HandleAddExpense = () => {
    setIsOpenDialog(true)
  }

  const handleCloseExpense: HandleCloseExpense = () => {
    setIsOpenDialog(false)
  }

  return (
    <Container sx={{mt: 5}}>
      <CreateBudget setName={setName} setAmount={setAmount} setTotal={setTotal}/>
      {name && amount && (
        <BudgetCard name={name} amount={amount} total={total} onAddExpense={handleAddExpense}/>
      )}
      <AddExpenseForm open={isOpenDialog} onCloseExpense={handleCloseExpense}/>
   </Container>
  );
}

export default App;

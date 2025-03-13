import { useState } from 'react';
import { Container } from '@mui/material';
import { BudgetCard } from './components/BudgetCard';
import { AddExpenseForm } from './components/AddExpenseForm';
import { HandleEditExpense, HandleDeleteExpense, HandleAddExpense, HandleCloseExpense, HandleSaveExpense, Expense } from './types';

function App() {
  //expenseDescription = item name entered by user
  const [expenseDescription, setExpenseDescription] = useState("")
  //expenseAmount = dollar amount entered by user
  const [expenseAmount, setExpenseAmount] = useState("")

  //array of objects containing expenseDescription and expenseAmount
  //key are 'description' and 'amount'
  const [expenses, setExpenses] = useState<Expense[]>([])

  const [isOpenDialog, setIsOpenDialog] = useState(false)

  const handleAddExpense: HandleAddExpense = () => {
    setIsOpenDialog(true);
  }

  const handleCloseExpense: HandleCloseExpense = () => {
    setIsOpenDialog(false)
  }

  const handleSaveExpense: HandleSaveExpense = () => {

    setExpenses((prevExpenses)=> [
      ...prevExpenses,
      { description: expenseDescription,
         amount: expenseAmount
      }])

    console.log("expenses:", expenses)

    setExpenseAmount("")
    setExpenseDescription("")
    setIsOpenDialog(false)
  }

  const handleEditExpense: HandleEditExpense = (description) => {
    setIsOpenDialog(true)

  }

  const handleDeleteExpense: HandleDeleteExpense = (description) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense)=> expense.description !== description))

    console.log(`Deleting an expense entry: description sent to function- ${description}`)

  }

  return (
    <Container sx={{mt: 5}}>
      <BudgetCard
        item={expenseDescription}
        amount={expenseAmount}
        onAddExpense={handleAddExpense}
        expenses={expenses}
        onDeleteExpense={handleDeleteExpense}
        onEditExpense={handleEditExpense}
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

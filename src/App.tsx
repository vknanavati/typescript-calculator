import { useState } from 'react';
import { Container } from '@mui/material';
import { CreateBudget } from './components/CreateBudget';
import { BudgetCard } from './components/BudgetCard';
import { AddExpenseForm } from './components/AddExpenseForm';
import { HandleAddExpense, HandleCloseExpense, HandleSaveExpense, SetExpenses, Expense, BudgetCardInfo, HandleSubmitBudget, SetInputAmount, SetInputName } from './types';

function App() {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [total, setTotal] = useState("")

  const [expenseDescription, setExpenseDescription] = useState("")
  const [expenseAmount, setExpenseAmount] = useState("")

  const [expenses, setExpenses] = useState<Expense[]>([])

  const [addedBudgets, setAddedBudgets] = useState<BudgetCardInfo[]>([])


  const [inputName, setInputName] = useState("")
  const [inputAmount, setInputAmount] = useState("")

  const handleSubmitBudget: HandleSubmitBudget = (e) => {
      e.preventDefault();
      setName(inputName);
      setAmount(inputAmount);
      setTotal(inputAmount);
      setInputName("");
      setInputAmount("");
  }

  const handleSaveExpense: HandleSaveExpense = () => {

    if (expenseAmount && expenseDescription) {
      setExpenses(prev => [...prev, {description: expenseDescription, amount: expenseAmount}])
    }
    const updatedAmount = Number(amount) - Number(expenseAmount);

    console.log("added expenses:", expenses)
    setAmount(updatedAmount.toString());

    setExpenseDescription("")
    setExpenseAmount("")
    setIsOpenDialog(false)
  }



  const [isOpenDialog, setIsOpenDialog] = useState(false)

  const handleAddExpense: HandleAddExpense = () => {
    setIsOpenDialog(true)
  }

  const handleCloseExpense: HandleCloseExpense = () => {
    setIsOpenDialog(false)
  }

  return (
    <Container sx={{mt: 5}}>
      <CreateBudget
        setName={setName}
        setAmount={setAmount}
        setTotal={setTotal}
        inputAmount={inputAmount}
        inputName={inputName}
        setInputAmount={setInputAmount}
        setInputName={setInputName}
        handleSubmitBudget={handleSubmitBudget}
      />

      {name && amount && (
        <BudgetCard
          name={name}
          amount={amount}
          total={total}
          onAddExpense={handleAddExpense}
          expenses={expenses}

        />
      )}
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

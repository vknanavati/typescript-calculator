import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { BudgetCard } from './components/BudgetCard';
import { AddExpenseForm } from './components/AddExpenseForm';
import { AnnualCard } from './components/AnnualCard';
import { categories, IsEdit, HandleEditExpense, HandleDeleteExpense, HandleAddExpense, HandleCloseExpense, HandleSaveExpense, Expense } from './types';

function App() {
  //expenseDescription = item name entered by user
  const [expenseDescription, setExpenseDescription] = useState("")
  //expenseAmount = dollar amount entered by user
  const [expenseAmount, setExpenseAmount] = useState("")

  //array of objects containing expenseDescription and expenseAmount
  //key are 'description' and 'amount'
  const [expenses, setExpenses] = useState<Expense[]>([])

  const [total, setTotal] = useState("")

  const [isEdit, setIsEdit] = useState<IsEdit>(null)

  const [isOpenDialog, setIsOpenDialog] = useState(false)

  useEffect(()=>{
    console.log("updated expenseDescription: ", expenseDescription);
    console.log("updated expenseAmount: ", expenseAmount)
    console.log("updated expenses: ", expenses)
  }, [expenseDescription, expenseAmount, expenses]);

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = expenses.reduce((sum, expense) => {
        return sum + Number(expense.amount);
      }, 0);

      setTotal(totalAmount.toString())
    };
    calculateTotal();
  }, [expenses]);

  const handleAddExpense: HandleAddExpense = () => {
    setIsOpenDialog(true);
  }

  const handleCloseExpense: HandleCloseExpense = () => {
    setIsEdit(null);
    setIsOpenDialog(false);
  }

  const handleSaveExpense: HandleSaveExpense = () => {
    //edit expense if isEdit not null
    if (isEdit !== null) {
      //if index equals isEdit then update that object
      setExpenses(expenses.map((expense, index) =>
        //condition is index must equal isEdit. This is how only the selected entry will be updated.
        //map will go through each entry until it finds the index === isEdit
        index === isEdit
          ? { description: expenseDescription, amount: expenseAmount }
          : expense
      ))
      // setExpenses(updatedExpenses);
      setIsEdit(null);

      // console.log("updatedExpenses: ", updatedExpenses);

    } else {
      //else add new expense
      setExpenses((prevExpenses) => [
        ...prevExpenses,
        { description: expenseDescription, amount: expenseAmount }
      ])
    }

    setExpenseAmount("");
    setExpenseDescription("");
    setIsOpenDialog(false);
  }

  const handleEditExpense: HandleEditExpense = (index) => {
    //need the index to select the expense to edit
    //expense is located in an object in an array
    //selectedEdit is set to object the user wants to edit
    //selectedEdit variable needed to access description key and amount key in array of expenses object
    const selectedEdit = expenses[index];

    setExpenseDescription(selectedEdit.description);
    setExpenseAmount(selectedEdit.amount);

    setIsEdit(index);
    setIsOpenDialog(true);

    console.log("selected entry to edit and index: ", selectedEdit, index);
  }

  const handleDeleteExpense: HandleDeleteExpense = (description) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense)=>
        expense.description !== description))

    console.log(`Deleting an expense entry: description sent to function- ${description}`);
  }


  return (
    <Container sx={{ mt: 5 }}>
      <BudgetCard
        item={expenseDescription}
        amount={expenseAmount}
        onAddExpense={handleAddExpense}
        expenses={expenses}
        onDeleteExpense={handleDeleteExpense}
        onEditExpense={handleEditExpense}
        total={total}
        categories={categories}
      />
      <AnnualCard/>
      <AddExpenseForm
        expenseDescription={expenseDescription}
        expenseAmount={expenseAmount}
        open={isOpenDialog}
        onCloseExpense={handleCloseExpense}
        setExpenseDescription={setExpenseDescription}
        setExpenseAmount={setExpenseAmount}
        onSaveExpense={handleSaveExpense}
        isEdit={isEdit}
      />
   </Container>
  );
}

export default App;

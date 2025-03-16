import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { BudgetCard } from './components/BudgetCard';
import { AddExpenseForm } from './components/AddExpenseForm';
import { AnnualCard } from './components/AnnualCard';
import { HandleExpenseDescriptionChange, HandleExpenseAmountChange, categories, IsEdit, HandleSetCategory, HandleEditExpense, HandleDeleteExpense, HandleAddExpense, HandleCloseExpense, HandleSaveExpense, Expense } from './types';

function App() {
  //expenseDescription = item name entered by user
  const [expenseDescription, setExpenseDescription] = useState("")
  //expenseAmount = dollar amount entered by user
  const [expenseAmount, setExpenseAmount] = useState("")

  //array of objects containing expenseDescription and expenseAmount
  //key are 'description' and 'amount'
  const [expenses, setExpenses] = useState<Expense[]>([])

  const [total, setTotal] = useState("")

  const [expenseAmountError, setExpenseAmountError] = useState("")

  const [expenseDescriptionError, setExpenseDescriptionError] = useState("")

  const [formSubmitted, setFormSubmitted] = useState(false)

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
  };

  const handleCloseExpense: HandleCloseExpense = () => {
    setIsEdit(null);
    setExpenseAmountError("");
    setExpenseDescriptionError("");
    setExpenseAmount("");
    setExpenseDescription("");
    setIsOpenDialog(false);
  };

  const handleExpenseAmountChange: HandleExpenseAmountChange = (e) => {

    const userInput = e.target.value;

    if (/^\d*\.?\d{0,2}$/.test(userInput) || userInput === "") {
      setExpenseAmount(userInput);
    }
  };

  const handleExpenseDescriptionChange: HandleExpenseDescriptionChange = (e) => {

    const userInput = e.target.value;

    if (/^(?:[A-Z][a-z]*)(?:\s[A-Z][a-z]*)*$/.test(userInput) || userInput === "") {
      setExpenseDescription(userInput);
    }
  };

  const handleSaveExpense: HandleSaveExpense = () => {

    setFormSubmitted(true);

    let valid = true;

    // requires at least one digit or decimal format in order to submit
    if (!/^(?:\d+|\.\d{1,2}|\d+\.\d{1,2})$/.test(expenseAmount)) {
      setExpenseAmountError("Please enter valid amount");
      valid = false;
    } else {
      setExpenseAmountError("")
    };

    if (!/^(?:[A-Z][a-z]*)(?:\s[A-Z][a-z]*)*$/.test(expenseDescription)) {
      setExpenseDescriptionError("Please enter valid description");
      valid = false;
    } else {
      setExpenseDescriptionError("")
    };

    if (!valid) return

    //edit expense if isEdit not null
    if (isEdit !== null) {
      //if index equals isEdit then update that object
      setExpenses(expenses.map((expense, index) =>
        //condition is index must equal isEdit. This is how only the selected entry will be updated.
        //map will go through each entry until it finds the index === isEdit
        index === isEdit
          ? { description: expenseDescription, amount: expenseAmount }
          : expense
      ));

      setIsEdit(null);

    } else {
      //else add new expense
      setExpenses((prevExpenses) => [
        ...prevExpenses,
        { description: expenseDescription, amount: expenseAmount }
      ])
    };

    setExpenseAmount("");
    setExpenseDescription("");
    setExpenseAmountError("");
    setFormSubmitted(false);
    setIsOpenDialog(false);
  }

  const handleEditExpense: HandleEditExpense = (index) => {
    //need the index to select the expense to edit
    //expense is located in an object in an array
    //selectedEdit is set to object the user wants to edit
    //selectedEdit variable needed to access description key and amount key in array of expenses object

    //selectedEdit = {description: 'car insurance', amount: '125', category: 'Transportation'}
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

  const handleSetCategory: HandleSetCategory = (index, selectedCategory) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((prevExpense, i) =>
      i === index
        ? {...prevExpense, category: selectedCategory}
        : prevExpense
      )
    )
  };

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
        handleSetCategory={handleSetCategory}
      />
      <AnnualCard
        expenses={expenses}
      />
      <AddExpenseForm
        expenseDescription={expenseDescription}
        expenseAmount={expenseAmount}
        open={isOpenDialog}
        onCloseExpense={handleCloseExpense}
        setExpenseDescription={setExpenseDescription}
        setExpenseAmount={setExpenseAmount}
        onSaveExpense={handleSaveExpense}
        isEdit={isEdit}
        handleExpenseAmountChange={handleExpenseAmountChange}
        handleExpenseDescriptionChange={handleExpenseDescriptionChange}
        expenseAmountError={expenseAmountError}
        expenseDescriptionError={expenseDescriptionError}
        formSubmitted={formSubmitted}
      />
   </Container>
  );
}

export default App;

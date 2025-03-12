import { useState } from 'react';
import { Container } from '@mui/material';
import { CreateBudget } from './components/CreateBudget';
import { BudgetCard } from './components/BudgetCard';
import { AddExpenseForm } from './components/AddExpenseForm';
import { HandleAddExpense, HandleCloseExpense, HandleSaveExpense, SetExpenses, Expense, BudgetCardInfo, HandleSubmitBudget, SetInputAmount, SetInputName } from './types';

function App() {

  //in CreateBudget user enters budget name and budget amount
  const [inputName, setInputName] = useState("")
  const [inputAmount, setInputAmount] = useState("")

  //inputAmount is set to total
  const [total, setTotal] = useState("")

  //inputName and inputAmount are added to addedBudgets2
  const [addedBudgets, setAddedBudgets] = useState<BudgetCardInfo[]>([])

  const [expenseDescription, setExpenseDescription] = useState("")
  const [expenseAmount, setExpenseAmount] = useState("")

  const [expenses, setExpenses] = useState<Expense[]>([])

  //array of objects of each budget card info. Includes name, budget, expenses

  //used in handleAddExpense to keep track of which budget you are adding to
  const [selectedBudget, setSelectedBudget] = useState("")

  const [isOpenDialog, setIsOpenDialog] = useState(false)

  //User enters budget name and amount to create a new budget card
  //inputName and inputAmount are assigned to name and budget keys in the addedBudgets object
  //addedBudgets object is need to store different budgets created by the user so they can be mapped to their own cards
  const handleSubmitBudget: HandleSubmitBudget = (e) => {

      e.preventDefault();

      if (inputName && inputAmount) {
        setAddedBudgets(prev => [...prev, {
          name: inputName,
          budget: inputAmount,
          expenses: []
        }]);
      }

      console.log("addedBudgets: ", addedBudgets)

      // setName(inputName);
      // setAmount(inputAmount);
      setTotal(inputAmount);

      setInputName("");
      setInputAmount("");
  }

  const handleAddExpense: HandleAddExpense = (budgetName) => {
    setSelectedBudget(budgetName);
    console.log("budgetName: ", budgetName)
    console.log("selectedBudget: ", selectedBudget)
    setIsOpenDialog(true);
  }

  const handleCloseExpense: HandleCloseExpense = () => {
    setIsOpenDialog(false)
  }

  const handleSaveExpense: HandleSaveExpense = () => {

    const updatedBudgets = addedBudgets.map((addedBudget) => {
      if (addedBudget.name === selectedBudget) {

        const updatedAmount = Number(addedBudget.budget) - Number(expenseAmount);

        return {
          ...addedBudget,
          budget: updatedAmount.toString(),
          expenses: [
            ...addedBudget.expenses,
            { description: expenseDescription,
              amount: expenseAmount}
          ]
        };
      } else {
        return addedBudget;
      }
    });

    console.log("added expenses:", expenses)

    setAddedBudgets(updatedBudgets)

    setExpenseDescription("")
    setExpenseAmount("")
    setIsOpenDialog(false)
  }

  return (
    <Container sx={{mt: 5}}>

      <CreateBudget
        inputAmount={inputAmount}
        inputName={inputName}
        setInputAmount={setInputAmount}
        setInputName={setInputName}
        handleSubmitBudget={handleSubmitBudget}
      />

      {addedBudgets.length > 0 && (
        addedBudgets.map((addedBudget, index) => (
          <BudgetCard
            key={index}
            name={addedBudget.name}
            amount={addedBudget.budget}
            total={total}
            onAddExpense={() => handleAddExpense(addedBudget.name)}
            expenses={addedBudget.expenses}
        />
        ))
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

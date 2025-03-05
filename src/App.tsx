 import { useState } from 'react';
import { Container } from '@mui/material';
import { CreateBudget } from './components/CreateBudget';
import { BudgetCard } from './components/BudgetCard'

function App() {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [total, setTotal] = useState("")
  return (
   <Container sx={{mt: 5}}>
    <CreateBudget setName={setName} setAmount={setAmount} setTotal={setTotal}/>
    {name && amount && (
      <BudgetCard name={name} amount={amount} total={total}/>
    )}
   </Container>
  );
}

export default App;

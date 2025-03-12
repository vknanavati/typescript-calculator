import { Box, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/joy/IconButton';

import { Expenses, HandleAddExpense, ExpenseDescription, ExpenseAmount } from '../types';

interface BudgetCardProps {
    item: ExpenseDescription
    amount: ExpenseAmount
    onAddExpense: HandleAddExpense
    expenses: Expenses
}
export function BudgetCard({expenses, onAddExpense}: BudgetCardProps) {


  return (
    <Box
        sx={{
            border: '1px solid',
            padding: 3,
            width: 500,
            mt: 5
        }}
    >
        <Box display={'flex'} justifyContent={'space-around'} gap={5}>
            <Typography variant="h5">Cost of Living</Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h6">Expenses:</Typography>
            {expenses.map((expense, index) => (
              <Box key={index} display="flex" justifyContent="space-between">
                <Typography sx={{fontSize: 19}}>{expense.description}</Typography>
                <Typography sx={{fontSize: 19}}>${expense.amount}</Typography>
                <IconButton><DeleteIcon/></IconButton>
              </Box>
              ))}
        </Box>


        <Box display={'flex'} justifyContent={'right'} mt={2}>
            <Button
                variant='contained'
                onClick={onAddExpense}
            >
                Add Expense
            </Button>
        </Box>
    </Box>
  )
}

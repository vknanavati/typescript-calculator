import { Box, Typography, Button } from '@mui/material';
import { Amount, Name, Total, HandleAddExpense, Expenses } from '../types';

interface BudgetCardProps {
    name: Name
    amount: Amount
    total: Total
    onAddExpense: HandleAddExpense
    expenses: Expenses
}
export function BudgetCard({name, amount, total, onAddExpense, expenses}: BudgetCardProps) {


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
            <Typography>{name}</Typography>
            <Typography>{amount}/{total}</Typography>
        </Box>

        {expenses.length > 0 && (
          <Box mt={2}>
            <Typography variant="h6">Expenses:</Typography>
            {expenses.map((expense, index) => (
              <Box key={index} display="flex" justifyContent="space-between">
                <Typography>{expense.description}</Typography>
                <Typography>${expense.amount}</Typography>
              </Box>
            ))}
          </Box>
        )}

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

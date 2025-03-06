import { Box, Typography, Button } from '@mui/material';
import { Amount, Name, Total, HandleAddExpense } from '../types';

interface BudgetCardProps {
    name: Name
    amount: Amount
    total: Total
    onAddExpense: HandleAddExpense
}
export function BudgetCard({name, amount, total, onAddExpense}: BudgetCardProps) {


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

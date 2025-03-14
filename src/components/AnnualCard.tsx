import { Box, Typography } from '@mui/material';
import { ExpenseDescription, ExpenseAmount, Expenses  } from '../types';

interface AnnualCardProps {
  expenseDescription: ExpenseDescription
  expenseAmount: ExpenseAmount
  expenses: Expenses
}

export function AnnualCard({expenses, expenseDescription, expenseAmount}: AnnualCardProps) {
  return (
    <Box
      sx={{
        border: '1px solid ',
        padding: 3,
        width: 500,
        mt: 5
      }}>
       <Box display={"flex"} justifyContent={"space-around"} gap={5}>
            <Typography variant="h5">Annual Costs </Typography>
        </Box>
        <Box>
          {expenses.map((expense,index)=> (
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>{expense.description}</Typography>
              <Typography>${(Number(expense.amount)*12).toFixed(2)}</Typography>
            </Box>
          ))}
        </Box>
    </Box>
  )
}

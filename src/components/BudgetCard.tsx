import { Box, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/joy/IconButton';

import { HandleEditExpense, HandleDeleteExpense, Expenses, HandleAddExpense, ExpenseDescription, ExpenseAmount } from '../types';

interface BudgetCardProps {
    item: ExpenseDescription
    amount: ExpenseAmount
    onAddExpense: HandleAddExpense
    expenses: Expenses
    onDeleteExpense: HandleDeleteExpense
    onEditExpense: HandleEditExpense
}
export function BudgetCard({expenses, onAddExpense, onDeleteExpense, onEditExpense}: BudgetCardProps) {

  return (
    <Box
        sx={{
            border: '1px solid',
            padding: 3,
            width: 500,
            mt: 5
        }}
    >
        <Box display={"flex"} justifyContent={"space-around"} gap={5}>
            <Typography variant="h5">Cost of Living</Typography>
        </Box>

        <Box mt={2}>

          <Box display={"flex"} gap={18} mb={3} >
            <Typography>Expense Name</Typography>
            <Typography>Cost</Typography>
          </Box>

            {expenses.map((expense, index) => (
              <Box key={index} display={"flex"} justifyContent={"space-between"}>
                <Typography sx={{fontSize: 19}}>{expense.description}</Typography>
                <Typography sx={{fontSize: 19}}>${expense.amount}</Typography>

                <IconButton>
                  <EditIcon onClick={()=>onEditExpense(expense.description)}/>
                </IconButton>

                <IconButton onClick={()=>onDeleteExpense(expense.description)}>
                  <DeleteIcon/>
                </IconButton>
              </Box>
            ))}

        </Box>
        <Box display={"flex"} justifyContent={"right"} mt={2}>
            <Button
                variant="contained"
                onClick={onAddExpense}
            >
                Add Expense
            </Button>
        </Box>
    </Box>
  )
}

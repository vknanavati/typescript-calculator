import { MenuItem, Box, Typography, Button, Divider, FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/joy/IconButton';

import { SetCategory, categories, Total, HandleEditExpense, HandleDeleteExpense, Expenses, HandleAddExpense, ExpenseDescription, ExpenseAmount } from '../types';

interface BudgetCardProps {
    item: ExpenseDescription
    amount: ExpenseAmount
    onAddExpense: HandleAddExpense
    expenses: Expenses
    onDeleteExpense: HandleDeleteExpense
    onEditExpense: HandleEditExpense
    total: Total
    categories: typeof categories
    setCategory: SetCategory
}
export function BudgetCard({ setCategory, categories, total, expenses, onAddExpense, onDeleteExpense, onEditExpense }: BudgetCardProps) {

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
              <Box key={index} display={"flex"} justifyContent={"space-between"} mb={3}>
                <Typography sx={{fontSize: 19}}>{expense.description}</Typography>

                <FormControl sx={{width: 120}} size="small">
                  <InputLabel>Category</InputLabel>
                  <Select
                    label="categories"
                    onChange={(e: SelectChangeEvent<string>) => setCategory(e.target.value)}
                  >
                    {categories.map((category, index)=>{
                      return <MenuItem key={index} value={category}>{category}</MenuItem>
                    })}
                  </Select>
                </FormControl>

                <Typography sx={{fontSize: 19}}>${expense.amount}</Typography>

                <IconButton>
                  <EditIcon onClick={()=>onEditExpense(index)}/>
                </IconButton>

                <IconButton onClick={()=>onDeleteExpense(expense.description)}>
                  <DeleteIcon/>
                </IconButton>
              </Box>
            ))}

        </Box>

        <Box>
          <Divider/>
        </Box>

        <Box display={"flex"} justifyContent={"stretch"}>
          <Typography sx={{fontSize: 19}}>Total</Typography>
          <Typography sx={{fontSize: 19}}>${total}</Typography>
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

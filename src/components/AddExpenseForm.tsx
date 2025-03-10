import { Dialog, DialogContent, DialogTitle, TextField, Box, Button, DialogActions } from "@mui/material";
import { DialogOpenState, HandleCloseExpense, SetExpenseDescription, SetExpenseAmount, HandleSaveExpense } from "../types";

interface AddExpenseFormProps {
    open: DialogOpenState
    onCloseExpense: HandleCloseExpense
    setExpenseDescription: SetExpenseDescription
    setExpenseAmount: SetExpenseAmount
    onSaveExpense: HandleSaveExpense
}

export function AddExpenseForm({open, onCloseExpense, setExpenseDescription, setExpenseAmount, onSaveExpense}: AddExpenseFormProps) {
  return (
    <Dialog open={open}>
        <DialogTitle>Expense</DialogTitle>
        <DialogContent>
            <Box display={'flex'} gap={6}>
                <TextField
                    label="Description"
                    variant="standard"
                    onChange={(e) => setExpenseDescription(e.target.value)}
                />
                <TextField
                    label="Amount"
                    variant="standard"
                    onChange={(e) => setExpenseAmount(e.target.value)}
                />
            </Box>
        </DialogContent>
        <DialogActions>
                <Button onClick={onSaveExpense}>Add</Button>
                <Button onClick={onCloseExpense}>Cancel</Button>
        </DialogActions>
    </Dialog>
  )
}

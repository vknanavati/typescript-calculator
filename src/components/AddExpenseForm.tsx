import { Dialog, DialogContent, DialogTitle, TextField, Box, Button, DialogActions } from "@mui/material";
import { DialogOpenState, HandleCloseExpense } from "../types";

interface AddExpenseFormProps {
    open: DialogOpenState
    onCloseExpense: HandleCloseExpense
}

export function AddExpenseForm({open, onCloseExpense}: AddExpenseFormProps) {
  return (
    <Dialog open={open}>
        <DialogTitle>Expense</DialogTitle>
        <DialogContent>
            <Box display={'flex'} gap={6}>
                <TextField label="Description" variant="standard"/>
                <TextField label="Amount" variant="standard"/>
            </Box>
        </DialogContent>
        <DialogActions>
                <Button>Add</Button>
                <Button onClick={onCloseExpense}>Cancel</Button>
        </DialogActions>
    </Dialog>
  )
}

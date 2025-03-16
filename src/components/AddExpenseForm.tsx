import { Dialog, DialogContent, DialogTitle, TextField, Box, Button, DialogActions } from "@mui/material";
import { FormSubmitted, ExpenseDescriptionError, ExpenseAmountError, HandleExpenseDescriptionChange, HandleExpenseAmountChange, IsEdit, DialogOpenState, HandleCloseExpense, SetExpenseDescription, SetExpenseAmount, HandleSaveExpense } from "../types";

interface AddExpenseFormProps {
    open: DialogOpenState
    onCloseExpense: HandleCloseExpense
    setExpenseDescription: SetExpenseDescription
    setExpenseAmount: SetExpenseAmount
    onSaveExpense: HandleSaveExpense
    isEdit: IsEdit
    expenseDescription: string
    expenseAmount: string
    handleExpenseAmountChange: HandleExpenseAmountChange
    handleExpenseDescriptionChange: HandleExpenseDescriptionChange
    expenseAmountError: ExpenseAmountError
    expenseDescriptionError: ExpenseDescriptionError
    formSubmitted: FormSubmitted
}

export function AddExpenseForm({ formSubmitted, expenseAmountError, expenseDescriptionError, handleExpenseDescriptionChange, handleExpenseAmountChange, isEdit, open, onCloseExpense, expenseDescription, expenseAmount, setExpenseDescription, setExpenseAmount, onSaveExpense }: AddExpenseFormProps) {
  return (
      <Dialog open={open} onClose={onCloseExpense}>
        <DialogTitle>{isEdit !== null ? "Edit Expense" : "Add Expense"}</DialogTitle>
        <form onSubmit={onSaveExpense}>
            <DialogContent>
                <Box display={"flex"} gap={6}>
                    <TextField
                        label={isEdit !==null ? expenseDescription : "Item"}
                        variant="standard"
                        value={expenseDescription}
                        error={!!expenseDescriptionError && formSubmitted}
                        helperText={formSubmitted && expenseDescriptionError ? expenseDescriptionError: ""}
                        onChange={handleExpenseDescriptionChange}
                        // onChange={(e) => setExpenseDescription(e.target.value)}
                    />
                    <TextField
                        label={isEdit !==null ? expenseAmount : "Amount"}
                        variant="standard"
                        value={expenseAmount}
                        // !! converts expenseAmountError into a boolean
                        // error prop expects a boolean value
                        // if expenseAmountError contains error message it is true
                        // error = {true} only when error message exists
                        // && formSubmitted so error only shows after form is submitted
                        error={!!expenseAmountError && formSubmitted}
                        // error message only appears if formSubmitted true and expenseAmountError exists
                        // ? expenseAmountError : "" - helper text empty string if expenseAmountError doesn't exist
                        helperText={formSubmitted && expenseAmountError ? expenseAmountError : ""}
                        onChange={handleExpenseAmountChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                    <Button type="submit">Add</Button>
                    <Button onClick={onCloseExpense}>Cancel</Button>
            </DialogActions>
        </form>
    </Dialog>
  )
}

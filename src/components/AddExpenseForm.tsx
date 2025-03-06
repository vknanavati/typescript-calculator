import { Dialog } from "@mui/material";
import { DialogOpenState } from "../types";

interface AddExpenseFormProps {
    open: DialogOpenState
}

export function AddExpenseForm({open}: AddExpenseFormProps) {
  return (
    <Dialog open={open}></Dialog>
  )
}

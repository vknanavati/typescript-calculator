export type Name = string

export type Amount = string

export type Total = string

export type SetName = React.Dispatch<React.SetStateAction<string>>

export type SetAmount = React.Dispatch<React.SetStateAction<string>>

export type SetTotal = React.Dispatch<React.SetStateAction<string>>

export type SetExpenseDescription = React.Dispatch<React.SetStateAction<string>>

export type SetExpenseAmount = React.Dispatch<React.SetStateAction<string>>

export type HandleSubmitBudget = (e: React.FormEvent<HTMLFormElement>) => void

export type HandleAddExpense = () => void

export type HandleCloseExpense = () => void

export type DialogOpenState = boolean

export type HandleSaveExpense = () => void

export interface Expense {
    description: string;
    amount: string;
}

export type Expenses = Expense[]

export type SetExpenses = React.Dispatch<React.SetStateAction<Expenses[]>>

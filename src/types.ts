export type Name = string

export type Amount = string

export type Total = string

export type InputAmount = string

export type InputName = string

export type ExpenseDescription = string

export type ExpenseAmount = string

export type SetName = React.Dispatch<React.SetStateAction<string>>

export type SetAmount = React.Dispatch<React.SetStateAction<string>>

export type SetTotal = React.Dispatch<React.SetStateAction<string>>

export type SetExpenseDescription = React.Dispatch<React.SetStateAction<string>>

export type SetExpenseAmount = React.Dispatch<React.SetStateAction<string>>

export type SetInputAmount = React.Dispatch<React.SetStateAction<string>>

export type SetInputName = React.Dispatch<React.SetStateAction<string>>

export type HandleSubmitBudget = (e: React.FormEvent<HTMLFormElement>) => void

export type HandleAddExpense = (e: React.MouseEvent<HTMLButtonElement>) => void

export type HandleDeleteExpense = (description: string) => void

export type HandleEditExpense = (description: string) => void

export type HandleCloseExpense = () => void

export type DialogOpenState = boolean

export type HandleSaveExpense = () => void

export interface Expense {
    description: string;
    amount: string;
}

export type Expenses = Expense[]

export type SetExpenses = React.Dispatch<React.SetStateAction<Expenses[]>>

export interface BudgetCardInfo {
    name: string;
    budget: string;
    expenses: Expense[]
}

export type BudgetCardInfos = BudgetCardInfo[]

export type SetAddedBudgets = React.Dispatch<React.SetStateAction<BudgetCardInfos[]>>

export type SelectedBudget = string

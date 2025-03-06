export type Name = string

export type Amount = string

export type Total = string

export type SetName = React.Dispatch<React.SetStateAction<string>>

export type SetAmount = React.Dispatch<React.SetStateAction<string>>

export type SetTotal = React.Dispatch<React.SetStateAction<string>>

export type HandleSubmitBudget = (e: React.FormEvent<HTMLFormElement>) => void

export type HandleAddExpense = () => void

export type DialogOpenState = boolean
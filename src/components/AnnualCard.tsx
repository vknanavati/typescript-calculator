import { Box, Typography } from '@mui/material';
import { Expenses  } from '../types';

interface AnnualCardProps {
  expenses: Expenses
}

export function AnnualCard({ expenses }: AnnualCardProps) {

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
          {expenses.map((expense, index)=> (
            <Box key={index} display={"flex"} justifyContent={"space-between"}>
              <Typography>{expense.description}</Typography>
              <Typography>${(Number(expense.amount) * 12).toFixed(2)}</Typography>
            </Box>
          ))}
        </Box>
    </Box>
  )
}

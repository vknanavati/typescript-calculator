import React from 'react';
import { Box, Typography } from '@mui/material';
import { Amount, Name, Total } from '../types';

interface BudgetCardProps {
    name: Name
    amount: Amount
    total: Total
}
export function BudgetCard({name, amount, total}: BudgetCardProps) {
  return (
    <Box
        sx={{
            border: '1px solid',
            padding: 3,
            width: 500,
            mt: 5
        }}
    >
        <Typography>{name}</Typography>
        <Typography>{amount}/{total}</Typography>

    </Box>
  )
}

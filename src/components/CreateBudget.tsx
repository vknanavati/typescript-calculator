import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import {SetAmount, SetName, SetTotal } from '../types';

interface CreateBudgetProps {
    setName: SetName
    setAmount: SetAmount
    setTotal: SetTotal
}

export function CreateBudget({setName, setTotal, setAmount}: CreateBudgetProps) {
    return (
        <form>
            <Box
                sx={{
                    border: '1px solid',
                    padding: 3,
                    width: 500
                }}
            >
                <Typography variant='h5' textAlign={'center'}
                >
                    Add Budget
                </Typography>

                <Box display={'flex'} justifyContent={'center'} gap={2} mt={2}>
                    <TextField
                        label='Budget Name'
                        variant='outlined'
                    />
                    <TextField
                        label='Amount'
                        variant='outlined'
                    />
                </Box>
                <Box display={'flex'} justifyContent={'center'} mt={2}>
                    <Button
                        variant='contained'
                    >
                        Add Budget
                    </Button>
                </Box>
                </Box>

        </form>
    )
}
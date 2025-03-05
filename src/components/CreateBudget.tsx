import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import {SetAmount, SetName, SetTotal, HandleSubmitBudget } from '../types';

interface CreateBudgetProps {
    setName: SetName
    setAmount: SetAmount
    setTotal: SetTotal
    handleSubmitBudget?: HandleSubmitBudget
}

export function CreateBudget({setName, setTotal, setAmount}: CreateBudgetProps) {

    const [inputName, setInputName] = useState("")
    const [inputAmount, setInputAmount] = useState("")

    const handleSubmitBudget: HandleSubmitBudget = (e) => {
        e.preventDefault();
        setName(inputName);
        setAmount(inputAmount);
        setTotal(inputAmount);
        setInputName("");
        setInputAmount("");
    }

    return (
        <form onSubmit={(e)=>handleSubmitBudget(e)}>
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
                        value={inputName}
                        onChange={(e)=>setInputName(e.target.value)}
                    />

                    <TextField
                        label='Amount'
                        variant='outlined'
                        value={inputAmount}
                        onChange={(e)=>setInputAmount(e.target.value)}
                    />
                </Box>

                <Box display={'flex'} justifyContent={'center'} mt={2}>
                    <Button
                        variant='contained'
                        type='submit'
                    >
                        Add Budget
                    </Button>
                </Box>
            </Box>
        </form>
    )
}
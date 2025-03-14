import { Box, Typography } from '@mui/material';

export function AnnualCard() {
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


    </Box>
  )
}

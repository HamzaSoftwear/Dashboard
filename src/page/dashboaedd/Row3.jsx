import { Box, Paper } from '@mui/material'
import React from 'react'
import {Pie} from '../pie/Pie'
import { Bar } from '../bar/Bar'
import { Geography } from './../geography/Geography';
 
export const Row3 = () => {
  return (
    
   <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",mt:2}}>
    <Paper sx={{width:"33%"}}>
     <Pie/>

    </Paper>

    <Paper sx={{width:"33%"}}>
<Bar/>
      
</Paper>

<Paper sx={{width:"33%"}}>
<Geography/>
      
</Paper>
   </Box>
  )
}

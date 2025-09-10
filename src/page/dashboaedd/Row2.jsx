import { Box, IconButton, Paper, Stack, Typography,useTheme } from '@mui/material'
import React from 'react'
import {Line1} from '../Line1'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { mock } from './data';
export const Row2 = () => {
  const theme=useTheme()

  return (
   <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
    <Paper sx={{maxWidth:900,flexGrow:1}}>
      <Stack alignItems={"center"} direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} >
        <Box>
          <Typography color={theme.palette.secondary.main} variant='h5' mb={1} mt={2} ml={4}>
           Revnue Genrated
          </Typography>
          <Typography variant='body2' ml={4}>
            $59,342,32
          </Typography>
        </Box>
        <Box>
          <IconButton sx={{mr:3}}>
            <DownloadOutlinedIcon/>
          </IconButton>
          
          </Box>
      </Stack>



    <Line1 isDash={true}/>
    </Paper>
    <Box sx={{height:350,flexGrow:1,minWidth:"250px"}}>
      <Paper>
<Typography color={theme.palette.secondary.main}
fontWeight={"bold"}
p={1.2}
variant='h6'
>
  Rencet Transaction
</Typography>
</Paper>
{mock.map((item) => {
  return (<Paper sx={{mt:1,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
  <Box p={1.2}>
  <Typography variant='body1' fontWeight={"600"}>
  {item.txId}
  </Typography>
  <Typography variant='body1' fontWeight={"600"}>
  {item.user}
  </Typography>
  </Box>
  <Typography variant='body1' fontWeight={"600"}>
  {item.date}
  </Typography>
  <Typography 
  borderRadius={1.4}
  p={1}
  bgcolor={theme.palette.error.main}
  >
  ${item.cost}
  </Typography>
  </Paper>)
}
)}

    </Box>
   </Stack>
  )
}

import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './data';
import {useTheme } from '@mui/material/styles';
import { Box, Typography } from "@mui/material";
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../../components/Header'

export default function Team() {
  const theme=useTheme()

    const columns = [
    { field: 'id', headerName: 'ID',flex:1,width:33,align:"center" ,headerAlign:"center"},
    { field: 'name', headerName: 'NAME',flex:1, align:"center",headerAlign:"center"},
    { field: 'email', headerName: 'EMAIL',flex:1, align:"center",headerAlign:"center"},
    { field: 'age', headerName: 'AGE',flex:1, align:"center",headerAlign:"center"},
    { field: 'phone', headerName: 'PHONE',flex:1, align:"center",headerAlign:"center"},
    { field: 'access', headerName: 'ACCESS', flex:1,align:"center",headerAlign:"center",
       
    renderCell:  ({row:{access}}) => {
          return(
            <Box sx={ {p:"5px",width:"99px",borderRadius:"7px",display:"flex",
            justifyContent:"space-evenly",
              backgroundColor:access=== "Admin"?theme.palette.primary.dark:access==="Manager"?theme.palette.secondary.dark:"#3da58a"}}>

                {access==='Admin'&& (<SupervisorAccountOutlinedIcon fontSize='small'/>
)}
                {access==='Manager'&& (<LockOutlinedIcon fontSize='small'/>
)}
                {access==='User'&& (<SecurityOutlinedIcon fontSize='small'/>
)}
                <Typography sx={{color:"#fff"}}>{access}</Typography>
            </Box>
          )
        }
        
    },
    
  ];



  return (
   <Box sx={{ height: 600, width: '100%' ,mx:"auto"}}>
    <Header title={"Team"} subtitle={"welcome in Team"}/>

    <DataGrid rows={rows} columns={columns} />
  </Box>
  )
}

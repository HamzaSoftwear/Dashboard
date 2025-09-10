import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form"
import Snackbar from '@mui/material/Snackbar';
import { Palette } from '@mui/icons-material';
import {useTheme } from '@mui/material/styles';

const regEmail=
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const numberRegex = /^\d+$/;


const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manger',
    label: 'Manger',
  },
  {
    value: 'User',
    label: 'User',
  },
];
export const Profile = () => {
  const theme=useTheme()
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    handleClick({ vertical: 'top', horizontal: 'right' })();
  }
  
  
  return (
    
    <Box

    onSubmit={handleSubmit(onSubmit)}
    component="form"
    sx={{
      display:"flex",
      flexDirection:"column",
      gap:2,

    }}

    noValidate
    autoComplete="off"
  >
   <Stack sx={{gap:2}} direction={"row"}>
   <TextField  
    error={errors.firstName}
     helperText={ Boolean(errors.firstName) ? "this filled is required.":null}
    {...register("firstName", { required: true, minLength: 3 })} 
   
   sx={{flex:1}} label="fisrt Name" variant="filled" />
    <TextField
        error={errors.lastName}
        helperText={ Boolean(errors.lastName) ? "this filled is required.":null}
       {...register("lastName", { required: true, minLength: 3 })} 
     sx={{flex:1}} label="Last Name" variant="filled" />

   </Stack>
    <TextField
        error={errors.email}
        helperText={ Boolean(errors.email) ? "Email Valid.":null}
       {...register("email", { required: true,pattern: regEmail})} 
    label="email" variant="filled" />
    <TextField
    
    
    error={errors.contatNuber}

    helperText={ Boolean(errors.contatNuber) ? "only number":null}

   {...register("contatNuber", { required: true,pattern: numberRegex})} 

   label="Contact number" variant="filled" />
    <TextField label="Address 1" variant="filled" />
    <TextField label="Address 2" variant="filled" />
    
    <TextField variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"  
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

       <Box sx={{textAlign:"right"}}>
       <Button
       
       type='submit' variant='contained' sx={{textTransform:"capitalize"}}>
     Create new User
        </Button>
        <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Save"
        key={vertical + horizontal}
        sx={{backgroundColor:theme.palette.primary.dark}}
      />
       </Box>
        
  </Box>
  )
}
//jitter , lordicon
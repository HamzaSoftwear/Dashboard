import React from 'react'
import { Box, Button, Typography,useTheme } from '@mui/material'

export default function Header({title,subtitle}) {
    const theme=useTheme()
  return (
    <Box>
  <Typography sx={{color:theme.palette.info.light}} variant='h5'>{title}</Typography>
  <Typography variant='h5'>{subtitle}</Typography>
</Box>
  )
}

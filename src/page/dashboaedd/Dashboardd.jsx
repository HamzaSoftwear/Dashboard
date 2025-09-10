import React from 'react'
import { Row1 } from './Row1'
import {Row2} from './Row2'
import {Row3} from './Row3'
import { DownloadOutlined } from '@mui/icons-material'
import Header from '../../components/Header'
import { Box, Button } from '@mui/material'
export const Dashboardd = () => {
 
  return (
    <div>
<Header title={"Dashboard"} subtitle={"welcome in Dasboard"}/>


      <Box sx={{textAlign:"right"}}>
      <Button sx={{padding:"6px 8px",textTransform:"capitalize"}} variant='contained' color='primary'>
        <DownloadOutlined/>
        Download Reperts
      </Button>
      </Box>
      <Row1/>
      <Row2/>
      <Row3/>
    </div>
  )
}

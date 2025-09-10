import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { rows,columns } from './data'
import React from 'react'
import Header from '../../../components/Header'

export const Invoices = () => {
  return (
<Box sx={{height:650,width:"98%",mx:"auto"}}>
<Header title={"Invoices"} subtitle={"welcome in Invoices"}/>

<DataGrid 
checkboxSelection
slots={{
  toolbar:GridToolbar,

}}
rows={rows}
columns={columns}/>
</Box>
  )
}

import {  Stack } from '@mui/material'
import React from 'react'
import {Card} from './Card'
import {  useTheme } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import { data1 } from './data';
import { data2 } from './data';
import { data3 } from './data';
import { data4 } from './data';
export const Row1 = () => {
    const theme=useTheme()
  return (
  <Stack direction={"row"} flexWrap={"wrap"} gap={1} justifyContent={{xs:"center",sm:"space-between"}}>

<Card icon={<EmailOutlinedIcon sx={{fontSize:"23px",color:theme.palette.secondary.main}} />} title={"12,361"} subtitle={"email sent"}  increse={"+14%"} data={data1} scheme={"nivo"}/>
<Card icon={<PointOfSaleOutlinedIcon sx={{fontSize:"23px",color:theme.palette.secondary.main}} />} title={"431,225"} subtitle={"salse otained"}  increse={"+21%"} data={data2} scheme={"category10"}/>
<Card icon={<PersonAddAltOutlinedIcon sx={{fontSize:"23px",color:theme.palette.secondary.main}} />} title={"32,441"} subtitle={"new clinet"}  increse={"+5%"} data={data3} scheme={"accent"}/>
<Card icon={<TrafficOutlinedIcon sx={{fontSize:"23px",color:theme.palette.secondary.main}} />} title={"1,325,134"} subtitle={"traffic revied"}  increse={"+43%"} data={data4} scheme={"dark2"}/>








  </Stack>
  )
}

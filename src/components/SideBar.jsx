import React from 'react'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import myImage from '../avatar1.jpg'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';


const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Array1 = [
  { "text": "Dashboard", "icon": <HomeOutlinedIcon />, "path": "/" },

  { "text": "Manage Team", "icon": <PeopleAltOutlinedIcon />, "path": "/team" },

  { "text": "Contacts Infomation", "icon": <ContactsOutlinedIcon />, "path": "/contacts" },

  { "text": "Invoices Balances", "icon": <ReceiptOutlinedIcon />, "path": "/invoices" }
]
const Array2 = [
  { "text": "Profile Form", "icon": <PersonOutlineOutlinedIcon />, "path": "/profile" },

  { "text": "Calander", "icon": <CalendarMonthOutlinedIcon />, "path": "/calander" },

  { "text": "FAQ Page", "icon": <HelpOutlineOutlinedIcon />, "path": "/faq" },
]

const Array3 = [
  { "text": "Bar Chart", "icon": <BarChartOutlinedIcon />, "path": "/bar" },

  { "text": "Pie Chart", "icon": <PieChartOutlineOutlinedIcon />, "path": "/pie" },

  { "text": "Geography Chart", "icon": <MapOutlinedIcon />, "path": "/geography" },
  { "text": "line1 Chart", "icon": <MapOutlinedIcon />, "path": "/line1" },
]
export default function SideBar({ open, handleDrawerClose }) {
  const navigate = useNavigate();
  const theme = useTheme();
  let location = useLocation();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar sx={{ mx: "auto",width:open?88:44,height:open?88:44,my:1 }} alt="Remy Sharp" src={myImage} />
      <Typography align="center" sx={{fontSize:open?17:0,transition:"0.25s"}} >Hamza</Typography>
      <Typography align="center" sx={{fontSize:open?15:0,transition:"0.25s",color:theme.palette.info.dark}} >Admin</Typography>

      <Divider />



      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={ open?null:item.text} placement="left">

           
            <ListItemButton onClick={() => {
              navigate(item.path)
            }
            }
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor:location.pathname === item.path? theme.palette.mode=== "dark"?grey[800]:grey[300] :null 
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>


      <Divider />



      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                          <Tooltip title={ open?null:item.text} placement="left">

            <ListItemButton onClick={() => {
              navigate(item.path)
            }
            }
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <Tooltip title={ open?null:item.text} placement="left">
            <ListItemButton onClick={() => {
              navigate(item.path)
            }
            }
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

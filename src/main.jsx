import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Dashboardd} from "./page/dashboaedd/Dashboardd"
import Team from './page/dashboaedd/team/Team'
import { Contacts } from './page/dashboaedd/contacts/Contacts'
import { Invoices } from './page/dashboaedd/invoices/Invoices'
import { Profile } from './page/profile/Profile'
import { Calander } from './page/calander/Calander'
import {Faq} from './page/faq/Faq'
import { Bar } from './page/bar/Bar'
import { Pie } from './page/pie/Pie'
import { Geography } from './page/geography/Geography'
import {Line1} from './page/Line1'
import Notfound from './page/Notfound'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route index element={<Dashboardd />} />
    <Route path='team' element={<Team/>}/>
    <Route path='contacts' element={<Contacts/>}/>
    <Route path='invoices' element={<Invoices/>}/>
    <Route path='profile' element={<Profile/>}/>
    <Route path='calander' element={<Calander/>}/>
    <Route path='faq' element={<Faq/>}/>
    <Route path='bar' element={<Bar/>}/>
    <Route path='pie' element={<Pie/>}/>
    <Route path='geography' element={<Geography/>}/>
    <Route path='line1' element={<Line1/>}/>

    <Route path='*' element={<Notfound/>}/> 
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


import { Box, CssBaseline, ThemeProvider, styled } from '@mui/material'
import { useState } from 'react';
import { ColorModeContext, useMode } from './Theme'
import Topbar from './components/Topbar';
import {Routes,Route} from "react-router-dom"
import Dashboard from './pages/dashboard/Dashboard';
import Team from './pages/team/Team';
import SideBar from './components/Sidebar';
import Contacts from './pages/contact/Contact';
import Invoices from './pages/invoices/Invoices';
import Forms from './pages/form/Form';
import Calendar from './pages/calender/Calender';
import FAQ from './pages/faq';
import PieChart from './components/PieChart';
import GeographyChart from './components/GeographyChart';

function App() {
  const [theme,colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
   <ColorModeContext.Provider value={colorMode}>
   <ThemeProvider theme={theme}>
   <CssBaseline />
   <div className='app'>
 
   <SideBar isSidebar={isSidebar} />
  
   <Box >
    <main className='content'>
    <Topbar />
    <Routes >
      <Route path='/' element={<Dashboard />}/>
      <Route path='/team' element={<Team />}/>
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/invoices' element={<Invoices />} />
      <Route path='/forms' element={<Forms />} />
      <Route path='/calender' element={<Calendar />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/bar' element={<BarChart />} />
      <Route path='/line' element={<LineChart />} />
      <Route path='/pie' element={<PieChart />} />
      <Route path='/geography' element={<GeographyChart />} />
    </Routes>
    </main>
    </Box> 
   </div>
   </ThemeProvider>
   </ColorModeContext.Provider>
  )
}

export default App

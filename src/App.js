import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { News } from './components/News/News';
import { SingleTable } from './components/SingleTable/SingleTable';
import { Dashboard } from './components/Dashboard/Dashboard';
import { AllCharts } from './components/Charts/AllCharts';
import { ContactUs } from './components/ContactUs/ContactUs';
import { Login } from './components/Login/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/charts' element={<AllCharts />} />
        <Route path='/table' element={<SingleTable />} />
        <Route path='/news' element={<News />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contactUs' element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/layout';
import Homepage from './pages/home-page';
import WebDesignPage from './pages/web-design-page';
import AppDesignPage from './pages/app-design-page';
import GraphicDesignPage from './pages/graphic-design-page';
import AboutUsPage from './pages/about-us-page';
import LocationsPage from './pages/locations-page';
import ContactUsPage from './pages/contact-us-page';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout><Homepage/></MainLayout>}/>
      <Route path='/web-design' element={<MainLayout><WebDesignPage/></MainLayout>}/>
      <Route path='/app-design' element={<MainLayout><AppDesignPage/></MainLayout>}/>
      <Route path='/graphic-design' element={<MainLayout><GraphicDesignPage/></MainLayout>}/>
      <Route path='/about-us' element={<MainLayout><AboutUsPage/></MainLayout>}/>
      <Route path='/locations' element={<MainLayout><LocationsPage/></MainLayout>}/>
      <Route path='/contact-us' element={<MainLayout><ContactUsPage/></MainLayout>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}

export default App
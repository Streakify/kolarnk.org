import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Departments from './pages/Departments';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Administration from './pages/Administration';
import Training from './pages/Training';
import Production from './pages/Production';
import Contructions from './pages/Contructions';
import Projects from './pages/Projects';
import Rti from './pages/Rti';
import Meetings from './pages/Meetings';
import ProjectDescription from './components/ProjecrdesSection';
import Projectdescription from './pages/projectdescription';
import { LanguageProvider } from './components/LanguageContext';

function App() {
  return (
<LanguageProvider>

   <BrowserRouter>
   <Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path='/about' element={<About/>} />

    <Route  path='/services' element={<Services/>} />
    <Route  path='/departments' element={<Departments/>} />
    <Route  path='/contact' element={<Contact/>} />
    <Route path='/administration' element={<Administration/>}/>
    <Route path='/training' element={<Training/>}/>
    <Route path='/production' element={<Production/>}/>
    <Route path='/construction' element={<Contructions/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/rti' element={<Rti/>}/>
    <Route path='/departments' element={<Departments/>}/>
    <Route path='/meetings' element={<Meetings/>}/>
    <Route  path='*' element={<PageNotFound/>} />
    <Route  path='/Projectdescription' element={<Projectdescription/>} />
   </Routes>
   
   </BrowserRouter>
     
</LanguageProvider>
  );
}

export default App;

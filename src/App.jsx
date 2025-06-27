import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import { Home, About, Projects, Contact } from './pages';

export default function App() {
  return (
    <main className='bg-slate-300/20'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={'a'} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

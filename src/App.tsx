import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import InitialPage from './pages/InitialPage';
import AboutPage from './pages/AboutPage';
import BookListPage from './pages/BookListPage';
import RegisterPage from './pages/RegisterPage';
import './index.css';
import { BooksProvider } from './context/BookContext';


const PrivateRoutes = () => (
  <>
    <NavBar />
    <Routes>
        <Route path='/' element={<InitialPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/book-list' element={<BookListPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
  </>
);

function App() {

  return (
    <>
          <Routes>
            <Route path='/*' element={
              <BooksProvider>
                <PrivateRoutes />
              </BooksProvider>
            }/>
          </Routes>
    </>
  )
}

export default App

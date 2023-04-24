import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorComponent from '../ErrorComponent/ErrorComponent';


import './App.css';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ContactsPage from '../ContactsPage/ContactsPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>

      <BrowserRouter>
        <Navigation />
        <ErrorPage >
          <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/about' element={<AboutPage />}/>
              <Route path='/contacts' element={<ContactsPage />}/>
          </Routes>
        </ErrorPage>
      </BrowserRouter>
    </div>
  );
}

export default App;

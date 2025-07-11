import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Layout from './Pages/Layout';
import Contact from './Pages/Contact';
import About from './Pages/About';
import SearchResults from "./Pages/SearchResults";

import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Layout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path="/search/:query" element={<SearchResults />} />
                <Route path='/login' element={<LoginPage />}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path='/dashboard' element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App;
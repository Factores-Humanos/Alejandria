import './App.css';
import Login from "./components/(admin)/Login";
import Register from './pages/(user)/Register';
import Landing from './pages/(user)/Landing';
import AdminHome from './pages/(admin)/AdminHome';
import Purchases from './pages/(admin)/Purchases'
import Books from './pages/(admin)/Books';
import Users from './pages/(admin)/Users';
import Publications from './pages/(user)/publications/Publications';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit/AuthProvider';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'


const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false
});



function App() {


  return (
    <>

      <AuthProvider store={store}>
        <BrowserRouter>
          <Routes>

            <Route element={<AuthOutlet fallbackPath='/' />}>
              <Route path='/admin' element={<AdminHome />} />
              <Route path='/purchases' element={<Purchases />} />
              <Route path='/books' element={<Books />} />
              <Route path='/users' element={<Users />} />

            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/publications' element={<Publications />} />
            <Route path='/' element={<Landing />} />


          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>


  );
}

export default App;

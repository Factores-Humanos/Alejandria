import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit/AuthProvider';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Register from './pages/user/Register/Register';
import Landing from './pages/common/Home/Landing';
import Purchases from './pages/admins/Purchases/Purchases';
import Books from './pages/admins/Books/Books';
import Users from './pages/admins/Users/Users';
import Publications from './pages/user/Publications/Publications';
import Login from './pages/common/Login/Login';
import AdminHome from './pages/admins/DashBoard/AdminHome';
import Catalog from './pages/user/Catalog/Catalog';
import Layout from './components/common/Layout/Layout';
import BookDetail from './components/users/BookDetail/BookDetail'; // Nueva importación
import Cart from './pages/user/Cart/Cart'; // Nueva importación

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false
});

function App() {

  return (

    <AuthProvider store={store}>
      <BrowserRouter>
        <Routes>

          <Route element={<AuthOutlet fallbackPath="/" />}>
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/books" element={<Books />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Layout />}>
              <Route path="/publications" element={<Publications />} />
              <Route path="/cart" element={<Cart />} />
            </Route>

          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path='/book/:id' element={<BookDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </AuthProvider>


  );
}

export default App;

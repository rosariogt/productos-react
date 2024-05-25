import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Boot from './redux/boot.js';

// utilities
import PrivateRoute from './services/PrivateRoute/PrivateRoute';

// pages
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/Admin/LoginPage/LoginPage';
import MyProfilePage from './pages/Admin/MyProfilePage/MyProfilePage.jsx';
import ReduxExamplesPage from './pages/ReduxExamplesPage/ReduxExamplesPage.jsx';
import ProductosPage from './pages/ProductosPage/ProductosPage.jsx';

const App = () => {
  let navBarMainOptions = [
    { option: 'Home', to: '/' },
    { option: 'Productos', to: '/productos' },
    { option: 'Compras', to: '/compras'}
  ];
  let navBarRightOptions = [
    { option: 'My Profile', to: '/my-profile', displayIfLoggedIn: true },
    { option: 'Login', to: '/login', displayIfLoggedIn: false },    
    { option: 'Logout', to: '/logout', displayIfLoggedIn: true },
   
  ];

  return (
    <BrowserRouter>
      <NavBar main={navBarMainOptions} right={navBarRightOptions}></NavBar>
      <div className="App">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/redux-example-page" element={<ReduxExamplesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/productos' element={<ProductosPage/>}/>
          <Route
            path="/my-profile"
            element={
              <PrivateRoute>
                <MyProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

Boot()
  .then(() => App())
  .catch((error) => console.log(error));

export default App;

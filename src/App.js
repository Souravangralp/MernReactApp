import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import Navbar from './components/navbars/navbar';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Users from './components/users';
import Product from './components/products';
import ROUTES from './constants/routeConstants';
import useToken from './hooks/useToken';
import Index  from './views/index'
import Setting from './components/users/settings'

function App() {
  const { token, setToken, removeToken} = useToken();  // Use the custom hook for token management
  // const navigate = useNavigate();

  const handleLogout = () => {
    removeToken(); 
    // navigate(ROUTES.INDEX);
  };

  return (
    <Router>
      <Navbar token={token} onLogout={handleLogout}/> {/* Pass state to Navbar */}
      <Routes>
        <Route path={ROUTES.INDEX} element={<Index />} />
        <Route path={ROUTES.LOGIN} element={<Login setToken={setToken} />} /> {/* Pass setUser */}
        <Route path={ROUTES.USERS} element={<Users />} />
        <Route path={ROUTES.PRODUCTS} element={<Product />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.SETTINGS} element={<Setting />} />
      </Routes>
    </Router>
  );
}

export default App;
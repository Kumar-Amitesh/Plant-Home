// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './context/CartContext';
import Home from './pages/Home'
// import AddContactApp from './pages/AddContactApp';
import P1 from './pages/P1';
import P2 from './pages/P2';
import P3 from './pages/P3';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
// import ContactList from './pages/ContactList';
// localhost:3000 -> Home
// localhost:3000/success -> Success

function App() {
  return (
    <CartProvider>
      <Container fluid>
        {/* <NavbarComponent></NavbarComponent> */}
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route index element={<Home />} />
            <Route path="addcontact" element={<Contact />} />
            <Route path="store" element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="p1" element={<P1 />} />
            <Route path="p2" element={<P2 />} />
            <Route path="p3" element={<P3 />} />
            <Route path="explore" element={<Explore />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;

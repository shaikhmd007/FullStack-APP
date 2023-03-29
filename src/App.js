import React from "react";
import Home from "./components/Home";
import Product from "./components/Product";
import User from "./components/User";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/ContactUs";
import Logout from "./components/Logout";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/Users" element={<User />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

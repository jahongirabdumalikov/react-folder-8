import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import ProductDetails from "../pages/ProductsDetails";
import Admin from "../pages/Admin";


const Router = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/admin" element={<Admin />} /> */}
                {/* <Route path="products-details/:id" element={<ProductDetails />} /> */}

                <Route path="product-details/:id" element={<ProductDetails />} />

                <Route path="admin" element={<Admin />} />

            </Route>
        </Routes>
    );
};

export default Router;
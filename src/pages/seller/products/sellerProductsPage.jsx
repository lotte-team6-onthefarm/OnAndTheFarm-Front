import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RightWrapper } from '../../../components/seller/common/Box.style';
import ProductQnAs from '../../../components/seller/products/productQnA/ProductQnAs';
import ProductReviews from '../../../components/seller/products/productReviews/ProductReviews';
import AddProduct from '../../../components/seller/products/productsManagement/addProduct/AddProduct';
import UpdateProduct from '../../../components/seller/products/productsManagement/UpdateProduct/UpdateProduct';
import ProductsStatistics from '../../../components/seller/products/productsStatistics/ProductsStatistics';

export default function SellerProductsPage() {
  return (
    <RightWrapper>
      <Routes>
        <Route path="/" element={<ProductsStatistics />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/reviews" element={<ProductReviews />} />
        <Route path="/qnas" element={<ProductQnAs />} />
      </Routes>
    </RightWrapper>
  );
}

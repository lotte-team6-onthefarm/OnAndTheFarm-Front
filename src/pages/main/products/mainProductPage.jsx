import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainProductDetailPage from './mainProductDetailPage';
import MainProductList from './mainProductList';

export default function MainProductPage() {
  return (
      <Routes>
        <Route path="/" element={<MainProductList />} />
        <Route path="/detail/:id" element={<MainProductDetailPage />} />
      </Routes>
  );
}

import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage'
import { NewsPage } from '../../pages/NewsPage';
import { Button, Stack, Nav } from 'react-bootstrap';
import { ProductsPage } from '../../pages/Products';
import { SliderPage } from '../../pages/SliderPage';
import { NewsListPage } from '../../pages/NewsListPage/NewsList';
import { CreateNewsPage } from '../../pages/CreateNewsPage/CreateNewsPage';

type Props = {

}

export const AppRoutes: React.FC<Props> = () => {

    return (
      <main>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsListPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/news-create" element={<CreateNewsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/slider" element={<SliderPage />} />
      </Routes></main>
    )
}
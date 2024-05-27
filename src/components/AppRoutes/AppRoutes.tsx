import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage'
import { NewsPage } from '../../pages/NewsPage';
import { Button, Stack, Nav } from 'react-bootstrap';
import { ProductsPage } from '../../pages/Products';
import { SliderPage } from '../../pages/SliderPage';
import { NewsListPage } from '../../pages/NewsListPage/NewsList';
import { CreateNewsPage } from '../../pages/CreateNewsPage/CreateNewsPage';
import { EditNewsPage } from '../../pages/EditNewsPage/EditNewsPage';
import { ImagesPage } from '../../pages/ImagesPage/ImagesPage';
import { CreateProductPage } from '../../pages/CreateProductPage/CreateProductPage';
import { PagesListEditorPage } from '../../pages/PagesListEditorPage/PagesListEditorPage';
import { CreatePageEditor } from '../../pages/CreatePageEditor/CreatePageEditor';
import { EditPageEditorPage } from '../../pages/EditPageEditorPage/EditPageEditorPage';
import { IPage } from '../../models/IPage';
import { EditProductPage } from '../../pages/EditProductPage/EditProductPage';
import { CategoryPage } from '../../pages/CategotyPage/CategoryPage';
import { CreateCategoryPage } from '../../pages/CreateCategoryPage/CreateCategoryPage';
import { EditCategoryPage } from '../../pages/EditCategoryPage/EditCategoryPage';

type Props = {

}

export const AppRoutes: React.FC<Props> = () => {

    return (
      <>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news" element={<NewsListPage />} />
          <Route path="/news/:id" element={<NewsPage />} />
          <Route path="/news-create" element={<CreateNewsPage />} />
          <Route path="/news-edit/:id" element={<EditNewsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products-edit/:id" element={<EditProductPage />} />
          <Route path="/product-create" element={<CreateProductPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/categories-create" element={<CreateCategoryPage />} />
          <Route path="/categories-edit/:id" element={<EditCategoryPage />} />
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/images" element={<ImagesPage />} />
          <Route path="/pages" element={<PagesListEditorPage />} />
          <Route path="/page-create" element={<CreatePageEditor />} />
          <Route path="/page-edit/:id" element={<EditPageEditorPage />} />
        </Routes>
      </>
    )
}
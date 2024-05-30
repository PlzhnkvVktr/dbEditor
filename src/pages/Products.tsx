import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { deleteProduct, fetchCategory, fetchProductsBySubcategory} from '../store/reducers/ActionCreators'
import { Link } from 'react-router-dom'
import { ListItem } from '../components/ListItem/ListItem'
import { IProduct } from '../models/IProduct'
import { Loader } from './LoaderPage/LoaderPage'
import { ICategory, ISubcategory } from '../models/ICategory'

type Props = {

}

export const ProductsPage: React.FC<Props> = () => {

    const dispatch = useAppDispatch()
    const {products, isLoading, error} = useAppSelector(state => state.productReducer)
    const {categories, isLoadingCategory, errorCategory} = useAppSelector(state => state.categoryReducer)
    const currentCategory = useState<ICategory>()
    const currentSubcategory = useState<ISubcategory>()
    const subcategoryList = useState<ISubcategory[] | any>([])
    
    useEffect(() => {
      dispatch(fetchCategory())
      currentCategory[1](categories[0])
      // dispatch(fetchCategoryById(currentCategory[0]))
    }, [])

    useEffect(() => {
      dispatch(fetchProductsBySubcategory(currentSubcategory[0]?.card_img as string))
    }, [currentSubcategory[0]])

    useEffect(() => {
      subcategoryList[1](currentCategory[0]?.subcategories)
    }, [currentCategory[0]])

    if (isLoading) return <Loader />
    if (error) return <h1>{error}</h1>
  
    return (
      <main>
        <ButtonGroup aria-label="Basic example">
          {categories.map(item => <Button key={item.id} variant="secondary" onClick={() => {currentCategory[1](item)}}>{item.name}</Button>)}
        </ButtonGroup>
        <hr />
        <ButtonGroup aria-label="Basic example">
          {currentCategory[0]?.subcategories.map(item => <Button variant="secondary" onClick={() => {currentSubcategory[1](item)}}>{item.name}</Button>)}
        </ButtonGroup>

        { isLoading ? <Loader /> : products.map((item, key) => 
          <ListItem 
            item={item as IProduct} 
            path="products" 
            key={key} 
            action={() => dispatch(deleteProduct(item.id))}
          />
        )}
        <button className='add_item'>
          <Link to="/product-create">
            +
          </Link>
        </button>

      </main>
    )
}
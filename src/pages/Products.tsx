import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchProductsByCategory } from '../store/reducers/ActionCreators'
import { Link } from 'react-router-dom'
import { ListItem } from '../components/ListItem/ListItem'
import { IProduct } from '../models/IProduct'
import { Loader } from './LoaderPage/LoaderPage'

type Props = {

}

export const ProductsPage: React.FC<Props> = () => {

    const dispatch = useAppDispatch()
    const {products, isLoading, error} = useAppSelector(state => state.productByCategoryReducer)
    const currentCategory = useState("1")
    
    useEffect(() => {
      dispatch(fetchProductsByCategory(currentCategory[0]))
      console.log(isLoading)
    }, [currentCategory[0]])

    if (isLoading) return <Loader />
    if (error) return <h1>{error}</h1>
  
    return (
      <main>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={() => currentCategory[1]("1")}>Испытательное оборудование</Button>
          <Button variant="secondary" onClick={() => currentCategory[1]("2")}>Автомобильная электромеханика</Button>
          <Button variant="secondary" onClick={() => currentCategory[1]("3")}>Приборы</Button>
          <Button variant="secondary" onClick={() => currentCategory[1]("4")}>Учебные демонстрационные стенды</Button>
          <Button variant="secondary" onClick={() => currentCategory[1]("5")}>Гидравлическое оборудование</Button>
          <Button variant="secondary" onClick={() => currentCategory[1]("6")}>Измерительные системы</Button>
          <Button variant="secondary" onClick={() => currentCategory[1]("7")}>Другое оборудование</Button>
        </ButtonGroup>

        {products.map((item, key) => 
          <ListItem 
            item={item as IProduct} 
            path="products" 
            key={key} 
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
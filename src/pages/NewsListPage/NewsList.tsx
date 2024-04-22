import React, { useEffect, useState } from 'react'
import { deleteNews, fetchNews } from '../../store/reducers/ActionCreators'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Link } from 'react-router-dom'
import { Button, CloseButton, Spinner } from 'react-bootstrap'
import s from './NewsListPage.module.css'
import { Loader } from '../LoaderPage/LoaderPage'
import { ListItem } from '../../components/ListItem/ListItem'
import { INews } from '../../models/INews'

type Props = {

}

export const NewsListPage: React.FC<Props> = () => {

    const dispatch = useAppDispatch()
    const {news, isLoading, error} = useAppSelector(state => state.newsReducer)
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState(news.length)

    // useEffect(() => {
    //   if (!loading && !news.length) { 
    //     setLoading(true)
    //     dispatch(fetchNews())
    //   }
    // }, [loading, news])
    
    // useEffect(() => {
    //   return () => {
    //     setLoading(false)
    //   }
    // }, [])

    useEffect(() => {
      dispatch(fetchNews())
      setFilter(news.length)
    }, [filter])

    if (isLoading) return <Loader />
    if (error) return <h1>{error}</h1>
  
    return (
      <main>
        {news.map(
          (item, key) => 
            <ListItem
              item={item as INews}
              path='news'
              key={key}
            />
        )}
        <button className='add_item'>
          <Link to="/news-create">
            +
          </Link>
        </button>
      </main>
    )
}
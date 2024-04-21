import React, { useEffect, useState } from 'react'
import { deleteNews, fetchNews } from '../../store/reducers/ActionCreators'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Link } from 'react-router-dom'
import { Button, CloseButton } from 'react-bootstrap'
import s from './NewsListPage.module.css'

type Props = {

}

export const NewsListPage: React.FC<Props> = () => {

    const dispatch = useAppDispatch()
    const {news, isLoading, error} = useAppSelector(state => state.newsReducer)
    const [loading, setLoading] = useState(false)
    const [a, setA] = useState([])

    useEffect(() => {
      if (!loading && !news.length) { 
        setLoading(true)
        dispatch(fetchNews())
      }
    }, [loading, news])
    
    useEffect(() => {
      return () => {
        setLoading(false)
      }
    }, [])
  
    return (
      <main>
        <Button variant="outline-primary" size="lg">
          <Link to="/news-create">
            Создать
          </Link>
        </Button>
        {news.map(
          (item, key) => 
            <div className={s.news_container} key={key}>
              <div className={s.news_title}>
                <h2>
                  <Link to={"/news/" + item.id}>{item.title}</Link>
                </h2>
              </div>
              <div>
                <button className={s.edit_button}><Link to={"/news-edit/" + item.id}>&#128396;</Link></button>
                <button onClick={() => {
                  dispatch(deleteNews(item.id))
                  // dispatch(fetchNews())
                  }} className={s.edit_button}>&#128465;</button>
              </div>
            </div>
        )}
      </main>
    )
}
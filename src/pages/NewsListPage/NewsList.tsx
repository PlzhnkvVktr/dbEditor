import React, { useEffect } from 'react'
import { fetchNews } from '../../store/reducers/ActionCreators'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

type Props = {

}

export const NewsListPage: React.FC<Props> = () => {

    const dispatch = useAppDispatch()
    const {news, isLoading, error} = useAppSelector(state => state.newsReducer)
  
    useEffect(() => {
      dispatch(fetchNews())
    }, [])
  
    return (
      <main>
        <Button variant="primary" size="lg">
          <Link to="/news-create">
            Создать
          </Link>
        </Button>
        {news.map(
          (item, key) => 
          <div key={key}>
            <h2><Link to={"/news/" + item.id}>{item.title}</Link></h2>
            <div dangerouslySetInnerHTML={{ __html: item.message }} />
            <hr/>
          </div>
        )}
      </main>
    )
}
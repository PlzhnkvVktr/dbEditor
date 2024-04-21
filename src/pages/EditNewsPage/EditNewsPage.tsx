import React, { useEffect, useRef, useState } from 'react'
import s from "./EditNewsPage.module.css"
import JoditEditor from 'jodit-react';
import { Link, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchNewsItem, postNews, updateNews } from '../../store/reducers/ActionCreators';

type Props = {

}

export const EditNewsPage: React.FC<Props> = () => {

  const params = useParams()
  const dispatch = useAppDispatch()
  const {newsItem, isLoading, error} = useAppSelector(state => state.newsItemReducer)
  const editor = useRef(null)
  const [content, setContent] = useState(newsItem.message)
  const [title, setTitle] = useState(newsItem.title)

  useEffect(() => {
    dispatch(fetchNewsItem(params.id as string))
  }, [])

  
  if (isLoading) {
    <h1>Loading...</h1>
  } 

  return (
    <div>
      <h1>Создание новости</h1>
      <h2>Заголовок</h2>
      <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} as="textarea" rows={3} />
      <h2>Teкст новости</h2>
      <JoditEditor
        ref={editor}
        value={content}
        // config={config}
        // onBlur={(event) => setContent(event)}
        onChange={(newContent) => setContent(newContent)}
      />
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      <Button variant="outline-primary" size="lg" onClick={() => {
          dispatch(updateNews(params.id as string, {
              title: title,
              message: content
            })
          )
        }}>
        <Link to="/news">
          Редактировать
        </Link>
      </Button>
    </div>
  )
}
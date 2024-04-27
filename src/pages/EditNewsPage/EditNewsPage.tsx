import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import s from "./EditNewsPage.module.css"
import JoditEditor from 'jodit-react';
import { Link, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchNewsItem, postNews, updateNews } from '../../store/reducers/ActionCreators';
import { Loader } from '../LoaderPage/LoaderPage';

type Props = {

}

export const EditNewsPage: React.FC<Props> = () => {

  const params = useParams()
  const dispatch = useAppDispatch()
  const {newsItem, isLoading, error} = useAppSelector(state => state.newsItemReducer)
  const editor = useRef(null)
  const content = useState("")
  const [title, setTitle] = useState("")

  useEffect(() => {
    dispatch(fetchNewsItem(params.id as string))
  }, [])

  useEffect(() => {
    content[1](newsItem.message)
    setTitle(newsItem.title)
  }, [isLoading])

  if (isLoading) return <Loader />
  if (error) return <h1>Error</h1> 

  return (
    <div>
      <h1>Создание новости</h1>
      <h2>Заголовок</h2>
      <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} as="textarea" rows={3} />
      <h2>Teкст новости</h2>
      <JoditEditor
        ref={editor}
        value={content[0]}
        // config={config}
        // onBlur={(event) => setContent(event)}
        onChange={(newContent) => content[1](newContent)}
      />
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      <Button variant="outline-primary" size="lg" onClick={() => {
          dispatch(updateNews(params.id as string, {
              title: title,
              message: content[0]
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
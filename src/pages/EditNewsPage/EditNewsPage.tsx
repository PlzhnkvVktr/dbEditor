import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import s from "./EditNewsPage.module.css"
import JoditEditor from 'jodit-react';
import { Link, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchNewsItem, postNews, updateNews } from '../../store/reducers/ActionCreators';
import { Loader } from '../LoaderPage/LoaderPage';
import { RichText } from '../../components/RichText/RichText';
import { ButtonLink } from '../../components/ButtonLink/ButtonLink';

type Props = {

}

export const EditNewsPage: React.FC<Props> = () => {

  const params = useParams()
  const dispatch = useAppDispatch()
  const {newsItem, isLoading, error} = useAppSelector(state => state.newsItemReducer)
  const content = useState("")
  const title = useState("")

  useEffect(() => {
    dispatch(fetchNewsItem(params.id as string))
  }, [])

  useEffect(() => {
    content[1](newsItem.message)
    title[1](newsItem.title)
  }, [isLoading])

  if (isLoading) return <Loader />
  if (error) return <h1>Error</h1> 

  return (
    <div>
      <h1>Создание новости</h1>
      <h2>Заголовок</h2>
      <Form.Control value={title[0]} onChange={(e) => title[1](e.target.value)} as="textarea" rows={3} />
      <h2>Teкст новости</h2>
      <RichText value={content} />
      <ButtonLink
          text='Редактировать'
          link='/news'
          disabled={title[0] == ""}
          onClick={() =>
            dispatch(updateNews(params.id as string, {
              title: title[0],
              message: content[0]
            })
            )
          }
        />
    </div>
  )
}
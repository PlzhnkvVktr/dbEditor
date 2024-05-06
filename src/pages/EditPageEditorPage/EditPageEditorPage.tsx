import JoditEditor from 'jodit-react'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchPageById, postPage, updatePage } from '../../store/reducers/ActionCreators'
import s from "./EditPageEditorPage.module.css"
import { Loader } from '../LoaderPage/LoaderPage'
import { RichText } from '../../components/RichText/RichText'
import { ButtonLink } from '../../components/ButtonLink/ButtonLink'

type Props = {
}

export const EditPageEditorPage: React.FC<Props> = () => {

    const dispatch = useAppDispatch()
    const params = useParams()
    const editor = useRef(null)
    const {page, isLoading, error} = useAppSelector(state => state.pageByIdReducer)
    const name = useState<string>("")
    const content = useState<string>("")
    const path = useState<string>("")
    const isVisibility = useState<boolean>(false)

    useEffect(() => {
      dispatch(fetchPageById(params.id as string))
    }, [])

    useEffect(() => {
      name[1](page.name)
      content[1](page.html)
      path[1](page.path)
      isVisibility[1](page.visibility)
    }, [isLoading])

    const handleChange = () => {
        isVisibility[1](!isVisibility[0]);
    }
  
    if (isLoading) return <Loader />
    if (error) return <h1>Error</h1> 

    return (
      <main>
        <h1>Создание новости</h1>
        <h2>Заголовок</h2>
        <Form.Control value={name[0]} onChange={(e) => name[1](e.target.value)} as="textarea" rows={3} />
        <h2>Путь</h2>
        <Form.Control value={path[0]} onChange={(e) => path[1](e.target.value)} as="textarea" rows={1} />
        <Form className={s.custom_switch}>
            <Form.Label>Показывать страницу</Form.Label>
            <Form.Check
              type="switch"
              id="custom-switch"
              checked={isVisibility[0]}
              onChange={() => handleChange()}
            />
        </Form>
        <h2>Teкст новости</h2>
        <RichText value={content} />
        <ButtonLink
          text='Редактировать'
          link='/pages'
          disabled={name[0] == ""}
          onClick={() =>
            updatePage(page.id, {
              name: name[0],
              html: content[0],
              path: path[0],
              visibility: isVisibility[0]
            })
          }
        />
      </main>
    )
}
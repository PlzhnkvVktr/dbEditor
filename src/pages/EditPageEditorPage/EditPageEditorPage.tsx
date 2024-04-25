import JoditEditor from 'jodit-react'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchPageById, postPage } from '../../store/reducers/ActionCreators'
import s from "./EditPageEditorPage.module.css"

type Props = {
}

export const EditPageEditorPage: React.FC<Props> = () => {

    const dispatch = useAppDispatch()
    const params = useParams()
    const editor = useRef(null)
    const {page, isLoading, error} = useAppSelector(state => state.pageByIdReducer)
    const name = useState<string>("")
    const content = useState<string>("")
    const isVisibility = useState<boolean>(false)

    useEffect(() => {
        const getData = async () => {
            dispatch(fetchPageById(params.id as string))
            name[1](page.name)
            content[1](page.html)
        }
        getData()
    }, [])

    const handleChange = () => {
        isVisibility[1](!isVisibility[0]);
    }
  
    return (
      <main>
        <h1>Создание новости</h1>
        <h2>Заголовок</h2>
        <Form.Control value={name[0]} onChange={(e) => name[1](e.target.value)} as="textarea" rows={3} />
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
        <JoditEditor
          ref={editor}
          value={content[0]}
          onBlur={(newContent) => content[1](newContent)}
        />
        <Button variant="warning" size="lg" onClick={() => {
            dispatch(postPage({
                name: name[0],
                html: content[0],
                visibility: isVisibility[0]
              })
            )
          }}>
          <Link to="/pages">
            Создать
          </Link>
        </Button>
      </main>
    )
}
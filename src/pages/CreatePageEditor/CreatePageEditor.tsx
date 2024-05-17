import JoditEditor from 'jodit-react'
import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { postPage } from '../../store/reducers/ActionCreators'
import s from "./CreatePageEditor.module.css"
import { height } from '@mui/system'
import { RichText } from '../../components/RichText/RichText'
import { ButtonLink } from '../../components/ButtonLink/ButtonLink'

type Props = {

}

export const CreatePageEditor: React.FC<Props> = () => {

    const dispatch = useAppDispatch()
    const name = useState("")
    const content = useState("")
    const path = useState("")
    const isVisibility = useState(false)
    const isNavbar = useState(false)

    const handleChange = (state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]) => {
      state[1](!state[0]);
    }
  
    return (
      <main>
        <h1>Создание страницы</h1>
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
            onChange={() => handleChange(isVisibility)}
          />
        </Form>
        <Form className={s.custom_switch}>
          <Form.Label>Навбар</Form.Label>
          <Form.Check
            type="switch"
            id="custom-switch"
            checked={isNavbar[0]}
            onChange={() => handleChange(isNavbar)}
          />
        </Form>
        <h2>Teкст новости</h2>
        <RichText value={content} />
        <ButtonLink
            text='Создать'
            link='/pages'
            disabled={name[0] == ""}
            onClick={() =>
              dispatch(postPage({
                name: name[0],
                html: content[0],
                path: path[0],
                isVisibility: isVisibility[0],
                isNavbar: isNavbar[0]
              })
              )
            }
          />
      </main>
    )
}
import React, { useEffect, useRef, useState } from 'react'
import s from "./EditProductPage.module.css"
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
import { Accordion, Button, ButtonGroup, Form } from 'react-bootstrap'
import { useAppDispatch } from '../../hooks/redux';
import { postNews } from '../../store/reducers/ActionCreators';
import { height } from '@mui/system';
import { size } from 'jodit/esm/core/helpers';
import { lang } from 'jodit/esm/core/constants';

type Props = {

}

export const EditProductPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const editor = useRef(null)

  useEffect(() => {

  }, [])

  const name = useState("")
  const description = useState("")
  const characteristic = useState("")
  const specification = useState("")
  const additionally = useState("")
  const categoty = useState('')
  
  return (
    <main>
      <h1>Создание карточки товара</h1>
      <h2 className={s.h2_style}>Заголовок</h2>
      <Form.Control className={s.textarea_style} value={name[0]} onChange={(e) => name[1](e.target.value)} as="textarea" rows={3} />
      
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Описание</Accordion.Header>
          <Accordion.Body>
            <JoditEditor
              ref={editor}
              value={description[0]}
              // onChange={(newContent) => description[1](newContent)}
              onBlur={(newContent) => description[1](newContent)}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Характеристика</Accordion.Header>
          <Accordion.Body>
            <JoditEditor
              ref={editor}
              value={characteristic[0]}
              onBlur={(newContent) => characteristic[1](newContent)}
            />          
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Спецификация</Accordion.Header>
          <Accordion.Body>
            <JoditEditor
              ref={editor}
              value={specification[0]}
              onBlur={(newContent) => specification[1](newContent)}
            />          
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Узнать больше</Accordion.Header>
          <Accordion.Body>
            <JoditEditor
              ref={editor}
              value={additionally[0]}
              onBlur={(newContent) => additionally[1](newContent)}
            />          
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </main>
  )
}
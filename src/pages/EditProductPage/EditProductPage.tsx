import React, { useEffect, useRef, useState } from 'react'
import s from "./EditProductPage.module.css"
import JoditEditor from 'jodit-react';
import { Link, useParams } from 'react-router-dom';
import { Accordion, Button, ButtonGroup, Form } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProductItem } from '../../store/reducers/ActionCreators';
import { Loader } from '../LoaderPage/LoaderPage';

type Props = {

}

export const EditProductPage: React.FC<Props> = () => {

  const params = useParams()
  const dispatch = useAppDispatch()
  const {product, isLoading, error} = useAppSelector(state => state.productItemReducer)
  const editor = useRef(null)

  const name = useState("")
  const description = useState("")
  const characteristic = useState("")
  const specification = useState("")
  const additionally = useState("")
  const categoty = useState<number>()
  
  useEffect(() => {
    dispatch(fetchProductItem(params.id as string))
  }, [])
  
  useEffect(() => {
    name[1](product.name)
    description[1](product.description)
    characteristic[1](product.characteristic)
    specification[1](product.specification)
    additionally[1](product.additionally)
    categoty[1](product.category)
  }, [isLoading])

  if (isLoading) return <Loader />
  if (error) return <h1>Error</h1> 

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
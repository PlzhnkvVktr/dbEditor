import React, { useEffect, useRef, useState } from 'react'
import s from "./EditProductPage.module.css"
import JoditEditor from 'jodit-react';
import { Link, useParams } from 'react-router-dom';
import { Accordion, Alert, Button, ButtonGroup, Form, Tab, Tabs } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProductItem, updateProduct } from '../../store/reducers/ActionCreators';
import { Loader } from '../LoaderPage/LoaderPage';
import Image from 'react-bootstrap/Image';
import { ImagesPage } from '../ImagesPage/ImagesPage';
import { RichText } from '../../components/RichText/RichText';
import { ButtonLink } from '../../components/ButtonLink/ButtonLink';

type Props = {

}

export const EditProductPage: React.FC<Props> = () => {

  const params = useParams()
  const dispatch = useAppDispatch()
  const {product, isLoading, error} = useAppSelector(state => state.productItemReducer)
  const editor = useRef(null)

  const name = useState("")
  const card_img = useState("")
  const description = useState("")
  const characteristic = useState("")
  const specification = useState("")
  const additionally = useState("")
  const categoty = useState<number>()
  const [show, setShow] = useState(false);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    card_img[1](event.target.value);
  }
  
  useEffect(() => {
    dispatch(fetchProductItem(params.id as string))
  }, [])
  
  useEffect(() => {
    name[1](product.name)
    card_img[1](product.card_img)
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
      <Alert show={show} variant="success" className="images_alert">
        <Alert.Heading>Выбрать картинку</Alert.Heading>
        <ImagesPage />
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Закрыть
          </Button>
        </div>
      </Alert>
      {
        !show && 
        <div>
          <h1>Редактирование карточки товара</h1>
          <h2 className={s.h2_style}>Заголовок</h2>
          <Form.Control className={s.textarea_style} value={name[0]} onChange={(e) => name[1](e.target.value)} as="textarea" rows={3} />
          <Tabs
            defaultActiveKey="home"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="Картинка продукта">
              <div>
                <Image src={card_img[0]} thumbnail />
                <div>
                  <input type='text' value={card_img[0]} onChange={handleChange} />
                  <Button onClick={() => setShow(true)}>{card_img[0] == "" ? "Добавить" : "Изменить"}</Button>
                </div>
              </div>
            </Tab>
            <Tab eventKey="description" title="Описание">
              <RichText value={description} />
            </Tab>
            <Tab eventKey="characteristic" title="Характеристика">
              <RichText value={characteristic} />   
            </Tab>
            <Tab eventKey="specification" title="Спецификация">
              <RichText value={specification} />
            </Tab>
            <Tab eventKey="additionally" title="Узнать больше">
              <RichText value={additionally} />        
            </Tab>
          </Tabs>
          <ButtonLink
            text='Редактировать'
            link='/products'
            disabled={name[0] == ""}
            onClick={() =>
              dispatch(updateProduct(params.id as string, {
                  name: name[0],
                  card_img: card_img[0],
                  description: description[0],
                  characteristic: characteristic[0],
                  specification: specification[0],
                  additionally: additionally[0],
                  category: 1,
                  subcategory: 1,
                  images: []
                })
              )
            }
          />
        </div> 
      }
    </main>
  )
}
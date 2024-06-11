import React, { useEffect, useRef, useState } from 'react'
import s from "./CreateProductPage.module.css"
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
import { Accordion, Alert, Button, ButtonGroup, Dropdown, DropdownButton, Form, Tab, Tabs } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Image from 'react-bootstrap/Image';
import { height } from '@mui/system';
import { size } from 'jodit/esm/core/helpers';
import { lang } from 'jodit/esm/core/constants';
import { fetchCategory, postProduct } from '../../store/reducers/ActionCreators';
import { RichText } from '../../components/RichText/RichText';
import { ImagesPage } from '../ImagesPage/ImagesPage';
import { ButtonLink } from '../../components/ButtonLink/ButtonLink';

type Props = {

}

export const CreateProductPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()

  const name = useState("")
  const card_img = useState("")
  const description = useState("")
  const characteristic = useState("")
  const specification = useState("")
  const additionally = useState("")
  const category = useState('')
  const subcategoty = useState('')
  const modification = useState('')
  
  const currentCategory = useState<number>(0)

  const {categories, isLoadingCategory, errorCategory} = useAppSelector(state => state.categoryReducer)

  const [show, setShow] = useState(false);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    card_img[1](event.target.value);
  }
  
  useEffect(() => {
    dispatch(fetchCategory())
  }, [])
    
  useEffect(() => {
    subcategoty[1]("")
  }, [category[0]])

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
          <h1>Создание карточки продукта</h1>
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
                <Image className="add_card_img" src={card_img[0]} thumbnail />
                <div>
                  <input type='text' value={card_img[0]} onChange={handleChange} />
                  <Button onClick={() => setShow(true)}>{card_img[0] == "" ? "Добавить" : "Изменить"}</Button>
                </div>
              </div>   
              <h2 className={s.h2_style}>Категория</h2>
              <DropdownButton id="dropdown-basic-button" title={category[0] == "" ? "Не выбрано" : category[0]}>
                <Dropdown.Item  onClick={() => category[1]("")}>Не выбрано</Dropdown.Item>
                {
                  categories.map((item, key) => 
                  <Dropdown.Item key={key} onClick={
                    () => {
                      category[1](item.name)
                      currentCategory[1](key)
                    }
                  }>{item.name}</Dropdown.Item>
                )}
              </DropdownButton>

              <h2 className={s.h2_style}>Подкатегория</h2>
              {
                category[0] != "" && 
                <DropdownButton id="dropdown-basic-button" title={subcategoty[0] == "" ? "Не выбрано" : subcategoty[0]}>
                <Dropdown.Item  onClick={() => subcategoty[1]("")}>Не выбрано</Dropdown.Item>
                  {
                    categories[currentCategory[0]].subcategories.map(item => <Dropdown.Item  onClick={() => subcategoty[1](item.name)}>{item.name}</Dropdown.Item>)
                  }
              </DropdownButton>
              }
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
            text='Создать'
            link='/products'
            disabled={name[0] == ""}
            onClick={() =>
              dispatch(postProduct({
                  name: name[0],
                  card_img: card_img[0],
                  description: description[0],
                  characteristic: characteristic[0],
                  specification: specification[0],
                  additionally: additionally[0],
                  category: category[0],
                  subcategory: subcategoty[0],
                  modification: modification[0],
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
import { useEffect, useLayoutEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { useParams } from "react-router-dom"
import { fetchCategoryById, updateCategory } from "../../store/reducers/ActionCreators"
import { ButtonLink } from "../../components/ButtonLink/ButtonLink"
import { Loader } from "../LoaderPage/LoaderPage"
import { ISubcategory } from "../../models/ICategory"
import s from "./EditCategoryPage.module.css"

type Prors = {

}

export const EditCategoryPage: React.FC<Prors> = () => {

    const dispatch = useAppDispatch()
    const params = useParams()
    const {category, isLoading, error} = useAppSelector(state => state.categotyByIdReducer)
    const name = useState("")
    const show = useState(false)
    const newSubcategory = useState("")
    const newSubcategoryList = useState<ISubcategory[]>([])

    const handleClose = () => show[1](false)
    const handleShow = () => show[1](true)
    const addSubcategory = () => {
      let copy = Object.assign([], newSubcategoryList[0])
      copy.push(
        {
          name: newSubcategory[0],
          path: newSubcategory[0],
          image: ""
        }
      )
      newSubcategoryList[1](copy)
      newSubcategory[1]("")
      handleClose()
    }

    useEffect(() => {
      dispatch(fetchCategoryById(params.id as string))
    }, [])

    useEffect(() => {
      name[1](category.name)
    }, [isLoading])

    if (isLoading) return <Loader />
    if (error) return <h1>Error</h1> 

    return (
        <main>
          <Modal show={show[0]} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Добавить категорию</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Название</Form.Label>
                    <Form.Control
                      type=""
                      placeholder=""
                      onChange={(newName) => newSubcategory[1](newName.target.value)}
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Закрыть и не добавить
                </Button>
                <Button variant="primary" onClick={addSubcategory}>
                  Добавить и закрыть
                </Button>
              </Modal.Footer>
            </Modal>
            <h1>Редактирование новости</h1>
            <h2>Заголовок</h2>
            <Form.Control value={name[0]} onChange={(e) => name[1](e.target.value)} as="textarea" rows={3} />
            <h2>Подкатегории</h2>
              {category.subcategories.map((item, key) => <p className={s.subcategories} key={key}>{item.name}</p>)}
              {newSubcategoryList[0]?.map((item, key) => <p className={s.new_subcategories} key={key}>{item.name}</p>)}
              <button onClick={handleShow}>Добавить</button>
            <ButtonLink
              text='Изменить'
              link='/categories'
              disabled={name[0] == ""}
              onClick={() => {
                console.log({
                  name: name[0],
                  path: name[0],
                  subcategories: [...category.subcategories, ...newSubcategoryList[0]]
                })
                dispatch(updateCategory(category.id, {
                    name: name[0],
                    path: name[0],
                    subcategories: [...category.subcategories, ...newSubcategoryList[0]]
                  })
                )}
              }
        />
    </main>
    )
}
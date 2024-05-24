import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { deleteCategory, fetchCategory, postCategory } from "../../store/reducers/ActionCreators"
import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { Loader } from "../LoaderPage/LoaderPage"
import { ListItem } from "../../components/ListItem/ListItem"
import { ICategory } from "../../models/ICategory"

type Props = {
    
}

export const CategoryPage: React.FC<Props> = () => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const {categories, isLoading, error} = useAppSelector(state => state.categoryReducer)
    const show = useState(false)
    const handleClose = () => show[1](false)
    const handleShow = () => show[1](true)
    const categoryName = useState("")
    const subcategoryName = useState("")
    

    const deleteItem = async (id: string) => {
        await dispatch(deleteCategory(id))
        await dispatch(fetchCategory())
    }

    const addItem = async () => {
        dispatch(postCategory({
            name: categoryName[0],
            path: categoryName[0],
            subcategories: [
                {
                    name: subcategoryName[0],
                    path: subcategoryName[0],
                    image: ""
                }
                
            ]
        }))
        await dispatch(fetchCategory())
        categoryName[1]("")
        handleClose()
    }

    useEffect(() => {
      dispatch(fetchCategory())
    }, [])
    
    if (isLoading) return <Loader />
    if (error) return <h1>{error}</h1>

      return (
        <div>
            {
                categories.map((item, key) => 
                    <ListItem
                      item={item as ICategory}
                      path='news'
                      key={key}
                      action={() => deleteItem(item.id)}
                    />
                )
            }
            <button className='add_item' onClick={() => handleShow()}>
                +
            </button>
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
                      onChange={(newName) => categoryName[1](newName.target.value)}
                      autoFocus
                    />
                    <Form.Label>Подкатегории</Form.Label>
                    <Form.Control
                      type=""
                      placeholder=""
                      onChange={(newName) => subcategoryName[1](newName.target.value)}
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Закрыть и не добавить
                </Button>
                <Button variant="primary" onClick={addItem}>
                  Добавить и закрыть
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
    )
}
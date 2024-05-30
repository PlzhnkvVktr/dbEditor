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
    const {categories, isLoadingCategory, errorCategory} = useAppSelector(state => state.categoryReducer)
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
                    card_img: ""
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
    
    if (isLoadingCategory) return <Loader />
    if (errorCategory) return <h1>{errorCategory}</h1>

      return (
        <div>
            {
                categories.map((item, key) => 
                    <ListItem
                      item={item as ICategory}
                      path='categories'
                      key={key}
                      action={() => deleteItem(item.id)}
                    />
                )
            }
            <button className='add_item'>
                <Link to="/categories-create">
                    +
                </Link>
            </button>
        </div>
    )
}
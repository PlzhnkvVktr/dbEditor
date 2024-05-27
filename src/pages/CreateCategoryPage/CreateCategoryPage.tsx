import { useAppDispatch } from "../../hooks/redux"
import { Form } from 'react-bootstrap'
import { useEffect, useState } from "react"
import { ButtonLink } from "../../components/ButtonLink/ButtonLink"
import { postCategory } from "../../store/reducers/ActionCreators"

type Props = {

}

export const CreateCategoryPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const title = useState("")
  const content = useState("")


  return (
    <main>
      <h1>Создание новости</h1>
      <h2>Заголовок</h2>
      <Form.Control value={title[0]} onChange={(e) => title[1](e.target.value)} as="textarea" rows={3} />
      
      <ButtonLink
        text='Создать'
        link='/categories'
        disabled={title[0] == ""}
        onClick={() =>
          dispatch(postCategory({
              name: title[0],
              path: title[0],
              subcategories: []
            })
          )
        }
        />
    </main>
  )
}

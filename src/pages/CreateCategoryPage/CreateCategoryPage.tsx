import { useRef } from "react"
import { useAppDispatch } from "../../hooks/redux"
import { ButtonLink } from "../../components/ButtonLink/ButtonLink"
import { RichText } from '../../components/RichText/RichText'
import { postNews } from "../../store/reducers/ActionCreators"
import { Form } from 'react-bootstrap'

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
      {/* <Form.Control value={title[0]} onChange={(e) => title[1](e.target.value)} as="textarea" rows={3} />
      <h2>Teкст новости</h2>
      <RichText value={content} />
      <ButtonLink
        text='Создать'
        link='/news'
        disabled={title[0] == ""}
        onClick={() =>
          dispatch(postNews({
              title: title[0],
              message: content[0]
            })
          )
        }
        /> */}
    </main>
  )
}

function useState(arg0: string) {
    throw new Error("Function not implemented.")
}

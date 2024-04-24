import JoditEditor from 'jodit-react'
import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { postPage } from '../../store/reducers/ActionCreators'

type Props = {

}

export const CreatePageEditor: React.FC<Props> = () => {

    const dispatch = useAppDispatch()
    const editor = useRef(null)
    const name = useState("")
    const content = useState("")
    const isVisibility = useState(false)

    const handleChange = () => {
        isVisibility[1](!isVisibility[0]);
    }
  
    return (
      <main>
        <h1>Создание новости</h1>
        <h2>Заголовок</h2>
        <Form.Control value={name[0]} onChange={(e) => name[1](e.target.value)} as="textarea" rows={3} />
        <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label={"Check this switch " + isVisibility[0]}
              checked={isVisibility[0]}
              onChange={() => handleChange()}
            />
        </Form>
        <h2>Teкст новости</h2>
        <JoditEditor
          ref={editor}
          value={content[0]}
          onBlur={(newContent) => content[1](newContent)}
        />
        <Button variant="warning" size="lg" onClick={() => {
            dispatch(postPage({
                name: name[0],
                html: content[0],
                visibility: true
              })
            )
          }}>
          <Link to="/pages">
            Создать
          </Link>
        </Button>
      </main>
    )
}
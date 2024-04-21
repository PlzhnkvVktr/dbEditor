import React, { useEffect, useRef, useState } from 'react'
import s from "./CreateNewsPage.module.css"
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'
import { useAppDispatch } from '../../hooks/redux';
import { postNews } from '../../store/reducers/ActionCreators';

type Props = {

}

export const CreateNewsPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const editor = useRef(null)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const config = {
    height: 600
  };


  return (
    <div className="App">
      <h1>Создание новости</h1>
      <h2>Заголовок</h2>
      <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} as="textarea" rows={3} />
      <h2>Teкст новости</h2>
      <JoditEditor
        ref={editor}
        value={content}
        // config={config}
        // onBlur={(event) => setContent(event)}
        onChange={(newContent) => setContent(newContent)}
      />
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      <Button variant="warning" size="lg" onClick={() => {
          dispatch(postNews({
              title: title,
              message: content
            })
          )
        }}>
        <Link to="/news">
          Создать
        </Link>
      </Button>
    </div>
  )
}
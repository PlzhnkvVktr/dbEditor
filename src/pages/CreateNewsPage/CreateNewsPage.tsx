import React, { useEffect, useRef, useState } from 'react'
import s from "./CreateNewsPage.module.css"
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { useAppDispatch } from '../../hooks/redux';
import { postNews } from '../../store/reducers/ActionCreators';

type Props = {

}

export const CreateNewsPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const editor = useRef(null)
  const [title, setTitle] = useState("Start writing")
  const [content, setContent] = useState("Start writing")
  const config = {
    height: 600
  };


  return (
    <div className="App">
      <h1>Создание новости</h1>
      <h2>Заголовок</h2>
      <JoditEditor
        ref={editor}
        value={title}
        // config={config}
        // onBlur={(event) => setContent(event)}
        onChange={(newContent) => setTitle(newContent)}
      />
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
        <Link to="/">
          Создать
        </Link>
      </Button>
    </div>
  )
}
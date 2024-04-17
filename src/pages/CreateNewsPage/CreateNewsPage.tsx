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
  const [content, setContent] = useState("Start writing")
  const config = {
    readonly: false,
    height: 400
  };
  // const handleUpdate = (event) => {
  //   const editorContent = event.target.innerHTML
  //   setContent(editorContent)
  // };

  const [news, setNews] = useState({
    title: "sdfsdfsd",
    message: content
  })

  return (
    <div className="App">
      <h1>React Editors</h1>
      <h2>Start editing to see some magic happen!</h2>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(event) => setContent(event)}
        onChange={(newContent) => {}}
      />
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      <Button variant="warning" size="lg" onClick={() => {
        console.log(news)
        dispatch(postNews(news))
        }}>
        <Link to="/">
          Создать
        </Link>
      </Button>
    </div>
  )
}
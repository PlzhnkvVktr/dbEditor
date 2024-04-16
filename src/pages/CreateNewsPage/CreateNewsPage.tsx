import React, { useEffect, useRef, useState } from 'react'
import s from "./CreateNewsPage.module.css"
import JoditEditor from 'jodit-react';

type Props = {

}

export const CreateNewsPage: React.FC<Props> = () => {

  
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
    </div>
  )
}
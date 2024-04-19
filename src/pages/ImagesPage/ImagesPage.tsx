import React, { useEffect, useState } from 'react'
import s from './ImagesPage.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addImage, deleteImage, fetchImages } from '../../store/reducers/ActionCreators'
import { Button, Card } from 'react-bootstrap'

type Props = {

}

export const ImagesPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const {images, isLoading, error} = useAppSelector(state => state.imageReducer)
  const [selectedFile, setSelectedFile] = useState<File>()

  // const formData = new FormData()

  const handleChange = (event: { target: { files: any } }) => {
    setSelectedFile(event.target.files[0])
    console.log(event.target.files[0])
  }


  useEffect(() => {
    dispatch(fetchImages())
  }, [])
  
    return (
      <main>
        <input 
          className={s.file_input} 
          type="file" 
          // accept=".png"
          onChange={handleChange} 
        />
        <Button 
          variant="outline-primary" 
          size="lg"
          onClick={() => {
            dispatch(addImage(selectedFile))
          }}
        >
          Добавить
        </Button>
        <p>{selectedFile?.name}</p>
        <div className={s.images_container}>
          {
            images.map((item, key) => 
              // <div className={s.image_item} key={key}>
              //   <img src={"http://127.0.0.1:8080/" + item.src} />
              // </div>
              <Card key={key} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"http://127.0.0.1:8080/" + item.src} />
                <Card.Body>
                  <Card.Title>{item.src.substr(7)}</Card.Title>
                  <Button 
                    variant="danger" 
                    onClick={() => {
                      dispatch(deleteImage(item.id))
                      // dispatch(addImage1(item.id))
                    }
                    }
                  >Удалить</Button>
                </Card.Body>
              </Card>
            )
          }
        </div>
      </main>
    )
}

import React, { useEffect, useMemo, useRef, useState } from 'react'
import s from './ImagesPage.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addImage, deleteImage, fetchImages } from '../../store/reducers/ActionCreators'
import { Button, Card } from 'react-bootstrap'
import { API_URL } from '../../const/const'

type Props = {

}

export const ImagesPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const {images, isLoading, error} = useAppSelector(state => state.imageReducer)
  const [selectedFile, setSelectedFile] = useState<File>()
  const filePicker = useRef<any>(null)
  const [valueInput, setValueInput] = useState('')

	const filteredImages = images.filter(e => 
		e.src.toLowerCase().includes(valueInput.toLowerCase())
	)

  const handlerInput = () => {
    filePicker.current.click()
  }

  const deleteItem = async (id: string) => {
    await dispatch(deleteImage(id))
    await dispatch(fetchImages())
  }
  
  const handleChange = (event: { target: { files: any } }) => {
    setSelectedFile(event.target.files[0])
    console.log(event.target.files[0])
  }

  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Текст успешно скопирован в буфер обмена!');
    } catch (err) {
      console.error('Ошибка:', err);
    }
  }

  useEffect(() => {
    if (selectedFile?.name) {
      dispatch(addImage(selectedFile))
    }
  }, [selectedFile?.name])

  useEffect(() => {
    dispatch(fetchImages())
  }, [selectedFile?.name])
  
    return (
      <main>
        <input 
          className={s.file_input} 
          type="file" 
          ref={filePicker}
          // accept=".png"
          onChange={handleChange} 
        />
          <div className={s.searchContainer}>
			    	<form className={s.searchForm}>
			    		<input
			    			type="text" 
			    			placeholder="Введите название"
			    			onChange={(e) => setValueInput(e.target.value)}
			    		/>
			    	</form>
			    </div>
        <div className={s.images_container}>
          <button className='add_item' onClick={() => handlerInput()}>+</button>
          {
            filteredImages.map((item, key) => 
              <Card key={key} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={API_URL + item.src} />
                <Card.Body>
                  <Card.Title>{item.src.substr(7)}</Card.Title>
                  <Button 
                    variant="danger" 
                    onClick={() => deleteItem(item.id)}
                  >Удалить</Button>
                  <Button 
                    variant="primary" 
                    onClick={() => {
                      copyTextToClipboard(`${API_URL}${item.src}`)
                    }
                    }
                  >Копировать ссылку</Button>
                </Card.Body>
              </Card>
            )
          }
        </div>
      </main>
    )
}

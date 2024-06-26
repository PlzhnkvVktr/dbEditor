import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useAppDispatch } from '../../hooks/redux';
import { postNews } from '../../store/reducers/ActionCreators';
import { RichText } from '../../components/RichText/RichText';
import { ButtonLink } from '../../components/ButtonLink/ButtonLink';

type Props = {

}

export const CreateNewsPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const title = useState("")
  const content = useState("")

  return (
    <main>
      <h1>Создание новости</h1>
      <h2>Заголовок</h2>
      <Form.Control value={title[0]} onChange={(e) => title[1](e.target.value)} as="textarea" rows={3} />
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
        />
    </main>
  )
}
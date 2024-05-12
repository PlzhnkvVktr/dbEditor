import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Loader } from '../LoaderPage/LoaderPage'
import { ListItem } from '../../components/ListItem/ListItem'
import { IPage } from '../../models/IPage'
import { Link } from 'react-router-dom'
import { deletePage, fetchPages } from '../../store/reducers/ActionCreators'

type Props = {

}

export const PagesListEditorPage: React.FC<Props> = () => {

  const dispatch = useAppDispatch()
  const {pages, isLoading, error} = useAppSelector(state => state.pageReducer)

  const deleteItem = async (id: string) => {
    await dispatch(deletePage(id))
    await dispatch(fetchPages())
  }

  useEffect(() => {
    dispatch(fetchPages())
  }, [])

  if (isLoading) return <Loader />
  if (error) return <h1>{error}</h1>

    return (
      <main>
        {pages.map((item, key) => 
          <ListItem
            item={item as IPage}
            path='page'
            key={key}
            action={() => deleteItem(item.id)}
          />
        )}
        <button className='add_item'>
          <Link to="/page-create">
            +
          </Link>
        </button>
      </main>
    )
}
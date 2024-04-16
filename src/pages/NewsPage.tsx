import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchNewsItem } from "../store/reducers/ActionCreators"

type Props = {
    
}

export const NewsPage: React.FC<Props> = () => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const {newsItem, isLoading, error} = useAppSelector(state => state.newsItemReducer)

    useEffect(() => {
      dispatch(fetchNewsItem(params.id as string))
    }, [])

      return (
        <div>
            <div>
                <h2>{newsItem.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: newsItem.message }} />
            </div>
        </div>
    )
}
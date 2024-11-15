import { Spinner } from "react-bootstrap"
import s from "./ListItem.module.css"
import { Link } from "react-router-dom"

type Props = {
    item: any,
    path: string,
    key: number,
    action?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

export const ListItem: React.FC<Props> = ({item, path, key, action}) => {
    return (
        <div className={s.item_container} key={key}>
          <div className={s.item_title}>
            <h2>
              <Link to={`/${path}-edit/${item.id}`}>{item.name || item.title}</Link>
            </h2>
          </div>
          <div>
            <button className={s.edit_button}><Link to={`/${path}-edit/${item.id}`}>&#128396;</Link></button>
            <button onClick={action} className={s.edit_button}>&#128465;</button>
          </div>
        </div>
    )
}
import { Spinner } from "react-bootstrap"
import s from "./LoaderPage.module.css"


export const Loader: React.FC = () => {
    return (
        <main> 
            <Spinner className={s.loader} />
        </main>
    )
}
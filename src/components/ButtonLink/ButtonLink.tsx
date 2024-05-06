import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

type Props = {
    text: string
    link: string
    disabled: boolean
    onClick: () => void
}

export const ButtonLink: React.FC<Props> = ({text, link, disabled, onClick}) => 
    <Button 
        className="button_link"
        disabled = {disabled} 
        variant = "success" 
        size = "lg" 
        onClick = {onClick}
    >
      <Link to={link}>
          {text}
      </Link>
    </Button>
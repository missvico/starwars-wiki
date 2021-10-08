import Button from 'react-bootstrap/Button'
import './button.css'

export default ({text, variant, onClick})=>{
    return(
        <Button className="myButton" variant={variant} type="button" onClick={onClick}>
            {text}
        </Button>
    )
}
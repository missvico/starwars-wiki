import Form from 'react-bootstrap/Form';
import MyButton from '../../common/Button/index';
import './style.css';

export default ({onChangeName, onChangeEmail, onChangePassword, onChangeMessage, onClick}) => {
    return(
        <Form>
        <Form.Group className="mb-3 special">
            <Form.Label>Name</Form.Label>
            <Form.Control className="special-form" type="text" placeholder="Name" name="name" onChange={onChangeName}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" onChange={onChangeEmail}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={onChangePassword}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={onChangeMessage} />
        </Form.Group>
        <MyButton variant="primary" type="button" onClick={onClick}>
            Submit
        </MyButton>
        </Form>
    )
}

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './BasicForm.css';


export default function BasicForm(props) {

    

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Nosotros no compartiremos nunca tu email.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Nombres</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Enter Surname" />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
// this form will take several props and will be used by PetCreate and PetUpdate
// the action will be dependent upon the parent component (update or create)
// but the form itself will be the same

import { Form, Button, Container } from 'react-bootstrap'

const PetForm = (props) => {
    const { pet, handleSubmit, handleChange } = props

    return (
        <Container>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={pet.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                        type="text"
                        name="type"
                        value={pet.type}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        name="age"
                        value={pet.age}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="Adoptable?"
                        name="adoptable"
                        defaultChecked={pet.adoptable}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default PetForm
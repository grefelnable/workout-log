import "./App.css"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">🏋🏽‍♂️ Workout Log</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      {/* Workout inputs */}
      <div className="input__container mb-3">
        <FloatingLabel
          controlId="floatingInput"
          label="Workout Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Workout name" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Sets"
          className="mb-3"
        >
          <Form.Control type="number" placeholder="Sets" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Reps for Each Set"
          className="mb-3"
        >
          <Form.Control type="number" placeholder="Reps for Each Set" />
        </FloatingLabel>
        {/* Add or Update Button */}
        <div className="text-center">
          <Button variant="primary" className="fa-align-center">
            Add/Update
          </Button>
        </div>
      </div>
      {/* end of Workout inputs */}
      {/* table */}
      <Container>
        <Table striped bordered hover variant="dark" className="text-center">
          <thead>
            <tr>
              <th>Date</th>
              <th>Workout Name</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>September 13</td>
              <td>Bench Press</td>
              <td>4</td>
              <td>12</td>
              <td>
                <div className="btn-container">
                  <Button variant="success">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>September 13</td>
              <td>Bicep Curl</td>
              <td>4</td>
              <td>12</td>
              <td>
                <div className="btn-container">
                  <Button variant="success">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default App

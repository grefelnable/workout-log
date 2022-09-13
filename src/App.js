import "./App.css"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">🏋🏽‍♂️Workout Log</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      {/* Workout inputs */}
      <div className="input__container">
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
        <FloatingLabel controlId="floatingInput" label="Reps for Each Set">
          <Form.Control type="number" placeholder="Reps for Each Set" />
        </FloatingLabel>
      </div>
      {/* end of Workout inputs */}
    </>
  )
}

export default App

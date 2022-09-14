import "./App.css";
import AddWorkout from "./components/AddWorkout";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">🏋🏽‍♂️ Workout Log</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <AddWorkout />
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
  );
}

export default App;

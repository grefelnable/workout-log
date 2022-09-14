import "./App.css";
import AddWorkout from "./components/AddWorkout";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import WorkoutList from "./components/WorkoutList";

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
      <WorkoutList />
    </>
  );
}

export default App;

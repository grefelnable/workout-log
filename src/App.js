import "./App.css";
import AddWorkout from "./components/AddWorkout";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import WorkoutList from "./components/WorkoutList";
import { useState } from "react";

function App() {
  const [workoutId, setWorkoutId] = useState("");

  const getWorkoutIdHandler = (id) => {
    console.log("The ID of document to be edited", id);
    setWorkoutId(id);
  };

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
      <WorkoutList getWorkoutId={getWorkoutIdHandler} />
    </>
  );
}

export default App;

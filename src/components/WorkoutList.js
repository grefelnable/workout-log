import React, { useEffect, useState } from "react";
import { Button, Table, Container } from "react-bootstrap";
import WorkoutDataService from "../services/workout.services";

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  //useeffect
  useEffect(() => {
    getWorkouts();
  }, []);
  //
  const getWorkouts = async () => {
    const data = await WorkoutDataService.getAllWorkout();
    setWorkouts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
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
          {workouts.map((doc) => {
            const { id, created, workout, sets, reps } = doc;
            return (
              <tr key={id}>
                <td>{created}</td>
                <td>{workout}</td>
                <td>{sets}</td>
                <td>{reps}</td>
                <td>
                  <div className="btn-container">
                    <Button variant="success" onClick={(e) => getWorkoutId(id)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={(e) => deleteHandler(id)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default WorkoutList;

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
      <pre>{JSON.stringify(workouts, undefined, 2)}</pre>
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
          {workouts.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{doc.created}</td>
                <td>{doc.workout}</td>
                <td>{doc.sets}</td>
                <td>{doc.reps}</td>
                <td>
                  <div className="btn-container">
                    <Button variant="success">Edit</Button>
                    <Button variant="danger">Delete</Button>
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

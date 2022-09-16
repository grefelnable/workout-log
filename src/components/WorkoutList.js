import React, { useEffect, useState } from "react";
import { Button, Table, Container, Modal } from "react-bootstrap";
import WorkoutDataService from "../services/workout.services";

const WorkoutList = ({ getWorkoutId }) => {
  const [workouts, setWorkouts] = useState([]);
  //Popup if user wants to delete
  const [popup, setPopup] = useState({ show: false, id: null });
  //useffect to fetch data from firestore
  useEffect(() => {
    getWorkouts();
  }, []);
  // fetch data from firestore function
  const getWorkouts = async () => {
    const data = await WorkoutDataService.getAllWorkout();
    setWorkouts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  //Popup show and hide
  const handlePopup = (id) => setPopup({ show: true, id });
  const handleCancel = () => setPopup({ show: false, id: null });
  //Delete a workout
  const deleteHandler = async () => {
    await WorkoutDataService.deleteWorkout(popup.id);
    getWorkouts();
    setPopup({ show: false, id: null });
  };
  return (
    <Container>
      <Modal show={popup.show} onHide={handleCancel}>
        <Modal.Body>Are you sure you want to delete workout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteHandler}>
            OK
          </Button>
          <Button variant="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="mb-3">
        <Button variant="dark edit" onClick={getWorkouts}>
          Refresh List
        </Button>
      </div>
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
                    <Button variant="danger" onClick={(e) => handlePopup(id)}>
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

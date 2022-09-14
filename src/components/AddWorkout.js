import React from "react";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddWorkout = () => {
  const [workout, setWorkout] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  return (
    <>
      <Form className="input__container mb-3">
        <FloatingLabel
          controlId="floatingInput"
          label="Workout Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Workout name" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Sets" className="mb-3">
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
      </Form>
    </>
  );
};

export default AddWorkout;

import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddWorkout = () => {
  return (
    <>
      {/* Workout inputs */}
      <Form className="input__container mb-3">
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
      </Form>
      {/* end of Workout inputs */};
    </>
  );
};

export default AddWorkout;

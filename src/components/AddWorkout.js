import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import WorkoutDataService from "../services/workout.services";

const AddWorkout = () => {
  const [workout, setWorkout] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  //Catch error message
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Setting error if fields are not filled.
    setMessage("");
    if (workout === "" || sets === "" || reps === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    // Date as timestamp for the workout made
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date();
    const formatDate = date.toLocaleDateString("en-US", options);

    const newWorkout = {
      workout,
      sets,
      reps,
      created: formatDate,
    };
    try {
      await WorkoutDataService.addWorkout(newWorkout);
      setMessage({ error: false, msg: "New workout added successfully!" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setWorkout("");
    setSets("");
    setReps("");
  };
  return (
    <>
      {message?.msg && (
        <Alert
          className="input__container mb-3"
          variant={message?.error ? "danger" : "success"}
          dismissible
          onClose={() => setMessage("")}
        >
          {message?.msg}
        </Alert>
      )}
      <Form className="input__container mb-3" onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Workout Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Workout name"
            value={workout}
            onChange={(e) => setWorkout(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Sets" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Sets"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Reps for Each Set"
          className="mb-3"
        >
          <Form.Control
            type="number"
            placeholder="Reps for Each Set"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </FloatingLabel>
        {/* Add or Update Button */}
        <Button
          type="submit"
          variant="primary"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Add/Update
        </Button>
      </Form>
    </>
  );
};

export default AddWorkout;

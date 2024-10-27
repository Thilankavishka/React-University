import Form from "react-bootstrap/Form";
import React from "react";

const Darkmood = ({ handleTheme }) => {
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Dark Theme"
        onClick={handleTheme}
        className="relative p-1 mt-5"
      />
    </Form>
  );
};

export default Darkmood;

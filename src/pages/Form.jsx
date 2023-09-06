import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
    console.log(firstName);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
    console.log(lastName);
  }
  function handleReset() {
    setFirstName("");
    setLastName("");
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstName}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastName}
      />
      <h1>
        Hi, {firstName} {lastName}, Welcome to the Westworld
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
};

export default Form;

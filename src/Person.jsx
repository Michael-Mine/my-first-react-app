import { useState } from "react";

export function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  const fullName = firstName + " " + lastName;

  return (
    <>
      <input
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <h1>{fullName}</h1>

      {/* <h1>{person.name}</h1> */}
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

import React from "react";

const Persons = ({ persons, filter }) => {
  const personsToShow = !filter
    ? persons
    : persons.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <div>
      {personsToShow.map(({ name, number }) => (
        <li key={name}>
          {name} {number}
        </li>
      ))}
    </div>
  );
};

export default Persons;

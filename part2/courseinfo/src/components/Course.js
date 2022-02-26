import React from "react";

const Header = ({ courseName }) => {
  return <h2>{courseName}</h2>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, i) => (
        <Part key={i} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      <strong>
        {`total of ${parts.reduce(
          (accumlator, current) => accumlator + current.exercises,
          0
        )} exercises`}
      </strong>
    </p>
  );
};

const Course = ({ course }) => {
  const { name, parts } = course;

  return (
    <>
      <Header courseName={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default Course;

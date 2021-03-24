import React from "react";

const Employee = ({ name, age }) => {
  return (
    <div>
      <h3>
        My name is: {name} and my age is : {age}
      </h3>
    </div>
  );
};

export default Employee;

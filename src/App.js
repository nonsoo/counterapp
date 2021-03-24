import Counter from "./Components/Counter";
import Employee from "./Components/Employee";

function App() {
  const EmployeeInfo = [
    {
      id: 1,
      name: "bob",
      salary: 253452,
      age: 23,
    },
    {
      id: 2,
      name: "sharon",
      salary: 2142232,
      age: 43,
    },
    {
      id: 3,
      name: "jane",
      salary: 235543442,
      age: 26,
    },
  ];

  return (
    <div className="App">
      <Counter />
      <Employee name="name" age="23" />
      <p>
        Below is going to be the employee object that is passed through the lst
        of objects in Employee info
      </p>
      {EmployeeInfo.map((employee) => {
        const { id, name, age } = employee;
        return <Employee key={id} name={name} age={age} />;
      })}
      <br></br>
      <p>below is a example of spreading</p>
      {EmployeeInfo.map((employee) => {
        return <Employee key={employee.id} {...employee} />;
      })}
    </div>
  );
}

export default App;

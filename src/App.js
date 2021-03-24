import { useState } from "react";
import Counter from "./Components/Counter";
import Employee from "./Components/Employee";

function App() {

  const EmployeeInfo = [
    {
      id:1
      name:"bob"
      salary:2342
    }
      {
      id:2
      name:"bob"
      salary:2342
    }
        {
      id:3
      name:"bob"
      salary:2342
    }
  ]


  return (
    <div className="App">
      <Counter />
      <Employee sampleName = "this is a sample name" age="23"/>
      
    </div>
  );
}

export default App;

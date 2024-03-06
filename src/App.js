//************* parent to child *//
// import FunProps from './Props/FunProps'
// const App = () => {
//   const name="shweta"
//   const age=24
//   return (
//     <div>
      
//       <FunProps name={name} age={age} />
//       <FunProps name="shweta" age="23" />
      
//           </div>
//   )
// }

// export default App

// ****change the state (parent to child)****

// import React, { useState } from 'react';
// import Child from './parent_child/Child'

// function App() {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <p>Count: {count}</p>
//       <Child count={count} onIncrement={handleIncrement} />
//     </div>
//   );
// }

// export default App;

//**************** */ context hooks********************

// import React,{createContext}from 'react'
// import ChildA from './Usecontext/ChildA'
// const data1=createContext()
// const data2=createContext()  
// const App = () => {
//   const name = "shweta"
//   const age =24
//   return (
//     <div>
//       <data1.Provider value={name} >
//         <data2.Provider value={age}>
//           <ChildA/>
//         </data2.Provider>
//       </data1.Provider>      
//     </div>
//   )
// }
// export{data1, data2}
// export default App


//***********************Material Ui************* */

import React from 'react';
import RegistrationForm from './Material_UI/RegistrationForm';

function App() {
  return (
    <div className="App">
      <RegistrationForm />
    </div>
  );
}

export default App;

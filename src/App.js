// import React from "react";
// import List from "./components/Unique_list/List";
// import Card from "./components/Card";
// import Card2 from "./components/Card2";
// import Data from "./data.json";
// import "./components/index.css";

// function App() {
//   return (
//     <div>
//       <h1 className="headingStyle">Todo App</h1>
//       {Data.map((item, index) => (
//         <Card key={index} title={item.Title} wordDesc={item.Desc} />
//       ))}
//     </div>
//   );
// }
// export default App;

// unique id
// export default function App() {
//   return (
//     <>
//       <List />
//     </>
//   );
// }

// nested map():
// import React from "react";
// const users = [
//   {
//     FullName: "Shagor Mia",
//     Age: 23,
//     Phones: [{ Home: "012345" }, { office: "0156778" }],
//   },

//   {
//     FullName: "Opu Mia",
//     Age: 24,
//     Phones: [{ Home: "012345" }, { office: "0156778" }],
//   },
// ];
// export default function App() {
//   return (
//     <div>
//       <h1>Nested mapping</h1>
//       {users.map((user, index) => (
//         <article key={index}>
//           <h3>FullName: {user.FullName}</h3>
//           <p> Age: {user.Age}</p>

//           {user.Phones.map((phone, index) => (
//             <div key={index}>
//               <p>Home:{phone.Home}</p>
//               <p>Office:{phone.office}</p>
//             </div>
//           ))}
//         </article>
//       ))}
//     </div>
//   );
// }

// class components:
// function App() {
//   return (
//     <div>
//       <Card2 name="Sagor mia" Desc="trying his best of best" />
//     </div>
//   );
// }
// export default App;

// react icons:
// import { FaFacebook, FaAmazon, FaAmazonPay } from "react-icons/fa";
// export default function App() {
//   return (
//     <div>
//       <h3>Welcome to react</h3>
//       <span>
//         <FaFacebook className="icon" />
//       </span>
//       <span>
//         <FaAmazon className="icon" />
//       </span>
//       <span>
//         <FaAmazonPay className="icon" />
//       </span>
//     </div>
//   );
// }

// connecting to bootstrap:
// import ReactBootstrap from "./components/React_Bootstrap/ReactBootstrap";
// export default function App() {
//   return (
//     <div>
//       <ReactBootstrap />
//     </div>
//   );
// }

// state,setState,Eventhandler:
// import React from "react";
// import STATE from "./STATE";
// export default function App() {
//   return (
//     <div>
//       <STATE />
//     </div>
//   );
// }

// Conditional rendering:ternary,short circuit
// import React from "react";
// import Index from "./CONDITIONAL_RENDERING/Index";
// export default function App() {
//   return (
//     <div>
//       <Index />
//     </div>
//   );
// }

// eventHandler:onchange,onClick
// import React from "react";
// import EVENThandlerClass from "./EVENThandlerClass";

// export default function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <EVENThandlerClass />
//     </div>
//   );
// }

// EventBinding:
// import React from "react";
// import EVENTbinding from "./EVENTbinding";
// export default function App() {
//   return (
//     <div>
//       <EVENTbinding />
//     </div>
//   );
// }

//React Hooks(useState):functional Component.
// import React from "react";
// import Index1 from "./Hooks-UseState/index1";
// import Index2 from "./Hooks-UseState/index2";
// import UpdateHooks from "./Hooks-UseState/updateHook";

// export default function App() {
//   return (
//     <div>
//       {/* <Index1 /> */}
//       {/* <Index2 /> */}
//       {/* <UpdateHooks /> */}
//     </div>
//   );
// }

// EventBubbling:
// import React from "react";
// import Event from "./EventBubbling/Evnt";
// export default function App() {
//   return (
//     <div>
//       <Event />
//     </div>
//   );
// }

//form: controlled components
// import React from "react";
// import Form from "./components/FORM/Form";
// export default function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }

//form: useState&Object
// import React from "react";
// import Form2 from "./components/FORM/UseState&Object";

// export default function App() {
//   return (
//     <div>
//       <Form2 />
//     </div>
//   );
// }

//passing data child to parent component:state lifting
// import React, { useState } from "react";
// import Child from "./components/STATE_LIFTING/Child";

// export default function App() {
//   const data = "i am from parent(app)";
//   const [childData, setChildData] = useState("");

//   const GetChild = (data2) => {
//     console.log(data2);
//     setChildData(data2);
//   };
//   return (
//     <div>
//       <Child data={data} onChild={GetChild} />
//       <p>{childData}</p>
//     </div>
//   );
// }

//more state lifting:
// import React from "react";
// import Todo1 from "./Todo/Todo1";
// import Todo2 from "./Todo/Todo2";
// export default function App() {
//   const HandleTodo2 = (todo) => {
//     console.log(todo);
//   };
//   return (
//     <div>
//       <Todo1 title="Learn everything" />
//       <Todo2 onTodo2={HandleTodo2} />
//     </div>
//   );
// }

// todo app1:
// import React from "react";
// // App.js->components->home.js(todos=["item1","item2"])->todos->todo
// // components->Newtodo
// import Home from "./components/TodoApp1/Home";
// export default function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

//formik package:
// import React from "react";
// import Signup from "./components/formik_FORM_validation/signUp";
// export default function App() {
//   return (
//     <div>
//       <Signup />
//     </div>
//   );
// }

// toggle:
// import React from "react";
// import Toggle from "./components/Toggle/Toggle";

// export default function App() {
//   return (
//     <div>
//       <Toggle />
//     </div>
//   );
// }

// Toggle FAQ:
// import React from "react";
// import FAQ from "./components/Toggle_FAQ/FAQ";

// export default function App() {
//   return (
//     <div>
//       <FAQ />
//     </div>
//   );
// }

// useEffect:
// import React from "react";
// import UseEffect from "./components/Hooks_UseEffect/UseEffect";
// export default function App() {
//   return (
//     <div>
//       <UseEffect />
//     </div>
//   );
// }

// useEffect Data fetch:
// import React from "react";
// import DataFetch from "./components/Hooks_UseEffect/DataFetch";

// export default function App() {
//   return (
//     <div>
//       <DataFetch />
//     </div>
//   );
// }

//CustomHooks:
// import React from "react";
// import DataFetchCustom from "./components/Hooks_UseEffect/Custom_hooks/Custom";

// export default function App() {
//   return (
//     <div>
//       <DataFetchCustom />
//     </div>
//   );
// }

// notification: using react-toastify
// import React from "react";
// import Toastify from "./components/toastify/React-toastify";

// export default function App() {
//   return (
//     <div>
//       <Toastify />
//     </div>
//   );
// }

//fragement:avoid div soup
// import React from "react";
// import Fragement from "./components/fragement/fragement";

// export default function App() {
//   return (
//     <>
//       <Fragement />
//     </>
//   );
// }

// props Type: built-in
// import React from "react";
// import Users from "./components/PropsType/Users";

// export default function App() {
//   return (
//     <>
//       <h1>PropsType</h1>
//       <Users />
//     </>
//   );
// }

//life-cycle of class component
// import React from "react";
// import Lifecycle from "./components/life_cycle/Lifecycle";

// export default function App() {
//   return (
//     <div>
//       <Lifecycle />
//     </div>
//   );
// }

//ref in class component:
// import React from "react";
// import Userform from "./components/RefExample/userForm";

// export default function App() {
//   return (
//     <div>
//       <h1>User Form</h1>
//       <Userform />
//     </div>
//   );
// }

//useRefHook: always try to avaid this method.it slow overall performance.
// import React from "react";
// import Useref from "./components/useRefHook/Useref";

// export default function App() {
//   return (
//     <div>
//       <h1>UseRefHook</h1>
//       <Useref />
//     </div>
//   );
// }

// useReducer hook:
// import React from "react";
// import Reducer from "./components/useRducerHook";

// export default function App() {
//   return (
//     <div>
//       <h1>UseReducer </h1>
//       <Reducer />
//     </div>
//   );
// }

//props drilling & useContext hook
// import React from "react";
// import Component1 from "./components/props_drilling/component1";

// export default function App() {
//   return (
//     <div>
//       <h1>Props drilling</h1>
//       <Component1 />
//     </div>
//   );
// }

//useContext hook API App:
// import React from "react";
// import Context from "./components/ContextApp/Context";

// export default function App() {
//   return (
//     <div>
//       <h1>useContext hook API App</h1>
//       <Context />
//     </div>
//   );
// }

//useReducer with Context API
// import React from "react";
// import Context2 from "./components/ContextAPIwithuseReducer/Context";

// export default function App() {
//   return (
//     <div>
//       <h1>useReducer with Context API</h1>
//       <Context2 />
//     </div>
//   );
// }

// react routing and usLocation hook,route parameter,querry parameter
// import React from "react";
// import { Routing } from "./components/react_Routing/pages/Routing";

// export default function App() {
//   return (
//     <div>
//       <h1>React Routing</h1>
//       <Routing />
//     </div>
//   );
// }

// import React from "react";
// import Index from "./components/ProtectedRouting/routes/index";

// export default function App() {
//   return (
//     <div>
//       <h1>Protected Routing</h1>
//       <Index />
//     </div>
//   );
// }

//create JSON server.
// import React from "react";
// import Users from "./components/JSON_database/Users";

// export default function App() {
//   return (
//     <div>
//       <h1>JSON</h1>
//       <Users />
//     </div>
//   );
// }

// page title setup
// import React from "react";

// export default function App() {
//   return (
//     <div>
//       <h1>Page Title Setup</h1>
//     </div>
//   );
// }

//react memo
// import React from "react";
// import Memo from "./components/memo/memo";

// export default function App() {
//   return (
//     <div>
//       <h1>React memo</h1>
//       <Memo />
//     </div>
//   );
// }

// useCallback hook
// import React from "react";
// import Memo from "./components/useCallback_hook/memo";

// export default function App() {
//   return (
//     <div>
//       <h1>useCallback Hook</h1>
//       <Memo />
//     </div>
//   );
// }

// useMemo Hook
import React from "react";
import Memo from "./components/useMemo_hook/memo";

export default function App() {
  return (
    <div>
      <h1>useMemo hook</h1>
      <Memo />
    </div>
  );
}

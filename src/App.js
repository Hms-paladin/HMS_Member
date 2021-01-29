// import React from "react";
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import HeaderLayout from "./component/Header/header.js";


// function App() {
//   return (
//     <HeaderLayout/>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';

// components path
import HeaderLayout from './component/Header/header'
var hashHistory = require('react-router-redux')
function App() {

  return (
   
        <HeaderLayout/>
        )
        }
        export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [
  { id: "todo-0", name: "Eat", complete: true},
  { id: "todo-1", name: "Sleep", complete: false},
  { id: "todo-2", name: "Repeat", complete: false},
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
)

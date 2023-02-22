import React from 'react'
import ReactDOM from 'react-dom/client'
import NoteList from './components/notelist'
import "./app.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteList></NoteList>
  </React.StrictMode>,
)

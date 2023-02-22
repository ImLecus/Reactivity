import React from 'react'
import ReactDOM from 'react-dom/client'
import NoteList from './components/notelist'
import Header from './components/header'
import "./app.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <NoteList />
  </React.StrictMode>,
)

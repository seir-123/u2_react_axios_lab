import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header'
import './App.css'
import { useEffect } from 'react'

function App() {
  
  return (
    <div className= "app">
      <BrowserRouter>
        <Main />
        <Header />
      </BrowserRouter>
    </div>
  )
}

export default App

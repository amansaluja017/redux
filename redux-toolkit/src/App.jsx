import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todo, AddTodo } from './components/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App

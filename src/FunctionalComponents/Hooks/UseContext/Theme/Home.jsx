import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Home = () => {
    const {darkmode, toggleTheme} = useContext(ThemeContext)
  return (
    <div>
      <h1>{darkmode ? 'darkmode' : 'lightmode'} </h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Home

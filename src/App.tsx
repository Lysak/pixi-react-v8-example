/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import { useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import PixiTest from './components/PixiTest'

function App() {
  const [count, setCount] = useState(0)
  const [showPixi, setShowPixi] = useState(false)

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank' rel='noopener'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noopener'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React + Pixi</h1>
      <div className='card'>
        <button onClick={() => setShowPixi(!showPixi)}>
          {showPixi ? 'Hide' : 'Show'} Pixi Example
        </button>
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ marginLeft: '10px' }}
        >
          count is {count}
        </button>
      </div>

      {showPixi && (
        <div className='pixi-container'>
          <h2>Pixi.js WebGL Example</h2>
          <p>Click the bunny sprite to interact!</p>
          <PixiTest />
        </div>
      )}
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

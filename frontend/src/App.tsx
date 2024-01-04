import { useState } from 'react'
import reactLogo from './assets/Rick_and_Morty.svg'
import './App.css'
import CustomSlider from '@/components/CustomSlider'
import { useGetCharactersQuery } from '@/hooks/useGetCharactersQuery'

function App() {
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState({})
  const [search, setSearch] = useState('')
  const {data}= useGetCharactersQuery(filter);
  const slderData = data.filter((item) => item.status === 'Alive') || [];
  return (
    <>
      <header className='Header'>
        <img src={reactLogo} className="App-logo" alt="React logo" />
      </header>
      <CustomSlider items={slderData}/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

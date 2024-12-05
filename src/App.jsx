import { useState,useEffect } from 'react'
import './App.css'
import { Card } from './components/Card'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { useWeather} from './context/weather'

function App() {
  const weather = useWeather();
  useEffect(()=>{
    console.log(weather.fetchCurrentUserLocationData())
  },[])

  return (
    <>
    <div className='App'>
      <h1>Wheather Forecast</h1>
      <Input/>
      <Button onClick={weather.fetchData} value="Search"/>
      <Card/>
      <Button value="Refresh"/>



    </div>
      
    </>
  )
}

export default App

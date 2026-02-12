import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [currency, setCurrency] = useState([])
 
  const [fromValue, setFromValue] = useState()
  const [toValue, setToValue] = useState()
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()



  const convertCurrency = () =>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
    .then(response=>response.json())
    .then(data=>{
      setToValue(fromValue * data[fromCurrency][toCurrency])
    })
  }

  useEffect(()=>{
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
    .then(response=>response.json())
    .then(data=>{
      
      setCurrency(data)
    })
   

  },[])

  return (
    <>
    
    <div className='main'>
      <div>
      <h1 id='heading'>Currency <br/ > Converter</h1>
      </div>

       
            

      <div className='card'>

        <div className='from'>
           <h1>From</h1>
           <div className='calculate'>
              <select className='select' onChange={(event)=>{setFromCurrency(event.target.value)}} >
                <option>Choose here</option>
                {Object.entries(currency).map(([key , value])=>
                  <option key={key} value={key}>
                      {value}
                  </option>
                )}
              </select>

              <input 
              className='inp'
              value={fromValue}
              onChange={(event)=>{setFromValue(event.target.value)}}
              />
           </div>

        </div>

        <button id='btn' onClick={convertCurrency}>calculate</button>

        <div className='To'>
           <h1>To</h1>
           <div className='calculate'>
              <select className='select' onChange={(event)=>{setToCurrency(event.target.value)}}>
                <option>Choose here</option>
                {Object.entries(currency).map(([key , value])=>
                  <option key={key} value={key}>
                      {value}
                  </option>
                )}
              </select>
              <input 
              className='inp'
              disabled
              value={toValue}
              onChange={(event)=>{setToValue(event.target.value)}} />
           </div>

        </div>

      </div>
            


    </div>

    </>
  )
}

export default App
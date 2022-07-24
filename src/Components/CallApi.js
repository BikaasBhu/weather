import {useState} from 'react'
import {Card, TextField, Button } from '@mui/material'
import './CallApi.css'
//import AddIcon from '@mui/icons-material/Add';
const CallApi = () =>{
  const [input, setInput] = useState('')
  const [data, setData] = useState('')
  const [cityName, setCityName] = useState()
  const fetchApi = async () =>{
    if (!input) {
      alert('fill')
    }else{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=862b05f14f00d218712da3bba053bd10`
      const res = await fetch(url)
      const fetchdata = await res.json()
      setData(fetchdata.main)
      setCityName(input)
    }
  }
  
  return(
    <>
    <div className='body'>
      <Card variant='outlined' className='card'>
        <h1 className='title'> Live search weather App </h1>
        <div className='flex'>
          <TextField className='input' onChange={(e) => setInput(e.target.value)} label='enter city name ' variant='outlined'/>
          <Button className='btn' variant='outlined' color='primary' onClick={fetchApi}>  search </Button>
        </div>
        <Card variant='outlined' className='data'>
          <h1 className='city'> {!input ? 'no city choosen' : cityName}</h1>
          <h1 className='temp'> {!data ? '___' : data.temp} deg.c</h1>
          <div className='row'>
            <h1 className='min_max'> min-temp {!data ? '____' : data.temp_min}  </h1>
            <h1> || </h1>
            <h1 className='min_max'> max-temp {!data ? '____' : data.temp_max} </h1>
          </div>
        </Card>
      </Card>
      </div>
    }
    </>
  )
}
export default CallApi
import logo from './logo.svg';
import './App.css';
import MultiSelectDrop from './components/MultiSelectDrop';
import Create from './components/Create';
import Modal from './components/Modal';
import { useEffect,useState } from 'react';
import Table from './components/Table';

function App() {
  const [breeds,setBreeds]=useState(null);
  const [loading, setloading]=useState(true);
  const endPointUrl='https://data.webdevinterviews.com/dogBreeds.json';
  
  useEffect(()=>{
    fetch(endPointUrl)
    .then(async (response)=>{
      const data=await response.json();
      console.log(data);
      setBreeds(data);
      setloading(false)
    }).catch((e)=>{
      console.log(e)
    })
  },[]);
  if(loading) return <div>Loading...</div>
  return (
    <div className='flex'>
    <Table breeds={breeds}/></div>
  );
}

export default App;

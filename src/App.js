import logo from './logo.svg';
import './App.css';
import MultiSelectDrop from './components/MultiSelectDrop';
import Create from './components/Create';
import Modal from './components/Modal';
import { useEffect,useState,useRef } from 'react';
import Table from './components/Table';
import FormInput from './components/FormInput';

function App() {
  // const [breeds,setBreeds]=useState(null);
  // const [loading, setloading]=useState(true);
  // const endPointUrl='https://data.webdevinterviews.com/dogBreeds.json';
  
  // useEffect(()=>{
  //   fetch(endPointUrl)
  //   .then(async (response)=>{
  //     const data=await response.json();
  //     console.log(data);
  //     setBreeds(data);
  //     setloading(false)
  //   }).catch((e)=>{
  //     console.log(e)
  //   })
  // },[]);
  // if(loading) return <div>Loading...</div>
  // 

  const [values,setValues]=useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  })
  
  const inputs = [
  {
    id:1,
    name:"username",
    type:"text",
    label:"Username",
    placeholder:"Username",
    errorMessage:"Username should be 3-16 characters and shouldn't include any special character",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true
  },
  {
    id:2,
    name:"email",
    type:"email",
    label:"Email",
    placeholder:"Email",
    required: true,
    errorMessage:"It sould be valid email address"
  },
  {
    id:3,
    name:"birthday",
    type:"date",
    label:"Birthday",
    placeholder:"Birthday",
    required: true,
    errorMessage:""
  },
  {
    id:4,
    name:"password",
    type:"password",
    label:"Password",
    placeholder:"Password",
    required: true,
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    errorMessage:"Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character"
  },
  {
    id:5,
    name:"confirmPassword",
    type:"password",
    label:"confirm Password",
    placeholder:"confirm Password",
    required: true,
    pattern:values.password,
    errorMessage:"Passwords dont match!"
  }
]
  //console.log(userName);
  const usernameRef=useRef();  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }
  function onChange(e){
    setValues({...values,[e.target.name]:e.target.value})
  }
  console.log(values)
  return (
    <div className='app'>
      
      <form onSubmit={handleSubmit}><h1>Register</h1>
      {
        inputs.map((input)=>(
          <FormInput 
          key={input.id} 
          {...input} 
          value={values[input.name]} 
          onChange={onChange}/>
        ))
      }
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

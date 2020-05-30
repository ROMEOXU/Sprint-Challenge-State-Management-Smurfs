import React,{useContext,useState} from 'react';
import {SmurfContext} from './context';
export default function Form() {
 const [data,postSmurf]=useContext(SmurfContext);
 const [smurf,setSmurf]=useState({
     name:'',
     age:'',
     height:'',
     id:Date.now()
    })
 const handleChange = (e)=>{
   setSmurf({...smurf,[e.target.name]:e.target.value})
 }
    return (
        <div>
        <form onSubmit={()=>postSmurf(smurf)}>
            <input type ='text'name='name' placeholder='name' value={smurf.name} onChange={handleChange}/>
            <input type ='text'name='age' placeholder='age' value={smurf.age} onChange={handleChange}/> 
            <input type ='text'name='height'placeholder='height' value={smurf.height} onChange={handleChange}/>           
            <button>Post</button>
        </form>
        </div>
    )
}

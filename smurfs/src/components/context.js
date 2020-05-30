import React, {createContext,useEffect,useState} from "react";
import axios from 'axios';
export const SmurfContext = createContext();


export const SmurfProvider =(props)=>{
const [data,setData]=useState([]);
    useEffect(()=>{
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res=>{console.log('axios',res);
     setData(res.data)})
    .catch(err=>console.log(err))
},[]);
const postSmurf = (item)=>{
    axios
    .post(`http://localhost:3333/smurfs`,item)
    .then(res=>console.log('post',res))
    .catch(err=>console.log(err))

}
return (
    <SmurfContext.Provider value={[data,postSmurf]}>{props.children}</SmurfContext.Provider>
)
}
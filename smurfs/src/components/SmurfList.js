import React,{useContext} from 'react';
import {SmurfContext} from './context';
import SmurfListItem from './smurflistitem';
export default function SmurfList() {
 const [data]= useContext(SmurfContext);
    return (
        <div>
            {data.map((e,index)=>(<div key={index}><SmurfListItem item={e}/></div>))}
        </div>
    )
}

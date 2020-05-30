import React from 'react'

export default function smurflistitem(props) {
    return (
        <div>
           <li>{props.item.name} </li>
           <li>{props.item.age} </li>
           <li>{props.item.height} </li>
        </div>
    )
}

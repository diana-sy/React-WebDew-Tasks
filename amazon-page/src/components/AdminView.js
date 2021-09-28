import React, { useState } from 'react'

export default function AdminView(props){

  const [newItemDescription, setNewItemDescription] = useState("");
  const [newItemSeller, setNewItemSeller] = useState(""); 
  const [newItemShipping, setNewItemShipping] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemArrives, setNewItemArrives] = useState("");
  



const addNewItem = ()=> {
    props.addNewItem(newItemDescription,newItemSeller,newItemPrice,newItemShipping,newItemArrives);
}

const onDeleteItemClick = (itemId) =>{ 
    console.log('it works!'+itemId);
    props.deleteItem(itemId);
}

    return(
<div>
    <div>
   <h1> Add new item</h1>
     <div> 
       Description <input type="text" onChange={(event)=> setNewItemDescription(event.target.value)} />
       </div> 
       <div> 
       Seller <input type="text" onChange={(event)=> setNewItemSeller(event.target.value)}/>
       </div> 
       <div> 
       Price $ <input type="number" min="0" onChange={(event)=> setNewItemPrice(event.target.value)}/>
       </div> 
       <div> 
       Shipping $<input type="number" min="0" onChange={(event)=> setNewItemShipping(event.target.value)}/>
       </div> 
       <div> 
        Arrives <input type="text" onChange={(event)=> setNewItemArrives(event.target.value)} />
       </div>
       <button onClick={ addNewItem }>Add Item</button>

        </div>
        <button onClick={ props.disableAdminMode }>Disable Admin Mode</button>

        <h1>List of items</h1>
        {props.items.map(item => 
        <div>
            <button onClick={()=>onDeleteItemClick(item.id)}>Delete</button>{item.description}, {item.seller}, {item.price}, 
        {item.shipping}, {item.arrives}</div>)}
    </div>

    )
}
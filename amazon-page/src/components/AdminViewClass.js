import React from 'react';

class AdminView extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
        
            newItemDescription:"",
            newItemSeller:"",
            newItemPrice:"",
            newItemShipping:"",
            newItemArrives:"",
            // newItemImage:"",
          }
    }

    addNewItem = ()=> {
this.props.addNewItem(this.state.newItemDescription, this.state.newItemSeller, 
    this.state.newItemPrice, this.state.newItemShipping, this.state.newItemArrives);
    }
 render() {
    return(
        <div>
    <div>
    Add new item
     <div> 
       Description <input type="text" onChange={(event)=> this.setState({newItemDescription:event.target.value})} />
       </div> 
       <div> 
       Seller <input type="text" onChange={(event)=> this.setState({newItemSeller:event.target.value})}/>
       </div> 
       <div> 
       Price $ <input type="number" min="0" onChange={(event)=> this.setState({newItemPrice:event.target.value})}/>
       </div> 
       <div> 
       Shipping $<input type="number" min="0" onChange={(event)=> this.setState({newItemShipping:event.target.value})}/>
       </div> 
       <div> 
        Arrives <input type="text" onChange={(event)=> this.setState({newItemArrives:event.target.value})} />
       </div>
       <button onClick={ this.addNewItem }>Add Item</button>

        </div>
        <button onClick={ this.props.disableAdminMode }>Disable Admin Mode</button>
    </div>

    

    )
}
}

export default AdminView;
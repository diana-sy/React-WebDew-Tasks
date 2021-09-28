import React from "react";
import Title from './components/Title.js';
import ShoppingList from './components/ShoppingList.js';
import styles from './App.module.css';
import './App.css';

class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }
    // addSomeCarrots=()=>{
    //   this.setState({items:[...this.state.items,{id: this.state.items.length +1, value:"carrots", qty: 9, unit:"pcs"}]});
    // }

    // addSomeYogurt=()=>{
    //   this.setState({items:[...this.state.items,{id: this.state.items.length +1, value:"yogurt", qty: 10, unit: "ltr"}]});

    // }

    // addSomeStrawberry=()=>{
    //   this.setState({items:[...this.state.items,{id: this.state.items.length +1, value:"strawberry", qty: 20, unit:"pcs"}]});

    // }

    // addSomeBeer=()=>{
    //   this.setState({items:[...this.state.items,{id: this.state.items.length +1, value:"beer", qty: 9, unit: "ltr"}]});

    // }

    addSomeStuff=(stuffDescription, quantity)=>{
      return()=> {
       const searchResult =this.state.items.findIndex ((element, index, array)=>{
         if (element.value=== stuffDescription) {
           return true;
         } else{
           return false;
         }
       }); 
       if(searchResult != -1) {
         console.log("succes, element with index" +searchResult +"is matching");
        let newItems = [...this.state.items];
        newItems[searchResult].qty+= quantity;

        this.setState({items: newItems});
        
       }else {
         console.log("no");
                  
         this.setState({
         items:
          [...this.state.items,
            {
              id:this.state.items.length +1, 
              value: stuffDescription, 
              qty: Math.floor(Math.random() * quantity),
              unit:this.state.items.unit

            
      }]
    });
    }

    }
  }

    deleteItem=(idToBeDeleted)=>{
      console.log("delete item"+idToBeDeleted);
      // let newItems = this.state.items.filter(item=>item.id === idToBeDeleted);
      // this.setState({items: newItems});


      let indexToDelete= this.state.items.findIndex (item => item.id === idToBeDeleted);

      if(indexToDelete !==-1){
        let newItems = [...this.state.items];
        newItems.splice( indexToDelete, 1 );
        this.setState({items: newItems});
      }
      
    } 
     

    render()
    {
      const { applicationDescription, applicationName } = this.props;
      return <div className={ styles.shoppingList }>
        <Title 
          applicationDescription={ applicationDescription }
          applicationName={ applicationName }
        />
        <ShoppingList items={ this.state.items } deleteItem={ this.deleteItem }/> 
         
        <button onClick={this.addSomeStuff("Carrot",9,"pcs")}>Carrot</button>
        <button onClick={this.addSomeStuff("Yogurt",10,"ltr")}>Yogurt</button>
        <button onClick={this.addSomeStuff("Strawberry",20,"pcs")}>Strawberry</button>
        <button onClick={this.addSomeStuff("Beer",9,"ltr")}>Beer</button>


        {/* <button onClick={() =>this.addSomeStuff("Carrot",5)}>Carrot</button>
        <button onClick={() =>this.addSomeStuff("Yogurt",2)}>Yogurt</button>
        <button onClick={() =>this.addSomeStuff("Strawberry",20)}>Strawberry</button>
        <button onClick={() =>this.addSomeStuff("Beer",1)}>Beer</button> */}
    </div>
  }
}

export default App;
    
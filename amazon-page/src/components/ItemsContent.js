import React from 'react';
import styles from './ItemsContent.module.css';
import MainSection from './MainSection.js';


export default function ItemsContent (props){
    return (
<div>
{/* Header */}
{/* <div className={styles.header}> 
<div className={styles.topMenu}>
         <input type="text"  name="search" value placeholder="I'm searching for..." className={styles.inputText}/>  
         <button className={styles.searchbutton}>Search</button>         
        </div>
<div className={styles.topLine}></div>  
</div> */}

{/* Main body */}

      <div className={ styles.presentationModeGrid }>
      {
        props.items.map(item => <MainSection key={item.id} {...item} />)
      }
      </div>
    </div>


    )

}
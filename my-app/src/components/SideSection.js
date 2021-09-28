import React from 'react';
import styles from './SideSection.module.css';



export default function SideSection (props){
    
    return (
        <div>
        <div className={styles.sideSection}> 
        {/* /* Main news */}
           <span className={styles.header}>{props.header}</span> 
            
              <div className={styles.mainNews}><div className={styles.sideNumber}>{props.number}</div>
                 <div className={styles.topic}><b>{props.newsTopic } | </b>{props.article}</div>
              </div>      
    </div> 
    </div>
        
    )
}
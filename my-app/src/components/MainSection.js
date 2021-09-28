import React from 'react';
import styles from './MainSection.module.css';

export default function MainSection (props){
    return (
<div>
  <div className={styles.mainSection}> 
  {/* /* Main news */}
     <span className={styles.header}>{props.header}</span> 
      <img className={styles.pictureMain} src={props.img} alt=""></img>
    
        <div className={styles.mainNews}><h2><span className={styles.title}> {props.title}<span className={styles.divider}>|</span></span>
             <span className={styles.mainText}>{props.text}
             </span></h2>
        </div>

        <div className={styles.bottomContainer}><span className={styles.place}>{props.place}</span>
        <time dateTime="2021-09-21T06:52:00.000+03:00" className={styles.time}>{props.time}</time>
        </div>

{/* news box 2*/}
  </div>
</div>
    )
}
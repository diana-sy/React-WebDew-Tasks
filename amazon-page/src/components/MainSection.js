import React from 'react';
import styles from './MainSection.module.css';



export default function MainSection (props){
    return (     
       
   <div className={ styles.conteiner }>
        <div className={ styles.productContainer }>
          <div><img src={`/Images/${props.image}`} alt=""/></div>
          <div className={ styles.description }>{ props.description }</div>
          <div className={ styles.seller}>{ props.seller }</div>

        <div className={styles.ratingContent}>
          <div><img src={`/Images/${ props.stars }`} alt="" className={ styles.stars}/></div>
          <div className={styles.rating }>{props.rating}</div>
        </div>

        <div className={styles.priceContent}>
          <div className={ styles.price}>$<b>{ props.price }</b></div>
          <div className={ styles.shipping}> + ${props.shipping} shipping</div>
         </div>

          <div className={ styles.arrives}>Arrives: <b>{ props.arrives }</b></div>
        </div>
    </div>
  

    )

}
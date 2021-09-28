import React from 'react';
import styles from './Header.module.css';

export default function Header (){
    return (
        <div className ={styles.headerBackground} >
         <div className={styles.container}>
            <div className={styles.brand}>HELSINGIN SANOMAT</div>
            <div className ={styles.menu}>Etusivu
            <div>Utiset</div>
            <div>Lehdet</div>
            <div>Asiakaspalvelu</div>
            </div>

            <div className={styles.buttons}>
            <button type="button" className={styles.button1}>Tilaa</button>
            <div>Kirjadu</div>
           <div> Valikko</div>
            </div>

        </div>

        </div>
    )
}
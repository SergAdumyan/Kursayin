import React from 'react'
import styles from './Intro.module.css'
export default function Intro() {
  const c = setTimeout(() => {
    
    console.log('barev');
    clearTimeout(c)
    window.location.pathname = "/register"; 
  }, 15000);
  return (
    <section className={styles.introBody}>
        <div className={styles.animatedBlock}>
            <div className={styles.productBlock}>
            <img src='images/apple.png' alt=''/>
            <div>
                <h1>Apple</h1>
                <h3>Sergey Adumyan</h3>
                <p>13.12.2022</p>
            </div>
        </div>
        </div>
        
    </section>
  )
}

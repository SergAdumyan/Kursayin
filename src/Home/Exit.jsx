import React from 'react'
import { RxExit } from "react-icons/rx";
import styles from "./Home.module.css";
export default function Exit({value}) {
  return (
    <section className={`${styles.contextHelp} ${styles.contextBlock}`}>
      <div style={{ width: "40%" }}>
       <h1 style={{color:'white',textAlign:'center',fontSize:'2vw'}}>Վստահ ե՞ք</h1>
       <div className={styles.btnBlock}>
        <button className={styles.btn} onClick={()=>window.location.pathname = '/register'}>Այո</button>
       <button className={styles.btn} onClick={()=>value(true)}>Ոչ</button>
       </div>
       
      </div>
      <RxExit color="#F9BE3C" fontSize="25vw" />
    </section>
  )
}

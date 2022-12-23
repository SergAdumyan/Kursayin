import React, { useState } from "react";
import styles from "./Home.module.css";
import { HiLightBulb } from "react-icons/hi";

export default function Exercise() {
  const [sentence, setSentence] = useState();
  const [barer, setBarer] = useState([]);
  function Stugum() {
    if (sentence) {
      const arr = sentence.split(" ");
      setBarer(
        arr.filter(
          (elem) =>
            elem.toLowerCase() ===
            elem.split("").reverse().join("").toLowerCase()
        )
      );
    }
  }
  console.log(barer);
  return (
    <>
      <section className={`${styles.contextExercise} ${styles.contextBlock}`}>
        <div>
          <h1>Նախադասության մեջ գտնում է պալինդրոմ բառերը</h1>
          <div>
            <div className={styles.inputsBlock}>
              <input
                className={styles.sentenceInp}
                type="text"
                name=""
                id=""
                onChange={(e) => setSentence(e.target.value)}
              />
              <button onClick={Stugum}>Search</button>
            </div>

            {barer.length > 0 ? <div className={styles.answer}>
              <h1>Պալինդրոմ բառերն են</h1>
              
              {barer.map((element) => <p className={styles.palindrom}>{element}</p>)}
            </div>  : <h1 style={{marginTop:'20px'}}>Պալինդրոմ բառ չկա</h1>}
          </div>
        </div>
        <HiLightBulb color="#F9BE3C" fontSize="25vw" />
      </section>
    </>
  );
}

import React, { useEffect, useState } from "react";
import Authօr from "./Authօr";
import Exercise from "./Exercise";
import Exit from "./Exit";
import HelpTopic from "./HelpTopic";
import styles from "./Home.module.css";
import TipDay from "./TipDay";
export default function Home() {
  const [active, setActive] = useState("");
  const arr = document.getElementsByTagName("p");
  const [value, setValue] = useState(false);
  const choosValue = (value) => {
    setValue(value);
  };
  // console.log(arr);
  
  function Active(element) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove("active");
    }
    element.target.classList.add("active");
    Context();
  }
  useEffect(()=>{
    Context()
  },[])
  function Context() {
    setActive("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].classList.contains("active")) {
        if (arr[i].classList.contains("tipDay")) {        
          setActive(<TipDay />);
        }
        else if(arr[i].classList.contains("help")){
            setActive(<HelpTopic/>)
        }
        else if(arr[i].classList.contains("exercise")){
            setActive(<Exercise/>)
        }
        else if(arr[i].classList.contains("auther")){
            setActive(<Authօr/>)
      }
      else if(arr[i].classList.contains("exit")){
        setActive(<Exit value={choosValue} />)
  }
      }
    }
  }
  useEffect(()=>{
    if(value){
      for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove("active");
    }
    arr[0].classList.add('active')
    setActive(<Exercise/>)
    setValue(!value)
    }
    console.log(value);
    
  })
  return (
    <>
      <section className={styles.homeBack}>
        <div>
          <div className={styles.tabsTitles}>
            <p className="exercise active" onClick={Active}>Exercise</p>
            <p className="tipDay" onClick={Active}>
              Tip of the day
            </p>
            <p className="help" onClick={Active}>Help topic</p>
            <p className="auther" onClick={Active}>Authօr</p>
            <p className="exit" onClick={Active} >Exit</p>
          </div>
          {active}
        </div>
      </section>
    </>
  );
}

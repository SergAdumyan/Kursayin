import React from "react";
import styles from "./ReplacePassword.module.css";
import { AiTwotoneLock } from "react-icons/ai";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
export default function ReplacePassword() {
  const [loginCheck, setLoginCheck] = useState("");
  const [PassCheck, setPassCheck] = useState("");
  const [NewPass, setNewPass] = useState("");
  const [stugel, setStugel] = useState(false)
  const [checkNewPass, setCheckNewPass] = useState(false)
function Stugum(){
  const obj = JSON.parse(localStorage.getItem('array'))
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].username == loginCheck && obj[i].password == PassCheck) {
      
      if(NewPass.length >=8){
        obj[i].password = NewPass
        window.location.pathname = '/register'
      }
      else{
          setCheckNewPass(true)
      }
    }
    else{
      setStugel(true)
    }
  }
  localStorage.setItem('array',JSON.stringify(obj))
  console.log(obj);
}
  return (
    <section className={styles.resetBody}>
      <div className={styles.resetBlock}>
        <div className={styles.resetLogo}>
          <AiTwotoneLock className={styles.lockLogo} />
          <p>Reset Your Password</p>
        </div>
        <div className={styles.inputsBlock}>
          {stugel ? <p>Invalid UserName or Old Password</p> : null}
          <div className={styles.resetInputsLogin}>
            <input type='text' placeholder="UserName" onChange={(e)=>setLoginCheck(e.target.value)}/>
          </div>
          <div className={styles.resetInputsLogin}>
            <input type='password' placeholder="Old Password" onChange={(e)=>setPassCheck(e.target.value)}/>
          </div>
          {checkNewPass || stugel ? <p>Please fill New Password correct</p> : null}
          <div className={styles.resetInputsLogin}>
            <input type='password' placeholder="New Password" onChange={(e)=>setNewPass(e.target.value)}/>
            
          </div>
        </div>
        <div className={styles.ApplyOrSign}>
          <button onClick={()=>Stugum()}>Apply</button>
          <Link to='/register'>Sign In</Link>
        </div>
      </div>
    </section>
  );
}

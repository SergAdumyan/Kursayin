import React, { useEffect, useState } from "react";
import styles from "./Register.module.css";
import { GiSkeletonKey, GiPirateSkull, GiPirateFlag } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { AiFillSafetyCertificate} from "react-icons/ai";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Register() {
  const [loginCheck, setLoginCheck] = useState("");
  const [PassCheck, setPassCheck] = useState("");
  const [tiv, setTiv] = useState();
  const [eye, setEye] = useState(false)
  //   let t = false
  useEffect(() => {
    if (tiv == 2) {
      setLoginCheck("");
      setPassCheck("");
    }
    else if(tiv==1){
        setTiv(0)
    }
    
  }, [tiv]);

  function Stugum() {
    const objArr = JSON.parse(localStorage.getItem("array"));
    console.log(objArr);
    for (let i = 0; i < objArr.length; i++) {
      if (objArr[i].username == loginCheck && objArr[i].password == PassCheck) {
        setTiv(1);
        window.location.pathname = '/home'
      } else {
        setTiv(2);
      }
    }
  }

  return (
    <section className={styles.registerBody}>
      <div className={styles.registerBlock}>
        <div className={styles.registerLogo}>
          <GiPirateFlag className={styles.userLogo} />
          <p>Sign In</p>
        </div>
        <div className={styles.registerInputsBlock}>
            {tiv == 2 && <p>Invalid Login or Password</p>}
          <div className={styles.registerInputsLogin}>
            <GiPirateSkull className={styles.inputUserLogo} />
            <input
              type="text"
              placeholder="UserName"
              value={loginCheck}
              onChange={(e) => {
                setLoginCheck(e.target.value);
              }}
            />
            {loginCheck.length > 0 && loginCheck.length < 6 ? (
              <MdCancel className={styles.Cancel} />
            ) : loginCheck.length >= 6 ? (
              <AiFillSafetyCertificate className={styles.isRight} />
            ) : null}
          </div>
          <div className={styles.registerInputsLogin}>
            <GiSkeletonKey className={styles.inputUserLogo} />
            <input
              type={!eye ? 'password' : 'text'}
              placeholder="Password"
              value={PassCheck}
              onChange={(e) => setPassCheck(e.target.value)}
            />
            {!eye ? <BsFillEyeSlashFill onClick={()=>setEye(!eye)} cursor='pointer' fontSize="1.5vw" /> : <BsFillEyeFill cursor='pointer' onClick={()=>setEye(!eye)} fontSize="1.5vw"/>}
            {PassCheck.length > 0 && PassCheck.length < 8 ? (
              <MdCancel className={styles.Cancel} />
            ) : PassCheck.length >= 8 ? (
              <AiFillSafetyCertificate className={styles.isRight} />
            ) : null}
          </div>
        </div>
        <Link to='/replacepassword' className={styles.resetPass}>Reset Password</Link>
        <div className={styles.okOrCancel}>
          <button onClick={() => Stugum()}>OK</button>
          <button onClick={()=> window.location.pathname = '/'}>Cancel</button>
        </div>
      </div>
    </section>
  );
}

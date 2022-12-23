import React from "react";
import styles from "./Home.module.css";
import { ImUser } from "react-icons/im";
export default function Author() {
  return (
    <section className={`${styles.contextHelp} ${styles.contextBlock}`}>
      <div style={{ width: "40%" }}>
        <p className={styles.helpText}>
          Ես Սերգեյ Ալեքսանի Ադումյանն եմ։ Սովորում եմ Երևանի Ինֆորմատիկայի
          Պետական Քոլեջի <br/>4-րդ կուրսում, ծրագրավորում բաժնում։
        </p>
      </div>
      <ImUser color="#F9BE3C" fontSize="25vw" />
    </section>
  );
}

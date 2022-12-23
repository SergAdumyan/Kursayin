import React from "react";
import styles from "./Home.module.css";
import { BiHelpCircle } from "react-icons/bi";
export default function HelpTopic() {
  return (
    <section className={`${styles.contextHelp} ${styles.contextBlock}`}>
      <div style={{width:'40%'}}>
        <p className={styles.helpText}>
          Այս կայքից օգտվելը շատ հեշտ է: Ցանկացած գործողություն, կոճակ ունեն
          իրենց հուշող անվանումները կամ նշանները։ Կայքի տեղնիկական խնդիրների
          հարցով խնդրում եմ գրել տրված էլեկտրոնային փոստին։{" "}
          <span>sergeyadumyan@gmail.com</span>
        </p>
      </div>
      <BiHelpCircle color="#F9BE3C" fontSize="25vw" />
    </section>
  );
}

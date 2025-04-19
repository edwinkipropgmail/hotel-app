import { Children } from "react";
import styles from "./innerCont.module.css";

export default function InnerCont({ children }) {
  return <div className={styles.innercont}>{children}</div>;
}

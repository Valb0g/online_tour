import styles from "../page.module.scss";
import { title } from "@/titles";

export const metadata = {
  title: title.about
}
export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          About us
        </h1>
      </div>
    </main>
  );
}

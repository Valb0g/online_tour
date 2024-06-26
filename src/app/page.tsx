import styles from "./page.module.scss";
import { title } from "@/titles";

export const metadata = {
  title: title.home
}
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          Home Page
        </h1>
      </div>
    </main>
  );
}

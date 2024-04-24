import styles from "../page.module.scss";
import { title } from "@/titles";

export const metadata = {
  title: title.profile
}
export default function Profile() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          Profile Page
        </h1>
      </div>
    </main>
  );
}

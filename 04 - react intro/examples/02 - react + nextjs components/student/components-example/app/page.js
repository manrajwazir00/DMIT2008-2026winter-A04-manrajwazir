import styles from "./page.module.css";
import Hello from "../components/Hello";
import NewConcept from "./NewConcept";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hello />
        <NewConcept concept="hell nah boi" />
        
      </main>
    </div>
  );
}

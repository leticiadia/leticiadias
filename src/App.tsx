import styles from "./App.module.css";
import { Header } from "./components/Header";

import "./global.css";

function App() {
  return (
    <div>
      <main>
        <section className={styles.contentLeft}>
          <Header />
        </section>

        <section className={styles.contentRight}>
          <div className={styles.columnBlack}></div>
        </section>
      </main>
    </div>
  );
}

export default App;

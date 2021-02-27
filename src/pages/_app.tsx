import "../styles/global.css";
import styles from "../styles/Global.module.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { SideBar } from "../components/SideBar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className={styles.globalContainer}>
        <SideBar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;

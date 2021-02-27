import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import Switch from "react-switch";
import styles from "../styles/components/SideBar.module.css";

export function SideBar() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <section className={styles.container}>
      <img src="favicon.png" alt="logo" />
      <Switch
        onChange={switchTheme}
        checked={theme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={8}
        width={30}
        handleDiameter={15}
        onColor={"#fff"}
        offColor={"#fff"}
        offHandleColor={"#fff"}
      />
    </section>
  );
}

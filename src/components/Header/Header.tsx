import cv from "@assets/files/cv.pdf";
import logo from "@assets/images/logo.svg";
import { Button, Tabs, TabsNameType } from "../index";
import styles from "./Header.module.scss";

interface HeaderProps {
  activeTab: TabsNameType;
  handleActiveTab: (tab: TabsNameType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  handleActiveTab,
}) => (
  <header className={styles.header}>
    <img src={logo} alt="Edita Motuze" className={styles.header__logo} />
    <Tabs handleActiveTab={handleActiveTab} activeTab={activeTab} />
    <a href={cv} download="Edita_Motuze_CV" className={styles.header__cv}>
      <Button text="Download CV" type="outlined" />
    </a>
  </header>
);

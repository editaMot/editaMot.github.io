import styles from "./Tabs.module.scss";

interface TabInfo {
  title: string;
  hashLink: string;
}

interface Tabs {
  [key: string]: TabInfo;
}

const TABS: Tabs = {
  about: {
    title: "About",
    hashLink: "#about",
  },
  projects: {
    title: "My Works",
    hashLink: "#projects",
  },
  skills: {
    title: "Skills",
    hashLink: "#skills",
  },
  contact: {
    title: "Contact",
    hashLink: "#contact",
  },
};

export type TabsNameType = keyof typeof TABS;

interface TabsProps {
  activeTab: TabsNameType;
  handleActiveTab: (tab: TabsNameType) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, handleActiveTab }) => {
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    tab: TabsNameType
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.tabs} ${styles[`tabs--${activeTab}`]}`}>
      {Object.keys(TABS).map((tab) => {
        const { title, hashLink } = TABS[tab];
        return (
          <div
            onClick={() => handleActiveTab(tab)}
            className={`${styles.tabs__tab} ${
              activeTab === tab ? styles.active : ""
            }`}
            key={title + hashLink}
            onKeyDown={(e) => handleKeyDown(e, tab)}
            tabIndex={0}
            role="button"
          >
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;

import { useState } from "react";
import { Header, Main, TabsNameType } from "../../components/index";

const Home = () => {
  const [activeTab, setActiveTab] = useState<TabsNameType>(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab ? (JSON.parse(savedTab) as TabsNameType) : "about";
  });

  const handleTabClick = (tabName: TabsNameType): void => {
    setActiveTab(tabName);
    localStorage.setItem("activeTab", JSON.stringify(tabName));
  };
  return (
    <>
      <Header activeTab={activeTab} handleActiveTab={handleTabClick} />
      <Main></Main>
    </>
  );
};

export default Home;

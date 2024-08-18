import { ReactNode, useEffect, useState } from "react";
import { Header, Main, Section, TabsNameType } from "../../components/index";
import { About, Contact, Projects, Skills } from "./components";

interface Section {
  name: string;
  title: string;
  content: ReactNode;
}

const sections: Section[] = [
  { name: "about", title: "About", content: <About /> },
  { name: "skills", title: "Skills", content: <Skills /> },
  { name: "projects", title: "My Works", content: <Projects /> },
  { name: "contact", title: "Contact Me", content: <Contact /> },
];

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabsNameType>(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab ? (JSON.parse(savedTab) as TabsNameType) : "about";
  });
  const [expandedSection, setExpandedSection] = useState<TabsNameType | null>(
    "about"
  );

  useEffect(() => {
    setExpandedSection(activeTab);
  }, [activeTab]);

  const handleTabClick = (tabName: TabsNameType): void => {
    setActiveTab(tabName);
    setExpandedSection(tabName);
    localStorage.setItem("activeTab", JSON.stringify(tabName));
  };

  const handleSectionClick = (sectionName: TabsNameType): void => {
    if (expandedSection === sectionName) {
      setExpandedSection("about");
      setActiveTab("about");
    } else {
      setExpandedSection(sectionName);
      setActiveTab(sectionName);
      localStorage.setItem("activeTab", JSON.stringify(sectionName));
    }
  };

  return (
    <>
      <Header activeTab={activeTab} handleActiveTab={handleTabClick} />
      <Main>
        {sections.map(({ name, title, content }) => (
          <Section
            key={name}
            title={title}
            content={content}
            isExpanded={expandedSection === name}
            handleSectionClick={() => handleSectionClick(name)}
          />
        ))}
      </Main>
    </>
  );
};

export default Home;

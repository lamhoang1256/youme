import { StyledTabs } from "./tabs.style";

interface ITabsProps {
  tabs: {
    id: number;
    name: string;
  }[];
  selectedTabId: number;
  onClick: (keyTab: number) => void;
}

const Tabs = ({ tabs, onClick, selectedTabId }: ITabsProps) => {
  return (
    <StyledTabs>
      {tabs.map((tab) => {
        const active = selectedTabId === tab.id ? "active" : "";
        return (
          <button
            type="button"
            key={tab.id}
            onClick={() => onClick(tab.id)}
            className={`tab ${active}`}
          >
            <div className="tab-label">{tab.name}</div>
          </button>
        );
      })}
    </StyledTabs>
  );
};

export default Tabs;

import styled from "styled-components";

const StyledTabs = styled.div`
  display: flex;
  gap: 10px;
  .tab {
    background-color: #3d6ef7;
    color: var(--white);
    padding: 8px 10px;
    border-radius: 4px;
  }
  .tab.active {
    background-color: var(--primary-color);
  }
`;

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

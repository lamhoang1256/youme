import { StyledTabs } from "./tabs.style";

interface ITabsProps {
  tabs: {
    id: number;
    name: string;
  }[];
  onClick: (keyTab: number) => void;
}

const Tabs = ({ tabs, onClick }: ITabsProps) => {
  return (
    <StyledTabs>
      {tabs.map((tab) => (
        <button type="button" key={tab.id} onClick={() => onClick(tab.id)} className="tab">
          <div className="tab-label">{tab.name}</div>
        </button>
      ))}
    </StyledTabs>
  );
};

export default Tabs;

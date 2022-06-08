import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface WatchSummaryProps {
  introduction: string;
}

const StyledWatchSummary = styled.div`
  .show-more {
    padding-left: 10px;
    background-color: transparent;
    color: var(--primary-color);
  }
`;

const WatchSummary = ({ introduction }: WatchSummaryProps) => {
  const { t } = useTranslation();
  const [showMoreDesc, setShowMoreDesc] = useState(false);

  return (
    <StyledWatchSummary>
      <span className="label-small">{t("Summary")} : </span>
      {showMoreDesc ? introduction : `${introduction.substring(0, 200)}...`}
      <button type="button" className="show-more" onClick={() => setShowMoreDesc(!showMoreDesc)}>
        {showMoreDesc ? "Show Less" : "Show More"}
      </button>
    </StyledWatchSummary>
  );
};

export default WatchSummary;

import LabelNormal from "components/label/LabelNormal";
import DetailDescription from "module/detail/DetailDescription";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface WatchSummaryProps {
  introduction: string;
}

const StyledWatchSummary = styled.div`
  .btn-toggle {
    padding-left: 10px;
    background-color: transparent;
    color: var(--primary-color);
  }
`;

const WatchSummary = ({ introduction }: WatchSummaryProps) => {
  const { t } = useTranslation();
  const [showMoreDesc, setShowMoreDesc] = useState(false);
  const toggleButtonRead = () => {
    setShowMoreDesc(!showMoreDesc);
  };

  return (
    <StyledWatchSummary>
      <DetailDescription>
        <LabelNormal>{t("Summary")} :</LabelNormal>
        {showMoreDesc ? introduction : `${introduction.substring(0, 150)}...`}
        <button type="button" className="btn-toggle" onClick={toggleButtonRead}>
          {showMoreDesc ? "Show Less" : "Show More"}
        </button>
      </DetailDescription>
    </StyledWatchSummary>
  );
};

export default WatchSummary;

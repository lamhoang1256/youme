import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface WatchUpcomingProps {
  updatePeriod: string;
}

const StyledWatchUpcoming = styled.div`
  margin-bottom: 10px;
`;

const WatchUpcoming = ({ updatePeriod }: WatchUpcomingProps) => {
  const { t } = useTranslation();
  if (!updatePeriod) return null;
  return (
    <StyledWatchUpcoming>
      <span className="label-small">{t("Upcoming")}:</span>
      {t("New episode is updated on")}{" "}
      {` ${updatePeriod?.substring(updatePeriod.indexOf(",") + 1)} `}
      {t("every week")}
    </StyledWatchUpcoming>
  );
};

export default WatchUpcoming;

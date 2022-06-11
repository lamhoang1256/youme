import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { daysOfWeek } from "constants/daysOfWeek";
import LabelNormal from "components/label/LabelNormal";

interface WatchUpcomingProps {
  updatePeriod: string;
}

const StyledWatchUpcoming = styled.div`
  margin-bottom: 10px;
`;

const WatchUpcomingRender = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();
  return (
    <StyledWatchUpcoming>
      <LabelNormal>{t("Upcoming")} :</LabelNormal>
      {t("New episode is updated on")}
      {children}
      {t("every week")}
    </StyledWatchUpcoming>
  );
};

const WatchUpcoming = ({ updatePeriod }: WatchUpcomingProps) => {
  const { t } = useTranslation();
  if (!updatePeriod) return null;
  const arrayPeriod = updatePeriod.split(",");
  const [one, ...days] = arrayPeriod;

  if (one)
    return <WatchUpcomingRender>{` ${t(daysOfWeek[Number(one) - 1])} `}</WatchUpcomingRender>;

  return (
    <WatchUpcomingRender>
      {days.map((day, index) =>
        index > 0 ? `, ${t(daysOfWeek[Number(day) - 1])} ` : ` ${t(daysOfWeek[Number(day) - 1])} `,
      )}
    </WatchUpcomingRender>
  );
};

export default WatchUpcoming;

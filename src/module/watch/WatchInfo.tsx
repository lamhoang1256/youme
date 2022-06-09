import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { IDetailMovie } from "types/detail";
import { IDetailCurrentPlay } from "types/watch";
import Heading from "components/heading/Heading";
import WatchMeta from "./WatchMeta";
import WatchCategory from "./WatchCategory";
import WatchUpcoming from "./WatchUpcoming";
import WatchSummary from "./WatchSummary";

interface WatchInfoProps {
  detailMovie: IDetailMovie;
  detailCurrentPlay: IDetailCurrentPlay;
}

const StyledWatchInfo = styled.div`
  padding-top: 10px;
  line-height: 1.7;
`;

const WatchInfo = ({ detailMovie, detailCurrentPlay }: WatchInfoProps) => {
  const { t } = useTranslation();
  const { seriesNo } = detailCurrentPlay;
  const {
    name,
    score,
    areaList,
    episodeCount,
    year,
    tagList,
    updateInfo,
    introduction,
    episodeVo,
  } = detailMovie;

  return (
    <StyledWatchInfo>
      <Heading fontSize="2.3rem">
        {name} - {t("Ep")} {seriesNo}
      </Heading>
      <WatchMeta
        areaList={areaList}
        countCurrEpisode={episodeVo?.length}
        countFullEpisode={episodeCount}
        year={year}
        score={score}
      />
      <WatchCategory categories={tagList} />
      <WatchUpcoming updatePeriod={updateInfo?.updatePeriod} />
      <WatchSummary introduction={introduction} />
    </StyledWatchInfo>
  );
};

export default WatchInfo;

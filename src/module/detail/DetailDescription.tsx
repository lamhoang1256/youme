import styled from "styled-components";
import { TextClamp } from "assets/styles/_mixins";

interface StyledProps {
  rowLines?: number;
  lineHeight?: number;
}

interface DetailDescriptionProps {
  children: React.ReactNode;
  rowLines?: number;
  lineHeight?: number;
}

const StyledDetailDescription = styled.p<StyledProps>`
  line-height: ${(props) => props.lineHeight};
  ${(props) => props.rowLines && TextClamp.multilines(props.rowLines)}
`;

const DetailDescription = ({ children, rowLines, lineHeight }: DetailDescriptionProps) => {
  return (
    <StyledDetailDescription rowLines={rowLines} lineHeight={lineHeight}>
      {children}
    </StyledDetailDescription>
  );
};

DetailDescription.defaultProps = {
  rowLines: null,
  lineHeight: 1.8,
};

export default DetailDescription;

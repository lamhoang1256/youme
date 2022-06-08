import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledBreabcrum = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  .crumb {
    list-style: none;
    font-size: 1.8rem;
    font-weight: 500;
    &::after {
      content: ">";
      padding-left: 10px;
    }
    &:last-child::after {
      display: none;
    }
  }
  .crumb a {
    color: var(--white);
  }
`;

interface BreadcrumbProps {
  crumbs: {
    id: number;
    label: string;
    path: string;
  }[];
}

const Breadcrumb = ({ crumbs }: BreadcrumbProps) => {
  const { t } = useTranslation();
  const isLastCrumb = (index: number) => {
    return index === crumbs.length - 1;
  };

  return (
    <StyledBreabcrum>
      {crumbs.map((crumb, index) => {
        const { id, label, path } = crumb;
        return (
          <li key={id} className="crumb">
            {isLastCrumb(index) ? <span>{t(label)}</span> : <Link to={path}>{t(label)}</Link>}
          </li>
        );
      })}
    </StyledBreabcrum>
  );
};

export default Breadcrumb;

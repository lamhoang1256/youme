import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { StyledBreabcrum } from "./breadcrumb.style";

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
      {crumbs.map((crumb, index) => (
        <li key={crumb.id} className="crumb">
          {isLastCrumb(index) ? (
            <span>{t(crumb.label)}</span>
          ) : (
            <Link to={crumb.path}>{t(crumb.label)}</Link>
          )}
        </li>
      ))}
    </StyledBreabcrum>
  );
};

export default Breadcrumb;

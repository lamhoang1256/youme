import { Link } from "react-router-dom";
import { StyledBreabcrum } from "./breadcrumb.style";

// const crumbs = [
//   {id:1,label:"Home 1"},
//   {id:2,label:"Home 2"},
//   {id:3,label:"Home 3"},
// ]

interface BreadcrumbProps {
  crumbs: {
    id: number;
    label: string;
    path: string;
  }[];
}

const Breadcrumb = ({ crumbs }: BreadcrumbProps) => {
  const isLastCrumb = (index: number) => {
    return index === crumbs.length - 1;
  };

  return (
    <StyledBreabcrum>
      {crumbs.map((crumb, index) => (
        <li key={crumb.id} className="crumb">
          {isLastCrumb(index) ? (
            <span>{crumb.label}</span>
          ) : (
            <Link to={crumb.path}>{crumb.label}</Link>
          )}
        </li>
      ))}
    </StyledBreabcrum>
  );
};

export default Breadcrumb;

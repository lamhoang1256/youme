import { Link } from "react-router-dom";
import styled from "styled-components";

interface WatchCategoryProps {
  categories: {
    id: number;
    name: string;
  }[];
}

const StyledWatchCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 20px;
  margin: 14px 0;
  .category {
    height: 31px;
    line-height: 31px;
    padding: 0 12px;
    background-color: #434b5a;
    color: var(--white);
    border-radius: 14px;
    transition: all 0.25s linear;
  }
  .category:hover {
    background-color: var(--primary-color);
  }
`;

const WatchCategory = ({ categories }: WatchCategoryProps) => {
  return (
    <StyledWatchCategory>
      {categories.map((category) => (
        <Link to={`/category/${category.id}`} key={category.id} className="category">
          {category.name}
        </Link>
      ))}
    </StyledWatchCategory>
  );
};

export default WatchCategory;

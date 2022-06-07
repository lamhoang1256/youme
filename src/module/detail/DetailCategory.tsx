import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface DetailCategoryProps {
  categories: { id: number; name: string }[];
}

const StyledDetailCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 20px;
  .category {
    color: var(--white);
    transition: all 0.25s linear;
  }
  .category:hover {
    color: var(--primary-color);
  }
`;

const DetailCategory = ({ categories }: DetailCategoryProps) => {
  const { t } = useTranslation();

  return (
    <StyledDetailCategory>
      <h4>{t("Categories")}: </h4>
      {categories?.map((category) => (
        <Link to={`/category/${category.id}`} key={category.id} className="category">
          {category.name}
        </Link>
      ))}
    </StyledDetailCategory>
  );
};

export default DetailCategory;

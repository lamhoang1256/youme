import { CustomLink } from "components/link";
import { PATH } from "constants/path";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <CustomLink href={PATH.home}>Home</CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

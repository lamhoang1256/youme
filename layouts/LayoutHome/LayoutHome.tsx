import { Header } from "layouts/Header";
import styles from "./layoutHome.module.scss";

interface LayoutHomeProps {
  children: React.ReactNode;
}

const LayoutHome = ({ children }: LayoutHomeProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default LayoutHome;

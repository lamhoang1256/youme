import Image from "next/image";
import styles from "./cast.module.scss";

interface CastProps {
  image: string;
  name: string;
}

const Cast = ({ image, name }: CastProps) => {
  return (
    <div className={styles.cast}>
      <div className={styles.avatar}>
        <Image src={image} width={100} height={100} alt={name} />
      </div>
      <h5 className={styles.name}>{name}</h5>
    </div>
  );
};

export default Cast;

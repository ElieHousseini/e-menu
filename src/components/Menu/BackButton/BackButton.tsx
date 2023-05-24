import { FiArrowLeft } from "react-icons/fi";
import styles from "./BackButton.module.css";

type BackButtonProps = {
  goBack: () => void;
};

const BackButton: React.FC<BackButtonProps> = ({ goBack }) => (
  <div className={styles.backButton} onClick={goBack}>
    <FiArrowLeft size={30} />
  </div>
);

export default BackButton;

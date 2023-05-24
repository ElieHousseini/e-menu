import { MenuCategoryType } from "../../../types";
import styles from "./MenuCategory.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type MenuCategoryTypeProps = {
  category: MenuCategoryType;
};

const MenuCategory = ({ category }: MenuCategoryTypeProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate("/dishes", { state: { item: category.name } });
  };

  return (
    <div className={styles.menuCategory} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img
          src={`${BASE_URL}${category.image[0].url}`}
          alt="Background"
          className={styles.backgroundImage}
        />
        <div className={styles.centeredText}>
          {t(`category.${category.name}`)}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;

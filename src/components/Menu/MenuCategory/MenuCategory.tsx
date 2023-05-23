import { MenuCategoryType } from "../../../types";
import styles from "./MenuCategory.module.css";
import { useTranslation } from 'react-i18next';


type MenuCategoryTypeProps = {
  category: MenuCategoryType;
};

const MenuCategory = ({ category }: MenuCategoryTypeProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { i18n } = useTranslation();

  return (
    <div className={styles.menuCategory}>
      <div className={styles.imageContainer}>
        <img
          src={`${BASE_URL}${category.image[0].url}`}
          alt="Background"
          className={styles.backgroundImage}
        />
        <div className={styles.centeredText}>{i18n.language === 'en' ? category.name : category.name_ru }</div>
      </div>
    </div>
  );
};

export default MenuCategory;

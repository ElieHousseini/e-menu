import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import MenuCategory from "../MenuCategory/MenuCategory";
import SearchIcon from "../../../assets/Icons/Seach.tsx";
import { MenuCategoryType } from "../../../types";
import fetchData from "../../../services/fetch";
import { useTranslation } from "react-i18next";
import styles from "./CategoriesList.module.css";

const CategoriesList = () => {
  const [categoriesData, setCategoriesData] = useState<MenuCategoryType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [toggleBtn, setToggleBtn] = useState<Boolean>(false);

  const FETCH_CATEGORIES_URL = import.meta.env.VITE_FETCH_CATEGORIES_URL;
  const FETCH_CATEGORIES_BAR_URL = import.meta.env
    .VITE_FETCH_CATEGORIES_BAR_URL;

  const { t } = useTranslation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
  };

  useEffect(() => {
    fetchData({
      url: toggleBtn
        ? FETCH_CATEGORIES_BAR_URL
        : (FETCH_CATEGORIES_URL as string),
    }).then((data) => {
      setCategoriesData(data);
    });
  }, [FETCH_CATEGORIES_URL, toggleBtn]);

  return (
    <div>
      <span>
        <button
          onClick={() => {
            setToggleBtn(false);
          }}
          className={`${styles.toggleMenu} ${!toggleBtn ? styles.active : ""}`}
        >
          <b>{t("main_menu")}</b>
        </button>
        <button
          onClick={() => setToggleBtn(true)}
          className={`${styles.toggleMenu} ${toggleBtn ? styles.active : ""}`}
        >
          <b>{t("bar")}</b>
        </button>
      </span>
      <form onSubmit={handleSubmit} className={styles.searchBar}>
        <div className={styles.searchInputGroup}>
          <input
            type="text"
            placeholder={t("search_for_dishes") as string}
            value={searchTerm}
            onChange={handleChange}
            className={styles.searchInput}
          />
          <div className={styles.searchButton}>
            <SearchIcon />
          </div>
        </div>
      </form>
      {categoriesData?.map((category) => (
        <MenuCategory key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;

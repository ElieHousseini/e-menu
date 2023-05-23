import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { MenuCategoryType } from "../../../types";
import fetchData from "../../../services/fetch";
import styles from "./Menu.module.css";
import MenuCategory from "../MenuCategory/MenuCategory";

import Dropdown from "../Dropdown/Dropdown";
import { useTranslation } from "react-i18next";

type LanguageOption = {
  value: string;
  label: string;
};

const Menu = () => {
  const FETCH_CATEGORIES_URL = import.meta.env.VITE_FETCH_CATEGORIES_URL;
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { i18n, t } = useTranslation();

  const [categoriesData, setCategoriesData] = useState<MenuCategoryType[]>([]);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "ru", label: "Russian" },
  ];

  const defaultLanguageOption = languageOptions[0];

  useEffect(() => {
    fetchData({ url: FETCH_CATEGORIES_URL as string }).then((data) => {
      setCategoriesData(data);
    });
  }, [FETCH_CATEGORIES_URL]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
  };

  const handleLanguageChange = (selectedOption: LanguageOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  const SearchIconImage = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10 2a8 8 0 0 1 6.32 12.906l5.387 5.387-1.414 1.414-5.387-5.387A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 10 4z" />
      </svg>
    );
  };

  const LocationIconImage = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="16"
        height="16"
        fill="currentColor"
      >
        {" "}
        <g>
          <circle
            cx="128"
            cy="104"
            r="32"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></circle>{" "}
          <path
            d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></path>
        </g>
      </svg>
    );
  };

  const PhoneImageSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="16"
        height="16"
        fill="currentColor"
      >
        {" "}
        <g>
          <path
            d="M92.47629,124.81528a84.34782,84.34782,0,0,0,39.05334,38.8759,7.92754,7.92754,0,0,0,7.8287-.59231L164.394,146.40453a8,8,0,0,1,7.58966-.69723l46.837,20.073A7.97345,7.97345,0,0,1,223.619,174.077,48.00882,48.00882,0,0,1,176,216,136,136,0,0,1,40,80,48.00882,48.00882,0,0,1,81.923,32.381a7.97345,7.97345,0,0,1,8.29668,4.79823L110.31019,84.0571a8,8,0,0,1-.65931,7.53226L93.01449,117.00909A7.9287,7.9287,0,0,0,92.47629,124.81528Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></path>
        </g>
      </svg>
    );
  };

  const WifiIconImage = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="16"
        height="16"
        fill="currentColor"
      >
        {" "}
        <g>
          <path
            d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></path>{" "}
          <path
            d="M58.97857,132.12064a98.75415,98.75415,0,0,1,138.02724,0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></path>{" "}
          <path
            d="M25.06379,98.17952a146.68225,146.68225,0,0,1,205.8568,0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></path>{" "}
          <circle cx="128" cy="200" r="12"></circle>
        </g>
      </svg>
    );
  };

  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <div
          className={styles.headerImage}
          style={{
            backgroundImage: `url(${BASE_URL}/uploads/restaurant_cf71f55443.jpg)`,
          }}
        />
        <Dropdown
          options={languageOptions}
          defaultOption={defaultLanguageOption}
          onSelect={handleLanguageChange}
        />
      </div>
      <div className={styles.layout}>
        <div className={styles.main}>
          <h1 className={styles.title}>{t("restaurant_name")}</h1>
          <div className={styles.main_contact}>
            <span className={`${styles.location} ${styles.elementsContainer}`}>
              <LocationIconImage />
              {t("location")}
            </span>
            <span className={`${styles.phone} ${styles.elementsContainer}`}>
              <PhoneImageSVG />
              {t("phone")}
            </span>
            <span
              className={`${styles.wifiPassword} ${styles.elementsContainer}`}
            >
              <WifiIconImage />
              WiFi_Password123
            </span>
          </div>
          <span>
            <button
              onClick={() => setToggleBtn(false)}
              className={`${styles.toggleMenu} ${
                !toggleBtn ? styles.active : ""
              }`}
            >
              <b>{t("main_menu")}</b>
            </button>
            <button
              onClick={() => setToggleBtn(true)}
              className={`${styles.toggleMenu} ${
                toggleBtn ? styles.active : ""
              }`}
            >
              <b>{t("bar")}</b>
            </button>
          </span>
          <div>
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
                  <SearchIconImage />
                </div>
              </div>
            </form>
          </div>
          {categoriesData?.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>
        <div className={styles.footer}>
          <p>{t("thank_you_for_visiting_us")}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;

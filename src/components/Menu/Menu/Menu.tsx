import styles from "./Menu.module.css";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { MenuCategoryType } from "../../../types";
import fetchData from "../../../services/fetch";
import MenuCategory from "../MenuCategory/MenuCategory";
import Dropdown from "../Dropdown/Dropdown";
import LocationIcon from "../../../assets/Icons/Location.tsx";
import PhoneIcon from "../../../assets/Icons/Phone.tsx";
import SearchIcon from "../../../assets/Icons/Seach.tsx";
import WifiIcon from "../../../assets/Icons/Wifi.tsx";

type LanguageOption = {
  value: string;
  label: string;
};

const Menu = () => {
  const FETCH_CATEGORIES_URL = import.meta.env.VITE_FETCH_CATEGORIES_URL;
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const FETCH_CATEGORIES_BAR_URL = import.meta.env
    .VITE_FETCH_CATEGORIES_BAR_URL;

  const { i18n, t } = useTranslation();
  const [categoriesData, setCategoriesData] = useState<MenuCategoryType[]>([]);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "ru", label: "Russian" },
  ];
  const defaultLanguageOption = languageOptions[0];

  const LOCATION_URL = "https://www.google.com/maps/place/Beirut";
  const HEADER_IMAGE_URL = `${BASE_URL}/uploads/restaurant_cf71f55443.jpg)`;
  const WIFI_PASSWORD = "WiFi_Password123";

  useEffect(() => {
    fetchData({
      url: toggleBtn
        ? FETCH_CATEGORIES_BAR_URL
        : (FETCH_CATEGORIES_URL as string),
    }).then((data) => {
      setCategoriesData(data);
    });
  }, [FETCH_CATEGORIES_URL, toggleBtn]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
  };

  const handleLanguageChange = (selectedOption: LanguageOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <div
          className={styles.headerImage}
          style={{
            backgroundImage: `url(${HEADER_IMAGE_URL})`,
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
            <a
              href={`${LOCATION_URL}`}
              target="_blank"
              title="location on google maps"
              rel="noreferrer"
              className={`${styles.location} ${styles.elementsContainer}`}
            >
              <LocationIcon />
              {t("location")}
            </a>
            <a
              href={`tel:${t("phone")}`}
              className={`${styles.phone} ${styles.elementsContainer}`}
            >
              <PhoneIcon />
              {t("phone")}
            </a>
            <span
              className={`${styles.wifiPassword} ${styles.elementsContainer}`}
            >
              <WifiIcon />
              {WIFI_PASSWORD}
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
        <div className={styles.footer}>
          <p>{t("thank_you_for_visiting_us")}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;

import styles from "./Menu.module.css";
import { useTranslation } from "react-i18next";
import Dropdown from "../Dropdown/Dropdown";
import LocationIcon from "../../../assets/Icons/Location.tsx";
import PhoneIcon from "../../../assets/Icons/Phone.tsx";
import WifiIcon from "../../../assets/Icons/Wifi.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemsList from "../ItemsList/ItemsList.tsx";
import CategoriesList from "../CategoriesList/CategoriesList.tsx";

type LanguageOption = {
  value: string;
  label: string;
};

const Menu = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { i18n, t } = useTranslation();

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "ru", label: "Russian" },
  ];
  const defaultLanguageOption = languageOptions[0];

  const LOCATION_URL = "https://www.google.com/maps/place/Beirut";
  const HEADER_IMAGE_URL = `${BASE_URL}/uploads/restaurant_cf71f55443.jpg`;
  const WIFI_PASSWORD = "WiFi_Password123";

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
          <Router>
            <Routes>
              <Route
                path="/"
                element={<CategoriesList />}
              />
              <Route path="/dishes" element={<ItemsList />} />
            </Routes>
          </Router>
        </div>
        <div className={styles.footer}>
          <p>{t("thank_you_for_visiting_us")}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;

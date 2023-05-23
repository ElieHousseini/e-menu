import { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import { MenuItemType } from "../../types";
import fetchData from "../../services/fetch";
import styles from './Menu.module.css'

const FETCH_URL = import.meta.env.VITE_FETCH_URL;

const Menu = () => {
  const [menuData, setMenuData] = useState<MenuItemType[]>([]);

  useEffect(() => {
    fetchData({ url: FETCH_URL as string }).then((data) => {
      console.log("data", data);
      setMenuData(data);
    });
  }, [FETCH_URL]);

  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <h1>Restaurant Name</h1>
        <p>Tagline or brief description</p>
      </div>
      {menuData?.map((item, index) => (
        <MenuCategory
          key={index}
          category={item.category}
          menuData={menuData}
        />
      ))}
      <div className={styles.footer}>
        <p>Contact Information, Operating Hours, Address</p>
      </div>
    </div>
  );
};

export default Menu;

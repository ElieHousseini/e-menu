import styles from "./ItemList.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import fetchData from "../../../services/fetch";
import ModalImage from "react-modal-image";
import BackButton from "../BackButton/BackButton.tsx";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  category: string;
  vegan: boolean;
  calories: number;
  vegetarian: boolean;
  image: any[];
  weight: number;
};

const ItemsList = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const location = useLocation();
  const item = location.state?.item || "default";

  const FETCH_DISHES_URL = import.meta.env.VITE_FETCH_DISHES_URL;
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Add loading state

  const { t } = useTranslation();

  const filterByCategory = (items: Item[], category: string): Item[] => {
    return items.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  };

  useEffect(() => {
    setIsLoading(true)
    fetchData({
      url: FETCH_DISHES_URL,
    }).then((data: Item[]) => {
      const filteredItems = filterByCategory(data, item);
      setItems(filteredItems);
    }).finally(() => {
      setIsLoading(false)
    });
  }, [FETCH_DISHES_URL]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return  <div className={styles.loading}>{t("loading")}</div>
  }

  return (
    <div>
      <BackButton goBack={handleGoBack} />
      <h2 className={styles.title}>{t(`${item}`)}</h2>
      {items.length === 0 && (
        <div className={styles.no_items_found}>{t("no_items_found")}</div>
      )}
      {items.map((item: Item) => (
        <div className={styles.parent} key={item.id}>
          {item.image.length > 0 && (
            <div className={styles.image_parent}>
              <ModalImage
                small={`${BASE_URL}${item.image[0].url}`}
                large={`${BASE_URL}${item.image[0].url}`}
                alt={`${item.name}`}
                hideDownload
                hideZoom
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.nameWeight}>
            <p className={styles.name}>{t(`food.${item.name}.name`)}</p>
            <p className={styles.weight}>{item.weight}g</p>
          </div>
          <p className={styles.description}>{t(`food.${item.name}.description`)}</p>
          <p className={styles.price}>{item.price}$</p>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;

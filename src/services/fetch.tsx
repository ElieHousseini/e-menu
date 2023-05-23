// fetchData.ts
import { MenuItemType } from '../types';

type FetchDataArgs = {
  url: string;
};

const fetchData = ({ url }: FetchDataArgs): Promise<MenuItemType[]> => {
  return fetch(url).then((response) => response.json());
};

export default fetchData;

// fetchData.ts
import { MenuCategoryType } from '../types';

type FetchDataArgs = {
  url: string;
};

const fetchData = ({ url }: FetchDataArgs): Promise<MenuCategoryType[]> => {
  return fetch(url).then((response) => response.json());
};

export default fetchData;

import MenuItem from './MenuItem';
import { MenuItemType, MenuCategoryType} from '../../types';
  
const MenuCategory: React.FC<MenuCategoryType> = ({ category, menuData }) => {
    
    const filter = (array: MenuItemType[], category: string) => array?.filter(item => item.category === category);

    return (
        <div className="menu-category">
            <h2>{category}</h2>
            {filter(menuData, category).map((item: MenuItemType, index: number) => (
                <MenuItem key={index} item={item} />
            ))}
        </div>
    );
};

export default MenuCategory;

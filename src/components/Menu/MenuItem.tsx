import { MenuItemType } from '../../types';

type MenuItemProps = {
    item: MenuItemType;
};

const MenuItem = ({item} : MenuItemProps) => {

    const {name, description, price} = item;

    return (
        <div className="menu-item">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;

export type MenuItemType = {
    name: string;
    price: string;
    description: string;
    category: string,
}

export type MenuCategoryType = {
    category: string;
    menuData: MenuItemType[];
}

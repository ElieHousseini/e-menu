export type MenuItemType = {
    name: string;
    price: string;
    description: string;
    category: string;
    image: {
        url: string;
    }
}

type CategoryImage = {
    url: string
}

export type MenuCategoryType = {
    id: number,
    name: string,
    image: CategoryImage[]
}
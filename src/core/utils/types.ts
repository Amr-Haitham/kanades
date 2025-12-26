
export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    description: string;
    image: string;
    rating: number;
    reviews: number;
    tags: string[];
}

export interface CartItem extends Product {
    quantity: number;
}

export type Category =
    | "all"
    | "mandala"
    | "wood"
    | "gift-wrap"
    | "trunk-art"
    | "costumes"
    | "custom";

export interface NavItem {
    label: string;
    path: string;
    icon: string;
}

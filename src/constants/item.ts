// Item

interface ItemBase {
  id: number;
}

export interface ItemDetails extends ItemBase {
  name: string;
  rating: number;
  price: {
    default: number;
    unit: string | null;
  };
  image: string;
  details: {
    description: string;
  };
  inventory: number;
}

export interface CardProps {
  title: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  category: string[];
  description: string;
  rating: number;
  image: string;
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  discount: string;
}

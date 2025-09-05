// Card component props interface
export interface CardProps {
  title: string;
  description: string;
  image: string;
  price?: number;
  location?: string;
  rating?: number;
  onClick?: () => void;
  className?: string;
}

// Button component props interface
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

// Property listing interface
export interface PropertyProps {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  rating: number;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
  };
}

// API Response interface
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

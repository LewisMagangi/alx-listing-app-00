import Image from 'next/image';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  price,
  location,
  rating,
  onClick,
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
          {rating && (
            <div className="flex items-center ml-2">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600 ml-1">{rating}</span>
            </div>
          )}
        </div>
        
        {location && (
          <p className="text-sm text-gray-500 mb-2">{location}</p>
        )}
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        {price && (
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">${price}</span>
            <span className="text-sm text-gray-500">per night</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

const artisanProducts = [
  {
    id: '1234',
    product_name: 'Handcrafted Wooden Desk Organizer',
    product_thumbnail: 'https://source.unsplash.com/100x100?wood',
    product_price: '$79.00',
    product_stock: 12
  },
  {
    id: '5678',
    product_name: 'Artisanal Ceramic Mug Set',
    product_thumbnail: 'https://source.unsplash.com/100x100?ceramic',
    product_price: '$49.00',
    product_stock: 8
  },
  {
    id: '9101',
    product_name: 'Handwoven Wool Throw Blanket',
    product_thumbnail: 'https://source.unsplash.com/100x100?wool',
    product_price: '$129.00',
    product_stock: 5
  },
  {
    id: '1121',
    product_name: 'Handmade Leather Journal',
    product_thumbnail: 'https://source.unsplash.com/100x100?leather',
    product_price: '$59.00',
    product_stock: 3
  },
  {
    id: '3141',
    product_name: 'Artisan Chocolate Truffle Assortment',
    product_thumbnail: 'https://source.unsplash.com/100x100?chocolate',
    product_price: '$39.00',
    product_stock: 20
  },
  {
    id: '5161',
    product_name: 'Hand-painted Silk Scarf',
    product_thumbnail: 'https://source.unsplash.com/100x100?silk',
    product_price: '$89.00',
    product_stock: 15
  }
];

function PopularProducts() {
  return (
    <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
      <strong className="text-gray-700 font-medium">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3">
        {artisanProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex items-start hover:no-underline"
          >
            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={product.product_thumbnail}
                alt={product.product_name}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.product_name}</p>
              <span
                className={classNames(
                  product.product_stock === 0
                    ? 'text-red-500'
                    : product.product_stock > 10
                      ? 'text-[#654334]'
                      : 'text-[#a86f57]',
                  'text-xs font-medium'
                )}
              >
                {product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in Stock'}
              </span>
            </div>
            <div className="text-xs text-gray-400 pl-1.5">{product.product_price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;

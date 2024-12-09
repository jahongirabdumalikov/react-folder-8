import React from 'react';
import { NavLink } from 'react-router';

const Card = ({ product }) => {
    return (
        <div className='flex'>
            <div className=" p-6 flex flex-col items-center justify-center border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-[300px]" data-aos="flip-left">
                <div className="h-[200px] w-full mb-4">
                    <img
                        className="w-full h-full object-cover rounded-lg"
                        src={product.image}
                        alt={product.name}
                    />
                </div>

                <NavLink to={"product-details/" + product.id}>
                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                </NavLink>


                <h2>{product.price}</h2>
                <h2>{product.category}</h2>
            </div>
        </div>
    );
};

export default Card;


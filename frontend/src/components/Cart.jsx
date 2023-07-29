import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from "../store/slicers/cartSlice";

const Cart = ({ cartItem }) => {
    const { key, name, price, img } = cartItem;
    const dispatch = useDispatch();

    // Format the price to add "$" before and ".00" after the price
    const formattedPrice = `$ ${Number(price).toFixed(2)}`;

    const addOnCart = (cartItem) => {
        const { id, name, img, price } = cartItem;
        dispatch(addToCart({ id, name, img, price }));
    };

return (
    <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-60 md:h-48 w-full object-cover object-center" src={`http://localhost:3000/${img}`} alt="blog" />
            <div class="p-6">
                <div class="flex justify-between">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{formattedPrice}</h1>
                </div>
                <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div class="flex items-center flex-wrap ">
                    <button className='rounded-full px-8 py-3 bg-gray-100 border-2 border-gray-900'
                        onClick={() => addOnCart(cartItem)}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Cart;

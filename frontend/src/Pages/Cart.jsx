import React, { useState } from "react";
import Layout from './../Layout/index'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/slicers/cartSlice";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

function Index() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getCartItems = useSelector((state) => state?.cart);
    // Calculate the total price of all items in the cart
    const totalPrice = getCartItems?.itemList.reduce(
        (acc, item) => acc + Number(item?.price || 0),
        0
    );
    // Calculate tax (assuming 15% tax rate)
    const taxRate = 0.15;
    const tax = totalPrice * taxRate;

    // Shipping cost (assuming $65 shipping fee)
    const shipping = totalPrice && 65;

    // Calculate the total price including tax and shipping
    const totalPriceWithTax = totalPrice && totalPrice + tax + shipping;

    const removeItem = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleCheckoutClick = () => {
        message.success("item checking out");
    };

    return (
        <Layout selectedPath={"Cart"}>
            <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div className="container mx-auto lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8  overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                    <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => navigate(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                        <p className="text-sm pl-2 leading-none">Back</p>
                    </div>
                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Bag</p>
                    {getCartItems?.itemList.map((item) => (
                        <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                            <div className="w-1/4">
                                <img src={`http://localhost:3000/${item?.img}`} alt className="w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-3/4">
                                <div className="flex items-center justify-between w-full pt-1">
                                    <p className="text-base font-black leading-none text-gray-800">{item?.name}</p>
                                    <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                                <div className="flex items-center justify-between pt-5 pr-6">
                                    <div className="flex itemms-center">
                                        <button className="rounded-full px-6 py-2 bg-gray-100 border-2"
                                            onClick={() => removeItem(item?.id)}
                                        >Remove</button>
                                    </div>
                                    <p className="text-base font-black leading-none text-gray-800">$ {item?.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                        <div>
                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                            <div className="flex items-center justify-between pt-16">
                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                <p className="text-base leading-none text-gray-800">$ {totalPrice}</p>
                            </div>
                            <div className="flex items-center justify-between pt-5">
                                <p className="text-base leading-none text-gray-800">Shipping</p>
                                <p className="text-base leading-none text-gray-800">$ {shipping}</p>
                            </div>
                            <div className="flex items-center justify-between pt-5">
                                <p className="text-base leading-none text-gray-800">Tax</p>
                                <p className="text-base leading-none text-gray-800">{15} %</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">$ {totalPriceWithTax}.00</p>
                            </div>
                            <button onClick={() => handleCheckoutClick} className="text-base leading-none w-full py-5 bg-green-800 border-green-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </Layout>
    );
}

export default Index;

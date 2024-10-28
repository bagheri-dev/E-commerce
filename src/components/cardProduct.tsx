import React from "react";
import { CardProductProps } from "../types/cardComponent";


const CardProduct:React.FC<CardProductProps> = ({ title , category , price , sku , thumbnail}) => {
    return ( 
        <>
        <div className="py-2 px-4 border-2 rounded-lg border-[#0B5351]/30">
            <div className="w-full flex justify-center">
                <img src={thumbnail} alt="" />
            </div>
            <div className="space-y-3">
                <h3 className="text-2xl font-bold w-full overflow-hidden whitespace-nowrap text-ellipsis">{title}</h3>
                <p className="text-xl">price : {price}$</p>
                <div className="flex justify-between py-2">
                    <p>category: {category}</p>
                    <p>SKU: {sku}</p>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="py-2 px-4 hover:bg-[#8DAA91] rounded-lg text-white bg-[#0B5351] transition-all">Add to Cart</button>
            </div>
        </div>
        </>
     );
}
 
export default CardProduct;
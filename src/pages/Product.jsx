import React, { useContext } from "react";
import { ShopContaxt } from "../components/Context/ShopContaxt";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProduct";

const Product=()=>{
    const {all_product}=useContext(ShopContaxt);
    const {productId}=useParams();
    const product =all_product.find((e)=>e.id===Number(productId));

    
    return(
        <div>
           <Breadcrums product={product}/> 
           <ProductDisplay product={product}/>
           <DescriptionBox/>
           <RelatedProducts/>
        </div>
    )
}
export default Product;
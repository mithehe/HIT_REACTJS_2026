import {apiDefault } from ".";
import { ApiConstant } from "../constants/constants.api";


const productApi = () => ({
    getProducts: async () => 
        apiDefault.get(ApiConstant.product.getProducts)

});

export const { getProducts } = productApi();
// for my projects all api calling will be made here
import axios from "axios";

export const fetchProductList = async({pageParam}) => {
   const {data}= await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product?page=${pageParam}`)
   return data;
}

export const fetchProduct = async(id) => {
   const {data}= await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`)
   return data;
}
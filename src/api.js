// for my projects all api calling will be made here
import axios from "axios";

// Use environment variable if provided, otherwise fall back to localhost:4000
const BASE = process.env.REACT_APP_BASE_ENDPOINT || "http://localhost:4000";

const api = axios.create({ baseURL: BASE });

export const fetchProductList = async ({ pageParam = 1 }) => {
   const { data } = await api.get(`/product?page=${pageParam}`);
   return data;
};

export const fetchProduct = async (id) => {
   const { data } = await api.get(`/product/${id}`);
   return data;
};

export const fetchRegister = async (input) => {
   const {data} = await axios.post (
      `${process.env.BASE_ENDPOINT}/auth/register`,
      input
   );
   return data;
}


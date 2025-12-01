import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


export const fetchProductList = async ({ pageParam = 1 }) => {
	const { data } = await axios.get(
		`${process.env.REACT_APP_BASE_ENDPOINT}/product?page=${pageParam}`
	);

	return data;
};

export const fetchProduct = async (id) => {
	const { data } = await axios.get(
		`${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`
	);

	return data;
};

export const postProduct = async (input) => {
	const { data } = await axios.post(
		`${process.env.REACT_APP_BASE_ENDPOINT}/product/`,
		input
	);

	return data;
};

export const fetchRegister = async (input) => {
	const { data } = await axios.post(
		`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`,
		input
	);

	return data;
};


export const fetchMe = async () => {
	const { data } = await axios.get(
		`${process.env.REACT_APP_BASE_ENDPOINT}/auth/me`
	);
	return data;
};





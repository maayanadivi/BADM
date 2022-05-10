import {
  getAllProductsURL,
  getFeaturedProductsURL,
  getProductByIdURL,
  getSearchedProductURL,
  getUserURL,
  joinNewsletterURL,
  loginURL,
  registerURL
} from "../Constants/urls";
import { handleErrResponse, post, get } from "./axios";

export const loginUser = async (email, password) => {
  try {
    const res = await post(loginURL, { email, password });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const registerUser = async (email, password, name) => {
  try {
    const res = await post(registerURL, { email, password, name });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getUser = async () => {
  try {
    const res = await get(getUserURL);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getProductById = async id => {
  try {
    const res = await get(`${getProductByIdURL}/${id}`);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getFeaturedProducts = async () => {
  try {
    const res = await get(getFeaturedProductsURL);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getAllProducts = async category => {
  try {
    const res = await get(`${getAllProductsURL}?category=${category}`);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getSearchedProduct = async val => {
  try {
    const res = await get(`${getSearchedProductURL}?searchVal=${val}`);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const joinNewsletter = async email => {
  try {
    const res = await post(joinNewsletterURL, { email });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

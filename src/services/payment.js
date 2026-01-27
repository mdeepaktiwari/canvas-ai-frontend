import api from "../api";
import {
  PRICING_PACKAGES_URL,
  USER_CREDITS_URL,
  CREATE_ORDER_URL,
  VERIFY_PAYMENT_URL,
} from "./endpoints";

export const getPricingPackages = () => {
  return api.get(PRICING_PACKAGES_URL);
};

export const getUserCredits = () => {
  return api.get(USER_CREDITS_URL);
};

export const createOrder = (packageId) => {
  return api.post(CREATE_ORDER_URL, { packageId });
};

export const verifyPayment = (paymentData) => {
  return api.post(VERIFY_PAYMENT_URL, paymentData);
};

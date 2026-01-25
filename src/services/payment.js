import api from "../api";

export const getPricingPackages = () => {
  return api.get("/v1/payment/packages");
};

export const getUserCredits = () => {
  return api.get("/v1/payment/credits");
};

export const createOrder = (packageId) => {
  return api.post("/v1/payment/create-order", { packageId });
};

export const verifyPayment = (paymentData) => {
  return api.post("/v1/payment/verify-payment", paymentData);
};

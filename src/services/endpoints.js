export const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;

// Content endpoints
export const REWRITE_URL = "/v1/content/rewrite";
export const EXPAND_URL = "/v1/content/expand";
export const SHORTEN_URL = "/v1/content/shorten";
export const ARTICLE_URL = "/v1/content/article";
export const SEO_CONTENT_URL = "/v1/content/seo-content";
export const CONTENT_HISTORY_URL = "/v1/content/history";
export const CONTENT_WITH_ID_URL = (id) => `/v1/content/${id}`;
export const CONTENT_SEARCH_URL = "/v1/content/search";

// Image endpoints
export const IMAGE_GENERATE_URL = "/v1/image/generate";
export const IMAGE_HISTORY_URL = "/v1/image/history";

// Auth endpoints
export const SIGN_UP_URL = "/v1/auth/sign-up";
export const SIGN_IN_URL = "/v1/auth/sign-in";

// Payment endpoints
export const PRICING_PACKAGES_URL = "/v1/payment/packages";
export const USER_CREDITS_URL = "/v1/payment/credits";
export const CREATE_ORDER_URL = "/v1/payment/create-order";
export const VERIFY_PAYMENT_URL = "/v1/payment/verify-payment";

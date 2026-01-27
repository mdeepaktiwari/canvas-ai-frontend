import api from "../api";
import {
  REWRITE_URL,
  EXPAND_URL,
  SHORTEN_URL,
  ARTICLE_URL,
  SEO_CONTENT_URL,
  CONTENT_HISTORY_URL,
  CONTENT_WITH_ID_URL,
  CONTENT_SEARCH_URL,
} from "./endpoints";

export const rewriteContent = (data) => {
  return api.post(REWRITE_URL, data);
};

export const expandContent = (data) => {
  return api.post(EXPAND_URL, data);
};

export const shortenContent = (data) => {
  return api.post(SHORTEN_URL, data);
};

export const generateArticle = (data) => {
  return api.post(ARTICLE_URL, data);
};

export const generateSeoContent = (data) => {
  return api.post(SEO_CONTENT_URL, data);
};

export const contentHistory = () => {
  return api.get(CONTENT_HISTORY_URL);
};

export const contentWithId = (id) => {
  return api.get(CONTENT_WITH_ID_URL(id));
};

export const searchContent = (query) => {
  return api.get(CONTENT_SEARCH_URL, {
    params: { query },
  });
};

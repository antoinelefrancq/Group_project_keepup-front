import axios from 'axios';
// renvoie tous les exports avec l'alias constant
// le problème: c'était pas le bon chemin du fichier
import * as constant from '../constant';

// https://axios-http.com/docs/instance
const api = axios.create({
  baseUrl: constant.baseUrl,
});
// return la reponse du call api
export const fetchSportsLevel = async () => {
  return await api.get(constant.signup).then((response) => response);
};

export const postSignup = async (data) => {
  return await api.post(constant.createUser, data);
};

export const getEventById = async (id) => {
  return await api.get(constant.eventById(id)).then((response) => response);
};

export const getMessageFromEventById = async (id) => {
  return await api.get(constant.chatMessages(id));
};

export const deleteOneMessageById = async (id) => {
  return await api.delete(constant.deleteOneMessage(id));
};

export const forgetPassword = async ({ email }) => {
  return await api.get(constant.forgetPassword(email));
};

export const confirmChangePassword = async (form, url) => {
  return await api.post(constant.confirmChangePassword(url), form, {
    headers: {
      check_password_header: `Bearer ${url.token}`,
    },
  });
};

export const login = async (form) => {
  return await api.post(constant.login, form);
};

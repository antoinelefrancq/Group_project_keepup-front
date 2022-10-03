import axios from 'axios';
// renvoie tous les exports avec l'alias constant
// le problème: c'était pas le bon chemin du fichier 
import * as constant from '../constant';

// https://axios-http.com/docs/instance
const api = axios.create({
  baseUrl: constant.baseUrl
});
// return la reponse du call api
export const fetchSignup = async () => {
  return await api.get(constant.signup).then((response) => response);
};

export const postSignup = async (data) => {
  console.log(data);
  return await api.post(constant.createUser, data).then((response) => response);
};
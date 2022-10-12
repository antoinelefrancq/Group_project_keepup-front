import axios from 'axios';
import * as constant from '../constant';

/**
 * https://axios-http.com/docs/instance
 *
 * Axios middleware before the request was sent
 */
const api = axios.create({
  baseUrl: constant.baseUrl,
});

const local = JSON.parse(localStorage.getItem('credentials'));

/**
 * Place access token in the header before each api request
 */
api.interceptors.request.use((config) => {
  if (local?.access && local?.refresh) {
    config.headers.common['authorization'] =
      'Bearer ' + JSON.parse(localStorage.getItem('credentials')).access;
  }
  return config;
});

/**
 * Axios middleware after the request was sent
 */
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const code = error.response.data.code;
    const message = error.response.data.error;

    /**
     * Jwt error handler
     */
    if (error.response.status === 401 && (code === 'JWT_REFRESH' || code === 'JWT_ACCESS')) {

      /**
       * Redirect to login page if the refresh token is expired or access or refresh token are invalids
       */
      if (message === 'invalid token' || (message === 'jwt expired' && code === 'JWT_REFRESH')) {
        localStorage.removeItem('credentials');
        window.location.href = '/';
      }

      /**
       * Get new access token if he is expired
       */
      if (message === 'jwt expired' && code === 'JWT_ACCESS') {
        const response = await api.post(constant.token, {
          token: local.refresh,
        });
        const access = response.data.access;
        localStorage.setItem('credentials',JSON.stringify({ access: access, refresh: local.refresh }));
      }
    }

    return Promise.reject(error);
  }
);

/**
 * Disable axios middleware for signup and login request
 */
const uninterceptedAxiosInstance = axios.create({
  baseUrl: constant.baseUrl,
});

export const fetchSportsLevel = async () => {
  return await uninterceptedAxiosInstance.get(constant.signup).then((response) => response);
};

export const postSignup = async (data) => {
  return await uninterceptedAxiosInstance
    .post(constant.createUser, data)
    .then((response) => {
      localStorage.setItem('credentials', JSON.stringify({ ...response.data }));
     
      return { status: true };
    })
    .catch((error) => {
      return { status: false, error };
    });
};

export const getUserById = async (id) => {
  return await api.get(constant.userById(id));
};

export const updateUser = async (id, data) => {
  return await api.put(constant.updateProfile(id), data);
};

export const postEvent = async(data) => {
  return await api.post(constant.createAnEvent, data);
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
  return await uninterceptedAxiosInstance
    .post(constant.login, form)
    .then((response) => {
      localStorage.setItem('credentials', JSON.stringify({ ...response.data }));

      return { status: true };
    })
    .catch((error) => {
      return { status: false, error };
    });
};

export const updateEvent = async (id, data) => {
  return await api.post(constant.updateEvent(id), data);
};
export const deleteEvent = async (id) => {
  return await api.delete(constant.deleteEvent(id));
};
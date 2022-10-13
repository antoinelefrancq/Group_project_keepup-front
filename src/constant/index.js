const production = 'https://keepup-oclock.herokuapp.com/api/v1';
const development = 'http://localhost:8001/api/v1';
// recupere les data du formulaire pour les selects
const host = development;
// export const socketio = 'ws://qaonjev.cluster030.hosting.ovh.net';
// export const socketio = 'ws://keepup-oclock.herokuapp.com';
// export const socketio = 'http://localhost:8001';
export const socketio = 'https://keepup-oclock.herokuapp.com';

/**
 *  Api endpoint:
 *  Get all messages from event by his id
 * @param {ObjectId} id event id
 * @returns all event's messages
 */
export const createUser = host + '/create/user';
export const signup = host + '/signup';
export const profile = host + '/profile';
export const updateProfile = (id) => `${host}/user/${id}/update`;
export const createAnEvent = host + '/create/event';
export const userById = (id) => `${host}/user/${id}`;
export const eventById = (id) => `${host}/event/${id}`;
export const userEvents = (id) => `${host}/user/event/${id}`;
export const updateEvent = (id) => `${host}/event/${id}/update`;
export const deleteEvent = (id) => `${host}/event/${id}/delete`;
export const chatMessages = (id) => `${host}/event/${id}/chat`;
export const deleteOneMessage = (id) => `${host}/message/${id}/delete`;
export const forgetPassword = (email) => `${host}/auth/password/${email}`;
export const confirmChangePassword = ({ id }) =>
  `${host}/auth/password/${id}/confirm`;
export const login = `${host}/auth/login`;
export const token = `${host}/auth/token`;
export const baseUrl = host;

const production = 'https://keepup-oclock.herokuapp.com/api/v1';
const host = 'http://localhost:8001/api/v1';
// recupere les data du formulaire pour les selects

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
export const createAnEvent = host + '/create/event';
export const eventById = (id) => `${host}/event/${id}`;
export const chatMessages = (id) => `${host}/event/${id}/chat`;
export const deleteOneMessage = (id) => `${host}/message/${id}/delete`;
export const forgetPassword = (email) => `${host}/auth/password/${email}`;
export const confirmChangePassword = ({ id }) =>
  `${production}/auth/password/${id}/confirm`;
export const login = `${production}/auth/login`;
export const token = `${production}/auth/token`;
export const baseUrl = production;

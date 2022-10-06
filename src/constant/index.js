const host = 'https://keepup-oclock.herokuapp.com/api/v1';
const development = 'http://localhost:8001/api/v1';
// recupere les data du formulaire pour les selects

// export const socketio = 'ws://qaonjev.cluster030.hosting.ovh.net';
// export const socketio = 'ws://keepup-oclock.herokuapp.com';
export const socketio = 'ws://localhost:8001';

/**
 *  Api endpoint:
 *  Get all messages from event by his id
 * @param {ObjectId} id event id
 * @returns all event's messages
 */
export const createUser = development + '/create/user';
export const signup = development + '/signup';
export const eventById = (id) => `${development}/event/${id}`;
export const chatMessages = (id) => `${development}/event/${id}/chat`;
export const deleteOneMessage = (id) => `${development}/message/${id}/delete`;
export const forgetPassword = (email) =>
  `${development}/auth/password/${email}`;
export const confirmChangePassword = ({ id }) =>
  `${development}/auth/password/${id}/confirm`;
export const login = `${development}/auth/login`;
export const baseUrl = development;

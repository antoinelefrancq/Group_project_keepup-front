const host = 'http://qaonjev.cluster030.hosting.ovh.net/api/v1/';
const development = 'http://localhost:8001/api/v1';
// recupere les data du formulaire pour les selects

export const socketio = 'ws://qaonjev.cluster030.hosting.ovh.net';
// export const socketio = 'ws://localhost:8001';

/**
 *  Api endpoint:
 *  Get all messages from event by his id
 * @param {ObjectId} id event id
 * @returns all event's messages
 */
export const createUser = host + '/create/user';
export const signup = host + '/signup';
export const eventById = (id) => `${host}/event/${id}`;
export const chatMessages = (id) => `${host}/event/${id}/chat`;
export const deleteOneMessage = (id) => `${host}/message/${id}/delete`;
export const forgetPassword = (email) => `${host}/auth/password/${email}`;
export const confirmChangePassword = ({ id }) =>
  `${host}/auth/password/${id}/confirm`;
export const login = `${development}/auth/login`;
export const baseUrl = host;

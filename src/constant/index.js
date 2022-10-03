
const host = 'http://qaonjev.cluster030.hosting.ovh.net/api/v1/';
const development = 'http://localhost:8001/api/v1';
// recupere les data du formulaire pour les selects
export const signup = host + '/signup';
export const socketio = 'ws://qaonjev.cluster030.hosting.ovh.net';

/**
 *  Api endpoint:
 *  Get all messages from event by his id
 * @param {ObjectId} id event id
 * @returns all event's messages
 */
export const eventById = (id) => `${host}/event/${id}`;
export const chatMessages = (id) => `${host}/event/${id}/chat`;
export const deleteOneMessage = (id) => `${host}/message/${id}/delete`;
export const baseUrl = host;


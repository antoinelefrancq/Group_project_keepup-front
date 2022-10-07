import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import {
  disconnectUser,
  fetchMessages,
} from '../../../../redux/reducer/chatReducer';

import Messages from './Messages';
import toast from 'react-hot-toast';
import * as constant from '../../../../constant';
import { useAuth } from '../../../App/ProtectedRoute';

const local = localStorage.getItem('credentials');

export const socket = io(constant.socketio, {
  auth: {
    token: JSON.parse(local)?.refresh,
  },
});

const Chat = () => {
  const { loggedIn, user } = useAuth();

  const dispatch = useDispatch();
  const { id: event_id } = useParams();

  const { isLoading } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(fetchMessages({ id: event_id }));
  }, []);

  useEffect(() => {
    // let loading;
    if (isLoading) {
      // loading = toast.loading('Chargement des messages...');
    } else {
      // toast.dismiss(loading);
    }
  }, [isLoading]);

  const notification = {
    event_id: event_id,
    firstname: user.firstname,
  };

  /**
   * Schema exemple:
   */
  // const payload = {
  //   receiver: event_id,
  //   _id: null,
  //   sender: {
  //     _id: user._id,
  //     firstname: user.firstname,
  //   },
  //   content: form,
  // };

  useEffect(() => {
    socket.emit('user:join', notification, ({ error }, payload) => {
      if (error) {
        toast.error(error.message);
      }
      toast.success(payload.text);
    });

    return () => {
      socket.off();
      dispatch(disconnectUser());
    };
  }, []);

  useEffect(() => {
    socket.on('user:join', (payload) => {
      toast(payload.text);
    });

    socket.on('user:left', (payload) => {
      dispatch(disconnectUser({ payload }));
    });
  }, []);

  return (
    <>
      <Messages user={user} event_id={event_id} socket={socket} />
    </>
  );
};

export default Chat;

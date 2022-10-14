import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import {
  disconnectUser,
  fetchMessages,
} from '../../../../redux/reducer/chatReducer';

import Messages from './Messages';
import toast from 'react-hot-toast';
import * as constant from '../../../../constant';
import { useAuth } from '../../../App/ProtectedRoute';
import PropTypes from 'prop-types';

const local = localStorage.getItem('credentials');

export const socket = io(constant.socketio, {
  auth: {
    token: JSON.parse(local)?.refresh,
  },
});

const Chat = ({ event_id }) => {
  const dispatch = useDispatch();
  const { chatID } = useParams();

  const {
    chat: { isLoading, messages },
    user: { user },
  } = useSelector((state) => ({
    chat: state.chat,
    user: state.user,
  }));
  const navigate = useNavigate();
  console.log('___________');
  console.log(event_id);
  console.log('___________');

  useEffect(() => {
    dispatch(fetchMessages({ id: event_id || chatID }));
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
    event_id: event_id || chatID,
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
  console.log(chatID);
  return (
    <>
      <img
        src="/img/Arrow_right.svg"
        alt=""
        className=" rotate-180 absolute z-30  "
        onClick={() => navigate(`/profile/${user._id}/events/${chatID}`)}
      />
      <Messages user={user} event_id={event_id || chatID} socket={socket} />
    </>
  );
};

export default Chat;

Chat.propTypes = {
  event_id: PropTypes.any,
};

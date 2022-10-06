/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import Message from './Message';
import Container from './Container';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowDownChat } from '../../../../utils/icon';
import { addMessage } from '../../../../redux/reducer/chatReducer';
import PropTypes from 'prop-types';

const Chat = ({ user, socket, event_id }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState();
  const { chat } = useSelector((state) => state);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      socket.on('user:send', (payload) => {
        dispatch(addMessage(payload));
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      receiver: event_id,
      _id: null,
      sender: {
        _id: user._id,
        firstname: user.firstname,
      },
      content: form,
    };

    socket.emit('user:send', payload, (error, result) => {
      if (error) {
        throw error;
      }
      dispatch(addMessage(result));
    });

    event.target[0].value = '';
    setForm('');
  };

  const handleChange = (event) => {
    setForm(event.target.value);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col-reverse overflow-scroll">
        {chat.messages.map((item, key) => {
          let param = {};
          switch (item._id) {
            case 'system':
              param.sender = 'system';
              break;
            case user._id:
              param.sender = true;
              break;
            default:
              param.sender = false;
              break;
          }
          param.user = item.content;
          return (
            <Container key={key} param={param}>
              <Message {...item} param={param} />
            </Container>
          );
        })}
      </div>
      <div className="bg-blue w-full h-[74.71px] px-7">
        <form
          onSubmit={handleSubmit}
          className="flex w-full h-full items-center justify-center"
        >
          <input
            onChange={handleChange}
            type="text"
            placeholder="Votre texto! trop relou trop relou.."
            className="w-full h-[31px] rounded-tl-sm rounded-bl-sm"
          />
          <button className="bg-blue p-2 h-[31px] rounded-sm drop-shadow-lg">
            <ArrowDownChat />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;

Chat.propTypes = {
  user: PropTypes.object.isRequired,
  socket: PropTypes.object,
  event_id: PropTypes.string,
};

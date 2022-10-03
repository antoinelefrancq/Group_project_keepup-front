/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteOneMessage } from '../../../../redux/reducer/chatReducer';

const Message = ({ param: { sender, user }, text, _id }) => {
  const dispatch = useDispatch();

  const handleDoubleClick = () => {
    dispatch(deleteOneMessage({ id: _id }));
  };

  // const name = JSON.parse(localStorage.getItem('user')).firstname;

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className={
        sender === 'system'
          ? 'bg-red w-full flex justify-center items-center px-3 py-1 rounded-tl-lg rounded-bl-lg'
          : sender === true
          ? 'bg-blue max-w-[250px] flex justify-center items-center px-3 py-1 rounded-tl-lg rounded-bl-lg'
          : 'bg-white max-w-[250px] flex flex-row-reverse justify-center items-center px-3 py-1 rounded-tr-lg rounded-br-lg'
      }
    >
      <span>{user}</span>
      <p
        className={
          sender === 'system'
            ? ' text-white text-sm text-center w-full pl-5'
            : sender === true
            ? 'text-white text-sm w-full pl-5'
            : 'text-black text-sm w-full pr-5'
        }
      >
        {text}
      </p>
      {sender !== 'system' && (
        <img
          src="https://media.discordapp.net/attachments/992719661529575424/1025314974022762566/IMG_2595.jpg?width=270&height=480"
          alt="photo"
          className="rounded-full h-10 min-w-[35px] max-w-[35px] object-cover justify-end"
        />
      )}
    </div>
  );
};
Message.propTypes = {
  param: PropTypes.object,
  text: PropTypes.string,
  user_id: PropTypes.string,
  _id: PropTypes.string,
};
export default Message;

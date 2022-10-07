/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteOneMessage } from '../../../../redux/reducer/chatReducer';

const Message = ({ param, text, _id, user }) => {
  const dispatch = useDispatch();

  const handleDoubleClick = () => {
    dispatch(deleteOneMessage({ id: _id }));
  };

  // const name = JSON.parse(localStorage.getItem('user')).firstname;
  // console.log(user);
  return (
    <div
      onDoubleClick={handleDoubleClick}
      className={
        param.sender === 'system'
          ? 'bg-red max-w-8/12 rounded-tl-lg rounded-bl-lg'
          : param.sender === true
          ? 'bg-blue max-w-[300px] rounded-tl-lg rounded-bl-lg flex'
          : 'bg-white max-w-[300px] flex flex-row-reverse rounded-tr-lg rounded-br-lg'
      }
    >
      <div className="flex flex-col w-full">
        {/* <span className="w-full bg-blue">{param.content}</span> */}

        <p
          className={
            param.sender === 'system'
              ? ' text-white text-sm text-center w-full pl-5 pt-3'
              : param.sender === true
              ? 'text-white text-sm w-full pl-5 pt-3'
              : 'text-black text-sm w-full pr-5 pt-3'
          }
        >
          {param.content}
        </p>

        <span
          className={
            param.sender === 'system'
              ? 'w-full pr-2'
              : param.sender === true
              ? 'w-full flex justify-end pl-2'
              : 'w-full flex pr-2'
          }
        >
          {user.firstname}
        </span>
      </div>
      <div className="px-2 flex items-end">
        {param.sender !== 'system' && (
          <img
            src={user.image_url}
            alt="photo"
            className="rounded-full h-10 min-w-[35px] max-w-[35px] object-cover justify-end"
          />
        )}
      </div>
    </div>
  );
};
Message.propTypes = {
  param: PropTypes.object,
  text: PropTypes.string,
  user_id: PropTypes.string,
  _id: PropTypes.string,
  user: PropTypes.object,
  sender: PropTypes.object,
};
export default Message;

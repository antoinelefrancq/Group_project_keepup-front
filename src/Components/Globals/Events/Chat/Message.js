import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ sender, message }) => {
  return (
    <div
      className={
        sender
          ? 'bg-blue max-w-[250px] flex justify-center items-center px-3 py-1 rounded-tl-lg rounded-bl-lg'
          : 'bg-white max-w-[250px] flex flex-row-reverse justify-center items-center px-3 py-1 rounded-tr-lg rounded-br-lg'
      }
    >
      <p
        className={
          sender
            ? 'text-white text-sm w-full pr-5'
            : 'text-black text-sm w-full pl-5'
        }
      >
        {message}
      </p>
      <img
        src="https://media.discordapp.net/attachments/992719661529575424/1025314974022762566/IMG_2595.jpg?width=270&height=480"
        alt="photo"
        className="rounded-full h-10 min-w-[35px] max-w-[35px] object-cover justify-end"
      />
    </div>
  );
};
Message.propTypes = {
  sender: PropTypes.bool,
  message: PropTypes.string,
};
export default Message;

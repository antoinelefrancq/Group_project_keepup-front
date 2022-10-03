/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, param: { sender } }) => {
  return (
    <div
      className={
        sender === 'system'
          ? 'w-full py-1'
          : sender === true
          ? 'w-full py-1 flex justify-end'
          : 'w-full py-1 flex justify-start'
      }
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.object,
  param: PropTypes.object,
};
export default Container;

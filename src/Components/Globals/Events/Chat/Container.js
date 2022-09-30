import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, sender }) => {
  return (
    <div
      className={
        sender
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
  sender: PropTypes.bool,
};
export default Container;

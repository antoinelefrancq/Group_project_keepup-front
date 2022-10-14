import { useDispatch } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { toggleModale } from '../../../redux/reducer/userReducer';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useAuth } from '../../App/ProtectedRoute';

// eslint-disable-next-line react/prop-types
function ButtonMenu({ isActiv, hidded }) {
  const dispatch = useDispatch();

  const [chat, setChat] = useState();
  const { chatID, eventID } = useParams();
  const isAuth = useAuth();

  useEffect(() => {
    if (isActiv) {
      setChat(true);
    } else {
      setChat(false);
    }
  }, []);
  console.log(chatID || eventID);
  return (
    isAuth.loggedIn && (
      <nav className="fixed z-20 left-1/2 bottom-0 -translate-x-1/2 md:hidden">
        <div className="flex flex-row relative h-14">
          <Link
            to={chat ? `/event/${chatID || eventID}/chat` : '/events'}
            className="flex items-center w-[108px] bg-gradient-to-b from-red to-blue shadow-inner shadow-greyPlaceholder rounded-l"
          >
            {chat ? (
              <img src="/img/Sms.svg" alt="logo_chat" className="ml-6 block" />
            ) : (
              <img
                src="/img/Loupe.svg"
                alt="logo_loupe"
                className="ml-6 block"
              />
            )}
          </Link>
          <button
            onClick={(event) => {
              event.stopPropagation();
              dispatch(toggleModale());
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-14 flex items-center justify-center bg-gradient-to-b from-red to-blue rounded-full"
          >
            <span className="w-5/6 h-5/6  rounded-full bg-white flex justify-center items-center">
              <img src="/img/Logo_menu.svg" alt="logo_menu" className="block" />
            </span>
          </button>
          <Link
            to={chat ? '#' : '/create-event'}
            className="flex items-center w-[108px] bg-white shadow-inner shadow-greyPlaceholder rounded-r justify-end"
          >
            {chat ? (
              <img
                src="/img/Check.svg"
                alt="logo_check"
                className="mr-6 block"
              />
            ) : (
              <img src="/img/Plus.svg" alt="logo_plus" className="mr-6 block" />
            )}
          </Link>
        </div>
      </nav>
    )
  );
}

export default ButtonMenu;

ButtonMenu.PropTypes = {
  isActiv: PropTypes.bool,
};

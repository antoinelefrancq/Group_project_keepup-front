import React from 'react';
import Message from './Message';
import Container from './Container';

const Chat = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col-reverse overflow-scroll">
        <Container>
          <Message message="Hello romain" />
        </Container>
        <Container sender={true}>
          <Message sender={true} message="Coucou romain" />
        </Container>
        <Container sender={true}>
          <Message sender={true} message="Yes moi ca va" />
        </Container>
        <Container>
          <Message message="Dac" />
        </Container>
        <Container>
          <Message message="ok !" />
        </Container>
        <Container>
          <Message message="On se retrouve au square derriere l'arret de metro" />
        </Container>
      </div>
      <div className="bg-blue w-full h-[74.71px] px-7">
        <div className="flex w-full h-full items-center justify-center">
          <input
            type="text"
            placeholder="Votre texto! trop relou trop relou.."
            className="w-full h-[31px] rounded-tl-sm rounded-bl-sm"
          />
          <button className="bg-blue p-2 h-[31px] rounded-sm drop-shadow-lg">
            <svg
              width="29"
              height="27"
              viewBox="0 0 29 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-translate-y-[2.5px]"
            >
              <g filter="url(#filter0_d_213_2746)">
                <path
                  d="M6.11317 0.277872L23.4207 8.55541C23.5956 8.63894 23.7433 8.77029 23.8467 8.93426C23.9501 9.09823 24.005 9.28812 24.005 9.48198C24.005 9.67583 23.9501 9.86573 23.8467 10.0297C23.7433 10.1937 23.5956 10.325 23.4207 10.4086L6.11317 18.6861C5.93575 18.7711 5.73764 18.8033 5.54243 18.7789C5.34722 18.7546 5.16311 18.6746 5.01202 18.5486C4.86093 18.4226 4.74922 18.2559 4.69018 18.0682C4.63113 17.8806 4.62724 17.6799 4.67896 17.4901L6.41053 11.1421C6.43173 11.0643 6.47536 10.9944 6.53598 10.9413C6.5966 10.8881 6.67153 10.854 6.75142 10.8431L15.1382 9.70376C15.1733 9.69878 15.2064 9.68481 15.2345 9.66323C15.2626 9.64163 15.2846 9.61316 15.2984 9.58055L15.3132 9.52962C15.3197 9.48376 15.3104 9.43706 15.287 9.39709C15.2636 9.35713 15.2274 9.32625 15.1842 9.30948L15.139 9.29716L6.76046 8.15784C6.68071 8.14681 6.60596 8.1126 6.5455 8.05944C6.48503 8.00628 6.44153 7.93652 6.42039 7.85884L4.67896 1.47469C4.62703 1.28483 4.63076 1.08404 4.68972 0.896244C4.74868 0.708444 4.86037 0.541548 5.0115 0.415434C5.16263 0.28932 5.34682 0.209304 5.54214 0.184915C5.73746 0.160526 5.93567 0.192793 6.11317 0.277872Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_213_2746"
                  x="0.642578"
                  y="0.177002"
                  width="27.3624"
                  height="26.6099"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_213_2746"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_213_2746"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;

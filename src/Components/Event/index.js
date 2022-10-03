import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../../api/routes';

const index = () => {
  const sport_img =
    'https://firebasestorage.googleapis.com/v0/b/keepup-oclock.appspot.com/o/icon%2F1664179346997?alt=media&token=b22e262f-261c-4e3c-83df-f99d83eb39c8';
  const [eventData, setEventData] = useState('');
  const [admin, setAdmin] = useState({});
  //63348fecf0805bc06edcbfdc
  const { id } = useParams();

  useEffect(() => {
    getEventById(id).then((response) => {
      if (response.status === 200) {
        setEventData(response);
        setAdmin(response?.data?.participant[0]);
      } else {
        console.log('error');
      }
    });
  }, []);
  console.log(eventData);
  return (
    <div className="bg-[#FFFF] h-32 rounded-xl p-1 flex w-full text-[15px]">
      {/* left */}
      <div className="bg-red w-[200px] pr-2 rounded-tl-xl rounded-bl-xl h-full flex">
        <div className="flex flex-col w-full px-2">
          <div className="flex flex-col items-center justify-center text-white h-1/2">
            <span>SAM</span>
            <span>24</span>
          </div>
          <hr className="text-white w-full" />
          <div className="h-1/2 flex justify-center items-center">
            <img src={sport_img} alt="basket" className="w-8" />
          </div>
        </div>
        <img
          src={admin?.image_url}
          alt={`photo de profil de ${admin.firstname}`}
          className="w-[66px] object-cover"
        />
      </div>

      <div className="flex h-full w-full">
        {/* middle */}
        <div className="flex flex-col w-full">
          <div className="px-1">
            <p>Tournois Street</p>
            <p>Keeper: Thomas</p>
            <p>Activité: Basketball</p>
          </div>
          <div className="flex h-full w-[98px] items-center">
            <button className="bg-red px-3 h-[28px] w-[88px] rounded-tr-xl rounded-br-xl z-10 flex text-center">
              Complet
            </button>
            <span className="bg-[#F2EFEB] text-[#A5A5A5] h-[30px] flex justify-end pl-5 p-[2px] pr-[10px]  rounded-tr-xl rounded-br-xl -translate-x-4">
              20/20
            </span>
          </div>
        </div>
        {/* right */}
        <div className="h-full">
          <div className="flex justify-end h-1/3 items-center">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.4375 11.5C1.4375 14.1687 2.49765 16.7282 4.38474 18.6153C6.27182 20.5023 8.83126 21.5625 11.5 21.5625C14.1687 21.5625 16.7282 20.5023 18.6153 18.6153C20.5023 16.7282 21.5625 14.1687 21.5625 11.5C21.5625 8.83126 20.5023 6.27182 18.6153 4.38474C16.7282 2.49765 14.1687 1.4375 11.5 1.4375C8.83126 1.4375 6.27182 2.49765 4.38474 4.38474C2.49765 6.27182 1.4375 8.83126 1.4375 11.5ZM23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5ZM12.2188 6.46875C12.2188 6.27813 12.143 6.09531 12.0082 5.96052C11.8734 5.82573 11.6906 5.75 11.5 5.75C11.3094 5.75 11.1266 5.82573 10.9918 5.96052C10.857 6.09531 10.7812 6.27813 10.7812 6.46875V14.7962L7.69637 11.7099C7.56141 11.5749 7.37837 11.4991 7.1875 11.4991C6.99663 11.4991 6.81359 11.5749 6.67863 11.7099C6.54366 11.8448 6.46784 12.0279 6.46784 12.2188C6.46784 12.4096 6.54366 12.5927 6.67863 12.7276L10.9911 17.0401C11.0579 17.1071 11.1372 17.1602 11.2245 17.1964C11.3118 17.2326 11.4055 17.2513 11.5 17.2513C11.5945 17.2513 11.6882 17.2326 11.7755 17.1964C11.8628 17.1602 11.9421 17.1071 12.0089 17.0401L16.3214 12.7276C16.4563 12.5927 16.5322 12.4096 16.5322 12.2188C16.5322 12.0279 16.4563 11.8448 16.3214 11.7099C16.1864 11.5749 16.0034 11.4991 15.8125 11.4991C15.6216 11.4991 15.4386 11.5749 15.3036 11.7099L12.2188 14.7962V6.46875Z"
                fill="#0A6ABF"
              />
            </svg>
          </div>
          <div className="h-2/3 flex">
            <div className="flex flex-col items-center justify-around h-full">
              <span className="bg-blue rounded-xl px-2 text-sm">Amateur</span>
              <span className="bg-blue rounded-xl px-2 text-sm">14:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

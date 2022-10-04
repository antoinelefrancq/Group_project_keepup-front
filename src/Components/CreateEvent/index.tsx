import axios from 'axios';
import { useState } from 'react';

function CreateEvent() {
  const [sports, setSports] = useState([]);
  const [levels, setLevels] = useState([]);

  axios.get('http://qaonjev.cluster030.hosting.ovh.net/api/v1/signup')
    .then((response) => {
      const results = response.data;
      setSports(results.sports);
      setLevels(results.level);
    })
    .catch((error) => {
      console.log('error', error);
    });
  return (
    <>
      <div className="h-full flex flex-col justify-end">
        <section className="session flex flex-col gap-5 justify-center items-center bg-[#F2EFEB] pt-6">
          <div className="text-blueCustom">
            Créer une session
          </div>
          <form className="flex flex-col gap-2 w-full text-right px-10">
            <input
              placeholder="Titre"
              name="Titre"
              className="text-right px-1"
            />
            <textarea
              placeholder="Description"
              name="Description"
              className="text-right w-full px-1"
            />
            <select
              className="bg-[#ffffff] text-greyPlaceholder p-1"
            >
              {sports.map((sport) => (
                <option key={sport.sport}>{sport.sport}</option>
              ))}
            </select>
            <select
              className="bg-[#ffffff] text-greyPlaceholder p-1"
            >
              {levels.map((level) => (
                <option key={level}>{level}</option>
              ))}
            </select>
            <input
              placeholder="Date"
              name="Date"
              type="text"
              className="text-right px-1"
            />
            <div className="flex gap-2">
              <input
                placeholder="Début de session"
                name="Début de session"
                className="text-right w-1/2 px-1"
              />
              <input
                placeholder="Fin de session"
                name="Fin de session"
                className="text-right w-1/2 px-1"
              />
            </div>
            <input
              placeholder="Nombre de participants"
              name="Participants"
              type="text"
              className="text-right px-1"
            />
          </form>
          <button type="submit" className="bg-blue text-white mt-16 mb-5 py-3 px-7 rounded-lg shadow-md shadow-[#808080]">
            <img src="./img/Arrow_right.svg" alt="Arrow_right" />
          </button>
        </section>
      </div>
    </>
  );
}
  
export default CreateEvent;
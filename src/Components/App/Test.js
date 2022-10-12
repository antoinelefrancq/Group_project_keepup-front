/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
import axios from 'axios';
import React, { useState } from 'react';

const Test = () => {
  const [zeubi, setZeubi] = useState();
  const [input, setInput] = useState();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const url = `https://nominatim.openstreetmap.org/search?q=${input?.replace(
      ' ',
      '%20'
    )}&format=json`;

    const response = await axios.get(url);

    if (response.lenght < 0) {
      console.log('rien trouvé');
    } else {
      console.log('***********');
      console.log(response.data[0]);
      setZeubi(response.data[0]);
      console.log('***********');
    }
  };

  const handleChange = (ev) => {
    setInput(ev.target.value);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="address" onChange={handleChange} />
        <button type="submit">SEND</button>
      </form>
      <p>{JSON.stringify(zeubi)}</p>
    </>
  );
};
export default Test;

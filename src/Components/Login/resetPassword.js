import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as api from '../../api/routes';
import toast from 'react-hot-toast';

const ResetPassword = () => {
  const [form, setForm] = useState({
    older: '',
    new: '',
  });

  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .confirmChangePassword(form, params)
      .then((response) => {
        if (response.status === 200) {
          toast.success('Votre mot de passe a été changé');
          navigate('/login');
        }
      })
      .catch((error) => {
        if (error.response.status === 500) {
          toast.error('Veuillez réessayer plus tard');
        }
        toast.error(`${error.response.data.error}`);
      });
  };

  return (
    <section className="login flex flex-col drop-shadow-2xl shadow-lg shadow-blue md:block md:max-w-sm md:mx-auto my-20">
      <h1 className="text-blueCustom signup-title flex flex-col items-center md: pt-8">
        Changez votre mot de passe
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <input
          className="bg-white text-blueCustom pr-2 focus:outline-blueCustom placeholder-greyPlaceholder"
          placeholder="Ancien mot de passe"
          name="older"
          type="password"
          onChange={handleChange}
        />
        <input
          className="bg-white text-blueCustom pr-2 focus:outline-blueCustom placeholder-greyPlaceholder"
          placeholder="Nouveau mot de passe"
          name="new"
          type="password"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="rounded-full py-3 px-8 text-2xl bg-gradient-to-b from-red to-blue hover:from-pink-500 hover:to-yellow-500 text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Modifier
        </button>
        <Link to="/" className="text-blue hover:underline md:pb-20">
          Annuler
        </Link>
      </form>
    </section>
  );
};

export default ResetPassword;

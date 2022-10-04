import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputText from '../Globals/Input/Text';
import * as api from '../../api/routes';
import toast from 'react-hot-toast';

//Function component
const Login: React.FC = () => {

  const [isActiv, setIsActiv] = useState<boolean>(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (!isActiv) {

      console.log(form);
      await api[isActiv ? 'login' : 'forgetPassword'](form).then((response) => {
        localStorage.setItem('credentials', JSON.stringify({ ...response.data }));
        axios.defaults.headers.common['authorization'] = response.data.access;

        navigate('/profile');
      })
        .catch((error) => {
          console.log('error', error);
        });
    }
    // else {
    //   api.forgetPassword({ email: form.email }).then((reponse) => {
    //     if (reponse.status === 200) {
    //       toast.success(`Un email a été envoyé a ${form.email}`);
    //     }
    //   })
    //     .catch((error) => {
    //       toast.error(`${error.response.data.error}`);
    //     });
    // }
  };

  const handleClick = (event: any) => {
    event.stopPropagation();
    setIsActiv(prevState => !prevState);
  };

  return (
    <section className="login flex flex-col drop-shadow-2xl shadow-lg shadow-blue md:block md:max-w-sm md:mx-auto my-20">
      <h1 className='text-blueCustom signup-title flex flex-col items-center md: pt-8'>
        {isActiv ? 'Mot de passe oublié' : 'Te Revoilà !'}
      </h1>
      {isActiv ?
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
          <input className='bg-white text-blueCustom pr-2 focus:outline-blueCustom placeholder-greyPlaceholder' placeholder='email' name='email' onChange={handleChange} />
          <button type="submit" className="rounded-full py-3 px-8 text-2xl bg-gradient-to-b from-red to-blue hover:from-pink-500 hover:to-yellow-500 text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">Envoyer</button>
          <button onClick={handleClick} className='text-blue hover:underline md:pb-20'>Se connecter</button>
        </form>
        :
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
          {/* <InputText value={form.email} name='email' placeholder='E-mail' changeField={handleChange} />
          <InputText value={form.password} name='password' placeholder='Mot de passe' changeField={handleChange} /> */}
          <input className='text-right bg-white text-blueCustom pr-2 focus:outline-blueCustom placeholder-greyPlaceholder' placeholder='email' name='email' onChange={handleChange} />
          <input className=' text-right bg-white text-blueCustom pr-2 focus:outline-blueCustom placeholder-greyPlaceholder' type="password" placeholder='password' name='password' onChange={handleChange} />
          <button type="submit" className="rounded-full py-3 px-8 text-2xl bg-gradient-to-b from-red to-blue hover:from-pink-500 hover:to-yellow-500 text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">Connexion</button>
          <button onClick={handleClick} className='text-blue hover:underline md:pb-20'>Mot de passe oublié ?</button>
        </form>
      }
    </section>
  );
};

export default Login;